import 'server-only';

import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

/**
 * Client Sanity avec DROITS D'ÉCRITURE. Utilisé uniquement dans les Route
 * Handlers server-side (`/api/download-resource`, etc.) pour créer/patcher
 * des documents `lead`.
 *
 * `import 'server-only'` garantit qu'un import accidentel dans un composant
 * client casse le build plutôt que d'exposer le token.
 *
 * `SANITY_API_WRITE_TOKEN` est requis — à créer dans Sanite (Manage → API →
 * Tokens, rôle « Editor ») et à définir dans Vercel + `.env.local`.
 */
const writeToken = process.env.SANITY_API_WRITE_TOKEN;

export function getWriteClient() {
  if (!writeToken) {
    throw new Error(
      'SANITY_API_WRITE_TOKEN manquant — impossible d\'écrire dans Sanity (voir .env.example).',
    );
  }
  return createClient({
    projectId,
    dataset,
    apiVersion,
    token: writeToken,
    useCdn: false,
    perspective: 'published',
  });
}

export const hasWriteToken = Boolean(writeToken);
