import type { OfferContent } from '../../offres';

// Odoo / ERP-CRM (offre Niveau 2 — « Le système »). Copy extraite de
// `Connect Web - Odoo ERP-CRM.dc.html`. Slug = /services/crm-erp-integrations
// (canonique, site-nav.ts). Cas Maison Peinture Sénégal : visuel à fournir.
// Prix : « Selon périmètre » assumé (DECISION 10 — pas de montant creux).

export const crmErpIntegrations: OfferContent = {
  slug: 'crm-erp-integrations',
  meta: {
    title: 'Odoo / ERP-CRM',
    description:
      "Stock, ventes, clients, achats : quand tout vit dans des fichiers séparés, personne ne voit l'ensemble. On configure Odoo pour vos process réels et on connecte ce qui doit l'être — et vous possédez tout.",
  },

  hero: {
    eyebrow: 'Odoo · ERP · CRM · intégrations',
    breadcrumb: 'Odoo / ERP-CRM',
    title: 'Arrêtez de gérer votre activité sur trois cahiers et un tableau Excel.',
    subtitle:
      "Stock, ventes, clients, achats : quand tout vit dans des fichiers séparés, personne ne voit l'ensemble. Un ERP réunit tout au même endroit.",
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: 'Voir le cas Maison Peinture Sénégal →', href: '#cas' },
    ],
    features: ['Stock, ventes & facturation reliés', 'Configuré à votre réalité', 'Vous possédez tout'],
  },

  pain: {
    eyebrow: 'Le problème',
    title: 'Vos outils ne se parlent pas — vous, si.',
    lead: "Un cahier pour le stock, un fichier pour les clients, un carnet pour les factures. Vous êtes le seul lien entre tout ça — et ça vous coûte du temps, des erreurs, et des ventes.",
    items: [
      { title: 'Vos outils sont isolés', body: "Stock, ventes, compta : tout est ressaisi à la main, plusieurs fois, avec le risque d'erreur qui va avec." },
      { title: 'Vous découvrez les problèmes trop tard', body: "Rupture de stock, facture oubliée, client relancé deux fois — sans vue d'ensemble, on répare après coup." },
      { title: 'Grandir devient risqué', body: 'Sans système fiable, chaque nouvelle commande, employé ou point de vente ajoute du chaos plutôt que du chiffre.' },
    ],
  },

  deliverables: {
    eyebrow: "Ce qu'on construit",
    title: 'Un système, configuré pour votre façon de travailler.',
    lead: "On ne vous vend pas un logiciel générique : on configure Odoo pour vos process réels, et on connecte ce qui doit l'être.",
    items: [
      { title: 'Stock & achats en temps réel', body: 'Niveaux de stock, réassorts et fournisseurs suivis automatiquement, sans ressaisie.' },
      { title: 'Ventes, devis & facturation', body: 'Du devis à la facture payée, un seul flux — plus de documents qui se perdent entre deux outils.' },
      { title: 'CRM & suivi client', body: "Historique, relances et opportunités centralisés — plus rien ne dépend de la mémoire d'une personne." },
      { title: 'Tableaux de bord & rapports', body: 'Vos chiffres réels, à jour, sans reconstruire un fichier Excel chaque fin de mois.' },
    ],
    toolsLabel: "Des outils qu'on maîtrise",
    tools: ['Odoo', 'Ventes & achats', 'Inventaire', 'Facturation', 'CRM'],
  },

  editorial: {
    eyebrow: 'Réassurance',
    title: 'Un ERP, ça fait peur. On sait.',
    blocks: [
      "La crainte, c'est toujours la même : « on va tout casser en migrant », « mon équipe ne s'y mettra jamais », « on va perdre nos données ». On travaille pour que ça n'arrive pas.",
    ],
    sideLabel: 'Comment on gère le risque',
    sideFacts: [
      "**Migration testée** avant de basculer — on ne coupe rien à l'aveugle.",
      "**Formation de votre équipe** — un système que personne n'utilise ne sert à rien.",
      '**Vos données restent les vôtres**, et vous gardez vos accès.',
      "**Support après le lancement** — on ne disparaît pas une fois le système livré.",
    ],
  },

  featuredCase: {
    eyebrow: 'Cas plein',
    name: 'Maison Peinture Sénégal',
    category: 'Quincaillerie · Gestion intégrée',
    body: 'Maison Peinture Sénégal — une quincaillerie qui gérait stock et ventes dans des outils séparés. On a mis en place un ERP Odoo pour tout piloter depuis un seul endroit.',
    quote: '« Stock et ventes pilotés depuis un seul système, sans ressaisie. »',
    visualPending: true,
    visualNote: "Visuel de l'instance Odoo configurée à fournir",
  },

  process: {
    eyebrow: 'Notre process',
    title: 'De vos process actuels à un système qui tourne.',
    steps: [
      { title: 'Audit de vos process', body: "On cartographie comment vous travaillez vraiment aujourd'hui, et où vous perdez du temps.", deliverable: 'cartographie de vos process actuels' },
      { title: 'Configuration', body: 'On configure Odoo sur vos modules réels — stock, ventes, CRM, facturation — sans surplus.', deliverable: 'instance Odoo configurée sur vos modules' },
      { title: 'Migration & tests', body: 'On importe vos données existantes et on teste avec votre équipe avant le passage en réel.', deliverable: 'données migrées et vérifiées à vos côtés' },
      { title: 'Formation & suivi', body: 'On forme votre équipe et on reste disponible pour ajuster une fois le système en usage.', deliverable: 'équipe formée, système en production' },
    ],
  },

  pricing: {
    eyebrow: 'Investissement',
    title: 'Un périmètre clair, pas un projet à rallonge.',
    body: "Pas de surprise : on cadre le périmètre ensemble et on avance sur un devis clair. Vous restez propriétaire de tout ce qu'on construit.",
    cardLabel: 'Odoo / ERP-CRM',
    pricePlaceholder: 'Selon périmètre.',
    priceFrom: '',
    includes: [
      'Modules configurés sur vos process réels',
      'Migration de vos données existantes',
      'Formation de votre équipe incluse',
    ],
    cta: { label: 'Demander un devis gratuit', href: '#contact' },
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: "Ce qu'on nous demande sur Odoo.",
    items: [
      { q: "On est une petite équipe — Odoo n'est pas trop lourd pour nous ?", a: 'Non — on active uniquement les modules dont vous avez besoin. Une petite équipe démarre souvent avec juste ventes + stock, et on ajoute au fur et à mesure.' },
      { q: 'Peut-on connecter Odoo à notre boutique en ligne ?', a: "Oui — c'est justement l'intérêt : le stock et les commandes de la boutique se synchronisent avec le reste de votre gestion, sans double saisie." },
      { q: "Qu'advient-il de nos données actuelles (Excel, cahiers) ?", a: 'On les migre dans le nouveau système avant le lancement, avec une phase de vérification à vos côtés — rien ne se perd dans la transition.' },
      { q: 'Les données restent-elles à nous ?', a: "Entièrement. Votre instance, vos accès, vos données — hébergés à votre nom. Pas de dépendance — c'est une règle chez nous." },
      { q: "Pourquoi Odoo plutôt qu'un autre ERP ?", a: "Odoo est modulaire, adaptable et son coût reste raisonnable pour une entreprise qui grandit. On l'utilise parce qu'il tient ses promesses, pas par habitude. Si un autre outil vous convient mieux, on vous le dit." },
      { q: 'Combien ça coûte ?', a: "Ça dépend entièrement du périmètre (modules, nombre d'utilisateurs, intégrations). On cadre avec vous avant de chiffrer. Souvent, un audit est la bonne première étape." },
    ],
  },

  systemBridge: {
    eyebrow: 'Aller plus loin',
    title: 'Une fois le système en place, on automatise.',
    body: 'Quand vos données sont centralisées, on peut aller plus loin : automatiser les tâches répétitives et connecter votre présence en ligne.',
    link: { label: 'Découvrir Automatisation & IA →', href: '/services/ia-automatisation' },
  },

  finalCta: {
    eyebrow: 'On en parle ?',
    title: 'Prêt à piloter votre activité depuis un seul écran ?',
    body: 'Racontez-nous votre projet — on revient vers vous en moins de 24 h avec un premier cadrage et un devis gratuit.',
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: 'WhatsApp', href: 'https://wa.me/221783438249' },
    ],
    features: ['Réponse sous 24 h', 'Devis gratuit', 'Vous possédez tout'],
  },
};
