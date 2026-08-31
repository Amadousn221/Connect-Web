// Hub Réalisations — copy extraite de `Connect Web - Réalisations.dc.html`.
// La grille est alimentée par `caseTeasers` (content/fr/accueil.ts) — 11 clients
// réels, captures réelles dans /public/assets/real. Les fiches de cas détaillées
// (/realisations/[slug]) attendent le contenu WordPress (jalon M3) : les cartes
// ne sont pas cliquables pour l'instant.
// Stats = FACTs déclarés PO (DECISION 22) — alignées sur l'accueil.

import type { CaseTeaser } from '../types';

export const realisationsMeta = {
  title: 'Réalisations',
  description:
    "Boutiques, plateformes, sites d'entreprise et institutionnels — l'ensemble du travail livré par Connect Web au Sénégal et en Afrique de l'Ouest.",
};

export const realisationsHero = {
  eyebrow: 'Réalisations',
  title: 'Des projets qui tournent, pour de vraies organisations.',
  subtitle:
    "Boutiques, plateformes, sites d'entreprise et institutionnels — voici l'ensemble de notre travail livré au Sénégal et en Afrique de l'Ouest.",
};

export const realisationsStats: { value: string; label: string }[] = [
  { value: '+20', label: 'projets réalisés' },
  { value: '3 ans', label: "d'expérience" },
  { value: '90 %', label: 'de clients qui reviennent' },
];

export const realisationsFilters: { key: NonNullable<CaseTeaser['group']> | 'tout'; label: string }[] = [
  { key: 'tout', label: 'Tout' },
  { key: 'ecommerce', label: 'E-commerce' },
  { key: 'plateforme', label: 'Plateformes' },
  { key: 'entreprise', label: "Sites d'entreprise" },
  { key: 'institutionnel', label: 'Institutionnel & ONG' },
];

export const realisationsFinalCta = {
  eyebrow: 'On en parle ?',
  title: 'Votre projet peut être le prochain.',
  cta: { label: 'Parlons de votre projet', href: '#contact' },
};
