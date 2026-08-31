import type { OfferContent } from '../../offres';

// Sites d'entreprise (offre Niveau 1). Copy extraite de
// `Connect Web - Sites d'entreprise.dc.html`. Pas de section « Pourquoi nous »
// ni « Ce que ça change » sur cette page (archétype allégé). Cas liés réels.

export const sitesEntreprise: OfferContent = {
  slug: 'sites-entreprise',
  meta: {
    title: "Sites d'entreprise",
    description:
      "Présentation d'entreprise, offre, preuve et contact — un site au standard international, bilingue FR/EN, qui rassure vos clients, partenaires et investisseurs, où qu'ils soient, et que vous possédez entièrement.",
  },

  hero: {
    eyebrow: "Sites d'entreprise",
    breadcrumb: "Sites d'entreprise",
    title: "Un site à la hauteur de votre crédibilité, prêt pour l'export.",
    subtitle:
      "Présentation d'entreprise, offre, preuve et contact — un site au standard international qui rassure vos clients, partenaires et investisseurs, où qu'ils soient.",
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: 'Voir les sites livrés', href: '#cas' },
    ],
    features: ['Standard international', "Prêt pour l'export", 'Vous possédez tout'],
    image: '/assets/svc-entreprise.jpg',
  },

  pain: {
    eyebrow: 'Le problème',
    title: "Votre site ne dit pas encore qui vous êtes vraiment.",
    lead: 'Un site daté ou générique freine chaque prise de contact — surtout face à des clients ou partenaires internationaux qui jugent en quelques secondes.',
    items: [
      { title: 'Une première impression datée', body: 'Un design ancien ou un site non responsive fait douter avant même la première ligne lue.' },
      { title: "Peu crédible à l'international", body: 'Sans version en anglais, ni preuve claire, un partenaire étranger passe au concurrent suivant.' },
      { title: "L'offre reste floue", body: "Sans hiérarchie claire de l'offre et des preuves, le visiteur repart sans comprendre ce que vous faites." },
    ],
  },

  deliverables: {
    eyebrow: "Ce qu'on construit",
    title: 'Un site qui installe la confiance en une visite.',
    lead: "Chaque livrable sert la crédibilité et la prise de contact. La technologie est notre preuve de compétence, jamais l'argument de vente.",
    items: [
      { title: 'Positionnement & offre clairs', body: "Une hiérarchie de l'information qui répond en 10 secondes : qui vous êtes, ce que vous faites, pour qui." },
      { title: 'Bilingue FR/EN', body: "Une version internationale prête pour vos clients, partenaires et bailleurs à l'étranger." },
      { title: 'Preuve & réassurance', body: 'Réalisations, chiffres réels et clients cités — la crédibilité se construit sur des faits.' },
      { title: 'SEO & performance', body: "Site rapide et indexable, pensé pour être trouvé par les bons prospects, ici et à l'étranger." },
    ],
    toolsLabel: "Des outils qu'on maîtrise",
    tools: ['WordPress', 'Webflow', 'Développement sur-mesure', 'SEO technique'],
  },

  relatedIntro: {
    eyebrow: 'Sites livrés',
    title: "Des sites d'entreprise qui installent la confiance.",
    lead: 'Tourisme, médical, pêche — voici une partie des sites corporate que nous avons construits.',
  },
  relatedCaseNames: ['ADA Voyages', 'DDS Medical', 'Tamou Fishing'],

  process: {
    eyebrow: 'Notre process',
    title: 'De la marque au site qui convainc.',
    steps: [
      { title: 'Découverte & positionnement', body: 'On clarifie votre offre, vos publics et ce qui doit convaincre en premier.', deliverable: 'note de positionnement partagée' },
      { title: 'Design & prototypage', body: 'On conçoit une maquette au standard international, validée avant de coder.', deliverable: 'maquette validée' },
      { title: 'Développement & contenu', body: 'On construit le site, on intègre le contenu bilingue et on optimise le SEO.', deliverable: 'site bilingue sur environnement de test' },
      { title: 'Lancement & suivi', body: 'On met en ligne, on forme votre équipe, et on suit les performances.', deliverable: 'site en ligne, équipe formée' },
    ],
  },

  pricing: {
    eyebrow: 'Investissement',
    title: 'Un budget clair, cadré à votre périmètre.',
    body: 'Pas de surprise : on cadre le nombre de pages et le contenu ensemble, puis on chiffre. Vous restez propriétaire de tout.',
    cardLabel: "Site d'entreprise",
    pricePlaceholder: '[À PARTIR DE]',
    includes: [
      'Site complet, bilingue FR/EN',
      'SEO technique inclus',
      'Accès et domaine à votre nom',
    ],
    cta: { label: 'Demander un devis gratuit', href: '#contact' },
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: "Ce qu'on nous demande sur les sites d'entreprise.",
    items: [
      { q: "Est-ce que je vais perdre mon référencement lors d'une refonte ?", a: "Non — on planifie chaque refonte pour préserver votre SEO : redirections, structure d'URL et contenu conservés ou améliorés." },
      { q: 'Pouvez-vous rédiger le contenu et les textes ?', a: 'Oui, on peut accompagner la rédaction FR/EN ou partir de vos textes existants et les structurer pour convertir.' },
      { q: "Combien de temps prend un site d'entreprise ?", a: "On cadre un calendrier réaliste dès la découverte, selon le nombre de pages et de contenus, et on vous montre l'avancement à chaque étape." },
      { q: 'À qui appartient le site une fois livré ?', a: "Vous, entièrement. Domaine, hébergement et accès sont à votre nom. Pas de dépendance — c'est une règle chez nous." },
    ],
  },

  systemBridge: {
    eyebrow: 'Du site au système',
    title: 'Une fois le site en ligne, on amplifie.',
    body: "Le site installe la confiance ; le marketing amène les bons visiteurs, et l'ERP garde vos équipes alignées derrière.",
    link: { label: 'Découvrir Le système →', href: '/#systeme' },
  },

  finalCta: {
    eyebrow: 'On en parle ?',
    title: 'Prêt pour un site à la hauteur de votre ambition ?',
    body: 'Racontez-nous votre projet — on revient vers vous en moins de 24 h avec un premier cadrage et un devis gratuit.',
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: 'WhatsApp', href: 'https://wa.me/221783438249' },
    ],
    features: ['Réponse sous 24 h', 'Devis gratuit', 'Vous possédez tout'],
  },
};
