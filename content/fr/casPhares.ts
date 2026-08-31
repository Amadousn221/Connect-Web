import type { ProjectCardData } from '../types';

// ── A7 — Cas phares (V2.1, Lot D) ────────────────────────────────────────
// §06.6 / §09 du Design Handoff. 3 projets réels, clients d'accord pour être
// nommés (DECISION 12). Slider ProjectSlider.
//
// - Résultats chiffrés : EVIDENCE REQUIRED (entretiens à mener). Tant qu'ils
//   ne sont pas fournis, `result` reste absent → la ligne n'est pas rendue.
// - Captures : SCOD disponible ; ATTA et Maison Peinture à fournir (rendu
//   « visuel à fournir » en preview, jamais de mockup).
// - Pages /realisations/[slug] : inexistantes → CTA non cliquable + repère.

export const casPharesIntro = {
  eyebrow: 'Preuve',
  title: 'Trois projets qui montrent comment on travaille.',
  lead: "Une boutique qui vend à l'international. Une plateforme qui prend les réservations à la place du téléphone. Une quincaillerie qui a remplacé Excel par un vrai système. Ce sont de vrais projets, chez de vrais clients qui nous autorisent à les nommer.",
};

export const casPharesLink = {
  label: 'Voir toutes les réalisations',
  href: '/realisations',
  // /realisations existe désormais (Lot C) — lien actif.
  todo: false,
};

export const casPharesCards: ProjectCardData[] = [
  {
    client: 'ATTA Africa',
    sector: 'Mode DTC · Cross-border Dakar → Europe & Amérique',
    title: 'Une boutique cross-border qui vend en 4 devises',
    solutionTag: 'E-commerce · Automatisations',
    imageMissing: 'ATTA Africa — capture boutique cross-border',
    cta: {
      label: "Voir l'étude de cas",
      href: '/realisations/atta-africa',
      todo: true,
    },
  },
  {
    client: 'SCOD VTC',
    sector: 'Transport · Plateforme de réservation',
    title: 'Une plateforme qui prend les réservations à la place du téléphone',
    solutionTag: 'Plateforme métier · Logiciels sur mesure',
    image: {
      src: '/assets/real/scod-vtc.jpg',
      alt: "Capture d'écran de la plateforme de réservation SCOD VTC",
    },
    cta: {
      label: "Voir l'étude de cas",
      href: '/realisations/scod-vtc',
      todo: true,
    },
  },
  {
    client: 'Maison Peinture Sénégal',
    sector: 'Commerce · Distribution · Gestion interne',
    title: 'Un ERP qui a remplacé Excel et les tableurs',
    solutionTag: 'ERP Odoo · Intégration',
    imageMissing: "Maison Peinture Sénégal — capture de l'ERP Odoo",
    cta: {
      label: "Voir l'étude de cas",
      href: '/realisations/maison-peinture-senegal',
      todo: true,
    },
  },
];
