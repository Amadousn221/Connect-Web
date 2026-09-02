import type { ServiceCardData } from '../types';

// ── A5 — Section Services ────────────────────────────────────────────────
// 6 cartes, format « image en tête + badges ». Les badges portent les
// déclinaisons et technos du service (preuve dans la carte, jamais en carte
// autonome — DECISION 23). Grille uniforme 3 colonnes.
//
// Images : visuels d'illustration des expertises (fournis par le PO,
// `public/assets/images/service-*.jpg`). Ce ne sont PAS des captures de
// projets clients — les vraies réalisations vivent sur /realisations et dans
// les sliders de cas.

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
    badges: [
      'Site vitrine',
      'Site institutionnel',
      'E-commerce Shopify',
      'E-commerce WooCommerce',
      'Sur-mesure',
    ],
    image: {
      src: '/assets/images/service-conception-web.jpg',
      alt: 'Développeuse au travail sur un projet web',
    },
    // Pas de page « conception-developpement-web » : on renvoie vers la page
    // d'offre la plus proche (présence / crédibilité).
    cta: { label: "Voir l'offre", href: '/services/sites-entreprise' },
  },
  {
    title: 'Logiciels & applications web',
    description:
      "Plateformes métier, applications web sur mesure, PWA : l'outil s'adapte à votre opération, pas l'inverse.",
    badges: [
      'Plateforme métier',
      'Application web',
      'PWA',
      'Espace client',
      'Tableau de bord',
    ],
    image: {
      src: '/assets/images/service-logiciels-apps.jpg',
      alt: "Développement d'une application web sur mesure",
    },
    cta: { label: "Voir l'offre", href: '/services/plateformes-applications' },
  },
  {
    title: 'ERP / CRM',
    description:
      'Centraliser vos ventes, vos stocks et vos clients dans un seul système, relié à ce qui vend déjà.',
    badges: ['Odoo', 'HubSpot', 'Gestion des stocks', 'Ventes', 'Intégrations'],
    image: {
      src: '/assets/images/service-erp-crm.jpg',
      alt: 'Pilotage des ventes et des stocks sur un tableau de bord',
    },
    cta: { label: "Voir l'offre", href: '/services/crm-erp-integrations' },
  },
  {
    title: 'IA & automatisation',
    description:
      'Faire disparaître les tâches répétitives : traitement de commandes, relances, reporting — pour que votre équipe se concentre sur le reste.',
    badges: ['n8n', 'Automatisation', 'Reporting auto', 'Relance panier', 'API'],
    image: {
      src: '/assets/images/service-ia-automatisation.jpg',
      alt: 'Automatisation et intelligence artificielle appliquées aux flux métier',
    },
    cta: { label: "Voir l'offre", href: '/services/ia-automatisation' },
  },
  {
    title: 'Marketing & génération de prospects',
    description: 'Attirer, qualifier et convertir : campagnes, e-mail, acquisition.',
    badges: ['Mailchimp', 'Klaviyo', 'Email marketing', 'Campagnes', 'Acquisition'],
    image: {
      src: '/assets/images/service-marketing.jpg',
      alt: 'Campagnes marketing digitales et suivi des performances',
    },
    cta: { label: "Voir l'offre", href: '/services/marketing-acquisition' },
  },
  {
    title: 'Conseil & stratégie',
    description:
      "Avant de construire, comprendre. Audit, cadrage, choix d'architecture, priorisation : on part de votre problème, pas de notre catalogue.",
    badges: ['Audit', 'Cadrage', 'Architecture', 'Choix techno', 'Priorisation'],
    variant: 'conseil',
    cta: { label: 'Parlons de votre projet', href: '#contact' },
  },
];
