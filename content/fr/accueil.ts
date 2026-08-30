import type {
  AudiencePanel,
  CaseTeaser,
  ClientLogo,
  Cta,
  FaqItem,
  Hero,
  HeroShot,
  NeedOption,
  OfferCard,
  ProcessStep,
  ProofItem,
  RoadNode,
  Trajectory,
  TrustItem,
} from '../types';

// Copy de l'Accueil — extraite fidèlement de `Connect Web - Accueil V2.dc.html`.
// Tout élément « À valider » de la maquette est signalé ici (toValidate / note)
// et rendu via <ValidationNote> ; aucune donnée n'est inventée.

export const primaryCta: Cta = { label: 'Parlons de votre projet', href: '#contact' };

// ── A1 — Hero (V2.1 — Lot A du Design Handoff) ─────────────────────────────
// Hero statique : la rotation 3 messages de la V2 est abandonnée (audit §01.3
// P0/P1 : Hero descriptif + visuel de fond décoratif = problème n°1).
// Copy : DECISION 20 (journal de décisions), formulation « Option A », validée
// PO le 28 août 2026. Le §06.1 du Design Handoff (variante « Direction C »)
// est une RECOMMENDATION, remplacée ici par la décision consignée.
export const hero: Hero = {
  eyebrow: 'Studio digital — Dakar',
  title:
    'Nous concevons, développons et connectons les outils numériques qui font tourner votre organisation.',
  subtitle:
    'Sites et applications web sur mesure, boutiques e-commerce, plateformes métier, ERP et automatisations. Studio de Dakar au standard international. Vos accès vous appartiennent.',
  ctas: [
    primaryCta,
    // Ancre du carrousel Réalisations (section id="cas" — CaseTeaserCarousel).
    { label: 'Voir les réalisations', href: '#cas' },
  ],
  trustLine: ['Réponse sous 24 h', 'Devis gratuit', 'Vos accès vous appartiennent'],
};

// Composite visuel du Hero — captures RÉELLES de projets, jamais de mockup
// (§06.1, correction anti-slop n°1). Seule la capture SCOD est disponible dans
// le dépôt ; ATTA (boutique) et « ATTA reporting automatisé OU ERP Odoo Maison
// Peinture » sont à fournir par le PO. Les tuiles manquantes ne s'affichent
// qu'en preview (repère « À valider »), jamais en production.
export const heroShots: HeroShot[] = [
  {
    src: '/assets/real/scod-vtc.jpg',
    alt: "Capture d'écran de la plateforme de réservation SCOD VTC",
  },
  {
    alt: "Capture d'écran de la boutique ATTA Africa",
    missing: 'ATTA Africa — capture boutique',
  },
  {
    alt: "Capture d'écran du reporting automatisé d'ATTA Africa ou de l'ERP Odoo Maison Peinture",
    missing: 'ATTA — reporting automatisé, ou ERP Odoo Maison Peinture',
  },
];

// ── Bande de logos clients (V2.1 — §06.2 du Design Handoff) ───────────────
// 11 clients approuvés. Maison Peinture Sénégal est exclu de la bande (projet
// ERP interne, sans vitrine publique — il reste présent en cas phare).
// Fichiers logos à fournir par le PO dans /public/assets/logos ; tant qu'ils
// manquent, chaque entrée rend un placeholder explicite [LOGO_MANQUANT].
export const clientsIntro =
  "Des marques, des commerces et des organisations d'Afrique de l'Ouest et d'ailleurs.";

export const clientLogos: ClientLogo[] = [
  { name: 'ATTA Africa' },
  { name: 'SCOD VTC' },
  { name: 'Link Shop' },
  { name: 'Marjan Bijouterie' },
  { name: 'Luxury Bijouterie by KN' },
  { name: 'ADA Voyages' },
  { name: 'Tamou Fishing International' },
  { name: 'DDS Medical' },
  { name: 'WAS Africa' },
  { name: 'Fahamu Africa' },
  { name: 'Sunu Thiossane' },
];

// ── A2 — Bande réassurance ─────────────────────────────────────────────────
export const trustItems: TrustItem[] = [
  {
    title: 'On vous accompagne après la mise en ligne',
    body: 'Formation, suivi, évolutions. On ne disparaît pas à la livraison.',
  },
  {
    title: 'Tout vous appartient',
    body: 'Accès, domaine, comptes : à votre nom, dès le premier jour.',
  },
  {
    title: 'Terrain local + standard international',
    body: 'Mobile Money comme paiement international, même exigence de qualité.',
  },
  {
    title: 'Une équipe qui cadre avant de coder',
    body: "Un diagnostic d'abord. On construit ce qui compte, pas ce qui impressionne.",
  },
];

// ── A3 — Ce qu'on construit (sélecteur) ────────────────────────────────────
export const needIntro = {
  eyebrow: "Ce qu'on construit",
  title: 'On part de votre besoin, pas de notre catalogue.',
  lead: "Digitaliser, ce n'est pas acheter un outil. C'est régler un problème précis — être trouvé, vendre, arrêter de tout gérer à la main — puis relier les pièces entre elles.",
};

export const needOptions: NeedOption[] = [
  {
    key: 'visible',
    label: 'Être visible et crédible',
    hint: 'Sites corporate, institutionnels, ONG, écoles',
    situation:
      "« On existe depuis des années, mais quand quelqu'un nous cherche en ligne, il ne trouve rien de sérieux. »",
    answer:
      'On construit une présence qui tient la comparaison avec vos homologues internationaux : structure claire, contenu qui explique vraiment ce que vous faites, performance et référencement soignés dès le départ.',
    delivers: ['Site corporate', 'Site institutionnel / ONG', 'Site école & formation', 'Refonte & SEO'],
    link: { label: 'Découvrir', href: '/services/sites-entreprise' },
  },
  {
    key: 'vendre',
    label: 'Vendre et se développer',
    hint: 'E-commerce, cross-border, paiement mobile',
    situation:
      "« On vend bien à Dakar. Mais la diaspora nous écrit, et on n'a aucun moyen propre de l'encaisser. »",
    answer:
      'On construit des boutiques faites pour vendre au-delà des frontières : catalogue, paiement mobile et international côte à côte, livraison, relances. Le cross-border est notre terrain, pas une option.',
    delivers: ['Shopify', 'WooCommerce', 'Paiement mobile & international', 'Livraison & logistique'],
    link: { label: 'Découvrir', href: '/services/boutiques-en-ligne' },
  },
  {
    key: 'operations',
    label: 'Digitaliser ses opérations',
    hint: 'Plateformes métier, portails, réservation, PWA',
    situation:
      '« Les demandes arrivent par WhatsApp, les réservations dans un tableur, et personne ne sait où en est quoi. »',
    answer:
      "On construit l'outil qui remplace le tableur : réservation, portail client ou fournisseur, suivi de dossiers, application mobile installable. Un seul endroit où l'information vit.",
    delivers: ['Plateforme de réservation', 'Portail client', 'Application / PWA', 'Espace de gestion'],
    link: { label: 'Découvrir', href: '/services/plateformes-applications' },
  },
  {
    key: 'piloter',
    label: 'Piloter son activité',
    hint: 'CRM, ERP / Odoo, POS, stocks, reporting',
    capabilityBadge: true,
    situation:
      '« Les ventes sont dans la boutique, les stocks sur un carnet, les devis dans une boîte mail. »',
    answer:
      'On met en place la couche de gestion et on la relie à ce qui vend déjà : clients, devis, stocks, factures, tableaux de bord. Vous voyez votre activité en un seul endroit, à jour.',
    delivers: ['Odoo / ERP', 'CRM', 'Stocks & POS', 'Reporting'],
    link: { label: 'Découvrir', href: '/services/crm-erp-integrations' },
  },
  {
    key: 'automatiser',
    label: 'Automatiser & gagner du temps',
    hint: 'Workflows, intégrations, notifications, IA appliquée',
    capabilityBadge: true,
    situation:
      '« Chaque commande demande cinq copier-coller. Multipliés par trente par jour. »',
    answer:
      "On identifie les tâches répétitives et on les fait disparaître : traitement des commandes, relances, notifications, reporting automatique. L'IA n'intervient que là où elle règle un problème réel.",
    delivers: ['Workflows automatisés', 'Intégrations entre outils', 'Notifications & relances', 'IA appliquée aux processus'],
    link: { label: 'Découvrir', href: '/services/ia-automatisation' },
  },
];

export const needCtaBand = {
  title: 'Pas sûr par où commencer ?',
  body: "C'est le cas le plus fréquent. On cadre votre situation, on identifie ce qui bloque, et on vous dit ce qui compte en premier — sans engagement.",
  primary: { label: 'Conseil & audit gratuit', href: '#contact' } as Cta,
  secondary: { label: 'Découvrir nos solutions', href: '#systeme' } as Cta,
};

// ── A4 — Pour qui (onglets segments) ──────────────────────────────────────
export const audienceIntro = {
  eyebrow: 'Pour qui',
  title: 'Des organisations très différentes, un même point de départ.',
  lead: "Une boutique, une ONG et une école n'ont pas les mêmes besoins — mais toutes se heurtent au même mur : ce qui marche à la main ne tient plus à l'échelle.",
};

export const audiencePanels: AudiencePanel[] = [
  {
    key: 'pme',
    tab: 'Entreprises & PME',
    title: 'Vous vendez à des professionnels, et votre crédibilité se joue en ligne.',
    body: "Vos prospects vous cherchent avant de vous appeler. Un site daté ou un catalogue impossible à consulter coûte des affaires que vous ne verrez jamais. On construit une présence crédible, puis les outils de commande et de suivi qui vont avec.",
    need: 'Être trouvé, rassurer, faciliter la commande',
    build: "Site d'entreprise, catalogue, commande en ligne, CRM",
    cta: { label: "Discutons de votre site d'entreprise", href: '#contact' },
    image: { src: '/assets/real/dds-medical.jpg', alt: 'Site DDS Medical' },
    client: { name: 'DDS Medical', note: 'Commande de consommables médicaux en ligne', toValidate: true },
  },
  {
    key: 'commerce',
    tab: 'Commerces & marques',
    title: "Vous vendez déjà. Le problème, c'est tout ce qu'il y a autour.",
    body: "Les commandes arrivent en messages privés, les paiements par plusieurs canaux, le stock se compte à la main. On construit une boutique qui encaisse localement et à l'international, puis on branche le stock et les relances dessus.",
    need: 'Vendre en continu, encaisser partout, suivre le stock',
    build: 'Boutique en ligne, paiement mobile & international, gestion de stock',
    cta: { label: 'Discutons de votre boutique', href: '#contact' },
    image: { src: '/assets/real/marjan-bijouterie.jpg', alt: 'Boutique Marjan Bijouterie' },
    client: { name: 'Marjan Bijouterie', note: 'Bijoux or & argent, vente en ligne depuis Dakar', toValidate: true },
  },
  {
    key: 'ong',
    tab: 'ONG & institutions',
    title: "Votre mission mérite mieux qu'un site que personne ne lit.",
    body: "Bailleurs, partenaires, membres et médias ne cherchent pas la même chose. On structure la présence pour que chacun trouve ce qui le concerne — plaidoyer, rapports, terrain — et on outille la collecte d'informations et l'animation du réseau.",
    need: 'Crédibilité, plaidoyer, mobilisation, redevabilité',
    build: 'Site institutionnel multilingue, publications, formulaires, newsletter',
    cta: { label: 'Discutons de votre site institutionnel', href: '#contact' },
    image: { src: '/assets/real/was-africa.jpg', alt: 'Site WAS Africa' },
    client: { name: 'WAS Africa', note: 'Mouvement de femmes rurales, souveraineté alimentaire', toValidate: true },
  },
  {
    key: 'ecoles',
    tab: 'Écoles & formation',
    title: 'Recruter des apprenants, puis gérer leur parcours.',
    body: "Les familles et les candidats comparent en ligne avant de se déplacer. On construit la vitrine qui donne envie, puis l'inscription, le suivi et les échanges qui évitent de tout reprendre à la main chaque rentrée.",
    need: 'Attirer, inscrire, informer, suivre',
    build: 'Site programmes, candidature en ligne, espace apprenant, e-mailing',
    cta: { label: 'Discutons de votre plateforme', href: '#contact' },
    image: { src: '/assets/real/sunu-thiossane.jpg', alt: 'Site Sunu Thiossane' },
    client: { name: 'Sunu Thiossane', note: "Programmes d'échanges culturels internationaux", toValidate: true },
  },
  {
    key: 'industrie',
    tab: 'Industrie & filières',
    title: 'Exporter demande des preuves, pas des promesses.',
    body: "Acheteurs et partenaires étrangers veulent voir vos capacités, vos volumes et vos certifications avant d'engager la discussion. On construit la présence qui tient cet examen, puis les outils de suivi des commandes et de la production.",
    need: 'Crédibilité export, traçabilité, suivi des commandes',
    build: 'Site export multilingue, portail partenaires, suivi & reporting',
    cta: { label: 'Discutons de votre projet export', href: '#contact' },
    image: { src: '/assets/real/tamou-fishing.jpg', alt: 'Site Tamou Fishing' },
    client: { name: 'Tamou Fishing', note: 'Filière pêche, collaboration long terme et export', toValidate: true },
  },
  {
    key: 'entrepreneurs',
    tab: 'Entrepreneurs',
    title: 'Une idée à lancer, un budget à ne pas gaspiller.',
    body: "On commence petit et juste : la version qui prouve que ça marche, avec les fondations pour grandir ensuite. Pas de plateforme géante payée avant d'avoir un seul client.",
    need: 'Lancer vite, tester, garder la main sur les coûts',
    build: 'Première version utile, réservation ou commande, base pour évoluer',
    cta: { label: 'Discutons de votre lancement', href: '#contact' },
    image: { src: '/assets/real/scod-vtc.jpg', alt: 'Plateforme SCOD VTC' },
    client: { name: 'SCOD VTC', note: 'Réservation VTC premium à Dakar, tarif fixe', toValidate: true },
  },
];

// ── A5 — Services (grille) ────────────────────────────────────────────────
export const offersIntro = {
  eyebrow: 'Services',
  title: 'Nos services, en clair.',
  lead: 'Vous savez déjà ce que vous cherchez ? Allez directement à la page qui vous concerne.',
};

export const offerCards: OfferCard[] = [
  { title: 'Boutique en ligne', body: "Vendre au Sénégal et à l'international, paiement mobile compris.", href: '/services/boutiques-en-ligne' },
  { title: "Site d'entreprise", body: 'Une présence crédible, rapide et bien référencée.', href: '/services/sites-entreprise' },
  { title: 'Marketing', body: 'Attirer, convertir, fidéliser — au-delà de la mise en ligne.', href: '/services/marketing-acquisition' },
  { title: 'Plateformes & applications', body: 'Réservation, portails, suivi de dossiers, PWA.', href: '/services/plateformes-applications' },
  { title: 'ERP / CRM (Odoo)', body: 'Clients, devis, stocks et factures dans un seul système.', href: '/services/crm-erp-integrations' },
  { title: 'Automatisation & IA', body: 'Les tâches répétitives tournent sans votre équipe.', href: '/services/ia-automatisation' },
];

export const offersToValidate =
  "URL définitives des pages Site d'entreprise, Plateformes & applications et ERP/CRM avant publication.";

// ── A6 — Du site au système (road) ───────────────────────────────────────
export const systemIntro = {
  eyebrow: 'Du site au système',
  title: "Digitaliser une organisation, ce n'est pas seulement créer un site.",
  lead: "C'est relier ce qui vous fait exister, vendre et fonctionner. On ne suppose pas que vous avez besoin de tout : on construit ce qui compte, puis on connecte.",
};

export const systemRoadLabel = 'Six points d’entrée dans le système';
export const systemRoad: RoadNode[] = [
  { label: 'Présence', desc: 'On vous trouve, on vous croit' },
  { label: 'Acquisition', desc: 'Des visiteurs qui deviennent des contacts' },
  { label: 'Vente', desc: 'Encaisser ici et ailleurs' },
  { label: 'Gestion', desc: 'Clients, stocks, devis au même endroit' },
  { label: 'Automatisation', desc: 'Les tâches répétitives tournent toutes seules' },
  { label: 'Productivité', desc: "L'IA au service de vos équipes, pas l'inverse" },
];

// ── A7 — Trajectoires ────────────────────────────────────────────────────
export const trajectoriesLabel = 'Quatre trajectoires réelles, quatre points de départ';
export const trajectories: Trajectory[] = [
  { chain: ['Site', 'formulaire', 'CRM'], body: 'Les demandes arrêtent de se perdre dans les boîtes mail.' },
  { chain: ['Boutique', 'stock', 'ERP'], body: 'Ce qui se vend se déduit, se facture et se compte automatiquement.' },
  { chain: ['Application', 'base de données', 'automatisation'], body: "L'outil métier devient la source de vérité de l'équipe." },
  { chain: ['Portail', 'workflow', 'reporting'], body: 'Chaque dossier suit un chemin clair, et on peut le mesurer.' },
];
export const trajectoriesLink: Cta = { label: 'Comprendre notre approche', href: '/agence' };

// ── A8 — Réalisations (carrousel, contenu figé M2 → WordPress M3) ─────────
export const casesIntro = {
  eyebrow: 'Réalisations',
  title: 'Des projets qui tournent, pour de vraies organisations.',
  lead: 'Commerce, mobilité, ONG, éducation, industrie, santé — la diversité des secteurs est ce qui nous rend utiles au vôtre.',
};

export const caseTeasers: CaseTeaser[] = [
  {
    category: 'E-commerce & automatisation · Cross-border',
    name: 'ATTA Africa',
    body: "Cas d'ancrage « du site au système » : boutique cross-border, traitement des commandes, reporting et relances automatisés.",
    pending: true, // visuels + contenu à confirmer avant publication
  },
  { category: 'Plateforme · Mobilité', name: 'SCOD VTC', body: 'Réservation VTC premium à Dakar, tarif fixe garanti.', image: { src: '/assets/real/scod-vtc.jpg', alt: 'Plateforme SCOD VTC' } },
  { category: 'Institutionnel · ONG', name: 'WAS Africa', body: 'Mouvement de femmes rurales pour la souveraineté alimentaire.', image: { src: '/assets/real/was-africa.jpg', alt: 'Site WAS Africa' } },
  { category: 'Site & réservation · Tourisme', name: 'ADA Voyages', body: 'Agence de voyage : Umrah, Hajj, packages et réservation en ligne.', image: { src: '/assets/real/ada-voyages.jpg', alt: 'Site ADA Voyages' } },
  { category: 'Institutionnel · Éducation', name: 'Sunu Thiossane', body: "Programmes d'échanges culturels internationaux pour jeunes.", image: { src: '/assets/real/sunu-thiossane.jpg', alt: 'Site Sunu Thiossane' } },
  { category: 'E-commerce · Bijouterie', name: 'Marjan Bijouterie', body: 'Bijoux en or et argent, tradition et modernité à Dakar.', image: { src: '/assets/real/marjan-bijouterie.jpg', alt: 'Boutique Marjan Bijouterie' } },
  { category: 'Site · Industrie', name: 'Tamou Fishing', body: 'Filière pêche : collaboration long terme et export.', image: { src: '/assets/real/tamou-fishing.jpg', alt: 'Site Tamou Fishing' } },
  { category: 'Institutionnel · ONG', name: 'Fahamu Africa', body: 'Réseaux pour la justice sociale en Afrique.', image: { src: '/assets/real/fahamu-africa.jpg', alt: 'Site Fahamu Africa' } },
  { category: 'E-commerce · Multi-catégories', name: 'Link Shop', body: 'Boutique high-tech multi-catégories, paiement sécurisé.', image: { src: '/assets/real/link-shop.jpg', alt: 'Boutique Link Shop' } },
  { category: 'Site · Santé', name: 'DDS Medical', body: 'Commande de consommables et matériels médicaux en ligne.', image: { src: '/assets/real/dds-medical.jpg', alt: 'Site DDS Medical' } },
  { category: 'E-commerce · Luxe', name: 'Luxury Bijouterie', body: 'Boutique de bijouterie or & argent, livraison mondiale.', image: { src: '/assets/real/luxury-bijouterie.jpg', alt: 'Boutique Luxury Bijouterie' } },
];
export const casesLink: Cta = { label: 'Voir toutes les réalisations', href: '/realisations' };

/** Sélectionne des teasers par nom (sections « livrés » des pages d'offre). */
export function pickCaseTeasers(names: string[]): CaseTeaser[] {
  return names
    .map((n) => caseTeasers.find((c) => c.name === n))
    .filter((c): c is CaseTeaser => Boolean(c));
}

// ── A9 — Preuve ─────────────────────────────────────────────────────────
export const proofIntro = {
  eyebrow: 'Preuve',
  title: 'Ce que notre travail démontre.',
  lead: "Pas de chiffres décoratifs : ce qui est affiché ici est vérifiable dans nos réalisations. Le reste attend sa source.",
};

export const proofItems: ProofItem[] = [
  { title: 'Plusieurs secteurs', body: 'Commerce, institutions, ONG, éducation, industrie.', toValidate: true },
  { title: 'Du site au système', body: "On ne s'arrête pas au site : gestion, automatisation, connexion des outils." },
  { title: 'Local + international', body: 'Mobile Money comme paiement international, vente transfrontalière.' },
  { title: 'On reste après', body: 'Formation, suivi et évolutions une fois le projet en ligne.' },
];

// ── A10 — Méthode (6 étapes) ───────────────────────────────────────────
export const processIntro = {
  eyebrow: 'Méthode',
  title: 'On ne commence jamais par coder.',
  lead: 'Six étapes, un livrable concret à chacune. Vous savez toujours où on en est et ce que vous recevez ensuite.',
};

export const processSteps: ProcessStep[] = [
  { num: '01', title: 'Comprendre', body: "On écoute votre activité avant de parler technique : ce que vous vendez, à qui, ce qui coince aujourd'hui et ce que vous voulez atteindre.", deliverable: 'compte-rendu de cadrage' },
  { num: '02', title: 'Diagnostiquer', body: "On regarde l'existant — site, outils, process, canaux de vente — et on identifie ce qui vous fait perdre du temps ou des clients. Certaines choses n'ont pas besoin d'être refaites.", deliverable: 'diagnostic et priorités chiffrées' },
  { num: '03', title: 'Concevoir', body: 'On dessine les parcours et les écrans, et on vous les montre avant la première ligne de code. Vous validez sur du concret, pas sur une description.', deliverable: 'maquettes et parcours validés' },
  { num: '04', title: 'Construire', body: 'On développe par blocs visibles. À chaque étape vous avez un lien pour tester, pas un rapport d’avancement.', deliverable: 'version de recette testable' },
  { num: '05', title: 'Connecter', body: "On relie l'outil au reste : paiement, gestion, e-mails, notifications, reporting. C'est l'étape qui transforme un site en système.", deliverable: 'intégrations et automatisations en place' },
  { num: '06', title: 'Déployer & accompagner', body: 'Mise en ligne, transfert des accès à votre nom, formation de votre équipe. Puis on reste disponibles pour faire évoluer ce qui doit l’être.', deliverable: 'mise en ligne, accès transférés, formation' },
];

// ── A11 — FAQ ─────────────────────────────────────────────────────────
export const faqIntro = {
  eyebrow: 'Questions fréquentes',
  title: 'Ce que les organisations nous demandent avant de démarrer.',
};

export const faqItems: FaqItem[] = [
  {
    q: 'Comment savoir quelle solution est adaptée à mon organisation ?',
    a: "On commence par un échange de cadrage gratuit. On regarde votre activité, ce qui vous prend du temps et ce que vous cherchez à améliorer, puis on vous dit ce qui aurait le plus d'impact — même si ce n'est pas le projet que vous imaginiez au départ.",
  },
  {
    q: "Partez-vous d'un site ou d'un outil existant, ou de zéro ?",
    a: "Les deux. Si l'existant est sain, on l'améliore plutôt que de tout refaire — c'est souvent moins cher et plus rapide. S'il freine votre activité, on le dit clairement et on propose une refonte, en préservant votre référencement et vos contenus.",
  },
  {
    q: 'Combien coûte un projet digital ?',
    a: "Le prix dépend du périmètre : nombre de pages ou d'écrans, complexité des parcours, intégrations à faire, contenus à produire. On construit le devis à partir de ce que vous voulez obtenir, pas d'une grille figée — et on vous dit ce qui peut attendre une phase 2.",
    toValidateNote: "fourchettes « à partir de » par type de projet à confirmer avant publication.",
  },
  {
    q: 'Pouvez-vous intégrer un ERP ou un CRM comme Odoo ?',
    a: "Oui. On met en place la gestion — clients, devis, stocks, factures — et on la connecte à ce qui vend déjà, pour que les informations circulent sans double saisie. On commence par les modules réellement utiles, quitte à en ajouter plus tard.",
  },
  {
    q: "M'accompagnez-vous après la mise en ligne ?",
    a: "Oui — c'est même le cœur de notre différence. On forme votre équipe pour qu'elle soit autonome au quotidien, et on reste disponibles pour les évolutions, les correctifs et les optimisations. Un site qui vit se travaille après le lancement.",
  },
  {
    q: 'Qui possède le domaine, les accès et les comptes ?',
    a: "Vous, entièrement et dès le départ. Domaine, hébergement, boutique, outils : tout est créé à votre nom et les accès vous sont remis. Si un jour vous travaillez avec quelqu'un d'autre, vous partez avec tout. C'est une règle, pas une faveur.",
  },
];

export const faqOutro = { text: 'Une autre question ?', link: { label: 'Parlons-en', href: '#contact' } as Cta };

// ── A12 — Contact (UI seule en M2 ; câblage CRM = M5) ────────────────
export const contactIntro = {
  eyebrow: 'Contact',
  title: 'Décrivez-nous votre projet, on revient vers vous sous 24 h.',
  lead: "Même si vous ne savez pas encore ce dont vous avez besoin. Un échange suffit souvent à y voir clair — et il est gratuit.",
};

export const contactPoints = [
  { label: '+221 77 900 62 82', href: 'tel:+221779006282' },
  { label: '+221 78 343 82 49', href: 'tel:+221783438249' },
  { label: 'WhatsApp', href: 'https://wa.me/221783438249' },
];

export const contactPerson = {
  role: 'Votre interlocuteur',
  body: 'Une personne dédiée, du premier échange à la mise en ligne.',
  // nom + photo : à valider (jamais de placeholder visible côté public — géré par le flag)
};

export const contactFormContent = {
  title: 'Parlez-nous de votre projet',
  orgTypes: [
    'Entreprise / PME',
    'Commerce ou marque',
    'ONG / institution',
    'École / organisme de formation',
    'Industrie / filière',
    'Entrepreneur / porteur de projet',
  ],
  goals: [
    'Être visible et crédible',
    'Vendre et me développer',
    'Digitaliser mes opérations',
    'Piloter mon activité',
    'Automatiser et gagner du temps',
    'Je ne sais pas encore',
  ],
  submitLabel: 'Envoyer ma demande',
  reassurance: 'Réponse sous 24 h · Devis gratuit · Sans engagement',
  // M2 : formulaire non branché (M5). Message affiché à la soumission.
  disabledNote: 'Le formulaire sera actif très bientôt — en attendant, appelez-nous ou écrivez sur WhatsApp.',
};
