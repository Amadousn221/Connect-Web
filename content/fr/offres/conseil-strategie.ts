import type { OfferContent } from '../../offres';

// Conseil & stratégie — porte d'entrée (DECISION 07/08). Pas de maquette
// dédiée : page sobre construite sur l'archétype d'offre (hero → problème →
// ce que l'audit donne → process → FAQ → CTA). Pas de prix (l'audit de
// cadrage est gratuit), pas de cas plein.

export const conseilStrategie: OfferContent = {
  slug: 'conseil-strategie',
  meta: {
    title: 'Conseil & stratégie',
    description:
      "Avant de construire, comprendre : un audit gratuit pour cadrer votre projet, choisir la bonne architecture et prioriser ce qui compte — sans engagement.",
  },

  hero: {
    eyebrow: 'Conseil & stratégie',
    breadcrumb: 'Conseil & stratégie',
    title: 'Avant de construire, on comprend.',
    subtitle:
      "Un audit gratuit pour cadrer votre projet, choisir la bonne architecture et prioriser ce qui compte. On part de votre problème, pas de notre catalogue.",
    ctas: [
      { label: 'Demander un audit gratuit', href: '#contact' },
      { label: 'Voir nos réalisations', href: '/realisations' },
    ],
    features: ['Gratuit et sans engagement', 'Réponse sous 24 h', 'Vous repartez avec un plan'],
  },

  pain: {
    eyebrow: 'Le problème',
    title: 'Savoir par où commencer, c’est déjà la moitié du travail.',
    lead: "Site, boutique, ERP, automatisation : quand on ne sait pas ce qui compte en premier, on investit au mauvais endroit, ou on repousse le projet d'année en année.",
    items: [
      { title: 'Trop d’options, aucune priorité', body: "Chaque prestataire pousse sa solution. Sans regard neutre, difficile de savoir ce qui aurait le plus d'impact pour vous, maintenant." },
      { title: 'Un devis qu’on ne peut pas comparer', body: "Sans périmètre clair, deux devis pour « un site » peuvent aller du simple au triple — et vous n'avez aucun moyen de trancher." },
      { title: 'Le risque de reconstruire dans deux ans', body: 'Un choix d’architecture fait à la légère se paie plus tard : outil qui ne suit pas la croissance, données coincées, tout à refaire.' },
    ],
  },

  deliverables: {
    eyebrow: "Ce que l'audit vous donne",
    title: 'Un plan clair, que vous soyez client ou non.',
    lead: "L'audit de cadrage dure 30 à 60 minutes. Vous en ressortez avec de quoi décider — avec nous ou avec quelqu'un d'autre.",
    items: [
      { title: 'Un diagnostic de votre situation', body: 'Où vous en êtes, ce qui bloque vraiment, ce qui fonctionne déjà et qu’il faut garder.' },
      { title: 'Une priorisation', body: "Ce qui compte en premier, ce qui peut attendre — pour investir là où l'impact est le plus fort." },
      { title: 'Une recommandation d’architecture', body: 'Plateforme du marché ou sur-mesure, quel outil, comment les pièces se connectent — et pourquoi.' },
      { title: 'Un ordre de grandeur budgétaire', body: 'Une fourchette honnête pour le périmètre cadré, pour que vous puissiez décider en connaissance de cause.' },
    ],
  },

  process: {
    eyebrow: 'Comment ça se passe',
    title: 'Trois échanges, pas trois mois.',
    steps: [
      { title: 'Vous nous écrivez', body: 'Quelques lignes sur votre activité et ce que vous cherchez à faire. On revient vers vous sous 24 h.', deliverable: 'créneau d’échange fixé' },
      { title: 'On cadre ensemble', body: 'Un appel de 30 à 60 minutes : votre contexte, vos contraintes, votre budget. On pose les bonnes questions.', deliverable: 'cadre partagé du projet' },
      { title: 'On vous envoie le plan', body: 'Un document court : diagnostic, priorités, recommandation d’architecture, ordre de grandeur. À vous de jouer ensuite.', deliverable: 'note de cadrage + devis si vous continuez' },
    ],
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: "Ce qu'on nous demande sur le conseil.",
    items: [
      { q: "L'audit est vraiment gratuit ?", a: "Oui. Le cadrage initial est gratuit et sans engagement — c'est notre façon de commencer une relation, pas un produit d'appel déguisé." },
      { q: 'Faut-il déjà savoir ce qu’on veut ?', a: "Non, au contraire. La plupart des gens qui nous contactent ne savent pas encore. C'est exactement le rôle de cet échange." },
      { q: 'Et si je décide de ne pas travailler avec vous ?', a: 'Vous repartez quand même avec le plan. On préfère un cadrage honnête qui vous aide, même sans suite, à un client mal orienté.' },
      { q: 'Vous conseillez sur des projets que vous ne réalisez pas ?', a: "Si votre besoin sort de notre périmètre (design pur, très gros ERP, hardware…), on vous le dit et on vous oriente. On ne prend pas un projet pour le prendre." },
    ],
  },

  finalCta: {
    eyebrow: 'On commence ?',
    title: 'Décrivez-nous votre situation. On vous répond avec un premier cadrage.',
    body: 'Même si vous ne savez pas encore ce dont vous avez besoin — c’est souvent le meilleur moment pour en parler.',
    ctas: [
      { label: 'Demander un audit gratuit', href: '#contact' },
      { label: 'WhatsApp', href: 'https://wa.me/221783438249' },
    ],
    features: ['Gratuit', 'Sans engagement', 'Réponse sous 24 h'],
  },
};
