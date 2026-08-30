import type { NeedRow } from '../types';

// ── A3 — Vos besoins / enjeux (V2.1, Lot C) ───────────────────────────────
// §06.3 du Design Handoff : tableau statique 5 lignes « Vous voulez… / Nous
// construisons… ». On part du problème, pas du catalogue technique.

export const besoinsIntro = {
  eyebrow: 'Vos besoins',
  title: 'Ce que vous voulez faire. Comment on le construit.',
  lead: 'On part de votre problème, pas de notre catalogue technique.',
};

export const besoinsRows: NeedRow[] = [
  {
    want: 'Présenter votre organisation avec crédibilité',
    build: "Un site institutionnel, corporate ou d'entreprise",
    service: 'Conception et développement web',
  },
  {
    want: "Vendre en ligne, au Sénégal comme à l'étranger",
    build: 'Une boutique qui accepte Mobile Money et cartes internationales',
    service: 'E-commerce',
  },
  {
    want: 'Digitaliser une opération métier (réservation, service, gestion)',
    build: 'Une plateforme ou une application web sur mesure',
    service: 'Logiciels & applications web',
  },
  {
    want: 'Centraliser vos ventes, stocks et clients',
    build: 'Un système ERP/CRM (Odoo, HubSpot) intégré à vos outils',
    service: 'ERP/CRM',
  },
  {
    want: 'Automatiser les tâches répétitives qui vous coûtent des heures',
    build: 'Des workflows (n8n, API, IA) qui tournent 24/7',
    service: 'IA & automatisation',
  },
];

export const besoinsCta = {
  label: 'Pas certain de votre besoin ? Parlons-en',
  href: '#contact',
};
