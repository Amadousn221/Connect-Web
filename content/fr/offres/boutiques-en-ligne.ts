import type {
  OfferHeroContent,
  SectionIntro,
  NumberedItem,
  DeliverableItem,
  EditorialContent,
  FeaturedCaseContent,
} from '../../offres';
import type { Cta, FaqItem } from '../../types';

// Boutiques en ligne (offre Niveau 1) — refonte validée PO (7 sept. 2026),
// discovery ciblé + architecture ChatGPT, intégrée par Claude Code.
// Architecture propre à cette page (DECISION 04 — pas de template générique) :
// assemblée par `BoutiquesEnLignePage`, pas par l'archétype `OfferPage`.
//
// Intégrité des contenus : aucun chiffre de croissance, taux de conversion ou
// témoignage inventé. ATTA Africa (4 devises, automatisations) = FACT déclaré
// PO (DECISION 13). Prix/délai (500 000 FCFA, 2 semaines premier livrable) =
// FACT déclaré PO (DECISION 22 / Correctifs V2). Visuel ATTA : non fourni →
// `visualPending`, jamais de mockup de substitution. Fiches /realisations/[slug]
// inexistantes → tous les liens de projet pointent vers le hub /realisations.

export const boutiquesMeta = {
  title: 'Boutiques en ligne',
  description:
    "Nous créons et refondons des boutiques en ligne adaptées à votre marque, à vos clients et à vos marchés — parcours d'achat, paiements, livraison et gestion quotidienne, du Sénégal à l'international.",
};

export const boutiquesHero: OfferHeroContent = {
  eyebrow: 'Boutiques en ligne',
  breadcrumb: 'Boutiques en ligne',
  title: 'Votre boutique en ligne, du catalogue à la commande.',
  subtitle:
    "Nous créons et refondons des boutiques en ligne adaptées à votre marque, à vos clients et à vos marchés. Parcours d'achat, paiements, livraison et gestion quotidienne : chaque choix est pensé pour votre activité, que vous vendiez au Sénégal ou à l'international.",
  ctas: [
    { label: 'Parlons de votre projet', href: '#contact' },
    { label: 'Voir nos boutiques', href: '#cas' },
  ],
  features: ['Devis gratuit', 'Réponse sous 24 h', 'Vos accès vous appartiennent'],
  image: '/assets/svc-boutique.jpg',
};

// Section 1 — Une solution adaptée à votre activité (3 blocs, pas 4 : pas de
// « solution sur mesure » présentée comme sous-service autonome).
export const activitySolutionsIntro: SectionIntro = {
  eyebrow: 'Pour tous vos ambitions e-commerce',
  title: 'Une solution adaptée à votre activité.',
  lead: "Chaque marque est unique. Nous vous aidons à choisir la bonne approche et à mettre en place une boutique en ligne qui répond à vos objectifs, aujourd'hui et demain.",
};

export const activitySolutions: DeliverableItem[] = [
  {
    title: 'Vendre vos produits',
    body: "Une boutique en ligne pensée pour offrir une expérience d'achat simple, fluide et rassurante, du catalogue au paiement.",
  },
  {
    title: 'Vendre localement et à l’international',
    body: "Des solutions de paiement et de livraison adaptées à vos marchés, au Sénégal comme à l'étranger.",
  },
  {
    title: 'Développer et faire évoluer votre activité',
    body: "Des outils pour gérer votre catalogue, vos commandes et vos clients, et des intégrations qui accompagnent votre croissance.",
  },
];

// Section 2 — ATTA Africa, une preuve concrète. Résultats chiffrés, croissance
// ou taux de conversion : jamais inventés (EVIDENCE REQUIRED tant que non
// fournis). Automatisations = FACT déclaré PO (DECISION 13).
export const attaFeaturedCase: FeaturedCaseContent = {
  eyebrow: 'Un exemple concret',
  name: 'ATTA Africa',
  category: 'Marque de mode · Vente directe cross-border',
  body: "ATTA Africa est une marque de mode premium dont le commerce en ligne s'adresse à des clients situés sur plusieurs marchés. Le catalogue, les fiches produits et le tunnel d'achat accompagnent la découverte et l'achat ; la boutique encaisse en plusieurs devises (XOF, EUR, USD, CAD) avec des moyens de paiement locaux et internationaux adaptés ; et des automatisations réelles gèrent le reporting commercial mensuel, le traitement des commandes et les relances de panier.",
  quote:
    '« Une boutique cross-border, avec reporting mensuel automatisé et relances panier. »',
  primaryCta: { label: 'Voir le projet →', href: '/realisations' },
  externalUrl: { label: 'atta-africa.com', href: 'https://atta-africa.com' },
  visualPending: true,
  visualNote: 'Visuel de la boutique et du reporting à fournir',
};

export const otherShopsIntro: SectionIntro = {
  eyebrow: 'Autres boutiques à découvrir',
  title: 'Des boutiques qui tournent, pour de vrai.',
  lead: 'Bijouterie, high-tech — voici une partie des boutiques que nous avons construites.',
};

export const otherShopsLink: Cta = { label: 'Voir toutes les réalisations', href: '/realisations' };
export const otherShopsNames = ['Link Shop', 'Marjan Bijouterie', 'Luxury Bijouterie'];

// Section 3 — Du catalogue à la commande (parcours d'achat, 4 lignes).
export const buyingJourneyIntro: SectionIntro = {
  eyebrow: "L'expérience d'achat",
  title: 'Chaque étape doit aider votre client à avancer.',
  lead: "Une boutique ne se résume pas à mettre des produits en ligne. Nous travaillons les informations, les parcours et les fonctionnalités nécessaires pour permettre à vos visiteurs de découvrir votre offre, de choisir et de finaliser leur commande — sans ajouter chaque fonctionnalité possible, juste celles qui comptent.",
};

export const buyingJourneySteps: NumberedItem[] = [
  {
    title: 'Découvrir',
    body: 'Catégories, navigation, recherche et filtres aident les visiteurs à accéder aux produits qui les intéressent.',
  },
  {
    title: 'Choisir',
    body: 'Les fiches produits présentent les informations utiles : visuels, variantes, prix, disponibilité et éléments nécessaires à la décision.',
  },
  {
    title: 'Commander',
    body: 'Le panier et le passage en caisse sont conçus pour limiter les frictions inutiles. Moyens de paiement, frais et options de livraison sont adaptés à votre modèle commercial.',
  },
  {
    title: 'Suivre et revenir',
    body: 'Confirmations, suivi des commandes et outils de relation client facilitent la continuité de l’expérience, selon les fonctionnalités retenues.',
  },
];

// Section 4 — Vendre sur vos marchés (paiement, devises, livraison).
export const marketsContent: EditorialContent = {
  eyebrow: 'Vendre ici et ailleurs',
  title: 'Votre marché doit guider les choix techniques.',
  blocks: [
    "Vendre au Sénégal, livrer dans la sous-région ou servir des clients à l'international ne pose pas les mêmes questions. Nous définissons les modalités de paiement, de livraison et de gestion en fonction des pays ciblés et des contraintes de votre activité.",
    { h3: 'Pour vos ventes locales' },
    "Nous étudions les moyens de paiement disponibles, notamment Mobile Money lorsque le prestataire et le pays le permettent, ainsi que les modalités de livraison, de retrait et de confirmation adaptées à votre fonctionnement.",
    { h3: 'Pour vos ventes internationales' },
    "Nous pouvons prévoir les devises, les moyens de paiement internationaux, les zones de livraison et les informations nécessaires aux commandes transfrontalières. Les solutions retenues dépendent des pays, des prestataires et de votre éligibilité.",
    { h3: 'Des frais et des conditions compréhensibles' },
    'Le client doit pouvoir identifier les informations essentielles avant de commander : prix, frais applicables, modalités de livraison et conditions de vente.',
  ],
};

// Section 5 — Une boutique que votre équipe peut gérer (+ intégrations, en
// bloc distinct dans la copy, jamais présumées incluses par défaut).
export const managementIntro: SectionIntro = {
  eyebrow: 'Gestion & évolution',
  title: 'Votre boutique doit aussi fonctionner pour votre équipe.',
  lead: "Après la mise en ligne, il faut pouvoir mettre à jour les produits, suivre les commandes et faire évoluer le commerce. Nous définissons les outils d'administration et les intégrations utiles selon votre organisation, sans imposer une complexité inutile.",
};

export const managementItems: DeliverableItem[] = [
  {
    title: 'Catalogue et stocks',
    body: 'Gérer les produits, variantes, disponibilités et informations commerciales depuis les outils retenus.',
  },
  {
    title: 'Commandes et livraison',
    body: 'Organiser le suivi des commandes et les informations nécessaires à leur préparation et à leur expédition.',
  },
  {
    title: 'Contenus et offres',
    body: "Permettre à l'équipe de faire évoluer les pages, les collections et les opérations commerciales selon les droits prévus.",
  },
  {
    title: 'Outils connectés, lorsque c’est utile',
    body: "CRM, reporting, emailing, ERP ou automatisations peuvent être intégrés lorsque les besoins le justifient. Leur périmètre est défini séparément et n'est pas présumé inclus dans toute boutique.",
  },
];

// Section 6 — Choisir la bonne base technique (critères, pas un duel de
// cartes de service — Shopify/WooCommerce restent des preuves/badges).
export const techChoiceContent: EditorialContent = {
  eyebrow: 'La bonne base technique',
  title: 'La plateforme se choisit en fonction de votre commerce.',
  blocks: [
    "Shopify, WooCommerce ou une autre solution peuvent répondre à des besoins différents. Le bon choix dépend de votre catalogue, des marchés visés, des intégrations nécessaires, de votre budget et des ressources disponibles pour administrer le site.",
    "Nous comparons les possibilités et les contraintes avant de recommander une architecture. Une solution existante suffit souvent ; un développement spécifique n'est pertinent que lorsque le besoin le justifie.",
    { h3: 'Ce que nous regardons ensemble' },
    'Le fonctionnement du catalogue et des commandes · les paiements, la livraison et les services disponibles · les possibilités d’administration et d’évolution · les coûts de licence, d’abonnement, de maintenance et d’intégration · les accès, les responsabilités et les conditions de reprise.',
  ],
  sideLabel: 'Technologies que nous maîtrisons',
  sideFacts: [
    '**Shopify** — solide et rapide à lancer.',
    '**WooCommerce** — souple et évolutif.',
    '**Solutions sur mesure** — quand le projet le justifie.',
  ],
};

// Section 7 — Lancer, refondre ou faire évoluer (roadmap 4 étapes).
export const processIntro: SectionIntro = {
  eyebrow: 'Notre méthode',
  title: 'Créer une boutique ou faire évoluer l’existante.',
  lead: 'Nous adaptons le projet à votre point de départ. Une nouvelle boutique, une refonte ou une migration ne nécessitent pas les mêmes décisions.',
};

export const processSteps: Array<NumberedItem & { deliverable: string }> = [
  {
    title: 'Cadrer le commerce',
    body: 'Nous clarifions les objectifs, les marchés, le catalogue, les opérations et les fonctionnalités nécessaires. Pour une boutique existante, nous analysons les parcours, les contenus et les contraintes de migration.',
    deliverable: 'diagnostic, périmètre, priorités et recommandations',
  },
  {
    title: 'Concevoir les parcours',
    body: "Nous organisons le catalogue, les contenus et les étapes d'achat, puis définissons la direction visuelle et les fonctionnalités à valider.",
    deliverable: 'arborescence, parcours, maquettes et spécifications utiles',
  },
  {
    title: 'Développer et vérifier',
    body: 'Nous mettons en place la boutique et les intégrations prévues, puis vérifions les parcours, le responsive et les fonctionnalités avant la mise en ligne.',
    deliverable: 'environnement de recette, contrôles et corrections',
  },
  {
    title: 'Lancer et transmettre',
    body: "Nous préparons la mise en production, les accès, les modalités de gestion et l'accompagnement prévu au contrat.",
    deliverable: 'mise en ligne, documentation, remise et formation selon le périmètre convenu',
  },
];

export const migrationNote = {
  title: 'Vous avez déjà une boutique ?',
  body: "Nous pouvons commencer par un audit pour déterminer ce qu'il faut conserver, améliorer ou migrer. Les contenus, les données, les URLs et le référencement acquis sont pris en compte dans le plan de transition. Aucun changement de plateforme n'est recommandé automatiquement.",
  cta: { label: 'Parlons de votre boutique actuelle', href: '#contact' } as Cta,
};

// Section 8 — FAQ (rendu centré : `FaqAccordion` centre par défaut).
export const faqIntro: SectionIntro = {
  eyebrow: 'Avant de démarrer',
  title: 'Les questions qui comptent pour votre projet.',
  lead: 'Les réponses aux questions les plus courantes pour vous aider à avancer sereinement.',
};

export const faqItems: FaqItem[] = [
  {
    q: 'Combien coûte une boutique en ligne ?',
    a: "Le budget dépend du catalogue, du design, des fonctionnalités, des paiements, des intégrations et de l'accompagnement. Nos boutiques démarrent à 500 000 FCFA, selon les fonctionnalités. Le montant et les prestations en vigueur sont confirmés dans votre devis.",
  },
  {
    q: 'Y a-t-il des frais après la mise en ligne ?',
    a: "Selon la solution retenue, des frais peuvent concerner l'hébergement, le domaine, les abonnements, les applications, les paiements ou la maintenance. Nous distinguons les coûts de création des frais récurrents avant de valider le projet.",
  },
  {
    q: 'Combien de temps faut-il prévoir ?',
    a: "Le calendrier dépend du périmètre, du catalogue, des intégrations et des validations. Notre délai moyen déclaré est de deux semaines pour un premier livrable — pas nécessairement la mise en ligne finale. Le planning complet est défini selon le projet.",
  },
  {
    q: 'Puis-je conserver mes produits et mes données lors d’une refonte ?',
    a: 'Une migration peut permettre de reprendre les données et contenus utiles. Nous vérifions leur qualité, leur format, les possibilités d’export et les contraintes de la nouvelle solution avant de définir ce qui peut être conservé.',
  },
  {
    q: 'Quels moyens de paiement peut-on intégrer ?',
    a: 'Le choix dépend des pays ciblés, des prestataires disponibles, de la plateforme et de votre éligibilité. Nous étudions les moyens adaptés, notamment Mobile Money ou les paiements internationaux lorsque les conditions le permettent.',
  },
  {
    q: 'Pourrai-je gérer ma boutique moi-même ?',
    a: "Nous définissons les accès, les possibilités d'administration et la formation selon la solution retenue. L'objectif est que votre équipe puisse gérer les opérations prévues dans le périmètre du projet.",
  },
  {
    q: 'Qui possède le domaine, les comptes et le code ?',
    a: 'La titularité des comptes, la remise des accès, les droits sur le code et les licences sont précisés dans les documents contractuels. Les modalités de reprise et de maintenance sont définies dès le cadrage.',
  },
];

// Section 9 — CTA final.
export const finalCta = {
  eyebrow: 'Votre projet e-commerce',
  title: 'Parlons de votre boutique, qu’elle soit à créer ou à faire évoluer.',
  body: 'Présentez-nous vos produits, vos marchés, votre fonctionnement actuel et les objectifs du projet. Nous pourrons définir ensemble un périmètre adapté et les prochaines étapes.',
  ctas: [
    { label: 'Parlons de votre projet', href: '#contact' },
    { label: 'WhatsApp', href: 'https://wa.me/221783438249' },
  ] as [Cta, Cta],
  features: ['Réponse sous 24 h', 'Devis gratuit', 'Vous possédez tout'],
};
