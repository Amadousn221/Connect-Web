import type { StatTile } from '../types';

// ── A8 — Chiffres (V2.1, Lot C) ──────────────────────────────────────────
// §06.7 du Design Handoff. Données FACT déclarées par le PO (DECISION 22,
// 28 août 2026) — même convention que Maison Peinture / Link Shop.
// INTERDIT : 5e chiffre inventé, arrondi à la hausse, compteur en boucle.

export const chiffresIntro = {
  eyebrow: 'En chiffres',
  title: 'Ce que trois ans de projets donnent, en clair.',
};

export const stats: StatTile[] = [
  { label: 'Expérience', value: '3 ans', caption: "d'expérience sur des projets réels" },
  { label: 'Projets', value: '+20', caption: 'sites, boutiques et systèmes livrés' },
  { label: 'Délais', value: '2 semaines', caption: 'délai moyen du premier livrable' },
  { label: 'Fidélité', value: '90 %', caption: 'de clients qui reviennent' },
];
