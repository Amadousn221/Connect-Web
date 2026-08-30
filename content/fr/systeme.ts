// ── A9 — Du site au système (V2.1, Lot C) ────────────────────────────────
// §06.8 du Design Handoff. Bloc narratif, 2 paragraphes en texte suivi,
// pas de liste. ATTA Africa et Maison Peinture Sénégal = FACTS documentés.

export const systemeIntro = {
  eyebrow: 'Trajectoire',
  title: "Un site, c'est bien. Un système qui tourne, c'est ce qui change tout.",
};

export const systemeParagraphs: string[] = [
  "Un site qui vend, c'est le point de départ. Mais le vrai levier, c'est ce qui se passe une fois qu'il tourne : les commandes qui se traitent automatiquement, le stock qui se met à jour tout seul, les rapports mensuels qui arrivent le 1er de chaque mois sans que personne ne les prépare, les relances de panier abandonné qui récupèrent 20 à 30 % des ventes perdues.",
  "Chez ATTA Africa, on a d'abord construit la boutique, puis on a automatisé le reporting (ventes par taille, par produit, par pays), la préparation des commandes et les relances. Chez Maison Peinture Sénégal, on a remplacé une gestion Excel + tableur par un ERP Odoo qui gère devis, stock, ventes et achat. Dans les deux cas, c'est le même principe : d'abord ce qui vend, ensuite ce qui rend l'opération invisible.",
];

// CTA tertiaire → ancre on-page de la section Services (reco Lot C : la route
// /services n'existe pas encore).
export const systemeCta = {
  label: 'Découvrir nos services système',
  href: '#services',
};
