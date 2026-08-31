import { NextResponse } from 'next/server';

// Endpoint du formulaire de contact — STUB (vague 4).
// Il accepte la requête, valide le minimum et journalise côté serveur.
//
// TODO: brancher la vraie destination (CRM / notification e-mail / Slack).
// Tant que ce n'est pas fait, aucune demande n'est réellement transmise à
// l'équipe — le formulaire affiche « Reçu » mais rien n'est envoyé ailleurs.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type ContactPayload = {
  nom?: string;
  email?: string;
  organisation?: string;
  objectif?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide.' }, { status: 400 });
  }

  const nom = body.nom?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!nom || !email || !message || !email.includes('@')) {
    return NextResponse.json(
      { error: 'Champs requis manquants ou invalides.' },
      { status: 422 },
    );
  }

  // TODO: remplacer ce log par l'envoi réel (CRM / e-mail).
  console.info('[contact] nouvelle demande', {
    nom,
    email,
    organisation: body.organisation ?? null,
    objectif: body.objectif ?? null,
    message,
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
