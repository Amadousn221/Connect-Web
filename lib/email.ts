import 'server-only';

import { SITE_URL } from '@/lib/seo/site';

/**
 * Envoi d'email transactionnel via l'API Resend (fetch direct — même approche
 * que `app/api/contact/route.ts`, pas de SDK).
 *
 * Env : `RESEND_API_KEY` (obligatoire), `CONTACT_FROM_EMAIL` (expéditeur,
 * domaine vérifié dans Resend ; repli sur le bac à sable resend.dev).
 */
const FROM = process.env.CONTACT_FROM_EMAIL ?? 'Connect Web <onboarding@resend.dev>';

export const canSendEmail = Boolean(process.env.RESEND_API_KEY);

type SendResult = 'ok' | 'fail' | 'skip';

export async function sendResourceEmail(opts: {
  to: string;
  name: string;
  resourceTitle: string;
  downloadUrl: string | null;
}): Promise<SendResult> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return 'skip';

  const { to, name, resourceTitle, downloadUrl } = opts;
  const firstName = name.split(' ')[0] || name;

  const cta = downloadUrl
    ? `<p style="margin:24px 0"><a href="${downloadUrl}" style="display:inline-block;background:#e8612a;color:#fff;padding:12px 22px;text-decoration:none;font-weight:600">Télécharger la ressource</a></p>
       <p style="font-size:13px;color:#555">Ce lien est valable 24 heures.</p>`
    : `<p style="margin:24px 0;color:#555">Nous préparons votre fichier et revenons vers vous très vite.</p>`;

  const html = `<!doctype html><html><body style="font-family:Helvetica,Arial,sans-serif;color:#0d0d0d;line-height:1.6">
    <p style="font-weight:600;font-size:18px">Connect Web</p>
    <p>Bonjour ${escapeHtml(firstName)},</p>
    <p>Merci de votre intérêt. Voici votre ressource : <strong>${escapeHtml(resourceTitle)}</strong>.</p>
    ${cta}
    <p style="margin-top:32px;color:#555">L'équipe Connect Web<br>${SITE_URL.replace(/^https?:\/\//, '')}</p>
  </body></html>`;

  const text = [
    `Bonjour ${firstName},`,
    '',
    `Merci de votre intérêt. Voici votre ressource : ${resourceTitle}.`,
    '',
    downloadUrl
      ? `Télécharger (lien valable 24 h) : ${downloadUrl}`
      : 'Nous préparons votre fichier et revenons vers vous très vite.',
    '',
    "L'équipe Connect Web",
  ].join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [to],
        subject: `Votre ressource : ${resourceTitle}`,
        html,
        text,
      }),
    });
    return res.ok ? 'ok' : 'fail';
  } catch {
    return 'fail';
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
