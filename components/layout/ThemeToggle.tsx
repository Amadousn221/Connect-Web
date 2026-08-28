'use client';

import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

type Theme = 'light' | 'dark';

// Porté de `toggleTheme` / `_syncThemeIcon` du mockup (Accueil V2, lignes
// 1081-1087) : bascule l'attribut `data-theme` sur <html> et persiste dans
// localStorage sous la clé `cw_theme`. Clair par défaut, pas de détection
// système (fidélité au mockup).

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : 'light';
}

export function ThemeToggle({
  className,
  tone = 'default',
}: {
  className?: string;
  /** `on-dark` : posé sur une surface pétrole nuit (drawer mobile). */
  tone?: 'default' | 'on-dark';
}) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Le script anti-FOUC a déjà posé data-theme ; on se synchronise après hydratation.
  useEffect(() => {
    setTheme(readTheme());
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    if (next === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem('cw_theme', next);
    } catch {
      /* stockage indisponible : la bascule reste valable pour la session */
    }
    setTheme(next);
  }

  const isDark = theme === 'dark';
  const label = isDark ? 'Activer le thème clair' : 'Activer le thème sombre';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={mounted ? isDark : undefined}
      title={label}
      className={[
        styles.toggle,
        tone === 'on-dark' && styles.onDark,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {isDark ? (
        // lune
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M17 12.5A7 7 0 1 1 7.5 3a5.5 5.5 0 0 0 9.5 9.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        // soleil (identique au mockup, header lignes 141-143)
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4 4l1.4 1.4M14.6 14.6L16 16M16 4l-1.4 1.4M5.4 14.6L4 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
