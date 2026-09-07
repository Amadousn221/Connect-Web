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

// Refonte Accueil — brief §04-S08. Ordre intentionnel ATTA → SCOD → Maison
// Peinture (commerce → plateforme → système). Résultats chiffrés : EVIDENCE
// REQUIRED — non rendus tant que non collectés (jamais de résultat inventé).
// Copy V1 (validée PO) — pas de chapô distinct fourni pour cette section.
export const casPharesIntro = {
  eyebrow: 'Nos réalisations',
  title: 'Ce que nous construisons se voit dans le travail livré.',
  lead: '',
};

export const casPharesLink = {
  label: 'Voir toutes nos réalisations',
  href: '/realisations',
  // /realisations existe désormais (Lot C) — lien actif.
  todo: false,
};

// Copy V1 — ordre ATTA Africa → Maison Peinture Sénégal → SCOD VTC.
export const casPharesCards: ProjectCardData[] = [
  {
    client: 'ATTA Africa',
    sector: 'Mode DTC · Cross-border Dakar → Europe & Amérique',
    title: 'Une boutique Shopify accompagnée par un système de reporting, de traitement des commandes et de relance client.',
    solutionTag: 'E-commerce · Automatisation',
    imageMissing: 'ATTA Africa — capture boutique cross-border',
    cta: {
      label: 'Voir le projet',
      href: '/realisations/atta-africa',
      todo: true,
    },
  },
  {
    client: 'Maison Peinture Sénégal',
    sector: 'Commerce · Distribution · Gestion interne',
    title: 'Un système Odoo conçu pour mieux structurer les opérations d’une activité de distribution.',
    solutionTag: 'ERP · Processus métier',
    imageMissing: "Maison Peinture Sénégal — capture de l'ERP Odoo",
    cta: {
      label: 'Voir le projet',
      href: '/realisations/maison-peinture-senegal',
      todo: true,
    },
  },
  {
    client: 'SCOD VTC',
    sector: 'Transport · Plateforme de réservation',
    title: 'Une plateforme web pensée pour faciliter l’accès au service et la gestion des demandes.',
    solutionTag: 'Application web · Mobilité',
    image: {
      src: '/assets/real/scod-vtc.jpg',
      alt: "Capture d'écran de la plateforme de réservation SCOD VTC",
    },
    cta: {
      label: 'Voir le projet',
      href: '/realisations/scod-vtc',
      todo: true,
    },
  },
];
