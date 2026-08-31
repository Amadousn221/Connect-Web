import type { SVGProps } from 'react';

// Jeu d'icônes fonctionnelles — SVG inline (le projet n'embarque pas de
// librairie d'icônes ; convention identique à ContactSection / SystemRoad).
// Trait 1.6, viewBox 24, `currentColor` : la couleur vient du conteneur.
// Décoratives par défaut (`aria-hidden`) — passer `role="img"` + `aria-label`
// à l'appelant si l'icône porte l'information.

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

// ── Section « En chiffres » ────────────────────────────────────────────────
export function CalendarIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="4.5" width="18" height="16" rx="1.5" />
      <path d="M3 9.5h18M8 3v3M16 3v3" />
    </Svg>
  );
}

export function FolderStackIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 8.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7L9.5 4.5H5A2 2 0 0 0 3 6.5" />
      <path d="M3 12.5h18" />
    </Svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </Svg>
  );
}

export function RepeatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" />
      <path d="M20 4v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" />
      <path d="M4 20v-4h4" />
    </Svg>
  );
}

// ── Section « On montre, on ne prétend pas » ──────────────────────────────
export function UsersIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 19a5.5 5.5 0 0 0-3-4.9" />
    </Svg>
  );
}

export function ImageFrameIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
      <circle cx="8.5" cy="10" r="1.8" />
      <path d="m4 17 5-4.5 4 3.5 3-2.5 4 3.5" />
    </Svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3 5 5.8V11c0 4.6 3 8 7 9.8 4-1.8 7-5.2 7-9.8V5.8L12 3Z" />
      <path d="m9 11.6 2.2 2.2L15.4 9.6" />
    </Svg>
  );
}

// ── Page Agence ───────────────────────────────────────────────────────────
export function CheckCircleIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.4 2.4 4.6-4.8" />
    </Svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Svg>
  );
}
