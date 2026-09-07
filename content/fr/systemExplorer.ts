import type { SystemModule } from '../types';

// ── S07 — « Du site au système », exploration interactive (Refonte Accueil,
// Lot 2). Remplace la présentation statique (chaîne ordonnée + grille 4 col).
//
// 5 modules sélectionnables. Contenu présenté comme des POSSIBILITÉS selon le
// projet — jamais comme une intégration universelle ou déjà réalisée pour tous
// les clients. AUCUNE référence client, aucun exemple nominatif dans cette
// section (ils vivent dans Réalisations et sur les pages de cas).

export const systemModules: SystemModule[] = [
  {
    key: 'site',
    name: 'Site ou boutique',
    icon: 'web',
    role: 'Présenter votre offre, recevoir une demande ou vendre en ligne.',
    uses: [
      'Publier une présence claire et crédible',
      'Recevoir des demandes de contact ou de devis',
      'Vendre en ligne, paiement mobile et international côte à côte',
    ],
    exchange:
      'Les demandes et les commandes peuvent alimenter les outils de suivi (CRM, ERP).',
  },
  {
    key: 'crm',
    name: 'CRM',
    icon: 'crm',
    role: 'Centraliser les contacts et les échanges, suivre les opportunités.',
    uses: [
      'Réunir clients et prospects au même endroit',
      'Suivre les opportunités et les devis',
      'Organiser les relances',
    ],
    exchange:
      "Peut recevoir les demandes du site et partager l'historique client avec l'ERP et les automatisations.",
  },
  {
    key: 'erp',
    name: 'ERP',
    icon: 'erp',
    role: 'Organiser les opérations — commandes, stocks, facturation — selon les modules retenus.',
    uses: [
      'Suivre les commandes et les stocks',
      'Éditer devis et factures',
      'Piloter achats et logistique',
    ],
    exchange:
      'Peut recevoir les commandes du site, se synchroniser avec le CRM et transmettre ses données au reporting.',
  },
  {
    key: 'automatisation',
    name: 'Automatisation',
    icon: 'automation',
    role: 'Transmettre les informations entre les outils et déclencher les tâches répétitives selon des règles définies.',
    uses: [
      "Faire circuler les données d'un outil à l'autre",
      'Envoyer notifications et relances automatiquement',
      'Préparer des rapports sans intervention manuelle',
    ],
    exchange:
      'Peut se connecter à tous les autres outils pour les faire travailler ensemble.',
  },
  {
    key: 'reporting',
    name: 'Reporting',
    icon: 'reporting',
    role: "Rassembler les indicateurs utiles pour suivre l'activité et faciliter les décisions.",
    uses: [
      'Réunir les chiffres des ventes, du stock et de la relation client',
      'Suivre son activité sur un tableau de bord',
      'Repérer ce qui avance et ce qui bloque',
    ],
    exchange:
      "Peut agréger les données du site, du CRM et de l'ERP, souvent alimenté par les automatisations.",
  },
];
