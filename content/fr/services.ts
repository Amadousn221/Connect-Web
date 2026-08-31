import type { ServiceCardData } from '../types';

// ── A5 — Section Services ────────────────────────────────────────────────
// 6 cartes, format « image en tête + badges ». Les badges portent les
// déclinaisons et technos du service (preuve dans la carte, jamais en carte
// autonome — DECISION 23). Grille uniforme 3 colonnes.
//
// Images : captures réelles de projets clients approuvés (DECISION 12) quand
// elles existent. Manquantes → repère `[IMAGE_MANQUANTE]` visible en preview,
// panneau pétrole en production. À fournir par le PO : ERP/CRM (Maison
// Peinture Odoo), IA & automatisation (ATTA reporting), Marketing.

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
      src: '/assets/real/was-africa.jpg',
      alt: "Site institutionnel de WAS Africa réalisé par Connect Web",
    },
    cta: { label: "Voir l'offre", href: '/services/conception-developpement-web', todo: true },
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
      src: '/assets/real/scod-vtc.jpg',
      alt: 'Plateforme de réservation SCOD VTC réalisée par Connect Web',
    },
    cta: { label: "Voir l'offre", href: '/services/logiciels-applications-web', todo: true },
  },
  {
    title: 'ERP / CRM',
    description:
      'Centraliser vos ventes, vos stocks et vos clients dans un seul système, relié à ce qui vend déjà.',
    badges: ['Odoo', 'HubSpot', 'Gestion des stocks', 'Ventes', 'Intégrations'],
    imageMissing: 'ERP Odoo Maison Peinture Sénégal',
    // slug aligné sur site-nav.ts / méga-menu (vague 4 — cohérence d'audit).
    cta: { label: "Voir l'offre", href: '/services/crm-erp-integrations', todo: true },
  },
  {
    title: 'IA & automatisation',
    description:
      'Faire disparaître les tâches répétitives : traitement de commandes, relances, reporting — pour que votre équipe se concentre sur le reste.',
    badges: ['n8n', 'Automatisation', 'Reporting auto', 'Relance panier', 'API'],
    imageMissing: 'Reporting mensuel automatisé ATTA Africa',
    cta: { label: "Voir l'offre", href: '/services/ia-automatisation', todo: true },
  },
  {
    title: 'Marketing & génération de prospects',
    description: 'Attirer, qualifier et convertir : campagnes, e-mail, acquisition.',
    badges: ['Mailchimp', 'Klaviyo', 'Email marketing', 'Campagnes', 'Acquisition'],
    imageMissing: 'Campagne marketing (pas encore de cas public)',
    // slug aligné sur site-nav.ts / méga-menu (vague 4 — cohérence d'audit).
    cta: { label: "Voir l'offre", href: '/services/marketing-acquisition', todo: true },
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
