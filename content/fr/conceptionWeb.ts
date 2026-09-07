import type { Cta, FaqItem } from '../types';

// ── Page parente « Conception et développement web » ───────────────────────
// Copy figée (marketing stable → code, V3 §5.4). Source : docs/03-architecture-
// copy-ux.md §3, direction hero du brief courant. Chapeaute les 3 sous-services
// web existants + bifurcation vers /services/plateformes-applications.
//
// INTÉGRITÉ : aucun chiffre de résultat, aucun témoignage, aucun logo/projet
// inventé. Les observations « à confirmer » de docs/03 §03 ne sont PAS publiées.
// Les réalisations pointent vers le hub /realisations (pas de fiche [slug]).

export const conceptionWebMeta = {
  title: 'Conception et développement web',
  description:
    "Sites d'entreprise, sites institutionnels et boutiques en ligne : Connect Web conçoit un site adapté à vos publics, à votre activité et à vos objectifs — de la première réflexion à la mise en ligne, avec vos accès à votre nom.",
};

// ── 01 — Hero ─────────────────────────────────────────────────────────────
export const conceptionWebHero = {
  eyebrow: 'Conception & développement web',
  breadcrumb: 'Conception et développement web',
  title: 'Un site web pensé pour ce que votre organisation doit accomplir.',
  intro:
    "Nous concevons des sites d'entreprise, des sites institutionnels et des boutiques en ligne adaptés à vos publics, à votre activité et à vos objectifs. De la première réflexion à la mise en ligne, nous associons qualité de conception, maîtrise technique et connaissance du terrain ouest-africain.",
  ctas: [
    { label: 'Parlons de votre projet', href: '/contact' },
    { label: 'Voir nos réalisations', href: '/realisations' },
  ] as [Cta, Cta],
  trustLine: [
    'Réponse sous 24 h',
    'Devis gratuit',
    'Vos accès vous appartiennent',
  ],
  image: '/assets/hero-bg.jpg',
};

// ── 02 — Choisir la bonne solution ────────────────────────────────────────
export interface OrientationCard {
  index: string;
  title: string;
  body: string;
  needs: string[]; // 2–3 mini-tags de besoin (jamais des technologies)
  link: Cta;
}

export const conceptionWebOrientation = {
  eyebrow: 'Choisir la bonne solution',
  title: 'Le bon site dépend d’abord de ce que vous voulez en faire.',
  lead: "Un site peut présenter une activité, faciliter la prise de contact, rendre des informations accessibles ou permettre de vendre en ligne. Sa structure et ses fonctionnalités doivent découler de ce rôle, pas d'une liste de technologies à ajouter. Nous vous aidons à définir le périmètre adapté, que vous partiez de zéro ou que vous souhaitiez faire évoluer un site existant.",
  cards: [
    {
      index: '01',
      title: "Sites d'entreprise",
      body: "Présentez votre activité, clarifiez vos offres et facilitez les prises de contact. Une présence professionnelle pensée pour rassurer vos clients, partenaires et prospects, au Sénégal comme à l'international.",
      needs: ['Crédibilité', 'Offre', 'Contact'],
      link: {
        label: "Découvrir les sites d'entreprise",
        href: '/services/sites-entreprise',
      },
    },
    {
      index: '02',
      title: 'Sites institutionnels & ONG',
      body: "Organisez vos missions, programmes, publications et informations pour les rendre accessibles à vos différents publics. Une conception attentive à la clarté, à l'administration des contenus et aux contraintes de votre organisation.",
      needs: ['Missions', 'Publications', 'Accessibilité'],
      link: {
        label: 'Découvrir les sites institutionnels',
        href: '/services/sites-institutionnels-ong',
      },
    },
    {
      index: '03',
      title: 'Boutiques en ligne',
      body: 'Proposez une expérience d’achat adaptée à votre marque et à vos marchés. Le catalogue, le parcours de commande, les paiements et les solutions de livraison sont définis selon votre modèle commercial.',
      needs: ['Catalogue', 'Paiement', 'Livraison'],
      link: {
        label: 'Découvrir les boutiques en ligne',
        href: '/services/boutiques-en-ligne',
      },
    },
  ] as OrientationCard[],
  bifurcation: {
    title: 'Votre besoin dépasse celui d’un site ?',
    body: "Espace client, application métier, plateforme transactionnelle ou outil sur mesure : certains projets demandent une architecture spécifique. Nous pouvons vous aider à distinguer le site, l'application et les outils à connecter.",
    link: {
      label: 'Explorer les logiciels & applications web',
      href: '/services/plateformes-applications',
    } as Cta,
  },
};

// ── 03 — Réalisations ─────────────────────────────────────────────────────
// La sélection réutilise des réalisations réelles (content/fr/accueil.ts) avec
// capture réelle vérifiée dans public/assets/real/. Descriptions neutres, sans
// résultat commercial. Lien vers le hub uniquement.
export const conceptionWebRealisations = {
  eyebrow: 'Réalisations',
  title: 'Le travail réalisé, et les choix derrière chaque projet.',
  lead: "Un portfolio est plus utile lorsqu'il permet de comprendre le contexte et le travail effectué. Voici des réalisations concrètes qui illustrent différentes façons de concevoir une présence web.",
  projectNames: [
    'SCOD VTC',
    'WAS Africa',
    'ADA Voyages',
    'Sunu Thiossane',
    'Link Shop',
    'Tamou Fishing',
  ],
  link: { label: 'Voir toutes les réalisations', href: '/realisations' } as Cta,
};

// ── 04 — Les choix qui comptent ──────────────────────────────────────────
export interface Criterion {
  title: string;
  body: string;
}

export const conceptionWebCriteria = {
  eyebrow: 'Conception & qualité',
  title: 'Les bonnes décisions ne se voient pas toujours. Leurs effets, si.',
  lead: "Un site doit être agréable à consulter, mais aussi compréhensible, utilisable et simple à faire évoluer. Voici les critères qui guident notre travail et que vous pouvez demander à n'importe quel prestataire.",
  items: [
    {
      title: 'Une information facile à trouver',
      body: "La navigation, les contenus et les appels à l'action sont organisés pour aider chaque visiteur à comprendre votre activité et à accomplir sa démarche.",
    },
    {
      title: 'Une expérience adaptée aux usages mobiles',
      body: 'Nous concevons les parcours pour différents écrans, avec une attention aux performances, à l’accessibilité et aux conditions de connexion des publics concernés.',
    },
    {
      title: 'Des contenus que votre équipe peut faire vivre',
      body: "Les outils d'administration et les possibilités de mise à jour sont définis selon votre organisation, vos ressources et la fréquence de vos publications.",
    },
    {
      title: 'Une base technique maintenable',
      body: "L'architecture, les intégrations et les fonctionnalités sont choisies pour répondre au besoin réel, avec une attention à la sécurité, aux tests et à l'évolution du projet.",
    },
  ] as Criterion[],
  outro:
    "Une bonne conception doit aussi rester compréhensible et maîtrisable par l'organisation qui l'utilise.",
};

// ── 05 — Vos accès, votre continuité ─────────────────────────────────────
// Distinction assumée : ce qui est clarifié pendant le projet ≠ ce qui dépend
// du contrat. Aucune garantie juridique absolue (docs/03 §05, note interne).
export interface OwnershipColumn {
  label: string;
  items: string[];
  note?: string;
}

export const conceptionWebOwnership = {
  eyebrow: 'Vos accès, votre continuité',
  title: 'Vous devez pouvoir faire évoluer votre site, avec nous ou autrement.',
  lead: "Un projet web implique un domaine, un hébergement, des comptes, parfois des licences et des services tiers. Nous clarifions dès le départ qui en détient les accès et quelles responsabilités reviennent à chacun.",
  columns: [
    {
      label: 'Ce que nous clarifions pendant le projet',
      items: [
        "La titularité et l'administration du nom de domaine.",
        'Les comptes d’hébergement, de CMS et des services utilisés.',
        'Les accès nécessaires à l’exploitation et aux mises à jour.',
        'Les modalités de remise et de documentation.',
        'Les conditions de maintenance, de reprise et d’évolution.',
      ],
    },
    {
      label: 'Ce qui est défini contractuellement',
      items: [
        'Les droits sur le code sur mesure et les contenus produits.',
        'Les composants sous licence et les briques payantes.',
        'Les abonnements et services tiers récurrents.',
      ],
      note: 'Ces éléments dépendent de la nature du projet et des dispositions convenues. Nous les précisons dans le périmètre et les documents contractuels.',
    },
  ] as OwnershipColumn[],
  conclusion:
    "L'objectif est que votre organisation comprenne son environnement numérique et puisse en assurer la continuité, sans dépendance inutile à un seul interlocuteur.",
  cta: { label: 'Parlons de votre projet', href: '/contact' } as Cta,
};

// ── 06 — Une méthode qui s'adapte à votre point de départ ────────────────
export interface MethodStep {
  num: string;
  title: string;
  body: string;
  deliverables: string;
}

export const conceptionWebMethod = {
  eyebrow: 'Notre méthode',
  title: 'Une méthode qui s’adapte à votre point de départ.',
  lead: "Créer un site, améliorer l'existant ou reprendre un projet déjà engagé ne demande pas exactement le même travail. Nous commençons par comprendre la situation avant de décider ce qu'il faut construire.",
  steps: [
    {
      num: '01',
      title: 'Cadrer',
      body: 'Nous clarifions les objectifs, les publics, les contenus, les contraintes et les fonctionnalités nécessaires. Pour un site existant, nous identifions ce qui fonctionne et ce qui doit évoluer.',
      deliverables: 'Diagnostic, périmètre, priorités, recommandations.',
    },
    {
      num: '02',
      title: 'Concevoir',
      body: 'Nous organisons les contenus, définissons les parcours et travaillons la direction visuelle. Les choix sont présentés et validés avant le développement.',
      deliverables: 'Arborescence, parcours, maquettes, spécifications utiles.',
    },
    {
      num: '03',
      title: 'Développer & vérifier',
      body: 'Nous intégrons les fonctionnalités retenues et réalisons les vérifications fonctionnelles, responsive et techniques prévues au projet. Les corrections sont traitées avant la mise en ligne.',
      deliverables: 'Environnement de recette, fonctionnalités, contrôles et corrections.',
    },
    {
      num: '04',
      title: 'Mettre en ligne & transmettre',
      body: 'Nous préparons la mise en production, vérifions les éléments essentiels et organisons les modalités de remise, de maintenance et d’accompagnement convenues.',
      deliverables: 'Mise en ligne, accès, documentation et accompagnement selon le contrat.',
    },
  ] as MethodStep[],
  rework: {
    title: 'Vous avez déjà un site ?',
    body: "Une refonte ne signifie pas nécessairement tout reconstruire. Un audit permet de déterminer s'il faut améliorer, migrer, reprendre ou repenser l'existant. Nous tenons compte des contenus utiles, des fonctionnalités et du référencement acquis dans la préparation du projet.",
    cta: { label: 'Parlons de votre site actuel', href: '/contact' } as Cta,
  },
};

// ── 07 — Questions utiles (FAQ) ─────────────────────────────────────────
// Montants alignés sur la FAQ homepage et A-COMPLETER.md §3 (confirmés PO).
export const conceptionWebFaq = {
  eyebrow: 'Avant de démarrer',
  title: 'Les questions qui permettent d’avancer plus sereinement.',
  items: [
    {
      q: 'Combien coûte la création d’un site web ?',
      a: "Le budget dépend du type de site, des contenus, des fonctionnalités, des intégrations et de l'accompagnement. À titre de repère, un site vitrine démarre à 3 000 000 FCFA et une boutique en ligne à 500 000 FCFA. Le devis précise ensuite les prestations et le périmètre retenus — le cadrage et le devis sont gratuits.",
    },
    {
      q: 'Combien de temps faut-il prévoir ?',
      a: "Le délai dépend de la complexité, de la disponibilité des contenus et des validations. Notre délai moyen déclaré pour un premier livrable est de deux semaines. Il ne correspond pas nécessairement au délai de mise en ligne final, qui est défini selon le projet.",
    },
    {
      q: 'Faut-il refaire entièrement mon site actuel ?',
      a: "Pas systématiquement. Un audit permet d'identifier ce qui peut être conservé, amélioré ou remplacé. La décision tient compte des objectifs, de l'état technique, des contenus et des contraintes de migration.",
    },
    {
      q: 'Pourrai-je modifier les contenus moi-même ?',
      a: "Nous prévoyons une interface d'administration lorsque le projet le nécessite. Les possibilités de mise à jour, les accès et l'accompagnement sont définis selon la solution retenue et les besoins de votre équipe.",
    },
    {
      q: 'Qui gère le domaine, l’hébergement et les licences ?',
      a: 'Les responsabilités sont précisées au démarrage. Nous clarifions la titularité des comptes, les modalités de facturation, les accès et les conditions liées aux services ou licences tiers.',
    },
    {
      q: 'La maintenance est-elle incluse ?',
      a: "La maintenance et l'assistance dépendent du périmètre convenu. Le devis précise les prestations incluses, leur durée et les modalités d'un éventuel accompagnement après livraison.",
    },
    {
      q: 'Comment choisir entre un site et une application sur mesure ?',
      a: 'Le choix dépend des usages. Un site peut suffire pour présenter, informer ou vendre. Des processus métier, des rôles complexes ou des fonctionnalités spécifiques peuvent justifier une application. Nous cadrons le besoin avant de recommander une architecture.',
    },
  ] as FaqItem[],
};

// ── 08 — CTA final (vers /contact ; pas de formulaire embarqué) ──────────
export const conceptionWebFinalCta = {
  eyebrow: 'Votre projet',
  title: 'Décrivons ce dont vous avez besoin. Nous définirons la suite ensemble.',
  body: 'Nouveau site, refonte ou projet encore à clarifier : présentez-nous votre contexte, vos objectifs et vos contraintes. Nous pourrons vous orienter vers le bon périmètre et les prochaines étapes.',
  ctas: [
    { label: 'Parlons de votre projet', href: '/contact' },
    { label: 'WhatsApp', href: 'https://wa.me/221783438249' },
  ] as [Cta, Cta],
  features: ['Réponse sous 24 h', 'Devis gratuit'],
};
