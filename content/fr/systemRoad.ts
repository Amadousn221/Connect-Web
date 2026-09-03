import type { SystemRoadModule, SystemRoadProof } from '../types';

// ── P25 S07 — Du site au système ───────────────────────────────────────────
// Remplace l'ancienne grille statique besoin→solution→exemple (systemIntro/
// systemElements, accueil.ts) par une chaîne de modules reliés (brief P25
// §S07). Ancrée par 2 preuves réelles (Maison Peinture, ATTA — DECISION 06/13
// du journal) ; aucun résultat chiffré confirmé à ce jour → placeholder balisé
// explicite, jamais un chiffre inventé.

export const systemRoadIntro = {
  eyebrow: 'Du site au système',
  title: 'Un site, c’est le début. Pas la fin.',
  lead: "On commence par ce qui rentre : le site ou l'outil qui fonctionne. Puis, si votre activité le demande, on connecte le reste — sans vous vendre de la technologie dont vous n'avez pas besoin.",
};

export const systemRoadModules: SystemRoadModule[] = [
  { key: 'site', label: 'Site ou boutique' },
  { key: 'crm-erp', label: 'CRM / ERP' },
  { key: 'ecommerce', label: 'E-commerce' },
  { key: 'outils', label: 'Outils métier' },
  { key: 'automatisation', label: 'Automatisation' },
  { key: 'systeme', label: 'Système' },
];

export const systemRoadProofs: SystemRoadProof[] = [
  {
    client: 'Maison Peinture Sénégal',
    chain: 'Site & gestion → ERP Odoo',
    result: undefined, // [RÉSULTAT — à confirmer] — rendu explicitement par le composant
  },
  {
    client: 'ATTA Africa',
    chain: 'Boutique → automatisations (commandes, relances, reporting)',
    result: undefined, // [RÉSULTAT — à confirmer] — rendu explicitement par le composant
  },
];
