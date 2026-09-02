/**
 * Queries GROQ Blog & Ressources — consommées par les sous-étapes 3.2 / 3.3 / 3.4.
 *
 * Conventions :
 * - Projections serrées (aucun champ inutile renvoyé).
 * - References résolues avec `->`.
 * - Images renvoyées via `IMAGE_PROJECTION` : `asset._id` conservé pour que
 *   `urlFor` puisse appliquer hotspot/crop, + `lqip` (blur) et `dimensions`.
 * - `_updatedAt` renvoyé sur les documents complets (cache / debug).
 * - Contenu public uniquement : `publishedAt <= now()` exclut les articles
 *   post-datés. Les brouillons sont déjà exclus par la `perspective` du client.
 *
 * Le tri (`order(...)`) ne peut pas être un paramètre GROQ : il est interpolé
 * depuis une map figée (aucune entrée utilisateur), donc sans risque d'injection.
 */

import { sanityFetch } from './client';
import type {
  Author,
  BlogIndexResult,
  BlogOrderBy,
  BlogPostCard,
  BlogPostFull,
  CategoryWithCount,
  ResourceCardData,
  ResourceFull,
  ResourceIndexResult,
  ResourceOrderBy,
  ResourceType,
  TagWithCount,
} from './types';
import { BLOG_PER_PAGE, RESOURCE_PER_PAGE } from './constants';

// ── Fragments de projection ───────────────────────────────────────────────

const IMAGE_PROJECTION = /* groq */ `{
  "alt": coalesce(alt, ""),
  hotspot,
  crop,
  "asset": asset->{ _id, url, "lqip": metadata.lqip, "dimensions": metadata.dimensions }
}`;

const BLOG_CARD_PROJECTION = /* groq */ `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  readingTime,
  "coverImage": coverImage ${IMAGE_PROJECTION},
  "category": category->{ title, "slug": slug.current }
}`;

const RESOURCE_CARD_PROJECTION = /* groq */ `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  resourceType,
  deliveryMode,
  pagesOrDuration,
  downloadCount,
  "coverImage": coverImage ${IMAGE_PROJECTION},
  "category": category->{ title, "slug": slug.current }
}`;

/** Corps Portable Text : déréférence l'asset des `imageBlock`. */
const RICH_TEXT_PROJECTION = /* groq */ `body[]{
  ...,
  _type == "imageBlock" => {
    ...,
    "asset": asset->{ _id, url, "lqip": metadata.lqip, "dimensions": metadata.dimensions }
  }
}`;

const AUTHOR_PROJECTION = /* groq */ `{
  _id,
  _type,
  name,
  role,
  shortBio,
  "avatar": avatar ${IMAGE_PROJECTION},
  socialLinks
}`;

const SEO_PROJECTION = /* groq */ `seo{
  seoTitle,
  metaDescription,
  canonicalUrl,
  "ogImage": ogImage ${IMAGE_PROJECTION}
}`;

// ── Tris (interpolés, jamais des params) ──────────────────────────────────

const BLOG_ORDER: Record<BlogOrderBy, string> = {
  recent: 'publishedAt desc',
  popular: 'coalesce(viewCount, 0) desc, publishedAt desc',
  longest: 'coalesce(readingTime, 0) desc, publishedAt desc',
};

const RESOURCE_ORDER: Record<ResourceOrderBy, string> = {
  recent: 'publishedAt desc',
  popular: 'coalesce(downloadCount, 0) desc, publishedAt desc',
};

const PUBLISHED_BLOG = `_type == "blogPost" && defined(slug.current) && publishedAt <= now()`;
const PUBLISHED_RESOURCE = `_type == "resource" && defined(slug.current) && publishedAt <= now()`;

// ═══════════════════════════════════════════════════════════════════════════
// BLOG
// ═══════════════════════════════════════════════════════════════════════════

const BLOG_INDEX_FILTER = `${PUBLISHED_BLOG}
  && (!defined($categorySlug) || category->slug.current == $categorySlug)
  && (!defined($tagSlug) || $tagSlug in tags[]->slug.current)`;

/**
 * Catalogue Blog paginé + total pour la pagination. Filtres combinables (ET).
 */
export async function getBlogIndex(opts: {
  categorySlug?: string | null;
  tagSlug?: string | null;
  orderBy?: BlogOrderBy;
  page?: number;
  perPage?: number;
  preview?: boolean;
}): Promise<BlogIndexResult> {
  const { categorySlug = null, tagSlug = null, orderBy = 'recent', page = 1, preview } = opts;
  const perPage = opts.perPage ?? BLOG_PER_PAGE;
  const start = Math.max(0, (page - 1) * perPage);
  const end = start + perPage;
  const order = BLOG_ORDER[orderBy] ?? BLOG_ORDER.recent;

  const query = /* groq */ `{
    "items": *[${BLOG_INDEX_FILTER}] | order(${order}) [$start...$end] ${BLOG_CARD_PROJECTION},
    "total": count(*[${BLOG_INDEX_FILTER}])
  }`;

  return sanityFetch<BlogIndexResult>({
    query,
    params: { categorySlug, tagSlug, start, end },
    tags: ['blogPost'],
    preview,
  });
}

const BLOG_POST_QUERY = /* groq */ `*[_type == "blogPost" && slug.current == $slug][0]{
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  publishedAt,
  readingTime,
  excerpt,
  lede,
  keyPoints,
  "coverImage": coverImage ${IMAGE_PROJECTION},
  ${RICH_TEXT_PROJECTION},
  "author": author->${AUTHOR_PROJECTION},
  "category": category->{ _id, _type, title, "slug": slug.current, description },
  "tags": tags[]->{ _id, _type, title, "slug": slug.current },
  mainCta,
  "relatedResource": relatedResource[]->${RESOURCE_CARD_PROJECTION},
  "relatedCaseStudy": relatedCaseStudy->{ _id, _type, title, "slug": slug.current, client },
  "manualRelatedPosts": manualRelatedPosts[]->${BLOG_CARD_PROJECTION},
  ${SEO_PROJECTION},
  viewCount
}`;

/** Article complet par slug. `null` si inexistant. */
export async function getBlogPost(slug: string, preview?: boolean): Promise<BlogPostFull | null> {
  return sanityFetch<BlogPostFull | null>({
    query: BLOG_POST_QUERY,
    params: { slug },
    tags: ['blogPost', `blogPost:${slug}`],
    preview,
  });
}

/** Top articles par nombre de vues (sidebar « Articles populaires »). */
export async function getPopularPosts(limit = 5, preview?: boolean): Promise<BlogPostCard[]> {
  return sanityFetch<BlogPostCard[]>({
    query: /* groq */ `*[${PUBLISHED_BLOG}] | order(coalesce(viewCount, 0) desc, publishedAt desc)[0...$limit] ${BLOG_CARD_PROJECTION}`,
    params: { limit },
    tags: ['blogPost'],
    preview,
  });
}

/** Chaque catégorie de blog avec son nombre d'articles (sidebar / filtres). */
export async function getBlogCategoriesWithCount(preview?: boolean): Promise<CategoryWithCount[]> {
  return sanityFetch<CategoryWithCount[]>({
    query: /* groq */ `*[_type == "blogCategory"]{
      _id,
      title,
      "slug": slug.current,
      "count": count(*[_type == "blogPost" && category._ref == ^._id && publishedAt <= now()])
    } | order(coalesce(orderRank, 999) asc, title asc)`,
    tags: ['blogPost', 'blogCategory'],
    preview,
  });
}

/** Les tags les plus utilisés (sidebar / barre de filtres). */
export async function getTopTags(limit = 12, preview?: boolean): Promise<TagWithCount[]> {
  return sanityFetch<TagWithCount[]>({
    query: /* groq */ `*[_type == "blogTag"]{
      _id,
      title,
      "slug": slug.current,
      "count": count(*[_type == "blogPost" && ^._id in tags[]._ref && publishedAt <= now()])
    } | order(count desc, title asc)[0...$limit]`,
    params: { limit },
    tags: ['blogPost', 'blogTag'],
    preview,
  });
}

/**
 * Articles similaires (spec §7.2, priorité 2 — l'override manuel est géré
 * côté page). Cascade : même catégorie → au moins un tag commun → récents.
 * Renvoie au maximum 3 articles, dédupliqués.
 */
export async function getRelatedPosts(opts: {
  postId: string;
  categoryId?: string | null;
  tagIds?: string[];
  preview?: boolean;
}): Promise<BlogPostCard[]> {
  const { postId, categoryId = null, tagIds = [], preview } = opts;
  const picked: BlogPostCard[] = [];
  const seen = new Set<string>([postId]);

  const take = (rows: BlogPostCard[]) => {
    for (const row of rows) {
      if (picked.length >= 3) break;
      if (seen.has(row._id)) continue;
      seen.add(row._id);
      picked.push(row);
    }
  };

  if (categoryId) {
    take(
      await sanityFetch<BlogPostCard[]>({
        query: /* groq */ `*[${PUBLISHED_BLOG} && !(_id in $seen) && category._ref == $categoryId]
          | order(publishedAt desc)[0...3] ${BLOG_CARD_PROJECTION}`,
        params: { seen: [...seen], categoryId },
        tags: ['blogPost'],
        preview,
      }),
    );
  }

  if (picked.length < 3 && tagIds.length > 0) {
    take(
      await sanityFetch<BlogPostCard[]>({
        query: /* groq */ `*[${PUBLISHED_BLOG} && !(_id in $seen) && count(tags[@._ref in $tagIds]) > 0]
          | order(publishedAt desc)[0...3] ${BLOG_CARD_PROJECTION}`,
        params: { seen: [...seen], tagIds },
        tags: ['blogPost'],
        preview,
      }),
    );
  }

  if (picked.length < 3) {
    take(
      await sanityFetch<BlogPostCard[]>({
        query: /* groq */ `*[${PUBLISHED_BLOG} && !(_id in $seen)]
          | order(publishedAt desc)[0...3] ${BLOG_CARD_PROJECTION}`,
        params: { seen: [...seen] },
        tags: ['blogPost'],
        preview,
      }),
    );
  }

  return picked;
}

/** Derniers articles publiés (sidebar des pages Ressources). */
export async function getRecentPosts(limit = 3, preview?: boolean): Promise<BlogPostCard[]> {
  return sanityFetch<BlogPostCard[]>({
    query: /* groq */ `*[${PUBLISHED_BLOG}] | order(publishedAt desc)[0...$limit] ${BLOG_CARD_PROJECTION}`,
    params: { limit },
    tags: ['blogPost'],
    preview,
  });
}

/** Tous les slugs d'articles publiés — pour `generateStaticParams`. */
export async function getBlogSlugs(): Promise<string[]> {
  return sanityFetch<string[]>({
    query: /* groq */ `*[${PUBLISHED_BLOG}].slug.current`,
    tags: ['blogPost'],
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// RESSOURCES
// ═══════════════════════════════════════════════════════════════════════════

const RESOURCE_INDEX_FILTER = `${PUBLISHED_RESOURCE}
  && (!defined($categorySlug) || category->slug.current == $categorySlug)
  && (!defined($resourceType) || resourceType == $resourceType)`;

/** Catalogue Ressources paginé + total. */
export async function getResourceIndex(opts: {
  categorySlug?: string | null;
  resourceType?: ResourceType | null;
  orderBy?: ResourceOrderBy;
  page?: number;
  perPage?: number;
  preview?: boolean;
}): Promise<ResourceIndexResult> {
  const { categorySlug = null, resourceType = null, orderBy = 'recent', page = 1, preview } = opts;
  const perPage = opts.perPage ?? RESOURCE_PER_PAGE;
  const start = Math.max(0, (page - 1) * perPage);
  const end = start + perPage;
  const order = RESOURCE_ORDER[orderBy] ?? RESOURCE_ORDER.recent;

  const query = /* groq */ `{
    "items": *[${RESOURCE_INDEX_FILTER}] | order(${order}) [$start...$end] ${RESOURCE_CARD_PROJECTION},
    "total": count(*[${RESOURCE_INDEX_FILTER}])
  }`;

  return sanityFetch<ResourceIndexResult>({
    query,
    params: { categorySlug, resourceType, start, end },
    tags: ['resource'],
    preview,
  });
}

const RESOURCE_QUERY = /* groq */ `*[_type == "resource" && slug.current == $slug][0]{
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  resourceType,
  deliveryMode,
  "downloadFile": select(
    deliveryMode == "download" && defined(downloadFile.asset) => downloadFile.asset->{
      originalFilename, extension, size
    },
    null
  ),
  "onlineUrl": select(deliveryMode == "online" => onlineUrl, null),
  pagesOrDuration,
  prerequisites,
  program[]{ _key, text },
  confirmationMessage,
  "coverImage": coverImage ${IMAGE_PROJECTION},
  ${RICH_TEXT_PROJECTION},
  "author": author->${AUTHOR_PROJECTION},
  "category": category->{ _id, _type, title, "slug": slug.current, description },
  secondaryCta,
  "relatedPosts": relatedPosts[]->${BLOG_CARD_PROJECTION},
  "relatedResources": relatedResources[]->${RESOURCE_CARD_PROJECTION},
  ${SEO_PROJECTION},
  downloadCount
}`;

/** Ressource complète par slug. `null` si inexistante. */
export async function getResource(slug: string, preview?: boolean): Promise<ResourceFull | null> {
  return sanityFetch<ResourceFull | null>({
    query: RESOURCE_QUERY,
    params: { slug },
    tags: ['resource', `resource:${slug}`],
    preview,
  });
}

/**
 * URL réelle du fichier téléchargeable d'une ressource.
 *
 * ⚠️ À N'APPELER QUE CÔTÉ SERVEUR (endpoint `/api/download-resource`, Étape 3.4),
 * après capture email. Ne jamais exposer ce résultat dans une page publique —
 * c'est ce qui permet la stratégie « lien signé » (décision D3).
 */
export async function getResourceDownloadUrl(slug: string): Promise<string | null> {
  return sanityFetch<string | null>({
    query: /* groq */ `*[_type == "resource" && slug.current == $slug][0].downloadFile.asset->url`,
    params: { slug },
    tags: [`resource:${slug}`],
  });
}

/** Top ressources par téléchargements (sidebar « Les plus téléchargées »). */
export async function getTopDownloaded(limit = 5, preview?: boolean): Promise<ResourceCardData[]> {
  return sanityFetch<ResourceCardData[]>({
    query: /* groq */ `*[${PUBLISHED_RESOURCE}] | order(coalesce(downloadCount, 0) desc, publishedAt desc)[0...$limit] ${RESOURCE_CARD_PROJECTION}`,
    params: { limit },
    tags: ['resource'],
    preview,
  });
}

/**
 * Ressources similaires (spec §7.2). Même thématique → repli sur les plus
 * récentes. Max 3, dédupliquées.
 */
export async function getRelatedResources(opts: {
  resourceId: string;
  categoryId?: string | null;
  preview?: boolean;
}): Promise<ResourceCardData[]> {
  const { resourceId, categoryId = null, preview } = opts;
  const picked: ResourceCardData[] = [];
  const seen = new Set<string>([resourceId]);

  const take = (rows: ResourceCardData[]) => {
    for (const row of rows) {
      if (picked.length >= 3) break;
      if (seen.has(row._id)) continue;
      seen.add(row._id);
      picked.push(row);
    }
  };

  if (categoryId) {
    take(
      await sanityFetch<ResourceCardData[]>({
        query: /* groq */ `*[${PUBLISHED_RESOURCE} && !(_id in $seen) && category._ref == $categoryId]
          | order(coalesce(downloadCount, 0) desc, publishedAt desc)[0...3] ${RESOURCE_CARD_PROJECTION}`,
        params: { seen: [...seen], categoryId },
        tags: ['resource'],
        preview,
      }),
    );
  }

  if (picked.length < 3) {
    take(
      await sanityFetch<ResourceCardData[]>({
        query: /* groq */ `*[${PUBLISHED_RESOURCE} && !(_id in $seen)]
          | order(publishedAt desc)[0...3] ${RESOURCE_CARD_PROJECTION}`,
        params: { seen: [...seen] },
        tags: ['resource'],
        preview,
      }),
    );
  }

  return picked;
}

/** Dernières ressources publiées (sidebar des pages Blog). */
export async function getRecentResources(limit = 3, preview?: boolean): Promise<ResourceCardData[]> {
  return sanityFetch<ResourceCardData[]>({
    query: /* groq */ `*[${PUBLISHED_RESOURCE}] | order(publishedAt desc)[0...$limit] ${RESOURCE_CARD_PROJECTION}`,
    params: { limit },
    tags: ['resource'],
    preview,
  });
}

/** Chaque thématique de ressource avec son nombre de ressources. */
export async function getResourceCategoriesWithCount(preview?: boolean): Promise<CategoryWithCount[]> {
  return sanityFetch<CategoryWithCount[]>({
    query: /* groq */ `*[_type == "resourceCategory"]{
      _id,
      title,
      "slug": slug.current,
      "count": count(*[_type == "resource" && category._ref == ^._id && publishedAt <= now()])
    } | order(coalesce(orderRank, 999) asc, title asc)`,
    tags: ['resource', 'resourceCategory'],
    preview,
  });
}

/** Nombre de ressources par type (sidebar « Types de ressources »). */
export async function getResourceTypeCounts(
  preview?: boolean,
): Promise<{ resourceType: ResourceType; count: number }[]> {
  // GROQ ne groupe pas nativement : on récupère la liste des types et on agrège en JS.
  const rows = await sanityFetch<ResourceType[]>({
    query: /* groq */ `*[${PUBLISHED_RESOURCE} && defined(resourceType)].resourceType`,
    tags: ['resource'],
    preview,
  });
  const counts = new Map<ResourceType, number>();
  for (const value of rows) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return [...counts.entries()].map(([resourceType, count]) => ({ resourceType, count }));
}

/** Tous les slugs de ressources publiées — pour `generateStaticParams`. */
export async function getResourceSlugs(): Promise<string[]> {
  return sanityFetch<string[]>({
    query: /* groq */ `*[${PUBLISHED_RESOURCE}].slug.current`,
    tags: ['resource'],
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// AUTEUR
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Document Auteur (singleton — Amadou Diallo, spec §10). Le plus ancien créé,
 * pour rester déterministe si un doublon apparaît. `null` tant qu'aucun
 * document Author n'a été créé dans le Studio.
 */
export async function getAuthor(preview?: boolean): Promise<Author | null> {
  return sanityFetch<Author | null>({
    query: /* groq */ `*[_type == "author"] | order(_createdAt asc)[0]{
      _id,
      _type,
      name,
      role,
      shortBio,
      longBio[]{ ... },
      "avatar": avatar ${IMAGE_PROJECTION},
      socialLinks
    }`,
    tags: ['author'],
    preview,
  });
}
