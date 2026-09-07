import type { SVGProps } from 'react';

// ── IconSet — jeu d'icônes SUR-MESURE Connect Web (Refonte Accueil, D27) ────
// Une icône par offre. Langage visuel unique : géométrique, viewBox 24, grille
// de construction commune, trait 1.6 constant, `currentColor`, angles vifs.
// PAS une librairie d'icônes générique — chaque glyphe est propre au sens de
// l'offre. Décoratives (`aria-hidden`) : le titre de la carte porte le sens.

export type ServiceIconName =
  | 'web'
  | 'ecommerce'
  | 'apps'
  | 'erp'
  | 'automation'
  | 'marketing'
  | 'conseil';

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

const ICONS: Record<ServiceIconName, (props: IconProps) => React.ReactElement> = {
  // Fenêtre / présence en ligne
  web: (props) => (
    <Svg {...props}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M6.5 6.5h.01M9.5 6.5h.01" />
    </Svg>
  ),
  // Sac / panier — boutique en ligne
  ecommerce: (props) => (
    <Svg {...props}>
      <path d="M5 8h14l-1.3 10.5a2 2 0 0 1-2 1.98H8.3a2 2 0 0 1-2-1.98L5 8Z" />
      <path d="M8.5 8V6a3.5 3.5 0 0 1 7 0v2" />
    </Svg>
  ),
  // Panneaux applicatifs superposés
  apps: (props) => (
    <Svg {...props}>
      <rect x="3.5" y="8" width="12" height="12" rx="1.5" />
      <path d="M8 8V5.5A1.5 1.5 0 0 1 9.5 4h9A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H16" />
    </Svg>
  ),
  // Hub : un noyau relié à quatre modules
  erp: (props) => (
    <Svg {...props}>
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.6" />
      <rect x="2.5" y="2.5" width="4" height="4" rx="0.6" />
      <rect x="17.5" y="2.5" width="4" height="4" rx="0.6" />
      <rect x="2.5" y="17.5" width="4" height="4" rx="0.6" />
      <rect x="17.5" y="17.5" width="4" height="4" rx="0.6" />
      <path d="m6.8 6.8 2.9 2.9M17.2 6.8l-2.9 2.9M6.8 17.2l2.9-2.9M17.2 17.2l-2.9-2.9" />
    </Svg>
  ),
  // Flux automatisé entre blocs
  automation: (props) => (
    <Svg {...props}>
      <rect x="2.5" y="9" width="6" height="6" rx="0.8" />
      <rect x="15.5" y="3.5" width="6" height="6" rx="0.8" />
      <rect x="15.5" y="14.5" width="6" height="6" rx="0.8" />
      <path d="M8.5 12h3.5a2.5 2.5 0 0 0 2.5-2.5V6.5M8.5 12h3.5a2.5 2.5 0 0 1 2.5 2.5v5" />
    </Svg>
  ),
  // Entonnoir d'acquisition
  marketing: (props) => (
    <Svg {...props}>
      <path d="M3.5 5h17l-6.5 7.5V19l-4 2v-8.5L3.5 5Z" />
    </Svg>
  ),
  // Boussole / cap
  conseil: (props) => (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-4.2 1.6L9.7 14.3l4.2-1.6 1.6-4.2Z" />
    </Svg>
  ),
};

export function ServiceIcon({
  name,
  ...props
}: { name: ServiceIconName } & IconProps) {
  return ICONS[name](props);
}
