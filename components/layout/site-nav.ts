// Structure de navigation partagée — identique sur les 15 mockups.
// Source : méga-menu Services (3 blocs : « Ce qu'on construit » / « Le système »
// / « Conseil ») + nav principale + footer, extraits de
// `Connect Web - Accueil V2.dc.html` (header lignes 123-176, footer 952-980).
// DECISION 06 : nav = Services · Réalisations · Agence · Ressources + CTA Contact.
// Slugs = arborescence cible du plan d'implémentation Phase 24.
//
// Audit liens — état des routes cibles dans app/ :
//   ✅ créées : / · /services/boutiques-en-ligne · /services/plateformes-applications
//      /services/sites-entreprise · /services/sites-institutionnels-ong
//      /services/crm-erp-integrations · /services/ia-automatisation
//      /services/marketing-acquisition · /agence · /mentions-legales
//      /politique-de-confidentialite
//   ⛔ TODO (rendent un 404 tant que non construites) :
//      /services (hub) · /services/conseil-strategie · /realisations
//      /realisations/[slug] · /ressources · /contact

export type NavLink = { label: string; path: string };

/** Liens principaux de la barre de navigation (hors « Services », qui ouvre le méga-menu). */
export const primaryNav: NavLink[] = [
  { label: 'Réalisations', path: '/realisations' },
  { label: 'Agence', path: '/agence' },
  { label: 'Ressources', path: '/ressources' },
  { label: 'Contact', path: '/contact' },
];

/** Bloc 1 du méga-menu — « Ce qu'on construit » (offres Niveau 1, DECISION 03). */
export const megaMenuBuild: NavLink[] = [
  { label: 'Boutiques en ligne', path: '/services/boutiques-en-ligne' },
  { label: 'Plateformes & applications', path: '/services/plateformes-applications' },
  { label: "Sites d'entreprise", path: '/services/sites-entreprise' },
  { label: 'Sites institutionnels & ONG', path: '/services/sites-institutionnels-ong' },
];

/** Bloc 2 du méga-menu — « Le système » (offres Niveau 2, DECISION 03). */
export const megaMenuSystem: NavLink[] = [
  // slug vérifié en prod P23 : /services/crm-erp-integrations
  { label: 'Odoo / ERP-CRM', path: '/services/crm-erp-integrations' },
  { label: 'IA & automatisation', path: '/services/ia-automatisation' },
  { label: 'Marketing & acquisition', path: '/services/marketing-acquisition' },
];

/** Bloc 3 du méga-menu — Conseil (porte d'entrée, DECISION 07/08). */
export const megaMenuConseil = {
  path: '/services/conseil-strategie',
  title: 'Pas sûr par où commencer ?',
  body: 'Un audit gratuit pour cadrer votre projet et prioriser ce qui compte.',
  cta: 'Conseil & audit gratuit',
};

export const servicesHubPath = '/services';
export const contactPath = '/contact';

/** CTA principal unique — DECISION 11 (« devis » uniformisé, DECISION 15). */
export const primaryCta = { label: 'Parlons de votre projet', path: contactPath };

/** Colonnes du footer (footer mockup lignes 962-973). */
export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Services',
    links: [
      ...megaMenuBuild,
      { label: 'Odoo / ERP-CRM', path: '/services/crm-erp-integrations' },
      { label: 'Automatisation & IA', path: '/services/ia-automatisation' },
    ],
  },
  {
    heading: 'Agence',
    links: [
      { label: 'À propos', path: '/agence' },
      { label: 'Réalisations', path: '/realisations' },
      { label: 'Ressources', path: '/ressources' },
      { label: 'Contact', path: '/contact' },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: 'Mentions légales', path: '/mentions-legales' },
  { label: 'Confidentialité', path: '/politique-de-confidentialite' },
];

// Coordonnées : présentes en production, à confirmer définitives par le PO
// (journal de décisions — EVIDENCE REQUIRED « Coordonnées Contact »).
export const contactInfo = {
  city: 'Dakar, Sénégal',
  phones: [
    { label: '+221 77 900 62 82', href: 'tel:+221779006282' },
    { label: '+221 78 343 82 49', href: 'tel:+221783438249' },
  ],
  whatsapp: 'https://wa.me/221783438249',
  email: 'contact@connect-web.tech',
};

// Liens réseaux sociaux : toujours cassés en prod (journal de décisions).
// Tant que le PO n'a pas fourni les URLs réelles, on n'affiche pas de lien mort —
// on montre le repère « à valider » du mockup (footer ligne 959).
export const socialLinks: NavLink[] = [];
