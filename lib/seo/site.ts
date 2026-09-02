/**
 * URL de base publique du site, sans slash final.
 * Priorité : NEXT_PUBLIC_SITE_URL → URL de déploiement Vercel → localhost.
 * (`||` et non `??` : la variable peut être inlinée en chaîne vide au build.)
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') ||
  'http://localhost:3000'
).replace(/\/$/, '');

/** Construit une URL absolue à partir d'un chemin interne (`/blog/x`). */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
