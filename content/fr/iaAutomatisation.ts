// ── Page « IA et automatisation » (/services/ia-automatisation)
//
// Source éditoriale : CONNECT-WEB-IA-AUTOMATISATION-ARCHITECTURE-COPY-V1.md
//   (Opus, dossier EN-ATTENTE-UX). 12 sections. Hero partagé.
// Aucune maquette validée : composition via le kit partagé `service-page`.
// Distinction structurelle PROUVÉ (automatisations ATTA en production) vs
//   EXPLORÉ (IA appliquée, pas de cas client public) — doc §2.2, §4. Ne jamais
//   présenter un prototype IA comme une réalisation livrée. `noindex`.

import type { SpLinkData } from '@/components/sections/service-page/parts';

export const iaMeta = {
  title: 'IA et automatisation à Dakar — Connect Web Sénégal',
  description:
    "Automatisation de processus et IA appliquée à Dakar : reporting, workflows, relances, intégrations. Preuve en production : ATTA Africa. Devis gratuit.",
};

export const iaHero = {
  eyebrow: 'IA & automatisation',
  title:
    "Automatiser ce qui doit l'être. Intégrer l'IA là où elle apporte une vraie valeur.",
  intro:
    "Votre équipe passe des heures à produire le même rapport, à relancer les mêmes prospects, à ressaisir les mêmes données. Ces tâches peuvent être automatisées. Quand l'automatisation classique ne suffit pas, l'IA peut prendre le relais. Nous savons faire les deux — et distinguer quand chacun est la bonne réponse.",
  primaryCta: { label: 'Parlons de vos processus', href: '#contact' },
  secondaryCta: { label: 'Voir nos réalisations', href: '/realisations' },
  reassurance: ['Réponse sous 24 h', 'Devis gratuit', 'Vos accès vous appartiennent'],
};

// S2 — Ce que l'automatisation change (sequence numérotée, sans icône — doc §7.3)
export const iaChange = {
  eyebrow: 'Ce que ça change concrètement',
  title: 'Ce qui se passe quand les bonnes tâches sont automatisées',
  intro: [
    "L'automatisation ne consiste pas à remplacer des personnes. Elle consiste à retirer des mains de votre équipe les tâches qui ne nécessitent ni jugement, ni créativité, ni relation humaine — pour que ces personnes passent leur temps sur ce qui en a besoin.",
  ],
  items: [
    {
      title: 'Les rapports se produisent tout seuls',
      body: [
        "Le rapport des ventes de la semaine, les indicateurs mensuels, le suivi par produit ou par zone : au lieu d'être reconstitués à la main à partir de trois fichiers, ils sont générés automatiquement et envoyés aux bonnes personnes.",
      ],
    },
    {
      title: 'Les relances ne tombent pas entre les mailles',
      body: [
        "Un panier abandonné, un devis sans réponse, un rendez-vous à confirmer : les relances sont envoyées au bon moment, selon les règles que vous définissez, sans que personne ait à y penser chaque jour.",
      ],
    },
    {
      title: 'Les données circulent sans ressaisie',
      body: [
        "Une commande passée sur votre boutique met à jour le stock, déclenche la préparation de livraison et alimente la facturation — sans copier-coller, sans fichier intermédiaire, sans erreur de transcription.",
      ],
    },
    {
      title: 'Les exceptions sont signalées, pas ignorées',
      body: [
        "Un paiement échoué, un stock critique, une anomalie dans une commande : au lieu de passer inaperçus, ces événements déclenchent une alerte envoyée à la bonne personne.",
        "Ce ne sont pas des promesses abstraites — ce sont les types d'automatisations que nous avons livrées et qui fonctionnent en production chez nos clients.",
      ],
    },
  ],
};

// S3 — Automatisation classique vs IA (config cards, 3)
export const iaApproaches = {
  eyebrow: 'La différence qui compte',
  title: 'Deux approches, deux logiques — et savoir quand utiliser laquelle',
  intro: [
    "Essentiel pour la crédibilité : ne pas mettre « IA » partout quand une règle suffit.",
  ],
  cards: [
    {
      icon: 'route',
      title: "L'automatisation classique suit des règles",
      body: [
        "Si tel événement se produit, alors telle action s'exécute. Si une commande est confirmée, envoyer un e-mail. Si un panier est abandonné depuis 24 heures, envoyer une relance. Si le stock passe sous un seuil, alerter le responsable.",
        "Ces automatisations sont prévisibles, fiables et reproductibles. Elles conviennent à toutes les tâches où les règles sont connues, les données structurées et les décisions prévisibles. C'est cette approche que nous avons livrée chez ATTA Africa.",
      ],
    },
    {
      icon: 'search',
      title: "L'IA traite ce que les règles ne peuvent pas",
      body: [
        "Résumer un document, classifier une demande client, extraire des informations d'un texte libre, proposer une réponse adaptée : ces tâches nécessitent un traitement que des règles fixes ne couvrent pas, parce que l'entrée varie à chaque fois.",
        "L'IA est plus flexible, mais moins prévisible. Elle peut produire des résultats incorrects ou des interprétations approximatives. Elle doit être intégrée avec un cadrage précis, des limites définies et, pour les actions sensibles, une validation humaine.",
      ],
    },
    {
      icon: 'workflow',
      title: 'Les deux se combinent souvent',
      body: [
        "Un workflow d'automatisation classique peut intégrer une étape IA à un moment précis : un formulaire est reçu (événement), l'IA qualifie la demande (classification), puis une règle classique la route vers la bonne personne (action). L'IA n'est pas la totalité du workflow — c'est un composant inséré là où il est utile.",
      ],
    },
  ],
};

// S4 — Prouvé vs exploré (config cards, 2, 1er accent)
export const iaProof = {
  eyebrow: 'Honnêteté structurelle',
  title: 'Ce qui tourne en production — et ce que nous construisons',
  intro: [
    "Le lecteur juge la compétence à la clarté des explications, pas au nombre de logos. Nous distinguons explicitement ce qui est en production chez un client de ce qui est en exploration.",
  ],
  cards: [
    {
      accent: true,
      icon: 'badge-check',
      title: 'Ce qui est prouvé : les automatisations classiques',
      body: [
        "Chez ATTA Africa, nous avons livré et nous exploitons une suite d'automatisations opérationnelles :\n- Reporting mensuel des ventes par produit, taille et zone — généré et envoyé automatiquement.\n- Traitement de commandes avec mise à jour des données.\n- Relances de paniers abandonnés.\n- Flows d'emailing via Klaviyo.",
        "Ces automatisations fonctionnent en production, traitent des données réelles et tournent chaque jour. Ce ne sont pas des prototypes — ce sont des systèmes opérationnels.",
      ],
    },
    {
      icon: 'compass',
      title: "Ce que nous explorons : l'IA appliquée",
      body: [
        "Nous testons et développons des cas d'usage IA sur nos propres opérations et sur des projets pilotes :\n- Qualification automatique de demandes à partir de formulaires ou d'e-mails.\n- Extraction d'informations depuis des documents non structurés.\n- Assistance à la production de contenus (résumés, reformulations, propositions).\n- Agents capables de consulter des données et de proposer des actions dans un périmètre défini.",
        "Nous préférons dire « nous n'avons pas encore de cas client public sur l'IA » plutôt que de présenter un prototype comme un produit livré. Quand nos explorations auront produit des résultats documentés chez un client, nous les publierons ici.",
      ],
    },
  ],
};

// S5 — Familles de tâches (reading, 6 items)
export const iaFamilies = {
  eyebrow: 'Des exemples concrets',
  title: 'Les types de tâches que nous automatisons le plus souvent',
  intro: [
    "Chaque entreprise a ses propres processus. Voici les familles de tâches que nous rencontrons le plus fréquemment, pour vous aider à repérer vos propres candidats à l'automatisation.",
  ],
  items: [
    {
      icon: 'bar-chart',
      title: 'Reporting et consolidation de données',
      body: [
        "Rapports de ventes, tableaux de bord, indicateurs de suivi, exports récurrents. Au lieu de passer une demi-journée à les reconstituer, ils sont produits et envoyés automatiquement selon la fréquence définie.",
        "Chez ATTA Africa : reporting mensuel par produit, taille et zone, avec chiffre d'affaires, unités et best-sellers.",
      ],
    },
    {
      icon: 'package',
      title: 'Traitement et transmission de commandes',
      body: [
        "Quand une commande est passée, les informations nécessaires sont transmises aux bonnes personnes ou aux bons outils — préparation, logistique, facturation — sans copier-coller ni e-mail intermédiaire.",
        "Chez ATTA Africa : traitement automatisé des commandes Shopify.",
      ],
    },
    {
      icon: 'megaphone',
      title: 'Relances et notifications',
      body: [
        "Paniers abandonnés, devis sans réponse, rendez-vous à confirmer, paiements en attente, alertes de stock : les relances sont envoyées au bon moment selon des règles définies.",
        "Chez ATTA Africa : relances de paniers abandonnés et flows Klaviyo.",
      ],
    },
    {
      icon: 'refresh',
      title: 'Synchronisation entre outils',
      body: [
        "Faire circuler les données entre votre boutique, votre CRM, votre outil de facturation, votre comptabilité ou votre messagerie, sans intervention manuelle.",
      ],
    },
    {
      icon: 'route',
      title: 'Qualification et routage de demandes',
      body: [
        "Un formulaire est rempli — la demande est classifiée (prospect, support, candidature, partenariat) et envoyée à la bonne personne. C'est un cas où l'IA peut intervenir si les demandes sont complexes ou variées.",
      ],
    },
    {
      icon: 'file-text',
      title: "Traitement de documents et extraction d'informations",
      body: [
        "Extraire des données depuis des factures, des bons de commande, des rapports ou des formulaires PDF pour les injecter dans un outil de gestion. Ce cas relève souvent de l'IA.",
        "Cette liste n'est pas exhaustive, et tous ces cas ne sont pas automatiquement inclus dans chaque projet. Le cadrage détermine ce qui est pertinent pour votre activité.",
      ],
    },
  ],
};

// S6 — Méthode (timeline, 5 temps)
export const iaMethod = {
  eyebrow: 'Comment ça se passe',
  title: "Le déroulement d'un projet, en cinq temps",
  intro: [
    "Un projet d'automatisation est souvent plus rapide qu'un projet de site ou de système de gestion. Mais il suit la même rigueur de cadrage.",
  ],
  steps: [
    {
      icon: 'search',
      title: 'Identifier les candidats',
      body: [
        "Quelles tâches prennent du temps, se répètent, génèrent des erreurs ou bloquent d'autres processus ? Quels outils, quels accès, quelle fréquence, quel volume ? Nous identifions ensemble les tâches qui méritent d'être automatisées — et celles qui ne le méritent pas.",
      ],
    },
    {
      icon: 'clipboard',
      title: 'Choisir le premier cas',
      body: [
        "Un premier projet limité, à forte valeur et faible risque, qui permet de valider l'approche avant d'étendre. Le périmètre, les règles, les outils connectés, les exceptions et le niveau de supervision sont définis à ce stade.",
      ],
    },
    {
      icon: 'code',
      title: 'Construire et tester',
      body: [
        "Développement du workflow, connexion des outils, configuration des déclencheurs, des conditions et des actions. Tests avec des données réelles, vérification des cas d'erreur et des exceptions.",
      ],
    },
    {
      icon: 'gauge',
      title: 'Mettre en production et superviser',
      body: [
        "Le workflow passe en production. Nous surveillons son fonctionnement pendant les premières semaines pour corriger les anomalies qui n'apparaissent qu'en conditions réelles.",
      ],
    },
    {
      icon: 'book',
      title: 'Documenter et transmettre',
      body: [
        "Documentation du fonctionnement, des règles, des accès et des procédures de maintenance. Si vous souhaitez superviser ou faire évoluer le workflow vous-même, nous vous en donnons les moyens.",
      ],
    },
  ],
};

// S7 — Fiabilité, contrôle et sécurité (reading split, 3)
export const iaTrust = {
  eyebrow: 'Rassurer avec lucidité',
  title: "Ce qu'il faut savoir avant d'automatiser — erreurs, contrôle et données",
  intro: [
    "Des inquiétudes légitimes sur les erreurs, la perte de contrôle et la sécurité des données. Voici comment nous les traitons.",
  ],
  items: [
    {
      icon: 'shield-check',
      title: 'Toute automatisation peut échouer',
      body: [
        "Une API change, un service est indisponible, un format de données évolue, un cas imprévu se présente. Un workflow bien construit prévoit ces situations : journaux d'exécution, alertes en cas d'erreur, reprises automatiques quand c'est possible, procédures de secours quand ça ne l'est pas.",
        "Nous ne promettons pas qu'un workflow ne tombera jamais en panne. Nous promettons qu'il est construit pour que vous le sachiez quand ça arrive et que les conséquences soient maîtrisées.",
      ],
    },
    {
      icon: 'badge-check',
      title: "L'IA nécessite un cadrage sur la fiabilité",
      body: [
        "Un modèle IA peut produire une réponse incorrecte, inventer une information ou interpréter un texte de manière inattendue. Pour les tâches à faible risque (classification d'un e-mail, suggestion de résumé), c'est acceptable avec une relecture. Pour les tâches sensibles (paiement, engagement contractuel, suppression de données, message au nom de l'entreprise), une validation humaine est indispensable.",
        "Nous définissons le niveau de contrôle humain au cadrage, en fonction du risque de chaque action automatisée.",
      ],
    },
    {
      icon: 'key',
      title: 'Vos données sont traitées selon le cadrage du projet',
      body: [
        "Les données qui transitent dans un workflow — contacts, commandes, montants, documents — passent par les outils et services configurés. Nous définissons avec vous quels outils sont utilisés, quelles données y circulent, sous quelles conditions. Si un modèle IA externe est impliqué, ses conditions de traitement (conservation, utilisation, localisation) sont identifiées au cadrage.",
        "Nous ne promettons pas que toutes les données restent sur un serveur au Sénégal ou dans l'UE — cela dépend des outils et de la configuration choisie. Nous vous le disons clairement.",
      ],
    },
  ],
};

// S8 — Propriété (config cards, deep, 2 + outro)
export const iaOwnership = {
  eyebrow: 'Ce qui vous appartient',
  title: 'Vos workflows, vos données, vos accès',
  intro: ["La propriété dans le contexte des automatisations et de l'IA."],
  cards: [
    {
      icon: 'key',
      title: 'Ce qui vous appartient',
      body: [
        "- Vos données — les informations traitées par les workflows restent vos données.\n- Les workflows et leur documentation — flux, règles, configurations et paramètres que nous construisons vous sont documentés et remis.\n- Les accès aux outils — comptes d'automatisation, clés API et configurations enregistrés à votre nom.",
      ],
    },
    {
      icon: 'server',
      title: 'Ce qui dépend des services utilisés',
      body: [
        "- Les outils d'automatisation (n8n, Zapier, Make ou autre) ont leurs propres conditions de licence et d'hébergement.\n- Les services IA (OpenAI, Anthropic ou autre) facturent à l'usage et ont leurs propres politiques de traitement des données.\n- Les connecteurs et API tiers sont soumis aux conditions de chaque fournisseur.",
      ],
    },
  ],
  outro:
    "Nous vous expliquons ces dépendances au cadrage. Les modalités de propriété, de transfert et de continuité sont formalisées au contrat.",
};

// S9 — Preuve ATTA (reading non split, 4 items + note + cta)
export const iaAtta = {
  eyebrow: 'Notre preuve',
  title: 'ATTA Africa — nos automatisations en production',
  intro: [
    "ATTA Africa est une marque DTC premium de mode ouest-africaine utilisant Shopify. Nous sommes responsables de la boutique depuis sa création, et nous avons conçu et déployé une suite d'automatisations opérationnelles qui tournent en production.",
  ],
  items: [
    {
      icon: 'bar-chart',
      title: 'Reporting automatisé',
      body: [
        "Chaque mois, un rapport des ventes est généré automatiquement : chiffre d'affaires, unités vendues, best-sellers, analyse par produit, par taille et par zone géographique. Le rapport est produit, mis en forme et envoyé aux personnes concernées sans intervention manuelle.",
      ],
    },
    {
      icon: 'package',
      title: 'Traitement des commandes',
      body: [
        "Les commandes Shopify sont traitées automatiquement : transmission des informations nécessaires, mise à jour des données, déclenchement des étapes suivantes.",
      ],
    },
    {
      icon: 'megaphone',
      title: 'Relances de paniers abandonnés',
      body: [
        "Les clients qui n'ont pas finalisé leur commande reçoivent une relance automatique selon un calendrier défini, via les flows Klaviyo configurés pour ATTA.",
      ],
    },
    {
      icon: 'workflow',
      title: 'Emailing et séquences',
      body: [
        "Flows d'emailing via Klaviyo : bienvenue, suivi de commande, relances et communications adaptées au parcours client.",
        "Ce que nous ne pouvons pas encore publier : les résultats quantifiés — volume de commandes traitées, taux de récupération des paniers, heures économisées — restent à collecter en entretien avec le client. Nous ne les inventons pas.",
      ],
    },
  ],
  cta: { label: "Voir l'ensemble de nos réalisations", href: '/realisations' } as SpLinkData,
};

// S10 — Quand le besoin va plus loin (extensions, 4)
export const iaNext = {
  eyebrow: "Quand le besoin va plus loin",
  title: "Quand votre projet dépasse l'automatisation d'une tâche",
  intro: [
    "Une automatisation s'inscrit souvent dans un ensemble plus large. Voici les prolongements les plus fréquents.",
  ],
  rows: [
    {
      icon: 'database',
      title: "Vous avez besoin d'organiser vos données et vos processus avant d'automatiser",
      text: "Un ERP ou un CRM peut être le préalable nécessaire — sans données structurées, il n'y a rien à automatiser proprement.",
      link: { label: 'Explorer ce service', href: '/services/crm-erp-integrations' },
    },
    {
      icon: 'app-window',
      title: "Vous avez besoin d'un outil métier complet, pas d'un workflow",
      text: "Si votre besoin est un portail, une application, un tableau de bord ou un système complet, c'est le terrain de notre expertise Plateformes et applications web.",
      link: { label: 'Explorer ce service', href: '/services/plateformes-applications' },
    },
    {
      icon: 'megaphone',
      title: 'Vous voulez automatiser votre acquisition, pas vos opérations',
      text: "Séquences d'e-mailing, nurturing, campagnes ciblées, scoring de leads : c'est un sujet d'acquisition, pas d'automatisation opérationnelle.",
      link: { label: 'Explorer ce service', href: '/services/marketing-acquisition' },
    },
    {
      icon: 'compass',
      title: 'Vous voulez cadrer avant de vous engager',
      text: "Notre offre Conseil et stratégie aide à identifier les bons candidats à l'automatisation et à prioriser les investissements.",
      link: { label: 'Explorer ce service', href: '/services/conseil-strategie' },
    },
  ],
};

// S11 — FAQ (8 questions)
export const iaFaqIntro = { eyebrow: 'Vos questions', title: 'Questions fréquentes' };

export const iaFaqItems = [
  {
    q: "Combien coûte un projet d'automatisation ?",
    a: "Le budget dépend du nombre de tâches à automatiser, des outils impliqués, de la complexité des règles, des intégrations et du niveau de supervision souhaité. Un premier workflow simple (reporting automatisé, relance de paniers) peut être déployé pour un budget modéré. Les projets plus complexes (workflows interconnectés, intégration IA, données sensibles) demandent un investissement proportionnel. Le devis est gratuit, établi après un premier échange.",
  },
  {
    q: 'Combien de temps prend la mise en place ?',
    a: "Un workflow simple peut être opérationnel en une à deux semaines. Un ensemble de workflows avec intégrations multiples et tests complets prend plutôt un à deux mois. La durée dépend aussi de la disponibilité des accès aux outils et de la qualité des données existantes.",
  },
  {
    q: "Quelle est la différence entre ce que vous appelez « automatisation » et « IA » ?",
    a: "L'automatisation classique suit des règles définies — si tel événement, alors telle action. C'est prévisible et fiable. L'IA traite ce que les règles ne peuvent pas couvrir — textes libres, classification, extraction, réponses adaptatives. Les deux se combinent souvent dans un même workflow. Nous l'expliquons dans la section dédiée ci-dessus.",
  },
  {
    q: "Est-ce que l'automatisation va remplacer des postes dans mon équipe ?",
    a: "L'automatisation remplace des tâches, pas des personnes. Les tâches retirées sont celles qui ne nécessitent ni jugement, ni créativité, ni relation humaine. Les personnes concernées récupèrent du temps pour des activités à plus forte valeur. C'est l'objectif — le résultat dépend de la manière dont votre organisation utilise le temps libéré.",
  },
  {
    q: "Comment savez-vous que l'automatisation fonctionne correctement ?",
    a: "Chaque workflow est construit avec des journaux d'exécution, des alertes en cas d'erreur et des mécanismes de reprise. Nous le surveillons pendant les premières semaines de production. Après la stabilisation, vous ou notre équipe assurez la supervision selon les termes du contrat.",
  },
  {
    q: 'Mes données sont-elles en sécurité ?',
    a: "Les données transitent par les outils et services configurés dans votre workflow. Nous identifions au cadrage quelles données circulent, par quels outils, sous quelles conditions. Si un service IA externe est impliqué, nous vérifions ses conditions de traitement des données. Nous ne promettons pas une localisation géographique spécifique des données sans configuration correspondante.",
  },
  {
    q: 'Faut-il déjà avoir un ERP ou un CRM pour automatiser ?',
    a: "Non. Certains workflows ne nécessitent qu'une boutique en ligne, un formulaire ou un tableur comme point de départ. Cependant, si vos données sont très dispersées ou non structurées, un travail d'organisation (parfois avec un ERP ou un CRM) peut être un préalable utile.",
  },
  {
    q: 'Par où commencer ?',
    a: "Par un premier cas d'usage à forte valeur et faible risque. Un rapport qui prend quatre heures à produire chaque mois, une relance qui n'est jamais faite, une ressaisie qui génère des erreurs. Nous identifions ce cas avec vous lors du premier échange.",
  },
];

// S12 — Contact
export const iaContact = {
  eyebrow: 'Prendre contact',
  title: 'Parlons de vos processus',
  lead:
    "Des tâches répétitives à automatiser, un workflow à construire, une question sur l'IA, ou un doute sur la bonne approche : la première conversation est gratuite, sans engagement, et nous répondons sous 24 heures.",
};
