// ── Page « ERP, CRM et intégrations » (/services/crm-erp-integrations)
//
// Source éditoriale : CONNECT-WEB-CRM-ERP-INTEGRATIONS-ARCHITECTURE-COPY-V1.md
//   (Opus, dossier EN-ATTENTE-UX). 12 sections. Hero partagé.
// Aucune maquette validée : composition via le kit partagé `service-page`,
//   choix de blocs par type de section. `noindex` conservé jusqu'à recette PO.
// Preuve principale : Maison Peinture Sénégal (Odoo) — carte sobre, sans URL
//   publique, détails à confirmer. ATTA Africa = preuve d'intégration.
// Ne PAS revendiquer « partenaire certifié » Odoo / HubSpot (doc §6.4).

import type { SpLinkData } from '@/components/sections/service-page/parts';

export const crmMeta = {
  title: 'ERP, CRM et intégrations à Dakar — Connect Web',
  description:
    "Mise en place d'ERP, CRM et intégrations à Dakar : Odoo, HubSpot, connexion d'outils, migration de données, formation. PME et organisations. Devis gratuit.",
};

export const crmHero = {
  eyebrow: 'ERP / CRM & intégrations',
  title:
    'Organiser vos données, connecter vos outils, arrêter de ressaisir ce qui devrait circuler tout seul.',
  intro:
    "Quand votre entreprise grandit, ses outils ne suivent pas toujours. Nous mettons en place les systèmes de gestion — ERP, CRM, intégrations — qui centralisent vos données et rendent vos processus lisibles, à l'échelle de votre activité réelle.",
  primaryCta: { label: 'Parlons de votre organisation', href: '#contact' },
  secondaryCta: { label: 'Voir nos réalisations', href: '/realisations' },
  reassurance: ['Réponse sous 24 h', 'Devis gratuit', 'Vos accès vous appartiennent'],
};

// S2 — ERP, CRM : de quoi parle-t-on (reading, 3 blocs)
export const crmBasics = {
  eyebrow: 'De quoi parle-t-on concrètement',
  title: 'Deux outils, deux fonctions — et parfois les deux en un',
  intro: [
    "Deux acronymes que beaucoup de dirigeants connaissent de nom sans en comprendre la portée. Voici une explication par l'usage, pas un cours théorique.",
  ],
  items: [
    {
      icon: 'layers',
      title: 'Un ERP organise les opérations de votre entreprise',
      body: [
        "ERP signifie Enterprise Resource Planning — progiciel de gestion intégré. C'est un logiciel qui regroupe plusieurs fonctions de gestion dans un même système : ventes, achats, stocks, facturation, comptabilité, et parfois production, logistique ou ressources humaines.",
        "L'intérêt : quand une commande est enregistrée, le stock se met à jour, la facture peut être générée et la comptabilité est alimentée — sans que personne ait à ressaisir les mêmes données dans trois outils différents.",
      ],
    },
    {
      icon: 'users',
      title: 'Un CRM organise la relation avec vos clients et prospects',
      body: [
        "CRM signifie Customer Relationship Management. C'est un outil qui centralise vos contacts, vos échanges commerciaux, vos opportunités de vente et votre suivi client. Votre équipe sait où en est chaque prospect, ce qui a été dit, ce qui doit être relancé, ce qui a été signé.",
        "Sans CRM, ces informations vivent dans les carnets, les messageries et les mémoires individuelles — et partent avec les personnes qui quittent l'équipe.",
      ],
    },
    {
      icon: 'puzzle',
      title: 'Les deux se recoupent souvent',
      body: [
        "Certains ERP incluent un module CRM. Certains CRM offrent des fonctions de facturation ou de gestion de pipeline qui s'approchent d'un ERP léger. La frontière n'est pas toujours nette — et c'est normal. Ce qui compte, c'est de comprendre votre besoin avant de choisir l'outil.",
      ],
    },
  ],
};

// S3 — Les signaux (sequence numérotée, sans icône — doc §7.3)
export const crmSignals = {
  eyebrow: 'Reconnaître le problème',
  title: 'Ces situations coûtent plus cher que le système qui les résoudrait',
  intro: [
    "C'est la section où l'on passe de « je devrais peut-être m'intéresser à ça » à « c'est exactement mon problème ».",
  ],
  items: [
    {
      title: 'Vos données vivent dans plusieurs endroits qui ne se parlent pas',
      body: [
        "Les prix dans un tableur, les clients dans un autre, les commandes dans un logiciel de facturation, les stocks dans un carnet. Personne n'a une vue complète, et reconstituer un chiffre fiable demande plusieurs heures de travail.",
      ],
    },
    {
      title: 'La même information est saisie plusieurs fois',
      body: [
        "La commande est notée dans le fichier des ventes, puis ressaisie dans le logiciel de facturation, puis recopiée dans le suivi de livraison. Chaque ressaisie est une source d'erreur et de temps perdu.",
      ],
    },
    {
      title: "Vous n'avez pas de visibilité sur votre activité en temps réel",
      body: [
        "Combien vous avez vendu ce mois-ci, quel est votre stock disponible, quels clients n'ont pas été relancés, quels devis n'ont pas reçu de réponse : ces informations arrivent en retard ou exigent une reconstitution à chaque demande.",
      ],
    },
    {
      title: 'Votre équipe commerciale perd des opportunités',
      body: [
        "Les prospects ne sont pas suivis, les relances ne sont pas faites, les propositions restent sans suite parce que personne ne sait qui doit faire quoi et quand. Ce n'est pas un problème de compétence — c'est un problème de système.",
      ],
    },
    {
      title: 'Votre croissance crée du désordre',
      body: [
        "Ce qui fonctionnait à cinq personnes ne fonctionne plus à quinze. Les processus informels qui tenaient grâce aux habitudes de l'équipe d'origine se cassent quand de nouvelles personnes arrivent.",
        "Chacun de ces problèmes a un coût — souvent invisible, mais réel. Le système qui les résout n'a pas besoin d'être énorme : il a besoin d'être adapté à votre taille et à vos processus.",
      ],
    },
  ],
};

// S4 — Ce que nous mettons en place (reading, 6 items, dernier avec lien)
export const crmScope = {
  eyebrow: "Notre périmètre d'intervention",
  title: 'Ce que nous savons faire — et où commence un autre métier',
  intro: [
    "Notre intervention couvre le chemin qui va de la compréhension de votre organisation à la mise en service d'un outil de gestion adapté.",
  ],
  items: [
    {
      icon: 'search',
      title: 'Comprendre vos processus avant de choisir un outil',
      body: [
        "Comment circulent les informations dans votre entreprise : du prospect au client, de la commande à la livraison, de la facture au règlement. Nous identifions les points de friction, les doublons et les manques avant de recommander quoi que ce soit.",
      ],
    },
    {
      icon: 'settings',
      title: 'Choisir et configurer le bon outil',
      body: [
        "Odoo est l'outil sur lequel nous avons l'expérience la plus documentée. Selon votre besoin, nous pouvons aussi travailler avec HubSpot ou d'autres solutions. Le choix se fait en fonction de votre activité, de votre budget et de votre équipe — pas de la préférence de l'agence.",
      ],
    },
    {
      icon: 'key',
      title: 'Paramétrer les modules et les droits',
      body: [
        "Les champs, les vues, les processus, les droits d'accès par utilisateur, les documents et les rapports sont configurés selon votre fonctionnement réel. Le paramétrage est le travail le plus sous-estimé et le plus déterminant pour l'adoption de l'outil.",
      ],
    },
    {
      icon: 'database',
      title: 'Importer vos données existantes',
      body: [
        "Vos fichiers clients, vos catalogues produits, vos historiques de commandes : nous les nettoyons, les structurons et les importons dans le nouveau système. Ce travail de migration est essentiel — et souvent plus long que l'installation du logiciel elle-même.",
      ],
    },
    {
      icon: 'book',
      title: 'Former votre équipe',
      body: [
        "Un outil que personne n'utilise est un investissement perdu. Nous formons les personnes concernées sur les gestes qu'elles devront faire au quotidien, et nous remettons une documentation.",
      ],
    },
    {
      icon: 'git-branch',
      title: 'Ce que nous ne faisons pas',
      body: [
        "Nous ne développons pas un ERP ou un CRM de zéro. Nous configurons, adaptons et connectons des outils existants. Si votre besoin est un logiciel métier entièrement sur mesure — un portail, une application, un système de gestion spécifique —, c'est le terrain de notre expertise Plateformes et applications web.",
      ],
      link: {
        label: 'Voir Plateformes et applications web',
        href: '/services/plateformes-applications',
      } as SpLinkData,
    },
  ],
};

// S5 — Connecter vos outils (reading split, 3 items)
export const crmConnect = {
  eyebrow: 'Les intégrations',
  title: "Vos outils ne se parlent pas — c'est souvent là que ça coince",
  intro: [
    "Beaucoup d'entreprises n'ont pas besoin d'un ERP complet. Elles ont besoin que leurs outils existants communiquent : que la boutique informe le stock, que le CRM se mette à jour depuis un formulaire, que la facturation s'alimente depuis les commandes.",
  ],
  items: [
    {
      icon: 'refresh',
      title: 'Ce que signifie « intégrer » deux outils',
      body: [
        "Faire en sorte qu'une information saisie dans un outil se retrouve dans l'autre sans ressaisie manuelle. Cela peut être un échange ponctuel (export/import régulier), un flux à sens unique (la boutique envoie les commandes au logiciel de gestion) ou une synchronisation dans les deux sens (le stock est mis à jour des deux côtés en continu).",
      ],
    },
    {
      icon: 'plug',
      title: 'Ce que cela implique techniquement',
      body: [
        "Les outils communiquent via des API, des webhooks, des connecteurs ou des échanges de fichiers structurés — selon ce que chaque outil propose. La faisabilité, la fiabilité et le coût dépendent des outils concernés, de leurs interfaces d'échange et de la complexité des règles de correspondance.",
      ],
    },
    {
      icon: 'users',
      title: 'Ce que cela implique humainement',
      body: [
        "Quand deux outils partagent des données, il faut définir lequel « gagne » en cas de conflit, comment détecter les erreurs, comment gérer les doublons et qui surveille que tout fonctionne. L'intégration technique ne supprime pas le besoin de supervision — elle le simplifie.",
        "Chez ATTA Africa, nous avons mis en place des intégrations entre la boutique Shopify et des outils de reporting, d'emailing et de traitement de commandes — un exemple concret de ce que signifie connecter un commerce à ses opérations.",
      ],
    },
  ],
};

// S6 — Odoo, HubSpot et les autres (config cards, 3 + note)
export const crmTools = {
  eyebrow: 'Comment choisir',
  title: 'Quel outil pour votre organisation ?',
  intro: [
    "Le choix d'un ERP ou d'un CRM dépend de votre activité, de la taille de votre équipe, de vos processus, de votre budget et de vos outils existants. Voici les deux plateformes sur lesquelles nous avons une expérience documentée, et les critères qui aident à choisir.",
  ],
  cards: [
    {
      icon: 'layers',
      title: 'Odoo',
      body: [
        "Système de gestion modulaire, open source dans sa version Community. Couvre un large spectre : ventes, achats, stocks, facturation, comptabilité, CRM, point de vente et d'autres modules selon la version et l'édition. Adapté aux PME qui veulent centraliser plusieurs fonctions dans un même outil.",
        "Les coûts dépendent de l'édition (Community ou Enterprise), du nombre d'utilisateurs, de l'hébergement et des modules activés. C'est sur Odoo que nous avons accompagné Maison Peinture Sénégal.",
      ],
    },
    {
      icon: 'users',
      title: 'HubSpot',
      body: [
        "Plateforme CRM spécialisée dans la gestion de la relation client, du marketing et des ventes. Version gratuite pour les fonctions de base, forfaits payants pour les fonctionnalités avancées. Adapté aux équipes qui veulent structurer leur suivi commercial sans déployer un ERP complet.",
        "Nous utilisons HubSpot sur notre propre site pour la gestion des contacts — une intégration technique limitée mais réelle.",
      ],
    },
    {
      icon: 'compass',
      title: 'Quand un autre outil peut être pertinent',
      body: [
        "Si votre secteur dispose d'un logiciel métier spécifique (distribution, BTP, santé, éducation), cet outil peut être plus adapté qu'un ERP généraliste. Si votre besoin est principalement un tableau de bord ou un outil de reporting, un ERP complet n'est peut-être pas nécessaire. Nous vous le dirons.",
      ],
    },
  ],
  notes: [
    {
      title: 'Comment se fait le choix',
      body: [
        "Nous ne vous demandons pas de choisir avant la première conversation. Nous commençons par comprendre vos processus, vos irritants et vos contraintes, puis nous recommandons la solution qui tient la route dans votre contexte — pas dans un cas d'école.",
      ],
    },
    {
      title: 'Une précision sur les certifications',
      body: [
        "Connect Web n'est pas partenaire certifié d'Odoo ni de HubSpot. Nous maîtrisons ces outils parce que nous les utilisons sur des projets réels.",
      ],
    },
  ],
};

// S7 — Méthode (timeline, 6 temps)
export const crmMethod = {
  eyebrow: 'Comment un projet se déroule',
  title: "Le déroulement d'un projet ERP/CRM, en six temps",
  intro: [
    "Un projet de système de gestion touche les opérations quotidiennes de votre entreprise. Il ne peut pas être improvisé, mais il ne doit pas non plus devenir un chantier interminable.",
  ],
  steps: [
    {
      icon: 'search',
      title: 'Comprendre votre organisation',
      body: [
        "Vos processus, vos données, vos outils actuels, vos irritants, vos équipes et leurs habitudes. Nous ne démarrons pas par l'outil — nous démarrons par votre fonctionnement réel.",
      ],
    },
    {
      icon: 'clipboard',
      title: "Cadrer le périmètre et choisir l'outil",
      body: [
        "Quels processus seront couverts en priorité, quels utilisateurs seront concernés, quel outil est adapté, quel budget est raisonnable. Le périmètre est défini avant tout paramétrage — pas pendant.",
      ],
    },
    {
      icon: 'settings',
      title: 'Configurer et adapter',
      body: [
        "Installation, paramétrage des modules, configuration des droits, des champs, des vues et des processus. Si des adaptations spécifiques sont nécessaires (champs personnalisés, rapports sur mesure), elles sont développées à ce stade.",
      ],
    },
    {
      icon: 'database',
      title: 'Importer les données',
      body: [
        "Nettoyage, structuration et importation de vos données existantes. C'est souvent l'étape la plus longue et la plus critique — la qualité des données conditionne l'utilité de l'outil.",
      ],
    },
    {
      icon: 'check',
      title: 'Tester et former',
      body: [
        "Tests avec des données réelles, vérification des processus, correction des anomalies. Formation des utilisateurs sur les gestes quotidiens. Documentation remise à votre équipe.",
      ],
    },
    {
      icon: 'refresh',
      title: 'Mettre en service et accompagner',
      body: [
        "Passage en production, supervision des premières semaines, correction des problèmes qui apparaissent à l'usage. Un accompagnement de maintenance peut être proposé selon le contrat.",
      ],
    },
  ],
};

// S8 — Propriété (config cards, deep, 2 + outro)
export const crmOwnership = {
  eyebrow: 'Ce qui vous appartient',
  title: 'Vos données, vos comptes, vos accès — les droits et les nuances',
  intro: [
    "La propriété d'un système de gestion est plus complexe que celle d'un site web, parce qu'elle fait intervenir un logiciel tiers avec ses propres conditions.",
  ],
  cards: [
    {
      icon: 'key',
      title: 'Ce qui vous appartient dans tous les cas',
      body: [
        "- Vos données — contacts, clients, commandes, factures, historiques — exportables à tout moment, quel que soit l'outil.\n- Vos comptes d'administration — vous êtes l'administrateur principal de votre instance.\n- Les configurations et développements spécifiques réalisés par nos soins — documentés et remis.",
      ],
    },
    {
      icon: 'server',
      title: "Ce qui dépend de l'outil et de l'édition",
      body: [
        "- Sur Odoo Community (open source), vous possédez le code et pouvez l'héberger où vous le souhaitez. Sur Odoo Enterprise (payant), le code propriétaire reste la propriété d'Odoo SA et son utilisation est soumise à licence.\n- Sur HubSpot, vos données sont sur l'infrastructure HubSpot : vous en êtes propriétaire (exportables), mais locataire du service — comme pour tout SaaS.\n- L'hébergement peut être chez vous, chez un hébergeur tiers ou chez l'éditeur, selon la configuration choisie.",
      ],
    },
  ],
  outro:
    "Nous vous expliquons ces distinctions au cadrage, pas à la livraison. Les modalités sont formalisées au contrat.",
};

// S9 — Preuve (reading non split, 2 items + cta)
export const crmProof = {
  eyebrow: 'Notre expérience',
  title: 'Maison Peinture Sénégal — notre projet Odoo',
  intro: [
    "Maison Peinture Sénégal est une entreprise de quincaillerie et de distribution de peinture. Nous avons accompagné la mise en place d'un système Odoo pour structurer sa gestion commerciale et son suivi des stocks.",
  ],
  items: [
    {
      title: 'Un cas de distribution centralisé dans un outil adapté',
      body: [
        "Ce projet illustre un cas courant : une entreprise de distribution dont les processus opérationnels — commandes fournisseurs, stocks, ventes, facturation — avaient besoin d'être centralisés.",
        "Aucune URL publique n'est disponible pour ce projet. Les détails — version Odoo, modules déployés, adaptations, résultats mesurés — sont partagés en entretien sur demande. (Périmètre exact à confirmer avec le PO ; aucun résultat chiffré n'est avancé sans preuve.)",
      ],
    },
    {
      title: 'Preuve complémentaire — intégrations e-commerce (ATTA Africa)',
      body: [
        "Sur ATTA Africa, notre projet Shopify, nous avons mis en place des intégrations opérationnelles : reporting automatisé, traitement de commandes, connexions API et webhooks entre la boutique et les outils de gestion. Ce n'est pas un projet ERP au sens strict, mais c'est une démonstration de notre capacité à faire circuler les données entre un commerce et ses opérations.",
      ],
    },
  ],
  cta: { label: "Voir l'ensemble de nos réalisations", href: '/realisations' } as SpLinkData,
};

// S10 — Ce qui peut venir ensuite (extensions, 4)
export const crmNext = {
  eyebrow: 'Du système au reste',
  title: "Quand le besoin dépasse le paramétrage d'un outil existant",
  intro: [
    "Un système de gestion s'inscrit souvent dans un ensemble plus large. Voici les prolongements les plus fréquents.",
  ],
  rows: [
    {
      icon: 'workflow',
      title: "Vous avez besoin d'automatiser des tâches récurrentes",
      text: "Rapports générés automatiquement, relances programmées, synchronisations, traitements déclenchés par événement : c'est le terrain de notre expertise IA et automatisation.",
      link: { label: 'Explorer ce service', href: '/services/ia-automatisation' },
    },
    {
      icon: 'app-window',
      title: "Vous avez besoin d'un outil métier qui n'existe pas sur le marché",
      text: "Portail, plateforme, application interne, tableau de bord spécifique : quand aucun logiciel standard ne colle à votre processus, c'est le terrain de notre expertise Plateformes et applications web.",
      link: { label: 'Explorer ce service', href: '/services/plateformes-applications' },
    },
    {
      icon: 'shopping-bag',
      title: 'Votre boutique en ligne doit être connectée à votre gestion',
      text: 'Stocks, commandes, facturation, données clients : la connexion entre votre commerce et votre ERP/CRM est un sujet récurrent.',
      link: { label: 'Explorer ce service', href: '/services/boutiques-en-ligne' },
    },
    {
      icon: 'compass',
      title: 'Vous voulez cadrer avant de vous engager',
      text: "Notre offre Conseil et stratégie aide à poser le périmètre et à choisir la bonne direction avant tout projet de mise en place.",
      link: { label: 'Explorer ce service', href: '/services/conseil-strategie' },
    },
  ],
};

// S11 — FAQ (8 questions)
export const crmFaqIntro = { eyebrow: 'Vos questions', title: 'Questions fréquentes' };

export const crmFaqItems = [
  {
    q: "Combien coûte la mise en place d'un ERP ou d'un CRM ?",
    a: "Le budget dépend du nombre de processus à couvrir, du nombre d'utilisateurs, de la complexité de la configuration, du volume de données à migrer, des intégrations et du niveau de formation. Il n'existe pas de forfait standard — chaque projet est cadré selon son périmètre réel. Les coûts récurrents (licences, hébergement, maintenance) s'ajoutent au budget de mise en place et dépendent de l'outil et de l'édition choisis. Le devis est gratuit, établi après un premier échange.",
  },
  {
    q: 'Combien de temps prend un projet ERP/CRM ?',
    a: "Un CRM simple peut être opérationnel en quelques semaines. Un ERP couvrant plusieurs processus (ventes, stocks, facturation, comptabilité) prend plutôt deux à quatre mois selon la complexité et la disponibilité de vos données. Le facteur le plus souvent sous-estimé est le nettoyage et la migration des données existantes.",
  },
  {
    q: 'Nos données actuelles (tableurs, ancien logiciel) peuvent-elles être récupérées ?',
    a: "Oui, dans la plupart des cas. Nous nettoyons, structurons et importons vos données existantes dans le nouveau système. La qualité du résultat dépend de la qualité des données sources — plus elles sont structurées, plus la migration est fiable. Si les données sont dans un ancien logiciel, la faisabilité de l'export dépend de ses capacités techniques.",
  },
  {
    q: 'Est-ce que mon équipe va réussir à utiliser l’outil ?',
    a: "C'est le risque principal de tout projet de gestion, et c'est pour cela que nous y consacrons un temps réel : formation sur les gestes quotidiens, documentation, accompagnement des premières semaines. Un outil bien configuré et bien expliqué s'adopte. Un outil mal paramétré ou imposé sans accompagnement finit dans un tiroir.",
  },
  {
    q: 'Vous êtes partenaire certifié Odoo ou HubSpot ?',
    a: "Non. Nous maîtrisons ces outils parce que nous les utilisons sur des projets réels. Si un label officiel est important pour votre organisation, nous préférons être transparents plutôt que de revendiquer une certification que nous n'avons pas.",
  },
  {
    q: "Mon ERP/CRM est déjà installé mais personne ne l'utilise correctement. Que proposez-vous ?",
    a: "Nous commençons par un diagnostic : est-ce un problème de configuration, de données, de formation ou d'adéquation de l'outil au besoin ? Selon les cas, nous reconfigurons, nettoyons les données, reformons les utilisateurs ou recommandons un changement d'approche. Parfois, le problème n'est pas l'outil — c'est le processus qu'il est censé supporter.",
  },
  {
    q: 'Est-ce que l’ERP/CRM peut être connecté à notre boutique en ligne ?',
    a: "Oui, selon les outils et les interfaces disponibles. Odoo peut communiquer avec Shopify, WooCommerce ou d'autres plateformes via des connecteurs ou des développements spécifiques. HubSpot dispose d'intégrations natives avec de nombreux outils. La faisabilité et le coût dépendent du périmètre — nous les évaluons au cadrage.",
  },
  {
    q: 'À qui appartiennent les données et les accès ?',
    a: "Vos données vous appartiennent et sont exportables. Les droits sur le code et l'hébergement dépendent de l'outil et de l'édition : Odoo Community est open source, Odoo Enterprise est sous licence, HubSpot est un service hébergé. Nous détaillons ces distinctions dans la section Propriété ci-dessus et les formalisons au contrat.",
  },
];

// S12 — Contact
export const crmContact = {
  eyebrow: 'Prendre contact',
  title: 'Parlons de votre organisation',
  lead:
    "Des données dispersées, un CRM à mettre en place, un ERP mal exploité, des outils à connecter, ou un doute sur la bonne direction : la première conversation est gratuite, sans engagement, et nous répondons sous 24 heures.",
};
