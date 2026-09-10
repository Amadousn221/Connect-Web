// ── Page « Sites d'entreprise » (/services/sites-entreprise) — copy figée FR ──
//
// Source éditoriale : CONNECT-WEB-SITES-ENTREPRISE-ARCHITECTURE-COPY-V1.md (Opus).
// Composition : maquette connect-web-sites-entreprise-v1.html, état FINAL
//   (le 3ᵉ <script> reconstruit les 11 sections `ent-s{n}` ; les 2 premiers
//   scripts + le JSON `cw-copy` initial sont un leurre = ancienne V2 du hub).
// 11 sections. Hero : chapô court (maquette, direction PO « intros raccourcies »).
// Montant FAQ Q1 (300 000 FCFA) porté avec `toValidateNote`.
// Cartes réalisations S8 volontairement compactes (faits à confirmer — Opus §6).

import type { SpLinkData } from '@/components/sections/service-page/parts';

export const seMeta = {
  title: "Site web d'entreprise à Dakar — Connect Web Sénégal",
  description:
    "Conception de sites d'entreprise à Dakar : présentation claire de votre activité, crédibilité et prise de contact B2B. WordPress, bilingue possible. Devis gratuit.",
};

export const seHero = {
  eyebrow: "Sites d'entreprise",
  title:
    'Un site qui présente clairement votre activité — et qui provoque les bonnes prises de contact.',
  intro:
    "Nous concevons des sites d'entreprise qui expliquent votre offre, rassurent vos prospects et facilitent les prises de contact — à partir de ce que votre site doit accomplir, pas d'un modèle à remplir.",
  primaryCta: { label: 'Parlons de votre projet', href: '#contact' },
  secondaryCta: { label: 'Voir nos réalisations', href: '/realisations' },
  reassurance: ['Réponse sous 24 h', 'Devis gratuit', 'Vos accès vous appartiennent'],
};

// S2 — Rôle commercial (4 résultats, numérotés)
export const seRole = {
  eyebrow: 'Un rôle commercial',
  title: 'Ce que votre site doit accomplir — avant de parler de design',
  intro: [
    "La plupart des conversations sur un projet de site commencent par les mauvaises questions : quelles couleurs, combien de pages, quel template. Ce sont des questions légitimes, mais elles arrivent trop tôt.",
    "Un site d'entreprise doit accomplir un travail commercial. Il varie selon votre activité, mais il repose presque toujours sur quatre résultats concrets.",
  ],
  items: [
    {
      title: 'Être trouvé par ceux qui ne vous connaissent pas encore',
      body: [
        "Vos prospects cherchent sur Google, demandent un lien à un contact, ou tapent votre nom après un salon. Si votre site n'apparaît pas, ou si la première impression n'est pas crédible, la conversation n'a pas lieu.",
      ],
    },
    {
      title: 'Être compris en quelques secondes',
      body: [
        "Un visiteur qui arrive se pose une question simple : est-ce que cette entreprise peut m'aider ? Si la réponse n'est pas visible immédiatement — dans le titre, la première phrase, la hiérarchie des informations —, il part chercher un concurrent plus lisible.",
      ],
    },
    {
      title: 'Donner des raisons concrètes de faire confiance',
      body: [
        "Pas des slogans ni des superlatifs. Des projets nommés, des secteurs couverts, des clients reconnaissables, un processus de travail expliqué, une équipe visible. Les déclarations génériques ne créent pas de confiance ; les preuves spécifiques, si.",
      ],
    },
    {
      title: 'Rendre la prochaine étape évidente',
      body: [
        "Un numéro de téléphone visible, un formulaire court avec un délai de réponse annoncé, un appel à l'action qui dit exactement quoi faire ensuite. Si votre visiteur doit chercher comment vous joindre, la conversion est déjà perdue.",
      ],
    },
  ],
};

// S3 — Le regard des prospects (5 critères, lecture)
export const seCritères = {
  eyebrow: 'Le regard de vos prospects',
  title: 'Ce que vos prospects remarquent — souvent sans le formuler',
  intro: [
    "Les visiteurs de votre site ne rédigent pas de rapport d'audit. Ils jugent en quelques secondes, souvent sans en être conscients. Voici ce qui pèse dans cette décision silencieuse.",
  ],
  items: [
    {
      icon: 'eye',
      title: "La clarté de votre offre",
      body: [
        "Ce que vous faites, pour qui, dans quelle situation, avec quels résultats. Un visiteur qui peut résumer votre activité après vingt secondes de lecture est à mi-chemin de vous appeler. Celui qui repart sans avoir compris votre métier ne reviendra pas.",
      ],
    },
    {
      icon: 'ruler',
      title: "La cohérence entre votre site et votre niveau d'exigence",
      body: [
        "Si vous facturez des prestations rigoureuses, votre site doit refléter cette rigueur — mise en page, qualité des textes, visuels. L'écart entre ce que vous promettez et ce que votre site montre est perçu immédiatement. Un site trop luxueux pour une activité modeste sonne aussi faux.",
      ],
    },
    {
      icon: 'badge-check',
      title: 'Vos preuves',
      body: [
        "Des noms de clients quand vous êtes autorisé à les citer, des descriptions de projets, des secteurs d'intervention, des résultats. Un portfolio sans commentaire vaut mieux qu'un portfolio inexistant ; un portfolio avec contexte vaut mieux que les deux.",
      ],
    },
    {
      icon: 'pointer',
      title: "La facilité d'accès à l'action",
      body: [
        "Téléphone, e-mail, formulaire court, WhatsApp Business : ces accès doivent être visibles sans chercher. Les entreprises qui rendent le contact difficile envoient un signal involontaire sur leur disponibilité.",
      ],
    },
    {
      icon: 'smartphone',
      title: "L'expérience sur téléphone",
      body: [
        "Plus de la moitié des visites web se font sur mobile. Un site qui se lit mal sur un téléphone, ralentit, ou demande de zoomer pour cliquer perd cette moitié de son audience. C'est encore plus vrai sur le terrain ouest-africain, où la connexion varie et où le téléphone est le premier écran de travail.",
      ],
    },
  ],
};

// S4 — La question du contenu (3 configurations)
export const seContenu = {
  eyebrow: 'Les contenus, dès le départ',
  title: 'Les textes de votre site : la vraie question à poser dès le départ',
  intro: [
    "C'est le sujet qui décale ou paralyse le plus de projets. Vos textes ne peuvent pas être inventés par quelqu'un qui ne connaît pas votre activité : ces informations sont chez vous. Notre rôle est de les extraire, de les structurer et de les rendre lisibles.",
    "Trois configurations sont possibles — nous choisissons ensemble celle qui correspond à votre équipe et à votre budget.",
  ],
  cards: [
    {
      icon: 'file-text',
      title: 'Vous fournissez des textes rédigés',
      body: [
        "Vous avez préparé les descriptions de vos services, votre présentation, vos contenus clés. Nous les intégrons, les structurons pour le web et les adaptons aux exigences de lecture en ligne. La configuration la plus rapide et la moins coûteuse.",
      ],
    },
    {
      icon: 'folder',
      title: 'Vous fournissez de la matière brute',
      body: [
        "Plaquettes, présentations, fiches, anciens devis, e-mails de prospection : vous n'avez pas de textes web mais vous avez des documents. Nous les reprenons, les réécrivons pour le web, et vous validez chaque section avant intégration.",
      ],
    },
    {
      icon: 'message',
      title: 'Nous rédigeons à partir d’entretiens avec vous',
      body: [
        "Quand aucun contenu formalisé n'existe, nous organisons un ou deux entretiens pour comprendre votre activité, vos clients, vos méthodes, vos meilleurs projets, et nous rédigeons à partir de ces échanges.",
        "Plus long et plus coûteux, mais c'est ce qui produit les contenus les plus sincères et les plus différenciants.",
      ],
      accent: true,
    },
  ],
  outro:
    "Dans les trois cas, la question du contenu est posée dès la première conversation. Jamais après la maquette.",
};

// S5 — Méthode en 5 temps
export const seMethode = {
  eyebrow: 'Une méthode lisible',
  title: 'Le déroulement d’un projet, en cinq temps',
  intro: [
    "Chaque projet est différent, mais la trame est stable. Elle s'étire ou se compresse selon la complexité du site, mais suit toujours le même ordre.",
  ],
  steps: [
    {
      title: 'Comprendre votre activité et vos publics',
      body: [
        "Avant de dessiner quoi que ce soit : ce que fait votre entreprise, à qui elle s'adresse, ce que le site doit accomplir en priorité. C'est aussi le moment où nous posons la question des contenus, de la plateforme, du budget et du calendrier.",
      ],
    },
    {
      title: 'Structurer et concevoir',
      body: [
        "Arborescence, hiérarchie des pages, parcours du visiteur, maquettes des gabarits clés. Vous validez à quoi ressemblera le site avant qu'une ligne de code ne soit écrite — les ajustements sont bien moins coûteux à ce stade.",
      ],
    },
    {
      title: 'Développer et intégrer',
      body: [
        "Développement, intégration des contenus, formulaires, connexion avec vos outils existants si nécessaire (e-mail, CRM, prise de rendez-vous, réseaux). Des points de validation intermédiaires, pas de tunnel de plusieurs mois.",
      ],
    },
    {
      title: 'Tester et ajuster',
      body: [
        "Test sur tous les appareils, vérification de la vitesse de chargement, relecture des contenus, correction des détails. Nous ne livrons pas un site que nous n'avons pas testé nous-mêmes sur mobile et desktop.",
      ],
    },
    {
      title: 'Mettre en ligne et transmettre',
      body: [
        "Passage en production, redirections si le site remplace un existant, formation de votre équipe à l'administration, remise des accès et de la documentation. La suite — maintenance, évolutions — est une option, pas une obligation.",
      ],
    },
  ],
};

// S6 — Un site qui tient (3 facteurs)
export const seDurable = {
  eyebrow: 'Après la livraison',
  title: 'Ce qui décide que votre site vieillit bien',
  intro: [
    "Beaucoup de sites d'entreprise se figent quelques mois après leur mise en ligne : l'équipe n'ose pas y toucher, les contenus vieillissent, le soin initial se perd. Nous concevons pour éviter ça.",
  ],
  items: [
    {
      icon: 'settings',
      title: "L'administration au quotidien",
      body: [
        "WordPress — la plateforme que nous utilisons pour la majorité de nos sites d'entreprise — offre une interface d'administration conçue pour des équipes non techniques. Modifier un texte, ajouter une actualité, changer une photo : accessible sans formation poussée. Prise en main à la livraison, documentation claire, accompagnement de maintenance en option.",
      ],
    },
    {
      icon: 'gauge',
      title: 'La performance sur le terrain',
      body: [
        "Un site lent perd ses visiteurs avant qu'ils aient compris votre offre. Nous optimisons les temps de chargement, le poids des images et l'affichage mobile dès la conception. Sur le terrain ouest-africain, cela suppose une attention à la variabilité du réseau et au coût de la data mobile.",
      ],
    },
    {
      icon: 'layers',
      title: "L'évolutivité",
      body: [
        "Votre activité bouge : un nouveau service, une gamme qui s'élargit, un marché qui s'ouvre. Un site bien structuré absorbe ces évolutions sans obliger à revoir l'architecture complète. C'est une décision de conception, pas un ajout technique.",
      ],
    },
  ],
};

// S7 — Propriété
export const seProprio = {
  eyebrow: 'Vos accès vous appartiennent',
  title: 'À la livraison, le site est le vôtre',
  intro: [
    "Nous transmettons ce qui vous appartient et précisons clairement ce qui dépend d'un tiers.",
  ],
  rows: [
    { icon: 'globe', label: 'Nom de domaine', text: "Enregistré à votre nom. Il reste chez vous, quelle que soit l'agence." },
    { icon: 'server', label: 'Hébergement', text: "Enregistré à votre nom ; vous en conservez l'accès indépendamment de nous." },
    { icon: 'key', label: "Accès d'administration", text: "Les vôtres. Après la livraison, vous décidez de qui a accès à quoi." },
    { icon: 'code', label: 'Code', text: "Thème et développements spécifiques remis, avec une documentation suffisante pour un autre développeur." },
    { icon: 'files', label: 'Contenus', text: 'Textes, images, documents exportables à tout moment.' },
  ],
  aside: {
    icon: 'puzzle',
    eyebrow: 'Limite transparente',
    title: 'Éléments qui dépendent d’un tiers',
    body: [
      "Licence d'un thème premium, extension propriétaire, service externe intégré : nous vous le disons au moment du cadrage — pas après la livraison. Les modalités exactes sont formalisées au contrat, service par service.",
    ],
  },
};

// S8 — Réalisations
export const seProjects = {
  eyebrow: 'Réalisations',
  title: 'Des projets livrés pour des entreprises',
  intro: [
    "Nous construisons des sites pour des entreprises de services, des structures commerciales, des sociétés tournées vers l'international et des prestataires spécialisés. Voici quelques noms issus de notre portfolio.",
  ],
  cards: [
    {
      badge: 'Voyage',
      title: 'ADA Voyages',
      text: "Site de présentation pour une agence de voyages. Mise en valeur des offres et parcours de contact direct. Détails à confirmer avant enrichissement.",
      image: { src: '/assets/real/ada-voyages.jpg', alt: 'Aperçu du site ADA Voyages' },
      link: { label: 'Voir nos réalisations', href: '/realisations' },
    },
    {
      badge: 'Santé',
      title: 'DDS Medical',
      text: "Présence professionnelle en ligne pour un prestataire du secteur médical. Détails fonctionnels à confirmer.",
      image: { src: '/assets/real/dds-medical.jpg', alt: 'Aperçu du site DDS Medical' },
      link: { label: 'Voir nos réalisations', href: '/realisations' },
    },
    {
      badge: 'Entreprise',
      title: 'Tamou Fishing International',
      text: "Site d'entreprise pour un acteur de la pêche à dimension internationale — crédibilité et lisibilité pour des interlocuteurs étrangers. Détails à confirmer.",
      image: { src: '/assets/real/tamou-fishing.jpg', alt: 'Aperçu du site Tamou Fishing International' },
      link: { label: 'Voir nos réalisations', href: '/realisations' },
    },
    {
      badge: 'Transport',
      title: 'SCOD VTC',
      text: "Site de présentation pour une société de transport VTC, approuvé comme étude de cas. Faits techniques à re-confirmer.",
      image: { src: '/assets/real/scod-vtc.jpg', alt: 'Aperçu du site SCOD VTC' },
      link: { label: 'Voir nos réalisations', href: '/realisations' },
    },
  ],
  cta: { label: "Voir l'ensemble de nos réalisations", href: '/realisations' } as SpLinkData,
};

// S9 — Ce qui peut venir ensuite
export const seNext = {
  eyebrow: 'Du site au système',
  title: 'Quand votre projet dépasse le site',
  intro: [
    "Un site d'entreprise est souvent la première brique d'un ensemble numérique plus large. Voici les prolongements les plus fréquents.",
  ],
  rows: [
    {
      icon: 'shopping-bag',
      title: 'Vendre en ligne, pas seulement présenter',
      text: 'Catalogue, panier, paiement, livraison : le terrain de notre expertise Boutiques en ligne.',
      link: { label: 'Explorer ce service', href: '/services/boutiques-en-ligne' },
    },
    {
      icon: 'database',
      title: 'Digitaliser une opération métier',
      text: 'Gestion commerciale, stock, facturation, relation client : le terrain de notre expertise ERP, CRM et intégrations.',
      link: { label: 'Explorer ce service', href: '/services/crm-erp-integrations' },
    },
    {
      icon: 'megaphone',
      title: 'Faire venir des visiteurs qualifiés',
      text: "SEO éditorial, stratégie de contenu, acquisition ciblée : le terrain de notre expertise Marketing et génération de prospects.",
      link: { label: 'Explorer ce service', href: '/services/marketing-acquisition' },
    },
    {
      icon: 'compass',
      title: "Vous n'êtes pas encore sûr de votre besoin",
      text: "Notre offre Conseil et stratégie aide à cadrer votre projet avant tout choix technique.",
      link: { label: 'Explorer ce service', href: '/services/conseil-strategie' },
    },
  ],
};

// S10 — FAQ (9 questions)
export const seFaqIntro = { eyebrow: 'Vos questions', title: 'Questions fréquentes' };

export const seFaqItems = [
  {
    q: "Combien coûte un site d'entreprise ?",
    a: "Un site vitrine d'entreprise démarre à partir de 300 000 FCFA. Le budget final dépend du nombre de pages, de la complexité des contenus, des fonctionnalités spécifiques (formulaires avancés, multilingue, connexion à un outil existant) et du niveau d'accompagnement sur la rédaction. Le devis est toujours gratuit, établi après une première conversation — pas à l'aveugle.",
    toValidateNote: 'Montant (300 000 FCFA) à reconfirmer avant publication.',
  },
  {
    q: 'Combien de temps prend la conception et la livraison ?',
    a: "Un site d'entreprise standard est livré en un à deux mois. Notre délai moyen pour un premier livrable visible est de deux semaines. Le facteur qui rallonge le plus souvent le calendrier n'est pas le développement — c'est la production des contenus. Plus nous cadrons ce sujet tôt, mieux le planning tient.",
  },
  {
    q: "Que se passe-t-il si je n'ai pas de textes prêts pour mon site ?",
    a: "C'est la situation la plus fréquente, traitée dès le cadrage. Trois options : vous fournissez des textes rédigés que nous intégrons, vous fournissez de la matière brute que nous reprenons et réécrivons, ou nous rédigeons à partir d'entretiens avec vous.",
  },
  {
    q: 'Est-ce que je pourrai modifier mon site moi-même après la livraison ?',
    a: "Oui. Nous livrons la grande majorité de nos sites d'entreprise sur WordPress, avec une interface d'administration conçue pour des équipes non techniques. Modifier un texte, changer une photo, ajouter une actualité, publier une page : accessible sans nous. Formation à la livraison, documentation remise.",
  },
  {
    q: 'Sur quelle plateforme mon site sera-t-il construit ?',
    a: "La grande majorité de nos sites d'entreprise sont développés sur WordPress — la plateforme la plus polyvalente pour les sites où le contenu vit et évolue, avec une administration confortable pour les équipes non techniques. Si une autre solution est mieux adaptée à votre contexte, nous vous l'expliquons au cadrage. Une page dédiée traite les questions plus techniques.",
  },
  {
    q: 'Est-ce que mon site sera bien référencé sur Google ?',
    a: "Nous intégrons les bonnes pratiques SEO à la conception : structure des pages, balisage, vitesse de chargement, contenu lisible pour les moteurs, adaptations mobile. Un bon référencement dépend aussi de la qualité et de la régularité des contenus publiés après la mise en ligne, et parfois de campagnes d'acquisition. Nous ne promettons pas de position sur Google — personne ne peut le faire honnêtement.",
  },
  {
    q: 'À qui appartiennent le site, le code et les accès après la livraison ?',
    a: "À vous. Le domaine, l'hébergement, les accès d'administration, le code du thème et des développements sont remis à la livraison. Vos contenus sont exportables. Les limites concernent uniquement les éléments tiers (licence de thème premium, extension propriétaire, service SaaS intégré) — précisés au cadrage et formalisés au contrat.",
  },
  {
    q: 'Mon site existe déjà mais il est vieillissant. Que proposez-vous ?',
    a: "Nous commençons par un diagnostic : ce qui fonctionne, ce qui ne fonctionne plus, ce qui peut être conservé (contenus, référencement acquis, domaine) et ce qui doit être repensé. Selon les cas, l'intervention va d'améliorations ciblées à une refonte complète avec plan de migration et de redirections. Le détail vit sur notre page Refonte de site internet.",
  },
  {
    q: 'Pouvez-vous faire un site en anglais, ou bilingue ?',
    a: "Oui. Nous travaillons en français et en anglais. Si votre entreprise exporte ou s'adresse à des marchés internationaux, la structure bilingue se prévoit dès l'architecture du site — pas comme un ajout après la livraison. Le surcoût dépend du volume de contenus à traduire ou à rédiger dans la seconde langue.",
  },
];

// S11 — Contact
export const seContact = {
  eyebrow: 'Prendre contact',
  title: 'Parlons de votre projet',
  lead:
    "Un premier site à concevoir, un site existant à reprendre, une présence à mettre au niveau de votre travail réel : la première conversation est gratuite, sans engagement, et nous répondons sous 24 heures.",
};
