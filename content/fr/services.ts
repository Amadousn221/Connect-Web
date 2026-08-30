import type { ServiceCardData } from '../types';

// ── A5 — Section Services (V2.1, Lot B) ────────────────────────────────────
// Architecture DECISION 23 : 2 cartes Niveau 1 (dont 1 carte parente à
// sous-services) + 3 cartes Niveau 2 + Conseil = 6 cartes. Technologies en
// ligne de preuve sous leur carte, jamais en carte autonome (§08.4).
// Copy : §06.5 du Design Handoff + brief Lot B.
//
// Les pages /services/* et /conseil n'existent pas encore (lot ultérieur) :
// les liens `todo: true` sont rendus non cliquables + listés dans un repère
// « À valider » visible en preview. Aucune page n'est créée dans le Lot B.

export const servicesIntro = {
  eyebrow: 'Nos capacités',
  title: 'Cinq expertises, une équipe, un système.',
  lead: 'Deux offres qui prouvent, trois qui connectent, un conseil pour cadrer avant de commencer. Vous ne choisissez pas des outils — vous choisissez un résultat.',
};

export const servicesN1: ServiceCardData[] = [
  {
    num: '01',
    variant: 'parent',
    title: 'Conception et développement web',
    description:
      "Sites institutionnels, sites d'entreprise, boutiques en ligne : une présence qui vous représente et qui, quand il le faut, vend.",
    subServices: [
      { label: 'Sites institutionnels & ONG', href: '/services/sites-institutionnels-ong', todo: true },
      { label: "Sites d'entreprise", href: '/services/sites-entreprise', todo: true },
      { label: 'E-commerce', href: '/services/boutiques-en-ligne', todo: true },
    ],
    tech: 'E-commerce : Shopify · WooCommerce · sur-mesure',
    image: {
      src: '/assets/real/was-africa.jpg',
      alt: "Capture d'écran du site institutionnel WAS Africa",
    },
    cta: { label: 'Voir nos réalisations web', href: '/realisations', todo: true },
  },
  {
    num: '02',
    variant: 'primary',
    title: 'Logiciels & applications web',
    description:
      "Plateformes métier, applications web sur mesure, PWA : des outils qui s'adaptent à votre opération, pas l'inverse.",
    proof: 'Preuve : SCOD VTC',
    image: {
      src: '/assets/real/scod-vtc.jpg',
      alt: "Capture d'écran de la plateforme de réservation SCOD VTC",
    },
    cta: { label: "Voir l'offre", href: '/services/logiciels-applications-web', todo: true },
  },
];

export const servicesN2: ServiceCardData[] = [
  {
    num: '03',
    variant: 'secondary',
    title: 'ERP / CRM',
    description:
      'Centraliser vos ventes, vos stocks et vos clients dans un seul système.',
    proof: 'Preuve : Maison Peinture Sénégal (Odoo)',
    tech: 'Odoo · HubSpot',
    cta: { label: "Voir l'offre", href: '/services/erp-crm-integrations', todo: true },
  },
  {
    num: '04',
    variant: 'secondary',
    title: 'IA & automatisation',
    description:
      "Automatiser les tâches répétitives pour que votre équipe se concentre sur ce qui compte.",
    proof: 'Preuve : ATTA Africa — reporting mensuel automatisé, relance panier',
    cta: { label: "Voir l'offre", href: '/services/ia-automatisation', todo: true },
  },
  {
    num: '05',
    variant: 'secondary',
    title: 'Marketing & génération de prospects',
    description:
      'Attirer, qualifier et convertir — campagnes, e-mail, acquisition.',
    proof: 'Capacité — pas encore de cas public à montrer',
    tech: 'Mailchimp · Klaviyo',
    cta: { label: "Voir l'offre", href: '/services/marketing', todo: true },
  },
];

export const serviceConseil: ServiceCardData = {
  variant: 'conseil',
  title: 'Conseil & stratégie',
  description:
    "Avant de construire, comprendre. Audit, cadrage, choix d'architecture, priorisation : on part de votre problème, pas de notre catalogue.",
  cta: { label: 'Parlons de votre projet', href: '#contact' },
};
