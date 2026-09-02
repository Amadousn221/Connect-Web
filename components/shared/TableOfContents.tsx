'use client';

import { useEffect, useState } from 'react';

import type { TocHeading } from './toc';
import styles from './TableOfContents.module.css';

/**
 * Table des matières d'un article (spec §8.2 — sidebar de /blog/[slug]).
 * Sticky au scroll sur desktop, surlignage de la section active.
 *
 * Les titres sont extraits côté serveur (`extractHeadings`) et passés ici —
 * ce composant ne fait que le rendu + le suivi de section active.
 */
export function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const [activeId, setActiveId] = useState<string | null>(headings[0]?.id ?? null);

  useEffect(() => {
    if (headings.length === 0) return;

    const targets = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav aria-label="Sommaire" className={styles.toc}>
      <p className={styles.title}>Sommaire</p>
      <ol className={styles.list}>
        {headings.map((h) => (
          <li
            key={h.id}
            className={styles.item}
            data-level={h.level}
            data-active={h.id === activeId ? 'true' : undefined}
          >
            <a href={`#${h.id}`} className={styles.link}>
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
