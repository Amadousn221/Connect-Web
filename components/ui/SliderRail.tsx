'use client';

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';

import styles from './SliderRail.module.css';

/**
 * Rail de défilement réutilisable — même mécanique que les carrousels de la
 * homepage (`ProjectSlider` / `CaseTeaserCarousel`) mais sans données :
 * desktop ≥1024px → 3 slides visibles en grille, pas de scroll ;
 * tablette / mobile → rail scroll-snap + bande de navigation basse draggable.
 * Navigation clavier (flèches) conservée.
 *
 * Chaque enfant est enveloppé dans une « slide » — les cartes restent
 * agnostiques de la mise en page.
 */
export function SliderRail({
  children,
  ariaLabel,
  perView = 3,
}: {
  children: ReactNode;
  ariaLabel: string;
  /** Slides visibles en desktop (grille). Défaut 3. */
  perView?: 2 | 3 | 4;
}) {
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

  // Drag du curseur — listeners natifs pour piloter le scroll du rail.
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
      const next = start.scrollLeft + (dx / trackEl.clientWidth) * rail.scrollWidth;
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
    const slide = el?.firstElementChild as HTMLElement | undefined;
    return slide ? slide.getBoundingClientRect().width + 20 : (el?.clientWidth ?? 320) * 0.8;
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

  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={styles.wrap} data-per-view={perView}>
      <div
        ref={railRef}
        className={styles.rail}
        role="region"
        aria-label={ariaLabel}
        aria-roledescription="carrousel"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {items.map((child, i) => (
          <div key={i} className={styles.slide}>
            {child}
          </div>
        ))}
      </div>

      <div ref={trackRef} className={styles.track} aria-hidden="true">
        <span
          ref={thumbRef}
          className={styles.thumb}
          style={{ width: `${thumb.width}%`, left: `${thumb.left}%` }}
        />
      </div>
    </div>
  );
}
