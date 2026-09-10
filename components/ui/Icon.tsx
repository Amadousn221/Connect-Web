import type { SVGProps } from 'react';

// ── Registre d'icônes Services — SVG inline « maison », aucune dépendance ────
//
// Langage visuel unique et cohérent avec `components/ui/icons.tsx` et
// `service-icons.tsx` : viewBox 24, trait 1.6, `currentColor`, extrémités
// arrondies. Repris du vocabulaire des maquettes validées du pack Services
// (`CONNECT-WEB-SERVICES-HANDOFF-V1`), qui décorent chaque titre de carte /
// ligne d'un glyphe linéaire orange ~22 px.
//
// Décoratives par défaut (`aria-hidden`) : le titre porte toujours le sens.
// Pour une icône porteuse d'information, passer `role="img"` + `aria-label`.

export type IconName =
  | 'building'
  | 'landmark'
  | 'shopping-bag'
  | 'store'
  | 'code'
  | 'compass'
  | 'layout'
  | 'pen-tool'
  | 'file-text'
  | 'files'
  | 'search'
  | 'settings'
  | 'gauge'
  | 'globe'
  | 'server'
  | 'key'
  | 'puzzle'
  | 'app-window'
  | 'database'
  | 'workflow'
  | 'megaphone'
  | 'layers'
  | 'route'
  | 'users'
  | 'check'
  | 'git-branch'
  | 'eye'
  | 'ruler'
  | 'badge-check'
  | 'pointer'
  | 'smartphone'
  | 'folder'
  | 'message'
  | 'file-pen'
  | 'user-cog'
  | 'book'
  | 'newspaper'
  | 'type'
  | 'accessibility'
  | 'briefcase'
  | 'credit-card'
  | 'truck'
  | 'package'
  | 'clipboard'
  | 'bar-chart'
  | 'shield-check'
  | 'map-pin'
  | 'refresh'
  | 'plug'
  | 'arrow-up-right'
  | 'arrow-right';

// `name` accepte une chaîne libre : la copy des pages passe des noms simples
// (`icon: 'check'`) sans cast. Un nom inconnu ne rend rien (dégradation sûre).
type IconProps = SVGProps<SVGSVGElement> & { name: IconName | (string & {}) };

export function isIconName(name: string): name is IconName {
  return name in PATHS;
}

// Chaque entrée = le contenu `<path>`/`<circle>`… d'un viewBox 0 0 24 24.
const PATHS: Record<IconName, React.ReactNode> = {
  building: (
    <>
      <rect x="5" y="3" width="10" height="18" rx="1" />
      <path d="M15 9h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-4" />
      <path d="M9 7h.01M9 11h.01M9 15h.01M12 21v-4" />
    </>
  ),
  landmark: (
    <>
      <path d="M4 21h16M5 21V10M19 21V10M9 21v-7M15 21v-7" />
      <path d="M3 10 12 4l9 6" />
      <path d="M3 10h18" />
    </>
  ),
  'shopping-bag': (
    <>
      <path d="M6 8h12l1 12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  store: (
    <>
      <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
      <path d="M3 9 5 4h14l2 5a2.5 2.5 0 0 1-4.5 1.6A2.5 2.5 0 0 1 12 10a2.5 2.5 0 0 1-4.5.6A2.5 2.5 0 0 1 3 9Z" />
      <path d="M9 20v-5h6v5" />
    </>
  ),
  code: (
    <>
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
      <path d="m13 6-2 12" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-4.2 1.6L9.7 14.3l4.2-1.6 1.6-4.2Z" />
    </>
  ),
  layout: (
    <>
      <rect x="3.5" y="4" width="17" height="16" rx="1.5" />
      <path d="M3.5 9h17M9 9v11" />
    </>
  ),
  'pen-tool': (
    <>
      <path d="m12 2 3 6 5 2-4 4 .5 6L12 23l-4.5-3 .5-6-4-4 5-2Z" />
      <path d="M12 10v9" />
    </>
  ),
  'file-text': (
    <>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7Z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </>
  ),
  files: (
    <>
      <path d="M9 3h6l4 4v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M15 3v4h4" />
      <path d="M5 7v13a1 1 0 0 0 1 1h9" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.5-4.5" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="m13 13-3-2" />
      <path d="M4 18h16" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" />
    </>
  ),
  server: (
    <>
      <rect x="3.5" y="4" width="17" height="7" rx="1.5" />
      <rect x="3.5" y="13" width="17" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="8" r="4.5" />
      <path d="m11 11 8 8M16 16l2-2M18.5 18.5 21 16" />
    </>
  ),
  puzzle: (
    <>
      <path d="M10 4.5a1.5 1.5 0 0 1 3 0c0 .8.6 1.5 1.5 1.5H17a1 1 0 0 1 1 1v2.5c0 .9.7 1.5 1.5 1.5a1.5 1.5 0 0 1 0 3c-.8 0-1.5.6-1.5 1.5V19a1 1 0 0 1-1 1h-2.5c-.9 0-1.5-.7-1.5-1.5a1.5 1.5 0 0 0-3 0c0 .8-.6 1.5-1.5 1.5H5a1 1 0 0 1-1-1v-2.5C4 15.7 3.3 15 2.5 15a1.5 1.5 0 0 1 0-3c.8 0 1.5-.6 1.5-1.5V8a1 1 0 0 1 1-1h3.5C9.4 7 10 6.3 10 5.5Z" />
    </>
  ),
  'app-window': (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
      <path d="M3.5 9.5h17M7 7.2h.01M10 7.2h.01" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="4" width="7" height="6" rx="1" />
      <rect x="14" y="14" width="7" height="6" rx="1" />
      <path d="M10 7h4a3 3 0 0 1 3 3v4" />
    </>
  ),
  megaphone: (
    <>
      <path d="m3 11 14-6v13L3 13Z" />
      <path d="M3 11H2v2h1M8 17v2a2 2 0 0 0 4 0v-.5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="5" r="2.5" />
      <path d="M8.5 19H14a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h5.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 19a5.5 5.5 0 0 0-3-4.9" />
    </>
  ),
  check: (
    <>
      <path d="m4 12 4 4 8-9M13 16l1.5 1.5L21 10" />
    </>
  ),
  'git-branch': (
    <>
      <path d="M6 4v12" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="6" cy="4" r="2.5" />
      <circle cx="18" cy="7" r="2.5" />
      <path d="M18 9.5c0 4-3 5-6 6" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  ruler: (
    <>
      <path d="M15.5 3.5 3.5 15.5l5 5 12-12-5-5Z" />
      <path d="m8 8 2 2M11 5l2 2M5 11l2 2" />
    </>
  ),
  'badge-check': (
    <>
      <path d="m12 2.5 2.4 1.8 3-.2 1 2.9 2.4 1.8-1 2.9 1 2.9-2.4 1.8-1 2.9-3-.2L12 21.5l-2.4-1.8-3 .2-1-2.9L3.2 13.6l1-2.9-1-2.9 2.4-1.8 1-2.9 3 .2Z" />
      <path d="m9 12 2 2 4-4.5" />
    </>
  ),
  pointer: (
    <>
      <path d="m5 3 5 16 2.5-6.5L19 10 5 3Z" />
    </>
  ),
  smartphone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  folder: (
    <>
      <path d="M3 8V6a1 1 0 0 1 1-1h5l2 2h8a1 1 0 0 1 1 1v2" />
      <path d="m3 8 1.6 10a1 1 0 0 0 1 .9h12.8a1 1 0 0 0 1-.9L21 8Z" />
    </>
  ),
  message: (
    <>
      <path d="M20 4H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h3v4l5-4h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z" />
    </>
  ),
  'file-pen': (
    <>
      <path d="M13 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h5" />
      <path d="M13 3v4h4" />
      <path d="M15.5 20.5 21 15l-2.5-2.5L13 18v2.5h2.5Z" />
    </>
  ),
  'user-cog': (
    <>
      <circle cx="10" cy="8" r="3.2" />
      <path d="M4 19a6 6 0 0 1 8.5-5.4" />
      <circle cx="18" cy="17" r="2.5" />
      <path d="M18 13.5v1M18 19.5v1M21 17h-1M16 17h-1M20.1 14.9l-.7.7M16.6 18.4l-.7.7M20.1 19.1l-.7-.7M16.6 15.6l-.7-.7" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z" />
      <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5Z" />
      <path d="M12 3v13" />
    </>
  ),
  newspaper: (
    <>
      <path d="M4 6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v12a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M19 8h1a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2M8 8h5M8 12h5M8 16h5" />
    </>
  ),
  type: (
    <>
      <path d="M5 6h14M5 6v-.5M12 6v13M9 19h6" />
    </>
  ),
  accessibility: (
    <>
      <circle cx="12" cy="5" r="1.6" />
      <path d="M5 9c2.5 1 4.5 1.5 7 1.5S16.5 10 19 9" />
      <path d="M12 10.5V15m0 0-3 6m3-6 3 6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.5" y="7" width="17" height="13" rx="1.5" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3.5 12h17" />
    </>
  ),
  'credit-card': (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10H3Z" />
      <path d="M14 9h3.5l2.5 3v4h-6" />
      <circle cx="7" cy="17.5" r="2" />
      <circle cx="17" cy="17.5" r="2" />
    </>
  ),
  package: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9M8 5.2l8 4.6" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="1.5" />
      <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z" />
      <path d="M9 11h6M9 15h6" />
    </>
  ),
  'bar-chart': (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="M8 20v-6M12.5 20V9M17 20v-9" />
    </>
  ),
  'shield-check': (
    <>
      <path d="M12 3 5 5.8V11c0 4.6 3 8 7 9.8 4-1.8 7-5.2 7-9.8V5.8L12 3Z" />
      <path d="m9 11.6 2.2 2.2L15.4 9.6" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  refresh: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8" />
      <path d="M20 4v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16" />
      <path d="M4 20v-4h4" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v5M15 3v5" />
      <path d="M6 8h12v3a6 6 0 0 1-12 0Z" />
      <path d="M12 17v4" />
    </>
  ),
  'arrow-up-right': (
    <>
      <path d="M7 17 17 7M8 7h9v9" />
    </>
  ),
  'arrow-right': (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
};

export function Icon({ name, ...props }: IconProps) {
  const glyph = PATHS[name as IconName];
  if (!glyph) return null;
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {glyph}
    </svg>
  );
}
