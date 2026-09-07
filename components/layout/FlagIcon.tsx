import type { SVGProps } from 'react';

// Drapeaux du sélecteur de langue — SVG inline locaux (aucune dépendance
// ajoutée pour deux drapeaux). Toujours affichés accompagnés d'un texte
// (FR/EN, Français/English) : ils ne sont jamais le seul indicateur de langue.

export function FlagFR(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 3 2"
      width="18"
      height="13"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect width="1" height="2" x="0" fill="#0055A4" />
      <rect width="1" height="2" x="1" fill="#FFFFFF" />
      <rect width="1" height="2" x="2" fill="#EF4135" />
    </svg>
  );
}

export function FlagGB(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 30 20"
      width="18"
      height="13"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect width="30" height="20" fill="#00247d" />
      <path d="M0 0 30 20M30 0 0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0 13.2 8.8M30 0 16.8 8.8M0 20 13.2 11.2M30 20 16.8 11.2" stroke="#cf142b" strokeWidth="2" />
      <path d="M15 0V20M0 10H30" stroke="#fff" strokeWidth="6.6" />
      <path d="M15 0V20M0 10H30" stroke="#cf142b" strokeWidth="4" />
    </svg>
  );
}
