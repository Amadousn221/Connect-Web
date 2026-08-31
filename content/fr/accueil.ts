import type {
  CaseTeaser,
  ClientLogo,
  Cta,
  FaqItem,
  Hero,
  HeroShot,
  NeedOption,
  ProofItem,
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
    // Ancre du slider Cas phares (section id="cas" — ProjectSlider, Lot D).
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

// ── A2 — Bande réassurance : SUPPRIMÉE (Lot D). Hors de l'architecture 13
//    sections de l'audit §04 ; la réassurance est distribuée (§07 : trust line
//    du Hero, point 3 du Wedge, section CTA finale).

// ── A3 — Ce qu'on construit (sélecteur) — RESTAURÉ (version d'avant la refonte
//    V2.1). Rendu par components/sections/NeedSelector.tsx. La variante tableau
//    statique du Lot C (content/fr/besoins.ts + NeedTable) est écartée.
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

// ── A4 — Pour qui : voir content/fr/pourqui.ts (Lot D — grille statique 6
//    cases, plus d'onglets). L'ancien AudienceTabs interactif est abandonné.

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

// ── A9 — Preuve — RESTAURÉ (« Ce que notre travail démontre »). Rendu par
//    components/sections/ProofGrid.tsx.
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

// 6 questions §06.10 du Design Handoff, orientées objection. Q1 : les montants
// « à partir de » sont des placeholders PO — tant qu'ils ne sont pas fournis,
// la réponse affichée est la version sans montant (voir FaqAccordion + note).
export const faqItems: FaqItem[] = [
  {
    q: 'Combien coûte un projet avec vous ?',
    // TODO PO : remplir les 2 montants « à partir de » (site institutionnel /
    // boutique). Tant qu'ils sont vides, `a` ci-dessous est la version de repli.
    a: 'Chaque devis est cadré selon le projet réel — pas de package figé. Contactez-nous pour un devis gratuit.',
    toValidateNote:
      'Montants « à partir de » (site institutionnel, boutique) à fournir par le PO avant publication.',
  },
  {
    q: 'Pouvez-vous reprendre un projet existant ?',
    a: 'Oui, si le code ou le CMS le permet. On audite gratuitement pour vous dire ce qui est réutilisable et ce qui doit être refait.',
  },
  {
    q: 'Vous travaillez avec WordPress, Shopify, du sur-mesure ? Comment choisissez-vous ?',
    a: "On choisit selon le projet. WordPress ou Shopify si la solution du marché convient ; du sur-mesure (Next.js, React) quand aucune plateforme n'apporte de vraie valeur. Jamais l'inverse.",
  },
  {
    q: 'Combien de temps pour un projet ?',
    a: 'De 3 à 6 semaines pour un site institutionnel, 6 à 12 semaines pour une boutique complète, 8 à 16 semaines pour une plateforme métier. On fixe le calendrier avec vous au cadrage.',
  },
  {
    q: 'Que se passe-t-il après la mise en ligne ?',
    a: "On reste disponibles pour la maintenance, les évolutions, les intégrations. Vous n'êtes jamais lié à un contrat — vous partez quand vous voulez, et vous avez toujours vos accès.",
  },
  {
    q: 'Travaillez-vous hors du Sénégal ?',
    a: "Oui. ATTA Africa livre depuis Dakar vers l'Europe et l'Amérique du Nord ; on gère l'international quotidiennement. Nos équipes travaillent en français et en anglais.",
  },
];

export const faqOutro = { text: 'Une autre question ?', link: { label: 'Parlons-en', href: '#contact' } as Cta };

// ── A12 — Contact — RESTAURÉ (version d'avant la refonte V2.1). Rendu par
//    components/sections/ContactSection.tsx + ContactForm.tsx. Formulaire UI
//    seule, non branché (câblage CRM = M5). La variante FinalCta + ProjectForm
//    + modales du Lot D2 est écartée.
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
