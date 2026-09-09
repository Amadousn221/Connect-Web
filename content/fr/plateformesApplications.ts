// ── Page « Plateformes & applications web » (/services/plateformes-applications)
//
// Source : maquette connect-web-apps-v1.html, bloc `page-design-data`
//   (état FINAL — builder unifié kind='apps', 13 sections `next-s{n}`).
// 13 sections. Hero : chapô court (`cfg.lead`) + trust line spécifique. S4 et
//   S10 = sélecteurs interactifs. Aucun gain horaire chiffré, aucun projet
//   client nommé (aucune preuve fournie pour cette page). Q1 : « pas de
//   "à partir de" réaliste » — assumé tel quel.

import type { SpLinkData } from '@/components/sections/service-page/parts';

export const appsMeta = {
  title: 'Plateformes & applications web sur mesure — Connect Web Dakar',
  description:
    "Conception de plateformes et applications web sur mesure à Dakar : portails clients, outils métier, espaces membres, tableaux de bord, systèmes de réservation. Cadrage sans engagement.",
};

export const appsHero = {
  eyebrow: 'Plateformes & applications web sur mesure',
  title:
    "Concevoir la plateforme ou l'application web dont votre organisation a réellement besoin.",
  intro:
    "Nous concevons les plateformes et applications web qui remplacent les outils dispersés, en partant de votre processus réel plutôt que d'un modèle générique.",
  primaryCta: { label: 'Parlons de votre projet', href: '#contact' },
  secondaryCta: { label: 'Voir notre méthode', href: '#s5' },
  reassurance: [
    'Réponse sous 24 h',
    'Cadrage sans engagement',
    'Vos accès et votre code vous appartiennent',
  ],
};

// S2 — Site vs plateforme (prose + rattache)
export const appsFrontier = {
  eyebrow: 'Situer votre projet',
  title: 'Un site présente. Une plateforme permet de faire.',
  body: [
    "Un site web répond à une intention de communication : être trouvé, être compris, être choisi. Il expose des contenus qui évoluent lentement, s'adresse à des visiteurs qui ne s'identifient généralement pas, et vise à provoquer une prise de contact ou un achat.",
    "Une plateforme ou une application web existe pour qu'un utilisateur y accomplisse une action précise et récurrente : consulter son espace, remplir un dossier, gérer un stock, suivre une inscription, échanger avec un prestataire. Elle repose sur des comptes utilisateurs, des droits différenciés, une base de données qui vit, et souvent des interactions avec d'autres outils.",
    "Cette différence de nature explique la différence de méthode et, plus honnêtement, de budget. Un site coûte le prix d'un contenant bien conçu. Une plateforme coûte le prix d'un outil qui fait travailler des personnes, souvent tous les jours.",
  ],
  rattache: {
    text: "Si vous cherchez plutôt un site vitrine, une présence institutionnelle ou une boutique :",
    link: {
      label: 'Voir Conception et développement web',
      href: '/services/conception-et-developpement-web',
    } as SpLinkData,
  },
};

// S3 — Signaux (prose)
export const appsSignals = {
  eyebrow: 'Reconnaître le besoin',
  title: "Les signaux qui indiquent qu'un développement sur mesure vaut le coup",
  body: [
    "Certains signaux reviennent presque systématiquement dans les projets qui aboutissent chez nous :",
    "- Un processus interne encore géré à la main, ou éclaté dans plusieurs tableurs, formulaires en ligne, messageries et boîtes e-mail.\n- Un besoin métier trop spécifique pour être couvert par un logiciel standard, même après paramétrage.\n- Une accumulation d'utilisateurs — clients, prestataires, membres, bénéficiaires, partenaires — qu'il devient difficile de suivre sans centralisation.\n- Un outil existant devenu limité, lent ou inadapté au nombre d'utilisateurs actuels, au point de freiner l'activité.\n- Une idée de produit numérique — plateforme de mise en relation, marketplace, service en ligne — qui doit passer de l'intuition à un prototype exploitable.\n- Un besoin de tableau de bord opérationnel, alimenté par plusieurs sources, pour décider sans attendre le rapport mensuel.",
    "À l'inverse, si un logiciel du marché couvre l'essentiel de votre besoin et vous laisse la propriété de vos données, il vaut souvent mieux commencer par lui et ajouter ce qui manque autour. Nous vous le dirons.",
  ],
};

// S4 — Types de projets (sélecteur, 7 types)
export const appsTypes = {
  eyebrow: 'Des outils pour agir',
  title: 'Nos types de projets',
  intro: [
    "Nos projets couvrent un spectre large, mais reposent tous sur les mêmes fondations techniques : comptes utilisateurs, droits différenciés, base de données qui vit, interfaces conçues pour un usage quotidien.",
  ],
  selectorLabel: 'Types de projets',
  panelEyebrow: 'Ce que nous construisons',
  operations: [
    {
      label: 'Portails clients et partenaires',
      body: [
        "Un espace en ligne qui centralise les demandes, les documents, le suivi et les échanges entre une organisation et ses interlocuteurs externes. Réduit la dépendance au téléphone et à l'e-mail pour les demandes récurrentes.",
      ],
    },
    {
      label: 'Applications métier internes',
      body: [
        "Un outil de travail développé pour votre équipe, qui remplace un empilement de tableurs, formulaires et messageries devenu ingérable au fil de la croissance.",
      ],
    },
    {
      label: 'Espaces membres et communautés',
      body: [
        "Un espace privé avec authentification, droits différenciés selon les profils, contenus réservés, gestion des adhésions, interactions entre membres.",
      ],
    },
    {
      label: 'Tableaux de bord et outils de pilotage',
      body: [
        "Une interface qui consolide des données venues de plusieurs sources — vos outils de vente, votre ERP, votre comptabilité, vos formulaires — pour rendre visible ce qui compte pour décider.",
      ],
    },
    {
      label: "Systèmes de réservation, d'inscription ou de suivi",
      body: [
        "Un parcours utilisateur qui permet de réserver un créneau, s'inscrire à un service ou un événement, suivre l'avancement, recevoir les rappels appropriés.",
      ],
    },
    {
      label: 'Marketplaces et plateformes de mise en relation',
      body: [
        "Un service en ligne qui connecte deux publics — offreurs et demandeurs, prestataires et clients, mentors et bénéficiaires — avec inscription, profils, mise en relation, messagerie et parfois transaction.",
      ],
    },
    {
      label: 'Produits numériques sur mesure',
      body: [
        "Quand une idée doit devenir un service exploitable, testable et améliorable au fil de son adoption.",
        "Ce que ces projets partagent : une utilité concrète pour ceux qui les utilisent, et une architecture qui permet d'ajouter ce qui deviendra nécessaire plus tard sans tout casser.",
      ],
    },
  ],
};

// S5 — Méthode 8 temps
export const appsMethod = {
  eyebrow: 'De l’idée à la mise en ligne',
  title: 'De la première conversation à la mise en ligne, en huit temps',
  intro: [
    "Le développement ne commence pas au premier fichier de code. Il commence quand nous avons répondu à trois questions : qu'est-ce que la plateforme doit permettre de faire, à qui, et dans quel ordre.",
  ],
  steps: [
    { title: 'Comprendre le besoin et le processus actuel', body: ["Comment cela se passe aujourd'hui, avec quels outils, à quel coût de temps, avec quels blocages. Sans cette étape, nous concevrions dans le vide."] },
    { title: 'Identifier les utilisateurs', body: ["Qui va se connecter, avec quels rôles, quels droits, quelles attentes. Un même projet peut réunir clients, administrateurs, prestataires, superviseurs — chacun avec une expérience distincte."] },
    { title: 'Cadrer les fonctionnalités prioritaires', body: ["Toutes les idées ne peuvent pas être développées d'un coup, et ne le doivent pas. Nous distinguons l'essentiel pour que la plateforme soit utile dès la mise en ligne de ce qui viendra ensuite."] },
    { title: 'Définir une première version réellement utile', body: ["Une version que vos utilisateurs peuvent réellement utiliser au quotidien, pas une maquette. C'est ce que d'autres appellent un MVP ; nous préférons « première version utile », plus fidèle à l'intention."] },
    { title: 'Concevoir les parcours et interfaces', body: ["Nous dessinons les écrans, les enchaînements et les interactions avant de coder. Vous validez à quoi ressemblera votre plateforme avant la première ligne de code."] },
    { title: 'Développer et connecter', body: ["Développement itératif, points de validation réguliers. Si votre plateforme doit dialoguer avec d'autres outils (ERP, CRM, paiement, messagerie, comptabilité), les connexions sont mises en place ici."] },
    { title: 'Tester avec les usages réels', body: ["Nous ne validons pas seulement que les boutons fonctionnent. Nous testons avec les utilisateurs prévus, sur les cas d'usage prévus, pour ajuster ce qui aurait été mal anticipé."] },
    { title: 'Mettre en ligne, documenter, améliorer', body: ["Formation minimale de vos équipes, documentation claire, plan pour les évolutions à venir. La mise en ligne n'est pas la fin du travail : c'est le début de la vie du produit."] },
  ],
};

// S6 — Première version utile (prose + note phases)
export const appsFirstVersion = {
  eyebrow: 'La première version utile',
  title: 'La première version doit être utile, pas exhaustive',
  body: [
    "C'est l'endroit où beaucoup de projets partent de travers. Une plateforme trop ambitieuse dès le départ prend six mois de plus que prévu, coûte souvent deux fois plus cher, et se révèle fréquemment décalée par rapport à l'usage réel — parce que personne n'avait encore utilisé la première version pour comprendre ce qui manquait vraiment.",
    "Notre approche consiste à identifier avec vous, en phase de cadrage, la version la plus resserrée qui reste réellement utile. Utile ne veut pas dire incomplète : les fonctionnalités livrées sont fonctionnelles, robustes et exploitables au quotidien. Les fonctionnalités reportées ne sont pas oubliées ; elles sont documentées et priorisées pour les phases suivantes.",
    "Vous investissez moins au départ, vous apprenez plus vite ce dont vos utilisateurs ont réellement besoin, et vous décidez de la suite avec des données réelles plutôt que des hypothèses. Une première version bien dimensionnée est mise en ligne en quelques mois, pas en un an.",
  ],
  phases: [
    { title: 'Première version utile', points: ['Un parcours complet', 'Des fonctionnalités exploitables', 'Des usages testés'] },
    { title: 'Évolutions suivantes', points: ['Des besoins observés', 'Des priorités documentées', 'Des décisions fondées sur les usages'] },
  ],
};

// S7 — 4 points de réassurance (pair)
export const appsReassure = {
  eyebrow: 'Des fondations durables',
  title: 'Les quatre points sur lesquels vous devrez être rassuré',
  items: [
    { title: 'Sécurité', body: ["Authentification robuste, gestion des rôles et permissions, protection des données personnelles, sauvegardes régulières, mises à jour de sécurité. Le niveau exact — chiffrement, journalisation, exigences réglementaires — se cadre au moment du projet, selon la sensibilité de vos données."] },
    { title: 'Performance', body: ["Une application doit rester fluide même quand le nombre d'utilisateurs augmente. Nous concevons des architectures qui tiennent la charge prévue et permettent d'évoluer. Sur le terrain ouest-africain : attention au poids des pages, à la qualité de réseau variable et à l'expérience mobile."] },
    { title: 'Maintenance', body: ["Une application vit : navigateurs qui évoluent, bibliothèques à mettre à jour, usages qui changent. Nous proposons un accompagnement après la livraison — mais vous n'y êtes jamais forcé. Si vous préférez reprendre la main en interne, tout est prévu pour que ce soit possible."] },
    { title: 'Évolutivité', body: ["Ajouter une fonctionnalité six mois après la mise en ligne ne doit pas obliger à tout reconstruire. Nous concevons l'architecture pour que les évolutions restent possibles sans casser l'existant."] },
  ],
};

// S8 — Propriété (dark, prose)
export const appsOwnership = {
  eyebrow: 'Votre produit vous appartient',
  title: 'À la livraison, la plateforme vous appartient',
  body: [
    "Concrètement :",
    "- **Le code** vous appartient et vous est remis à la livraison, avec une documentation permettant à un développeur tiers de le reprendre s'il le faut.\n- **Les accès administrateurs, l'hébergement et le domaine** sont enregistrés à votre nom, pas au nôtre.\n- **Les données de vos utilisateurs** sont sur une infrastructure que vous contrôlez ou que vous pouvez rapatrier.\n- **La documentation technique et fonctionnelle** est livrée avec le projet, pas conservée en interne comme une garantie de dépendance.",
    "Nous ne pouvons pas garantir la propriété d'éléments qui dépendent d'un tiers — une licence logicielle, une API externe, un service SaaS que nous intégrerions. Dans ces cas, nous vous le disons au cadrage et les modalités sont formalisées au contrat, service par service.",
  ],
};

// S9 — Une plateforme vit rarement seule (prose)
export const appsConnected = {
  eyebrow: 'Des outils connectés',
  title: 'Une plateforme vit rarement seule',
  body: [
    "Presque tous les projets que nous livrons dialoguent avec d'autres systèmes de l'organisation : ERP, CRM, moyens de paiement, messagerie, comptabilité, facturation, entrepôts de données. Nous prévoyons ces connexions dès le cadrage.",
    "Elles peuvent être bidirectionnelles, unidirectionnelles, ou déclenchées par événement — une action sur la plateforme provoque une mise à jour ailleurs.",
    "Deux prolongements naturels : notre expertise ERP, CRM et intégrations quand le projet touche la structuration de votre système d'information ; notre expertise IA et automatisation quand l'enjeu est d'automatiser des tâches récurrentes autour de la plateforme. Ces expertises restent distinctes : cette page traite de la conception du produit lui-même.",
  ],
};

// S10 — Six situations (sélecteur)
export const appsSituations = {
  eyebrow: 'Se projeter dans les usages',
  title: 'Six situations concrètes, pour vous aider à situer votre projet',
  intro: [
    "Ces exemples ne sont pas une liste de secteurs dans lesquels nous serions automatiquement experts. Ce sont des types de projets que nous rencontrons régulièrement, présentés en situation pour vous aider à repérer votre besoin.",
  ],
  selectorLabel: 'Situations concrètes',
  panelEyebrow: 'Une situation',
  operations: [
    { label: 'Portail de suivi client', body: ["Une entreprise de services souhaite offrir à ses clients un espace où consulter l'état de leurs demandes, télécharger les documents et échanger avec l'équipe — sans plus dépendre exclusivement du téléphone et de l'e-mail."] },
    { label: 'Outil interne de gestion', body: ["Une équipe utilise plusieurs tableurs partagés, quelques formulaires en ligne et un groupe WhatsApp pour piloter son activité. Le tout devient ingérable au fil de la croissance. Une application interne recentralise l'information."] },
    { label: 'Plateforme de mise en relation', body: ["Une organisation veut faire se rencontrer deux publics — mentors et porteurs de projet, prestataires et demandeurs — avec inscription, profil, recherche, messagerie et suivi."] },
    { label: 'Tableau de bord de pilotage', body: ["Un directeur reçoit ses indicateurs tous les mois en pièce jointe. Il veut voir ce qui se passe en temps réel, sur un écran, avec les indicateurs qui l'intéressent réellement."] },
    { label: 'Espace membre', body: ["Une organisation, une association ou un programme veut donner à ses membres un espace privé où accéder aux ressources, s'inscrire aux activités et interagir, avec des droits différents selon les statuts."] },
    { label: "Système de réservation ou d'inscription", body: ["Un service, un lieu ou un programme veut permettre à ses utilisateurs de réserver, s'inscrire, suivre leur participation et recevoir les rappels appropriés, sans gestion manuelle de chaque demande."] },
  ],
};

// S11 — Expertises complémentaires (extensions)
export const appsNext = {
  eyebrow: 'Expertises complémentaires',
  title: 'Votre projet peut mobiliser plusieurs de nos expertises',
  intro: [
    "Une plateforme peut être un chantier isolé, ou s'inscrire dans un ensemble plus large.",
  ],
  rows: [
    {
      title: 'ERP, CRM et intégrations',
      text: "Si votre plateforme doit s'appuyer sur un outil de gestion, ou si elle constitue un des maillons d'un système d'information plus vaste.",
      link: { label: 'Explorer ce service', href: '/services/crm-erp-integrations' },
    },
    {
      title: 'IA et automatisation',
      text: "Pour tout ce qui doit se déclencher automatiquement autour de votre plateforme : rapports générés, relances programmées, synchronisations, traitements récurrents.",
      link: { label: 'Explorer ce service', href: '/services/ia-automatisation' },
    },
    {
      title: 'Conseil et stratégie',
      text: "Si vous n'êtes pas encore certain qu'un développement sur mesure est la bonne réponse, ou si vous avez besoin d'un cadrage indépendant avant tout engagement.",
      link: { label: 'Explorer ce service', href: '/services/conseil-strategie' },
    },
  ],
};

// S12 — FAQ (7 questions)
export const appsFaqIntro = { eyebrow: 'Vos questions', title: 'Questions fréquentes' };

export const appsFaqItems = [
  {
    q: "Combien coûte un projet de plateforme ou d'application sur mesure ?",
    a: "Il n'existe pas de « à partir de » réaliste sur ce type de projet. Le coût dépend directement du périmètre : nombre de types d'utilisateurs, complexité des interactions, intégrations, exigences de sécurité et de performance. Nous vous donnons une estimation chiffrée après un premier cadrage. Ce cadrage est gratuit s'il tient dans une conversation d'une heure ; il est facturé et documenté s'il demande un atelier plus poussé — et il vous appartient ensuite, que vous continuiez avec nous ou non.",
  },
  {
    q: 'Combien de temps prend un projet ?',
    a: "Notre délai moyen pour un premier livrable est de deux semaines, mais un projet de plateforme n'est pas terminé en deux semaines. Une première version fonctionnelle et exploitable prend le plus souvent entre deux et six mois selon le périmètre. Le calendrier détaillé est posé au cadrage, avec des jalons de validation intermédiaires.",
  },
  {
    q: "Qu'est-ce qu'une « première version » exactement ?",
    a: "Une version que vos utilisateurs peuvent utiliser au quotidien, avec un périmètre resserré mais complet dans son usage. Ce n'est ni une maquette, ni un prototype à jeter : c'est un produit fonctionnel, livré en production, sur lequel vous et vos utilisateurs pouvez travailler pendant que nous préparons la suite. Le terme technique est MVP ; nous préférons « première version utile ».",
  },
  {
    q: 'Que se passe-t-il après la mise en ligne ?',
    a: "Deux options coexistent. Vous pouvez souscrire à un accompagnement de maintenance : corrections, mises à jour de sécurité, évolutions fonctionnelles, hébergement supervisé — c'est ce que la majorité de nos clients choisit, notamment pour la sécurité et la continuité. Vous pouvez aussi reprendre la main en interne : le code, la documentation et les accès vous ayant été transmis, un développeur peut prendre le relais.",
  },
  {
    q: 'Comment la sécurité de la plateforme est-elle traitée ?',
    a: "Authentification robuste, gestion des rôles et permissions, protection des données personnelles conformément aux exigences légales applicables, sauvegardes régulières, mises à jour de sécurité. Le niveau exact — chiffrement au repos, journalisation, tests d'intrusion, conformité réglementaire spécifique — est calibré au cadrage selon la sensibilité de vos données.",
  },
  {
    q: 'À qui appartiennent le code, les accès et les données ?',
    a: "À vous. Le code vous est remis à la livraison, avec sa documentation. Les accès administrateurs, l'hébergement et le domaine sont enregistrés à votre nom. Les données de vos utilisateurs sont sur une infrastructure que vous contrôlez ou que vous pouvez rapatrier. Les modalités précises sont formalisées au contrat, service par service — nous ne promettons pas ce qui dépend d'un tiers (licence logicielle, API externe, SaaS intégré).",
  },
  {
    q: 'Pouvez-vous reprendre ou améliorer une plateforme existante ?',
    a: "Oui, quand le code existant est dans un état permettant une reprise. Nous commençons par un audit technique et fonctionnel : ce qui fonctionne, ce qui est fragile, ce qui peut être conservé, ce qui doit être réécrit. Selon les cas, l'intervention va d'ajouts ciblés à une refonte complète en maintenant la continuité de service. Si le code existant est trop dégradé pour être repris raisonnablement, nous vous le dirons.",
  },
];

// S13 — Contact
export const appsContact = {
  eyebrow: 'Prendre contact',
  title: 'Parlons de votre projet',
  lead:
    "Un projet en tête, une idée à valider, une plateforme existante à améliorer, ou seulement un doute sur la bonne direction : la première conversation est gratuite, sans engagement, et nous répondons sous 24 heures.",
};
