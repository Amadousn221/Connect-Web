import type { OfferContent } from '../../offres';

// Plateformes & applications (offre Niveau 1). Copy extraite de
// `Connect Web - Plateformes et applications.dc.html`. Placeholder prix
// [À PARTIR DE] conservé (DECISION 10). Cas SCOD VTC : capture réelle dispo.

export const plateformesApplications: OfferContent = {
  slug: 'plateformes-applications',
  meta: {
    title: 'Plateformes & applications',
    description:
      "Réservation, portails clients, gestion sur-mesure : on construit la plateforme qui remplace le suivi manuel et donne à votre équipe une vue claire, en temps réel — et que vous possédez entièrement.",
  },

  hero: {
    eyebrow: 'Plateformes & applications',
    breadcrumb: 'Plateformes & applications',
    title:
      'Vos opérations méritent mieux que des tableurs et des appels. On construit la plateforme qui les gère.',
    subtitle:
      "Réservation, portails clients, gestion sur-mesure — une plateforme qui remplace le suivi manuel et donne à votre équipe une vue claire, en temps réel.",
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: 'Voir la plateforme livrée', href: '#cas' },
    ],
    features: ['Réservation en temps réel', 'Portails clients & équipes', 'Vous possédez tout'],
    image: '/assets/svc-app.jpg',
  },

  pain: {
    eyebrow: 'Le problème',
    title: 'Vos opérations tournent encore à la main.',
    lead: "Réservations par téléphone, plannings sur tableur, suivi éclaté entre WhatsApp et Excel : ça tient, jusqu'au jour où ça ne tient plus.",
    items: [
      {
        title: "Trop d'appels, pas assez de suivi",
        body: "Chaque réservation dépend d'un appel ou d'un message — et d'une personne disponible pour la noter.",
      },
      {
        title: 'Le planning vit dans un tableur',
        body: "Doublons, conflits d'horaires, versions qui se contredisent entre collègues.",
      },
      {
        title: "Vos clients n'ont pas de vue claire",
        body: 'Sans portail, chaque question sur une réservation redevient un appel de plus pour votre équipe.',
      },
      {
        title: 'Les paiements se perdent',
        body: 'Encaissés à la main, notés quelque part, parfois oubliés — sans système, le suivi financier repose sur la mémoire de quelqu’un.',
      },
      {
        title: "Grandir voudrait dire embaucher quelqu'un pour gérer le désordre",
        body: "Plus l'activité grandit, plus ce fonctionnement manuel coûte cher — en temps, en erreurs, en occasions manquées. La solution ne devrait pas être d'ajouter une personne pour compenser un outil qui manque.",
      },
    ],
  },

  deliverables: {
    eyebrow: "Ce qu'on construit",
    title: 'Une plateforme pensée pour vos opérations réelles.',
    lead: "Chaque livrable remplace une tâche manuelle par un flux clair. La technologie est notre preuve de compétence, jamais l'argument de vente.",
    items: [
      { title: 'Réservation & planning en temps réel', body: 'Disponibilités, créneaux et confirmations gérés automatiquement, sans double saisie.' },
      { title: 'Portail client & espace équipe', body: "Vos clients suivent leur réservation ; votre équipe a une vue unique sur l'activité." },
      { title: 'Gestion sur-mesure', body: 'Flux, rôles et règles adaptés à votre métier — pas un logiciel générique forcé sur votre activité.' },
      { title: 'Notifications & rappels automatiques', body: 'SMS, e-mail ou WhatsApp — les rappels partent seuls, plus personne ne les envoie à la main.' },
      { title: 'Le paiement intégré', body: 'Mobile Money et/ou carte selon votre activité — encaissé directement dans le flux, plus besoin de suivre les paiements à part.' },
      { title: 'Une plateforme qui vous appartient', body: 'Code, hébergement, accès, base de données : tout à votre nom. Aucune dépendance à Connect Web pour continuer à faire tourner votre plateforme.' },
    ],
    toolsLabel: "Des outils qu'on maîtrise",
    tools: ['Applications web sur-mesure', 'PWA mobile', 'API & intégrations', 'Paiement & réservation en ligne'],
  },

  why: {
    eyebrow: 'Pourquoi nous',
    title: 'Pourquoi une activité choisit Connect Web pour sa plateforme.',
    items: [
      { title: "On part de vos flux réels, pas d'un logiciel générique", body: 'Chaque plateforme est construite sur ce que vous faites vraiment — pas adaptée d’un modèle standard qui ne colle qu’à moitié.' },
      { title: 'On construit pour la croissance', body: "La base est pensée pour tenir quand le volume monte, pas pour craquer au premier pic d'activité." },
      { title: 'Vous possédez tout, dès le premier jour', body: "Code, données, accès — à votre nom. Aucune dépendance à l'agence pour continuer à faire tourner votre plateforme." },
      { title: 'On cadre avant de chiffrer', body: 'Un audit sérieux avant tout devis — pour que le périmètre soit réaliste, pas gonflé ni sous-estimé.' },
      { title: 'On reste après le lancement', body: "Formation de votre équipe et disponibilité pour ajuster une fois la plateforme en usage réel — le projet ne s'arrête pas à la mise en ligne." },
      { title: 'Une preuve réelle, pas une promesse', body: "SCOD VTC tourne aujourd'hui avec une plateforme qu'on a construite — ce n'est pas un argument commercial abstrait." },
    ],
  },

  featuredCase: {
    eyebrow: 'Cas plein',
    name: 'SCOD VTC',
    category: 'Mobilité · Réservation & paiement',
    body: 'SCOD VTC — une plateforme de réservation et de paiement pour un service de transport, à la place de la gestion manuelle.',
    quote: '« Réservation VTC premium à Dakar, tarif fixe garanti et suivi en temps réel. »',
    primaryCta: { label: 'Voir le cas complet →', href: '/realisations' },
    image: { src: '/assets/real/scod-vtc.jpg', alt: "Plateforme de réservation SCOD VTC réalisée par Connect Web" },
  },

  benefits: {
    eyebrow: 'Ce que ça change',
    title: "Ce qu'une vraie plateforme change pour votre activité.",
    items: [
      { title: 'Vous arrêtez de perdre du temps au téléphone', body: "Chaque réservation qui passait par un appel ou un message devient un flux géré seul, à n'importe quelle heure." },
      { title: "Vous grandissez sans embaucher juste pour gérer le désordre", body: "Le volume qui monte devient une bonne nouvelle, pas un goulot d'étranglement — le système absorbe ce qu'une personne ne pourrait plus suivre à la main." },
      { title: 'Vos clients arrêtent de vous rappeler pour un statut', body: 'Un portail qui répond aux questions courantes libère votre équipe des appels de suivi répétitifs.' },
      { title: "Vous devenez l'organisation qu'on prend au sérieux", body: "Une plateforme professionnelle, plutôt qu'un suivi par message, change la perception qu'un partenaire ou un client se fait de votre sérieux opérationnel." },
    ],
  },

  process: {
    eyebrow: 'Notre process',
    title: "De l'opération manuelle à la plateforme.",
    steps: [
      { title: 'Découverte des flux', body: 'On cartographie vos opérations réelles : qui fait quoi, où ça bloque.', deliverable: 'cartographie de vos opérations' },
      { title: 'Design & prototypage', body: 'On dessine les parcours réservation, portail et back-office avant de coder.', deliverable: 'maquettes des parcours validées' },
      { title: 'Développement & tests', body: 'On construit la plateforme et on la teste avec votre équipe sur le terrain.', deliverable: 'plateforme testée en conditions réelles' },
      { title: 'Lancement & suivi', body: 'On met en ligne, on forme vos équipes, et on reste présents pour ajuster.', deliverable: 'plateforme en ligne, équipe formée' },
    ],
  },

  pricing: {
    eyebrow: 'Investissement',
    title: 'Combien ça coûte ?',
    body: "Une plateforme sur-mesure se chiffre selon vos besoins réels : plus il y a de fonctions et d'opérations à couvrir, plus le projet est conséquent. On cadre précisément avec vous avant de chiffrer. Souvent, un audit est la bonne première étape.",
    cardLabel: 'Plateforme sur-mesure',
    pricePlaceholder: 'Selon les besoins',
    priceFrom: '',
    includes: [
      'Réservation, portail et back-office',
      'Cadrage des flux inclus',
      'Accès et domaine à votre nom',
    ],
    cta: { label: 'Demander un audit →', href: '#contact' },
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: "Ce qu'on nous demande sur les plateformes.",
    items: [
      { q: "Mon activité est très spécifique — vous partez d'un logiciel tout fait ?", a: 'Non — on part de vos flux réels. La plateforme est construite sur-mesure pour votre métier, pas adaptée d’un modèle générique.' },
      { q: 'Combien de temps pour construire une plateforme ?', a: 'Ça dépend du nombre de flux à construire. On cadre un calendrier réaliste dès la découverte et on avance par étapes visibles.' },
      { q: 'Peut-on faire évoluer la plateforme après le lancement ?', a: "Oui, c'est même l'idée : on construit une base solide et documentée, prête à recevoir de nouveaux flux au fur et à mesure de vos besoins." },
      { q: "La plateforme m'appartient-elle entièrement ?", a: 'Oui. Code, hébergement, accès et base de données sont à votre nom. Aucune dépendance à Connect Web pour continuer à faire tourner votre plateforme.' },
      { q: 'Quelle différence avec un site classique ?', a: 'Un site montre. Une plateforme fait : elle prend des réservations, encaisse, gère des comptes, suit des opérations. Si votre activité repose sur des transactions, il vous faut une plateforme.' },
      { q: "C'est forcément plus cher ?", a: "Généralement oui, parce que c'est du sur-mesure. Mais ça remplace du temps humain et des erreurs. On regarde ensemble si le jeu en vaut la chandelle — parfois un audit suffit à le dire." },
    ],
  },

  systemBridge: {
    eyebrow: 'Du site au système',
    title: 'Une fois la plateforme lancée, on connecte.',
    body: "ERP et automatisation relient votre plateforme au reste de votre gestion — pour que l'information circule sans ressaisie.",
    link: { label: 'Découvrir Le système →', href: '/#systeme' },
  },

  finalCta: {
    eyebrow: 'On en parle ?',
    title: 'Prêt à sortir vos opérations du tableur ?',
    body: 'Racontez-nous votre projet — on revient vers vous en moins de 24 h avec un premier cadrage et un devis gratuit.',
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: 'WhatsApp', href: 'https://wa.me/221783438249' },
    ],
    features: ['Réponse sous 24 h', 'Devis gratuit', 'Vous possédez tout'],
  },
};
