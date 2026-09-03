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

// ── A5 — Section Services (V2.1, Lot B — DECISION 23) ──────────────────────
// Un lien de carte de service (sous-service en tag, ou micro-CTA). `todo` =
// page pas encore créée → rendu non cliquable + repère « À valider » (preview).
export interface ServiceLink {
  label: string;
  href: string;
  todo?: boolean;
}

// P25 — clé d'icône du jeu sur-mesure IconSet (une par offre, DECISION 03 :
// 4 Niveau 1 + 3 Système + Conseil = 8). Voir components/ui/IconSet.tsx.
export type OfferIconKey =
  | 'boutiques'
  | 'plateformes'
  | 'entreprise'
  | 'ong'
  | 'odoo'
  | 'automatisation'
  | 'marketing'
  | 'conseil';

// Carte de service P25 (remplace le format « image en tête + badges » —
// override PO C1 du brief P25 : icône sur-mesure, pas de capture). La preuve
// nommée reste DANS la carte (DECISION 23), jamais en carte autonome.
// `proof` = clients réels cités (asymétrie de preuve : absent pour IA/Marketing,
// qui portent `capabilityNote` à la place — jamais de cas/chiffre inventé).
export interface ServiceCardData {
  title: string;
  description: string;
  icon: OfferIconKey;
  proof?: { clients: string[]; tools?: string[] };
  capabilityNote?: string;
  cta: ServiceLink;
}

// Bloc Conseil (porte d'entrée) — 1 ligne CTA, pas une carte (P25 §S06).
export interface ServiceConseilCard {
  title: string;
  body: string;
  cta: Cta;
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

// ── P25 S09 — Méthode : 4 phases, tabs desktop / accordéon mobile ─────────
export interface MethodPhase {
  num: string;
  title: string;
  intention: string;
  actions: string[];
  deliverables?: string[];
}

export interface FaqItem {
  q: string;
  a: string;
  /** paragraphe « à valider » (fourchettes prix) */
  toValidateNote?: string;
}

// ── P25 S04 — Ce qui nous distingue ────────────────────────────────────────
export interface DifferentiatorItem {
  num: '01' | '02' | '03';
  title: string;
  body: string;
  link?: Cta;
}

// ── P25 S07 — Du site au système (chaîne de modules reliés) ───────────────
export interface SystemRoadModule {
  key: string;
  label: string;
}

export interface SystemRoadProof {
  client: string;
  chain: string;
  /** jamais inventé — placeholder balisé tant qu'aucun chiffre n'est confirmé */
  result?: string;
}

// ── P25 S10 — Ressources (conditionnelle, contenu hardcodé — pas de CMS
//    sur l'Accueil, cf. P25 §08) ────────────────────────────────────────────
export interface ResourceTeaser {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  href: string;
}
