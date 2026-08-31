// ── Slider « Les outils qu'on maîtrise » (vague 4) ───────────────────────
// PAS un mur de « partenaires » : Connect Web n'est certifié par aucun de ces
// éditeurs (DECISION 05). Intitulé = « les outils qu'on maîtrise », jamais
// « partenaires » ni « partenaires certifiés ».
//
// `src` = logo détouré dans /public/assets/logos-tech (monochrome, ~40px de
// haut, guidelines de marque respectées). Absent = repère [LOGO_TECHNO_MANQUANT]
// visible en preview uniquement — jamais de tuile vide, jamais de faux logo.

export const technosIntro = {
  title: "Les outils qu'on maîtrise.",
  subtitle: 'On choisit selon le projet, pas l’inverse.',
};

export type Techno = { name: string; src?: string };

export const technos: Techno[] = [
  { name: 'Shopify' },
  { name: 'WooCommerce' },
  { name: 'WordPress' },
  { name: 'Next.js' },
  { name: 'React' },
  { name: 'Odoo' },
  { name: 'HubSpot' },
  { name: 'Mailchimp' },
  { name: 'Klaviyo' },
  { name: 'n8n' },
];
