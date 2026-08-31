import { NextResponse } from 'next/server';

// Endpoint no-op : le câblage vers l'outil CRM / notification est le Milestone
// M5 (choix de l'outil encore ouvert côté PO). En attendant, on accuse
// réception pour que l'état « succès » du formulaire soit réel, pas simulé.
// Aucune persistance — seulement une trace dans les logs serveur (Vercel).
export const runtime = 'nodejs';

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot : si rempli, on répond OK sans rien faire (on ne le dit pas au bot).
  if (typeof body._gotcha === 'string' && body._gotcha.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const message = String(body.message ?? '').trim();
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 422 });
  }

  console.log('[contact] demande reçue', {
    name,
    email,
    organisation: body.organisation ?? null,
    phone: body.phone ?? null,
    projectType: body.projectType ?? null,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
