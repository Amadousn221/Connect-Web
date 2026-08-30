// Types de la copy figée (pages statiques M2). Source : maquettes `.dc.html`
// (elles-mêmes issues de P08). FR d'abord ; `content/en/*` en miroir pour M4.

export type Cta = { label: string; href: string };

// ── A1 — Hero (V2.1, Lot A) ────────────────────────────────────────────────
// Hero statique (plus de rotation) : DECISION 20 — formulation Option A.
export interface Hero {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctas: [Cta, Cta]; // primaire + secondaire (§14 : un seul CTA principal)
  trustLine: string[]; // « Réponse sous 24 h · Devis gratuit · … »
}

// Une tuile du composite visuel du Hero. `src` = capture réelle présente dans
// /public ; si absente, `missing` porte le libellé du visuel à fournir (rendu
// seulement en preview via le flag « À valider », jamais de mockup décoratif).
export interface HeroShot {
  src?: string;
  alt: string;
  missing?: string;
}

// Un logo client de la bande de confiance (§06.2). `src` = fichier détouré dans
// /public/assets/logos ; absent = placeholder [LOGO_MANQUANT] tant que le PO ne
// l'a pas fourni. Aucun faux logo n'est fabriqué.
export interface ClientLogo {
  name: string;
  src?: string;
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
