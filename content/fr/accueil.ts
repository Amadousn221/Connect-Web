import type { CaseTeaser, ClientLogo, Cta, FaqItem, Hero } from '../types';

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
// Vague 4 (correction post-déploiement) : titre raccourci (~30 %) sur demande
// PO — même promesse, même rythme. Sous-titre et trust line inchangés.
export const hero: Hero = {
  eyebrow: 'Studio digital — Dakar',
  title:
    'Nous concevons et connectons les outils qui font tourner votre organisation.',
  subtitle:
    'Sites et applications web sur mesure, boutiques e-commerce, plateformes métier, ERP et automatisations. Studio de Dakar au standard international. Vos accès vous appartiennent.',
  ctas: [
    primaryCta,
    // Ancre du slider Cas phares (section id="cas" — ProjectSlider, Lot D).
    { label: 'Voir les réalisations', href: '#cas' },
  ],
  trustLine: ['Réponse sous 24 h', 'Devis gratuit', 'Vos accès vous appartiennent'],
};

// Composite visuel du Hero : ABANDONNÉ (correction post-déploiement). Le Hero
// passe à une image de fond en cover + overlay pétrole. Voir Hero.tsx.

// ── Bande de logos clients (V2.1 — §06.2 du Design Handoff) ───────────────
// 11 clients approuvés. Maison Peinture Sénégal est exclu de la bande (projet
// ERP interne, sans vitrine publique — il reste présent en cas phare).
// Logos fournis par le PO dans /public/assets/logos (PNG détourés, fond
// transparent). 3 encore à fournir : ATTA Africa, SCOD VTC, DDS Medical —
// entrées sans `src`, masquées en prod, signalées [LOGO_MANQUANT] en preview.
export const clientsIntro =
  "Des marques, des commerces et des organisations d'Afrique de l'Ouest et d'ailleurs.";

export const clientLogos: ClientLogo[] = [
  { name: 'ATTA Africa' },
  { name: 'SCOD VTC' },
  { name: 'Link Shop', src: '/assets/logos/link-shop.png' },
  { name: 'Marjan Bijouterie', src: '/assets/logos/marjan-bijouterie.png' },
  { name: 'Luxury Bijouterie by KN', src: '/assets/logos/luxury-bijouterie.png' },
  { name: 'ADA Voyages', src: '/assets/logos/ada-voyages.png' },
  { name: 'Tamou Fishing International', src: '/assets/logos/tamou-fishing.png' },
  { name: 'DDS Medical' },
  { name: 'WAS Africa', src: '/assets/logos/was-africa.png' },
  { name: 'Fahamu Africa', src: '/assets/logos/fahamu-africa.png' },
  { name: 'Sunu Thiossane', src: '/assets/logos/sunu-thiossane.png' },
];

// ── A2 — Bande réassurance : SUPPRIMÉE (Lot D). Hors de l'architecture 13
//    sections de l'audit §04 ; la réassurance est distribuée (§07 : trust line
//    du Hero, point 3 des différenciateurs, section CTA finale).

// ── A3 — Ce qu'on construit (sélecteur besoin) : SUPPRIMÉ (P25). Remplacé par
//    l'AudienceRouter (framing audience/organisation), voir
//    content/fr/audienceRouter.ts + components/sections/AudienceRouter.tsx.

// ── A4 — Pour qui : SECTION SUPPRIMÉE (correction finale). La diversité des
//    cibles est portée par « Du site au système » (multi-segment) et par
//    l'AudienceRouter. Composant WhoForGrid + content/fr/pourqui.ts retirés.

// ── A5 — Services : voir content/fr/services.ts (P25 — 4 Niveau 1 + 3 Système
//    + Conseil, DECISION 03).

// ── A6 — Du site au système : SUPPRIMÉ (P25). Remplacé par une chaîne de
//    modules reliés, voir content/fr/systemRoad.ts +
//    components/sections/SystemRoad.tsx.

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
    group: 'ecommerce',
  },
  { category: 'Plateforme · Mobilité', name: 'SCOD VTC', body: 'Réservation VTC premium à Dakar, tarif fixe garanti.', image: { src: '/assets/real/scod-vtc.jpg', alt: 'Plateforme SCOD VTC' }, group: 'plateforme' },
  { category: 'Institutionnel · ONG', name: 'WAS Africa', body: 'Mouvement de femmes rurales pour la souveraineté alimentaire.', image: { src: '/assets/real/was-africa.jpg', alt: 'Site WAS Africa' }, group: 'institutionnel' },
  { category: 'Site & réservation · Tourisme', name: 'ADA Voyages', body: 'Agence de voyage : Umrah, Hajj, packages et réservation en ligne.', image: { src: '/assets/real/ada-voyages.jpg', alt: 'Site ADA Voyages' }, group: 'entreprise' },
  { category: 'Institutionnel · Éducation', name: 'Sunu Thiossane', body: "Programmes d'échanges culturels internationaux pour jeunes.", image: { src: '/assets/real/sunu-thiossane.jpg', alt: 'Site Sunu Thiossane' }, group: 'institutionnel' },
  { category: 'E-commerce · Bijouterie', name: 'Marjan Bijouterie', body: 'Bijoux en or et argent, tradition et modernité à Dakar.', image: { src: '/assets/real/marjan-bijouterie.jpg', alt: 'Boutique Marjan Bijouterie' }, group: 'ecommerce' },
  { category: 'Site · Industrie', name: 'Tamou Fishing', body: 'Filière pêche : collaboration long terme et export.', image: { src: '/assets/real/tamou-fishing.jpg', alt: 'Site Tamou Fishing' }, group: 'entreprise' },
  { category: 'Institutionnel · ONG', name: 'Fahamu Africa', body: 'Réseaux pour la justice sociale en Afrique.', image: { src: '/assets/real/fahamu-africa.jpg', alt: 'Site Fahamu Africa' }, group: 'institutionnel' },
  { category: 'E-commerce · Multi-catégories', name: 'Link Shop', body: 'Boutique high-tech multi-catégories, paiement sécurisé.', image: { src: '/assets/real/link-shop.jpg', alt: 'Boutique Link Shop' }, group: 'ecommerce' },
  { category: 'Site · Santé', name: 'DDS Medical', body: 'Commande de consommables et matériels médicaux en ligne.', image: { src: '/assets/real/dds-medical.jpg', alt: 'Site DDS Medical' }, group: 'entreprise' },
  { category: 'E-commerce · Luxe', name: 'Luxury Bijouterie', body: 'Boutique de bijouterie or & argent, livraison mondiale.', image: { src: '/assets/real/luxury-bijouterie.jpg', alt: 'Boutique Luxury Bijouterie' }, group: 'ecommerce' },
];
export const casesLink: Cta = { label: 'Voir toutes les réalisations', href: '/realisations' };

/** Sélectionne des teasers par nom (sections « livrés » des pages d'offre). */
export function pickCaseTeasers(names: string[]): CaseTeaser[] {
  return names
    .map((n) => caseTeasers.find((c) => c.name === n))
    .filter((c): c is CaseTeaser => Boolean(c));
}

// ── A9 — Preuve (« On montre, on ne prétend pas ») : SUPPRIMÉE (P25 — méta-
//    discours redondant avec Réalisations, cf. brief P25 §S08/§4 suppressions).

// ── A10 — Méthode : voir content/fr/methode.ts (P25 — 4 phases, MethodStepper).

// ── A11 — FAQ ─────────────────────────────────────────────────────────
// P25 §S11 : titre changé (« Les questions qu'on nous pose vraiment. »),
// contenu/comportement de FaqAccordion inchangés (partagé avec les pages
// d'offre via OfferPage.tsx — ne pas y toucher).
export const faqIntro = {
  eyebrow: 'Questions fréquentes',
  title: 'Les questions qu’on nous pose vraiment.',
};

// 6 questions §06.10 du Design Handoff, orientées objection.
export const faqItems: FaqItem[] = [
  {
    q: 'Combien coûte un projet avec vous ?',
    a: "À titre indicatif : un site vitrine démarre à 3 000 000 FCFA, une boutique en ligne à 500 000 FCFA, une plateforme métier se chiffre selon les besoins. Chaque devis est ensuite cadré sur le projet réel — pas de package figé. Le cadrage et le devis sont gratuits.",
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
  submittingLabel: 'Envoi…',
  reassurance: 'Réponse sous 24 h · Devis gratuit · Sans engagement',
  // Vague 4 : formulaire branché sur /api/contact (POST). Le stub back se
  // contente d'accepter la requête — le vrai câblage CRM/notification est un
  // jalon ultérieur (voir app/api/contact/route.ts).
  successMessage: 'Reçu. On revient vers vous sous 24 h.',
  errorMessage:
    "L'envoi a échoué. Réessayez, ou appelez-nous / écrivez sur WhatsApp.",
};
