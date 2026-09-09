// ── Page « Boutiques en ligne » (/services/boutiques-en-ligne) — copy figée FR
//
// Source éditoriale : CONNECT-WEB-BOUTIQUES-EN-LIGNE-ARCHITECTURE-COPY-V1.md (Opus).
// Composition : maquette connect-web-boutiques-en-ligne-v1.html, état FINAL
//   (3ᵉ <script> → 11 sections `shop-s{n}` ; scripts 0-1 + JSON initial = leurre).
// 11 sections. Hero : chapô court (maquette). S4 = sélecteur d'opérations.
// Page AGNOSTIQUE sur la plateforme (Opus §2.1). Montant FAQ Q1 → `toValidateNote`.
// ATTA = preuve principale, 4 angles distincts (S3, S5, S8, S9). Aucun chiffre
// d'affaires / conversion / croissance (Opus §6.5).

import type { SpLinkData } from '@/components/sections/service-page/parts';

export const shopMeta = {
  title: 'Boutique en ligne à Dakar — Connect Web · E-commerce',
  description:
    'Conception de boutiques en ligne à Dakar : Shopify, WooCommerce, paiement Mobile Money, vente transfrontalière. Catalogue, livraison, gestion. Devis gratuit.',
};

export const shopHero = {
  eyebrow: 'Boutiques en ligne',
  title:
    'Une boutique en ligne conçue pour vendre — sur votre marché, avec vos moyens de paiement, à votre rythme.',
  intro:
    "Catalogue, parcours d'achat, paiement, livraison : nous concevons votre boutique sur Shopify, WooCommerce ou la plateforme adaptée à votre projet — pour des marques, des commerçants et des entrepreneurs au Sénégal, en Afrique de l'Ouest et à l'international.",
  primaryCta: { label: 'Parlons de votre projet', href: '#contact' },
  secondaryCta: { label: 'Voir nos réalisations', href: '/realisations' },
  reassurance: ['Réponse sous 24 h', 'Devis gratuit', 'Vos accès vous appartiennent'],
};

// S2 — Six piliers (numérotés)
export const shopPillars = {
  eyebrow: 'Un commerce, pas seulement un site',
  title: "Un site ne suffit pas — voici ce qu'une boutique exige",
  intro: [
    "Ouvrir une boutique en ligne, c'est ouvrir un commerce. La différence avec un site de présentation est celle entre un showroom et un magasin : dans l'un, on regarde ; dans l'autre, on achète, on paie, on attend sa livraison.",
    "Une boutique fonctionnelle repose sur six piliers, et aucun ne peut être improvisé.",
  ],
  items: [
    {
      title: 'Un catalogue structuré',
      body: [
        "Vos produits, avec photos, descriptions, prix, variantes (tailles, couleurs, formats), disponibilités et promotions. La qualité de votre catalogue influence directement la confiance de l'acheteur — et donc vos ventes.",
      ],
    },
    {
      title: "Un parcours d'achat sans friction",
      body: [
        "De la découverte du produit à la confirmation de commande, chaque étape doit être claire, rapide et rassurante. Une hésitation au paiement, un formulaire trop long, un frais de livraison qui apparaît à la dernière seconde : ce sont des ventes perdues.",
      ],
    },
    {
      title: 'Des moyens de paiement adaptés à vos clients',
      body: [
        "Pas ceux que la plateforme propose par défaut — ceux que vos clients utilisent réellement. Au Sénégal, cela peut inclure des solutions Mobile Money ; à l'international, cartes bancaires, PayPal ou d'autres services. Le détail dépend de votre marché et de votre éligibilité.",
      ],
    },
    {
      title: 'Une livraison organisée',
      body: [
        "Zones, frais, délais annoncés, suivi, retrait éventuel, politique de retour. Le client doit savoir avant d'acheter combien il paiera de livraison, quand il recevra son produit, et ce qui se passe s'il n'est pas satisfait.",
      ],
    },
    {
      title: 'Une gestion quotidienne exploitable',
      body: [
        "Mettre à jour un prix, ajouter un produit, traiter une commande, vérifier un stock, lancer une promotion : accessibles à votre équipe tous les jours, sans rappeler l'agence.",
      ],
    },
    {
      title: 'Une base pour évoluer',
      body: [
        "Votre commerce va changer : nouveaux produits, nouvelles zones de vente, nouvelles intégrations, hausse du volume. L'architecture technique doit permettre cette évolution sans tout reconstruire.",
      ],
    },
  ],
};

// S3 — Paiement & livraison (2 blocs)
export const shopPayShip = {
  eyebrow: 'Du paiement à la réception',
  title: 'Paiement et livraison : les deux enjeux qui décident de vos ventes',
  intro: [
    "Ce sont les deux questions que chaque marchand pose en premier. Et les deux endroits où un projet mal cadré se révèle.",
  ],
  items: [
    {
      title: 'Le paiement — adapté à vos clients, pas à votre plateforme',
      body: [
        "L'enjeu n'est pas d'empiler le maximum d'options, mais de proposer celles que vos clients utilisent réellement — et qui sont techniquement et contractuellement disponibles pour votre commerce.",
        "Pour les marchés ouest-africains, cela peut inclure Wave, Orange Money ou Free Money via des prestataires comme PayDunya. Pour l'international, cartes bancaires, PayPal, Apple Pay, Shop Pay — selon la plateforme et les contrats que vous pouvez signer.",
        "Nous ne prétendons pas que tous les moyens de paiement sont disponibles partout. Nous cadrons avec vous les solutions réellement accessibles à votre situation, et nous les intégrons proprement. Notre projet ATTA Africa l'illustre : paiements internationaux et Mobile Money via PayDunya, avec gestion de plusieurs devises (EUR, USD, CAD, XOF).",
      ],
    },
    {
      title: 'La livraison — claire avant la commande, pas après',
      body: [
        "Vos clients doivent savoir, avant de valider leur panier, combien ils paieront de frais, quel sera le délai annoncé, et ce qui se passe en cas de problème.",
        "La logistique dépend de votre modèle : livraison en ville par vos soins, transporteur national, expédition internationale avec suivi, ou retrait en point de vente. Nous configurons les zones, les tarifs et les règles de livraison dans votre boutique. Nous ne gérons pas la logistique physique — mais nous nous assurons que votre outil reflète fidèlement ce que vos clients peuvent attendre.",
      ],
    },
  ],
};

// S4 — Gérer votre commerce au quotidien (sélecteur 4 opérations)
export const shopOps = {
  eyebrow: 'Votre outil de travail',
  title: 'Votre boutique au quotidien : ce que vous ferez vous-même',
  intro: [
    "Une boutique en ligne n'est pas un site qu'on publie et qu'on oublie. C'est un outil de travail quotidien. Voici ce que vous devrez pouvoir faire sans nous, et que nous configurons pour que ce soit possible.",
  ],
  selectorLabel: 'Opérations quotidiennes',
  panelEyebrow: 'Au quotidien',
  operations: [
    {
      label: 'Gérer votre catalogue',
      body: [
        "Ajouter un produit, modifier un prix, mettre à jour un stock, créer une promotion saisonnière, activer ou désactiver un article. Simple et rapide, que vous ayez dix produits ou cinq cents.",
      ],
    },
    {
      label: 'Traiter vos commandes',
      body: [
        "Voir les nouvelles commandes, vérifier les paiements, préparer les expéditions, marquer les commandes traitées, gérer les annulations ou remboursements. Le flux doit être clair pour votre équipe, même si c'est une seule personne.",
      ],
    },
    {
      label: 'Suivre vos résultats',
      body: [
        "Nombre de commandes, chiffre d'affaires, produits les plus vendus, paniers abandonnés, provenance des visiteurs. Les tableaux de bord natifs de Shopify ou WooCommerce fournissent ces données — nous vous montrons comment les lire et les utiliser.",
      ],
    },
    {
      label: 'Mettre à jour vos contenus',
      body: [
        "Pages, textes, images, conditions de livraison, politique de retour, page À propos. Votre boutique est aussi un site — ses contenus doivent rester à jour.",
      ],
    },
  ],
  outro:
    "Nous formons votre équipe à la livraison et remettons une documentation. Déléguer certaines opérations est possible dans le cadre d'un accompagnement — mais vous n'y êtes jamais forcé.",
};

// S5 — Choix de plateforme (Shopify / WooCommerce + notes)
export const shopPlatform = {
  eyebrow: 'Shopify & WooCommerce',
  title: 'Choisir la bonne plateforme pour votre commerce',
  intro: [
    "Il n'existe pas de plateforme universellement meilleure. Le bon choix dépend de votre modèle commercial, de votre volume de produits, de vos marchés, de vos besoins de personnalisation et de votre budget — pas de la préférence de l'agence.",
  ],
  cards: [
    {
      title: 'Shopify',
      body: [
        "Plateforme spécialisée e-commerce, adaptée aux marques DTC, aux boutiques avec vente transfrontalière, aux catalogues de taille moyenne et aux marchands qui veulent une infrastructure fiable sans gérer d'hébergement. Coûts récurrents (abonnement + frais de transaction), maintenance technique réduite, écosystème d'applications solide. C'est sur Shopify que nous avons construit ATTA Africa.",
      ],
    },
    {
      title: 'WooCommerce (WordPress)',
      body: [
        "Extension e-commerce de WordPress, adaptée aux commerces qui veulent intégrer la vente sur un site de contenus existant, aux budgets qui privilégient un faible coût récurrent (pas d'abonnement de plateforme, mais hébergement et maintenance à charge) et aux projets qui demandent une personnalisation technique poussée. Plus de flexibilité de code, plus de responsabilité technique.",
      ],
    },
  ],
  notes: [
    {
      title: 'Comment se fait le choix',
      body: [
        "Nous ne vous demandons pas de choisir avant de nous parler. Nous commençons par comprendre votre projet — produits, marchés, moyens de paiement, équipe, budget — puis nous vous recommandons la plateforme qui correspond. Si aucune ne colle, nous le disons aussi.",
      ],
    },
    {
      title: 'Ce que ce choix ne décide pas',
      body: [
        "Quelle que soit la plateforme, les principes restent les mêmes : parcours d'achat clair, paiement adapté, livraison organisée, gestion exploitable, architecture évolutive. La plateforme est un outil ; le commerce est le sujet.",
      ],
    },
  ],
};

// S6 — Méthode 6 temps
export const shopMethod = {
  eyebrow: 'Un lancement préparé',
  title: 'De la première conversation à la première vente, en six temps',
  intro: [
    "Un projet de boutique en ligne est un projet commercial avant d'être un projet technique. La méthode le reflète.",
  ],
  steps: [
    {
      title: 'Comprendre votre commerce',
      body: [
        "Vos produits, vos clients, vos marchés, vos moyens de paiement, votre logistique, votre équipe. C'est aussi le moment de la question du catalogue (nombre de produits, variantes, prix, contenus existants) et du budget.",
      ],
    },
    {
      title: 'Cadrer le périmètre et choisir la plateforme',
      body: [
        "Nombre de produits au lancement, zones de livraison actives, moyens de paiement à intégrer, fonctionnalités prioritaires et reportées. Le cadrage évite de construire trop grand pour un lancement, ou trop petit pour les six premiers mois.",
      ],
    },
    {
      title: "Concevoir le parcours d'achat",
      body: [
        "Maquettes de la page d'accueil, des fiches produit, du panier et du tunnel de paiement. Vous validez l'expérience de vos clients avant le développement.",
      ],
    },
    {
      title: 'Développer, intégrer et configurer',
      body: [
        "Développement, intégration du catalogue, connexion des moyens de paiement, configuration des zones et tarifs de livraison, pages légales, e-mails transactionnels. Points de validation intermédiaires.",
      ],
    },
    {
      title: 'Tester avec de vraies commandes',
      body: [
        "Nous passons des commandes tests sur tous les moyens de paiement configurés, depuis tous les appareils. Vérification des e-mails de confirmation, des notifications, du calcul des frais, des cas d'erreur. La boutique ne part pas en ligne sans cette phase.",
      ],
    },
    {
      title: 'Mettre en ligne, former et accompagner',
      body: [
        "Passage en production, formation de votre équipe (catalogue, commandes, reporting), remise des accès et de la documentation. Accompagnement post-lancement selon les termes du contrat.",
      ],
    },
  ],
};

// S7 — Propriété (nuances SaaS vs self-hosted)
export const shopOwnership = {
  eyebrow: 'Une propriété clairement expliquée',
  title: 'Votre boutique, vos données, vos accès — avec les bonnes nuances',
  intro: [
    "La propriété d'une boutique en ligne est plus nuancée que celle d'un site vitrine, parce qu'elle dépend en partie de la plateforme utilisée.",
  ],
  rows: [
    { label: 'Nom de domaine', text: 'Enregistré à votre nom, dans tous les cas.' },
    { label: 'Contenus', text: 'Textes, images, descriptions de produits, pages — les vôtres.' },
    { label: 'Données clients et commandes', text: 'Exportables depuis toutes les plateformes que nous utilisons.' },
    { label: 'Développements spécifiques', text: 'Thème personnalisé, code sur mesure réalisé par nos soins, remis à la livraison.' },
  ],
  aside: {
    eyebrow: 'Ce qui dépend de la plateforme',
    title: 'SaaS ou auto-hébergé — deux modèles de propriété',
    body: [
      "Sur Shopify, votre boutique vit sur l'infrastructure Shopify : vous êtes locataire de l'infrastructure, propriétaire de vos données. Si vous partez, vous exportez données et contenus, mais vous quittez l'écosystème technique.",
      "Sur WooCommerce / WordPress, votre boutique est hébergée sur un serveur à votre nom : vous possédez le code, la base de données et l'hébergement — en contrepartie, vous êtes responsable de la maintenance, des mises à jour de sécurité et de la performance du serveur.",
      "Nous expliquons ces différences au cadrage. Le choix de plateforme est aussi un choix de modèle de propriété.",
    ],
  },
};

// S8 — Ce qui peut venir ensuite
export const shopNext = {
  eyebrow: 'Du site au système',
  title: 'Quand votre boutique a besoin de plus',
  intro: [
    "Une boutique qui vend génère des opérations — commandes à traiter, clients à suivre, rapports à produire, stocks à synchroniser, prospects à relancer. Voici les prolongements que nous rencontrons.",
  ],
  rows: [
    {
      title: 'Automatisation des opérations',
      text: "Rapports de ventes automatiques, relances de paniers abandonnés, traitement de commandes : chez ATTA Africa, une suite d'automatisations tourne en production chaque jour. Un prolongement conçu quand le volume le justifie.",
      link: { label: 'Explorer ce service', href: '/services/ia-automatisation' },
    },
    {
      title: 'Acquisition et marketing',
      text: "Votre boutique ne fabrique pas ses propres clients. Référencement, campagnes, e-mailing, contenu : l'acquisition est un chantier distinct.",
      link: { label: 'Explorer ce service', href: '/services/marketing-acquisition' },
    },
    {
      title: 'Gestion commerciale et intégrations',
      text: 'Comptabilité, facturation, stocks centralisés, CRM : quand votre boutique doit dialoguer avec vos outils de gestion.',
      link: { label: 'Explorer ce service', href: '/services/crm-erp-integrations' },
    },
    {
      title: 'Conseil',
      text: "Pas certain que c'est le bon moment pour ouvrir une boutique, ou vous hésitez entre plusieurs modèles ? Notre offre Conseil aide à poser le cadre avant tout engagement.",
      link: { label: 'Explorer ce service', href: '/services/conseil-strategie' },
    },
  ],
};

// S9 — Réalisations e-commerce
export const shopProjects = {
  eyebrow: 'Réalisations e-commerce',
  title: 'Des boutiques en ligne que nous avons conçues et livrées',
  intro: [
    "Le commerce en ligne est l'une de nos expertises les plus prouvées. Voici les projets que nous pouvons nommer.",
  ],
  cards: [
    {
      badge: 'Shopify · E-commerce & automatisation',
      title: 'ATTA Africa',
      text: "Boutique Shopify DTC premium pour une marque de mode ouest-africaine. Vente transfrontalière en plusieurs devises, paiements internationaux et Mobile Money via PayDunya, suite d'automatisations livrée (reporting, traitement de commandes, relances panier). Résultats quantifiés à collecter en entretien.",
      image: { src: '/assets/real/atta-africa.png', alt: 'Aperçu de la boutique ATTA Africa' },
      link: { label: 'Visiter la boutique', href: 'https://atta-africa.com' },
    },
    {
      badge: 'WooCommerce',
      title: 'Link Shop',
      text: "Boutique WooCommerce développée par notre équipe. Périmètre et fonctionnalités à confirmer avant enrichissement.",
      image: { src: '/assets/real/link-shop.jpg', alt: 'Aperçu de la boutique Link Shop' },
      link: { label: 'Visiter la boutique', href: 'https://linkshop.sn' },
    },
    {
      badge: 'Également au portfolio',
      title: 'Luxury Bijouterie by KN · Marjan Bijouterie',
      text: "Projets du portfolio déclaré, potentiellement pertinents comme preuves e-commerce supplémentaires. Sites, périmètres et visuels à vérifier avant publication.",
      link: { label: 'Toutes nos réalisations', href: '/realisations' },
    },
  ],
  cta: { label: "Voir l'ensemble de nos réalisations", href: '/realisations' } as SpLinkData,
};

// S10 — FAQ (9 questions)
export const shopFaqIntro = { eyebrow: 'Avant de vous lancer', title: 'Questions fréquentes' };

export const shopFaqItems = [
  {
    q: 'Combien coûte une boutique en ligne ?',
    a: "Une boutique en ligne démarre à partir de 500 000 FCFA, selon le nombre de produits, les fonctionnalités, les moyens de paiement à intégrer, les zones de livraison et le niveau de personnalisation. À ce budget de conception s'ajoutent les coûts récurrents de la plateforme (abonnement Shopify, ou hébergement et maintenance pour WooCommerce), les éventuels frais de transaction et le nom de domaine. Le devis est gratuit, établi après une première conversation.",
    toValidateNote: 'Montant (500 000 FCFA) à reconfirmer avant publication.',
  },
  {
    q: "Combien de temps prend la création d'une boutique ?",
    a: "Notre délai moyen pour un premier livrable visible est de deux semaines. Une boutique fonctionnelle avec un catalogue de taille modérée est généralement livrée en un à trois mois, selon la complexité du catalogue, des intégrations et de la production de contenus (photos, descriptions).",
  },
  {
    q: 'Est-ce que mes clients pourront payer par Mobile Money ?',
    a: "Les solutions de paiement mobile (Wave, Orange Money, Free Money) peuvent être intégrées via des prestataires comme PayDunya, selon votre pays, votre statut commercial et la plateforme retenue. La disponibilité exacte et les frais dépendent de votre éligibilité auprès du prestataire. Nous vérifions les options réelles avec vous au cadrage — pas dans l'abstrait.",
  },
  {
    q: 'Est-ce que je peux vendre dans plusieurs pays et en plusieurs devises ?',
    a: "Oui, selon la plateforme. Shopify gère nativement les ventes multi-devises et les marchés multiples ; WooCommerce le permet aussi, avec des extensions. La gestion multidevise implique des choix sur les taux de change, les frais, les moyens de paiement par zone et les règles de livraison par pays. Nous cadrons tout cela avec vous.",
  },
  {
    q: 'Shopify ou WooCommerce : comment savoir ?',
    a: "Nous ne vous demandons pas de choisir avant la première conversation. Nous recommandons la plateforme après avoir compris votre projet. Critères principaux : modèle commercial, volume de produits, marchés, tolérance aux coûts récurrents, besoin de personnalisation technique, capacité de maintenance. La section « Choisir la bonne plateforme » ci-dessus donne les premiers repères.",
  },
  {
    q: 'Est-ce que je pourrai gérer ma boutique moi-même après la livraison ?',
    a: "Oui. Ajouter un produit, modifier un prix, traiter une commande, lancer une promotion : ces actions sont accessibles dans l'interface d'administration de Shopify comme de WooCommerce. Formation à la livraison, documentation remise.",
  },
  {
    q: 'À qui appartiennent la boutique, les données et les accès ?',
    a: "Vos données clients, vos contenus, votre domaine et vos développements spécifiques vous appartiennent. Le degré de propriété technique dépend de la plateforme : sur Shopify, propriétaire de vos données mais locataire de l'infrastructure ; sur WooCommerce, vous possédez aussi le serveur et le code. Ces différences sont détaillées dans la section Propriété ci-dessus.",
  },
  {
    q: "J'ai déjà une boutique mais elle ne me convient plus. Que proposez-vous ?",
    a: "Nous commençons par comprendre ce qui ne fonctionne pas : plateforme, design, performances, paiements, gestion, ou un peu de tout. Selon les cas, nous améliorons l'existant, ou nous planifions une migration vers une autre plateforme avec transfert du catalogue, des données et un plan de redirections pour préserver votre référencement. Le détail vit sur notre page Refonte.",
  },
  {
    q: "Est-ce qu'une boutique en ligne suffira pour avoir des clients ?",
    a: "Non. Une boutique est un outil de vente, pas un outil d'acquisition. Pour faire venir des visiteurs qualifiés, il faut travailler le référencement, les contenus, les réseaux sociaux, l'e-mailing ou la publicité — un chantier distinct. Notre expertise Marketing peut vous accompagner sur ce terrain.",
  },
];

// S11 — Contact
export const shopContact = {
  eyebrow: 'Prendre contact',
  title: 'Parlons de votre projet',
  lead:
    "Un commerce à lancer, une boutique à améliorer, une migration à planifier, ou un besoin à clarifier avant de décider : la première conversation est gratuite, sans engagement, et nous répondons sous 24 heures.",
};
