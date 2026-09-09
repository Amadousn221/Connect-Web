// ── Page « Sites institutionnels & ONG » (/services/sites-institutionnels-ong)
//
// Source éditoriale : CONNECT-WEB-SITES-INSTITUTIONNELS-ONG-ARCHITECTURE-COPY-V1.md
//   (Opus). Composition : maquette connect-web-sites-institutionnels-ong-v1.html,
//   état FINAL (3ᵉ <script> → 12 sections `ong-s{n}` ; scripts 0-1 + JSON initial
//   = leurre hub V2).
// 12 sections. Hero : chapô court (maquette). S3 = sélecteur de publics interactif.
// Preuves S9 : WAS Africa + Fahamu Africa (liens publics), périmètre à confirmer
//   (Opus §6.4) — Cosaan International Academy OMIS ici (autorisation PO à obtenir).
// Aucune conformité WCAG certifiée, aucun tarif « ONG » forfaitaire (Opus §6.5).

import type { SpLinkData } from '@/components/sections/service-page/parts';

export const ongMeta = {
  title: 'Sites web pour ONG et institutions — Connect Web Dakar',
  description:
    'Conception de sites pour ONG, associations et institutions à Dakar : mission, programmes, publications, publics multiples. WordPress, bilingue. Devis gratuit.',
};

export const ongHero = {
  eyebrow: 'Sites institutionnels & ONG',
  title:
    'Un site qui rend votre mission compréhensible — et vos informations accessibles à ceux qui en ont besoin.',
  intro:
    "Nous concevons des sites pour les ONG, associations, fondations, institutions et structures éducatives, en partant de ce que chaque organisation doit rendre visible et accessible.",
  primaryCta: { label: 'Parlons de votre projet', href: '#contact' },
  secondaryCta: { label: 'Voir nos réalisations', href: '/realisations' },
  reassurance: ['Réponse sous 24 h', 'Devis gratuit', 'Vos accès vous appartiennent'],
};

// S2 — Ce qu'un site doit accomplir (5 fonctions, numérotées)
export const ongRole = {
  eyebrow: 'Un site utile à votre mission',
  title: 'Ce que votre site doit accomplir — avant de parler de mise en page',
  intro: [
    "Beaucoup de sites d'organisations restent figés dans leur version de lancement : les programmes ont évolué, l'équipe a changé, les rapports n'ont pas été mis en ligne depuis deux ans. Le site existe, mais il ne travaille plus.",
    'Un site institutionnel utile remplit cinq fonctions concrètes.',
  ],
  items: [
    {
      title: "Expliquer ce que l'organisation fait réellement",
      body: [
        "Pas un énoncé de mission abstrait, mais une explication claire de vos domaines d'intervention, de vos programmes, de vos zones d'action et de vos résultats. Un bailleur, un partenaire ou un bénéficiaire doit comprendre votre travail en une minute de lecture.",
      ],
    },
    {
      title: 'Rendre les informations trouvables',
      body: [
        "Rapports, actualités, documents, contacts, appels à candidatures, communiqués : organisés pour être trouvés, pas empilés dans une page « Ressources » que personne ne parcourt.",
      ],
    },
    {
      title: 'Servir plusieurs publics sans se disperser',
      body: [
        "Bénéficiaires, partenaires, bailleurs, médias, candidats, grand public : chacun cherche quelque chose de différent. Le site doit permettre à chacun de trouver son entrée sans que les parcours se gênent.",
      ],
    },
    {
      title: 'Pouvoir être mis à jour par votre équipe',
      body: [
        "Si le site ne peut pas être alimenté sans rappeler un prestataire, il sera figé dans les six mois. L'autonomie de publication n'est pas un confort — c'est une condition de survie du site.",
      ],
    },
    {
      title: 'Refléter le sérieux de votre organisation',
      body: [
        "Un partenaire, un bailleur ou un recruteur forme une impression en quelques secondes. Un site à jour, clair, professionnel et accessible envoie un signal de fiabilité ; un site figé, cassé ou daté envoie le signal inverse.",
      ],
    },
  ],
};

// S3 — Publics multiples (sélecteur interactif + prose)
export const ongAudiences = {
  eyebrow: 'Des parcours pour chaque public',
  title: 'Plusieurs publics, un seul site — comment les servir sans les perdre',
  intro: [
    "C'est l'un des problèmes les plus fréquents des projets institutionnels. L'organisation s'adresse à des publics qui ne cherchent ni les mêmes informations, ni dans le même ordre, ni avec les mêmes attentes.",
  ],
  selectorLabel: 'Choisir un public',
  panelEyebrow: 'Ce que ce public vient chercher',
  publics: [
    { label: 'Bailleurs', seeks: ["Rapports d'activité", 'Gouvernance', 'Résultats et redevabilité'] },
    { label: 'Bénéficiaires', seeks: ['Programmes', 'Inscriptions', 'Contacts locaux'] },
    { label: 'Médias', seeks: ['Communiqués', 'Chiffres clés', 'Interlocuteurs'] },
    { label: 'Candidats', seeks: ['Offres', 'Mission', "Conditions d'engagement"] },
    { label: 'Grand public', seeks: ['Comprendre votre action en quelques minutes'] },
  ],
  outro: [
    "Si votre site n'est structuré que pour un seul de ces publics, les autres se perdent. Si vous essayez de tout montrer à tout le monde sur la même page d'accueil, personne ne s'y retrouve.",
    "La solution n'est pas technologique — c'est une question de structure d'information. Nous définissons avec vous les deux ou trois publics prioritaires, les parcours que chacun doit suivre, et les contenus communs ou distincts. Le résultat : un site qui paraît simple à chaque visiteur, même si l'organisation derrière est complexe.",
    "Ce travail se fait au cadrage, avant les maquettes — et c'est souvent ce qui fait la plus grande différence entre un site institutionnel qui fonctionne et un site où « tout est là mais personne ne trouve rien ».",
  ],
};

// S4 — Autonomie de publication (trio)
export const ongAutonomie = {
  eyebrow: 'Une équipe autonome',
  title: 'Publier, mettre à jour, transmettre — sans dépendre de nous',
  intro: [
    "Nous livrons la grande majorité de nos sites institutionnels sur WordPress, avec une interface d'administration conçue pour que vos équipes publient sans compétence technique particulière.",
  ],
  items: [
    {
      title: 'Publier sans demander à personne',
      body: [
        "Ajouter une actualité de terrain, mettre en ligne un rapport annuel en PDF, publier les photos d'un événement — ces gestes doivent être aussi simples que rédiger un e-mail.",
      ],
    },
    {
      title: 'Gérer les droits selon les rôles',
      body: [
        "Chargé de communication, responsable de programme, coordinateur terrain : chacun peut avoir son propre accès, avec des permissions adaptées à son rôle. Nous configurons ces rôles à la livraison.",
      ],
    },
    {
      title: 'Transmettre quand les responsables changent',
      body: [
        "Les équipes d'organisations tournent. Nous livrons une documentation claire et une architecture lisible pour qu'un nouveau responsable prenne la main sans repartir de zéro. Sur des projets comme WAS Africa et Fahamu Africa, nous avons assuré la création et la mise à jour des contenus pendant plusieurs années.",
      ],
    },
  ],
};

// S5 — Programmes, publications, ressources (3 catégories distinctes)
export const ongEditorial = {
  eyebrow: 'Une architecture éditoriale',
  title: 'Organiser ce que votre site doit rendre accessible',
  intro: [
    "Les organisations produisent des contenus de natures très différentes : rapports, fiches de programmes, communiqués, articles de terrain, vidéos, études, appels à candidatures. Le piège est de tout empiler dans un flux chronologique unique — le blog par défaut.",
    'Nous structurons les contenus en fonction de leur usage, pas de leur date de publication.',
  ],
  items: [
    {
      title: 'Les programmes et projets',
      body: [
        "Organisés par zone, par thème ou par période selon ce qui fait sens pour votre organisation. Chaque programme peut avoir sa propre page, avec sa description, ses résultats et ses contenus associés.",
      ],
    },
    {
      title: 'Les publications et documents',
      body: [
        "Rapports, études, guides, communiqués — classés, filtrables, téléchargeables. Un bailleur qui cherche votre dernier rapport d'activité ne devrait pas parcourir trente articles de blog pour le trouver.",
      ],
    },
    {
      title: 'Les actualités et contenus de terrain',
      body: [
        "Articles, photos, vidéos — publiés régulièrement pour montrer l'activité vivante de l'organisation, avec des catégories qui permettent de filtrer par thème ou par zone.",
      ],
    },
  ],
  outro:
    "Le niveau de structuration dépend du volume de contenus et de la complexité de l'organisation. Nous calibrons au cadrage — pas de surdimensionnement, pas de sous-estimation.",
};

// S6 — Accessible, lisible, rapide (4 facteurs)
export const ongStandards = {
  eyebrow: 'Des conditions réelles de lecture',
  title: 'Un site conçu pour être lu, trouvé et utilisé — partout',
  intro: [
    "Les publics des organisations ont des profils variés, des appareils différents et des conditions de connexion inégales. Un site qui n'en tient pas compte perd une partie de ses lecteurs avant même que le contenu ne se charge.",
  ],
  items: [
    {
      title: 'Lisibilité et structure',
      body: [
        "Textes clairs, titres informatifs, hiérarchie visuelle qui guide le regard, contenu compréhensible pour quelqu'un qui ne connaît pas votre jargon interne, contrastes suffisants pour la lecture prolongée.",
      ],
    },
    {
      title: 'Mobile et performance',
      body: [
        "Plus de la moitié des visites arrivent d'un téléphone de milieu de gamme avec une connexion variable. Nous optimisons le poids des pages, la compression des images et le temps de chargement dès la conception.",
      ],
    },
    {
      title: 'Accessibilité',
      body: [
        "Structure sémantique du HTML, navigation au clavier, textes alternatifs, contrastes conformes, formulaires utilisables. Nous ne promettons pas une conformité WCAG certifiée — cela suppose un audit spécialisé — mais nous concevons avec ces critères comme objectifs.",
      ],
    },
    {
      title: 'Référencement naturel',
      body: [
        "Architecture de pages lisible pour les moteurs, balisage technique, vitesse de chargement, contenu structuré. Le SEO de base fait partie de la conception ; les stratégies de contenu avancées relèvent d'une expertise complémentaire.",
      ],
    },
  ],
};

// S7 — Propriété (contexte institutionnel)
export const ongProprio = {
  eyebrow: 'La continuité de votre organisation',
  title: 'Quand les responsables changent, le site reste le vôtre',
  intro: [
    "Dans le monde des organisations, la continuité est un enjeu permanent : équipes qui tournent, financements par cycles, responsables de communication qui changent tous les deux ou trois ans. Un site captif chez un prestataire finit presque toujours par une reconstruction à zéro. Nous concevons pour l'inverse.",
  ],
  rows: [
    { label: 'Nom de domaine', text: "Enregistré au nom de l'organisation, pas de l'agence." },
    { label: 'Hébergement', text: "À votre nom ; vous en conservez l'accès indépendamment de nous." },
    { label: "Accès d'administration", text: "Ceux de l'organisation. Après la livraison, elle décide qui accède à quoi." },
    { label: 'Code', text: "Thème et développements spécifiques remis, avec une documentation suffisante pour un autre prestataire." },
    { label: 'Contenus', text: 'Textes, images, documents, rapports exportables à tout moment.' },
  ],
  aside: {
    eyebrow: 'Limite transparente',
    title: 'Éléments qui dépendent d’un tiers',
    body: [
      "Licence de thème premium, extension propriétaire, service externe : nous le précisons au cadrage, et les modalités sont formalisées au contrat.",
    ],
  },
};

// S8 — Méthode (5 temps)
export const ongMethode = {
  eyebrow: 'Des validations à chaque étape',
  title: "Le déroulement d'un projet institutionnel, en cinq temps",
  intro: [
    "Chaque organisation est différente, mais la trame est stable. Elle s'adapte à la complexité du site, au volume de contenus et au nombre d'interlocuteurs impliqués dans la validation.",
  ],
  steps: [
    {
      title: 'Comprendre votre organisation et vos publics',
      body: [
        "Votre mission, vos programmes, vos zones, vos publics prioritaires, vos contraintes de gouvernance et de budget. C'est aussi le moment où nous posons la question des contenus disponibles, du multilingue et de la plateforme.",
      ],
    },
    {
      title: "Structurer l'information",
      body: [
        "Arborescence, parcours par type de public, hiérarchie des contenus. Nous vous soumettons la structure complète avant de dessiner quoi que ce soit — la phase la plus importante pour un site institutionnel, et celle où les ajustements coûtent le moins cher.",
      ],
    },
    {
      title: 'Concevoir et développer',
      body: [
        "Maquettes des gabarits clés, validation visuelle, développement, intégration des contenus. Si plusieurs personnes doivent valider dans votre organisation, nous planifions les cycles de retour dès le départ.",
      ],
    },
    {
      title: 'Tester et ajuster',
      body: [
        "Test sur mobile et desktop, vérification de la lisibilité, relecture des contenus, contrôle des temps de chargement — dans les conditions d'usage réelles.",
      ],
    },
    {
      title: 'Mettre en ligne, former et transmettre',
      body: [
        "Passage en production, formation de votre équipe à la publication, remise de la documentation et des accès. Le site vous appartient dès la livraison. L'accompagnement de maintenance et de publication est une option.",
      ],
    },
  ],
};

// S9 — Réalisations
export const ongProjects = {
  eyebrow: 'Réalisations',
  title: 'Des sites conçus pour des organisations',
  intro: [
    "Nous accompagnons des organisations dans la conception de leurs sites et, pour certaines, dans la gestion quotidienne de leurs contenus. Voici quelques collaborations documentées.",
  ],
  cards: [
    {
      badge: 'Site institutionnel · Contenus',
      title: 'WAS Africa — Nous Sommes La Solution',
      text: "Création du site et gestion éditoriale sur plusieurs années : publication d'articles, mise en ligne de vidéos et galeries, mises à jour régulières. Périmètre contractuel à confirmer.",
      image: { src: '/assets/real/was-africa.jpg', alt: 'Aperçu du site WAS Africa' },
      link: { label: 'Visiter le site', href: 'https://wasafrica.org' },
    },
    {
      badge: 'Site institutionnel · Contenus',
      title: 'Fahamu Africa',
      text: "Création du site institutionnel et gestion de contenus — articles, contenus multimédias et mises à jour — pendant plusieurs années. Périmètre livré à confirmer.",
      image: { src: '/assets/real/fahamu-africa.jpg', alt: 'Aperçu du site Fahamu Africa' },
      link: { label: 'Visiter le site', href: 'https://fahamu.org' },
    },
  ],
  cta: { label: "Voir l'ensemble de nos réalisations", href: '/realisations' } as SpLinkData,
};

// S10 — Du site au système
export const ongNext = {
  eyebrow: 'Du site au système',
  title: "Quand votre projet va plus loin qu'un site de communication",
  intro: [
    "Certaines organisations ont des besoins qui dépassent un site de présentation et de publication. Voici les prolongements que nous pouvons accompagner.",
  ],
  rows: [
    {
      title: 'Un espace avec comptes, inscriptions ou interactions',
      text: 'Portail partenaires, plateforme de suivi, espace de candidature, gestion de membres : le terrain de notre expertise Plateformes et applications web.',
      link: { label: 'Explorer ce service', href: '/services/plateformes-applications' },
    },
    {
      title: 'Connecter votre site à vos outils de gestion',
      text: 'Base de contacts, CRM, gestion de projets ou comptabilité : le terrain de notre expertise ERP, CRM et intégrations.',
      link: { label: 'Explorer ce service', href: '/services/crm-erp-integrations' },
    },
    {
      title: 'Un cadrage avant de vous engager',
      text: "Notre offre Conseil et stratégie aide à clarifier le besoin et à définir un périmètre réaliste avant tout choix technique.",
      link: { label: 'Explorer ce service', href: '/services/conseil-strategie' },
    },
  ],
};

// S11 — FAQ (10 questions)
export const ongFaqIntro = { eyebrow: 'Vos questions', title: 'Questions fréquentes' };

export const ongFaqItems = [
  {
    q: 'Combien coûte un site institutionnel ?',
    a: "Le budget dépend du volume de contenus, du nombre de types de pages (programmes, publications, actualités, équipe), des fonctionnalités spécifiques (multilingue, formulaires, intégrations) et du niveau d'accompagnement sur la rédaction. Nous n'appliquons pas de tarif « ONG » forfaitaire — chaque projet est cadré selon son périmètre réel. Le devis est gratuit, établi après une première conversation.",
  },
  {
    q: "Combien de temps prend la réalisation d'un site institutionnel ?",
    a: "Un site de taille modérée est livré en un à trois mois. Les projets plus structurés (organisation internationale, multilingue, volume éditorial important) prennent davantage. Le facteur le plus souvent sous-estimé est la collecte et la validation des contenus à l'intérieur de l'organisation.",
  },
  {
    q: "Que se passe-t-il si nous n'avons pas de textes prêts ?",
    a: "C'est fréquent. Trois modalités : vous fournissez des textes rédigés que nous intégrons, vous fournissez des documents existants (plaquettes, rapports, présentations) que nous reprenons et adaptons pour le web, ou nous rédigeons à partir d'entretiens avec votre équipe.",
  },
  {
    q: 'Pouvez-vous faire un site en plusieurs langues ?',
    a: "Oui. Nous concevons des sites bilingues (français-anglais le plus souvent) et pouvons gérer des structures multilingues. Le multilingue se décide à l'architecture, pas après la livraison. Le surcoût dépend du volume de contenus à traduire et de la stratégie de maintenance multilingue.",
  },
  {
    q: 'Est-ce que notre équipe pourra publier elle-même ?',
    a: "Oui. Nous livrons sur WordPress avec une interface de publication conçue pour des non-techniciens. Publier un article, ajouter un rapport en PDF, mettre à jour une page de programme : accessible sans nous. Formation à la livraison, documentation remise.",
  },
  {
    q: 'Que se passe-t-il si le responsable du site change ?',
    a: "C'est prévu dès la conception. La documentation est pensée pour être transmise, l'architecture est lisible par un nouveau responsable, et les accès sont au nom de l'organisation. Un accompagnement de transition peut être proposé si nécessaire.",
  },
  {
    q: 'Est-ce que le site est accessible aux personnes en situation de handicap ?',
    a: "Nous appliquons les bonnes pratiques de conception accessible dans tous nos projets : structure sémantique, navigation clavier, contrastes, textes alternatifs, formulaires utilisables. Nous ne certifions pas une conformité WCAG — cela nécessite un audit spécialisé — mais nous concevons avec ces critères comme objectifs. Si votre organisation a une obligation formelle, nous en discutons au cadrage.",
  },
  {
    q: 'Pouvez-vous intégrer un système de don en ligne ?',
    a: "C'est techniquement faisable, mais cela nécessite un cadrage spécifique : choix du prestataire de paiement, sécurité des transactions, gestion des reçus, conformité fiscale. Nous ne l'incluons pas par défaut et nous ne l'improvisons pas. Si c'est un besoin prioritaire, nous en discutons dès le début du projet.",
  },
  {
    q: 'Notre site existe déjà mais il est abandonné. Que proposez-vous ?',
    a: "Nous commençons par un diagnostic : état du code, qualité des contenus, référencement acquis, pertinence de la plateforme actuelle. Selon les cas, nous améliorons l'existant ou nous reconstruisons proprement avec un plan de migration. Le détail vit sur notre page Refonte de site internet.",
  },
  {
    q: 'À qui appartiennent le site, le code et les accès ?',
    a: "À votre organisation. Le domaine, l'hébergement, les accès d'administration, le code du thème et des développements sont remis à la livraison. Les contenus sont exportables. Les limites concernent uniquement les éléments tiers (licence premium, extension propriétaire, service SaaS intégré) — précisés au cadrage et formalisés au contrat.",
  },
];

// S12 — Contact
export const ongContact = {
  eyebrow: 'Prendre contact',
  title: 'Parlons de votre projet',
  lead:
    "Un site à créer, un site existant à reprendre, une publication régulière à organiser ou un besoin à clarifier : la première conversation est gratuite, sans engagement, et nous répondons sous 24 heures.",
};
