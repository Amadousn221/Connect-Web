'use client';

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import {
  casPharesIntro,
  casPharesCards,
  casPharesLink,
} from '@/content/fr/casPhares';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectSlider.module.css';

// A7 — Slider Cas phares (Lot D, §09.3). Scroll-snap CSS pur : desktop ~2.5
// cartes, tablette ~1.5, mobile 1 + peek. Flèches + drag natif + nav clavier.
export function ProjectSlider({ locale }: { locale: Locale }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const step = () => {
    const el = railRef.current;
    if (!el) return 320;
    const card = el.querySelector('article');
    return card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
  };

  const scrollByCard = (dir: number) => {
    railRef.current?.scrollBy({ left: dir * step(), behavior: 'smooth' });
  };

  const onScroll = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector('article');
    const s = card ? card.getBoundingClientRect().width + 20 : 1;
    setPage(Math.round(el.scrollLeft / s));
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByCard(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByCard(-1);
    }
  };

  const todoRoutes = [
    ...casPharesCards.filter((c) => c.cta.todo).map((c) => c.cta.href),
    ...(casPharesLink.todo ? [casPharesLink.href] : []),
  ];

  return (
    <section id="cas" className={styles.section}>
      <div className="cw-sec">
        <div className={styles.head}>
          <SectionHeading
            eyebrow={casPharesIntro.eyebrow}
            title={casPharesIntro.title}
            lead={casPharesIntro.lead}
          />
          <div className={styles.arrows}>
            <button
              type="button"
              className={styles.arrow}
              aria-label="Projet précédent"
              onClick={() => scrollByCard(-1)}
            >
              ←
            </button>
            <button
              type="button"
              className={styles.arrow}
              aria-label="Projet suivant"
              onClick={() => scrollByCard(1)}
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className={styles.rail}
          role="region"
          aria-label="Réalisations phares"
          aria-roledescription="carrousel"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          {casPharesCards.map((card) => (
            <ProjectCard key={card.client} card={card} locale={locale} />
          ))}
        </div>

        <div className={styles.dots} aria-hidden="true">
          {casPharesCards.map((card, i) => (
            <span
              key={card.client}
              data-active={i === page}
              className={styles.dot}
            />
          ))}
        </div>

        <div className={styles.footer}>
          {casPharesLink.todo ? (
            <span className={styles.linkTodo}>
              {casPharesLink.label} <span aria-hidden="true">→</span>
            </span>
          ) : (
            <Link href={localePath(locale, casPharesLink.href)}>
              {casPharesLink.label} <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>

        {todoRoutes.length ? (
          <div className={styles.note}>
            <ValidationNote variant="box">
              Pages à créer avant publication (liens non cliquables) :{' '}
              {todoRoutes.join(' · ')}
            </ValidationNote>
          </div>
        ) : null}
      </div>
    </section>
  );
}
