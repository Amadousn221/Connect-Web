import { client } from '@/sanity/lib/client';
import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env';
import { TEST_QUERY } from '@/sanity/lib/queries';

// PAGE TEMPORAIRE — validation de la connexion Sanity (Étape 0 v2).
// À SUPPRIMER à la fin de l'Étape 0. Aucun design volontairement : sortie JSON brute.
export const dynamic = 'force-dynamic';

export const metadata = {
  robots: { index: false, follow: false },
  title: 'debug-sanity',
};

export default async function DebugSanityPage() {
  let result: unknown = null;
  let error: string | null = null;

  try {
    result = await client.fetch(TEST_QUERY);
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  const report = {
    connexion: {
      projectId,
      dataset,
      apiVersion,
      useCdn,
      hasReadToken: Boolean(process.env.SANITY_API_READ_TOKEN),
    },
    testQuery: {
      ok: error === null,
      error,
      count: Array.isArray(result) ? result.length : null,
      result,
    },
  };

  return (
    <main style={{ padding: 24, fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>
      <h1 style={{ fontFamily: 'inherit' }}>debug-sanity (temporaire — Étape 0 v2)</h1>
      <p>
        Connexion attendue : projectId <code>qt5dnwqm</code>, dataset <code>production</code>.
        La query de test renvoie un tableau (vide au démarrage). Aucune erreur CORS ne doit
        apparaître dans la console du navigateur.
      </p>
      <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
        {JSON.stringify(report, null, 2)}
      </pre>
    </main>
  );
}
