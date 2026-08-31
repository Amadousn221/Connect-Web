// ── A12 — CTA final + contact (V2.1, Lot D2) ────────────────────────────
// §06.11 / §16 du Design Handoff. Formulaire partagé entre la section et la
// modale. Coordonnées tél/WhatsApp = FACT (présentes en prod). Email et
// adresse précise : à confirmer PO.

export const contactIntro = {
  eyebrow: 'Démarrer',
  title: 'Décrivez-nous votre projet, on revient vers vous sous 24 h.',
  body: "Un formulaire court, une conversation de 30 minutes, un devis clair. Pas de vente forcée. Si votre projet ne nous correspond pas, on vous le dit et on vous oriente.",
  trustLine: ['Réponse sous 24 h', 'Devis gratuit', 'Vos accès vous appartiennent'],
};

export const projectTypes = [
  "Site institutionnel ou d'entreprise",
  'Boutique en ligne / e-commerce',
  'Plateforme ou application web',
  'ERP / CRM / système métier',
  'Automatisation / IA',
  'Conseil & audit',
  'Autre / je ne sais pas encore',
];

export const contactChannels = {
  phones: [
    { label: '+221 77 900 62 82', href: 'tel:+221779006282' },
    { label: '+221 78 343 82 49', href: 'tel:+221783438249' },
  ],
  whatsapp: { label: 'Écrire sur WhatsApp', href: 'https://wa.me/221783438249' },
  // TODO PO : confirmer l'adresse email officielle.
  email: 'contact@connect-web.tech',
  // Adresse précise non fournie — « Dakar » seul, rien d'inventé.
  office: 'Dakar, Sénégal',
};

export const formCopy = {
  submitLabel: 'Envoyer ma demande',
  sendingLabel: 'Envoi en cours…',
  successTitle: 'Reçu. On revient vers vous sous 24 h.',
  errorTitle:
    "L'envoi a échoué. Réessayez, ou appelez-nous / écrivez sur WhatsApp.",
};
