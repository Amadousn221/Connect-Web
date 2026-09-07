import type {
  AudienceCard,
  CaseTeaser,
  ClientLogo,
  Cta,
  FaqItem,
  Hero,
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
// Vague 4 : titre raccourci (~30 %) sur demande PO — même promesse, même rythme.
// Refonte Accueil — D26 : Hero purement typographique sur bleu profond, SANS
// image (override PO). Sous-titre resserré à une seule phrase (brief S01/§09).
// Copy V1 (validée PO) — remplace la formulation « Option A » ci-dessus.
export const hero: Hero = {
  eyebrow: 'Sur le terrain, comme en ligne',
  title: 'Nous construisons les outils numériques qui font avancer votre activité.',
  subtitle:
    'Site vitrine, boutique en ligne, application métier, CRM ou automatisation : Connect Web réunit les expertises nécessaires pour concevoir un système cohérent, adapté à votre organisation et à votre marché.',
  ctas: [
    primaryCta,
    // Ancre du slider Cas phares (section id="cas" — ProjectSlider, Lot D).
    { label: 'Découvrir nos réalisations', href: '#cas' },
  ],
  trustLine: [
    'Basés à Dakar',
    'Projets locaux et internationaux',
    'Accompagnement après la mise en ligne',
  ],
};

// ── Bande de logos clients (V2.1 — §06.2 du Design Handoff) ───────────────
// 11 clients approuvés. Maison Peinture Sénégal est exclu de la bande (projet
// ERP interne, sans vitrine publique — il reste présent en cas phare).
// Logos fournis par le PO dans /public/assets/logos (PNG détourés, fond
// transparent). 3 encore à fournir : ATTA Africa, SCOD VTC, DDS Medical —
// entrées sans `src`, masquées en prod, signalées [LOGO_MANQUANT] en preview.
// Copy V1 — bande de logos rattachée à la réassurance (StatsBlock), agrandie.
export const clientsIntro = 'Ils nous ont confié leurs projets';

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
//    du Hero, point 3 du Wedge, section CTA finale).

// ── A3 — Ce qu'on construit (sélecteur) — RESTAURÉ (version d'avant la refonte
//    V2.1). Rendu par components/sections/NeedSelector.tsx. La variante tableau
//    statique du Lot C (content/fr/besoins.ts + NeedTable) est écartée.
// Refonte Accueil — brief §04-S05 / D32. Section « À qui on parle » : la
// reconnaissance d'audience (« ça, c'est moi ») + démonstration de « on part du
// réel ». Titre resserré (l'ancien « on part de votre besoin… » faisait doublon
// avec le différenciateur #1). Un seul CTA par situation, la bande CTA
// intermédiaire est supprimée (on ne garde que Hero + CTA final).
// Copy V1 — section simplifiée (4 profils, plus d'accordéon « situation/
// réponse/on livre » : un titre + une description, un seul lien de section).
export const audienceIntro = {
  eyebrow: 'À qui nous parlons',
  title: 'Des organisations différentes, avec le même besoin : avancer.',
  lead: "Nous accompagnons les structures qui veulent transformer une idée, résoudre un problème concret ou mieux faire travailler leurs outils numériques.",
};

export const audienceCards: AudienceCard[] = [
  {
    key: 'pme',
    title: 'Entreprises et PME',
    body: "Vous avez besoin d'un site, d'une application ou d'un système qui soutient réellement votre activité, sans devenir une charge supplémentaire pour votre équipe.",
  },
  {
    key: 'ecommerce',
    title: 'Marques et e-commerce',
    body: 'Vous voulez vendre en ligne, structurer vos commandes, suivre vos performances et offrir une expérience cohérente à vos clients.',
  },
  {
    key: 'institutions',
    title: 'Institutions et organisations',
    body: 'Vous devez informer, mobiliser ou rendre un service accessible à différents publics, avec une plateforme claire, fiable et facile à administrer.',
  },
  {
    key: 'croissance',
    title: 'Équipes en croissance',
    body: "Vos outils se multiplient, les tâches manuelles s'accumulent et les informations circulent mal. Nous vous aidons à remettre de la cohérence dans l'ensemble.",
  },
];

export const audienceLink: Cta = {
  label: "Trouver l'accompagnement adapté",
  href: '/services/conseil-strategie',
};

// ── A4 — Pour qui : SECTION SUPPRIMÉE (correction finale). La diversité des
//    cibles est portée par « Du site au système » (multi-segment) et par les
//    besoins (NeedSelector). Composant WhoForGrid + content/fr/pourqui.ts retirés.

// ── A5 — Services : voir content/fr/services.ts (Lot B — grille 5 + Conseil,
//    DECISION 23). L'ancien modèle « 6 cartes plates » (offersIntro/offerCards)
//    est remplacé par la hiérarchie carte parente + Niveau 2 + Conseil.

// ── A6 — Du site au système ─────────────────────────────────────────────
// Fusion des anciennes sections « road » (6 nœuds) et « trajectoires » (4
// chaînes) : un seul bloc, 4 éléments besoin → solution, multi-segment
// (présenter / vendre / piloter / automatiser). Icône par élément. Clients
// cités = FACTS (DECISION 12/13).
// Refonte Accueil — brief §04-S07 : narrative avant schématique. Titre P08-A7.
// Cadre honnête assumé + mini-écosystème modulaire (modules reliés par des
// filets fins, pas un diagramme d'ingénieur).
// Refonte Accueil — Lot 2 : la section est devenue une exploration interactive.
// Les modules et leur contenu vivent dans `content/fr/systemExplorer.ts`.
// `framing` est conservé (cadre honnête, rendu sous l'explorateur).
// Copy V1 — « Nos capacités » : reformulation + ajout d'un CTA de conclusion.
export const systemIntro = {
  eyebrow: 'Nos capacités',
  title: "Un projet peut commencer par un site. Il ne s'arrête pas forcément là.",
  lead: 'Sélectionnez un élément pour comprendre son rôle dans votre environnement numérique.',
  framing:
    "Chaque organisation n'a pas besoin de tous ces éléments. Notre rôle est d'identifier la combinaison utile, puis de la construire étape par étape.",
};

export const systemCta: Cta = { label: 'Parler de votre organisation', href: '#contact' };

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

// ── A9 — Preuve. Angle unique : la VÉRIFIABILITÉ (distinct de « du site au
//    système » et de « standard international », traités ailleurs).
export const proofIntro = {
  eyebrow: 'Preuve',
  title: 'On montre, on ne prétend pas.',
  lead: "Sur cette page, tout est vérifiable : les clients sont nommés, les captures sont réelles, les chiffres sont ceux qu'on peut tenir.",
};

// Vague 4 : 3 piliers (1 phrase + 1 icône), calés sur le chapô ci-dessus.
export const proofItems: ProofItem[] = [
  {
    icon: 'users',
    title: 'Des clients nommés',
    body: 'ATTA Africa, SCOD VTC, WAS Africa, Maison Peinture Sénégal — vous pouvez les vérifier.',
  },
  {
    icon: 'image',
    title: 'Des captures réelles',
    body: "Ce que vous voyez ici, c'est du travail livré, pas des maquettes de démonstration.",
  },
  {
    icon: 'shield',
    title: 'Des chiffres qu’on peut tenir',
    body: "Pas de « +500 projets » invérifiable : les chiffres affichés sont ceux qu'on assume.",
  },
];

// ── A10 — Méthode : voir content/fr/methode.ts (Lot C — 3 étapes, <ol>,
//    §06.9). L'ancienne version « 6 étapes + rail scroll-spy » est abandonnée.

// ── A11 — FAQ ─────────────────────────────────────────────────────────
// Copy V1 (validée PO) — remplace les 6 questions ci-dessus.
// ⚠️ Tarif site vitrine : 300 000 FCFA (V1) vs 3 000 000 FCFA (version
// précédente ci-dessus, DECISION antérieure) — écart x10 à faire confirmer
// par le PO avant mise en ligne (le tarif boutique, 500 000 FCFA, est stable
// entre les deux versions).
export const faqIntro = {
  eyebrow: 'Questions fréquentes',
  title: "Les questions que l'on nous pose avant de commencer.",
};

export const faqItems: FaqItem[] = [
  {
    q: 'Combien coûte un projet avec Connect Web ?',
    a: 'Le tarif dépend du périmètre, des fonctionnalités et du niveau d’accompagnement. Un site vitrine commence à partir de 300 000 FCFA et une boutique en ligne à partir de 500 000 FCFA, selon les fonctionnalités. Un devis détaillé est établi après le premier échange.',
  },
  {
    q: 'Combien de temps faut-il pour lancer un projet ?',
    a: 'Le calendrier dépend du type de projet et de la disponibilité des contenus. Nous organisons le travail par étapes afin de vous présenter rapidement une première version exploitable.',
  },
  {
    q: 'Pouvez-vous reprendre un projet existant ?',
    a: "Oui. Nous commençons par analyser l'existant afin de déterminer ce qui peut être conservé, amélioré ou doit être reconstruit.",
  },
  {
    q: 'Travaillez-vous uniquement au Sénégal ?',
    a: 'Non. Nous sommes basés à Dakar et pouvons accompagner des organisations locales comme internationales.',
  },
  {
    q: 'Assurez-vous le suivi après la mise en ligne ?',
    a: "Oui. Selon le projet, nous pouvons assurer la maintenance, le suivi, les améliorations et l'accompagnement de votre équipe.",
  },
  {
    q: 'Pouvez-vous connecter nos outils existants ?',
    a: 'Oui, lorsque leurs API et leurs conditions techniques le permettent. Nous vérifions cette faisabilité avant de confirmer l’intégration.',
  },
];

export const faqOutro = {
  text: 'Une autre question ?',
  link: { label: 'Contactez-nous', href: '#contact' } as Cta,
};

// ── A12 — Contact — RESTAURÉ (version d'avant la refonte V2.1). Rendu par
//    components/sections/ContactSection.tsx + ContactForm.tsx. Formulaire UI
//    seule, non branché (câblage CRM = M5). La variante FinalCta + ProjectForm
//    + modales du Lot D2 est écartée.
// Copy V1 — le titre n'affirme plus de délai de réponse chiffré (le délai réel
// reste à confirmer par le PO, voir `contactFormContent.reassurancePending`).
export const contactIntro = {
  eyebrow: 'Parlons de votre projet',
  title: 'Décrivez-nous votre besoin. Nous vous aiderons à clarifier la prochaine étape.',
  lead: 'Site, boutique, application, système interne ou automatisation : expliquez-nous où vous en êtes et ce que vous souhaitez améliorer.',
};

export const contactPoints = [
  { label: 'contact@connect-web.tech', href: 'mailto:contact@connect-web.tech' },
  { label: '+221 77 900 62 82', href: 'tel:+221779006282' },
  { label: '+221 78 343 82 49', href: 'tel:+221783438249' },
  { label: 'WhatsApp', href: 'https://wa.me/221783438249' },
  { label: 'Rond-point SCAT-URBAM, G49 · Dakar, Sénégal', href: '' },
];

export const contactPerson = {
  role: 'Votre interlocuteur',
  body: 'Une personne dédiée, du premier échange à la mise en ligne.',
  // nom + photo : à valider (jamais de placeholder visible côté public — géré par le flag)
};

// Copy V1 — champs alignés sur le brief (Nom, Entreprise, Email, Téléphone,
// Type de projet, Budget indicatif, Votre besoin). `reassurancePending` :
// le délai de réponse réel n'est pas confirmé par le PO — jamais affirmé en
// production, seulement signalé en preview (voir ContactForm.tsx).
export const contactFormContent = {
  title: 'Parlez-nous de votre projet',
  projectTypes: [
    'Site vitrine',
    'Boutique en ligne',
    'Application web / logicielle',
    'CRM / ERP',
    'Automatisation / IA',
    'Marketing / acquisition',
    'Je ne sais pas encore',
  ],
  budgets: [
    'Moins de 500 000 FCFA',
    '500 000 – 1 500 000 FCFA',
    '1 500 000 – 5 000 000 FCFA',
    'Plus de 5 000 000 FCFA',
    'Je ne sais pas encore',
  ],
  submitLabel: 'Envoyer ma demande',
  submittingLabel: 'Envoi…',
  reassurance: 'Premier échange sans engagement · Vos informations restent confidentielles',
  reassurancePending: 'Délai de réponse — à confirmer',
  // Vague 4 : formulaire branché sur /api/contact (POST). Le stub back se
  // contente d'accepter la requête — le vrai câblage CRM/notification est un
  // jalon ultérieur (voir app/api/contact/route.ts).
  successMessage: 'Reçu. On revient vers vous rapidement.',
  errorMessage:
    "L'envoi a échoué. Réessayez, ou appelez-nous / écrivez sur WhatsApp.",
};
