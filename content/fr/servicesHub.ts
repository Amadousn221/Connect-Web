// ── Hub Services (/services) — copy figée FR ───────────────────────────────
//
// Source éditoriale : CONNECT-WEB-SERVICES-HUB-ARCHITECTURE-COPY-V1.md (Opus).
// Corrections validées PO appliquées depuis HANDOFF-HUB-SERVICES.md §3 :
//   - Hero : chapô remplacé (version V6).
//   - S4 « Quand y penser » : promesse de rentabilité remplacée par
//     « Cela peut justifier un développement sur mesure. »
//   - S3 Refonte : promesse absolue « sans casser… » remplacée par
//     « en préparant la transition pour préserver vos contenus et votre
//     référencement ».
//   - S6 « Ce qui est prouvé » : phrase « tournent chaque jour » retirée
//     (l'ensemble comprend un rapport mensuel).
//   - S11 SCOD : « Projet de plateforme VTC. » — aucun détail fonctionnel.
//
// Routes : les pages Développement WordPress / Shopify / Refonte n'existent pas
// encore (pages 6-8 du chantier). Décision PO : les 3 blocs « par plateforme »
// restent visibles SANS lien, la famille web renvoie vers sa page parente.
// Les fiches /realisations/[slug] n'existent pas : « Voir le cas » renvoie vers
// /realisations le temps que les fiches soient fournies.
//
// Contenu HARDCODÉ FR (même approche que content/fr/accueil.ts), non Sanity.

export type HubLink = { label: string; href: string };

export interface HubExpertiseRow {
  /** numéro affiché (« 01 ») — dérivé de l'index à l'affichage */
  title: string;
  summary: string;
  /** ancre interne vers la section détaillée (#s3 … #s7) */
  anchor: string;
}

export interface HubDetailBlock {
  heading: string;
  /** paragraphe, ou liste si les lignes commencent par « - » */
  body: string;
  /** S6 : bloc « ce qui est prouvé » — traitement visuel distinct */
  variant?: 'proven' | 'explored';
}

export interface HubExpertise {
  eyebrow: string;
  title: string;
  intro: string;
  cta: HubLink;
  blocks: HubDetailBlock[];
}

export interface HubWebUsage {
  title: string;
  body: string;
  link: HubLink;
}

export interface HubWebPlatform {
  title: string;
  body: string;
  /** pas de lien tant que la page dédiée n'existe pas (décision PO) */
}

export interface HubSituation {
  situation: string;
  answer: string;
  links: HubLink[];
}

export interface HubMarker {
  title: string;
  body: string;
}

export interface HubProject {
  name: string;
  badge: string;
  body: string;
  /** capture réelle (contain) ; absent = couverture typographique */
  image?: { src: string; alt: string };
  /** couverture typographique de repli : [ligne 1, ligne 2] */
  cover?: [string, string];
  cta: HubLink;
}

export interface HubStep {
  title: string;
  body: string;
}

export interface HubFaq {
  q: string;
  a: string;
}

// ── Métadonnées SEO (Opus §5.2) ───────────────────────────────────────────
export const hubMeta = {
  title: 'Services — Connect Web · Studio digital à Dakar',
  description:
    'Cinq expertises pour concevoir, développer et connecter vos outils numériques : sites, boutiques, applications, ERP, automatisation. Studio à Dakar.',
};

// ── S1 — Hero d'orientation ───────────────────────────────────────────────
export const hubHero = {
  eyebrow: 'Services',
  title:
    'Concevoir votre présence. Développer vos outils. Connecter vos systèmes.',
  intro:
    'À Dakar, nous concevons vos sites, développons vos outils et connectons vos systèmes. Cinq expertises complémentaires, adaptées à votre activité, avec des accès qui restent les vôtres.',
  reassurance: [
    'Réponse sous 24 h',
    'Devis gratuit',
    'Vos accès vous appartiennent',
  ],
  primaryCta: { label: 'Parlons de votre projet', href: '#contact' },
  secondaryCta: { label: 'Voir nos réalisations', href: '#realisations' },
};

// ── S2 — Cinq expertises en un regard ─────────────────────────────────────
export const hubIndex = {
  eyebrow: 'Cinq expertises',
  title: 'Nos expertises, réunies dans un même studio',
  intro:
    "Nous ne cochons pas des cases. Chaque expertise repose sur des projets livrés, des outils que nous maîtrisons, et un principe simple : vous devez comprendre ce que nous construisons pour vous, et pouvoir le reprendre en main à tout moment.",
  rows: [
    {
      title: 'Conception et développement web',
      summary:
        "Sites institutionnels, sites d'entreprise, boutiques en ligne. Que vous partiez d'une page blanche ou d'un site existant qui ne vous sert plus, nous concevons des sites qui vous représentent et qui tiennent dans le temps.",
      anchor: '#web',
    },
    {
      title: 'Logiciels et applications web',
      summary:
        "Plateformes métier, portails clients, applications sur mesure. Quand un outil du marché ne suffit pas ou n'existe pas, nous développons celui qui correspond à votre manière de travailler.",
      anchor: '#logiciels',
    },
    {
      title: 'ERP, CRM et intégrations',
      summary:
        'Digitaliser vos opérations, connecter vos outils entre eux, arrêter de ressaisir les mêmes données. Un système d’information qui vous fait gagner du temps, pas un logiciel de plus à surveiller.',
      anchor: '#erp',
    },
    {
      title: 'IA et automatisation',
      summary:
        "Automatiser ce qui doit l'être — rapports, relances, traitements récurrents — et intégrer l'IA là où elle apporte une vraie valeur, pas comme un effet de mode.",
      anchor: '#ia',
    },
    {
      title: 'Marketing et génération de prospects',
      summary:
        'Rendre visible ce que vous faites, faire venir les bons prospects, mesurer ce qui fonctionne. Sans promesse magique de trafic ni de conversion instantanée.',
      anchor: '#marketing',
    },
  ] as HubExpertiseRow[],
  rattach: {
    text: "Vous n'êtes pas sûr par où commencer ? Notre offre de Conseil aide à cadrer votre projet avant tout choix technique.",
    link: { label: 'Voir Conseil et stratégie', href: '#conseil' },
  },
};

// ── S3 — Expertise 1 : Conception et développement web ────────────────────
export const hubWeb = {
  eyebrow: 'Expertise 1 sur 5',
  title: 'Conception et développement web',
  intro:
    "C'est notre socle historique. Nous concevons et développons des sites qui servent une intention précise — être trouvé, être compris, être choisi — et qui restent votre propriété. Deux manières d'entrer dans notre travail sur le web : par le type de site que vous voulez construire, ou par la plateforme ou la situation qui correspond à votre projet.",
  usagesTitle: 'Par usage — Quel type de site ?',
  usages: [
    {
      title: "Sites d'entreprise",
      body: 'Pour les entreprises qui veulent une présence en ligne crédible, claire sur leurs services, orientée vers la prise de contact ou la vente indirecte. B2B, cabinets, prestataires, exportateurs.',
      link: { label: "Voir Sites d'entreprise", href: '/services/sites-entreprise' },
    },
    {
      title: 'Sites institutionnels et ONG',
      body: "Pour les organisations, institutions et ONG qui doivent présenter leurs missions, leurs programmes, leurs publications, et s'adresser à plusieurs publics à la fois — bénéficiaires, partenaires, bailleurs.",
      link: {
        label: 'Voir Sites institutionnels et ONG',
        href: '/services/sites-institutionnels-ong',
      },
    },
    {
      title: 'Boutiques en ligne',
      body: 'Pour vendre — produits physiques, produits numériques, catalogues étendus, ventes transfrontalières. Nous intégrons les moyens de paiement qui correspondent à votre marché : Mobile Money quand il fait sens, cartes bancaires et paiements internationaux quand vous vendez à l’étranger.',
      link: { label: 'Voir Boutiques en ligne', href: '/services/boutiques-en-ligne' },
    },
  ] as HubWebUsage[],
  platformsTitle: 'Par plateforme ou situation — Comment est construit votre projet ?',
  // Pas de lien : pages dédiées à créer (pages 6-8 du chantier). Décision PO.
  platforms: [
    {
      title: 'Développement WordPress',
      body: "Personnalisation, thèmes sur mesure, administration confortable, contenus qui évoluent avec votre activité. Quand WordPress correspond à votre besoin, nous le maîtrisons de bout en bout.",
    },
    {
      title: 'Développement Shopify',
      body: 'Boutiques Shopify sur mesure, personnalisation avancée, intégrations, adaptations aux réalités locales de paiement et de livraison. Notre expertise Shopify est illustrée par le projet ATTA Africa.',
    },
    {
      title: 'Refonte de site internet',
      body: "Votre site existe déjà mais ne vous sert plus. Nous diagnostiquons ce qui doit être conservé, ce qui doit être repensé, et nous accompagnons la transition — en préparant le passage pour préserver vos contenus et votre référencement.",
    },
  ] as HubWebPlatform[],
  proof:
    'ATTA Africa — Boutique Shopify DTC premium, vente en plusieurs devises (EUR, USD, CAD, XOF), paiements Mobile Money via PayDunya (Wave, Orange, Free) et paiements internationaux (cartes, PayPal, Apple Pay, Shop Pay). Voir le projet en ligne : atta-africa.com',
  proofLink: { label: 'atta-africa.com', href: 'https://atta-africa.com' },
  cta: {
    label: 'Voir toute la conception et développement web',
    href: '/services/conception-et-developpement-web',
  },
};

// ── S4–S7 — Expertises 2 à 5 (gabarit compact commun) ─────────────────────
export const hubExpertises: HubExpertise[] = [
  {
    eyebrow: 'Expertise 2 sur 5',
    title: 'Logiciels et applications web',
    intro:
      "Quand aucun outil du marché ne correspond exactement à votre manière de travailler, nous développons celui qu'il vous faut. Plateformes métier, portails clients ou partenaires, tableaux de bord, applications internes : nous concevons des solutions sur mesure, en partant de votre processus réel, pas d'un modèle théorique.",
    cta: { label: 'Voir Logiciels et applications web', href: '/services/plateformes-applications' },
    blocks: [
      {
        heading: 'Ce que nous prenons en charge',
        body: '- Applications web sur mesure, avec espaces utilisateurs et rôles distincts.\n- Portails clients, portails prestataires, extranets.\n- Interfaces d’administration métier — pour votre équipe, pas pour un administrateur technique.\n- Intégrations avec vos outils existants (ERP, CRM, comptabilité, messagerie).',
      },
      {
        heading: 'Quand y penser',
        body: "Un fichier Excel qui devient ingérable. Un processus manuel qui se répète tous les jours. Une équipe qui ressaisit les mêmes informations dans plusieurs endroits. Un besoin métier trop spécifique pour un logiciel générique. Cela peut justifier un développement sur mesure.",
      },
    ],
  },
  {
    eyebrow: 'Expertise 3 sur 5',
    title: 'ERP, CRM et intégrations',
    intro:
      'Nous mettons en place et paramétrons les outils qui organisent vos données et vos opérations : gestion commerciale, gestion des stocks, comptabilité, relation client, achats, ventes. Notre outil principal sur ce terrain est Odoo, en environnement open source, qui laisse le contrôle et l’évolution entre vos mains.',
    cta: { label: 'Voir ERP, CRM et intégrations', href: '/services/crm-erp-integrations' },
    blocks: [
      {
        heading: 'Ce que nous connectons',
        body: '- Odoo — modules ERP et CRM adaptés à votre activité.\n- Passerelles entre votre site ou votre boutique et votre système de gestion, pour éviter les ressaisies.\n- Intégrations avec vos outils existants (comptabilité, messagerie, paiement, logistique).',
      },
      {
        heading: 'Un exemple concret',
        body: 'Chez Maison Peinture Sénégal, quincaillerie et distributeur de peinture, nous avons déployé Odoo pour structurer la gestion commerciale et le suivi des stocks. Projet interne, sans vitrine publique — les détails sont partagés en entretien sur demande.',
      },
      {
        heading: 'Note honnête',
        body: "Nous ne sommes pas partenaire certifié Odoo. Nous maîtrisons cet outil parce que nous l'utilisons sur des projets réels.",
      },
    ],
  },
  {
    eyebrow: 'Expertise 4 sur 5',
    title: 'IA et automatisation',
    intro:
      "Automatiser ce qui doit l'être, et intégrer l'IA là où elle apporte une vraie valeur — pas comme un effet de mode. Nous distinguons clairement ce que nous avons déjà livré de ce que nous continuons à explorer.",
    cta: { label: 'Voir IA et automatisation', href: '/services/ia-automatisation' },
    blocks: [
      {
        heading: 'Ce qui est prouvé — Automatisation',
        variant: 'proven',
        body: 'Chez ATTA Africa, nous avons livré une suite d’automatisations opérationnelles : rapport mensuel des ventes (par produit, par taille, par zone) généré et analysé automatiquement, automatisation du traitement de commande, e-mails de relance panier abandonné.',
      },
      {
        heading: 'Ce que nous explorons — IA appliquée',
        variant: 'explored',
        body: "Assistance à la production de contenu, aide à la qualification de prospects, agents conversationnels métier. Nous testons ces cas d'usage sur nos propres opérations et sur des projets pilotes avant de les proposer à nos clients. Nous préférons dire « nous n'avons pas encore de cas client public » plutôt que vendre une capacité non prouvée.",
      },
      {
        heading: 'Quand y penser',
        body: "Vous passez plusieurs heures par semaine à faire la même chose. Vos données sont là mais personne n'a le temps d'en tirer un rapport lisible. Vous voulez éviter d'embaucher pour un travail purement répétitif.",
      },
    ],
  },
  {
    eyebrow: 'Expertise 5 sur 5',
    title: 'Marketing et génération de prospects',
    intro:
      "Rendre visible ce que vous faites, faire venir les bons prospects, mesurer ce qui fonctionne — et arrêter ce qui ne fonctionne pas. Nous prenons en charge la partie du marketing où nos compétences techniques (site, tracking, automatisation) ajoutent une vraie valeur, sans faire semblant d'être une agence média.",
    cta: { label: 'Voir Marketing et génération de prospects', href: '/services/marketing-acquisition' },
    blocks: [
      {
        heading: 'Ce que nous prenons en charge',
        body: '- Référencement naturel (SEO technique et contenu) sur votre site.\n- Mise en place et lecture des outils de mesure — pour savoir ce qui vous ramène des prospects.\n- Automatisations marketing : formulaires, e-mails de suivi, séquences de relance.\n- Conseil sur les canaux d’acquisition adaptés à votre activité et à votre budget.',
      },
      {
        heading: "Principe d'honnêteté",
        body: "Sur cette expertise, nous choisissons de ne pas afficher de cas d'étude tant que nous n'avons pas de résultats chiffrés à partager. Si vous cherchez des promesses de trafic à trois chiffres en trois mois, ce n'est pas ici. Si vous cherchez quelqu'un qui vous dit ce qui marchera pour votre activité et qui construit les outils pour le mesurer, on peut en parler.",
      },
    ],
  },
];

// ── S8 — Conseil et stratégie (bande pétrole distincte) ───────────────────
export const hubConseil = {
  eyebrow: "Une porte d'entrée alternative",
  title: 'Conseil et stratégie',
  intro:
    "Vous avez un projet mais vous n'êtes pas sûr de ce qu'il vous faut vraiment. Un site ? Une boutique ? Un logiciel métier ? Une automatisation ? Ou d'abord de la clarté sur votre priorité ? Notre offre de Conseil aide à répondre à cette question avant tout choix technique.",
  blocks: [
    {
      heading: 'À quoi ça sert',
      body: '- Cadrer un projet avant de lancer un devis.\n- Auditer un site ou un outil existant qui ne donne plus satisfaction.\n- Prioriser entre plusieurs chantiers numériques en compétition pour le même budget.\n- Choisir entre plusieurs solutions techniques (une plateforme du marché ou un développement sur mesure, par exemple).',
    },
    {
      heading: 'Comment ça se passe',
      body: 'Une conversation initiale gratuite pour comprendre votre contexte. Si un cadrage plus poussé est utile, nous vous proposons un accompagnement court et facturé — le résultat vous appartient, que vous continuiez avec nous ou avec un autre prestataire.',
    },
  ] as HubDetailBlock[],
  cta: { label: 'Voir Conseil et stratégie', href: '/services/conseil-strategie' },
};

// ── S9 — Comment choisir ─────────────────────────────────────────────────
export const hubOrientation = {
  eyebrow: 'Aide à la décision',
  title:
    'Vous ne savez pas encore quelle expertise vous concerne ? Voici quelques repères.',
  intro:
    'Nous partons du besoin, pas de la technologie. Voici les situations les plus fréquentes qui nous sont soumises, et vers quelle page elles renvoient.',
  situations: [
    {
      situation: '« Je veux une présence en ligne crédible pour mon entreprise. »',
      answer: "Sites d'entreprise, ou Sites institutionnels et ONG selon votre structure.",
      links: [
        { label: "Sites d'entreprise", href: '/services/sites-entreprise' },
        { label: 'Sites institutionnels et ONG', href: '/services/sites-institutionnels-ong' },
      ],
    },
    {
      situation: "« Je veux vendre en ligne, au Sénégal ou à l'international. »",
      answer: 'Boutiques en ligne, avec un focus Shopify si votre marque vise le haut de gamme et le cross-border.',
      links: [{ label: 'Boutiques en ligne', href: '/services/boutiques-en-ligne' }],
    },
    {
      situation: '« Mon site existe mais ne me sert plus. »',
      answer: 'Refonte de site internet — diagnostic d’abord, réécriture ensuite.',
      links: [
        { label: 'Conception et développement web', href: '/services/conception-et-developpement-web' },
      ],
    },
    {
      situation: '« Je veux digitaliser une opération métier (stock, ventes, comptabilité, relation client). »',
      answer: 'ERP, CRM et intégrations, ou Logiciels et applications web si aucun outil du marché ne colle.',
      links: [
        { label: 'ERP, CRM et intégrations', href: '/services/crm-erp-integrations' },
        { label: 'Logiciels et applications web', href: '/services/plateformes-applications' },
      ],
    },
    {
      situation: '« Je perds du temps sur des tâches répétitives. »',
      answer: 'IA et automatisation.',
      links: [{ label: 'IA et automatisation', href: '/services/ia-automatisation' }],
    },
    {
      situation: '« Je veux faire venir des prospects, sans me faire promettre monts et merveilles. »',
      answer: 'Marketing et génération de prospects.',
      links: [{ label: 'Marketing et génération de prospects', href: '/services/marketing-acquisition' }],
    },
    {
      situation: "« Je ne sais pas encore, j'ai besoin d'y voir clair. »",
      answer: 'Conseil et stratégie, ou une conversation directe.',
      links: [
        { label: 'Conseil et stratégie', href: '/services/conseil-strategie' },
        { label: 'Nous écrire', href: '#contact' },
      ],
    },
  ] as HubSituation[],
  cta: { label: 'Parlons de votre projet', href: '#contact' },
};

// ── S10 — Ce qui nous différencie ────────────────────────────────────────
export const hubMarkers = {
  eyebrow: 'Trois marqueurs, tenus au quotidien',
  title: 'Ce qui nous différencie',
  intro:
    'Trois principes qui gouvernent la manière dont nous concevons et livrons chaque projet, quel que soit le type d’expertise mobilisée.',
  markers: [
    {
      title: 'Standard international',
      body: 'Nos livrables — code, design, contenu, accessibilité, performance — répondent aux standards attendus par une clientèle exigeante, qu’elle soit à Dakar, à Paris, à Montréal ou à Casablanca. Nous concevons pour le mobile en premier, nous mesurons les performances réelles, et nous ne relâchons pas la finition au dernier kilomètre.',
    },
    {
      title: 'Terrain ouest-africain',
      body: "Nous connaissons les contraintes concrètes du contexte : qualité de réseau variable, poids des images, coûts data, comportements Mobile Money, moyens de paiement locaux, réalités de la logistique, temporalité des projets. Ce n'est pas du storytelling — c'est ce qui décide de vos ventes le lundi matin.",
    },
    {
      title: 'Propriété des accès',
      body: "À la livraison, vos comptes, votre domaine, votre code, vos accès administrateurs vous appartiennent. Vous n'êtes ni prisonnier de notre hébergement, ni dépendant de notre présence pour continuer à faire tourner ce que nous avons construit. Les modalités précises sont formalisées au contrat, service par service — nous ne promettons pas ce qui dépend d'un tiers.",
    },
  ] as HubMarker[],
};

// ── S11 — Réalisations en preuve ─────────────────────────────────────────
export const hubProjects = {
  eyebrow: 'Ce que nous avons livré',
  title: 'Nos réalisations',
  intro:
    "Nous préférons les projets nommés aux logos décoratifs. Voici trois cas approuvés par leurs clients, et l'accès à l'ensemble du portfolio.",
  projects: [
    {
      name: 'ATTA Africa',
      badge: 'Shopify · Automatisation',
      body: "Boutique Shopify DTC premium, cross-border, avec Mobile Money et paiements internationaux. Suite d'automatisations livrée (reporting, traitement de commande, relance panier). Notre cas double : e-commerce et automatisation.",
      image: { src: '/assets/real/atta-africa.png', alt: 'Capture de la boutique ATTA Africa' },
      cta: { label: 'Voir le cas', href: '/realisations' },
    },
    {
      name: 'Maison Peinture Sénégal',
      badge: 'Odoo · ERP',
      body: 'Déploiement Odoo ERP pour la gestion commerciale et les stocks d’un distributeur de peinture au Sénégal. Preuve interne, sans vitrine publique.',
      cover: ['Maison', 'Peinture'],
      cta: { label: 'Voir le cas', href: '/realisations' },
    },
    {
      name: 'SCOD VTC',
      badge: 'Projet web',
      body: 'Projet de plateforme VTC.',
      image: { src: '/assets/real/scod-vtc.jpg', alt: 'Capture du site SCOD VTC' },
      cta: { label: 'Voir le cas', href: '/realisations' },
    },
  ] as HubProject[],
  cta: { label: "Voir l'ensemble des réalisations", href: '/realisations' },
};

// ── S12 — Notre approche en quatre temps ─────────────────────────────────
export const hubMethod = {
  eyebrow: 'Comment on travaille',
  title: 'Notre approche, en quatre temps',
  intro:
    'Nous ne commençons jamais par coder. Chaque projet suit la même trame — plus détaillée sur les projets complexes, plus resserrée sur les projets simples, mais toujours dans cet ordre.',
  steps: [
    {
      title: 'Écouter',
      body: 'Nous prenons le temps de comprendre votre activité, vos utilisateurs, ce qui fonctionne déjà, et ce qui bloque. Sans cette étape, nous concevrions dans le vide.',
    },
    {
      title: 'Cadrer',
      body: 'Nous formalisons le périmètre, les livrables, le budget et le calendrier. Vous devez pouvoir dire « oui » ou « non » à un plan clair avant que la première ligne de code ne soit écrite.',
    },
    {
      title: 'Construire',
      body: 'Développement itératif, avec des points de validation réguliers. Vous voyez ce qui est en train d’être construit avant que ce soit terminé — pas de tunnel de trois mois.',
    },
    {
      title: 'Transmettre',
      body: 'À la livraison, nous vous remettons ce qui vous appartient : accès, domaine, code, documentation, formation minimale pour prendre la main. Nous pouvons continuer à vous accompagner si vous le souhaitez — mais vous n’y êtes jamais forcé.',
    },
  ] as HubStep[],
};

// ── S13 — Questions fréquentes ──────────────────────────────────────────
export const hubFaqIntro = {
  eyebrow: "Ce qu'on nous demande le plus",
  title: 'Questions fréquentes',
};

export const hubFaqItems: HubFaq[] = [
  {
    q: 'Quels types d’organisations accompagnez-vous ?',
    a: 'Des PME, des entrepreneurs, des marques, des ONG, des institutions. Nous sommes basés à Dakar, mais nous travaillons avec des clients au Sénégal, dans plusieurs pays d’Afrique de l’Ouest et à l’international. La taille compte moins que la clarté du besoin.',
  },
  {
    q: 'Combien coûte un projet ?',
    a: 'Deux repères concrets : un site vitrine démarre à 300 000 FCFA, une boutique en ligne à 500 000 FCFA — selon les fonctionnalités. Pour les projets d’application, d’ERP, ou de plateforme, le prix dépend directement du périmètre et se chiffre après un premier cadrage. Le devis est toujours gratuit.',
  },
  {
    q: 'Quels sont les délais typiques ?',
    a: 'Notre délai moyen pour un premier livrable est de deux semaines. Cela ne signifie pas que tout projet est terminé en deux semaines — un projet complexe peut prendre plusieurs mois — mais que vous ne restez pas sans rien voir pendant trois mois. Le calendrier détaillé est fixé au moment du cadrage.',
  },
  {
    q: 'Est-ce que je conserve la propriété de mon site et de mes outils ?',
    a: 'Oui. À la livraison, vos comptes, votre domaine, votre code et vos accès administrateurs vous reviennent. Les modalités précises sont formalisées au contrat, service par service. Nous ne pouvons pas promettre la propriété d’éléments qui dépendent d’un tiers (par exemple, une licence de plateforme externe), et nous le disons clairement.',
  },
  {
    q: 'Travaillez-vous en dehors du Sénégal ?',
    a: 'Oui. Notre studio est à Dakar, nos clients ne le sont pas tous. Nous travaillons à distance, en français ou en anglais.',
  },
  {
    q: 'Assurez-vous la maintenance après la livraison ?',
    a: 'Oui, si vous le souhaitez, dans le cadre d’un contrat de maintenance ou d’un forfait d’accompagnement. Vous n’y êtes jamais forcé — si vous préférez reprendre la main en interne ou passer par un autre prestataire, c’est possible sans blocage technique.',
  },
  {
    q: 'Comment démarre un projet ?',
    a: 'Par une conversation. Vous nous envoyez un message via le formulaire ci-dessous ou par e-mail. Nous répondons sous 24 heures. La première conversation est gratuite et sert à comprendre votre contexte — pas à vous vendre quoi que ce soit.',
  },
];

// ── S14 — Contact (override d'en-tête de ContactSection réutilisé) ────────
export const hubContact = {
  eyebrow: 'Prendre contact',
  title: 'Parlons de votre projet',
  lead: 'Un projet en tête, une question à poser, un audit à demander : la première conversation est gratuite, sans engagement, et nous répondons sous 24 heures.',
};
