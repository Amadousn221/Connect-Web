import type { NeedOption } from '../types';

// ── P25 S05 — À qui on parle (AudienceRouter) ──────────────────────────────
// Brief P25 §S05 nomme 6 situations en framing AUDIENCE/TYPE D'ORGANISATION
// (B2B/export, e-commerce, ONG, écoles, industrie, entrepreneurs) — distinct du
// framing BESOIN/RÉSULTAT de l'ancien NeedSelector (content/fr/accueil.ts,
// needOptions[], 5 items, absorbé par ce fichier). On réutilise le type
// `NeedOption` (même forme desktop liste+panneau / mobile accordéon) plutôt que
// d'en créer un nouveau (composant `AudienceRouter` réutilise le squelette
// d'interaction de `NeedSelector.tsx`, cf. plan P25 §3).
//
// Les 6 segments reprennent la liste déjà réelle et validée
// `contactFormContent.orgTypes` (accueil.ts) — plus proche du framing « type
// d'organisation » du brief que les 5 needOptions orientées besoin. Chaque
// situation/réponse est une copy éditoriale (persona), pas un fait vérifiable :
// sourcée quand une page d'offre ou needOptions existant le permet, sinon
// rédigée sobrement sans rien affirmer d'invérifiable (aucun chiffre, client
// ou résultat inventé).

export const audienceRouterIntro = {
  eyebrow: "À qui on parle",
  title: 'Des organisations très différentes, un même point de départ.',
};

export const audienceSegments: NeedOption[] = [
  {
    key: 'entreprise-pme',
    label: 'Entreprise / PME',
    hint: 'Présence, crédibilité, export',
    situation:
      "« Notre site est daté, et face à un client ou un partenaire à l'international, ça se voit en quelques secondes. »",
    answer:
      "On construit une présence au standard international, bilingue FR/EN, qui rassure vos clients, partenaires et investisseurs — où qu'ils soient.",
    delivers: ["Site d'entreprise", 'Bilingue FR/EN', 'Refonte & SEO'],
    link: { label: 'Découvrir', href: '/services/sites-entreprise' },
  },
  {
    key: 'commerce-marque',
    label: 'Commerce ou marque',
    hint: 'E-commerce, cross-border, paiement mobile',
    situation:
      "« On vend bien à Dakar. Mais la diaspora nous écrit, et on n'a aucun moyen propre de l'encaisser. »",
    answer:
      'On construit des boutiques faites pour vendre au-delà des frontières : catalogue, paiement mobile et international côte à côte, livraison, relances.',
    delivers: ['Shopify / WooCommerce', 'Paiement mobile & international', 'Livraison & logistique'],
    link: { label: 'Découvrir', href: '/services/boutiques-en-ligne' },
  },
  {
    key: 'ong-institution',
    label: 'ONG / institution',
    hint: 'Mission, bailleurs, plaidoyer',
    situation:
      "« Avant de signer, un bailleur ouvre notre site pour vérifier qu'on existe vraiment. Le nôtre ne nous rend pas justice. »",
    answer:
      "On construit une présence à la hauteur de votre mission : crédibilité auprès des bailleurs, clarté du plaidoyer, autonomie éditoriale de votre équipe.",
    delivers: ['Site institutionnel & ONG', 'Publications & rapports', 'Autonomie éditoriale'],
    link: { label: 'Découvrir', href: '/services/sites-institutionnels-ong' },
  },
  {
    key: 'ecole-formation',
    label: 'École / organisme de formation',
    hint: 'Présence, inscriptions, crédibilité',
    situation:
      "« Les familles et les partenaires nous cherchent en ligne avant de nous appeler — et ce qu'ils trouvent ne dit pas qui on est. »",
    answer:
      "On construit une présence claire — programmes, admissions, résultats — qui installe la confiance avant le premier échange.",
    delivers: ['Site institutionnel', 'Refonte & SEO'],
    link: { label: 'Découvrir', href: '/services/sites-entreprise' },
  },
  {
    key: 'industrie-filiere',
    label: 'Industrie / filière',
    hint: 'B2B, export, relation long terme',
    situation:
      "« Nos partenaires à l'export jugent notre sérieux sur notre site avant même le premier appel. »",
    answer:
      "On construit une présence B2B/export qui tient la comparaison avec vos homologues internationaux — offre, preuve, contact.",
    delivers: ["Site d'entreprise (B2B/export)", 'Bilingue FR/EN'],
    link: { label: 'Découvrir', href: '/services/sites-entreprise' },
  },
  {
    key: 'entrepreneur',
    label: 'Entrepreneur / porteur de projet',
    hint: 'Cadrage, priorisation, premier pas',
    situation:
      "« Site, boutique, ERP, automatisation : je ne sais pas ce qui compte en premier, ni par où commencer. »",
    answer:
      "On cadre votre projet avec un audit gratuit : ce qui compte en premier, la bonne architecture, sans engagement.",
    delivers: ['Audit gratuit', 'Priorisation', 'Cadrage & devis'],
    link: { label: 'Conseil & audit gratuit', href: '/services/conseil-strategie' },
  },
];
