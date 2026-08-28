// Types du contenu WordPress, côté Next.
// Miroir du modèle P10 §10.1 / ADR-002. Les champs marqués `| null` sont les
// champs RÉELLEMENT optionnels : quand ils sont absents dans WordPress, ils
// arrivent à `null` (jamais chaîne vide) et le composant qui les consomme
// masque tout son bloc (règle d'intégrité P10/P22).
//
// ⚠️ À réconcilier avec P10 §10.1 (non fourni au démarrage) — voir
//    wordpress/mu-plugins/.../inc/acf-field-groups.php.

export type Locale = 'fr' | 'en';

export interface WpImage {
  sourceUrl: string;
  altText: string | null;
  width: number | null;
  height: number | null;
}

export interface WpTerm {
  slug: string;
  /** libellé FR = name du terme */
  name: string;
  /** libellé EN = champ ACF term_label_en (peut être null) */
  labelEn: string | null;
}

/** Paire bilingue résolue pour une locale donnée (helper de mapping). */
export interface Bilingual {
  fr: string | null;
  en: string | null;
}

// ── case_study ──────────────────────────────────────────────────────────────

export interface CaseStudyResultMetric {
  value: string | null;
  labelFr: string | null;
  labelEn: string | null;
}

export interface CaseStudyAutomationItem {
  labelFr: string | null;
  labelEn: string | null;
  detailFr: string | null;
  detailEn: string | null;
}

export interface CaseStudyAutomationChapter {
  introFr: string | null;
  introEn: string | null;
  items: CaseStudyAutomationItem[];
}

export interface CaseStudyTestimonial {
  quoteFr: string | null;
  quoteEn: string | null;
  author: string | null;
  roleFr: string | null;
  roleEn: string | null;
}

export interface CaseStudy {
  id: string;
  slug: string;
  clientName: string;
  titleFr: string | null;
  titleEn: string | null;
  teaserFr: string | null;
  teaserEn: string | null;
  contextFr: string | null;
  contextEn: string | null;
  approachFr: string | null;
  approachEn: string | null;
  heroImage: WpImage | null;
  sectors: WpTerm[];
  offerCategories: WpTerm[];
  paymentMobileIntl: boolean;

  // — champs conditionnels : null / [] quand absents —
  gallery: WpImage[];
  automationChapter: CaseStudyAutomationChapter | null;
  result: CaseStudyResultMetric[];
  testimonial: CaseStudyTestimonial | null;
  externalUrl: string | null;
}

// ── portfolio_item ─────────────────────────────────────────────────────────

export interface PortfolioItem {
  id: string;
  slug: string;
  clientName: string;
  year: string | null;
  titleFr: string | null;
  titleEn: string | null;
  summaryFr: string | null;
  summaryEn: string | null;
  thumbnail: WpImage | null;
  sectors: WpTerm[];
  offerCategories: WpTerm[];
  externalUrl: string | null;
}

// ── team_member ────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  roleFr: string | null;
  roleEn: string | null;
  bioFr: string | null;
  bioEn: string | null;
  photo: WpImage | null;
}

// ── resource ───────────────────────────────────────────────────────────────

export interface ResourceEntry {
  id: string;
  slug: string;
  type: string | null;
  titleFr: string | null;
  titleEn: string | null;
  excerptFr: string | null;
  excerptEn: string | null;
  bodyFr: string | null;
  bodyEn: string | null;
  cover: WpImage | null;
  date: string;
}
