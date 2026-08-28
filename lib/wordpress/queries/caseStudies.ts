import { fetchGraphQL } from '../client';
import type {
  CaseStudy,
  CaseStudyAutomationChapter,
  CaseStudyTestimonial,
  WpImage,
  WpTerm,
} from '../types';
import { IMAGE_FIELDS, TERM_FIELDS } from './_fragments';

// Requêtes « cas client » (case_study). Voir types.ts pour le contrat.
// Les champs conditionnels (automationChapter, result, testimonial, externalUrl,
// gallery) peuvent revenir null / [] : c'est géré au mapping, pas ignoré.

const CASE_STUDY_FIELDS = /* GraphQL */ `
  fragment CaseStudyCore on CaseStudy {
    id
    slug
    date
    sectors(first: 20) { nodes { ...SectorFields } }
    offerCategories(first: 20) { nodes { ...OfferCategoryFields } }
    featuredImage { node { ...ImageFields } }
    caseStudyFields {
      casClientName
      casTitleFr
      casTitleEn
      casTeaserFr
      casTeaserEn
      casContextFr
      casContextEn
      casApproachFr
      casApproachEn
      casPaymentMobileIntl
      casHeroImage { node { ...ImageFields } }
      casGallery { nodes { ...ImageFields } }
      casAutomationIntroFr
      casAutomationIntroEn
      casAutomationItems {
        casAutomationItemLabelFr
        casAutomationItemLabelEn
        casAutomationItemDetailFr
        casAutomationItemDetailEn
      }
      casResult {
        casResultValue
        casResultLabelFr
        casResultLabelEn
      }
      casTestimonialQuoteFr
      casTestimonialQuoteEn
      casTestimonialAuthor
      casTestimonialRoleFr
      casTestimonialRoleEn
      casExternalUrl
    }
  }
`;

const ALL_CASE_STUDIES = /* GraphQL */ `
  ${IMAGE_FIELDS}
  ${TERM_FIELDS}
  ${CASE_STUDY_FIELDS}
  query AllCaseStudies {
    caseStudies(first: 100, where: { status: PUBLISH }) {
      nodes { ...CaseStudyCore }
    }
  }
`;

const CASE_STUDY_BY_SLUG = /* GraphQL */ `
  ${IMAGE_FIELDS}
  ${TERM_FIELDS}
  ${CASE_STUDY_FIELDS}
  query CaseStudyBySlug($slug: ID!) {
    caseStudy(id: $slug, idType: SLUG) { ...CaseStudyCore }
  }
`;

// ── mapping ────────────────────────────────────────────────────────────────

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

function mapAutomationChapter(f: Record<string, unknown>): CaseStudyAutomationChapter | null {
  const introFr = nullify(f.casAutomationIntroFr);
  const introEn = nullify(f.casAutomationIntroEn);
  const rawItems = Array.isArray(f.casAutomationItems) ? f.casAutomationItems : [];
  const items = rawItems.map((it: Record<string, unknown>) => ({
    labelFr: nullify(it.casAutomationItemLabelFr),
    labelEn: nullify(it.casAutomationItemLabelEn),
    detailFr: nullify(it.casAutomationItemDetailFr),
    detailEn: nullify(it.casAutomationItemDetailEn),
  }));
  // Chapitre absent si aucune substance : bloc masqué côté composant.
  if (!introFr && !introEn && items.length === 0) return null;
  return { introFr, introEn, items };
}

function mapTestimonial(f: Record<string, unknown>): CaseStudyTestimonial | null {
  const quoteFr = nullify(f.casTestimonialQuoteFr);
  const quoteEn = nullify(f.casTestimonialQuoteEn);
  if (!quoteFr && !quoteEn) return null; // pas de guillemets sans citation
  return {
    quoteFr,
    quoteEn,
    author: nullify(f.casTestimonialAuthor),
    roleFr: nullify(f.casTestimonialRoleFr),
    roleEn: nullify(f.casTestimonialRoleEn),
  };
}

function mapCaseStudy(node: Record<string, unknown>): CaseStudy {
  const f = (node.caseStudyFields ?? {}) as Record<string, unknown>;

  const heroFromAcf = mapImage((f.casHeroImage as { node?: unknown } | null)?.node);
  const heroFromFeatured = mapImage(
    (node.featuredImage as { node?: unknown } | null)?.node,
  );

  const galleryNodes = ((f.casGallery as { nodes?: unknown[] } | null)?.nodes ?? []) as unknown[];

  const result = (Array.isArray(f.casResult) ? f.casResult : []).map(
    (r: Record<string, unknown>) => ({
      value: nullify(r.casResultValue),
      labelFr: nullify(r.casResultLabelFr),
      labelEn: nullify(r.casResultLabelEn),
    }),
  );

  return {
    id: String(node.id),
    slug: String(node.slug),
    clientName: (nullify(f.casClientName) ?? '') as string,
    titleFr: nullify(f.casTitleFr),
    titleEn: nullify(f.casTitleEn),
    teaserFr: nullify(f.casTeaserFr),
    teaserEn: nullify(f.casTeaserEn),
    contextFr: nullify(f.casContextFr),
    contextEn: nullify(f.casContextEn),
    approachFr: nullify(f.casApproachFr),
    approachEn: nullify(f.casApproachEn),
    heroImage: heroFromAcf ?? heroFromFeatured,
    sectors: (((node.sectors as { nodes?: unknown[] })?.nodes ?? []) as never[]).map(mapTerm),
    offerCategories: (
      ((node.offerCategories as { nodes?: unknown[] })?.nodes ?? []) as never[]
    ).map(mapTerm),
    paymentMobileIntl: Boolean(f.casPaymentMobileIntl),

    gallery: galleryNodes.map(mapImage).filter((x): x is WpImage => x !== null),
    automationChapter: mapAutomationChapter(f),
    result,
    testimonial: mapTestimonial(f),
    externalUrl: nullify(f.casExternalUrl),
  };
}

// ── API publique ──────────────────────────────────────────────────────────

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const data = await fetchGraphQL<{ caseStudies: { nodes: Record<string, unknown>[] } }>(
    ALL_CASE_STUDIES,
    { tags: ['case-studies'] },
  );
  return data.caseStudies.nodes.map(mapCaseStudy);
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const data = await fetchGraphQL<{ caseStudy: Record<string, unknown> | null }>(
    CASE_STUDY_BY_SLUG,
    { variables: { slug }, tags: ['case-studies', `case-study:${slug}`] },
  );
  return data.caseStudy ? mapCaseStudy(data.caseStudy) : null;
}

export const _queries = { ALL_CASE_STUDIES, CASE_STUDY_BY_SLUG };
