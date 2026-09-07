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

// ── S07 — « Du site au système » : un module de l'écosystème, exploré par
// onglets (Refonte Accueil, Lot 2). Aucune référence client ici — que des
// possibilités selon le projet.
export interface SystemModule {
  key: string;
  name: string;
  icon: 'web' | 'crm' | 'erp' | 'automation' | 'reporting';
  role: string; // rôle concret, une phrase
  uses: string[]; // 2–3 usages compréhensibles
  exchange: string; // ce qu'il peut échanger avec les autres outils
}

// ── A5 — Section Services (V2.1, Lot B — DECISION 23) ──────────────────────
// Un lien de carte de service (sous-service en tag, ou micro-CTA). `todo` =
// page pas encore créée → rendu non cliquable + repère « À valider » (preview).
export interface ServiceLink {
  label: string;
  href: string;
  todo?: boolean;
}

// Carte de service — format « image en tête + badges » (correction post-déploiement).
// Les badges = déclinaisons / technos du service : preuve DANS la carte, jamais
// en carte autonome (DECISION 23). `conseil` = carte porte d'entrée, ton distinct.
// Refonte Accueil — D27 : cartes à ICÔNE sur-mesure (captures retirées, elles
// vivent sur Réalisations). `proof` = ligne de preuve nichée, OBLIGATOIRE sur
// les cartes prouvables (clients réels + technos). Pour IA/Marketing, sans cas
// ni chiffre : une formulation-capacité honnête (asymétrie de preuve assumée).
export interface ServiceCardData {
  title: string;
  description: string;
  icon: 'web' | 'apps' | 'erp' | 'automation' | 'marketing' | 'conseil';
  badges: string[]; // max 5 — technos / déclinaisons (DECISION 23)
  proof?: string;
  cta: ServiceLink;
  variant?: 'conseil';
}

// ── A5 (wedge) — un des 3 points « ce qui nous rend irremplaçable »
export interface WedgePoint {
  title: string; // sous-titre en gras
  body: string;
}

// ── A8 (chiffres) — une tuile ; données FACT déclarées PO (DECISION 22)
// `icon` (vague 4) : icône fonctionnelle en tête de tuile.
export interface StatTile {
  label: string; // « EXPÉRIENCE »
  value: string; // « 3 ans »
  caption: string;
  icon: 'calendar' | 'folder' | 'bolt' | 'repeat';
}

export interface CaseTeaser {
  category: string;
  name: string;
  body: string;
  href?: string;
  image?: { src: string; alt: string };
  /** carte sans visuel/validation en attente (ATTA) */
  pending?: boolean;
  /** axe de filtre du hub Réalisations (Lot C). */
  group?: 'ecommerce' | 'plateforme' | 'entreprise' | 'institutionnel';
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

// ── A9 — Preuve (« On montre, on ne prétend pas »).
// Vague 4 : 3 piliers alignés sur le chapô, une icône fonctionnelle chacun.
export interface ProofItem {
  icon: 'users' | 'image' | 'shield';
  title: string;
  body: string;
}

// ── S09 — Méthode (Refonte Accueil, D29) — 4 phases navigables
export interface MethodStep {
  num: string;
  title: string;
  /** l'intention de la phase (1 phrase) */
  intent: string;
  /** ce qu'on fait concrètement */
  does: string;
  /** livrable éventuel de la phase */
  deliverable?: string;
}

export interface FaqItem {
  q: string;
  a: string;
  /** paragraphe « à valider » (fourchettes prix) */
  toValidateNote?: string;
}

// ── S05b — « Notre rôle » : transition entre la réassurance et « À qui on
// parle » (Refonte Accueil, sept. 2026). 3 axes courts, pas de carte.
export interface OurRoleAxis {
  num: string;
  title: string;
  body: string;
}

export interface OurRoleContent {
  eyebrow: string;
  title: string;
  lead: string;
  axes: OurRoleAxis[];
  cta: Cta;
}
