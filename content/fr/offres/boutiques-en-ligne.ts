import type { OfferContent } from '../../offres';

// Boutiques en ligne (offre Niveau 1). Copy extraite de
// `Connect Web - Boutiques en ligne.dc.html`. Placeholder prix [À PARTIR DE]
// conservé tel quel (DECISION 10). Cas ATTA : visuel réel à fournir.

export const boutiquesEnLigne: OfferContent = {
  slug: 'boutiques-en-ligne',
  meta: {
    title: 'Boutiques en ligne',
    description:
      "On construit des boutiques qui vendent, du Sénégal au monde : paiement Mobile Money et international sur la même caisse, vente transfrontalière, catalogue et logistique — et que vous possédez entièrement.",
  },

  hero: {
    eyebrow: 'Boutiques en ligne',
    breadcrumb: 'Boutiques en ligne',
    title:
      'Vos ventes ne devraient pas vivre dans vos DM. On construit des boutiques qui vendent, du Sénégal au monde.',
    subtitle:
      "Paiement Mobile Money et international, vente transfrontalière, catalogue et logistique — une boutique faite pour convertir, et que vous possédez entièrement.",
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: 'Voir les boutiques livrées', href: '#cas' },
    ],
    features: ['Mobile Money + international', 'Vente transfrontalière', 'Vous possédez tout'],
    image: '/assets/svc-boutique.jpg',
  },

  pain: {
    eyebrow: 'Le problème',
    title: "Vendre en ligne, ici, c'est plus qu'un catalogue.",
    lead: "La plupart des « boutiques » se résument à des commandes par message, des paiements manuels et des ventes qui s'arrêtent à la frontière. Résultat : des ventes qui fuient et une gestion qui épuise.",
    items: [
      {
        title: 'Les ventes vivent dans les DM',
        body: "Commandes par message, stock de tête, paiements à la main — impossible à suivre et à faire grandir. Chaque nouvelle commande ajoute de la charge mentale, pas du chiffre d'affaires structuré.",
      },
      {
        title: "La vente s'arrête à la frontière",
        body: "Paiement international, devise, diaspora : sans ça, vous laissez le marché le plus rentable de côté. Un client à Paris ou à Montréal qui veut acheter chez vous ne peut tout simplement pas payer.",
      },
      {
        title: 'La confiance ne suit pas',
        body: "Sans checkout clair, réassurance et livraison lisible, le panier est abandonné à la dernière étape. Un acheteur qui hésite sur la fiabilité du paiement ne finalise pas.",
      },
      {
        title: 'Impossible de savoir ce qui se vend vraiment',
        body: "Sans structure, les ventes, les stocks et les meilleurs produits restent dans la tête de quelqu'un — pas dans un tableau qu'on peut regarder pour décider quoi produire ou commander ensuite.",
      },
      {
        title: "Grandir veut dire embaucher quelqu'un pour gérer le désordre",
        body: "Chaque nouvelle commande manuelle est une commande de plus à suivre à la main. Le volume qui devrait être une bonne nouvelle devient un goulot d'étranglement.",
      },
    ],
  },

  deliverables: {
    eyebrow: "Ce qu'on construit",
    title: 'Une boutique faite pour vendre — pas juste pour exister.',
    lead: "Chaque livrable sert la vente et la sérénité de gestion. La technologie n'est pas un titre : c'est notre preuve de maîtrise.",
    items: [
      { title: 'Catalogue & checkout qui convertit', body: "Fiches produits, variantes, panier et tunnel d'achat pensés pour réduire l'abandon." },
      { title: 'Paiement local + international, sur la même caisse', body: "Wave, Orange Money, Free Money pour vos clients d'ici. PayPal, Apple Pay, carte pour vos clients ailleurs. Plusieurs devises si vous vendez à l'international." },
      { title: 'Livraison & logistique lisibles', body: 'Zones, frais, suivi — une promesse de livraison claire qui rassure au moment de payer.' },
      { title: 'SEO, vitesse & prêt au marketing', body: 'Boutique rapide, indexable et branchable sur vos campagnes dès le lancement.' },
      { title: 'Le bon outil pour votre cas', body: "Shopify quand il faut du solide et du rapide, WooCommerce quand il faut de la souplesse, du sur-mesure quand le projet le demande. On maîtrise ces outils — on choisit celui qui sert votre commerce, pas celui qui nous arrange." },
      { title: 'Une boutique qui vous appartient', body: 'Domaine, boutique, comptes de paiement, accès admin : tout à votre nom. Vos clés sont à vous.' },
    ],
    toolsLabel: "Des outils qu'on maîtrise",
    tools: ['Shopify', 'WooCommerce', 'Odoo e-commerce', 'PWA sur-mesure', 'Wave · Orange Money'],
  },

  editorial: {
    eyebrow: 'Ce qui nous distingue',
    title: "Local et international ne devraient jamais s'opposer. Nous, on les fait travailler ensemble.",
    blocks: [
      "La plupart des solutions vous font choisir : soit le beau template international qui ignore comment on paie vraiment au Sénégal, soit la solution locale qui ne tient pas la comparaison à l'étranger. Nous refusons ce compromis.",
      { h3: 'Le paiement mobile et international, sur la même boutique.' },
      "Wave, Orange Money, Free Money pour vos clients d'ici. PayPal, Apple Pay, carte pour vos clients ailleurs. Une seule caisse, plusieurs devises. Chez ATTA Africa, la même boutique encaisse en XOF, en euros, en dollars et en dollars canadiens.",
      { h3: 'Vendre au-delà de la frontière, sans friction.' },
      "Une marque sénégalaise peut vendre à sa diaspora et à ses clients étrangers depuis le premier jour. ATTA Africa livre du Sénégal vers la France et au-delà — le site, les paiements et la logistique sont pensés pour ça, pas bricolés après coup.",
      { h3: 'Vous possédez tout.' },
      "Le nom de domaine, l'hébergement, le compte de paiement, les accès admin : tout est à votre nom. Si un jour vous partez, vous partez avec vos clés.",
    ],
    link: { label: 'Voir comment ATTA vend du Sénégal au monde →', href: '#cas' },
    sideLabel: 'Chez ATTA Africa',
    sideFacts: [
      '**4 devises** encaissées sur une même caisse — XOF, EUR, USD, CAD.',
      '**Sénégal → France** et au-delà, livraison et paiement pensés dès la conception.',
      '**Domaine, paiement, accès** — tout au nom de la marque, dès le premier jour.',
    ],
  },

  why: {
    eyebrow: 'Pourquoi nous',
    title: 'Pourquoi une marque choisit Connect Web pour vendre en ligne.',
    items: [
      { title: "On choisit l'outil pour vous, pas pour nous", body: "On part de votre catalogue, votre budget et vos besoins de gestion. On recommande l'outil adapté — jamais l'inverse." },
      { title: 'Une preuve réelle, pas une promesse', body: "ATTA Africa vend déjà du Sénégal vers la France avec la caisse qu'on a construite. Ce n'est pas un argument commercial, c'est un site en ligne aujourd'hui." },
      { title: 'Vous possédez tout, dès le premier jour', body: "Domaine, boutique, comptes de paiement, accès admin — à votre nom. Aucune dépendance à l'agence pour continuer à vendre." },
      { title: "Pensé mobile d'abord, comme vos clients achètent", body: 'La majorité de vos acheteurs commandent depuis leur téléphone. La boutique est construite pour ce parcours, pas adaptée après coup.' },
      { title: 'La vitesse et le SEO ne sont pas un supplément', body: "Une boutique lente perd des ventes avant même d'arriver au paiement. Performance et référencement sont inclus dès la conception, pas vendus en option." },
      { title: 'On garde ce qui marche déjà', body: "WhatsApp reste un canal de vente utile. On ne vous demande pas de tout arrêter — la boutique structure le catalogue, le paiement et le suivi, WhatsApp continue à discuter avec vos clients." },
    ],
  },

  featuredCase: {
    eyebrow: 'Cas plein',
    name: 'ATTA Africa',
    category: 'Marque de mode · Vente directe',
    body: "Une boutique qui vend du Sénégal au monde — paiement mobile et international sur la même caisse — et un système qui gère le reste tout seul.",
    quote: '« Une boutique cross-border en ligne, avec reporting mensuel automatisé et relances panier. »',
    primaryCta: { label: 'Voir le cas complet →', href: '/realisations' },
    externalUrl: { label: 'atta-africa.com', href: 'https://atta-africa.com' },
    visualPending: true,
    visualNote: 'Visuel de la boutique et du reporting à fournir',
  },

  relatedIntro: {
    eyebrow: 'Boutiques livrées',
    title: 'Des boutiques qui tournent, pour de vrai.',
    lead: 'Bijouterie, high-tech, cross-border — voici une partie des boutiques que nous avons construites.',
  },
  relatedCaseNames: ['Link Shop', 'Marjan Bijouterie', 'Luxury Bijouterie'],

  benefits: {
    eyebrow: 'Ce que ça change',
    title: "Ce qu'une vraie boutique change pour votre commerce.",
    items: [
      { title: 'Vous arrêtez de perdre des ventes dans les DM', body: "Plus de commande oubliée dans une conversation, plus de paiement à relancer à la main. Chaque visiteur qui veut acheter peut le faire seul, à n'importe quelle heure — sans attendre votre réponse." },
      { title: 'Vous captez un marché que le DM ne peut pas atteindre', body: "Diaspora, clients internationaux, acheteurs qui préfèrent payer par carte : ce sont des ventes qui n'existaient simplement pas avant. Une boutique cross-border ouvre un marché entier, pas juste un canal de plus." },
      { title: 'Vous savez enfin ce qui se vend', body: "Un tableau de bord qui montre vos ventes, vos meilleurs produits, votre chiffre d'affaires — au lieu de devoir vous en souvenir. Cette visibilité change vos décisions d'achat et de stock." },
      { title: "Vous devenez une marque qu'on prend au sérieux", body: "Une boutique professionnelle, ici comme à l'étranger, change la perception qu'un client se fait de vous avant même d'acheter — et ouvre la porte à des partenariats que des ventes en DM ne permettent pas." },
    ],
  },

  process: {
    eyebrow: 'Notre process',
    title: "De l'idée à la première vente.",
    lead: "Six étapes qui suivent le parcours d'achat — du catalogue à la première commande.",
    steps: [
      { title: 'Découverte & catalogue', body: "On cadre l'offre, les produits, les modes de paiement et de livraison, et ce que vous vendez déjà en DM ou en boutique physique.", deliverable: 'note de cadrage produits & paiements' },
      { title: 'Choix de la plateforme', body: "Shopify, WooCommerce ou sur-mesure : on recommande l'outil adapté à votre catalogue et votre budget, pas celui qui nous arrange.", deliverable: 'recommandation de plateforme argumentée' },
      { title: 'Design & prototypage', body: "On dessine la boutique et le tunnel d'achat, validés sur maquette avant de coder.", deliverable: 'maquettes catalogue et checkout validées' },
      { title: 'Développement & paiements', body: 'On construit, on branche Mobile Money et paiement international, on teste chaque devise et chaque méthode de paiement.', deliverable: 'boutique fonctionnelle sur environnement de test' },
      { title: 'Tests & recette', body: 'On vérifie que chaque parcours d\'achat fonctionne réellement — commande, paiement, confirmation — avant la mise en ligne.', deliverable: 'recette complète des parcours d\'achat' },
      { title: 'Lancement & formation', body: 'On met en ligne, on forme votre équipe à gérer le catalogue et les commandes, et on reste pour faire performer les premières semaines.', deliverable: 'boutique en ligne, équipe formée' },
    ],
  },

  pricing: {
    eyebrow: 'Investissement',
    title: 'Combien ça coûte ?',
    body: "Nos boutiques démarrent à [À PARTIR DE]. Le prix final dépend de ce qu'on construit : nombre de produits, paiements internationaux, connexions à vos outils. On cadre la valeur avec vous avant de chiffrer — pas de devis surprise.",
    cardLabel: 'Boutique en ligne',
    pricePlaceholder: '[À PARTIR DE]',
    includes: [
      'Boutique complète, paiement local + international',
      'Formation + prise en main',
      'Accès et domaine à votre nom',
    ],
    cta: { label: 'Demander un devis gratuit', href: '#contact' },
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: "Ce qu'on nous demande sur les boutiques.",
    items: [
      { q: "Puis-je vraiment vendre à l'international et à la diaspora ?", a: "Oui — c'est notre terrain. On branche Mobile Money local (Wave, Orange Money) et le paiement international par carte, pour vendre du Sénégal vers l'étranger." },
      { q: 'Shopify, WooCommerce ou sur-mesure — comment on choisit ?', a: "On part de votre catalogue, votre budget et vos besoins de gestion. On recommande l'outil adapté — jamais l'inverse — et on vous l'explique clairement." },
      { q: "Je gère déjà mes ventes sur WhatsApp — on repart de zéro ?", a: "Non — on garde ce qui marche. WhatsApp reste un canal ; la boutique structure le catalogue, le paiement et le suivi pour que vous arrêtiez de tout faire à la main." },
      { q: "La boutique et les accès m'appartiennent ?", a: 'Entièrement. Domaine, hébergement, comptes de paiement et back-office sont à votre nom. Pas de dépendance — c\'est une règle chez nous.' },
      { q: 'Combien de temps pour lancer une boutique ?', a: 'En général entre 4 et 8 semaines selon le nombre de produits et la disponibilité de vos visuels et descriptions. On cadre le calendrier dès le premier échange.' },
      { q: 'La boutique gère mon stock automatiquement ?', a: "Oui, dans les limites de l'outil choisi : Shopify et WooCommerce suivent vos stocks et vous alertent quand un produit se termine. Pour une gestion plus poussée (multi-entrepôt, fournisseurs), on peut connecter un ERP — c'est l'étape « Le système »." },
    ],
  },

  systemBridge: {
    eyebrow: 'Une fois que ça vend',
    title: 'On connecte le reste.',
    body: "Quand votre boutique tourne, on peut la relier à votre stock (ERP), automatiser les tâches répétitives (reporting, relances panier — comme chez ATTA), ou travailler l'acquisition. On commence par ce qui fait entrer l'argent.",
    link: { label: 'Découvrir Le système →', href: '/#systeme' },
  },

  finalCta: {
    eyebrow: 'On en parle ?',
    title: "Vous vendez en DM et ça déborde ? Construisons votre boutique.",
    body: "Racontez-nous votre projet — on revient vers vous en moins de 24 h avec un premier cadrage et un devis gratuit.",
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: 'WhatsApp', href: 'https://wa.me/221783438249' },
    ],
    features: ['Réponse sous 24 h', 'Devis gratuit', 'Vous possédez tout'],
  },
};
