import type { WhoForCell } from '../types';

// ── Pour qui (V2.1, Lot D) ──────────────────────────────────────────────
// §12 du Design Handoff : la diversité est montrée par le besoin métier, pas
// par un catalogue de secteurs. Grille statique 6 cases (plus d'onglets).
// Textes « Besoin » / « On construit » repris de l'ancien AudienceTabs.

export const pourquiIntro = {
  eyebrow: 'Pour qui',
  title: 'Des organisations très différentes, un même point de départ.',
  lead: "Une boutique, une ONG et une école n'ont pas les mêmes besoins — mais toutes se heurtent au même mur : ce qui marche à la main ne tient plus à l'échelle.",
};

export const pourquiCells: WhoForCell[] = [
  {
    name: 'Entreprises & PME',
    need: 'Être trouvé, rassurer, faciliter la commande',
    build: "Site d'entreprise, catalogue, commande en ligne, CRM",
  },
  {
    name: 'Commerces & marques',
    need: 'Vendre en continu, encaisser partout, suivre le stock',
    build: 'Boutique en ligne, paiement mobile & international, gestion de stock',
  },
  {
    name: 'ONG & institutions',
    need: 'Crédibilité, plaidoyer, mobilisation, redevabilité',
    build: 'Site institutionnel multilingue, publications, formulaires, newsletter',
  },
  {
    name: 'Écoles & formation',
    need: 'Attirer, inscrire, informer, suivre',
    build: 'Site programmes, candidature en ligne, espace apprenant, e-mailing',
  },
  {
    name: 'Industrie & filières',
    need: 'Crédibilité export, traçabilité, suivi des commandes',
    build: 'Site export multilingue, portail partenaires, suivi & reporting',
  },
  {
    name: 'Entrepreneurs',
    need: 'Lancer vite, tester, garder la main sur les coûts',
    build: 'Première version utile, réservation ou commande, base pour évoluer',
  },
];

export const pourquiCta = {
  label: 'Pas certain de votre catégorie ? Parlons-en',
  href: '#contact',
};
