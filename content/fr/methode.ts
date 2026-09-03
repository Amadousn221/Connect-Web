import type { MethodPhase } from '../types';

// ── P25 S09 — Méthode (MethodStepper) ──────────────────────────────────────
// Brief P25 §S09 : 4 phases (pas 3, pas 6) — Comprendre → Concevoir →
// Construire → Faire évoluer. « Comprendre » et « Faire évoluer » reprennent
// quasi directement les anciennes étapes 1 et 3 (ci-dessous, 3 étapes). La
// scission de l'ancienne étape 2 (« Concevoir & construire ») en deux phases
// distinctes reprend le motif déjà réel des étapes détaillées des pages
// d'offre (ex. content/fr/offres/boutiques-en-ligne.ts : « Design &
// prototypage » puis « Développement & paiements ») — aucune spécificité
// inventée, seulement généralisée au gabarit commun à tous les services.

export const methodeIntro = {
  eyebrow: 'Méthode',
  title: 'On ne commence jamais par coder.',
};

export const methodePhases: MethodPhase[] = [
  {
    num: '01',
    title: 'Comprendre',
    intention: "Comprendre le projet avant d'en parler solution.",
    actions: [
      'Une conversation de 30 à 60 minutes',
      'Enjeux, contexte, budget',
      'Un cadre partagé, pas un chiffre au doigt mouillé',
    ],
    deliverables: ['Devis clair'],
  },
  {
    num: '02',
    title: 'Concevoir',
    intention: 'Donner une forme concrète avant de construire.',
    actions: ['Maquettes et prototypes', 'Vous validez avant que le développement commence'],
    deliverables: ['Maquettes validées'],
  },
  {
    num: '03',
    title: 'Construire',
    intention: 'Construire, avec les briques qui comptent câblées dès le départ.',
    actions: [
      'Développement, avec des points hebdomadaires',
      'Paiement et intégrations câblés dès cette phase, pas ajoutés après coup',
      'Vous voyez le projet se monter et validez chaque étape',
    ],
    deliverables: ['Version testable en environnement de recette'],
  },
  {
    num: '04',
    title: 'Faire évoluer',
    intention: 'Mettre en ligne, transférer les clés, rester disponibles.',
    actions: [
      'Lancement',
      'Formation de votre équipe',
      'Transfert des accès à votre nom',
    ],
    deliverables: [
      'Accès complets remis',
      'Disponibilité ensuite pour automatisations, connexions, nouvelles fonctionnalités',
    ],
  },
];
