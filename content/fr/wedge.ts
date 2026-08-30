import type { WedgePoint } from '../types';

// ── A5 (position 5) — Wedge / Différenciation (V2.1, Lot C) ───────────────
// §06.4 du Design Handoff. Bloc éditorial 2 colonnes asymétriques, fond
// pétrole nuit. Zéro carte, zéro puce, zéro icône. ATTA Africa et Maison
// Peinture Sénégal sont des FACTS documentés (décision log DECISION 12/13).

export const wedgeIntro = {
  eyebrow: 'Ce qui nous rend irremplaçable',
  title: "Trois choses qu'on ne trouve nulle part ailleurs en même temps.",
};

export const wedgeLede =
  "La plupart des sites vendus ici vous laissent choisir : soit le beau template international qui ignore comment on paie vraiment à Dakar, soit la solution locale qui ne tient pas la comparaison à l'étranger. On refuse ce compromis.";

export const wedgePoints: WedgePoint[] = [
  {
    title: 'Le standard international, le terrain local.',
    body: "Wave, Orange Money, Free Money pour vos clients d'ici. PayPal, Apple Pay, carte pour vos clients ailleurs. Une seule caisse, plusieurs devises. Vous vendez du Sénégal vers la France, la Côte d'Ivoire ou le Canada — comme ATTA Africa, qui livre en XOF, EUR, USD et CAD depuis Dakar.",
  },
  {
    title: 'Le site, puis le système.',
    body: "On commence par ce qui fait entrer l'argent — le site qui convertit. Ensuite, on connecte : votre boutique parle à votre ERP, votre CRM parle à vos e-mails, vos commandes se traitent toutes seules. C'est ce qu'on fait chez ATTA (reporting mensuel automatisé, relance panier) et chez Maison Peinture Sénégal (Odoo intégré à la gestion commerciale).",
  },
  {
    title: 'Vous gardez les clés.',
    body: "Votre nom de domaine, votre hébergement, vos comptes de paiement, votre base de données — tout est à votre nom, sous votre contrôle. Vous pouvez partir demain avec tout. On ne veut pas être un fournisseur dont vous dépendez ; on veut être une équipe que vous rappelez parce que le travail est bon.",
  },
];
