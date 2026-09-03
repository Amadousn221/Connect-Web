// Modèle de contenu commun aux 7 pages d'offre (archétype P07 B1–B11).
// Chaque page compose les sections qui la concernent (DECISION 04) : seules
// hero/pain/deliverables/process/faq/finalCta sont universelles ; le reste est
// optionnel (`why`, `benefits`, `editorial`, `featuredCase`, `relatedCase*`,
// `pricing`, `systemBridge`). Marketing : `featuredCase` et `pricing` absents
// (P08 — asymétrie de preuve) ; Sites d'entreprise : ni `why` ni `benefits`.

import type { Cta, OfferIconKey } from './types';

export interface OfferHeroContent {
  eyebrow: string; // nom de l'offre
  breadcrumb: string; // libellé fil d'Ariane (dernier segment)
  title: string;
  subtitle: string;
  ctas: [Cta, Cta];
  features: string[]; // 3 puces à coche
  /** image de fond `/assets/svc-*.jpg` ; absente = fond dégradé pétrole */
  image?: string;
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
  /** panneau latéral de faits (bordure orange) — optionnel */
  sideLabel?: string;
  sideFacts?: string[]; // le **gras** est rendu tel quel (markdown minimal **…**)
}

// P26 §11 — P-PROOF-CASE (remplace l'ancien FeaturedCaseContent à
// paragraphe unique) : Contexte → Problème → Solution → Résultat. `result`
// absent → le composant affiche `[RÉSULTAT — à confirmer]`, jamais un
// chiffre inventé. `services` = offres pour lesquelles ce cas est
// pertinent (ex. ATTA Africa sert Boutiques ET IA & automatisation) — sert
// à de futures phases de composition, pas de filtrage runtime pour l'instant.
export interface ProofCaseContent {
  eyebrow: string; // « Cas plein »
  name: string;
  category: string;
  context: string;
  problem: string;
  solution: string;
  /** jamais inventé — omettre plutôt qu'un chiffre plausible */
  result?: string;
  quote?: string;
  primaryCta?: Cta;
  externalUrl?: { label: string; href: string };
  /** capture réelle du projet (prioritaire sur le placeholder) */
  image?: { src: string; alt: string };
  /** visuel réel non fourni → placeholder « À valider » */
  visualPending?: boolean;
  visualNote?: string;
  services?: OfferIconKey[];
}

export interface PricingContent {
  eyebrow: string;
  title: string;
  body: string; // contient le placeholder [À PARTIR DE]
  cardLabel: string;
  pricePlaceholder: string; // « [À PARTIR DE] » — jamais un montant inventé (DECISION 10)
  /** préfixe devant le montant (défaut « à partir de ») ; '' = masqué */
  priceFrom?: string;
  /** P26 — offres 100 % sur-mesure (Plateformes/Odoo) : « selon périmètre »,
   * jamais de chiffre fixe (note tarification §1). Rendu à la place du prix
   * quand présent. */
  scopeNote?: string;
  includes: string[];
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
  why?: SectionIntro & { items: NumberedItem[] };

  featuredCase?: ProofCaseContent;
  /** noms des réalisations à montrer dans le carrousel (réutilise les teasers Accueil) */
  relatedCaseNames?: string[];
  relatedIntro?: SectionIntro;

  benefits?: SectionIntro & { items: NumberedItem[] };
  process: SectionIntro & { steps: Array<NumberedItem & { deliverable: string }> };

  pricing?: PricingContent;

  faq: SectionIntro & { items: { q: string; a: string }[] };

  /** P-CROSSSELL — bande fine, pas une section pleine (P26 §12). */
  systemBridge?: {
    eyebrow: string;
    title: string;
    body: string;
    link?: Cta;
    icon?: OfferIconKey;
  };

  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    ctas: [Cta, Cta];
    features: string[];
  };
}

// ─────────────────────────────────────────────────────────────────────────
// P26 §12 — Bibliothèque de patterns (Phase 1). Types de contenu des
// composants signature (`components/sections/patterns/*`). Pas encore
// intégrés à `OfferContent` — la composition réelle par page est Phase 2+ ;
// ces types servent la bibliothèque et sa route de prévisualisation isolée.
// ─────────────────────────────────────────────────────────────────────────

// P-JOURNEY (JourneyTimeline) — signature, fond encre.
export interface JourneyStep {
  key: string;
  label: string;
  detail?: string;
  icon?: OfferIconKey;
}
export interface JourneyHighlight {
  /** clé du step après lequel insérer le moment mis en valeur */
  afterStepKey: string;
  label: string;
  body: string;
}
export type JourneyTimelineContent = SectionIntro & {
  steps: JourneyStep[];
  highlight?: JourneyHighlight;
};

// P-BEFORE-AFTER (BeforeAfter) — signature (fond encre) ou section valeur
// (fond blanc) selon la page ; `tone` est une prop du composant, pas une
// donnée de contenu.
export type BeforeAfterContent = SectionIntro & {
  before: { label: string; items: string[] };
  after: { label: string; items: string[] };
};

// P-CONNECTED (ConnectedModules) — signature (page Odoo), fond encre.
// Version props-based du squelette de SystemRoad (Accueil, P25).
export interface ConnectedModule {
  key: string;
  label: string;
}
export interface ConnectedModuleProof {
  client: string;
  chain: string;
  /** jamais inventé — absent → `[RÉSULTAT — à confirmer]` */
  result?: string;
}
export type ConnectedModulesContent = SectionIntro & {
  modules: ConnectedModule[];
  proofs: ConnectedModuleProof[];
};

// P-COMPARE (ComparePanel) — fond blanc.
export interface ComparePanelColumn {
  label: string;
  /** une entrée par ligne de `rowLabels`, même index */
  rows: (string | boolean)[];
}
export type ComparePanelContent = SectionIntro & {
  rowLabels: string[];
  columns: ComparePanelColumn[];
};

// P-BENTO (BentoFeatures) — fond blanc, remplace la grille uniforme de
// DeliverableGrid.
export interface BentoItem {
  icon?: OfferIconKey;
  title: string;
  body: string;
  /** taille relative dans la grille bento ; défaut 'md' */
  size?: 'sm' | 'md' | 'lg';
}
export type BentoFeaturesContent = SectionIntro & {
  items: BentoItem[];
};

// P-STAT (BigStat) — fond blanc, chiffre réel uniquement, aucun compteur
// animé (cohérent avec StatsBlock, Accueil).
export interface BigStatContent {
  value: string;
  label: string;
  caption?: string;
}
