import { NextResponse } from 'next/server';

// Endpoint du formulaire de contact.
//   - Resend  → e-mail transactionnel vers contact@connect-web.tech
//   - HubSpot → création / mise à jour du contact (gestion des prospects)
// Les deux canaux dégradent proprement si leur clé n'est pas configurée :
// la demande est toujours journalisée, et le formulaire ne renvoie une erreur
// que si Resend EST configuré mais échoue (l'e-mail est le canal critique).
//
// Variables d'environnement (Vercel → Settings → Environment Variables) :
//   RESEND_API_KEY          re_…            (obligatoire pour l'e-mail)
//   CONTACT_TO_EMAIL        contact@connect-web.tech   (défaut ci-dessous)
//   CONTACT_FROM_EMAIL      "Connect Web <site@connect-web.tech>"
//                           (domaine à vérifier dans Resend ; défaut = resend.dev)
//   HUBSPOT_ACCESS_TOKEN    pat-…          (Private App, scope crm.objects.contacts.write)

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type ContactPayload = {
  nom?: string;
  email?: string;
  organisation?: string;
  objectif?: string;
  message?: string;
};

const TO = process.env.CONTACT_TO_EMAIL ?? 'contact@connect-web.tech';
const FROM = process.env.CONTACT_FROM_EMAIL ?? 'Connect Web <onboarding@resend.dev>';

async function sendEmail(p: Required<ContactPayload>): Promise<'ok' | 'fail' | 'skip'> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return 'skip';

  const text = [
    `Nom          : ${p.nom}`,
    `E-mail       : ${p.email}`,
    `Organisation : ${p.organisation || '—'}`,
    `Objectif     : ${p.objectif || '—'}`,
    '',
    'Message :',
    p.message,
  ].join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: p.email,
        subject: `Nouvelle demande — ${p.nom}${p.organisation ? ` (${p.organisation})` : ''}`,
        text,
      }),
    });
    return res.ok ? 'ok' : 'fail';
  } catch {
    return 'fail';
  }
}

async function upsertHubspotContact(p: Required<ContactPayload>): Promise<void> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) return;

  const properties: Record<string, string> = {
    email: p.email,
    firstname: p.nom,
    hs_lead_status: 'NEW',
  };
  if (p.organisation) properties.company = p.organisation;
  if (p.message) properties.message = p.message;

  try {
    const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ properties }),
    });

    // 409 = le contact existe déjà → on le met à jour par e-mail.
    if (res.status === 409) {
      await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(p.email)}?idProperty=email`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ properties }),
        },
      );
    }
  } catch {
    // HubSpot ne doit jamais faire échouer la soumission.
  }
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide.' }, { status: 400 });
  }

  const nom = body.nom?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const message = body.message?.trim() ?? '';

  if (!nom || !email || !message || !email.includes('@')) {
    return NextResponse.json(
      { error: 'Champs requis manquants ou invalides.' },
      { status: 422 },
    );
  }

  const payload: Required<ContactPayload> = {
    nom,
    email,
    message,
    organisation: body.organisation?.trim() ?? '',
    objectif: body.objectif?.trim() ?? '',
  };

  const [emailResult] = await Promise.all([
    sendEmail(payload),
    upsertHubspotContact(payload),
  ]);

  console.info('[contact] demande reçue', {
    nom,
    email,
    organisation: payload.organisation || null,
    objectif: payload.objectif || null,
    email_status: emailResult,
  });

  // Resend configuré mais KO → on remonte l'erreur pour que le formulaire
  // propose le repli téléphone / WhatsApp.
  if (emailResult === 'fail') {
    return NextResponse.json(
      { error: "L'e-mail n'a pas pu être envoyé." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
