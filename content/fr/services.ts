import type { ServiceCardData } from '../types';

// ── S06 — Nos services / expertises ─────────────────────────────────────────
// Refonte Accueil — D27 : cartes à ICÔNE sur-mesure (captures retirées — elles
// se concentrent sur Réalisations et les pages de cas).
// Lot 2 : la ligne de preuve (`proof`) est RETIRÉE de ces cartes (la preuve est
// portée par Réalisations et les logos ailleurs sur la page). Le champ reste
// dans le type (optionnel) mais n'est plus renseigné ni rendu ici.
// Taxonomie inchangée (verrouillée, DECISION 23) : 5 expertises + Conseil.
// Les technos restent des badges nichés, jamais des titres d'offre.

export const servicesIntro = {
  eyebrow: 'Nos capacités',
  title: 'Cinq expertises, une équipe, un système.',
  lead: "On construit selon votre besoin : une présence qui crédibilise, une boutique qui vend, une plateforme qui fait tourner l'opération, des automatisations qui font gagner du temps.",
};

export const serviceCards: ServiceCardData[] = [
  {
    title: 'Conception et développement web',
    description:
      "Sites institutionnels, sites d'entreprise, boutiques en ligne : une présence qui vous représente et qui, quand il le faut, vend.",
    icon: 'web',
    badges: [
      'Site vitrine',
      'Site institutionnel',
      'E-commerce Shopify',
      'E-commerce WooCommerce',
      'Sur-mesure',
    ],
    // Pas de page « conception-developpement-web » : on renvoie vers la page
    // d'offre la plus proche (présence / crédibilité).
    cta: { label: "Voir l'offre", href: '/services/sites-entreprise' },
  },
  {
    title: 'Logiciels & applications web',
    description:
      "Plateformes métier, applications web sur mesure, PWA : l'outil s'adapte à votre opération, pas l'inverse.",
    icon: 'apps',
    badges: [
      'Plateforme métier',
      'Application web',
      'PWA',
      'Espace client',
      'Tableau de bord',
    ],
    cta: { label: "Voir l'offre", href: '/services/plateformes-applications' },
  },
  {
    title: 'ERP / CRM',
    description:
      'Centraliser vos ventes, vos stocks et vos clients dans un seul système, relié à ce qui vend déjà.',
    icon: 'erp',
    badges: ['Odoo', 'HubSpot', 'Gestion des stocks', 'Ventes', 'Intégrations'],
    cta: { label: "Voir l'offre", href: '/services/crm-erp-integrations' },
  },
  {
    title: 'IA & automatisation',
    description:
      'Faire disparaître les tâches répétitives : traitement de commandes, relances, reporting — pour que votre équipe se concentre sur le reste.',
    icon: 'automation',
    badges: ['n8n', 'Automatisation', 'Reporting auto', 'Relance panier', 'API'],
    cta: { label: "Voir l'offre", href: '/services/ia-automatisation' },
  },
  {
    title: 'Marketing & génération de prospects',
    description: 'Attirer, qualifier et convertir : campagnes, e-mail, acquisition.',
    icon: 'marketing',
    badges: ['Mailchimp', 'Klaviyo', 'Email marketing', 'Campagnes', 'Acquisition'],
    cta: { label: "Voir l'offre", href: '/services/marketing-acquisition' },
  },
  {
    title: 'Conseil & stratégie',
    description:
      "Avant de construire, comprendre. Audit, cadrage, choix d'architecture, priorisation : on part de votre problème, pas de notre catalogue.",
    icon: 'conseil',
    badges: ['Audit', 'Cadrage', 'Architecture', 'Choix techno', 'Priorisation'],
    variant: 'conseil',
    cta: { label: "Demander l'audit", href: '#contact' },
  },
];
