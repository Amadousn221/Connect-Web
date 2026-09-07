import type { Cta } from '../types';

// ── S04 — Ce qui nous distingue (Refonte Accueil, brief §04-S04 / D28) ──────
// Remplace l'ancienne section « Wedge / irremplaçable ». Trois DIFFÉRENCIATEURS
// réels et prouvables — PAS les verbes de méthode (Comprendre/Concevoir/
// Construire), qui appartiennent à la section Méthode.
// Libellés = RECOMMENDATION alignée sur le socle (P08-A7, P08-A11, DECISION
// 06/13). À valider PO. Aucune donnée chiffrée ni cas ici — la preuve est
// portée par les sections Services et Réalisations.

// Copy V1 (validée PO).
export const differentiatorsIntro = {
  eyebrow: 'Notre façon de travailler',
  title: 'Nous ne commençons pas par choisir un outil.',
};

export interface Differentiator {
  title: string;
  body: string;
  /** Icône (jeu components/ui/icons.tsx) — décorative, le titre porte le sens. */
  icon: 'pin' | 'network' | 'shield';
  /** Lien optionnel — le différenciateur #2 pointe vers « Du site au système ». */
  link?: Cta;
}

export const differentiators: Differentiator[] = [
  {
    title: 'Le besoin avant la technologie',
    body: 'Nous cherchons d’abord à comprendre ce que votre organisation doit améliorer : vendre, informer, centraliser, automatiser ou mieux suivre.',
    icon: 'pin',
  },
  {
    title: 'Le terrain compte',
    body: 'Paiement mobile, usages locaux, vente transfrontalière, contraintes internes : la solution doit fonctionner dans votre réalité, pas seulement dans une maquette.',
    icon: 'network',
  },
  {
    title: 'La continuité après la livraison',
    body: 'Un projet numérique doit pouvoir évoluer. Nous construisons des bases compréhensibles, administrables et adaptées aux prochaines étapes de votre activité.',
    icon: 'shield',
  },
];
