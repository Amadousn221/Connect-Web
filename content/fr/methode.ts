import type { MethodStep } from '../types';

// ── S09 — Méthode (Refonte Accueil, brief §04-S09 / D29) ────────────────────
// 4 phases navigables (stepper desktop / accordéon mobile). La granularité à
// 6 étapes, si utile, ira sur une page Méthode dédiée — pas ici. Contenu ancré
// Connect Web : paiement câblé dès la conception, remise de tous les accès à la
// fin. Pas de triptyque interchangeable. Aucun chiffre inventé.

export const methodeIntro = {
  eyebrow: 'Méthode',
  title: 'On ne commence jamais par coder.',
};

export const methodeSteps: MethodStep[] = [
  {
    num: '01',
    title: 'Comprendre',
    intent:
      "Avant de proposer quoi que ce soit, on regarde comment votre organisation fonctionne vraiment.",
    does: "Un échange de cadrage de 30 à 60 minutes, l'audit de l'existant, la liste de ce qui bloque et de ce qui compte en premier. On sort avec un périmètre partagé et un devis clair — pas un chiffre au doigt mouillé.",
    deliverable: 'Note de cadrage + devis',
  },
  {
    num: '02',
    title: 'Concevoir',
    intent:
      "On dessine la solution la plus simple qui règle le problème — pas la plus impressionnante.",
    does: "Architecture, arborescence, maquettes des écrans clés, choix des outils (plateforme du marché ou sur-mesure). Le paiement et les connexions sont prévus dès cette étape, pas ajoutés après.",
    deliverable: 'Maquettes + architecture validées',
  },
  {
    num: '03',
    title: 'Construire',
    intent:
      "On développe par itérations, avec des points réguliers — vous voyez l'outil se monter avant la mise en ligne.",
    does: "Développement, intégration du paiement mobile et international, connexion à vos outils, recette avec vous, formation de votre équipe.",
    deliverable: 'Outil en ligne + équipe formée',
  },
  {
    num: '04',
    title: 'Faire évoluer',
    intent:
      "La mise en ligne n'est pas la fin. On reste disponibles pour connecter et automatiser au fil de l'eau.",
    does: "Remise de tous les accès à votre nom, maintenance, évolutions, nouvelles automatisations. Sans contrat qui vous enferme — vous partez quand vous voulez.",
    deliverable: 'Tous les accès à votre nom',
  },
];
