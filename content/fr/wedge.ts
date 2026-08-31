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

export const wedgePoints: WedgePoint[] = [
  {
    title: 'Le standard international, le terrain local.',
    body: "Une exécution au niveau des meilleures agences — structure, contenu, code propre, performance — et une vraie connaissance du terrain : Mobile Money (Wave, Orange Money) à côté de PayPal et de la carte, WhatsApp quand c'est le bon canal, contraintes locales comprises. WAS Africa présente sa mission et ses programmes avec la même tenue qu'une organisation internationale ; ATTA Africa vend en XOF, EUR, USD et CAD sur une seule caisse. Même exigence, deux besoins différents.",
  },
  {
    title: 'Le site, puis le système.',
    body: "On commence par ce qui compte pour vous — la présence qui crédibilise, ou la boutique qui vend. Ensuite, on connecte : votre site parle à votre gestion, votre CRM parle à vos e-mails, vos commandes se traitent toutes seules. C'est ce qu'on fait chez ATTA Africa (reporting mensuel automatisé, relance panier) et chez Maison Peinture Sénégal (Odoo intégré à la gestion commerciale).",
  },
  {
    title: 'Vous gardez les clés.',
    body: "Votre nom de domaine, votre hébergement, vos comptes de paiement, votre base de données — tout est à votre nom, sous votre contrôle. Vous pouvez partir demain avec tout. On ne veut pas être un fournisseur dont vous dépendez ; on veut être une équipe que vous rappelez parce que le travail est bon.",
  },
];
