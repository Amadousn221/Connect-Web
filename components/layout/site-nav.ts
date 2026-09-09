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

export const servicesHubPath = '/services';

// ── Arborescence Services — SOURCE UNIQUE (méga-menu desktop, drawer mobile,
//    footer, maillage du hub). Ne jamais dupliquer ces routes ailleurs.
//
//    UNIQUEMENT des routes réellement présentes dans `app/[locale]/services/*`.
//    Développement WordPress / Shopify / Refonte : pages NON créées → absentes
//    de la nav (aucun lien mort, aucune URL inventée).
//    Les 8 sous-pages rendent aujourd'hui `ServicePlaceholder` (noindex,
//    accessible) ; elles restent navigables et seront enrichies à leur
//    reconstruction. `/services` (hub) est la seule page Services validée.
export type ServiceFamily = { heading: string; links: NavLink[] };

/** Lien de rattache prioritaire — retour au hub. */
export const servicesTop: NavLink = { label: 'Tous nos services', path: servicesHubPath };

/** Familles logiques (méga-menu colonnes 1 & 2, drawer, hub). */
export const serviceFamilies: ServiceFamily[] = [
  {
    heading: 'Conception & développement web',
    links: [
      { label: "Vue d'ensemble", path: '/services/conception-et-developpement-web' },
      { label: "Sites d'entreprise", path: '/services/sites-entreprise' },
      { label: 'Sites institutionnels & ONG', path: '/services/sites-institutionnels-ong' },
      { label: 'Boutiques en ligne', path: '/services/boutiques-en-ligne' },
    ],
  },
  {
    heading: 'Systèmes & croissance',
    links: [
      { label: 'Logiciels & applications web', path: '/services/plateformes-applications' },
      { label: 'ERP, CRM & intégrations', path: '/services/crm-erp-integrations' },
      { label: 'IA & automatisation', path: '/services/ia-automatisation' },
      { label: 'Marketing & acquisition', path: '/services/marketing-acquisition' },
    ],
  },
];

/** Conseil — porte d'entrée transversale (méga-menu colonne 3, DECISION 07/08). */
export const serviceConseil = {
  path: '/services/conseil-strategie',
  label: 'Conseil & stratégie',
  title: 'Pas sûr par où commencer ?',
  body: 'Un cadrage gratuit pour prioriser votre projet avant tout choix technique.',
  cta: 'Voir Conseil & stratégie',
};

/** Toutes les routes Services réelles, à plat (drawer complet, contrôles QA). */
export const allServiceLinks: NavLink[] = [
  servicesTop,
  ...serviceFamilies.flatMap((f) => f.links),
  { label: serviceConseil.label, path: serviceConseil.path },
];

/** Sélection condensée pour le footer : « Tous nos services » + les 5 expertises
 *  + Conseil. Les 3 usages web restent accessibles via « Conception &
 *  développement web » et le hub — footer non transformé en liste trop longue. */
export const footerServiceLinks: NavLink[] = [
  servicesTop,
  { label: 'Conception & développement web', path: '/services/conception-et-developpement-web' },
  { label: 'Logiciels & applications web', path: '/services/plateformes-applications' },
  { label: 'ERP, CRM & intégrations', path: '/services/crm-erp-integrations' },
  { label: 'IA & automatisation', path: '/services/ia-automatisation' },
  { label: 'Marketing & acquisition', path: '/services/marketing-acquisition' },
  { label: serviceConseil.label, path: serviceConseil.path },
];
export const contactPath = '/contact';

/** CTA principal unique — DECISION 11 (« devis » uniformisé, DECISION 15). */
export const primaryCta = { label: 'Parlons de votre projet', path: contactPath };

/** Colonnes du footer (footer mockup lignes 962-973). La colonne Services tire
 *  ses liens de `footerServiceLinks` (source unique). */
export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Services',
    links: footerServiceLinks,
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
