// Page Agence — copy extraite de `Connect Web - Agence.dc.html`.
// L'équipe (noms, rôles, photos) n'est pas fournie : la section est masquée en
// production (repère preview uniquement, règle P08 — jamais de placeholder
// visible côté public). Stats = FACTs homepage (DECISION 22), pas de « secteurs »
// chiffré (non vérifiable).

import type { Cta } from '../types';

export const agenceMeta = {
  title: 'Agence',
  description:
    "Connect Web, studio digital basé à Dakar : on conçoit et connecte les sites, boutiques et outils numériques des organisations d'Afrique de l'Ouest — du premier site à l'automatisation complète.",
};

export const agenceHero = {
  eyebrow: "L'agence",
  title: "Un studio digital basé à Dakar, au service des organisations d'ici.",
  subtitle:
    "On conçoit et connecte les sites, boutiques et outils numériques qui font tourner boutiques, entreprises et associations ouest-africaines — du premier site à l'automatisation complète.",
  ctas: [
    { label: 'Parlons de votre projet', href: '#contact' },
    { label: 'Voir nos réalisations', href: '/realisations' },
  ] as [Cta, Cta],
};

export const agenceMission = {
  eyebrow: 'Notre mission',
  title: 'Rendre le digital utile, pas juste joli.',
  paragraphs: [
    "Trop de sites au Sénégal sont beaux et inutiles — ou pratiques et laids. On construit les deux à la fois : des sites que vos clients trouvent crédibles, et des outils que votre équipe utilise vraiment.",
    "Boutiques, entreprises, ONG — chaque organisation a un budget et un contexte différents. On adapte le périmètre, jamais le sérieux.",
  ],
};

export const agenceValues: { icon: 'shield' | 'check' | 'pin'; title: string; body: string }[] = [
  {
    icon: 'shield',
    title: 'Vous possédez tout',
    body: 'Domaine, hébergement, code, contenu — tout est à votre nom, dès le premier jour.',
  },
  {
    icon: 'check',
    title: 'Un périmètre honnête',
    body: 'On dit non aux fonctionnalités inutiles et oui à un budget qui correspond à votre réalité.',
  },
  {
    icon: 'pin',
    title: 'Ancrés à Dakar',
    body: "On connaît les réalités locales — paiement mobile, connexion, langues, habitudes d'achat.",
  },
];

export const agenceStats: { value: string; label: string }[] = [
  { value: '3 ans', label: "d'expérience sur des projets réels" },
  { value: '+20', label: 'projets livrés' },
  { value: '24 h', label: 'délai de première réponse' },
  { value: '100 %', label: 'de la propriété chez vous' },
];

export const agenceTeamIntro = {
  eyebrow: "L'équipe",
  title: 'Les personnes derrière vos projets.',
  lead: "Une petite équipe, directement impliquée du premier appel à la mise en ligne — pas d'intermédiaires.",
};

export const agenceMethod = {
  eyebrow: 'Comment on travaille',
  title: 'Une méthode, quel que soit le projet.',
  steps: [
    { num: '01', title: 'Écoute', body: 'On cadre vos objectifs, votre public et votre budget réel.' },
    { num: '02', title: 'Conception', body: 'On dessine et on valide chaque écran avec vous avant de coder.' },
    { num: '03', title: 'Construction', body: 'On développe, teste et connecte vos outils du quotidien.' },
    { num: '04', title: 'Autonomie', body: 'On met en ligne et on forme votre équipe à tout gérer seule.' },
  ],
};
