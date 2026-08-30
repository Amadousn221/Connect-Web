import type {
  AudiencePanel,
  CaseTeaser,
  ClientLogo,
  Cta,
  FaqItem,
  Hero,
  HeroShot,
  ProofItem,
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

// ── A3 — Vos besoins : voir content/fr/besoins.ts (Lot C — tableau statique
//    « Vous voulez… / Nous construisons… », §06.3 du Design Handoff).
//    L'ancien sélecteur interactif (needOptions/needCtaBand) est abandonné.

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

// ── A5 — Services : voir content/fr/services.ts (Lot B — grille 5 + Conseil,
//    DECISION 23). L'ancien modèle « 6 cartes plates » (offersIntro/offerCards)
//    est remplacé par la hiérarchie carte parente + Niveau 2 + Conseil.

// ── A6 — Du site au système : voir content/fr/systeme.ts (Lot C — bloc
//    narratif 2 paragraphes, §06.8). Les composants « road » (systemRoad) et
//    « trajectoires » interactifs sont abandonnés (audit §04 : on resserre).

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

// ── A10 — Méthode : voir content/fr/methode.ts (Lot C — 3 étapes, <ol>,
//    §06.9). L'ancienne version « 6 étapes + rail scroll-spy » est abandonnée.

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
