import type { Cta, MethodStep } from '../types';

// ── S09 — Méthode (Refonte Accueil, brief §04-S09 / D29) ────────────────────
// 4 phases navigables (stepper desktop / accordéon mobile). La granularité à
// 6 étapes, si utile, ira sur une page Méthode dédiée — pas ici. Contenu ancré
// Connect Web : paiement câblé dès la conception, remise de tous les accès à la
// fin. Pas de triptyque interchangeable. Aucun chiffre inventé.

// Copy V1 (validée PO) — une phrase par phase (le champ `does` détaillé
// ci-dessus est retiré : le brief V1 ne donne plus qu'une phrase + livrable).
export const methodeIntro = {
  eyebrow: 'Notre méthode',
  title: 'On ne commence jamais par coder.',
};

export const methodeSteps: MethodStep[] = [
  {
    num: '01',
    title: 'Comprendre',
    intent: 'Nous clarifions votre objectif, vos utilisateurs, vos contraintes et l’existant.',
    deliverable: 'Note de cadrage + priorités',
  },
  {
    num: '02',
    title: 'Concevoir',
    intent: 'Nous définissons le parcours, la structure, les contenus et la solution adaptée.',
    deliverable: 'Architecture et prototype',
  },
  {
    num: '03',
    title: 'Construire',
    intent: 'Nous développons par étapes, avec des points de validation réguliers.',
    deliverable: 'Première version fonctionnelle',
  },
  {
    num: '04',
    title: 'Faire évoluer',
    intent: 'Nous accompagnons la mise en ligne, la prise en main et les améliorations futures.',
    deliverable: 'Outil en ligne et équipe accompagnée',
  },
];

export const methodeOutro = {
  text: 'Vous voyez le projet prendre forme avant sa mise en ligne. Chaque étape produit quelque chose de concret à vérifier et à valider.',
  link: { label: 'Découvrir notre manière de travailler', href: '/agence' } as Cta,
};
