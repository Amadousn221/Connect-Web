'use client';

import { useId, useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import {
  heroShowcaseProjects,
  heroShowcaseLink,
} from '@/content/fr/heroShowcase';
import styles from './HeroShowcase.module.css';

// A1b — Vitrine interactive du Hero. Panneau d'onglets isolé (client component) :
// le titre, la description et les CTA du Hero restent dans le composant serveur
// parent et ne bougent pas pendant les interactions.
//
//   · Onglets = projets réels (ATTA Africa, SCOD VTC), navigables au clic, au
//     toucher et au clavier (flèches ← →, roving tabindex — repris de Method.tsx,
//     avec déplacement du focus sur l'onglet actif).
//   · Au changement d'onglet : la capture et la description changent, crossfade
//     discret (~180 ms, coupé par `prefers-reduced-motion`).
//   · Cadre média à ratio fixe (16/10) → hauteur stable entre projets.
//   · Aucun lien par onglet (pages /realisations/[slug] inexistantes) : un seul
//     lien vers le hub /realisations sous le panneau.
export function HeroShowcase({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const count = heroShowcaseProjects.length;
  const current = heroShowcaseProjects[active];

  const goTo = (i: number) => {
    const next = (i + count) % count;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goTo(active - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goTo(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goTo(count - 1);
    }
  };

  return (
    <div className={styles.showcase}>
      <div
        className={styles.tabs}
        role="tablist"
        aria-label="Réalisations"
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
      >
        {heroShowcaseProjects.map((p, i) => (
          <button
            key={p.client}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={i === active ? 0 : -1}
            className={styles.tab}
            data-active={i === active}
            onClick={() => setActive(i)}
          >
            {p.client}
          </button>
        ))}
      </div>

      <div
        className={styles.panel}
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
      >
        <div className={styles.frame}>
          {heroShowcaseProjects.map((p, i) => (
            <Image
              key={p.client}
              src={p.image.src}
              alt={p.image.alt}
              fill
              priority={i === 0}
              sizes="(max-width: 900px) 90vw, 52vw"
              className={styles.img}
              data-active={i === active}
              aria-hidden={i !== active}
            />
          ))}
        </div>

        <div className={styles.info}>
          <p className={styles.headline}>{current.headline}</p>
          <p className={styles.meta}>
            <span>{current.solutionTag}</span>
            <span className={styles.sep} aria-hidden="true">
              ·
            </span>
            <span>{current.sector}</span>
          </p>
        </div>
      </div>

      <div className={styles.footer}>
        <Link
          href={localePath(locale, heroShowcaseLink.href)}
          className={styles.link}
        >
          {heroShowcaseLink.label} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
