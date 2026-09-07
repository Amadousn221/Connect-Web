import type { Cta, FaqItem } from '../types';

// ── Page « Sites d'entreprise » (enfant de « Conception et développement web »)
// Copy figée (marketing stable → code, V3 §5.4). Source :
// docs Downloads/01-refonte-sites-entreprise-architecture-copy-ux.md (§3).
// Architecture PROPRE à cette page — ne clone ni la page parente, ni Boutiques,
// ni Institutionnels & ONG. La technologie est un moyen / une preuve, jamais
// une offre autonome.
//
// INTÉGRITÉ : aucun chiffre de résultat, aucun témoignage, aucun client/projet
// inventé. Les « angles à démontrer » de la conception sont des notes internes,
// NON publiées. Les réalisations pointent vers le hub /realisations.
// Montants FAQ alignés sur le dépôt (A-COMPLETER.md §3, FAQ homepage) — le
// « 300 000 FCFA » du document de conception est écarté au profit du repère
// confirmé PO « 3 000 000 FCFA ».

export const sitesEntrepriseMeta = {
  title: "Sites d'entreprise",
  description:
    "Un site d'entreprise conçu pour clarifier votre offre, inspirer confiance et faciliter les prises de contact — création, refonte, migration ou reprise, avec vos accès à votre nom.",
};

// ── 01 — Hero ─────────────────────────────────────────────────────────────
export const sitesEntrepriseHero = {
  eyebrow: "Sites d'entreprise",
  breadcrumb: "Sites d'entreprise",
  parentCrumb: {
    label: 'Conception et développement web',
    href: '/services/conception-et-developpement-web',
  },
  title:
    "Un site d'entreprise conçu pour clarifier votre offre et inspirer confiance.",
  intro:
    "Nous concevons des sites d'entreprise adaptés à votre activité, à vos publics et à vos objectifs. Présentation de l'offre, crédibilité, contenus, prise de contact et évolutivité : chaque choix est pensé pour créer une présence web claire, professionnelle et utile à votre développement.",
  ctas: [
    { label: 'Parlons de votre projet', href: '#contact' },
    { label: 'Voir nos réalisations', href: '/realisations' },
  ] as [Cta, Cta],
  trustLine: [
    'Réponse sous 24 h',
    'Devis gratuit',
    'Vos accès vous appartiennent',
  ],
  // Photographie d'ambiance business/web déjà présente dans le dépôt (asset
  // réel, non issu d'une maquette). À remplacer éventuellement par un visuel
  // dédié plus haute définition (point à valider PO).
  image: '/assets/images/Hero.jpeg',
};

// ── Type d'une ligne éditoriale numérotée (sections 2 et 4) ──────────────
export interface EditorialItem {
  title: string;
  body: string;
}

// ── 02 — Ce qu'un site d'entreprise doit accomplir ──────────────────────
export const sitesEntrepriseRole = {
  eyebrow: "Au-delà d'une simple présence",
  title:
    "Votre site doit aider vos visiteurs à comprendre qui vous êtes, ce que vous faites et pourquoi vous choisir.",
  lead: "Un site d'entreprise ne sert pas seulement à « être en ligne ». Il doit organiser votre message, présenter vos offres clairement et donner suffisamment de repères pour qu'un prospect, un partenaire ou un candidat puisse avancer.",
  items: [
    {
      title: 'Comprendre votre activité',
      body: 'Votre proposition de valeur, vos services et votre positionnement doivent être identifiables rapidement.',
    },
    {
      title: 'Trouver la bonne information',
      body: "La navigation et les contenus doivent aider le visiteur à accéder à l'offre, aux références, aux informations pratiques ou au contact sans effort inutile.",
    },
    {
      title: 'Vérifier votre crédibilité',
      body: 'Réalisations, expertises, équipe, informations institutionnelles et preuves doivent rassurer sans surcharger la page.',
    },
    {
      title: 'Passer à l’action',
      body: "Prendre contact, demander un devis, réserver un échange ou télécharger une ressource doit être simple et cohérent avec votre activité.",
    },
  ] as EditorialItem[],
  conclusion:
    'Le design vient soutenir cette clarté. Il ne remplace pas le fond.',
};

// ── 03 — Réalisations ─────────────────────────────────────────────────────
export const sitesEntrepriseRealisations = {
  eyebrow: 'Sites livrés',
  title:
    'Des projets qui montrent comment nous structurons une présence d’entreprise.',
  lead: "Présenter des projets réels permet de juger notre travail sur des éléments concrets : hiérarchie de l'information, présentation de l'offre, navigation et qualité de l'expérience.",
  projectNames: ['ADA Voyages', 'DDS Medical', 'Tamou Fishing'],
  link: { label: 'Voir toutes les réalisations', href: '/realisations' } as Cta,
};

// ── 04 — Présenter votre activité sans la compliquer ────────────────────
export const sitesEntrepriseStructure = {
  eyebrow: 'Structure & contenu',
  title: 'Une offre claire donne plus de poids à votre entreprise.',
  lead: "Quand une entreprise propose plusieurs services, expertises ou marchés, le risque est de tout montrer au même niveau. Nous travaillons la hiérarchie pour rendre l'offre lisible sans appauvrir le contenu.",
  items: [
    {
      title: 'Positionnement',
      body: 'Exprimer rapidement ce que vous faites, pour qui et dans quel contexte.',
    },
    {
      title: 'Services',
      body: 'Structurer les offres pour que chaque visiteur comprenne ce qui lui correspond.',
    },
    {
      title: 'Preuves',
      body: 'Présenter références, réalisations, chiffres ou expertises uniquement lorsqu’ils sont vérifiables et utiles.',
    },
    {
      title: 'Contenus',
      body: 'Créer des pages qui répondent aux vraies questions de vos prospects, partenaires ou candidats.',
    },
    {
      title: 'SEO on-page',
      body: 'Organiser les titres, contenus, métadonnées et maillage interne pour aider les moteurs de recherche à comprendre le site, sans promettre de position garantie.',
    },
  ] as EditorialItem[],
};

// ── 05 — Transformer l'intérêt en prise de contact ─────────────────────
export const sitesEntrepriseConversion = {
  eyebrow: 'Parcours de conversion',
  title: 'Le site doit faciliter la prochaine étape.',
  lead: "Tous les visiteurs ne sont pas prêts à acheter ou signer immédiatement. Le rôle du site est de leur donner une suite logique selon leur niveau d'intérêt.",
  items: [
    {
      title: 'Contact direct',
      body: 'Formulaire, téléphone, WhatsApp ou e-mail selon ce qui est pertinent pour votre activité.',
    },
    {
      title: 'Demande de devis',
      body: 'Un parcours clair pour recueillir les informations nécessaires sans imposer un formulaire trop long.',
    },
    {
      title: 'Prise de rendez-vous',
      body: 'Quand le processus commercial le justifie, une prise de rendez-vous peut être intégrée.',
    },
    {
      title: 'Ressources et contenus',
      body: 'Articles, guides ou études de cas peuvent aider les prospects qui ont besoin de mieux comprendre avant de vous contacter.',
    },
  ] as EditorialItem[],
  principle:
    'Nous choisissons les points de conversion en fonction du cycle commercial, pas pour multiplier les boutons.',
};

// ── 06 — Un site utile aussi pour votre équipe ─────────────────────────
export const sitesEntrepriseTeam = {
  eyebrow: 'Gestion & autonomie',
  title:
    'Votre équipe doit pouvoir faire vivre le site sans dépendre de nous pour chaque modification.',
  lead: "Un site d'entreprise est aussi un outil interne. Il doit permettre à la bonne personne de mettre à jour les informations courantes, publier des contenus ou faire évoluer certaines pages selon les droits prévus.",
  items: [
    {
      title: 'Administration claire',
      body: 'Une interface adaptée au type de contenu réellement géré par votre équipe.',
    },
    {
      title: 'Rôles et accès',
      body: 'Les permissions sont définies selon les responsabilités des personnes qui utilisent le site.',
    },
    {
      title: 'Documentation',
      body: 'Les opérations courantes peuvent être documentées lorsque le périmètre le prévoit.',
    },
    {
      title: 'Évolutivité',
      body: 'Le site peut accueillir de nouvelles pages, contenus ou intégrations sans devoir être entièrement reconstruit.',
    },
    {
      title: 'Accès et continuité',
      body: "La titularité des comptes, les accès d'administration et les modalités de reprise sont clarifiés dès le projet.",
    },
  ] as EditorialItem[],
};

// ── 07 — Choisir la bonne base technique ───────────────────────────────
// Les technos sont des PREUVES DE MAÎTRISE, jamais des offres. On ne
// réintroduit pas WordPress comme CMS du projet Connect Web (Sanity, V3).
export const sitesEntrepriseTech = {
  eyebrow: 'Technologie au service du besoin',
  title:
    "Nous choisissons la solution en fonction de votre organisation, pas l'inverse.",
  lead: "WordPress, Webflow, Next.js ou une autre approche peuvent être pertinentes selon le projet. Le choix dépend du niveau de personnalisation, de l'administration attendue, des intégrations, de la maintenance et du budget.",
  criteriaLabel: 'Nous regardons notamment',
  criteria: [
    'la fréquence des mises à jour',
    'le nombre de personnes amenées à gérer le site',
    'les besoins multilingues',
    'les formulaires et intégrations',
    'les contraintes de performance et de sécurité',
    'le coût total de maintenance',
    'les conditions de reprise et de propriété des accès',
  ],
  tagsLabel: 'Technologies possibles',
  tags: ['WordPress', 'Webflow', 'Next.js', 'Autres solutions selon le besoin'],
  note: 'Ces technologies apparaissent comme preuves de maîtrise, pas comme offres autonomes.',
};

// ── 08 — Créer, refondre ou reprendre l'existant ──────────────────────
export interface StartingPoint {
  num: string;
  title: string;
  body: string;
}

export const sitesEntrepriseStartingPoint = {
  eyebrow: 'Votre point de départ',
  title: "On ne traite pas un site existant comme un projet neuf.",
  steps: [
    {
      num: '01',
      title: 'Nouveau site',
      body: 'Nous partons des objectifs, des publics, des contenus et du positionnement pour construire une base cohérente.',
    },
    {
      num: '02',
      title: 'Refonte',
      body: "Nous analysons ce qui doit être amélioré, ce qui fonctionne encore et ce qui mérite d'être conservé.",
    },
    {
      num: '03',
      title: 'Migration',
      body: 'Nous préparons le changement de solution en tenant compte des contenus, des URLs, des données et du référencement existant.',
    },
    {
      num: '04',
      title: 'Reprise',
      body: "Nous pouvons reprendre un site existant, à condition d'avoir accès aux éléments nécessaires et de pouvoir évaluer son état technique.",
    },
  ] as StartingPoint[],
  method:
    'Méthode commune : cadrage → architecture → design → développement → recette → mise en ligne → transmission.',
  cta: { label: 'Parlons de votre site actuel', href: '#contact' } as Cta,
};

// ── 09 — Questions pratiques (FAQ) ────────────────────────────────────
export const sitesEntrepriseFaq = {
  eyebrow: 'Questions pratiques',
  title: 'Les réponses utiles avant de lancer votre projet.',
  items: [
    {
      q: "Combien coûte un site d'entreprise ?",
      a: "Le budget dépend du nombre de pages, des contenus, des fonctionnalités, du niveau de design et des intégrations. À titre de repère, un site vitrine démarre à 3 000 000 FCFA selon le périmètre. Le devis final précise les prestations incluses.",
    },
    {
      q: 'Combien de temps faut-il prévoir ?',
      a: 'Le délai dépend du périmètre, de la disponibilité des contenus et des validations. Le délai moyen déclaré de deux semaines concerne un premier livrable, pas nécessairement la mise en ligne complète.',
    },
    {
      q: 'Puis-je modifier le site moi-même ?',
      a: "Oui lorsque le projet prévoit une interface d'administration. Les possibilités dépendent de la solution retenue et des droits attribués à votre équipe.",
    },
    {
      q: 'Faut-il obligatoirement utiliser WordPress ?',
      a: 'Non. WordPress peut être pertinent, mais il n’est pas imposé. Le choix dépend du projet.',
    },
    {
      q: 'Pouvez-vous faire un site multilingue ?',
      a: 'Oui lorsque le projet le nécessite. La structure, les contenus et les responsabilités de traduction doivent être définis en amont.',
    },
    {
      q: 'Pouvez-vous intégrer un CRM ou un outil externe ?',
      a: "Oui si l'intégration est pertinente et techniquement possible. Les intégrations sont cadrées séparément selon les outils concernés.",
    },
    {
      q: 'Qui possède le domaine et les accès ?',
      a: "La titularité des comptes, les accès administrateur et les modalités de reprise sont définis contractuellement. Le principe de Connect Web est de ne pas enfermer le client dans une dépendance inutile.",
    },
    {
      q: 'Proposez-vous la maintenance ?',
      a: 'La maintenance dépend du périmètre convenu. Les prestations incluses et leur durée sont précisées dans le devis.',
    },
  ] as FaqItem[],
};
