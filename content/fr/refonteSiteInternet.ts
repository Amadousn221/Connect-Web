// ── Page « Refonte de site internet » (/services/refonte-site-internet)
//
// Source éditoriale : CONNECT-WEB-REFONTE-SITE-INTERNET-ARCHITECTURE-COPY-V1.md
//   (Opus, dossier EN-ATTENTE-UX). 11 sections. Hero partagé.
// Page transversale : part de l'EXISTANT, pas d'une page blanche. Page parente
//   /services/conception-et-developpement-web (breadcrumb). Aucune maquette
//   validée : composition via le kit partagé `service-page`. `noindex`.
// Preuve principale : migration ATTA Africa WordPress → Shopify. Aucune
//   comparaison avant/après inventée, aucune garantie SEO 100 % (doc §6.6).

import type { SpLinkData } from '@/components/sections/service-page/parts';

export const refonteMeta = {
  title: 'Refonte de site internet — Connect Web Dakar',
  description:
    "Refonte de site internet à Dakar : diagnostic, conservation des acquis, migration, redirections SEO, reconstruction. Devis gratuit, méthode documentée.",
};

export const refonteHero = {
  eyebrow: 'Refonte de site internet',
  title: 'Votre site existe déjà. Le refondre sans perdre ce qui fonctionne.',
  intro:
    "Un site qui ne sert plus son rôle — trop lent, mal structuré, impossible à mettre à jour, décalé par rapport à ce que votre organisation est devenue — n'a pas besoin d'être jeté pour être remplacé. Il a besoin d'un diagnostic, puis d'une transformation calibrée : conserver ce qui fonctionne, corriger ce qui ne fonctionne plus, reconstruire ce qui doit l'être.",
  primaryCta: { label: 'Parlons de votre site', href: '#contact' },
  secondaryCta: { label: 'Voir nos réalisations', href: '/realisations' },
  reassurance: ['Réponse sous 24 h', 'Devis gratuit', 'Vos accès vous appartiennent'],
};

// S2 — Les signes (sequence numérotée, sans icône — doc §7.2)
export const refonteSignals = {
  eyebrow: 'Reconnaître la situation',
  title: "Reconnaître qu'un site a besoin de plus qu'une mise à jour",
  intro: [
    "Il n'est pas toujours facile de distinguer un site qui a besoin d'un rafraîchissement d'un site qui a besoin d'une vraie refonte. Voici les signaux qui reviennent le plus souvent chez les propriétaires de site qui nous contactent.",
  ],
  items: [
    {
      title: 'Votre offre a changé, mais votre site non',
      body: [
        "Vous avez ajouté des services, ouvert de nouveaux marchés, changé de positionnement ou restructuré votre organisation — et le site présente encore la version d'il y a trois ans. La cohérence entre ce que vous faites et ce que votre site raconte s'est rompue.",
      ],
    },
    {
      title: 'Votre équipe a renoncé à mettre le site à jour',
      body: [
        "Modifier un texte prend une heure. Ajouter une photo nécessite un appel au prestataire. Publier une actualité suppose de naviguer dans une interface que personne ne comprend plus. Le site s'est figé parce que l'administration est devenue un obstacle.",
      ],
    },
    {
      title: "Le site n'est plus trouvé ou ne convainc plus",
      body: [
        "Le trafic a baissé, les demandes de contact se sont taries, les visiteurs rebondissent vite. Le problème peut venir de la structure, des contenus, de la vitesse, de l'expérience mobile, ou de tout cela à la fois.",
      ],
    },
    {
      title: 'Le code ou la plateforme est devenu un risque',
      body: [
        "Extensions périmées, thème plus maintenu, version de CMS dépassée, hébergement inadapté, failles de sécurité non corrigées. Le site fonctionne encore, mais il tient sur une fondation fragile.",
      ],
    },
    {
      title: "L'ancien prestataire n'est plus joignable",
      body: [
        "Vous n'avez pas tous les accès, personne ne sait exactement comment le site est construit, et chaque intervention technique devient un pari. La dépendance à un prestataire disparu est l'un des signaux les plus fréquents.",
        "Reconnaître le problème est la première étape. La suivante est de comprendre quel niveau d'intervention il appelle.",
      ],
    },
  ],
};

// S3 — Cinq niveaux d'intervention (timeline, progression 1→5)
export const refonteLevels = {
  eyebrow: 'Un spectre, pas un produit unique',
  title: "Cinq niveaux d'intervention, du simple ajustement à la reconstruction",
  intro: [
    "Tous les projets de refonte ne se ressemblent pas. Avant de décider ce qu'il faut faire, il faut comprendre ce dont votre site a réellement besoin. Le diagnostic détermine le niveau — pas l'inverse.",
  ],
  steps: [
    {
      icon: 'settings',
      title: 'Optimisation ciblée',
      body: [
        "Le site est structurellement sain, mais il a besoin d'améliorations techniques : vitesse, sécurité, compatibilité mobile, nettoyage d'extensions inutiles, mise à jour du CMS. L'architecture et les contenus restent en place.",
      ],
    },
    {
      icon: 'pen-tool',
      title: 'Rafraîchissement visuel',
      body: [
        "Le design est daté mais la structure fonctionne. Un nouveau thème, une typographie actualisée, des visuels renouvelés, une meilleure lisibilité mobile — sans toucher à l'architecture des pages ni aux contenus.",
      ],
    },
    {
      icon: 'layout',
      title: 'Refonte partielle',
      body: [
        "Certaines parties du site doivent être repensées (nouvelle page d'accueil, restructuration de l'offre, nouveau parcours de contact), tandis que d'autres restent fonctionnelles. Le site évolue par zones, en conservant ce qui tient.",
      ],
    },
    {
      icon: 'layers',
      title: 'Refonte structurelle',
      body: [
        "L'architecture, les contenus et le design doivent être repensés, mais la plateforme technique peut être conservée. Le cas classique d'un site qui n'a pas suivi l'évolution de l'organisation — les fondations sont solides, mais le bâtiment ne correspond plus à l'usage.",
      ],
    },
    {
      icon: 'refresh',
      title: 'Reconstruction et migration',
      body: [
        "Le site doit être reconstruit sur une nouvelle base — nouvelle plateforme, nouvelle architecture, nouveaux contenus — avec un plan de migration pour transférer ce qui doit l'être et rediriger ce qui change d'adresse. L'intervention la plus lourde, mais celle qui offre le plus de liberté.",
      ],
    },
  ],
};

// S4 — Diagnostiquer avant de décider (reading, sans icône — doc §7.2)
export const refonteDiagnostic = {
  eyebrow: 'La méthode de diagnostic',
  title: 'Ce que nous regardons avant de vous recommander quoi que ce soit',
  intro: [
    "Un diagnostic de site passe en revue plusieurs dimensions. Toutes ne sont pas pertinentes pour chaque projet — le périmètre dépend de la complexité du site et de la situation.",
  ],
  items: [
    {
      title: 'Les objectifs et les publics',
      body: [
        "Ce que le site devrait accomplir, pour qui, et l'écart entre cette intention et la réalité observable. C'est la question la plus importante et souvent la plus négligée.",
      ],
    },
    {
      title: 'La structure et les contenus',
      body: [
        "Arborescence, hiérarchie des pages, qualité des textes, pertinence des contenus existants, pages inutiles, pages qui fonctionnent bien. L'inventaire distingue ce qui doit être conservé, réécrit, fusionné ou retiré.",
      ],
    },
    {
      title: 'Le référencement acquis',
      body: [
        "Les pages qui reçoivent du trafic organique, les mots-clés pour lesquels le site est positionné, les liens entrants, les pages indexées. Ces données orientent les décisions de migration — on ne déplace pas aveuglément ce qu'on ne connaît pas.",
      ],
    },
    {
      title: 'La technique',
      body: [
        "Performances réelles (temps de chargement, poids des pages), état du CMS et de ses extensions, qualité du code, sécurité, adaptabilité mobile, hébergement. Un site peut être visuellement correct et techniquement en fin de vie.",
      ],
    },
    {
      title: "L'administration et les accès",
      body: [
        "Qui a accès à quoi, comment les contenus sont mis à jour, quels outils sont connectés. Reprendre un site suppose de reprendre l'accès — et de savoir ce qui manque.",
        "Un premier échange gratuit permet de comprendre votre situation et de déterminer si un diagnostic approfondi est nécessaire. Quand c'est le cas, ce diagnostic est un livrable à part entière, facturé et documenté — et il vous appartient, que vous continuiez avec nous ou non.",
      ],
    },
  ],
};

// S5 — Protéger ce qui a de la valeur (reading, 3 items)
export const refonteProtect = {
  eyebrow: 'Ce que vous risquez de perdre',
  title: 'Ce que vous risquez de perdre — et comment nous le protégeons',
  intro: [
    "C'est la section la plus anxiogène pour un propriétaire de site. Le ton est mesuré et factuel : nous vous disons ce qui peut se passer, et ce que nous faisons pour le réduire.",
  ],
  items: [
    {
      icon: 'search',
      title: 'Le référencement naturel',
      body: [
        "C'est la crainte numéro un, et elle est légitime : un changement d'architecture, d'URL ou de plateforme peut affecter le positionnement d'un site. Des fluctuations sont possibles, y compris quand la migration est bien préparée — Google ne recalcule pas instantanément.",
        "Ce que nous faisons pour limiter les risques :\n- Inventaire des pages qui reçoivent du trafic et des liens entrants, avant toute modification.\n- Mapping des anciennes URLs vers les nouvelles, page par page, lorsque les adresses changent.\n- Mise en place de redirections permanentes (301) pour que chaque ancienne adresse pointe vers la bonne destination.\n- Vérification des métadonnées, du sitemap, du maillage interne et de l'indexation après la mise en ligne.\n- Suivi dans Google Search Console pendant les semaines suivant le lancement.",
        "Ce que nous ne promettons pas : un maintien à 100 % du classement. Aucune migration ne peut le garantir. Ce que nous garantissons, c'est une méthode qui réduit les risques et les anticipe.",
      ],
    },
    {
      icon: 'files',
      title: 'Les contenus et les données',
      body: [
        "Les textes, images, documents, publications, comptes utilisateurs, données clients et commandes (pour les boutiques) sont inventoriés et migrés selon le périmètre convenu. Tout ce qui doit être conservé est identifié au diagnostic, pas découvert après le lancement.",
      ],
    },
    {
      icon: 'refresh',
      title: "La continuité de l'activité",
      body: [
        "Le basculement entre l'ancien et le nouveau site est planifié. Le calendrier, les vérifications et les responsabilités de chaque partie sont posés avant la mise en ligne. Sur les boutiques, cela inclut la continuité des paiements, des commandes en cours et des comptes clients.",
        "Nous ne promettons pas une migration sans aucune interruption ni fluctuation. Nous vous disons ce qui peut se passer, nous planifions pour que ce soit le plus court possible, et nous surveillons activement après le basculement.",
      ],
    },
  ],
};

// S6 — Choisir la destination technique (config cards, 3)
export const refontePlatform = {
  eyebrow: 'La destination technique',
  title: 'Faut-il changer de plateforme — et si oui, pour laquelle ?',
  intro: [
    "Le changement de CMS n'est pas toujours nécessaire. Si votre site est sur WordPress et que WordPress répond encore à vos besoins, une refonte peut très bien se faire en restant dessus. Le changement se justifie quand la plateforme actuelle est devenue un obstacle. La recommandation découle du diagnostic, jamais d'une préférence d'agence.",
  ],
  cards: [
    {
      brand: 'wordpress',
      title: 'Rester sur WordPress',
      body: [
        "Convient quand votre besoin est un site de contenus, de présentation ou institutionnel, que WordPress gère correctement, et que vous souhaitez conserver la familiarité d'administration. Nous développons un nouveau thème, restructurons et migrons les contenus dans le même environnement.",
      ],
    },
    {
      brand: 'shopify',
      title: 'Passer à Shopify',
      body: [
        "Convient quand votre commerce en ligne a dépassé ce que WooCommerce ou votre plateforme actuelle peut gérer. C'est le chemin qu'a suivi ATTA Africa, migrée de WordPress vers Shopify quand les besoins de vente transfrontalière et de multi-devises l'ont exigé.",
      ],
    },
    {
      icon: 'compass',
      title: 'Passer à une autre solution',
      body: [
        "Headless, framework sur mesure, ou combinaison : convient quand ni WordPress ni Shopify ne correspondent — besoin de performances extrêmes, d'interactions spécifiques ou d'intégrations profondes avec d'autres systèmes.",
      ],
    },
  ],
};

// S7 — Méthode (timeline, 6 temps)
export const refonteMethod = {
  eyebrow: 'Comment ça se passe',
  title: 'Comment se déroule une refonte, en six temps',
  intro: [
    "Une refonte se distingue d'une création par un fait simple : l'ancien site est encore en ligne pendant que le nouveau se construit. Le chantier doit tenir compte de cette coexistence.",
  ],
  steps: [
    {
      icon: 'search',
      title: "Comprendre l'existant et les objectifs",
      body: [
        "Votre site actuel, vos publics, ce qui fonctionne, ce qui ne fonctionne plus. C'est aussi le moment où nous accédons aux outils de mesure (si disponibles), aux contenus, aux accès techniques et à l'historique du projet.",
      ],
    },
    {
      icon: 'clipboard',
      title: 'Diagnostiquer et recommander',
      body: [
        "Selon la complexité, un diagnostic rapide ou un audit approfondi. Le livrable est une recommandation argumentée : niveau d'intervention, conservation des acquis, plateforme de destination, plan de migration des contenus et des URLs, calendrier et budget.",
      ],
    },
    {
      icon: 'layout',
      title: 'Structurer et concevoir le nouveau site',
      body: [
        "Arborescence, parcours, maquettes. Le nouveau site est conçu pour répondre aux objectifs identifiés au diagnostic, pas pour reproduire l'ancien en plus joli.",
      ],
    },
    {
      icon: 'code',
      title: 'Développer et migrer',
      body: [
        "Développement du nouveau site en environnement de test, migration progressive des contenus et des données selon le plan convenu. L'ancien site reste en ligne pendant cette phase — vos visiteurs ne voient rien.",
      ],
    },
    {
      icon: 'check',
      title: 'Tester et préparer le basculement',
      body: [
        "Vérification complète sur le nouveau site : contenus, parcours, formulaires, performances, mobile. Mise en place des redirections. Planification du jour et de l'heure de basculement pour minimiser les risques.",
      ],
    },
    {
      icon: 'refresh',
      title: 'Basculer, vérifier, accompagner',
      body: [
        "Passage en production. Vérification immédiate des redirections, de l'indexation et du fonctionnement. Suivi pendant les jours et semaines suivants. Formation de votre équipe. Remise des accès et de la documentation.",
      ],
    },
  ],
};

// S8 — Propriété (ownership, deep)
export const refonteOwnership = {
  eyebrow: 'Ce qui vous appartient',
  title: 'Cette fois, le site sera le vôtre',
  intro: [
    "Si vous êtes sur cette page, il y a une chance raisonnable que votre site actuel pose un problème de propriété ou de contrôle : l'ancien prestataire détient les accès, le domaine est à son nom, le thème est propriétaire, ou personne ne sait comment le site est construit. À la livraison du site refondu, la propriété est claire.",
  ],
  rows: [
    { icon: 'globe', label: 'Domaine', text: "Enregistré au nom de votre organisation, pas de l'agence." },
    { icon: 'server', label: 'Hébergement', text: 'À votre nom.' },
    {
      icon: 'key',
      label: "Accès d'administration",
      text: 'Les vôtres — vous décidez de qui accède à quoi.',
    },
    {
      icon: 'code',
      label: 'Code',
      text: 'Le code du thème et des développements spécifiques vous est remis, avec documentation.',
    },
    {
      icon: 'files',
      label: 'Contenus et données',
      text: 'Sur votre infrastructure et exportables.',
    },
  ],
  aside: {
    icon: 'puzzle',
    eyebrow: 'Limites honnêtes',
    title: 'Licences tierces et modèle SaaS',
    body: [
      "Les licences de thèmes ou d'extensions tiers sont soumises à leurs propres conditions. Sur Shopify, l'infrastructure reste hébergée par la plateforme (modèle SaaS). Nous vous expliquons ces dépendances au cadrage, pas à la livraison.",
    ],
  },
};

// S9 — Preuves (projects, 1 carte ATTA + note)
export const refonteProof = {
  eyebrow: 'Nos expériences de transformation',
  title: 'Des sites que nous avons transformés',
  intro: [
    "La meilleure preuve de notre approche est un projet accompagné de bout en bout : de la création initiale à la migration de plateforme, en passant par l'exploitation quotidienne.",
  ],
  cards: [
    {
      badge: 'Migration · WordPress → Shopify',
      title: 'ATTA Africa — de WordPress à Shopify',
      text: "Marque DTC premium que nous accompagnons depuis sa création. Site initialement conçu sur WordPress, puis migré vers Shopify quand les besoins du commerce l'ont exigé : vente transfrontalière, multiples devises (EUR, USD, CAD, XOF), paiements Mobile Money et internationaux, catalogue en croissance. Une migration n'est pas un échec du site précédent — c'est la conséquence naturelle de l'évolution d'une activité.",
      image: { src: '/assets/real/atta-africa.png', alt: 'Aperçu de la boutique ATTA Africa (Shopify actuelle)' },
      link: { label: 'Voir la boutique actuelle', href: 'https://atta-africa.com' },
    },
  ],
  note: "Dates exactes de migration, résultats quantifiés et comparaison avant/après ne sont pas documentés à ce stade. Parmi nos réalisations, certains sites ont pu faire l'objet de reprises ou de transformations (Destinations Rêvées, projet 2026, est un candidat) — les cas dont un état avant/après est documenté seront ajoutés ici après vérification du périmètre réel.",
  cta: { label: "Voir l'ensemble de nos réalisations", href: '/realisations' } as SpLinkData,
};

// S10 — FAQ (9 questions)
export const refonteFaqIntro = { eyebrow: 'Vos questions', title: 'Questions fréquentes' };

export const refonteFaqItems = [
  {
    q: 'Combien coûte une refonte ?',
    a: "Le budget dépend du niveau d'intervention (optimisation ciblée, refonte partielle, reconstruction complète), de la taille du site, du volume de contenus à migrer, du changement éventuel de plateforme et du périmètre de tests et de redirections. Il n'existe pas de forfait standard — chaque refonte est un projet différent. Le devis est gratuit et établi après un premier échange qui nous permet de comprendre votre site et vos objectifs.",
  },
  {
    q: 'Combien de temps prend une refonte ?',
    a: "Une refonte simple (rafraîchissement visuel, restructuration modérée) peut être livrée en un à deux mois. Une refonte structurelle avec migration de contenus et changement de plateforme prend plutôt deux à quatre mois. Les boutiques en ligne avec migration de catalogue, de paiements et de données clients sont les projets les plus longs. Le calendrier précis est posé au diagnostic.",
  },
  {
    q: 'Est-ce que je vais perdre mon référencement Google ?',
    a: "Des fluctuations sont possibles, même avec une migration bien préparée. Ce que nous faisons : inventaire des pages importantes, mapping des URLs, redirections permanentes, vérification des métadonnées, suivi post-lancement dans Search Console. Ce que nous ne promettons pas : un maintien à 100 % du classement. Ce qui est certain : une refonte sans plan de redirections et sans suivi est la meilleure façon de perdre son référencement.",
  },
  {
    q: "Est-ce que l'ancien site sera coupé pendant les travaux ?",
    a: "Non. Le nouveau site est développé en environnement de test pendant que l'ancien reste en ligne. Le basculement est planifié, préparé et réalisé le jour convenu. Sur la plupart des projets, la coupure est de quelques minutes — le temps de pointer le domaine vers le nouveau site.",
  },
  {
    q: 'Pouvez-vous reprendre un site fait par une autre agence ?',
    a: "Oui. Nous commençons par comprendre comment le site est construit, quels accès sont disponibles, quel est l'état du code et quels contenus doivent être conservés. Si certains accès manquent (hébergement, CMS, domaine), nous vous aidons à les récupérer dans la mesure du possible — cela peut nécessiter des démarches auprès de votre ancien prestataire ou de votre registrar.",
  },
  {
    q: 'Est-ce que je dois fournir tous les nouveaux contenus ?',
    a: "C'est le même sujet que pour une création : trois configurations sont possibles. Vous fournissez des textes prêts, vous fournissez de la matière brute que nous reprenons, ou nous rédigeons à partir d'entretiens avec vous. Sur une refonte, une partie des contenus existants peut souvent être conservée ou adaptée, ce qui réduit l'effort.",
  },
  {
    q: 'Faut-il changer de plateforme pour refondre ?',
    a: "Pas nécessairement. Si votre CMS actuel répond encore à vos besoins, la refonte peut se faire en restant dessus. Le changement se justifie quand la technologie actuelle est devenue un obstacle ou quand vos besoins ont suffisamment évolué. La recommandation sort du diagnostic, pas d'une préférence d'agence.",
  },
  {
    q: 'À qui appartiendra le nouveau site ?',
    a: "À vous. Domaine, hébergement, accès d'administration, code, contenus — tout est remis à la livraison. Les modalités exactes dépendent de la plateforme choisie et des licences tierces éventuelles, et sont formalisées au contrat. Le détail est dans la section Propriété ci-dessus.",
  },
  {
    q: 'Et si la refonte ne change rien à mes résultats ?',
    a: "Un nouveau site ne garantit pas, à lui seul, plus de visiteurs ou plus de clients. Un site mieux structuré, plus rapide, mieux référencé et plus facile à administrer crée les conditions pour que votre contenu et vos actions commerciales portent leurs fruits. Si le problème est l'acquisition — faire venir des visiteurs qualifiés —, c'est un chantier distinct : notre expertise Marketing et génération de prospects peut vous accompagner.",
  },
];

// S11 — Contact
export const refonteContact = {
  eyebrow: 'Prendre contact',
  title: 'Parlons de votre site',
  lead:
    "Un site à moderniser, une migration à planifier, un site dont vous avez perdu le contrôle, ou simplement un doute sur ce qu'il faut faire : la première conversation est gratuite, sans engagement, et nous répondons sous 24 heures.",
};
