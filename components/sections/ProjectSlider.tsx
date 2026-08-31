'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from 'react';
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

// A7 — Cas phares. Desktop (≥1024px) : les 3 cartes entièrement visibles en
// grille, pas de flèches. Tablette / mobile : rail scroll-snap (2 + peek / 1 +
// peek) avec une bande de navigation basse — une piste dont le curseur reflète
// la position et se drague. Nav clavier conservée (flèches).
export function ProjectSlider({ locale }: { locale: Locale }) {
  const railRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumb, setThumb] = useState({ width: 100, left: 0 });

  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = Math.max(1, el.scrollWidth - el.clientWidth);
    const ratio = el.clientWidth / el.scrollWidth;
    const width = Math.min(100, ratio * 100);
    const left = (el.scrollLeft / max) * (100 - width);
    setThumb({ width, left });
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    sync();
    el.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      el.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [sync]);

  // Drag du curseur — listeners natifs (hors JSX) pour piloter le scroll du rail.
  useEffect(() => {
    const thumbEl = thumbRef.current;
    const trackEl = trackRef.current;
    const rail = railRef.current;
    if (!thumbEl || !trackEl || !rail) return;

    let start: { x: number; scrollLeft: number } | null = null;

    const onMove = (e: PointerEvent) => {
      if (!start) return;
      const dx = e.clientX - start.x;
      const max = rail.scrollWidth - rail.clientWidth;
      const next =
        start.scrollLeft + (dx / trackEl.clientWidth) * rail.scrollWidth;
      rail.scrollLeft = Math.max(0, Math.min(max, next));
    };
    const onUp = (e: PointerEvent) => {
      start = null;
      try {
        thumbEl.releasePointerCapture(e.pointerId);
      } catch {
        /* capture déjà relâchée */
      }
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    const onDown = (e: PointerEvent) => {
      start = { x: e.clientX, scrollLeft: rail.scrollLeft };
      thumbEl.setPointerCapture(e.pointerId);
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    };

    thumbEl.addEventListener('pointerdown', onDown);
    return () => {
      thumbEl.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  const step = () => {
    const el = railRef.current;
    const card = el?.querySelector('article');
    return card
      ? card.getBoundingClientRect().width + 20
      : (el?.clientWidth ?? 320) * 0.8;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      railRef.current?.scrollBy({
        left: (e.key === 'ArrowRight' ? 1 : -1) * step(),
        behavior: 'smooth',
      });
    }
  };

  const todoRoutes = [
    ...casPharesCards.filter((c) => c.cta.todo).map((c) => c.cta.href),
    ...(casPharesLink.todo ? [casPharesLink.href] : []),
  ];

  return (
    <section id="cas" className={styles.section}>
      <div className="cw-sec">
        <SectionHeading
          eyebrow={casPharesIntro.eyebrow}
          title={casPharesIntro.title}
          lead={casPharesIntro.lead}
        />

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

        <div ref={trackRef} className={styles.track} aria-hidden="true">
          <span
            ref={thumbRef}
            className={styles.thumb}
            style={{ width: `${thumb.width}%`, left: `${thumb.left}%` }}
          />
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

        {todoRoutes.length > 0 ? (
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
