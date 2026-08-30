import type { MethodStep } from '../types';

// ── A10 — Méthode (V2.1, Lot C) ─────────────────────────────────────────
// §06.9 du Design Handoff. 3 étapes, liste ordonnée sémantique. Pas d'icône,
// pas de ligne de connexion animée, pas de rail scroll-spy.

export const methodeIntro = {
  eyebrow: 'Méthode',
  title: 'On ne commence jamais par coder.',
};

export const methodeSteps: MethodStep[] = [
  {
    num: '01',
    title: 'Cadrer.',
    body: 'Une conversation de 30 à 60 minutes pour comprendre le projet, les enjeux, le contexte, le budget. On sort avec un cadre partagé et un devis clair — pas un chiffre au doigt mouillé.',
  },
  {
    num: '02',
    title: 'Concevoir & construire.',
    body: 'Design puis développement, avec des points hebdomadaires. Vous voyez la boutique se monter avant qu’elle soit en ligne. Vous validez chaque étape.',
  },
  {
    num: '03',
    title: 'Mettre en ligne & faire évoluer.',
    body: 'Lancement, formation de votre équipe, transfert des accès à votre nom. Ensuite, on reste disponibles pour faire évoluer — automatisations, connexions, nouvelles fonctionnalités.',
  },
];
