// Types de la copy figée (pages statiques M2). Source : maquettes `.dc.html`
// (elles-mêmes issues de P08). FR d'abord ; `content/en/*` en miroir pour M4.

export type Cta = { label: string; href: string };

export interface HeroSlide {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface TrustItem {
  title: string;
  body: string;
}

export interface NeedOption {
  key: string;
  label: string;
  hint: string;
  /** badge « capacité démontrée » (Odoo, automatisation) */
  capabilityBadge?: boolean;
  situation: string; // citation « votre situation »
  answer: string;
  delivers: string[];
  link: Cta;
}

export interface AudiencePanel {
  key: string;
  tab: string;
  title: string;
  body: string;
  need: string;
  build: string;
  cta: Cta;
  image: { src: string; alt: string };
  client: { name: string; note: string; toValidate?: boolean };
}

export interface OfferCard {
  title: string;
  body: string;
  href: string;
}

export interface RoadNode {
  label: string;
  desc: string;
}

export interface Trajectory {
  chain: string[]; // ["Site", "formulaire", "CRM"]
  body: string;
}

export interface CaseTeaser {
  category: string;
  name: string;
  body: string;
  href?: string;
  image?: { src: string; alt: string };
  /** carte sans visuel/validation en attente (ATTA) */
  pending?: boolean;
}

export interface ProofItem {
  title: string;
  body: string;
  toValidate?: boolean;
}

export interface ProcessStep {
  num: string;
  title: string;
  body: string;
  deliverable: string;
}

export interface FaqItem {
  q: string;
  a: string;
  /** paragraphe « à valider » (fourchettes prix) */
  toValidateNote?: string;
}
