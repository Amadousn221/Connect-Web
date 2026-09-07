'use client';

import { useEffect, useId, useRef, useState } from 'react';
import type { ComponentType, SVGProps } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';
import { locales } from '@/lib/i18n/config';
import { localePath, stripLocalePrefix } from '@/lib/i18n/routing';
import { FlagFR, FlagGB } from './FlagIcon';
import styles from './LangSwitcher.module.css';

// Sélecteur de langue — drapeau + code + chevron, ouvre un petit panneau
// « Français / English ». Réutilisé tel quel dans le header (variant `bar`)
// et le tiroir mobile (variant `stack`).
//
// Navigation : on ne fabrique pas d'URL par ajout/retrait de `/en` — on
// reformate le chemin courant via `localePath`/`stripLocalePrefix`, seul
// mécanisme de routing i18n existant dans le projet (les routes de nav
// partagent le même slug entre FR et EN, voir `site-nav.ts`).

const LABELS: Record<Locale, string> = { fr: 'FR', en: 'EN' };
const NAMES: Record<Locale, string> = { fr: 'Français', en: 'English' };
const FLAGS: Record<Locale, ComponentType<SVGProps<SVGSVGElement>>> = {
  fr: FlagFR,
  en: FlagGB,
};

export function LangSwitcher({
  current,
  variant = 'bar',
}: {
  current: Locale;
  variant?: 'bar' | 'stack';
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();
  const pathname = usePathname() || '/';
  const cleanPath = stripLocalePrefix(current, pathname);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  // Échap ne referme que ce panneau — ne doit pas se propager au tiroir
  // mobile (qui a son propre écouteur Échap sur `document`).
  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape' && open) {
      e.stopPropagation();
      setOpen(false);
      triggerRef.current?.focus();
    }
  }

  const CurrentFlag = FLAGS[current];

  return (
    <div
      ref={rootRef}
      className={variant === 'stack' ? styles.stack : styles.bar}
      onKeyDown={onKeyDown}
    >
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        <CurrentFlag className={styles.flag} />
        <span>{LABELS[current]}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          data-open={open}
          className={styles.chevron}
        >
          <path
            d="M3 4.5 6 7.5 9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <ul id={listId} className={styles.menu} hidden={!open}>
        {locales.map((loc) => {
          const Flag = FLAGS[loc];
          const active = loc === current;
          return (
            <li key={loc}>
              <Link
                href={localePath(loc, cleanPath)}
                aria-current={active ? 'true' : undefined}
                className={active ? styles.itemActive : styles.item}
                onClick={() => setOpen(false)}
              >
                <Flag className={styles.flag} />
                <span>{NAMES[loc]}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
