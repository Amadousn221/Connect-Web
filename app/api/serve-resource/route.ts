import { NextResponse } from 'next/server';

import { verifyDownloadToken } from '@/lib/download-token';

// Sert le fichier d'une ressource derrière un jeton signé 24 h (décision D3).
// Le jeton est émis par /api/download-resource après capture email.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get('token');
  if (!token) {
    return NextResponse.json({ error: 'Jeton manquant.' }, { status: 400 });
  }

  const payload = await verifyDownloadToken(token);
  if (!payload) {
    return NextResponse.json(
      { error: 'Lien invalide ou expiré. Redemandez la ressource depuis la page.' },
      { status: 403 },
    );
  }

  // Sécurité : n'accepter que des URLs du CDN d'assets Sanity.
  let assetUrl: URL;
  try {
    assetUrl = new URL(payload.assetUrl);
  } catch {
    return NextResponse.json({ error: 'Ressource invalide.' }, { status: 400 });
  }
  if (assetUrl.hostname !== 'cdn.sanity.io') {
    return NextResponse.json({ error: 'Ressource invalide.' }, { status: 400 });
  }

  const upstream = await fetch(assetUrl, { cache: 'no-store' });
  if (!upstream.ok || !upstream.body) {
    return NextResponse.json({ error: 'Fichier indisponible.' }, { status: 502 });
  }

  const headers = new Headers();
  headers.set(
    'Content-Type',
    upstream.headers.get('content-type') ?? 'application/octet-stream',
  );
  const len = upstream.headers.get('content-length');
  if (len) headers.set('Content-Length', len);
  headers.set(
    'Content-Disposition',
    `attachment; filename="${payload.filename.replace(/["\\\r\n]/g, '')}"`,
  );
  headers.set('Cache-Control', 'private, no-store');

  return new NextResponse(upstream.body, { status: 200, headers });
}
