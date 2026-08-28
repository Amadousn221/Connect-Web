import { fetchGraphQL } from '../client';
import type { PortfolioItem, WpImage, WpTerm } from '../types';
import { IMAGE_FIELDS, TERM_FIELDS } from './_fragments';

// Requêtes « réalisations » (portfolio_item) — alimentent le hub Réalisations
// et son FilterBar (axes sector / offerCategory, DECISION 20).

const PORTFOLIO_FIELDS = /* GraphQL */ `
  fragment PortfolioCore on PortfolioItem {
    id
    slug
    sectors(first: 20) { nodes { ...SectorFields } }
    offerCategories(first: 20) { nodes { ...OfferCategoryFields } }
    featuredImage { node { ...ImageFields } }
    portfolioItemFields {
      realClientName
      realYear
      realTitleFr
      realTitleEn
      realSummaryFr
      realSummaryEn
      realThumbnail { node { ...ImageFields } }
      realExternalUrl
    }
  }
`;

const ALL_PORTFOLIO = /* GraphQL */ `
  ${IMAGE_FIELDS}
  ${TERM_FIELDS}
  ${PORTFOLIO_FIELDS}
  query AllPortfolioItems {
    portfolioItems(first: 100, where: { status: PUBLISH }) {
      nodes { ...PortfolioCore }
    }
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

function mapTerm(n: {
  slug: string;
  name: string;
  termI18n?: { termLabelEn?: string | null } | null;
}): WpTerm {
  return { slug: n.slug, name: n.name, labelEn: n.termI18n?.termLabelEn ?? null };
}

function nullify(v: unknown): string | null {
  return typeof v === 'string' && v.trim() !== '' ? v : null;
}

function mapPortfolioItem(node: Record<string, unknown>): PortfolioItem {
  const f = (node.portfolioItemFields ?? {}) as Record<string, unknown>;
  return {
    id: String(node.id),
    slug: String(node.slug),
    clientName: nullify(f.realClientName) ?? '',
    year: nullify(f.realYear),
    titleFr: nullify(f.realTitleFr),
    titleEn: nullify(f.realTitleEn),
    summaryFr: nullify(f.realSummaryFr),
    summaryEn: nullify(f.realSummaryEn),
    thumbnail:
      mapImage((f.realThumbnail as { node?: unknown } | null)?.node) ??
      mapImage((node.featuredImage as { node?: unknown } | null)?.node),
    sectors: (((node.sectors as { nodes?: unknown[] })?.nodes ?? []) as never[]).map(mapTerm),
    offerCategories: (
      ((node.offerCategories as { nodes?: unknown[] })?.nodes ?? []) as never[]
    ).map(mapTerm),
    externalUrl: nullify(f.realExternalUrl),
  };
}

export async function getAllPortfolioItems(): Promise<PortfolioItem[]> {
  const data = await fetchGraphQL<{ portfolioItems: { nodes: Record<string, unknown>[] } }>(
    ALL_PORTFOLIO,
    { tags: ['portfolio'] },
  );
  return data.portfolioItems.nodes.map(mapPortfolioItem);
}

export const _queries = { ALL_PORTFOLIO };
