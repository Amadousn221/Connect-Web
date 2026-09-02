/**
 * Injecte un ou plusieurs objets JSON-LD dans un <script type="application/ld+json">.
 * Le contenu vient de `lib/seo/schema.ts` (données de confiance, sérialisées
 * côté serveur) — `JSON.stringify` échappe déjà `<` via `<` ci-dessous.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(obj).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  );
}
