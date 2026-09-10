// ── Page parente « Conception et développement web » — copy figée FR ───────
//
// Route : /services/conception-et-developpement-web
// Source éditoriale : CONNECT-WEB-CONCEPTION-DEVELOPPEMENT-WEB-ARCHITECTURE-COPY-V1.md
//   (Opus, autorité éditoriale).
// Composition : maquette connect-web-conception-developpement-web-v2.html
//   — état FINAL rendu par le 2ᵉ script (12 sections). Le <script type=
//   "application/json"> initial est un leurre (ancienne V2 du hub) : ignoré.
//
// Arbitrages appliqués :
//   - Hero : chapô court (version maquette, direction PO « intros Hero
//     raccourcies » — handoff 00-LIRE-AVANT §41). Le chapô long d'Opus §S1
//     n'est pas repris.
//   - S4 / S5 : renvois vers Développement WordPress, Développement Shopify et
//     Refonte de site internet — routes créées en page d'attente `noindex`
//     (décision PO 2026-09-09). Elles ne sont pas encore dans la nav globale.
//   - S9 : « Voir le cas » → /realisations tant que /realisations/[slug]
//     n'existe pas. Carte Link Shop tenue prudente (faits techniques à
//     re-confirmer — Opus §6.4).
//   - Montants FAQ Q1 (300 000 / 500 000 FCFA) : portés AVEC la mention
//     « à confirmer avant publication » (Opus §6.3).
//   - Aucune bande de chiffres, aucun témoignage (Opus §7.5).
//
// Contenu HARDCODÉ FR (même approche que content/fr/servicesHub.ts), non Sanity.

export type CwLink = { label: string; href: string };

export const cwMeta = {
  // Opus §5.3 — 57 caractères.
  title: 'Conception et développement de sites web — Connect Web',
  description:
    "Conception et développement de sites web à Dakar : sites d'entreprise, institutionnels et boutiques en ligne — WordPress, Shopify ou développement adapté.",
};

export const cwHero = {
  eyebrow: 'Conception et développement web',
  title: 'Un site web pensé pour ce que votre organisation doit accomplir.',
  intro:
    "Nous concevons des sites d'entreprise, institutionnels et e-commerce en partant d'une question essentielle : que doit accomplir votre site ? WordPress, Shopify ou développement adapté, la technologie vient ensuite.",
  primaryCta: { label: 'Parlons de votre projet', href: '#contact' },
  secondaryCta: { label: 'Voir nos réalisations', href: '/realisations' },
  reassurance: [
    'Réponse sous 24 h',
    'Devis gratuit',
    'Vos accès vous appartiennent',
  ],
};

// ── S2 — Poser la bonne question ──────────────────────────────────────────
export const cwIntent = {
  eyebrow: "Commencer par l'intention",
  title: 'Avant de choisir un type de site, poser la bonne question',
  body:
    "Les projets web qui ratent leur cible commencent souvent par la maquette ou la technologie, avant d'avoir cadré l'usage attendu. Un site utile répond d'abord à une intention nette. Il peut y en avoir plusieurs, mais une domine presque toujours — la nommer avant tout choix technique, c'est le premier travail que nous faisons avec vous.",
  /** Sélecteur : chaque intention garde son contenu dans le DOM (contrat UX). */
  intents: [
    {
      label: 'Être trouvé et compris',
      text: "Par des visiteurs qui ne vous connaissent pas encore et doivent identifier en quelques secondes ce que vous faites et pour qui.",
    },
    {
      label: 'Provoquer un contact',
      text: "Transformer une visite en prise de contact qualifiée, dans un contexte B2B ou de services.",
    },
    {
      label: 'Vendre directement',
      text: "Construire un parcours d'achat complet pour un produit ou un service, du catalogue au paiement.",
    },
    {
      label: 'Faire rayonner une mission',
      text: "Organiser programmes, publications et informations pour des publics multiples — bénéficiaires, partenaires, bailleurs, presse.",
    },
    {
      label: 'Digitaliser une relation',
      text: "Si des utilisateurs identifiés doivent agir régulièrement (portail, compte, tableau de bord), il ne s'agit plus d'un site : une plateforme y répond mieux.",
    },
  ],
  routeNote: {
    text: "Votre projet est un portail, une application, un tableau de bord ou un outil interne ?",
    link: {
      label: 'Voir Plateformes et applications web',
      href: '/services/plateformes-applications',
    },
  },
};

// ── S3 — Trois usages ─────────────────────────────────────────────────────
export const cwUsages = {
  eyebrow: 'Choisir par usage',
  title: 'Trois usages, trois pages dédiées',
  lead:
    "Identifiez d'abord ce que votre site doit accomplir en priorité. Chaque destination approfondit ensuite les besoins propres à votre organisation.",
  items: [
    {
      audience: 'Entreprises et prestataires',
      icon: 'building',
      title: "Sites d'entreprise",
      text: "Présenter vos services, inspirer confiance en dix secondes et favoriser une prise de contact qualifiée. B2B, cabinets, bureaux d'études, exportateurs, industries.",
      link: { label: "Voir Sites d'entreprise", href: '/services/sites-entreprise' },
    },
    {
      audience: 'Organisations et institutions',
      icon: 'landmark',
      title: 'Sites institutionnels & ONG',
      text: "Structurer missions, programmes et publications, et s'adresser à plusieurs publics à la fois : bénéficiaires, partenaires, bailleurs, presse, grand public.",
      link: {
        label: 'Voir Sites institutionnels & ONG',
        href: '/services/sites-institutionnels-ong',
      },
    },
    {
      audience: 'Marques et commerçants',
      icon: 'shopping-bag',
      title: 'Boutiques en ligne',
      text: "Vendre avec un parcours complet — produits physiques ou numériques, catalogue étendu, ventes transfrontalières. Nous intégrons les moyens de paiement adaptés à votre marché.",
      link: { label: 'Voir Boutiques en ligne', href: '/services/boutiques-en-ligne' },
    },
  ],
};

// ── S4 — Choix de la plateforme ──────────────────────────────────────────
export const cwPlatform = {
  eyebrow: 'Choisir la plateforme',
  title: 'WordPress, Shopify ou développement adapté',
  lead:
    "Une fois le type de site clarifié, reste à choisir sur quoi il sera construit. Ce choix ne se fait pas au hasard ni par préférence de l'agence : il découle du type de projet, de la complexité de vos contenus, de vos besoins d'administration et de l'écosystème à connecter.",
  cards: [
    {
      kind: 'wordpress' as const,
      brand: 'wordpress' as const,
      eyebrow: 'Sites éditoriaux et institutionnels',
      title: 'WordPress',
      text: "La plateforme la plus polyvalente pour les sites dont le contenu vit et évolue régulièrement, avec une administration confortable pour les équipes non techniques. WooCommerce en extension pour les boutiques d'ampleur modérée.",
      link: { label: 'Voir Développement WordPress', href: '/services/developpement-wordpress' },
    },
    {
      kind: 'shopify' as const,
      brand: 'shopify' as const,
      eyebrow: 'Commerce en ligne',
      title: 'Shopify',
      text: "La plateforme spécialisée e-commerce, adaptée aux marques DTC, aux ventes transfrontalières et aux catalogues qui gèrent plusieurs devises, zones et moyens de paiement. Notre projet ATTA Africa en est l'illustration.",
      link: { label: 'Voir Développement Shopify', href: '/services/developpement-shopify' },
    },
  ],
  adapted: {
    icon: 'code',
    eyebrow: 'Quand les outils standards ne suffisent pas',
    title: 'Développement adapté',
    text: "Pour une expérience particulière ou une intégration profonde avec vos outils, nous développons une solution dédiée. Ce cas relève souvent de notre expertise Plateformes & applications web plutôt que d'un site classique.",
    link: {
      label: 'Voir Plateformes et applications web',
      href: '/services/plateformes-applications',
    },
  },
  choiceNote: {
    title: 'Comment se fait le choix ?',
    text: "Nous n'ouvrons pas la conversation par « WordPress ou Shopify ? ». Nous commençons par comprendre votre projet, votre équipe et vos contenus. La réponse tombe ensuite d'elle-même — et nous vous expliquons pourquoi.",
  },
};

// ── S5 — Refonte ─────────────────────────────────────────────────────────
export const cwRefonte = {
  eyebrow: 'Votre site existe déjà',
  title: 'Le cas particulier de la refonte',
  body:
    "Un site daté, difficile à administrer, absent des résultats de recherche ou devenu incohérent avec votre organisation ne demande pas automatiquement une reconstruction totale. Une refonte n'est pas une création avec un ancien site en toile de fond : c'est un exercice à part, avec ses questions propres. Nous commençons systématiquement par un diagnostic.",
  questionsTitle: 'Les questions à résoudre avant de reconstruire',
  questions: [
    'Que conserver des contenus, images et adresses de pages existantes ?',
    'Comment préserver le référencement acquis pendant la migration ?',
    "Faut-il changer de plateforme, ou améliorer profondément l'actuelle ?",
    'Comment assurer la continuité pour vos visiteurs pendant la transition ?',
  ],
  link: { label: 'Voir Refonte de site internet', href: '/services/refonte-site-internet' },
};

// ── S6 — Méthode en six temps ────────────────────────────────────────────
export const cwMethod = {
  eyebrow: 'Notre méthode',
  title: 'Comment nous concevons un site, en six temps',
  lead:
    "Nous ne commençons jamais par ouvrir un logiciel de maquette. La conception d'un site utile suit une séquence stable, que nous compressons ou étirons selon la complexité du projet.",
  steps: [
    { icon: 'compass', title: 'Cadrer', text: "Intention, publics et critères de réussite du site." },
    { icon: 'layout', title: 'Structurer', text: "Arborescence, hiérarchie des pages, parcours du visiteur, ancrage des appels à l'action." },
    { icon: 'pen-tool', title: 'Concevoir', text: "Maquettes, choix visuels, hiérarchie typographique, composants réutilisables — sur les gabarits qui portent l'essentiel." },
    { icon: 'file-text', title: 'Écrire', text: "Créer, réécrire ou intégrer les contenus. Un site n'existe pas sans ses textes." },
    { icon: 'code', title: 'Développer', text: "Intégration des contenus, connexions nécessaires, points de validation intermédiaires." },
    { icon: 'key', title: 'Transmettre', text: "Mise en ligne, redirections, formation de vos équipes, mesure des premiers résultats." },
  ],
};

// ── S7 — Ce qui fait qu'un site tient ────────────────────────────────────
export const cwDurable = {
  eyebrow: 'Conçu pour durer',
  title: "Ce qui fait qu'un site tient dans le temps",
  lead:
    "Un site n'est pas un livrable figé. Il vieillit, ou il vit, selon quatre décisions prises dès la conception.",
  items: [
    {
      icon: 'file-text',
      title: 'Le contenu',
      text: "Le premier facteur, avant le design et la technique. Des textes précis et sincères convertissent mieux qu'un site parfait mais générique. Nous en parlons dès le cadrage.",
    },
    {
      icon: 'search',
      title: 'Le référencement naturel',
      text: "Nous appliquons les bonnes pratiques SEO à la conception — structure, balisage, performances, contenus lisibles par les moteurs — sans jamais promettre de position sur Google : personne ne peut le faire honnêtement.",
    },
    {
      icon: 'settings',
      title: "L'administration",
      text: "Un site qui décourage l'équipe qui doit l'alimenter se fossilise. Nous concevons l'interface pour que vos équipes publient sans nous rappeler chaque semaine.",
    },
    {
      icon: 'gauge',
      title: 'Performance et accessibilité',
      text: "Un site rapide, léger, lisible sur mobile et accessible. Sur le terrain ouest-africain, une attention particulière au poids des pages et à la qualité de réseau variable.",
    },
  ],
};

// ── S8 — Propriété ───────────────────────────────────────────────────────
export const cwOwnership = {
  eyebrow: 'Autonomie',
  title: 'Votre site, votre code, vos accès',
  lead:
    "À la livraison, vous êtes propriétaire de votre site. Nous transmettons ce qui vous appartient et précisons clairement ce qui dépend de services tiers.",
  rows: [
    { icon: 'globe', label: 'Domaine', text: 'Enregistré à votre nom.' },
    { icon: 'server', label: 'Hébergement', text: 'Compte à votre nom, auquel vous avez accès.' },
    { icon: 'key', label: 'Administration', text: 'Accès administrateurs du CMS remis à votre équipe.' },
    { icon: 'code', label: 'Code', text: 'Thème et développements spécifiques remis et documentés.' },
    { icon: 'files', label: 'Contenus', text: 'Base de données et images exportables à tout moment.' },
  ],
  aside: {
    icon: 'puzzle',
    eyebrow: 'Limite transparente',
    title: 'Services et licences tiers',
    text: "Une licence de thème premium, une extension propriétaire ou un service SaaS intégré conserve ses propres conditions. Ces dépendances sont expliquées au cadrage et formalisées au contrat — nous préférons cette clarté à des promesses absolues.",
  },
};

// ── S9 — Réalisations web ────────────────────────────────────────────────
export const cwProjects = {
  eyebrow: 'Projets réels',
  title: 'Ce que nous avons livré sur le web',
  lead:
    "Deux projets illustrent des approches différentes. L'ensemble de nos réalisations est accessible via le portfolio.",
  cards: [
    {
      badge: 'Shopify · Cross-border',
      title: 'ATTA Africa',
      text: "Boutique DTC premium : plusieurs devises (EUR, USD, CAD, XOF), Mobile Money via PayDunya et paiements internationaux. Un projet e-commerce ambitieux sur le terrain ouest-africain.",
      image: { src: '/assets/real/atta-africa.png', alt: 'Capture de la boutique ATTA Africa' },
      link: { label: 'Voir le cas', href: '/realisations' },
    },
    {
      badge: 'WordPress · WooCommerce',
      title: 'Link Shop',
      text: "Boutique WooCommerce livrée par notre équipe — preuve de notre maîtrise de l'écosystème WordPress e-commerce. Faits techniques détaillés à confirmer avant publication.",
      image: { src: '/assets/real/link-shop.jpg', alt: 'Capture de la boutique Link Shop' },
      link: { label: 'Voir le cas', href: '/realisations' },
    },
  ],
  portfolio: {
    tags: ['ADA', 'DDS', 'WAS', '+6'],
    badge: 'Portfolio',
    title: 'Voir tous les projets',
    text: "Sites d'entreprise, sites de services, institutions et boutiques en ligne.",
    link: { label: "Voir l'ensemble des réalisations", href: '/realisations' },
  },
};

// ── S10 — Prolongements ──────────────────────────────────────────────────
export const cwExtensions = {
  eyebrow: 'Du site au système',
  title: "Ce qui vient après — ou à côté — d'un site",
  lead:
    "Un site est souvent la première brique d'un ensemble numérique plus large. Voici les prolongements les plus fréquents chez nous.",
  rows: [
    {
      icon: 'app-window',
      title: 'Plateformes & applications web',
      text: "Quand vos utilisateurs doivent faire quelque chose de récurrent : compte, tableau de bord, portail, système d'inscription.",
      link: { label: 'Explorer', href: '/services/plateformes-applications' },
    },
    {
      icon: 'database',
      title: 'ERP, CRM & intégrations',
      text: "Quand votre site doit communiquer avec vos outils de gestion (Odoo, CRM, comptabilité, facturation).",
      link: { label: 'Explorer', href: '/services/crm-erp-integrations' },
    },
    {
      icon: 'workflow',
      title: 'IA & automatisation',
      text: "Pour ce qui doit se déclencher automatiquement autour de votre site : rapports, relances, alertes, traitements récurrents.",
      link: { label: 'Explorer', href: '/services/ia-automatisation' },
    },
    {
      icon: 'megaphone',
      title: 'Marketing & génération de prospects',
      text: "Pour donner à votre site le trafic et les prospects qu'il mérite : SEO éditorial, campagnes d'acquisition, mesure de conversion.",
      link: { label: 'Explorer', href: '/services/marketing-acquisition' },
    },
    {
      icon: 'compass',
      title: 'Conseil & stratégie',
      text: "Si vous n'êtes pas encore certain qu'un site est la bonne réponse, ou avant tout engagement.",
      link: { label: 'Explorer', href: '/services/conseil-strategie' },
    },
  ],
};

// ── S11 — FAQ ────────────────────────────────────────────────────────────
export const cwFaqIntro = {
  eyebrow: "Ce qu'on nous demande",
  title: 'Questions fréquentes',
};

export const cwFaqItems = [
  {
    q: 'Combien coûte un site web ?',
    a: "Deux repères concrets : un site vitrine démarre à partir de 300 000 FCFA, une boutique en ligne à partir de 500 000 FCFA — dans les deux cas selon les fonctionnalités et la complexité des contenus. Un site institutionnel de taille moyenne, un site d'entreprise à plusieurs services ou une boutique aux besoins spécifiques dépassent ces seuils. Le devis est toujours gratuit et établi après une première conversation.",
    toValidateNote: 'Montants (300 000 / 500 000 FCFA) à reconfirmer avant publication.',
  },
  {
    q: "Combien de temps prend la livraison d'un site ?",
    a: "Notre délai moyen pour un premier livrable est de deux semaines. Un site vitrine simple peut être livré en un à deux mois ; un site plus structuré, une boutique ou une refonte importante prend plutôt deux à quatre mois selon le périmètre. Le calendrier précis est posé au cadrage, avec des jalons de validation.",
  },
  {
    q: 'Ferez-vous les contenus, ou est-ce à nous de tout écrire ?',
    a: "Trois configurations, choisies avec vous selon votre équipe et votre budget : vous fournissez les textes prêts à intégrer ; vous fournissez des documents source que nous reprenons et réécrivons pour le web ; ou nous rédigeons à partir d'entretiens avec vous. Dans tous les cas, la production éditoriale n'est jamais oubliée.",
  },
  {
    q: 'Pourrai-je administrer mon site moi-même après la livraison ?',
    a: "Oui. Nous concevons l'interface d'administration pour que vos équipes créent, modifient et publient sans nous. Une formation courte et une documentation sont prévues à la livraison. Si vous préférez déléguer l'entretien courant, nous proposons un accompagnement de maintenance — sans que vous y soyez forcé.",
  },
  {
    q: 'Est-ce que mon site sera bien référencé sur Google ?',
    a: "Nous appliquons les bonnes pratiques SEO à la conception : structure des pages, balisage, performances, contenu accessible aux moteurs, adaptations mobile. Nous ne promettons pas de position sur Google — personne ne peut le faire honnêtement. Un bon référencement dépend aussi du contenu publié régulièrement et parfois de campagnes d'acquisition, qui relèvent de notre expertise Marketing.",
  },
  {
    q: 'À qui appartiennent le site, le code et les accès ?',
    a: "À vous. Le domaine et l'hébergement sont enregistrés à votre nom, les accès administrateurs sont les vôtres, le code du thème et des développements spécifiques vous est remis, vos contenus sont exportables. Les seules limites concernent les éléments qui dépendent d'un tiers (licence de thème premium, extension propriétaire, service SaaS intégré) — nous vous le disons clairement au cadrage.",
  },
  {
    q: 'Mon site existe déjà. Pouvez-vous le reprendre ou l’améliorer ?',
    a: "Oui. Nous commençons par un diagnostic : ce qui fonctionne, ce qui est fragile, ce qui peut être conservé, ce qui doit être repensé. Selon les cas, l'intervention va d'améliorations ciblées à une refonte complète avec migration des contenus et plan de redirections pour préserver votre référencement acquis. Le détail vit sur notre page Refonte de site internet.",
  },
];

// ── S12 — Contact ────────────────────────────────────────────────────────
export const cwContact = {
  eyebrow: 'Prendre contact',
  title: 'Parlons de votre projet',
  lead:
    "Un nouveau site, une refonte à envisager, une boutique à ouvrir, ou seulement un doute sur la bonne direction : la première conversation est gratuite, sans engagement, et nous répondons sous 24 heures.",
};
