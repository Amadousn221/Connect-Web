// Structure de navigation partagée — identique sur les 15 mockups.
// Source : méga-menu Services (3 blocs : « Ce qu'on construit » / « Le système »
// / « Conseil ») + nav principale + footer, extraits de
// `Connect Web - Accueil V2.dc.html` (header lignes 123-176, footer 952-980).
// DECISION 06 : nav = Services · Réalisations · Agence · Ressources + CTA Contact.
// Slugs = arborescence cible du plan d'implémentation Phase 24.
//
// Audit liens — toutes les routes de navigation existent :
//   / · /services (hub) · /services/{boutiques-en-ligne, plateformes-applications,
//   sites-entreprise, sites-institutionnels-ong, crm-erp-integrations,
//   ia-automatisation, marketing-acquisition, conseil-strategie} · /realisations ·
//   /ressources · /agence · /contact · /mentions-legales ·
//   /politique-de-confidentialite
//   ℹ Reset Services (2026-09-07) : les routes /services* rendent une page
//     d'attente le temps de la reconstruction (pas de lien mort).
//   ⛔ TODO : /realisations/[slug] (fiches de cas — contenu Sanity, jalon M4).

export type NavLink = { label: string; path: string };

/** Liens principaux de la barre de navigation (hors « Services », qui ouvre le méga-menu). */
export const primaryNav: NavLink[] = [
  { label: 'Réalisations', path: '/realisations' },
  { label: 'Agence', path: '/agence' },
  { label: 'Blog', path: '/blog' },
  { label: 'Ressources', path: '/ressources' },
  { label: 'Contact', path: '/contact' },
];

/** Famille 1 du méga-menu — « Conception & développement web » (4 liens :
 * vue d'ensemble + les 3 usages, alignés sur hubWeb.usages / servicesHub.ts). */
export const megaMenuWebFamily: NavLink[] = [
  { label: "Vue d'ensemble", path: '/services/conception-et-developpement-web' },
  { label: "Sites d'entreprise", path: '/services/sites-entreprise' },
  { label: 'Sites institutionnels & ONG', path: '/services/sites-institutionnels-ong' },
  { label: 'Boutiques en ligne', path: '/services/boutiques-en-ligne' },
];

/** Famille 2 du méga-menu — « Systèmes & croissance » (les 4 autres expertises
 * du hub Services, alignées sur hubIndex.rows[1..4] de servicesHub.ts). */
export const megaMenuSystemFamily: NavLink[] = [
  { label: 'Logiciels et applications web', path: '/services/plateformes-applications' },
  // slug vérifié en prod P23 : /services/crm-erp-integrations
  { label: 'ERP, CRM et intégrations', path: '/services/crm-erp-integrations' },
  { label: 'IA et automatisation', path: '/services/ia-automatisation' },
  { label: 'Marketing et génération de prospects', path: '/services/marketing-acquisition' },
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

/** Colonne Services du footer — hub + les 5 expertises + Conseil (mêmes
 * intitulés/ordre que hubIndex.rows + hubConseil dans content/fr/servicesHub.ts). */
export const footerServicesColumn: NavLink[] = [
  { label: 'Tous nos services', path: servicesHubPath },
  { label: 'Conception et développement web', path: '/services/conception-et-developpement-web' },
  { label: 'Logiciels et applications web', path: '/services/plateformes-applications' },
  { label: 'ERP, CRM et intégrations', path: '/services/crm-erp-integrations' },
  { label: 'IA et automatisation', path: '/services/ia-automatisation' },
  { label: 'Marketing et génération de prospects', path: '/services/marketing-acquisition' },
  { label: 'Conseil et stratégie', path: '/services/conseil-strategie' },
];

/** Colonnes du footer (footer mockup lignes 962-973). */
export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Services',
    links: footerServicesColumn,
  },
  {
    heading: 'Agence',
    links: [
      { label: 'À propos', path: '/agence' },
      { label: 'Réalisations', path: '/realisations' },
      { label: 'Blog', path: '/blog' },
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
