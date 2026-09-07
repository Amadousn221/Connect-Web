import type { ServiceCardData } from '../types';

// ── S06 — Nos services / expertises (copy V1) ───────────────────────────────
// Refonte Accueil — D27 : cartes à ICÔNE sur-mesure (captures retirées — elles
// se concentrent sur Réalisations et les pages de cas).
// Lot 2 : la ligne de preuve (`proof`) est RETIRÉE de ces cartes (la preuve est
// portée par Réalisations et les logos ailleurs sur la page). Le champ reste
// dans le type (optionnel) mais n'est plus renseigné ni rendu ici.
// Copy V1 : 7 cartes (E-commerce détachée de « Conception et développement
// web » en carte autonome — la taxonomie 5+Conseil de la DECISION 23 devient
// 6 expertises + Conseil).

export const servicesIntro = {
  eyebrow: 'Nos services',
  title: "Les expertises nécessaires pour passer de l'idée à un système qui fonctionne.",
  lead: "Un projet peut commencer par un site, une boutique, une application ou un problème interne. Nous choisissons les outils en fonction du résultat recherché, puis nous les faisons travailler ensemble lorsque le projet l'exige.",
};

export const serviceCards: ServiceCardData[] = [
  {
    title: 'Conception et développement web',
    description:
      "Sites institutionnels, sites d'entreprise et expériences web conçus pour présenter clairement votre activité, renforcer votre crédibilité et faciliter la prise de contact.",
    icon: 'web',
    badges: ['UX/UI', 'Développement sur mesure', 'CMS', 'Maintenance'],
    cta: { label: 'Découvrir le développement web', href: '/services/sites-entreprise' },
  },
  {
    title: 'E-commerce',
    description:
      'Boutiques en ligne adaptées aux habitudes de vos clients, à vos moyens de paiement et à votre organisation quotidienne.',
    icon: 'ecommerce',
    badges: ['Shopify', 'WooCommerce', 'Paiement mobile', 'Vente internationale'],
    cta: { label: "Découvrir l'e-commerce", href: '/services/boutiques-en-ligne' },
  },
  {
    title: 'Logiciels et applications web',
    description:
      'Applications métier, portails et plateformes conçus autour de vos processus, de vos utilisateurs et de vos contraintes réelles.',
    icon: 'apps',
    badges: ['Applications web', 'Portails', 'API', 'Tableaux de bord'],
    cta: { label: 'Découvrir les applications web', href: '/services/plateformes-applications' },
  },
  {
    title: 'ERP, CRM et intégrations',
    description:
      'Des outils pour centraliser les données, suivre les opérations et limiter les doubles saisies entre vos équipes.',
    icon: 'erp',
    badges: ['CRM', 'ERP', 'Odoo', "Intégrations API"],
    cta: { label: 'Découvrir les systèmes métier', href: '/services/crm-erp-integrations' },
  },
  {
    title: 'IA et automatisation',
    description:
      'Des automatisations utiles pour transmettre les informations, déclencher les tâches répétitives et libérer du temps dans vos opérations.',
    icon: 'automation',
    badges: ['Workflows', 'Reporting', 'Agents assistés par IA', "Connexions d'outils"],
    cta: { label: "Découvrir l'automatisation", href: '/services/ia-automatisation' },
  },
  {
    title: 'Marketing et génération de prospects',
    description:
      'Des dispositifs d’acquisition conçus pour attirer les bonnes personnes, mesurer les actions et transformer davantage de visites en opportunités.',
    icon: 'marketing',
    badges: ['SEO', 'Publicité', 'Emailing', 'Optimisation de conversion'],
    cta: { label: "Découvrir l'acquisition", href: '/services/marketing-acquisition' },
  },
  {
    title: 'Conseil et stratégie',
    description:
      "Vous ne savez pas encore quelle solution construire ou quelle priorité traiter ? Nous analysons l'existant et transformons vos besoins en plan d'action clair.",
    icon: 'conseil',
    badges: [],
    variant: 'conseil',
    cta: { label: 'Demander un accompagnement stratégique', href: '/services/conseil-strategie' },
  },
];
