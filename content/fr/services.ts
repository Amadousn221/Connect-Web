import type { ServiceCardData, ServiceConseilCard } from '../types';

// ── P25 S06 — Nos services / expertises ────────────────────────────────────
// Taxonomie verrouillée DECISION 03 (journal de décisions) : Niveau 1 = 4
// offres dominantes (preuve forte) + Système = 3 offres secondaires + Conseil
// = porte d'entrée. 8 cartes au total — confirmé par recoupement avec
// components/layout/site-nav.ts (megaMenuBuild ×4 + megaMenuSystem ×3) et les
// 8 routes réelles sous app/[locale]/services/*. (Le texte du brief P25 §S06
// mentionne « 5 offres + Conseil » dans une phrase et « 4 Niveau 1 + 3 Système »
// dans la suivante — DECISION 03 est la source la plus autoritaire, tranchée
// ici en faveur des 8 cartes.)
//
// Icônes sur-mesure (IconSet, pas de capture) — override PO C1 (brief P25).
// Preuve nommée DANS la carte (DECISION 23), jamais inventée : clients réels
// sourcés depuis content/fr/accueil.ts (caseTeasers) et content/fr/casPhares.ts.
// IA & Marketing = asymétrie de preuve (DECISION log) — capabilityNote
// honnête, aucun cas ni chiffre.

export const servicesIntro = {
  eyebrow: 'Nos capacités',
  title: 'Cinq expertises, une équipe, un système.',
  lead: "On construit selon votre besoin : une présence qui crédibilise, une boutique qui vend, une plateforme qui fait tourner l'opération, un système qui connecte le reste.",
};

// Niveau 1 — CE QU'ON PROUVE (dominant, ordre = megaMenuBuild).
export const servicesL1: ServiceCardData[] = [
  {
    title: 'Boutiques en ligne',
    description:
      "On construit des boutiques qui vendent, du Sénégal au monde : paiement Mobile Money et international sur la même caisse, vente transfrontalière, catalogue et logistique.",
    icon: 'boutiques',
    proof: {
      clients: ['ATTA Africa', 'Link Shop', 'Marjan Bijouterie'],
      tools: ['Shopify', 'WooCommerce'],
    },
    cta: { label: "Voir l'offre", href: '/services/boutiques-en-ligne' },
  },
  {
    title: 'Plateformes & applications',
    description:
      "Réservation, portails clients, gestion sur-mesure : on construit la plateforme qui remplace le suivi manuel et donne à votre équipe une vue claire, en temps réel.",
    icon: 'plateformes',
    proof: { clients: ['SCOD VTC'] },
    cta: { label: "Voir l'offre", href: '/services/plateformes-applications' },
  },
  {
    title: "Sites d'entreprise",
    description:
      "Présentation d'entreprise, offre, preuve et contact — un site au standard international, bilingue FR/EN, qui rassure vos clients, partenaires et investisseurs.",
    icon: 'entreprise',
    proof: { clients: ['ADA Voyages', 'Tamou Fishing', 'DDS Medical'] },
    cta: { label: "Voir l'offre", href: '/services/sites-entreprise' },
  },
  {
    title: 'Sites institutionnels & ONG',
    description:
      "Crédibilité auprès des bailleurs, clarté du plaidoyer, autonomie éditoriale de votre équipe — un site conçu pour les organisations qui portent une mission au long cours.",
    icon: 'ong',
    proof: { clients: ['WAS Africa', 'Sunu Thiossane', 'Fahamu Africa'] },
    cta: { label: "Voir l'offre", href: '/services/sites-institutionnels-ong' },
  },
];

// Niveau 2 — LE SYSTÈME (secondaire, ordre = megaMenuSystem).
export const servicesSystem: ServiceCardData[] = [
  {
    title: 'Odoo / ERP-CRM',
    description:
      "Stock, ventes, clients, achats : quand tout vit dans des fichiers séparés, personne ne voit l'ensemble. On configure Odoo pour vos process réels.",
    icon: 'odoo',
    proof: { clients: ['Maison Peinture Sénégal'], tools: ['Odoo'] },
    cta: { label: "Voir l'offre", href: '/services/crm-erp-integrations' },
  },
  {
    title: 'IA & automatisation',
    description:
      'Rapports, commandes, relances : ce qui vous prend des heures chaque semaine peut tourner sans vous.',
    icon: 'automatisation',
    capabilityNote:
      "Capacité, pas une étude de cas chiffrée sur cette page — on n'affiche jamais de résultat qu'on ne peut pas tenir.",
    cta: { label: "Voir l'offre", href: '/services/ia-automatisation' },
  },
  {
    title: 'Marketing & acquisition',
    description:
      "Faire venir les bons visiteurs, ceux qui achètent — pas juste du trafic pour le chiffre.",
    icon: 'marketing',
    capabilityNote:
      "Offre sans cas chiffré à ce jour — on préfère le dire plutôt que d'inventer une preuve.",
    cta: { label: "Voir l'offre", href: '/services/marketing-acquisition' },
  },
];

// Conseil — porte d'entrée, 1 ligne CTA, pas une carte (réutilise
// servicesHubConseil, content/fr/servicesHub.ts).
export const servicesConseil: ServiceConseilCard = {
  title: 'Pas sûr par où commencer ?',
  body: "C'est le cas le plus fréquent. Un audit gratuit pour cadrer votre situation, prioriser ce qui compte et repartir avec un plan.",
  cta: { label: 'Conseil & audit gratuit', href: '/services/conseil-strategie' },
};
