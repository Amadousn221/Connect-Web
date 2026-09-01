// Variables d'environnement Sanity, typées et validées.
// Lues côté serveur ET côté navigateur pour les `NEXT_PUBLIC_*`.

// Version d'API Sanity — constante FIGÉE (ne pas suivre "la dernière").
// La changer = potentiellement changer le comportement des requêtes GROQ.
// À rediscuter explicitement si on doit la bouger.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01';

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Variable d\'environnement manquante : NEXT_PUBLIC_SANITY_PROJECT_ID (voir .env.example)',
);

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Variable d\'environnement manquante : NEXT_PUBLIC_SANITY_DATASET (voir .env.example)',
);

// CDN Sanity : activé en production (contenu public, plus rapide),
// désactivé en dev pour voir les changements sans délai de cache.
export const useCdn = process.env.NODE_ENV === 'production';

// Token de LECTURE (rôle "Viewer"). Optionnel — utilisé uniquement pour le
// preview des brouillons (draft mode, Étape 3). Le dataset `production` est
// public : la lecture publique fonctionne sans token.
export const readToken = process.env.SANITY_API_READ_TOKEN;

function assertValue<T>(value: T | undefined, errorMessage: string): T {
  if (value === undefined) {
    throw new Error(errorMessage);
  }
  return value;
}
