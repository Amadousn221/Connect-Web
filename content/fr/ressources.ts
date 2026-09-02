// Copy des pages Ressources (catalogue + page ressource). Le contenu vient de
// Sanity ; ce fichier ne porte que l'habillage statique.

export const ressourcesMeta = {
  title: 'Ressources',
  description:
    "Guides, checklists, templates et formations sur l'e-commerce, l'ERP et l'automatisation en Afrique de l'Ouest — écrits pour être appliqués.",
};

export const ressourcesHero = {
  eyebrow: 'Ressources',
  title: 'Guides, checklists et formations pour aller plus loin.',
  subtitle:
    "Certains contenus demandent votre email — pour vous envoyer directement le fichier. Le reste est en accès libre.",
};

export const ressourcesEmpty = {
  title: 'Les premières ressources arrivent bientôt.',
  body: "On prépare des guides courts et applicables — paiement mobile, cross-border, automatisation, Odoo. Une question précise sur votre projet en attendant ? On y répond directement.",
  cta: { label: 'Poser votre question', href: '/#contact' },
};

export const ressourcesNoResults = {
  title: 'Aucune ressource ne correspond à ces filtres.',
  body: 'Essayez d’élargir la sélection ou réinitialisez les filtres.',
};

export const ressourcesCtaBand = {
  title: 'Un projet numérique à cadrer ?',
  body: "On revient vers vous sous 24 h, avec un premier cadrage et un devis gratuit.",
  primary: { label: 'Parlons-en', href: '/#contact' },
  secondary: { label: 'Voir nos réalisations', href: '/realisations' },
};

// Bandeau CTA en fin de page ressource (spec §6.4 Zone 11, master 3.3).
export const ressourceCtaBand = {
  title: "Besoin d'accompagnement sur ce sujet ?",
  body: 'On revient vers vous sous 24 h, avec un premier cadrage et un devis gratuit.',
  primary: { label: 'Parlons-en', href: '/#contact' },
  secondary: { label: 'Voir nos réalisations', href: '/realisations' },
};

// ── Filtres (spec §4.4) ───────────────────────────────────────────────────
export const RESOURCE_SORTS = [
  { param: 'recentes', value: 'recent', label: 'Plus récentes' },
  { param: 'telechargees', value: 'popular', label: 'Plus téléchargées' },
] as const;

export type ResourceSortParam = (typeof RESOURCE_SORTS)[number]['param'];

// Formulaire de capture email (spec §6.4 Zone 7, cas A). L'envoi réel est
// câblé à l'Étape 3.4 (endpoint /api/download-resource).
export const downloadForm = {
  fields: {
    name: 'Nom',
    email: 'Email',
    org: 'Organisation (optionnel)',
    consent:
      "J'accepte de recevoir cette ressource par email + les prochaines publications Connect Web. Désabonnement possible à tout moment.",
  },
  submitLabel: 'Recevoir la ressource par email',
  submitPending: 'Envoi en cours…',
  errorGeneric: "L'envoi a échoué. Réessayez, ou écrivez-nous directement.",
  successFallback:
    'Merci ! Un email avec le lien de téléchargement vient de vous être envoyé. Vérifiez votre boîte de réception (et éventuellement les spams).',
  invalidEmail: 'Merci de saisir une adresse email valide.',
};

// Libellé du bouton d'accès direct selon le type (mode « online », spec §6.4).
export const onlineAccessLabels: Record<string, string> = {
  formation_video: 'Regarder la formation',
  webinaire: "S'inscrire au webinaire",
  glossaire: 'Consulter le glossaire',
};
