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
  { label: 'Expérience', value: '3 ans', caption: "d'expérience", icon: 'calendar' },
  { label: 'Projets', value: '20 projets', caption: 'réalisés', icon: 'folder' },
  { label: 'Délais', value: '2 semaines', caption: 'avant le premier livrable', icon: 'bolt' },
];

// Copy V1 — brief PO : « [INTITULÉ ET SOURCE À CONFIRMER] ». Ne publier ce
// chiffre qu'après confirmation de son exactitude et de sa signification —
// masqué en production, visible en preview uniquement (StatsBlock.tsx).
export const pendingStat: StatTile = {
  label: '[À confirmer]',
  value: '90 %',
  caption: '[intitulé et source à confirmer]',
  icon: 'repeat',
};
