// Layout dédié au Studio : neutralise le title-template global et fournit les
// métadonnées propres au Studio (viewport, robots noindex, etc.).
export { metadata, viewport } from 'next-sanity/studio';

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
