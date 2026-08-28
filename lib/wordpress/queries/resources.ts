import { fetchGraphQL } from '../client';
import type { ResourceEntry, WpImage } from '../types';
import { IMAGE_FIELDS } from './_fragments';

// Requêtes « ressources » (resource). Architecture figée, contenu différé
// (P07/P08) : le hub Ressources ne part pas en ligne vide (couplé à l'Accueil A9).

const RESOURCE_FIELDS = /* GraphQL */ `
  fragment ResourceCore on Resource {
    id
    slug
    date
    featuredImage { node { ...ImageFields } }
    resourceFields {
      ressourceType
      ressourceTitleFr
      ressourceTitleEn
      ressourceExcerptFr
      ressourceExcerptEn
      ressourceBodyFr
      ressourceBodyEn
      ressourceCover { node { ...ImageFields } }
    }
  }
`;

const ALL_RESOURCES = /* GraphQL */ `
  ${IMAGE_FIELDS}
  ${RESOURCE_FIELDS}
  query AllResources {
    resources(first: 100, where: { status: PUBLISH }) {
      nodes { ...ResourceCore }
    }
  }
`;

const RESOURCE_BY_SLUG = /* GraphQL */ `
  ${IMAGE_FIELDS}
  ${RESOURCE_FIELDS}
  query ResourceBySlug($slug: ID!) {
    resource(id: $slug, idType: SLUG) { ...ResourceCore }
  }
`;

function mapImage(node: unknown): WpImage | null {
  const n = node as
    | { sourceUrl?: string; altText?: string | null; mediaDetails?: { width?: number; height?: number } }
    | null
    | undefined;
  if (!n?.sourceUrl) return null;
  return {
    sourceUrl: n.sourceUrl,
    altText: n.altText ?? null,
    width: n.mediaDetails?.width ?? null,
    height: n.mediaDetails?.height ?? null,
  };
}

function nullify(v: unknown): string | null {
  return typeof v === 'string' && v.trim() !== '' ? v : null;
}

function mapResource(node: Record<string, unknown>): ResourceEntry {
  const f = (node.resourceFields ?? {}) as Record<string, unknown>;
  return {
    id: String(node.id),
    slug: String(node.slug),
    date: String(node.date ?? ''),
    type: nullify(f.ressourceType),
    titleFr: nullify(f.ressourceTitleFr),
    titleEn: nullify(f.ressourceTitleEn),
    excerptFr: nullify(f.ressourceExcerptFr),
    excerptEn: nullify(f.ressourceExcerptEn),
    bodyFr: nullify(f.ressourceBodyFr),
    bodyEn: nullify(f.ressourceBodyEn),
    cover:
      mapImage((f.ressourceCover as { node?: unknown } | null)?.node) ??
      mapImage((node.featuredImage as { node?: unknown } | null)?.node),
  };
}

export async function getAllResources(): Promise<ResourceEntry[]> {
  const data = await fetchGraphQL<{ resources: { nodes: Record<string, unknown>[] } }>(
    ALL_RESOURCES,
    { tags: ['resources'] },
  );
  return data.resources.nodes.map(mapResource);
}

export async function getResourceBySlug(slug: string): Promise<ResourceEntry | null> {
  const data = await fetchGraphQL<{ resource: Record<string, unknown> | null }>(
    RESOURCE_BY_SLUG,
    { variables: { slug }, tags: ['resources', `resource:${slug}`] },
  );
  return data.resource ? mapResource(data.resource) : null;
}

export const _queries = { ALL_RESOURCES, RESOURCE_BY_SLUG };
