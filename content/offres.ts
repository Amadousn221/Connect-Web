// Modèle de contenu commun aux 7 pages d'offre (archétype P07 B1–B11).
// Chaque page compose les sections qui la concernent (DECISION 04) : toutes les
// clés sauf hero/pain/deliverables/why/process/faq/finalCta sont optionnelles.
// Marketing : `featuredCase` et `pricing` absents (P08 — asymétrie de preuve).

import type { Cta } from './types';

export interface OfferHeroContent {
  eyebrow: string; // nom de l'offre
  breadcrumb: string; // libellé fil d'Ariane (dernier segment)
  title: string;
  subtitle: string;
  ctas: [Cta, Cta];
  features: string[]; // 3 puces à coche
  image: string; // /assets/svc-*.jpg
}

export interface NumberedItem {
  title: string;
  body: string;
}

export interface DeliverableItem {
  title: string;
  body: string;
}

export interface EditorialContent {
  eyebrow: string;
  title: string;
  /** paragraphes ; un objet {h3} insère un sous-titre */
  blocks: Array<string | { h3: string }>;
  link?: Cta;
  sideLabel: string;
  sideFacts: string[]; // le **gras** est rendu tel quel (markdown minimal **…**)
}

export interface FeaturedCaseContent {
  eyebrow: string; // « Cas plein »
  name: string;
  category: string;
  body: string;
  quote: string;
  primaryCta: Cta;
  externalUrl?: { label: string; href: string };
  /** visuel réel non fourni → placeholder « À valider » */
  visualPending?: boolean;
  visualNote?: string;
}

export interface PricingContent {
  eyebrow: string;
  title: string;
  body: string; // contient le placeholder [À PARTIR DE]
  cardLabel: string;
  pricePlaceholder: string; // « [À PARTIR DE] » — jamais un montant inventé (DECISION 10)
  includes: string[];
  cta: Cta;
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  lead?: string;
}

export interface OfferContent {
  slug: string;
  meta: { title: string; description: string };

  hero: OfferHeroContent;

  pain: SectionIntro & { items: NumberedItem[] };
  deliverables: SectionIntro & { items: DeliverableItem[]; toolsLabel?: string; tools?: string[] };
  editorial?: EditorialContent;
  why: SectionIntro & { items: NumberedItem[] };

  featuredCase?: FeaturedCaseContent;
  /** slugs des réalisations à montrer dans le carrousel (réutilise les teasers Accueil) */
  relatedCaseNames?: string[];
  relatedIntro?: SectionIntro;

  benefits: SectionIntro & { items: NumberedItem[] };
  process: SectionIntro & { steps: Array<NumberedItem & { deliverable: string }> };

  pricing?: PricingContent;

  faq: SectionIntro & { items: { q: string; a: string }[] };

  systemBridge?: {
    eyebrow: string;
    title: string;
    body: string;
    link: Cta;
  };

  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    ctas: [Cta, Cta];
    features: string[];
  };
}
