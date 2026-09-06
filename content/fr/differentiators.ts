import type { Cta } from '../types';

// ── S04 — Ce qui nous distingue (Refonte Accueil, brief §04-S04 / D28) ──────
// Remplace l'ancienne section « Wedge / irremplaçable ». Trois DIFFÉRENCIATEURS
// réels et prouvables — PAS les verbes de méthode (Comprendre/Concevoir/
// Construire), qui appartiennent à la section Méthode.
// Libellés = RECOMMENDATION alignée sur le socle (P08-A7, P08-A11, DECISION
// 06/13). À valider PO. Aucune donnée chiffrée ni cas ici — la preuve est
// portée par les sections Services et Réalisations.

export const differentiatorsIntro = {
  eyebrow: 'Ce qui nous distingue',
  title: 'Trois choses qu’on ne trouve pas ailleurs en même temps.',
};

export interface Differentiator {
  title: string;
  body: string;
  /** Lien optionnel — le différenciateur #2 pointe vers « Du site au système ». */
  link?: Cta;
}

export const differentiators: Differentiator[] = [
  {
    title: 'On part du réel, pas d’un catalogue.',
    body: "On conçoit à partir du fonctionnement de votre organisation — vos clients, vos flux, vos contraintes — pas d’une liste de prestations à cocher.",
  },
  {
    title: 'Du site au système.',
    body: "On ne s’arrête pas au site : on le connecte à vos opérations — stock, ventes, facturation, automatisation. Le site devient une pièce d’un ensemble qui tourne.",
    link: { label: 'Voir comment', href: '#systeme' },
  },
  {
    title: 'Vous gardez les clés.',
    body: "Domaine, hébergement, comptes de paiement, accès admin : tout est à votre nom. Paiement mobile et international sur la même boutique. Vous partez quand vous voulez, avec tout.",
  },
];
