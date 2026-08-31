import type { WedgePoint } from '../types';

// ── Wedge / Différenciation ─────────────────────────────────────────────
// §06.4 du Design Handoff. Bloc éditorial 2 colonnes, fond pétrole nuit.
// Zéro carte, zéro puce, zéro icône. Clients cités = FACTS documentés
// (décision log DECISION 12/13) : ATTA Africa, Maison Peinture Sénégal,
// WAS Africa. Message multi-segment : la vente est un axe fort, pas le seul.

export const wedgeIntro = {
  eyebrow: 'Ce qui nous rend irremplaçable',
  title: "Trois choses qu'on ne trouve nulle part ailleurs en même temps.",
};

export const wedgeLede =
  "La plupart des sites vendus ici vous laissent choisir : soit le beau template international, déconnecté du terrain, soit la solution locale qui ne tient pas la comparaison à l'étranger. On refuse ce compromis.";

// Vague 4 : les 3 corps sont condensés (~40 mots) — même fond, mêmes preuves
// nommées (ATTA Africa, Maison Peinture Sénégal — FACTs, DECISION 12/13).
export const wedgePoints: WedgePoint[] = [
  {
    title: 'Le standard international, le terrain local.',
    body: "Wave, Orange Money et carte internationale sur la même caisse. Vous vendez ou opérez depuis Dakar vers l'Europe, l'Afrique et l'Amérique — comme ATTA Africa qui livre en 4 devises.",
  },
  {
    title: 'Le site, puis le système.',
    body: "On commence par ce qui rentre : le site ou l'outil qui fonctionne. Puis on connecte — commandes traitées, stocks à jour, rapports mensuels automatiques. C'est ce qu'on a fait chez ATTA et Maison Peinture Sénégal.",
  },
  {
    title: 'Vous gardez les clés.',
    body: "Domaine, hébergement, comptes, base de données : tout est à votre nom. Vous pouvez partir demain avec tout. On veut être une équipe qu'on rappelle, pas un fournisseur dont on dépend.",
  },
];
