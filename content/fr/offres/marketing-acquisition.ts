import type { OfferContent } from '../../offres';

// Marketing & acquisition (offre Niveau 2 — « Le système »). Copy extraite de
// `Connect Web - Marketing.dc.html`. Slug = /services/marketing-acquisition.
// Pas de cas plein (asymétrie de preuve assumée, P08) : honnêteté sur l'offre
// la plus jeune de l'agence.

export const marketingAcquisition: OfferContent = {
  slug: 'marketing-acquisition',
  meta: {
    title: 'Marketing & acquisition',
    description:
      "Faire venir les bons visiteurs, ceux qui achètent — pas juste du trafic pour le chiffre. On travaille l'acquisition (SEO, publicité, e-mail) avec la même exigence de preuve que le reste, et vos comptes restent à votre nom.",
  },

  hero: {
    eyebrow: 'Marketing · Acquisition',
    breadcrumb: 'Marketing',
    title: 'Un beau site ne sert à rien si personne ne le voit.',
    subtitle:
      "Faire venir les bons visiteurs, ceux qui achètent — pas juste du trafic pour le chiffre. On travaille l'acquisition avec la même exigence de preuve que le reste.",
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: 'Demander un audit →', href: '#contact' },
    ],
    features: ['SEO + publicité + e-mail', 'Résultats suivis, pas des promesses', 'Vous possédez tout'],
  },

  pain: {
    eyebrow: 'Le problème',
    title: "Le budget marketing qui part sans qu'on sache où.",
    lead: "On met de l'argent dans des publicités, on « boost » des posts, et à la fin du mois, impossible de dire ce que ça a rapporté. Attirer du trafic ne sert à rien si ce n'est pas le bon : mille visiteurs qui repartent valent moins que dix qui achètent.",
    items: [
      { title: 'Invisible sur Google', body: 'Sans SEO, vos concurrents apparaissent avant vous sur les recherches qui devraient vous amener des clients.' },
      { title: 'La pub sans mesure gaspille le budget', body: "Des campagnes lancées sans suivi de résultat — impossible de savoir ce qui rapporte et ce qui coûte pour rien." },
      { title: 'Les clients ne reviennent pas', body: "Sans relance ni e-mail de suivi, chaque client acquis à grand prix n'achète qu'une seule fois." },
    ],
  },

  deliverables: {
    eyebrow: "Ce qu'on construit",
    title: 'Ce sur quoi on peut vous accompagner.',
    lead: "Être trouvable sur Google quand vos clients cherchent ce que vous vendez, des campagnes ciblées vers les bonnes personnes, et mesurer ce qui marche pour arrêter ce qui ne marche pas.",
    items: [
      { title: 'SEO local & national', body: 'Contenu et structure technique pour apparaître sur les recherches qui comptent pour vous.' },
      { title: 'Publicité ciblée & mesurée', body: "Campagnes Meta et Google suivies au résultat — on coupe ce qui ne marche pas, on renforce ce qui marche." },
      { title: 'E-mail & relance client', body: "Des séquences simples pour faire revenir un client une fois — pas juste attendre qu'il revienne seul." },
      { title: 'Rapports de performance clairs', body: "Ce qui a été fait, ce que ça a rapporté — un suivi lisible, pas un tableau incompréhensible." },
    ],
    toolsLabel: "Des outils qu'on maîtrise",
    tools: ['Google Ads', 'Meta Ads', 'SEO technique', 'Email marketing', 'Analytics'],
  },

  editorial: {
    eyebrow: 'Notre approche',
    title: "Pas de promesses en l'air.",
    blocks: [
      "On est une équipe de conception et de développement avant tout. Sur l'acquisition, on avance avec méthode : on démarre petit, on mesure, on ajuste. On ne vous promettra pas la première place sur Google ni des ventes garanties — personne de sérieux ne le fait.",
    ],
    sideLabel: 'Ce sur quoi on s’engage',
    sideFacts: [
      '**On mesure tout** — vous savez ce que chaque action coûte et rapporte.',
      "**On commence petit** — un test avant d'engager un gros budget.",
      "**On est transparents sur nos limites** — c'est notre offre la plus jeune, on ne fait pas semblant du contraire.",
      '**Vos comptes sont à vous** — publicité, analytics : tout à votre nom.',
    ],
  },

  process: {
    eyebrow: 'Notre process',
    title: 'De la stratégie aux premiers résultats mesurables.',
    steps: [
      { title: 'Audit & priorités', body: "On regarde ce qui existe déjà et on choisit les canaux qui ont le plus de chances de payer.", deliverable: 'plan de priorités par canal' },
      { title: 'Plan & contenus', body: 'On prépare le calendrier, les visuels et les textes nécessaires pour lancer proprement.', deliverable: 'calendrier et contenus prêts au lancement' },
      { title: 'Lancement & suivi', body: 'On active les campagnes et on suit les résultats dès les premiers jours.', deliverable: 'campagnes actives et tableau de suivi' },
      { title: 'Optimisation', body: 'On ajuste le ciblage et le budget selon ce qui fonctionne vraiment, mois après mois.', deliverable: "rapport mensuel et ajustements" },
    ],
  },

  pricing: {
    eyebrow: 'Investissement',
    title: 'Un budget adapté à vos objectifs, pas un forfait figé.',
    body: "Pas de surprise : on cadre le périmètre ensemble et on avance sur un devis clair. Vous restez propriétaire de tout ce qu'on construit.",
    cardLabel: 'Marketing',
    pricePlaceholder: 'Selon périmètre.',
    priceFrom: '',
    includes: [
      'Plan priorisé selon votre budget réel',
      'Rapport de performance mensuel',
      'Aucun engagement long terme imposé',
    ],
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: "Ce qu'on nous demande sur le marketing.",
    items: [
      { q: 'En combien de temps voit-on des résultats ?', a: 'La publicité donne des signaux dès les premières semaines. Le SEO prend plus de temps (2-3 mois), mais dure bien plus longtemps une fois en place.' },
      { q: 'Faut-il un gros budget publicitaire pour commencer ?', a: 'Non — on démarre avec un budget test, on mesure ce qui convertit, puis on augmente sur ce qui fonctionne.' },
      { q: 'Comment savoir si ça marche vraiment ?', a: 'On suit des indicateurs concrets — visites, demandes, ventes — pas juste des vues ou des likes. Vous voyez ce que ça rapporte, en clair.' },
      { q: 'Les comptes publicitaires nous appartiennent ?', a: 'Oui. Comptes publicitaires, analytics et accès sont créés à votre nom — vous gardez tout, même si vous arrêtez de travailler avec nous.' },
      { q: 'Vous garantissez la première place sur Google ?', a: "Non, et méfiez-vous de ceux qui la garantissent. On travaille votre référencement avec méthode, mais aucun sérieux ne promet une position précise sur Google." },
      { q: "C'est votre spécialité ?", a: "Notre force prouvée, c'est de construire des plateformes qui vendent et des systèmes qui tournent. Le marketing, on l'aborde avec la même rigueur, mais on préfère vous le dire clairement plutôt que de survendre." },
    ],
  },

  systemBridge: {
    eyebrow: 'Aller plus loin',
    title: 'Vous avez un site ou une boutique qui convertit ?',
    body: "C'est la condition pour que l'acquisition ait du sens : envoyer du trafic vers un site qui ne vend pas, c'est gâcher un budget. On s'assure d'abord que la base convertit.",
    link: { label: 'Découvrir Boutiques en ligne →', href: '/services/boutiques-en-ligne' },
  },

  finalCta: {
    eyebrow: 'On en parle ?',
    title: "Envie d'attirer les bons clients, sans gâcher votre budget ? Parlons-en.",
    body: 'Racontez-nous votre projet — on revient vers vous en moins de 24 h avec un premier cadrage et un devis gratuit.',
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: 'WhatsApp', href: 'https://wa.me/221783438249' },
    ],
    features: ['Réponse sous 24 h', 'On mesure tout', 'Vos comptes vous appartiennent'],
  },
};
