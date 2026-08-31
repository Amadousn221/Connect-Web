import type { OfferContent } from '../../offres';

// Sites institutionnels & ONG (offre Niveau 1). Copy extraite de
// `Connect Web - Sites institutionnels et ONG.dc.html`. Pas de section prix
// dédiée (le design l'évite volontairement pour le secteur associatif).
// Cas liés réels : WAS Africa, Fahamu Africa, Sunu Thiossane.

export const sitesInstitutionnelsOng: OfferContent = {
  slug: 'sites-institutionnels-ong',
  meta: {
    title: 'Sites institutionnels & ONG',
    description:
      "Crédibilité auprès des bailleurs, clarté du plaidoyer, autonomie éditoriale de votre équipe — un site conçu pour les organisations qui portent une mission au long cours, et que vous possédez entièrement.",
  },

  hero: {
    eyebrow: 'Sites institutionnels & ONG',
    breadcrumb: 'Sites institutionnels & ONG',
    title: 'Une présence numérique à la hauteur de votre mission.',
    subtitle:
      "Crédibilité auprès des bailleurs, clarté du plaidoyer, autonomie éditoriale de votre équipe — un site conçu pour les organisations qui portent une mission au long cours.",
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: 'Voir les sites livrés', href: '#cas' },
    ],
    features: ['Crédibilité auprès des bailleurs', 'Structure éditoriale claire', 'Vous possédez tout'],
    image: '/assets/svc-ong.jpg',
  },

  pain: {
    eyebrow: 'Le problème',
    title: "Votre mission mérite mieux qu'un site qui la dessert.",
    lead: "Bailleurs, partenaires et bénéficiaires jugent votre crédibilité en un coup d'œil. Un site daté ou confus fragilise la confiance que votre travail de terrain a construite — parfois pendant des années.",
    items: [
      { title: 'La confiance des bailleurs se joue en ligne', body: "Avant de signer une convention, un financeur ouvre votre site pour vérifier votre existence, votre gouvernance et vos résultats. Un site pauvre installe un doute qui ralentit — parfois bloque — la décision." },
      { title: 'Le plaidoyer se perd dans le désordre', body: "Sans structure éditoriale, vos prises de position, publications et résultats de terrain restent invisibles. Le message existe, mais il n'atteint pas les décideurs qu'il doit convaincre." },
      { title: "L'équipe dépend d'un tiers pour chaque publication", body: "Actualité, rapport annuel, communiqué : chaque mise à jour passe par une agence, un développeur ou un bénévole surchargé. La communication devient lente, coûteuse — ou s'arrête." },
      { title: 'Le budget web semble hors de portée', body: "Beaucoup d'organisations reportent année après année parce qu'elles pensent qu'un site professionnel est réservé aux grandes structures. Le projet reste dans la case « quand on aura les moyens » — pendant que les bailleurs, eux, regardent maintenant." },
      { title: "Le site appartient à quelqu'un d'autre", body: "Développeur bénévole parti, prestataire injoignable, hébergement au nom d'une personne physique — beaucoup d'ONG découvrent tardivement qu'elles ne contrôlent ni leur domaine, ni leur contenu, ni leurs accès." },
    ],
  },

  deliverables: {
    eyebrow: "Ce qu'on construit",
    title: 'Un site qui porte votre mission, pas qui la ralentit.',
    lead: 'Chaque section est pensée pour un lecteur précis — bailleur, partenaire, journaliste, bénévole, bénéficiaire. Rien de superflu, tout au service de votre mission.',
    items: [
      { title: 'Mission, programmes & impact', body: "Une architecture claire qui présente votre raison d'être, vos programmes actifs et vos résultats de terrain — assez de profondeur pour un bailleur, assez de simplicité pour un visiteur pressé." },
      { title: 'Espace bailleurs & partenaires', body: "Rapports annuels, gouvernance, comptes, partenaires historiques et actuels : un espace dédié qui répond aux questions des financeurs avant même qu'ils les posent." },
      { title: 'Actualités & plaidoyer', body: "Un fil éditorial que votre équipe met à jour elle-même — communiqués, prises de position, retours de terrain, appels — pour que votre voix ne dépende de personne." },
      { title: 'Bibliothèque de ressources', body: 'Rapports, études, publications, guides téléchargeables : un espace de référence qui installe votre organisation comme une source — pas seulement comme un acteur.' },
      { title: 'Contact ciblé par public', body: 'Presse, partenariats, dons, bénévolat, bénéficiaires — chaque public a un chemin clair vers le bon interlocuteur, sans passer par un formulaire générique unique.' },
      { title: 'Multi-langues si nécessaire', body: 'Français, anglais, langues nationales : le site peut porter votre message dans les langues de vos bailleurs et de vos communautés, sans doubler la charge éditoriale.' },
    ],
    toolsLabel: "Des outils qu'on maîtrise",
    tools: ['WordPress', 'Webflow', 'CMS simple à gérer soi-même', 'SEO de base', 'Multilingue'],
  },

  editorial: {
    eyebrow: 'Notre lecture du secteur',
    title: "Un site pour une ONG ne se conçoit pas comme un site d'entreprise.",
    blocks: [
      "Depuis Dakar, on a accompagné des organisations qui portent des missions différentes — souveraineté alimentaire, justice sociale, échanges culturels, éducation, plaidoyer régional. On connaît les contraintes du secteur : les cycles de financement qui rythment tout, les reportings attendus par les bailleurs, la nécessité d'une équipe autonome face au turnover, les publics multiples à adresser avec les mêmes ressources.",
      "On ne vous vend pas un site d'agence marketing habillé aux couleurs du non-lucratif. On conçoit une plateforme éditoriale et institutionnelle, dont la première fonction est de servir votre légitimité et votre capacité à mobiliser.",
    ],
    sideLabel: 'Ce qui guide notre travail',
    sideFacts: [
      'Compréhension des cycles bailleurs et de leurs attentes de transparence.',
      'Périmètre calibré à la réalité budgétaire du secteur associatif.',
      'Multi-langues natif — FR, EN, langues nationales.',
      'Optimisation mobile et connexions dégradées de la région.',
      "Formation de votre équipe pour ne plus dépendre d'un prestataire.",
    ],
  },

  why: {
    eyebrow: 'Pourquoi nous',
    title: 'Pourquoi une ONG choisit Connect Web.',
    lead: "Six raisons concrètes qui reviennent dans les échanges avec les organisations qu'on accompagne.",
    items: [
      { title: 'Un périmètre calibré à votre réalité budgétaire', body: "On ne vend jamais un « site premium générique ». On cadre ce qui compte pour votre mission cette année, quitte à prévoir une phase 2 pour plus tard." },
      { title: 'Votre équipe reste autonome après livraison', body: "Formation intégrée, CMS simple, documentation en français : personne dans votre équipe n'a besoin de nous pour publier une actualité ou mettre à jour un rapport." },
      { title: 'Vous possédez tout, dès le premier jour', body: "Domaine, hébergement, code, contenu, accès admin — tout est à votre nom. Aucun risque de dépendance à un prestataire ou un bénévole qui s'éloignerait." },
      { title: 'On parle la langue de vos bailleurs', body: 'Structure attendue par les financeurs, sections gouvernance et redevabilité, rapports annuels bien mis en avant : votre site répond aux questions que les bailleurs se posent.' },
      { title: 'Ancrés à Dakar, pensés pour la région', body: 'On connaît les contraintes de connexion, les formats mobiles dominants, les langues qui comptent. Le site est optimisé pour les réalités ouest-africaines.' },
      { title: 'Une agence, un interlocuteur', body: 'Pas de rotation d’équipe, pas de chef de projet qui disparaît. Vous savez qui vous parle, pendant le projet — et après.' },
    ],
  },

  relatedIntro: {
    eyebrow: 'Sites livrés',
    title: 'Des organisations qui portent leur mission en ligne.',
    lead: "Souveraineté alimentaire, justice sociale, échanges culturels — trois exemples de sites institutionnels livrés pour des organisations basées en Afrique de l'Ouest.",
  },
  relatedCaseNames: ['WAS Africa', 'Fahamu Africa', 'Sunu Thiossane'],

  benefits: {
    eyebrow: 'Ce que ça change',
    title: "Ce qu'un bon site institutionnel change concrètement pour votre organisation.",
    items: [
      { title: 'Gagner du temps sur la qualification bailleurs', body: "Fini le PowerPoint envoyé par email à chaque nouveau contact. Un lien, une lecture de deux minutes, un bailleur qui arrive au premier rendez-vous déjà convaincu que vous êtes une organisation sérieuse et structurée." },
      { title: "Sécuriser la continuité au-delà d'un projet financé", body: "Un financement se termine, un autre commence. Un site que vous possédez et que votre équipe fait vivre reste debout entre deux cycles, indépendamment des projets — et devient le socle stable de votre communication institutionnelle." },
      { title: 'Réduire la dépendance à une seule personne', body: "Le chargé de communication qui part n'emporte plus le mot de passe du site. Le président qui change ne bloque pas la mise à jour de la gouvernance. Le site appartient à l'organisation, pas à un individu." },
      { title: 'Devenir une référence dans votre secteur', body: "En publiant régulièrement rapports, prises de position et retours de terrain, votre organisation s'installe dans le paysage comme une voix qui compte — pas juste un acteur de plus. Sur la durée, ça change qui vous sollicite, qui vous cite, et qui vous finance." },
    ],
  },

  process: {
    eyebrow: 'Notre process',
    title: 'De la mission au site qui la porte.',
    lead: 'Sept étapes calibrées pour le secteur associatif, un livrable concret à chacune.',
    steps: [
      { title: 'Découverte de votre mission', body: 'On rencontre votre équipe, on comprend votre mission, on cartographie vos publics — bailleurs, partenaires techniques, journalistes, bénévoles, bénéficiaires — et on liste vos programmes actuels et à venir.', deliverable: 'note de cadrage synthétique' },
      { title: 'Cadrage bailleur-first', body: "On identifie précisément ce qu'un financeur cherche sur votre site : gouvernance, statuts, comptes, partenaires historiques, rapports d'impact. Cette liste devient le socle de la structure du site.", deliverable: 'liste priorisée des contenus de crédibilité' },
      { title: 'Architecture éditoriale', body: "On construit le plan du site en pensant public par public. Rien ne finit dans un menu « Autres ». Chaque section a un lecteur cible et un objectif défini.", deliverable: 'sitemap et parcours utilisateurs' },
      { title: 'Prototype validé sur maquette', body: "On dessine les pages-clés avant d'écrire une ligne de code. Vous validez sur maquette interactive, on itère jusqu'à ce que ce soit juste.", deliverable: 'maquettes desktop et mobile validées' },
      { title: 'Développement & intégration', body: 'On code le site, on intègre vos contenus — textes, images, PDF, vidéos — et on met en place le CMS que votre équipe utilisera au quotidien.', deliverable: 'site fonctionnel sur environnement de test' },
      { title: 'Formation de votre équipe', body: 'Session dédiée : publier une actualité, mettre à jour un rapport annuel, ajouter un partenaire, gérer les traductions. Documentation en français.', deliverable: 'formation en présentiel ou visio + documentation' },
      { title: 'Mise en ligne accompagnée', body: "Le site part en production. On reste disponibles les premières semaines pour ajuster ce qui doit l'être une fois face au vrai public.", deliverable: 'site en production + support de lancement' },
    ],
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: "Ce qu'on nous demande sur les sites associatifs.",
    items: [
      { q: 'Notre budget est limité — un site pro reste possible ?', a: "Oui. On adapte le périmètre à votre réalité budgétaire, sans sacrifier le sérieux nécessaire face aux bailleurs. On peut aussi découper le projet en phases pour lisser l'investissement sur plusieurs financements." },
      { q: 'Pourrons-nous publier nos actualités nous-mêmes ?', a: 'Oui. On choisit un CMS simple et on forme votre équipe pour publier actualités, programmes et rapports sans passer par nous. La documentation est en français et pensée pour une personne non-technique.' },
      { q: 'Le site peut-il évoluer si notre financement change ?', a: "Oui. On conçoit une base qui peut s'enrichir par la suite — nouvelles pages, nouvelles langues, nouveaux programmes — au rythme de vos moyens et de vos financements." },
      { q: 'Le site appartient-il à notre organisation ?', a: "Entièrement. Domaine, hébergement et accès sont à votre nom — indispensable pour la continuité au-delà d'un projet financé et pour ne dépendre d'aucune personne physique." },
      { q: 'Combien de temps prend un projet de site institutionnel ?', a: 'En général entre 6 et 12 semaines, selon le périmètre et la disponibilité de vos contenus. On cadre le calendrier dès le kick-off en tenant compte de vos échéances.' },
      { q: 'Le site sera-t-il accessible aux publics avec connexion limitée ?', a: "Oui. On conçoit mobile-first, on optimise le poids des pages et des images, et on teste sur des connexions dégradées. C'est un pré-requis pour toucher les publics dispersés, en zone rurale ou peu connectés." },
    ],
  },

  systemBridge: {
    eyebrow: 'Aller plus loin',
    title: 'Besoin de gérer bénévoles, dons ou bénéficiaires ?',
    body: 'Quand vos besoins grandissent, un CRM léger ou des automatisations simples peuvent faire gagner du temps — toujours dimensionnés à votre réalité, jamais imposés.',
  },

  finalCta: {
    eyebrow: 'On en parle ?',
    title: "Prêt à donner à votre mission le site qu'elle mérite ?",
    body: 'Racontez-nous votre projet — on revient vers vous en moins de 24 h avec un premier cadrage et un devis gratuit.',
    ctas: [
      { label: 'Parlons de votre projet', href: '#contact' },
      { label: 'WhatsApp', href: 'https://wa.me/221783438249' },
    ],
    features: ['Réponse sous 24 h', 'Devis gratuit', 'Vous possédez tout'],
  },
};
