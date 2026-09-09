// ── Page « Développement Shopify » (/services/developpement-shopify)
//
// Source : maquette connect-web-shopify-v1.html, bloc `page-design-data`
//   (état FINAL — builder unifié kind='shopify', 12 sections `next-s{n}`).
// 12 sections. Hero : chapô court (`cfg.lead`). Marque Shopify : eyebrow texte
//   seul (pas de glyphe — voir décision conception-web/wordpress). ATTA = seule
//   preuve nommée, plusieurs angles. Montant FAQ Q1 → `toValidateNote`.
// Ne PAS revendiquer « Shopify Partner » / « Shopify Expert » (Opus Q3).
// Aucun chiffre d'affaires / conversion d'ATTA.

import type { SpLinkData } from '@/components/sections/service-page/parts';

export const spfMeta = {
  title: 'Développement Shopify à Dakar — Connect Web',
  description:
    "Développement de boutiques Shopify à Dakar : thème sur mesure, marchés multi-devises, paiements locaux et internationaux, audit d'applications, migration. Devis gratuit.",
};

export const spfHero = {
  eyebrow: 'Développement Shopify',
  title:
    "Votre boutique Shopify, développée pour votre commerce — pas assemblée à partir d'un thème par défaut.",
  intro:
    "Nous développons des boutiques Shopify adaptées à votre activité, et nous accompagnons celles qui existent déjà quand elles ont besoin d'évoluer.",
  primaryCta: { label: 'Parlons de votre projet Shopify', href: '#contact' },
  secondaryCta: { label: 'Voir notre réalisation ATTA Africa', href: '#s9' },
  reassurance: ['Réponse sous 24 h', 'Devis gratuit', 'Vos accès vous appartiennent'],
};

// S2 — Shopify en connaissance de cause (4 cards, 2×2)
export const spfPlatform = {
  eyebrow: 'Comprendre la plateforme',
  title: 'Shopify en connaissance de cause',
  intro: [
    "Shopify est une plateforme hébergée, spécialisée dans le commerce en ligne : l'infrastructure technique (serveurs, sécurité, mises à jour, SSL, protection contre les pics de trafic) est gérée par Shopify. Vous ne gérez pas de serveur. C'est à la fois le principal avantage et la principale contrainte.",
  ],
  cards: [
    {
      title: 'Ce que Shopify fait bien',
      body: [
        "L'administration d'une boutique (catalogue, commandes, clients, promotions, rapports), l'infrastructure (disponibilité, vitesse, sécurité), l'écosystème d'applications, la gestion multi-devises / multi-langues / multi-zones, et la fiabilité sous forte charge.",
      ],
    },
    {
      title: 'Ce que Shopify impose',
      body: [
        "Un abonnement mensuel selon le forfait, des frais de transaction sur chaque vente, une dépendance à la plateforme, des applications tierces qui ajoutent coûts et parfois incompatibilités, et des limites sur la personnalisation du tunnel de paiement.",
      ],
    },
    {
      title: 'Quand Shopify est un bon choix',
      body: [
        "Marques DTC, catalogue structuré, commerce transfrontalier, marchands qui veulent se concentrer sur leur commerce sans gérer l'infrastructure, projets qui ont besoin d'une plateforme éprouvée pour tenir la croissance.",
      ],
    },
    {
      title: 'Quand une autre voie peut être plus adaptée',
      body: [
        "Commerce très modeste intégré à un site de contenus (WooCommerce peut suffire), besoin de personnalisation technique extrême, budget qui ne supporte pas les coûts récurrents.",
        "Nous ne recommandons pas Shopify par principe — mais quand c'est la bonne réponse. Notre page Boutiques en ligne compare les options.",
      ],
    },
  ],
};

// S3 — Du thème au sur-mesure (split, 3 items)
export const spfWork = {
  eyebrow: 'Le travail de développement',
  title: 'Du thème au développement sur mesure : ce que nous faisons concrètement',
  intro: [
    "Installer un thème Shopify prend une heure. Adapter une boutique Shopify à un commerce réel prend plusieurs semaines de conception, de développement et de configuration.",
  ],
  items: [
    {
      title: 'Personnalisation et développement du thème',
      body: [
        "Le thème est l'ensemble du code qui détermine l'apparence et le comportement de votre boutique. Nous travaillons en Liquid, HTML, CSS et JavaScript pour l'adapter à votre identité et à vos besoins.",
        "Trois approches selon le projet :\n- Personnaliser un thème existant de qualité (design, sections, fonctionnalités).\n- Créer des sections et des templates spécifiques dans un thème existant.\n- Développer un thème adapté quand les thèmes disponibles ne conviennent pas.",
        "Sur ATTA Africa, nous avons travaillé le thème, les sections, les templates et les assets pour construire une expérience produit de marque DTC premium — pas un template rempli.",
      ],
    },
    {
      title: "Configuration du catalogue et de l'expérience produit",
      body: [
        "Fiches produits, variantes, collections, filtres, navigation. La manière dont vos produits sont présentés, organisés et trouvés influence directement vos ventes.",
      ],
    },
    {
      title: 'Configuration des marchés et des paramètres commerciaux',
      body: [
        "Zones de livraison, tarifs, devises, langues, taxes selon les marchés. Shopify propose des outils natifs — leur configuration correcte demande une compréhension de votre modèle commercial, pas seulement de la plateforme.",
      ],
    },
  ],
};

// S4 — Gérer votre boutique (sélecteur, 4 ops)
export const spfOps = {
  eyebrow: 'Votre boutique au quotidien',
  title: 'Gérer votre boutique Shopify — sans nous appeler chaque matin',
  intro: [
    "L'interface d'administration de Shopify est conçue pour des marchands, pas pour des développeurs. Après la livraison, votre équipe pourra :",
  ],
  selectorLabel: 'Opérations quotidiennes',
  panelEyebrow: 'Au quotidien',
  operations: [
    {
      label: 'Gérer le catalogue',
      body: [
        "Ajouter un produit, modifier un prix, mettre à jour un stock, créer une collection ou une promotion — depuis l'interface Shopify, sur ordinateur ou sur l'application mobile.",
      ],
    },
    {
      label: 'Traiter les commandes',
      body: [
        "Consulter les nouvelles commandes, vérifier les paiements, préparer les expéditions, gérer les annulations et les remboursements.",
      ],
    },
    {
      label: 'Suivre les résultats',
      body: [
        "Shopify fournit des tableaux de bord natifs : chiffre d'affaires, commandes, produits les plus vendus, paniers abandonnés, sources de trafic. Nous vous montrons comment les lire et les utiliser.",
      ],
    },
    {
      label: 'Mettre à jour les contenus',
      body: [
        "Pages, textes, images, informations de livraison, conditions de vente — sans toucher au code.",
        "Ce que le thème personnalisé permet en plus (ajouter une section, modifier une mise en page) dépend de ce qui a été développé. Nous documentons les possibilités d'édition à la livraison et formons votre équipe.",
      ],
    },
  ],
};

// S5 — Paiements & marchés (reading, 3 items)
export const spfPayments = {
  eyebrow: 'Paiements & marchés',
  title: 'Paiements et marchés : ce qui fonctionne, ce qui dépend de votre situation',
  intro: [
    "Les paiements sont le sujet sur lequel le plus de malentendus circulent autour de Shopify, surtout quand le marchand est basé en Afrique de l'Ouest.",
  ],
  items: [
    {
      title: "Ce qu'il faut savoir d'emblée",
      body: [
        "Shopify Payments n'est pas disponible dans tous les pays ; sa disponibilité dépend du pays d'établissement du marchand. Les marchands établis dans un pays non couvert utilisent des prestataires de paiement tiers, dont la disponibilité, les frais et les conditions varient.",
        "Ce n'est pas un obstacle rédhibitoire — c'est un paramètre de configuration à poser dès le cadrage, pas à découvrir après la mise en ligne.",
      ],
    },
    {
      title: 'Comment nous abordons le sujet',
      body: [
        "Au cadrage, nous identifions avec vous :\n- Votre pays d'établissement et son éligibilité aux différents prestataires.\n- Les moyens de paiement que vos clients utilisent réellement.\n- Les prestataires disponibles pour intégrer chaque moyen de paiement, selon les contrats que vous pouvez signer.\n- Les devises à gérer si vous vendez dans plusieurs pays.",
      ],
    },
    {
      title: "L'expérience ATTA Africa",
      body: [
        "Configuration multi-marchés avec quatre devises (EUR, USD, CAD, XOF), paiements internationaux (cartes, PayPal, Apple Pay, Shop Pay) et Mobile Money via PayDunya (Wave, Orange Money, Free Money) pour les clients ouest-africains.",
        "Cette configuration illustre ce qui est possible. Elle ne signifie pas que tous ces moyens de paiement sont disponibles pour tous les marchands, dans tous les pays. La faisabilité dépend de votre situation — c'est pour cela que nous cadrons le sujet avant de développer.",
      ],
    },
  ],
};

// S6 — Migration (method / 2 items)
export const spfMigration = {
  eyebrow: 'Une migration préparée',
  title: 'Passer de WooCommerce, Prestashop ou une autre solution à Shopify',
  intro: [
    "Si votre boutique actuelle ne vous convient plus et que Shopify correspond mieux à votre commerce, la migration est possible — mais ce n'est pas un clic.",
  ],
  steps: [
    {
      title: 'Ce que la migration implique concrètement',
      body: [
        "- Transfert du catalogue : produits, variantes, images, descriptions, prix, collections.\n- Conservation des données clients et de l'historique de commandes, dans la limite de ce que la source permet d'exporter et de ce que Shopify permet d'importer.\n- Plan de redirections d'URLs pour préserver le référencement acquis.\n- Reconfiguration des paiements selon les prestataires disponibles pour votre pays.\n- Reconfiguration de la livraison, des zones, des tarifs et des règles.\n- Tests de commandes réels sur tous les moyens de paiement avant la mise en ligne.",
      ],
    },
    {
      title: 'Ce que nous ne pouvons pas garantir',
      body: [
        "Une migration sans aucune variation de référencement, sans aucune interruption et sans aucune perte de données. Ce que nous pouvons faire : identifier les risques, les anticiper et les réduire autant que possible. Les cas complexes sont traités sur notre page Refonte.",
        "Notre propre parcours sur ATTA Africa a inclus une migration de WordPress vers Shopify. Cette expérience nous permet de parler de migration avec un vécu concret.",
      ],
    },
  ],
};

// S7 — Applications (reading, 1 item)
export const spfApps = {
  eyebrow: "Maîtriser les applications",
  title: "Vos applications Shopify : moins d'applications, plus de maîtrise",
  intro: [
    "L'écosystème d'applications Shopify est l'une de ses forces. C'est aussi l'une de ses principales sources de problèmes quand il est mal géré.",
    "Le schéma est fréquent : pour chaque besoin, une application est installée. Au bout de quelques mois, la boutique compte quinze ou vingt applications, dont plusieurs font la même chose, certaines ne servent plus, d'autres se contredisent — et l'ensemble coûte plusieurs dizaines de milliers de FCFA par mois.",
  ],
  items: [
    {
      title: 'Ce que nous faisons dans ces situations',
      body: [
        "Nous auditons les applications installées : lesquelles sont utilisées, redondantes, remplaçables par une fonctionnalité native ou un développement ciblé, ou indispensables.",
        "L'objectif n'est pas de tout supprimer — certaines applications sont indispensables et bien faites. L'objectif est de ne garder que celles qui servent votre commerce.",
        "Sur ATTA Africa, ce travail d'audit et de rationalisation a permis de supprimer des applications redondantes et de rechercher des économies.",
      ],
    },
  ],
};

// S8 — Propriété (deep, 2 blocs)
export const spfOwnership = {
  eyebrow: 'Données et infrastructure',
  title: 'Propriété et Shopify : ce qui est à vous, ce qui est chez Shopify',
  intro: [
    "Shopify est un service hébergé (SaaS). Votre boutique vit sur l'infrastructure de Shopify, pas sur un serveur que vous possédez. C'est un choix de modèle, pas un piège — mais il faut en comprendre les implications.",
  ],
  cards: [
    {
      title: 'Ce qui vous appartient',
      body: [
        "- **Votre domaine**, enregistré à votre nom, indépendamment de Shopify.\n- **Vos données** — clients, commandes, historique, contenus, images, descriptions — exportables à tout moment.\n- **Le code personnalisé** — thème, sections, templates, développements — remis avec sa documentation.\n- **Vos contenus** — textes, pages, articles, images.",
      ],
    },
    {
      title: 'Ce qui reste chez Shopify',
      body: [
        "- **L'infrastructure technique** — serveurs, CDN, SSL, mises à jour. Vous êtes locataire, pas propriétaire. Si vous arrêtez l'abonnement, la boutique s'éteint.\n- **Certaines fonctionnalités natives** liées à votre forfait.\n- **Les applications tierces** — chacune a sa licence et ses données.",
        "Ce n'est pas un piège. C'est le modèle SaaS, le même que Slack, Google Workspace ou Notion. La question n'est pas « est-ce que Shopify m'enferme ? » mais « est-ce que le service vaut ce qu'il coûte pour mon commerce ? ».",
      ],
    },
  ],
};

// S9 — ATTA Africa (proof : 1 carte + 5 détails)
export const spfProof = {
  eyebrow: 'Un projet documenté',
  title: 'ATTA Africa — notre preuve Shopify',
  intro: [
    "ATTA Africa est une marque DTC premium de mode ouest-africaine. Nous sommes responsables de la boutique depuis la création de la marque — d'abord sur WordPress, puis sur Shopify après migration. C'est notre projet e-commerce le plus complet et le plus documenté.",
  ],
  card: {
    badge: 'Shopify · Thème, marchés & opérations',
    title: 'ATTA Africa',
    text: "Une boutique de mode développée et accompagnée depuis sa création, de WordPress à Shopify.",
    image: { src: '/assets/real/atta-africa.png', alt: 'Aperçu de la boutique ATTA Africa' },
    link: { label: 'Visiter la boutique', href: 'https://atta-africa.com' },
  },
  details: [
    {
      title: "Le thème et l'expérience produit",
      body: [
        "Développement et personnalisation du thème Shopify : sections, templates, assets. Une expérience produit conçue pour une marque premium.",
      ],
    },
    {
      title: 'Les marchés et les devises',
      body: [
        "Configuration multi-marchés avec quatre devises (EUR, USD, CAD, XOF). Chaque marché a ses propres règles de livraison et ses paramètres adaptés.",
      ],
    },
    {
      title: 'Les paiements locaux et internationaux',
      body: [
        "Paiements internationaux (cartes, PayPal, Apple Pay, Shop Pay) et Mobile Money via PayDunya (Wave, Orange Money, Free Money) pour les clients ouest-africains.",
      ],
    },
    {
      title: "L'audit et la rationalisation des applications",
      body: [
        "Suppression d'applications redondantes, remplacement de fonctionnalités par du code ou des solutions plus légères, recherche d'économies sur les coûts récurrents.",
      ],
    },
    {
      title: 'Les automatisations opérationnelles',
      body: [
        "Reporting mensuel des ventes (par produit, taille et zone), traitement de commandes, relances de paniers abandonnés, flows d'emailing via Klaviyo. Ces automatisations tournent en production.",
      ],
    },
  ],
};

// S10 — Quand votre boutique a besoin de plus (list + liens)
export const spfNext = {
  eyebrow: 'Après la boutique',
  title: 'Quand votre boutique Shopify a besoin de plus',
  intro: [],
  rows: [
    {
      title: 'Automatisations et opérations',
      text: "Rapports automatiques, relances, traitement de commandes, synchronisations : chez ATTA Africa, une suite d'automatisations tourne chaque jour. Le terrain de notre expertise IA et automatisation.",
      link: { label: 'Explorer ce service', href: '/services/ia-automatisation' },
    },
    {
      title: 'Acquisition et marketing',
      text: "Votre boutique ne fabrique pas ses propres clients. Référencement, campagnes, e-mailing, contenu : un chantier distinct.",
      link: { label: 'Explorer ce service', href: '/services/marketing-acquisition' },
    },
    {
      title: 'Gestion commerciale et intégrations',
      text: 'Comptabilité, facturation, stocks centralisés, CRM : quand votre boutique doit dialoguer avec vos outils de gestion.',
      link: { label: 'Explorer ce service', href: '/services/crm-erp-integrations' },
    },
    {
      title: 'Cadrage avant engagement',
      text: "Pas sûr que Shopify est le bon choix, ou vous voulez comparer avec d'autres solutions avant de vous engager ?",
      link: { label: 'Explorer ce service', href: '/services/conseil-strategie' },
    },
  ],
};

// S11 — FAQ (9 questions)
export const spfFaqIntro = { eyebrow: 'Vos questions', title: 'Questions fréquentes' };

export const spfFaqItems = [
  {
    q: 'Combien coûte un projet de boutique Shopify avec Connect Web ?',
    a: "Une boutique Shopify développée démarre à partir de 500 000 FCFA, selon le nombre de produits, la personnalisation du thème, les intégrations et les fonctionnalités. À ce budget de développement s'ajoutent les coûts récurrents de Shopify : abonnement mensuel (selon le forfait), frais de transaction éventuels, applications payantes. Nous cadrons le budget total — développement plus exploitation — dès la première conversation. Le devis est gratuit.",
    toValidateNote: 'Montant (500 000 FCFA) à reconfirmer avant publication.',
  },
  {
    q: "Combien de temps prend le développement d'une boutique Shopify ?",
    a: "Notre délai moyen pour un premier livrable visible est de deux semaines. Une boutique complète avec un catalogue de taille modérée est généralement livrée en un à trois mois, selon la personnalisation du thème, les intégrations et la production de contenus. Les projets avec migration, catalogue volumineux ou intégrations complexes prennent davantage.",
  },
  {
    q: 'Êtes-vous Shopify Partner ou Shopify Expert ?',
    a: "Nous ne revendiquons pas ces titres officiels. Nous maîtrisons le développement Shopify parce que nous construisons et exploitons des boutiques sur cette plateforme — ATTA Africa en est la preuve concrète. Si un label officiel est important pour vous, nous préférons être transparents plutôt que de prétendre une certification que nous n'avons pas.",
  },
  {
    q: 'Shopify Payments est-il disponible au Sénégal ?',
    a: "La disponibilité de Shopify Payments dépend du pays d'établissement du marchand ; la liste des pays pris en charge est publiée par Shopify et évolue. Si Shopify Payments n'est pas disponible pour votre pays, des prestataires de paiement tiers peuvent être intégrés — leur disponibilité, leurs frais et leurs conditions doivent être vérifiés au cas par cas. C'est un sujet que nous traitons systématiquement au cadrage.",
  },
  {
    q: 'Est-ce que mes clients pourront payer par Mobile Money ?',
    a: "Des solutions de paiement mobile (Wave, Orange Money, Free Money) peuvent être intégrées via des prestataires comme PayDunya, selon votre pays, votre statut commercial et les contrats disponibles. Nous l'avons fait sur ATTA Africa. La faisabilité exacte pour votre boutique dépend de votre situation — nous la vérifions au cadrage.",
  },
  {
    q: 'Quelle est la différence entre votre page Shopify et votre page Boutiques en ligne ?',
    a: "La page Boutiques en ligne traite du projet commercial e-commerce dans son ensemble, quel que soit l'outil — elle compare Shopify et WooCommerce et aide à choisir. Cette page traite spécifiquement de la plateforme Shopify : développement de thème, personnalisation, applications, intégrations, marchés et exploitation. Si vous savez que vous voulez Shopify, vous êtes au bon endroit.",
  },
  {
    q: "Je veux passer de WooCommerce à Shopify. C'est compliqué ?",
    a: "C'est faisable, mais ce n'est pas un simple transfert. Catalogue, données, URLs, paiements, livraison : chaque élément doit être repris, reconfiguré et testé. Nous l'avons vécu sur notre propre projet ATTA Africa. Le détail est dans la section « Une migration préparée » ci-dessus.",
  },
  {
    q: 'À qui appartient la boutique Shopify ?',
    a: "Vos données, votre domaine, vos contenus et le code personnalisé vous appartiennent. L'infrastructure Shopify reste chez Shopify — vous êtes locataire du service, propriétaire de vos données. Le détail est dans la section « Données et infrastructure » ci-dessus.",
  },
  {
    q: 'Assurez-vous la maintenance après la livraison ?',
    a: "Shopify gère la maintenance de l'infrastructure (serveurs, sécurité, mises à jour de la plateforme). Ce qui reste à entretenir : le thème personnalisé, les applications, la configuration commerciale et les contenus. Nous proposons un accompagnement sur ces aspects — corrections, évolutions, audit d'applications, suivi des mises à jour du thème — selon les termes du contrat. Vous n'y êtes jamais forcé.",
  },
];

// S12 — Contact
export const spfContact = {
  eyebrow: 'Prendre contact',
  title: 'Parlons de votre projet Shopify',
  lead:
    "Une boutique Shopify à créer, une boutique existante à améliorer, une migration à planifier, ou un doute sur la bonne plateforme : la première conversation est gratuite, sans engagement, et nous répondons sous 24 heures.",
};
