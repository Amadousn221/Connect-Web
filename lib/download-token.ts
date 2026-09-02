import 'server-only';

import { SignJWT, jwtVerify } from 'jose';

/**
 * Jetons de téléchargement signés (décision D3 — liens temporaires 24 h).
 * Secret : `DOWNLOAD_LINK_SECRET`, repli sur `SANITY_REVALIDATE_SECRET`
 * (déjà défini) pour fonctionner sans variable supplémentaire.
 */
const rawSecret = process.env.DOWNLOAD_LINK_SECRET || process.env.SANITY_REVALIDATE_SECRET;
const key = rawSecret ? new TextEncoder().encode(rawSecret) : null;

export const canSignDownloads = Boolean(key);

export type DownloadTokenPayload = {
  leadId: string;
  resourceId: string;
  /** URL de l'asset Sanity à streamer. */
  assetUrl: string;
  /** Nom de fichier proposé au téléchargement. */
  filename: string;
};

export async function signDownloadToken(payload: DownloadTokenPayload): Promise<string> {
  if (!key) throw new Error('DOWNLOAD_LINK_SECRET / SANITY_REVALIDATE_SECRET manquant.');
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(key);
}

export async function verifyDownloadToken(token: string): Promise<DownloadTokenPayload | null> {
  if (!key) return null;
  try {
    const { payload } = await jwtVerify(token, key);
    if (
      typeof payload.leadId === 'string' &&
      typeof payload.resourceId === 'string' &&
      typeof payload.assetUrl === 'string' &&
      typeof payload.filename === 'string'
    ) {
      return {
        leadId: payload.leadId,
        resourceId: payload.resourceId,
        assetUrl: payload.assetUrl,
        filename: payload.filename,
      };
    }
    return null;
  } catch {
    return null;
  }
}
