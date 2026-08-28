'use client';

import type { Locale } from '@/lib/i18n/config';
import { locales } from '@/lib/i18n/config';
import styles from './LangSwitcher.module.css';

// Sélecteur FR/EN — porté du stub `setFr`/`setEn` des mockups (Accueil V2,
// lignes 136-139 / 1089-1098). Dans les mockups il ne fait que changer la
// couleur des boutons. Le vrai routing i18n (fr racine ↔ /en, réécriture de
// l'URL courante, hreflang) est câblé au Milestone M4 — ce composant sera
// alors rebranché sur `usePathname()` + `localePath()`.

const LABELS: Record<Locale, string> = { fr: 'FR', en: 'EN' };

export function LangSwitcher({
  current,
  variant = 'bar',
}: {
  current: Locale;
  variant?: 'bar' | 'stack';
}) {
  return (
    <div
      className={variant === 'stack' ? styles.stack : styles.bar}
      role="group"
      aria-label="Choix de la langue"
    >
      {locales.map((loc) => {
        const active = loc === current;
        return (
          <button
            key={loc}
            type="button"
            aria-pressed={active}
            // TODO(M4) : naviguer vers la version `loc` de l'URL courante.
            disabled={!active}
            data-todo-m4={!active ? 'i18n-routing' : undefined}
            className={active ? styles.active : styles.inactive}
          >
            {LABELS[loc]}
          </button>
        );
      })}
    </div>
  );
}
