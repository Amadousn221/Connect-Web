import type { ResourceTeaser } from '../types';

// ── P25 S10 — Ressources (conditionnelle) ──────────────────────────────────
// P25 §08 est explicite : contenu Accueil hardcodé, PAS de CMS sur la home
// (même si les pages /ressources et /blog sont, elles, branchées sur Sanity).
// `resourcesEnabled` est un flag manuel qu'un humain bascule à `true` une fois
// ≥ 2 vrais articles prêts — jamais de titre placeholder publié (cohérent avec
// content/fr/ressources.ts → ressourcesEmpty : 0 ressource réelle aujourd'hui).

export const resourcesEnabled = false;

export const resourcesSectionIntro = {
  eyebrow: 'Ressources',
  title: 'Pour aller plus loin.',
};

// À remplir avec de vrais articles (Sanity ou saisie manuelle) avant de passer
// `resourcesEnabled` à `true`. Laisser vide tant qu'aucun contenu réel n'existe.
export const resourcesArticles: ResourceTeaser[] = [];
