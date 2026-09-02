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

type SanityFetchOptions = {
  query: string;
  params?: Record<string, unknown>;
  /**
   * Tags de cache Next.js. La revalidation ciblée (`revalidateTag`) sera
   * déclenchée par le webhook Sanity à l'Étape 3.4. Ex. `['blogPost', slug]`.
   */
  tags?: string[];
  /** Fenêtre ISR en secondes. Défaut 60 (spec §5.3). `false` = jamais expirer. */
  revalidate?: number | false;
  /** Lecture des brouillons (draft mode). À passer depuis `draftMode()`. */
  preview?: boolean;
};

/**
 * Wrapper de lecture GROQ typé, avec cache Next.js.
 *
 * - Mode normal : ISR (`next: { revalidate, tags }`) — compatible
 *   `generateStaticParams` et revalidation par tag via webhook.
 * - Mode preview : `no-store`, client authentifié, aucun cache.
 *
 * ```ts
 * const post = await sanityFetch<BlogPostFull | null>({
 *   query: BLOG_POST_QUERY,
 *   params: { slug },
 *   tags: ['blogPost', `blogPost:${slug}`],
 * });
 * ```
 */
export async function sanityFetch<T>({
  query,
  params,
  tags = [],
  revalidate = 60,
  preview = false,
}: SanityFetchOptions): Promise<T> {
  const activeClient = getClient(preview);
  return activeClient.fetch<T>(query, params ?? {}, {
    ...(preview
      ? { cache: 'no-store' as const }
      : { next: { revalidate, tags } }),
  });
}
