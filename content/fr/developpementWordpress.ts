// ── Page « Développement WordPress » (/services/developpement-wordpress)
//
// Source : maquette connect-web-wordpress-v1.html, bloc `page-design-data`
//   (état FINAL — le JSON `cw-copy` initial est un leurre = ancienne V2 du hub).
//   Le builder unifié (kind: 'wordpress') rend 12 sections `next-s{n}`.
// 12 sections. Hero : chapô court (`cfg.lead`). Marque WordPress : eyebrow en
//   texte seul (pas de glyphe — pas de lib d'icônes, contrat interdit le dessin
//   approximatif ; logo officiel à ajouter). Montant FAQ Q1 → `toValidateNote`.
// S9 : 4 projets nommés (mockup n'en montrait que 2 — divergence assumée, la
//   copy Opus liste WAS/Fahamu/Link Shop/ATTA). Note éditoriale honnête conservée.

import type { SpLinkData } from '@/components/sections/service-page/parts';

export const wpMeta = {
  title: 'Développement WordPress à Dakar — Connect Web',
  description:
    "Développement de sites WordPress à Dakar : propres, rapides, administrables par vos équipes, conçus pour durer. Sites d'entreprise, institutionnels, éditoriaux, WooCommerce.",
};

export const wpHero = {
  eyebrow: 'Développement WordPress',
  title:
    'Des sites WordPress développés pour durer — pas pour être refaits dans deux ans.',
  intro:
    "Nous développons des sites WordPress propres, rapides, administrables par vos équipes, et conçus pour tenir dans le temps — parce qu'un site qu'on doit refaire tous les deux ans n'est pas un bon investissement.",
  primaryCta: { label: 'Parlons de votre projet', href: '#contact' },
  secondaryCta: { label: 'Voir nos réalisations', href: '/realisations' },
  reassurance: ['Réponse sous 24 h', 'Devis gratuit', 'Vos accès vous appartiennent'],
};

// S2 — WordPress convient-il ? (pair)
export const wpFit = {
  eyebrow: 'Choisir avec discernement',
  title: 'WordPress convient-il à votre projet ?',
  intro: [
    "WordPress est un système de gestion de contenu conçu pour que des personnes non techniques créent, modifient et publient des contenus. Quand votre projet repose sur du contenu qui vit et évolue, WordPress est souvent la réponse la plus équilibrée.",
  ],
  cards: [
    {
      icon: 'check',
      title: 'WordPress est généralement pertinent quand',
      body: [
        "- Votre site doit être alimenté régulièrement par votre équipe : actualités, articles, publications, mises à jour de pages, événements.\n- Vous avez besoin d'un site de présentation, de services, institutionnel ou éditorial avec une administration confortable.\n- Vous voulez modifier vos contenus vous-même sans compétence technique.\n- Vous avez besoin d'un site multilingue avec gestion de traductions.\n- Vous envisagez un commerce en ligne d'ampleur modérée (via WooCommerce), intégré à un site de contenus existant.",
      ],
    },
    {
      icon: 'git-branch',
      title: "WordPress n'est pas toujours le meilleur choix quand",
      body: [
        "- Votre projet est principalement une boutique ambitieuse (gros catalogue, vente transfrontalière, logistique complexe) : Shopify peut être plus adapté.\n- Votre besoin est une application web, un portail avec comptes, un outil métier ou un tableau de bord : c'est le terrain de Plateformes et applications web.\n- Votre projet exige des interactions complexes, du temps réel ou une architecture qui dépasse ce qu'un CMS classique peut offrir.",
        "Nous ne recommandons pas WordPress par défaut. Nous le recommandons quand c'est la bonne réponse — et nous vous le disons quand ça ne l'est pas.",
      ],
    },
  ],
};

// S3 — Ce que nous développons (split, 5 items, liens sur 0/1/4)
export const wpProjects = {
  eyebrow: 'Les projets adaptés',
  title: 'Ce que nous développons avec WordPress',
  intro: [
    "WordPress n'est pas un outil limité aux blogs. Avec le bon développement, il porte des projets éditoriaux denses, des sites multilingues, des espaces de publication structurés et des sites commerciaux de taille modérée.",
  ],
  items: [
    {
      icon: 'building',
      title: "Sites d'entreprise et de services",
      body: [
        "Présentation d'activité, offres de services, références, prise de contact. L'essentiel des sites que nous livrons à des PME, des prestataires et des entreprises B2B est développé sur WordPress.",
      ],
      link: { label: "Voir Sites d'entreprise", href: '/services/sites-entreprise' } as SpLinkData,
    },
    {
      icon: 'landmark',
      title: "Sites institutionnels, d'ONG et d'associations",
      body: [
        "Missions, programmes, publications, rapports, actualités de terrain, galeries. WordPress excelle sur les sites à forte dimension éditoriale, où plusieurs contributeurs publient régulièrement.",
      ],
      link: {
        label: 'Voir Sites institutionnels & ONG',
        href: '/services/sites-institutionnels-ong',
      } as SpLinkData,
    },
    {
      icon: 'book',
      title: 'Sites éducatifs',
      body: [
        "Programmes d'enseignement, admissions, équipes pédagogiques, événements scolaires. Un site qui parle à la fois aux familles, aux étudiants, aux partenaires et aux autorités.",
      ],
    },
    {
      icon: 'newspaper',
      title: "Sites de contenus et d'éditeurs",
      body: [
        "Magazines en ligne, blogs structurés, espaces de ressources documentaires, glossaires, bases de connaissances. WordPress a été conçu pour ça.",
      ],
    },
    {
      icon: 'shopping-bag',
      title: "Boutiques d'ampleur modérée (WooCommerce)",
      body: [
        "Catalogue limité à moyen, vente locale ou régionale, commerce intégré à un site de contenus existant. Pour les projets plus ambitieux, notre page Boutiques en ligne détaille les options.",
      ],
      link: { label: 'Voir Boutiques en ligne', href: '/services/boutiques-en-ligne' } as SpLinkData,
    },
  ],
};

// S4 — Approche technique (triple + tail)
export const wpApproach = {
  eyebrow: 'Construire avec méthode',
  title: 'Notre approche technique : pas un template rempli, un site construit',
  intro: [
    "La différence entre un site WordPress de qualité et un site médiocre ne tient pas à WordPress lui-même. Elle tient à la manière dont le site est construit : choix du thème, approche de l'édition, qualité du code, nombre d'extensions, rigueur de la configuration.",
  ],
  items: [
    {
      icon: 'layout',
      title: 'Gutenberg',
      body: [
        "Convient quand votre site a besoin d'une édition sobre et performante, avec des blocs de contenu maîtrisés. L'approche la plus légère techniquement.",
      ],
    },
    {
      icon: 'pen-tool',
      title: 'Elementor',
      body: [
        "Convient quand votre équipe a besoin d'une édition visuelle poussée, sans toucher au code. Plus flexible visuellement, mais ajoute une dépendance technique et peut affecter les performances si mal utilisé.",
      ],
    },
    {
      icon: 'code',
      title: 'Le développement personnalisé',
      body: [
        "Convient quand votre site a des exigences de design, de performance ou d'intégration qui dépassent les constructeurs. Plus coûteux et plus long, mais c'est ce qui produit les sites les plus rapides et les plus maîtrisés.",
      ],
    },
  ],
  notes: [
    {
      title: 'Le choix des extensions',
      body: [
        "Une extension doit résoudre un problème réel, être activement maintenue par son éditeur, et ne pas dupliquer une fonctionnalité déjà présente. Leur utilité, leur maintenance et leurs interactions sont examinées — pas leur nombre.",
      ],
    },
    {
      title: 'La qualité du code',
      body: [
        "Un site WordPress rapide n'est pas un hasard : thème optimisé, images correctement dimensionnées, hébergement adapté, cache configuré, code qui ne charge pas de ressources inutiles. Nous travaillons avec ces critères comme standards, pas comme options payantes.",
      ],
    },
  ],
};

// S5 — Autonomie (sélecteur, 4 items)
export const wpAutonomy = {
  eyebrow: 'Votre équipe aux commandes',
  title: 'Votre site, votre contenu — sans dépendre de nous pour chaque modification',
  intro: [
    "C'est souvent la raison pour laquelle WordPress est choisi : la possibilité pour votre équipe de mettre à jour le site sans intervention technique. Après la livraison, votre équipe pourra :",
  ],
  selectorLabel: 'Ce que votre équipe pourra faire',
  panelEyebrow: 'Après la livraison',
  operations: [
    {
      label: 'Modifier les textes et les images',
      body: [
        "De n'importe quelle page, sans toucher au code et sans risquer de casser la mise en page. Le contenu et le design sont séparés — l'un des principes de base d'un WordPress bien construit.",
      ],
    },
    {
      label: 'Publier des articles, actualités ou pages',
      body: [
        "En quelques clics. L'interface d'édition est celle utilisée par des millions de sites dans le monde — votre équipe n'apprend pas un outil propriétaire.",
      ],
    },
    {
      label: 'Ajouter des documents, images ou vidéos',
      body: [
        "Dans la bibliothèque média, et les insérer dans vos pages et articles.",
      ],
    },
    {
      label: 'Gérer les utilisateurs et les rôles',
      body: [
        "Si plusieurs personnes contribuent, chacune peut avoir son propre accès avec des permissions adaptées : administrateur, éditeur, auteur, contributeur.",
        "Nous configurons l'interface d'administration selon votre équipe, nous formons les personnes concernées à la livraison, nous remettons une documentation. Et si vous avez une question trois mois après, nous répondons.",
      ],
    },
  ],
};

// S6 — Performance / sécurité / maintenance (triple)
export const wpQuality = {
  eyebrow: 'Un site entretenu',
  title: "WordPress est-il lent et vulnérable ? Ça dépend de comment il est construit.",
  intro: [
    "Les reproches de lenteur et d'insécurité faits à WordPress sont réels — mais ils ne sont pas inhérents à la plateforme. Ils résultent de mauvaises pratiques : hébergement sous-dimensionné, thèmes lourds, extensions empilées, mises à jour ignorées, mots de passe faibles.",
  ],
  items: [
    {
      icon: 'gauge',
      title: 'Performance',
      body: [
        "Optimisation dès la conception : thème allégé, images compressées, cache configuré (LiteSpeed quand l'hébergement le permet), chargement différé des ressources non essentielles. Sur le terrain ouest-africain, la performance pèse d'autant plus que les connexions varient et que la data mobile coûte.",
      ],
    },
    {
      icon: 'shield-check',
      title: 'Sécurité',
      body: [
        "Mises à jour régulières du cœur, du thème et des extensions ; limitation des extensions au strict nécessaire ; configuration des accès ; sauvegardes automatiques ; certificat SSL. Nous ne promettons pas un site invulnérable — aucun ne l'est — mais nous fermons les vecteurs d'attaque les plus courants.",
      ],
    },
    {
      icon: 'refresh',
      title: 'Maintenance',
      body: [
        "Un site WordPress a besoin d'entretien : mises à jour de sécurité, vérification de compatibilité, sauvegardes, renouvellement d'hébergement et de domaine. Nous proposons un accompagnement — mais le site vous appartient et il est documenté pour être repris.",
      ],
    },
  ],
};

// S7 — Reprendre l'existant (method, 3 voies)
export const wpRefonte = {
  eyebrow: "Reprendre l'existant",
  title: 'Votre site WordPress existe déjà — mais il ne vous satisfait plus',
  intro: [
    "Beaucoup de nos demandes concernent un site WordPress existant devenu problématique : lent, difficile à administrer, daté, impossible à mettre à jour sans casser quelque chose, ou abandonné par le prestataire d'origine.",
    "Nous commençons par un diagnostic technique (thème, code, extensions, versions, performances, sécurité, hébergement, base de données) qui nous permet de recommander l'une de trois voies.",
  ],
  steps: [
    {
      icon: 'settings',
      title: 'Améliorations ciblées',
      body: [
        "Le site est structurellement sain mais a besoin d'un nettoyage : extensions inutiles à retirer, thème à optimiser, cache à configurer, contenus à restructurer, design à rafraîchir. La voie la moins coûteuse.",
      ],
    },
    {
      icon: 'refresh',
      title: 'Reconstruction sur la même plateforme',
      body: [
        "Le site doit être reconstruit, mais WordPress reste le bon choix. Nouveau thème, contenus restructurés, données utiles migrées, maintenance appropriée.",
      ],
    },
    {
      icon: 'git-branch',
      title: 'Changement de plateforme',
      body: [
        "Parfois le problème est WordPress lui-même (par exemple un commerce qui a dépassé WooCommerce). Nous vous le disons et nous vous orientons. Le détail de notre approche de migration vit sur notre page Refonte de site internet.",
      ],
    },
  ],
};

// S8 — Propriété (dark)
export const wpOwnership = {
  eyebrow: 'Vos accès, votre code',
  title: 'Votre site WordPress, votre code, vos accès',
  intro: ["À la livraison :"],
  rows: [
    { icon: 'globe', label: 'Domaine', text: 'Enregistré à votre nom.' },
    { icon: 'server', label: 'Hébergement', text: "À votre nom, sur un compte auquel vous avez accès. Nous vous aidons à le choisir et à le configurer." },
    { icon: 'key', label: "Accès d'administration", text: "Les vôtres — administrateur principal, avec la possibilité de créer d'autres comptes selon vos besoins." },
    { icon: 'code', label: 'Thème et code', text: "Développés spécifiquement pour votre site, remis avec une documentation." },
    { icon: 'files', label: 'Contenus', text: 'Textes, images, documents, base de données — hébergés sur votre serveur et exportables à tout moment.' },
  ],
  aside: {
    icon: 'puzzle',
    eyebrow: 'Limite transparente',
    title: 'Extensions et thèmes premium tiers',
    body: [
      "Les extensions premium restent soumises à la licence de leur éditeur. Un thème premium acheté chez un éditeur tiers a sa licence attachée à votre compte, mais son renouvellement dépend des conditions de cet éditeur. Nous vous expliquons ces dépendances au cadrage.",
    ],
  },
};

// S9 — Réalisations
export const wpRealisations = {
  eyebrow: 'Réalisations',
  title: 'Ce que nous avons construit sur WordPress',
  intro: [
    "WordPress est la plateforme que nous utilisons pour la majorité de nos sites de présentation, institutionnels et éditoriaux. Voici les projets que nous pouvons documenter à ce stade.",
  ],
  cards: [
    {
      badge: 'Institutionnel · Contenus',
      title: 'WAS Africa — Nous Sommes La Solution',
      text: "Site institutionnel conçu et géré par notre équipe. Publication d'articles, vidéos et galeries sur plusieurs années.",
      image: { src: '/assets/real/was-africa.jpg', alt: 'Aperçu du site WAS Africa' },
      link: { label: 'Visiter le site', href: 'https://wasafrica.org' },
    },
    {
      badge: 'Institutionnel · Contenus',
      title: 'Fahamu Africa',
      text: "Création du site et gestion de contenus — articles, contenus multimédias et mises à jour — sur plusieurs années.",
      image: { src: '/assets/real/fahamu-africa.jpg', alt: 'Aperçu du site Fahamu Africa' },
      link: { label: 'Visiter le site', href: 'https://fahamu.org' },
    },
    {
      badge: 'WooCommerce · WordPress',
      title: 'Link Shop',
      text: "Boutique WooCommerce développée par notre équipe — preuve de maîtrise de l'écosystème e-commerce WordPress.",
      image: { src: '/assets/real/link-shop.jpg', alt: 'Aperçu de la boutique Link Shop' },
      link: { label: 'Visiter la boutique', href: 'https://linkshop.sn' },
    },
    {
      badge: 'Parcours historique · WordPress → Shopify',
      title: 'ATTA Africa',
      text: "Site initialement créé sur WordPress par notre équipe, puis migré vers Shopify lorsque les besoins e-commerce transfrontaliers l'ont exigé. Un parcours qui illustre notre capacité à construire sur WordPress et à accompagner un changement de plateforme.",
      image: { src: '/assets/real/atta-africa.png', alt: 'Aperçu de la boutique ATTA Africa (Shopify actuelle)' },
      link: { label: 'Voir la boutique actuelle', href: 'https://atta-africa.com' },
    },
  ],
  note: "D'autres projets de notre portfolio (ADA Voyages, DDS Medical, Sunu Thiossane, Tamou Fishing International…) utilisent possiblement WordPress, mais leur technologie n'est pas confirmée dans la documentation actuelle. Ils seront ajoutés une fois vérifiés — pas avant. Nous préférons une galerie honnête à une galerie remplie de suppositions.",
  cta: { label: "Voir l'ensemble de nos réalisations", href: '/realisations' } as SpLinkData,
};

// S10 — Quand votre projet demande plus (list + liens)
export const wpNext = {
  eyebrow: 'Le bon outil au bon endroit',
  title: 'Quand votre projet demande plus que WordPress',
  intro: [
    "WordPress est un outil de gestion de contenu, pas un outil universel. Voici les situations où une autre expertise devient nécessaire.",
  ],
  rows: [
    {
      icon: 'shopping-bag',
      title: 'Vendre en ligne avec un catalogue ambitieux',
      text: "WooCommerce suffit pour un commerce modéré. Au-delà, Shopify ou une solution spécifique peuvent être plus adaptés. Notre page Boutiques en ligne compare les options.",
      link: { label: 'Explorer ce service', href: '/services/boutiques-en-ligne' },
    },
    {
      icon: 'app-window',
      title: "Un portail, une application ou un outil métier",
      text: "Comptes utilisateurs, interactions récurrentes, données structurées, traitements : le terrain de notre expertise Plateformes et applications web.",
      link: { label: 'Explorer ce service', href: '/services/plateformes-applications' },
    },
    {
      icon: 'database',
      title: 'Connecter votre site à votre système de gestion',
      text: 'ERP, CRM, comptabilité, facturation : notre expertise ERP, CRM et intégrations prend le relais.',
      link: { label: 'Explorer ce service', href: '/services/crm-erp-integrations' },
    },
    {
      icon: 'compass',
      title: "Vous n'êtes pas sûr de ce dont vous avez besoin",
      text: "Notre offre Conseil et stratégie aide à cadrer avant tout choix technique.",
      link: { label: 'Explorer ce service', href: '/services/conseil-strategie' },
    },
  ],
};

// S11 — FAQ (9 questions)
export const wpFaqIntro = { eyebrow: 'Vos questions', title: 'Questions fréquentes' };

export const wpFaqItems = [
  {
    q: 'Combien coûte un site WordPress ?',
    a: "Un site vitrine WordPress démarre à partir de 300 000 FCFA, selon le nombre de pages, la complexité des contenus, le niveau de personnalisation et les fonctionnalités spécifiques. Un site institutionnel dense, multilingue ou avec des intégrations spécifiques représente un budget plus élevé, cadré au devis. Le devis est gratuit.",
    toValidateNote: 'Montant (300 000 FCFA) à reconfirmer avant publication.',
  },
  {
    q: "Combien de temps prend la création d'un site WordPress ?",
    a: "Un site de taille standard est livré en un à deux mois. Notre délai moyen pour un premier livrable visible est de deux semaines. Les projets plus denses (site institutionnel volumineux, multilingue, refonte avec migration) prennent davantage. Le facteur le plus souvent sous-estimé est la production des contenus.",
  },
  {
    q: 'Et si je veux vendre en ligne ?',
    a: "WooCommerce est l'extension e-commerce de WordPress. Elle convient aux commerces de taille modérée intégrés à un site de contenus. Pour les projets plus ambitieux — gros catalogue, vente transfrontalière, multiples moyens de paiement — nous comparons avec Shopify et d'autres options sur notre page Boutiques en ligne.",
  },
  {
    q: 'Pouvez-vous faire un site en plusieurs langues ?',
    a: "Oui. WordPress propose plusieurs solutions de gestion multilingue (WPML, Polylang ou d'autres selon le projet). Le multilingue se décide à l'architecture, pas après la livraison. Le surcoût dépend du nombre de langues, du volume de contenus et de la stratégie de maintenance des traductions.",
  },
  {
    q: "Comment assurez-vous la sécurité d'un site WordPress ?",
    a: "Mises à jour régulières, limitation des extensions, configuration des accès, sauvegardes automatiques, certificat SSL, hébergement adapté. Le détail est dans la section « Un site entretenu » ci-dessus. Nous ne promettons pas un site invulnérable — mais nous fermons les portes que la plupart laissent ouvertes.",
  },
  {
    q: 'Est-ce que vous assurez la maintenance après la livraison ?',
    a: "Nous proposons un accompagnement de maintenance : mises à jour, sauvegardes, surveillance, corrections. C'est une prestation distincte du développement, facturée séparément, précisée dans le devis. Si vous préférez gérer la maintenance en interne ou avec un autre prestataire, le site est documenté et livré avec tous les accès.",
  },
  {
    q: 'Mon site WordPress est en mauvais état. Pouvez-vous le reprendre ?',
    a: "Oui. Nous commençons par un diagnostic technique : thème, extensions, performances, sécurité, hébergement. Selon l'état, nous améliorons l'existant ou nous recommandons une reconstruction. Le détail est dans la section « Reprendre l'existant » ci-dessus et sur notre page Refonte.",
  },
  {
    q: 'À qui appartiennent le site, le code et les accès ?',
    a: "À vous. Le domaine, l'hébergement, les accès WordPress, le thème et le code développé sont remis à la livraison. Les seules limites concernent les licences d'extensions ou de thèmes premium tiers. Les modalités sont formalisées au contrat.",
  },
  {
    q: 'Pourquoi ne pas utiliser Wix, Squarespace ou un constructeur en ligne ?',
    a: "Ces outils ont leur place pour des projets simples et personnels. Pour un site professionnel qui doit évoluer, s'intégrer à d'autres outils, être administré par plusieurs personnes et rester performant dans le temps, WordPress offre un degré de maîtrise, de personnalisation et de propriété qu'un constructeur hébergé ne permet pas. Mais si votre besoin est vraiment simple et le budget très serré, nous vous le dirons.",
  },
];

// S12 — Contact
export const wpContact = {
  eyebrow: 'Prendre contact',
  title: 'Parlons de votre projet',
  lead:
    "Un site WordPress à créer, un site existant à reprendre, une question technique à poser avant de décider : la première conversation est gratuite, sans engagement, et nous répondons sous 24 heures.",
};
