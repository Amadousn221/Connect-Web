import type { SVGProps } from 'react';
import type { OfferIconKey } from '@/content/types';

// P25 §S06/§12 — jeu d'icônes sur-mesure des 8 offres (4 Niveau 1 + 3 Système
// + Conseil, DECISION 03). Convention identique à components/ui/icons.tsx :
// trait 1.6, viewBox 24, `currentColor`, même grille de construction (marges
// ~3-4px, primitives simples). Interdit par le brief P25 (D27) : icône de
// librairie générique, grille interchangeable — chaque icône ci-dessous est
// dessinée pour son offre, pas piochée dans un set tiers.

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width="24"
      height="24"
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

// Boutiques en ligne — sac (commerce).
function BoutiquesIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 8V6.5a4 4 0 0 1 8 0V8" />
      <rect x="5" y="8" width="14" height="12" rx="1.5" />
      <path d="M9 12v2M15 12v2" />
    </Svg>
  );
}

// Plateformes & applications — tableau de bord.
function PlateformesIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 9.5h18" />
      <rect x="6" y="12.5" width="5" height="4" rx="0.6" />
      <rect x="13" y="12.5" width="5" height="4" rx="0.6" />
    </Svg>
  );
}

// Sites d'entreprise — immeuble (présence, crédibilité).
function EntrepriseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="6" y="3.5" width="12" height="17" rx="1" />
      <path d="M6 9h12M6 14h12" />
      <rect x="10.4" y="17" width="3.2" height="3.5" />
    </Svg>
  );
}

// Sites institutionnels & ONG — fanion (mission portée).
function OngIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 21V3" />
      <path d="M6 4.2 18 8l-12 3.8" />
    </Svg>
  );
}

// Odoo / ERP-CRM — modules reliés (système).
function OdooIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.4" y="3.4" width="6.2" height="6.2" rx="1.3" />
      <rect x="3.4" y="14.4" width="6.2" height="6.2" rx="1.3" />
      <rect x="14.4" y="8.9" width="6.2" height="6.2" rx="1.3" />
      <path d="M9.6 6.5h1.6a3.2 3.2 0 0 1 3.2 3.2M9.6 17.5h1.6a3.2 3.2 0 0 0 3.2-3.2" />
    </Svg>
  );
}

// IA & automatisation — boucle + éclair (workflow automatisé).
function AutomatisationIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 12a8 8 0 0 1 13-6.3" />
      <path d="M17 3v4h-4" />
      <path d="M20 12a8 8 0 0 1-13 6.3" />
      <path d="M7 21v-4h4" />
      <path d="M13.4 9.3l-2 3.1h2.4l-2 3.4" />
    </Svg>
  );
}

// Marketing & acquisition — courbe ascendante.
function MarketingIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 17l5.5-5.5L13 15l6.5-6.5" />
      <path d="M15 8.5h4.5V13" />
      <circle cx="9.5" cy="11.5" r="1" />
    </Svg>
  );
}

// Conseil & stratégie — loupe + validation (audit).
function ConseilIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="10.2" cy="10.2" r="6.2" />
      <path d="M14.7 14.7 20 20" />
      <path d="M7.4 10.3l1.8 1.8 3.6-4" />
    </Svg>
  );
}

const ICONS: Record<OfferIconKey, (props: IconProps) => React.ReactElement> = {
  boutiques: BoutiquesIcon,
  plateformes: PlateformesIcon,
  entreprise: EntrepriseIcon,
  ong: OngIcon,
  odoo: OdooIcon,
  automatisation: AutomatisationIcon,
  marketing: MarketingIcon,
  conseil: ConseilIcon,
};

/** Icône d'offre — décorative par défaut (`aria-hidden`), couleur héritée du conteneur. */
export function OfferIcon({
  offer,
  ...props
}: { offer: OfferIconKey } & IconProps) {
  const Icon = ICONS[offer];
  return <Icon {...props} />;
}
