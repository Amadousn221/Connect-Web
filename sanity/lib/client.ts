import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, readToken, useCdn } from '../env';

// Client PUBLIC — lecture du contenu publié. Aucun token (dataset public).
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
});

// Client de PREVIEW — lecture des brouillons avec le token "Viewer".
// Utilisé uniquement quand le draft mode est actif (Étape 3). Sans token,
// il se comporte comme le client public.
export const previewClient = client.withConfig({
  token: readToken,
  useCdn: false,
  perspective: 'drafts',
  ignoreBrowserTokenWarning: true,
  stega: false,
});

/**
 * Renvoie le bon client selon le contexte.
 * `preview: true` exige que `SANITY_API_READ_TOKEN` soit défini (Étape 3).
 */
export function getClient(preview = false) {
  if (preview) {
    if (!readToken) {
      throw new Error(
        'Preview demandé mais SANITY_API_READ_TOKEN est absent (voir .env.local).',
      );
    }
    return previewClient;
  }
  return client;
}
