import styles from './BrandGlyph.module.css';

// ── Marques officielles WordPress / Shopify ────────────────────────────────
//
// Fichiers SVG officiels (Simple Icons, CC0) dans `public/assets/brands/`.
// Rendu en `mask-image` sur un aplat `currentColor` : le logo n'est jamais
// redessiné ni déformé (ratio 1:1 d'origine), et il reste lisible dans les
// deux thèmes puisqu'il hérite de la couleur du texte voisin.
//
// - décoratif (défaut) : `aria-hidden`, un libellé texte l'accompagne ;
// - informatif : passer `label` → `role="img"` + `aria-label`.

export type BrandName = 'wordpress' | 'shopify';

export function BrandGlyph({
  brand,
  label,
  size = 22,
  className,
}: {
  brand: BrandName;
  /** Rend l'icône informative (lecteur d'écran) au lieu de décorative. */
  label?: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`${styles.glyph} ${className ?? ''}`}
      style={
        {
          '--brand-mask': `url(/assets/brands/${brand}.svg)`,
          '--brand-size': `${size}px`,
        } as React.CSSProperties
      }
      {...(label
        ? { role: 'img', 'aria-label': label }
        : { 'aria-hidden': true })}
    />
  );
}
