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

// ── A3 — « Ce qu'on construit » : sélecteur interactif (restauré — version
//    d'avant la refonte V2.1 ; la variante tableau statique du Lot C est écartée).
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

// ── Pour qui (V2.1, Lot D) — case statique de la grille 6 segments
export interface WhoForCell {
  name: string;
  need: string; // « Besoin »
  build: string; // « On construit »
}

// ── A5 — Section Services (V2.1, Lot B — DECISION 23) ──────────────────────
// Un lien de carte de service (sous-service en tag, ou micro-CTA). `todo` =
// page pas encore créée → rendu non cliquable + repère « À valider » (preview).
export interface ServiceLink {
  label: string;
  href: string;
  todo?: boolean;
}

// `variant` pilote le rendu (ServiceCard) :
//  - parent    : carte large « Conception et développement web » (3 sous-services)
//  - primary   : carte Niveau 1 standard (Logiciels & applications web)
//  - secondary : carte Niveau 2 compacte (ERP/CRM · IA · Marketing)
//  - conseil   : porte d'entrée, pleine largeur, ton distinct
export interface ServiceCardData {
  num?: string;
  variant: 'parent' | 'primary' | 'secondary' | 'conseil';
  title: string;
  description: string;
  subServices?: ServiceLink[]; // max 3 (DECISION 23)
  proof?: string; // « Preuve : … » ou « Capacité — … »
  tech?: string; // ligne technos, ex. « Odoo · HubSpot »
  image?: { src: string; alt: string };
  cta: ServiceLink;
}

// ── A5 (wedge) — un des 3 points « ce qui nous rend irremplaçable »
export interface WedgePoint {
  title: string; // sous-titre en gras
  body: string;
}

// ── A8 (chiffres) — une tuile ; données FACT déclarées PO (DECISION 22)
export interface StatTile {
  label: string; // « EXPÉRIENCE »
  value: string; // « 3 ans »
  caption: string;
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

// ── A7 — Cas phares (V2.1, Lot D) — carte du slider ProjectSlider (§09.2)
export interface ProjectCardData {
  client: string;
  sector: string;
  title: string; // H3
  solutionTag: string;
  /** ligne résultat — non rendue si absente (jamais de placeholder côté front) */
  result?: string;
  image?: { src: string; alt: string };
  /** libellé de la capture à fournir (rendu en preview uniquement) */
  imageMissing?: string;
  cta: ServiceLink; // « Voir l'étude de cas → » ; todo = page inexistante
}

// ── A10 — Méthode (V2.1, Lot C) — 3 étapes, <ol>
export interface MethodStep {
  num: string;
  title: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
  /** paragraphe « à valider » (fourchettes prix) */
  toValidateNote?: string;
}
