'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import {
  heroSlides,
  heroSectors,
  heroCtas,
} from '@/content/fr/accueil';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import styles from './HeroRotating.module.css';

// A1 — Hero à rotation (maquette : 3 messages, auto 6 s, pause au survol, points
// cliquables, crossfade d'opacité + ken-burns). L'auto-rotation est coupée si
// `prefers-reduced-motion`. Aucun reflow entre messages (hauteur fixe clamp).
const IMAGES = [hero1, hero2, hero3];
const INTERVAL = 6000;

export function HeroRotating() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  }, []);

  const start = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (paused.current) return;
    stop();
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      INTERVAL,
    );
  }, [stop]);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  const slide = heroSlides[index];

  return (
    <section
      className={styles.hero}
      onMouseEnter={() => {
        paused.current = true;
        stop();
      }}
      onMouseLeave={() => {
        paused.current = false;
        start();
      }}
      aria-roledescription="carrousel"
      aria-label="Messages clés Connect Web"
    >
      {IMAGES.map((img, i) => (
        <div
          key={i}
          className={styles.slideBg}
          data-active={i === index}
          aria-hidden="true"
        >
          <Image
            src={img}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={styles.image}
          />
          <div className={styles.scrim} />
        </div>
      ))}

      <div className={`cw-sec ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" className={styles.pulse} />
            {slide.eyebrow}
          </p>
          <h1 className={`cw-serif ${styles.title}`}>{slide.title}</h1>
          <p className={styles.sub}>{slide.subtitle}</p>

          <div className={styles.ctas}>
            <Button href={heroCtas[0].href} variant="primary" onDark size="md">
              {heroCtas[0].label}
            </Button>
            <Button href={heroCtas[1].href} variant="outline" onDark size="md">
              {heroCtas[1].label}
            </Button>
          </div>

          <ul className={styles.sectors}>
            {heroSectors.map((s, i) => (
              <li key={s}>
                {s}
                {i < heroSectors.length - 1 ? (
                  <span aria-hidden="true" className={styles.sep}>
                    ·
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.dots} role="tablist" aria-label="Choisir un message">
          {heroSlides.map((s, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Message ${i + 1} : ${s.eyebrow}`}
              className={styles.dot}
              onClick={() => {
                stop();
                setIndex(i);
              }}
            >
              <span data-active={i === index} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
