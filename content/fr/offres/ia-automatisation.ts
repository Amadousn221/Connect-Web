import type { OfferContent } from '../../offres';

// Automatisation & IA (offre Niveau 2 — « Le système »). Copy extraite de
// `Connect Web - Automatisation IA.dc.html`. Slug = /services/ia-automatisation.
// Preuve = automatisation (ATTA), pas « IA magique » : honnêteté assumée.

export const iaAutomatisation: OfferContent = {
  slug: 'ia-automatisation',
  meta: {
    title: 'Automatisation & IA',
    description:
      "Rapports, commandes, relances : ce qui vous prend des heures chaque semaine peut tourner sans vous. On automatise ce qui vous fait perdre du temps — et on le prouve, comme chez ATTA Africa.",
  },

  hero: {
    eyebrow: 'Automatisation & IA',
    breadcrumb: 'Automatisation & IA',
    title: 'Le travail répétitif, fait tout seul.',
    subtitle:
      "Rapports, commandes, relances : ce qui vous prend des heures chaque semaine peut tourner sans vous. On automatise ce qui vous fait perdre du temps — et on le prouve.",
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: "Voir les automatisations d'ATTA Africa →", href: '#cas' },
    ],
    features: ['Des heures rendues chaque semaine', 'Aucun code à maintenir vous-même', 'Vous possédez tout'],
    image: '/assets/svc-app.jpg',
  },

  pain: {
    eyebrow: 'Le problème',
    title: 'Chaque tâche répétée à la main est du temps qui ne revient pas.',
    lead: "Répondre aux mêmes questions, relancer les mêmes clients, recopier les mêmes données d'un outil à l'autre — ce travail existe dans presque toutes les équipes, et il coûte plus cher qu'on ne le pense.",
    items: [
      { title: 'Le temps part dans la répétition', body: 'Relances, saisies, réponses types — des heures perdues chaque semaine sur des tâches sans valeur ajoutée.' },
      { title: 'Les rapports se compilent à la main, chaque semaine', body: 'Exporter les ventes, calculer les totaux, mettre en forme, envoyer par e-mail — le même travail, refait identique chaque semaine.' },
      { title: 'Les commandes se confirment une par une', body: 'Chaque commande demande une action manuelle avant même de commencer le vrai travail : préparer, expédier, livrer.' },
      { title: 'Les clients qui hésitent ne sont jamais relancés', body: "Sans système pour le faire à votre place, personne ne rappelle le client qui a rempli son panier puis disparu. Cette vente-là est perdue par défaut, pas par choix." },
      { title: '« L\'IA » reste flou et cher', body: "Entre le buzz et les outils compliqués, difficile de voir ce qui apporterait vraiment un résultat concret." },
    ],
  },

  deliverables: {
    eyebrow: "Ce qu'on construit",
    title: 'Des automatisations utiles, pas des gadgets.',
    lead: 'On identifie les tâches qui vous coûtent le plus de temps, et on les automatise avec des outils simples à comprendre et à ajuster.',
    items: [
      { title: 'Vos rapports, générés et envoyés seuls', body: "Compiler vos ventes, calculer vos indicateurs, produire une analyse et l'envoyer — automatiquement, à la fréquence voulue. Vous ouvrez votre boîte mail, le rapport est là." },
      { title: 'Vos commandes, traitées automatiquement', body: 'Les étapes répétitives du traitement de commande, prises en charge par le système, pour que votre équipe se concentre sur ce qui compte.' },
      { title: 'Vos ventes récupérées', body: 'Relances de panier abandonné, e-mails de suivi : des ventes qui allaient se perdre reçoivent une deuxième chance, sans effort de votre part.' },
      { title: "Et l'IA dans tout ça ?", body: "L'IA a de vrais usages (assistants, réponses automatiques, tri de demandes). On peut vous accompagner sur ces sujets. Mais on est clairs : on vous dira ce qu'on a déjà mis en place et ce qui serait une première pour nous. Pas de « magie IA » vendue à l'aveugle." },
    ],
    toolsLabel: "Des outils qu'on maîtrise",
    tools: ['n8n / Zapier', 'WhatsApp Business API', 'Chatbots IA', 'Intégrations API', 'Odoo Automation'],
  },

  featuredCase: {
    eyebrow: 'Cas plein',
    name: 'ATTA Africa',
    category: 'Mode DTC · Automatisations',
    context: 'ATTA Africa — le même client dont on a d’abord construit la boutique : du site au système, pour de vrai.',
    problem: 'Le rapport de ventes mensuel, le traitement des commandes et les relances de panier abandonné prenaient du temps chaque mois, à la main.',
    solution: "Automatisation du reporting mensuel (par taille, produit, zone ; chiffre d'affaires, unités, meilleures ventes ; analyse et envoi sans intervention), du traitement des commandes et des relances de panier.",
    quote: '« Un reporting mensuel automatisé, un traitement de commande simplifié, des relances panier actives. »',
    primaryCta: { label: 'Voir le cas complet →', href: '/realisations' },
    visualPending: true,
    visualNote: 'Aperçu du rapport automatisé à fournir (anonymisé si nécessaire)',
  },

  editorial: {
    eyebrow: 'Réassurance',
    title: "L'automatisation ne vous dépossède pas.",
    blocks: [
      'Vous gardez le contrôle — on automatise des tâches, vous gardez les décisions.',
      "On commence petit — une automatisation qui marche vaut mieux qu'un grand système fragile.",
      "On mesure — si ça ne vous fait pas gagner de temps ou d'argent, ça ne sert à rien.",
      'Les accès sont à vous — les systèmes tournent chez vous, pas en location chez nous.',
    ],
  },

  process: {
    eyebrow: 'Notre process',
    title: 'Des tâches identifiées aux heures récupérées.',
    steps: [
      { title: 'Repérage des tâches', body: 'On identifie avec vous les tâches répétitives qui coûtent le plus de temps à votre équipe.', deliverable: 'liste priorisée des tâches à automatiser' },
      { title: 'Conception du flux', body: "On dessine l'automatisation étape par étape, en gardant un contrôle humain là où il compte.", deliverable: "schéma de l'automatisation validé" },
      { title: 'Mise en place & tests', body: "On connecte vos outils et on teste sur des cas réels avant d'activer à grande échelle.", deliverable: 'automatisation testée sur cas réels' },
      { title: 'Ajustement continu', body: "On surveille les résultats et on ajuste les règles au fil des premières semaines d'usage.", deliverable: 'suivi et ajustements du premier mois' },
    ],
  },

  pricing: {
    eyebrow: 'Investissement',
    title: "On commence petit, et on mesure le gain avant d'aller plus loin.",
    body: "Pas de surprise : on cadre le périmètre ensemble et on avance sur un devis clair. Vous restez propriétaire de tout ce qu'on construit.",
    cardLabel: 'Automatisation & IA',
    pricePlaceholder: 'Selon périmètre.',
    priceFrom: '',
    includes: [
      'Une automatisation ciblée, mesurée dès le lancement',
      'Connexion à vos outils existants',
      'Ajustements inclus le premier mois',
    ],
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: "Ce qu'on nous demande sur l'automatisation.",
    items: [
      { q: 'On va perdre le contact humain avec nos clients ?', a: "Non — on automatise ce qui est répétitif (confirmations, rappels, questions fréquentes) pour libérer du temps humain sur ce qui compte vraiment : les échanges qui font la différence." },
      { q: 'Faut-il déjà avoir un site ou un ERP pour automatiser ?', a: "Non — on peut automatiser des flux WhatsApp, e-mail ou tableurs dès aujourd'hui, et connecter un système plus large ensuite si besoin." },
      { q: "Et si l'automatisation fait une erreur ?", a: 'On garde toujours un point de contrôle humain sur les décisions sensibles, et on teste chaque flux avant activation à grande échelle.' },
      { q: 'Les automatisations nous appartiennent ?', a: 'Oui. Vos comptes et vos flux sont configurés sous votre nom — vous pouvez les faire évoluer avec ou sans nous.' },
      { q: "Vous faites de « l'IA » ou de l'automatisation ?", a: "Les deux ont leur place. Notre preuve solide, c'est l'automatisation (rapports, commandes, relances, chez ATTA). Sur l'IA plus poussée, on vous accompagne en étant transparents sur ce qui est éprouvé et ce qui ne l'est pas encore." },
      { q: 'Il faut être une grosse entreprise pour automatiser ?', a: "Non. Souvent, plus l'équipe est petite, plus l'automatisation compte — chaque heure gagnée pèse davantage." },
    ],
  },

  systemBridge: {
    eyebrow: 'Aller plus loin',
    title: 'Vous avez déjà une boutique ou une plateforme ?',
    body: "C'est là que l'automatisation prend tout son sens : sur un commerce qui tourne déjà, chaque tâche automatisée est du temps et des ventes gagnés. Exactement le chemin d'ATTA.",
    link: { label: 'Découvrir Odoo / ERP-CRM →', href: '/services/crm-erp-integrations' },
  },

  finalCta: {
    eyebrow: 'On en parle ?',
    title: "Quelles tâches vous mangent vos semaines ? Voyons ce qu'on peut automatiser.",
    body: 'Racontez-nous votre projet — on revient vers vous en moins de 24 h avec un premier cadrage et un devis gratuit.',
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: 'WhatsApp', href: 'https://wa.me/221783438249' },
    ],
    features: ['Réponse sous 24 h', 'On commence petit et on mesure', 'Vos accès vous appartiennent'],
  },
};
