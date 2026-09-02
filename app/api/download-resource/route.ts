import { NextResponse } from 'next/server';

import { getResourceForLead } from '@/sanity/lib/queries';
import { getWriteClient, hasWriteToken } from '@/sanity/lib/serverClient';
import { canSignDownloads, signDownloadToken } from '@/lib/download-token';
import { sendResourceEmail } from '@/lib/email';
import { clientIp, rateLimit } from '@/lib/rate-limit';
import { absoluteUrl } from '@/lib/seo/site';

// Capture email d'une ressource « à télécharger » (décision D1/D3).
// Env requises : SANITY_API_WRITE_TOKEN, RESEND_API_KEY, CONTACT_FROM_EMAIL.
// Dégradation propre si absentes (comme /api/contact).

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FALLBACK_CONFIRMATION =
  'Merci ! Un email avec le lien de téléchargement vient de vous être envoyé. Vérifiez votre boîte de réception (et éventuellement les spams).';

type Payload = {
  slug?: string;
  name?: string;
  email?: string;
  org?: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  // 1. Rate-limit
  if (!rateLimit(`dl:${clientIp(request)}`, 5, 60_000)) {
    return NextResponse.json({ error: 'Trop de demandes. Réessayez dans une minute.' }, { status: 429 });
  }

  // 2. Parse + valide
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide.' }, { status: 400 });
  }

  const name = body.name?.trim() ?? '';
  const email = body.email?.trim().toLowerCase() ?? '';
  const org = body.org?.trim() ?? '';
  const slug = body.slug?.trim() ?? '';

  if (!name || !slug || !EMAIL_RE.test(email) || body.consent !== true) {
    return NextResponse.json(
      { error: 'Champs requis manquants ou invalides (nom, email valide, consentement, ressource).' },
      { status: 400 },
    );
  }

  if (!hasWriteToken) {
    return NextResponse.json(
      { error: 'Service de téléchargement momentanément indisponible.' },
      { status: 503 },
    );
  }

  // 3. Ressource
  const resource = await getResourceForLead(slug);
  if (!resource || resource.deliveryMode !== 'download') {
    return NextResponse.json({ error: 'Ressource introuvable.' }, { status: 404 });
  }

  const write = getWriteClient();

  // 4. Lead
  let leadId: string;
  try {
    const lead = await write.create({
      _type: 'lead',
      nom: name,
      email,
      organisation: org || undefined,
      resourceRef: { _type: 'reference', _ref: resource._id },
      resourceSnapshot: {
        title: resource.title,
        slug: resource.slug,
        resourceType: resource.resourceType,
      },
      consentRgpd: true,
      submittedAt: new Date().toISOString(),
      source: 'resource-download',
      emailSent: false,
    });
    leadId = lead._id;
  } catch (err) {
    console.error('[download-resource] création lead échouée', err);
    return NextResponse.json({ error: "Impossible d'enregistrer la demande." }, { status: 500 });
  }

  // 5. Lien signé (24 h)
  let downloadUrl: string | null = null;
  if (resource.file?.url && canSignDownloads) {
    try {
      const token = await signDownloadToken({
        leadId,
        resourceId: resource._id,
        assetUrl: resource.file.url,
        filename: resource.file.originalFilename ?? `${resource.slug}.pdf`,
      });
      downloadUrl = absoluteUrl(`/api/serve-resource?token=${encodeURIComponent(token)}`);
    } catch (err) {
      console.error('[download-resource] signature du lien échouée', err);
    }
  }

  // 6. Email
  const emailResult = await sendResourceEmail({
    to: email,
    name,
    resourceTitle: resource.title,
    downloadUrl,
  });

  // 7. Mise à jour du lead
  if (emailResult === 'ok') {
    try {
      await write.patch(leadId).set({ emailSent: true, emailSentAt: new Date().toISOString() }).commit();
    } catch (err) {
      console.error('[download-resource] patch lead échoué', err);
    }
  }

  // 8. Réponse
  if (emailResult === 'fail') {
    return NextResponse.json(
      { error: "L'email n'a pas pu être envoyé. Réessayez, ou écrivez-nous directement." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    success: true,
    message: resource.confirmationMessage || FALLBACK_CONFIRMATION,
  });
}
