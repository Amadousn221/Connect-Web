import type { SystemModule } from '../types';

// ── S07 — « Du site au système », exploration interactive (Refonte Accueil,
// Lot 2 ; copy V1). 6 modules sélectionnables. Contenu présenté comme des
// POSSIBILITÉS selon le projet — jamais comme une intégration universelle ou
// déjà réalisée pour tous les clients. AUCUNE référence client, aucun exemple
// nominatif dans cette section (ils vivent dans Réalisations et sur les pages
// de cas).
//
// Copy V1 : le champ « Échanges » séparé est retiré — l'idée d'échange entre
// outils est intégrée directement dans la phrase de rôle (`role`).

export const systemModules: SystemModule[] = [
  {
    key: 'site',
    name: 'Site ou boutique',
    icon: 'web',
    role: 'Présenter votre activité, recevoir des demandes ou vendre en ligne. Les formulaires, prospects et commandes peuvent ensuite alimenter vos autres outils.',
    uses: ['Présenter une offre clairement', 'Générer des demandes', 'Vendre et recevoir des paiements'],
  },
  {
    key: 'app',
    name: 'Application web',
    icon: 'apps',
    role: "Adapter l'outil à un processus spécifique : réservation, espace client, portail, suivi interne ou service en ligne.",
    uses: ['Digitaliser un parcours', 'Centraliser une opération', 'Donner accès à un service'],
  },
  {
    key: 'crm',
    name: 'CRM',
    icon: 'crm',
    role: 'Regrouper les contacts, suivre les opportunités et organiser les échanges avec les prospects et clients.',
    uses: ['Centraliser les contacts', 'Suivre les opportunités', 'Organiser les relances'],
  },
  {
    key: 'erp',
    name: 'ERP',
    icon: 'erp',
    role: 'Relier les opérations essentielles selon les besoins : commandes, stocks, facturation, achats ou suivi administratif.',
    uses: ['Structurer les opérations', 'Réduire les doubles saisies', 'Partager une information fiable'],
  },
  {
    key: 'automatisation',
    name: 'Automatisation',
    icon: 'automation',
    role: 'Faire circuler les informations entre les outils et déclencher les tâches répétitives selon des règles définies.',
    uses: ['Transmettre les données', 'Déclencher des notifications', 'Automatiser les tâches récurrentes'],
  },
  {
    key: 'reporting',
    name: 'Reporting',
    icon: 'reporting',
    role: "Rassembler les indicateurs utiles pour suivre l'activité et faciliter les décisions.",
    uses: ['Consolider les résultats', 'Identifier les tendances', 'Partager des rapports réguliers'],
  },
];
