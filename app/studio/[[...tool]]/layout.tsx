// Layout dédié au Studio (Server Component) : neutralise le title-template global
// et fournit les métadonnées propres au Studio (viewport, robots noindex, etc.).
export { metadata, viewport } from 'next-sanity/studio';

// Rendu statique : aucune donnée à précharger côté serveur. Porté par le layout
// (server) car `export const dynamic` est ignoré dans un composant `'use client'`.
export const dynamic = 'force-static';

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
