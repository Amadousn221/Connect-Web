'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Button } from '@/components/ui/Button';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { casesIntro, caseTeasers, casesLink } from '@/content/fr/accueil';
import styles from './CaseTeaserCarousel.module.css';

// A8 — Carrousel Réalisations (scroll-snap natif, barre de progression +
// compteur, flèches). Contenu codé en dur en M2 ; bascule WordPress en M3.
// Les fiches de cas (`/realisations/[slug]`) n'existent pas encore → les cartes
// pointent vers le hub Réalisations.
export function CaseTeaserCarousel({ locale }: { locale: Locale }) {
  const railRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState({ width: 30, left: 0, index: 1 });
  const total = caseTeasers.length;

  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    const cardW = first ? first.getBoundingClientRect().width + 22 : 340;
    const max = Math.max(1, el.scrollWidth - el.clientWidth);
    const ratio = Math.min(1, Math.max(0, el.scrollLeft / max));
    const visible = Math.max(1, Math.round(el.clientWidth / cardW));
    const width = Math.min(100, (visible / total) * 100);
    const left = ratio * (100 - width);
    const index = Math.round(ratio * (total - visible)) + 1;
    setProgress({ width, left, index });
  }, [total]);

  useEffect(() => {
    sync();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    return () => {
      el.removeEventListener('scroll', sync);
      window.removeEventListener('resize', sync);
    };
  }, [sync]);

  const scrollBy = (dir: number) => {
    const el = railRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    const step = first ? first.getBoundingClientRect().width + 22 : 340;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  const hubHref = localePath(locale, casesLink.href);

  return (
    <section id="realisations" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={casesIntro.eyebrow}
            title={casesIntro.title}
            lead={casesIntro.lead}
            align="center"
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <div className={styles.railWrap}>
            <div
              ref={railRef}
              className={styles.rail}
              tabIndex={0}
              role="region"
              aria-label="Carrousel des réalisations"
            >
              {caseTeasers.map((c) =>
                c.pending ? (
                  <article key={c.name} className={`${styles.card} ${styles.pending}`}>
                    <div className={styles.pendingVisual}>
                      <ValidationNote>À valider</ValidationNote>
                      <span>Visuel du projet à fournir</span>
                    </div>
                    <div className={styles.cardBody}>
                      <span className={styles.category}>{c.category}</span>
                      <span className={`cw-serif ${styles.name}`}>{c.name}</span>
                      <span className={styles.desc}>{c.body}</span>
                      <span className={styles.pendingNote}>
                        Contenu et visuels à confirmer avant publication.
                      </span>
                    </div>
                  </article>
                ) : (
                  <Link key={c.name} href={hubHref} className={styles.card}>
                    <div className={styles.imageWrap}>
                      {c.image ? (
                        <Image
                          src={c.image.src}
                          alt={c.image.alt}
                          fill
                          sizes="(max-width: 760px) 86vw, (max-width: 1024px) 46vw, 33vw"
                          className={styles.image}
                        />
                      ) : null}
                    </div>
                    <div className={styles.cardBody}>
                      <span className={styles.category}>{c.category}</span>
                      <span className={`cw-serif ${styles.name}`}>{c.name}</span>
                      <span className={styles.desc}>{c.body}</span>
                      <span className={styles.more}>Voir le projet →</span>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.arrow}
              aria-label="Précédent"
              onClick={() => scrollBy(-1)}
            >
              ←
            </button>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressBar}
                style={{ width: `${progress.width}%`, left: `${progress.left}%` }}
              />
            </div>
            <button
              type="button"
              className={styles.arrow}
              aria-label="Suivant"
              onClick={() => scrollBy(1)}
            >
              →
            </button>
            <span className={styles.count}>
              {pad(Math.min(progress.index, total))} / {pad(total)}
            </span>
          </div>

          <div className={styles.cta}>
            <Button href={hubHref} variant="outline" size="md">
              {casesLink.label}
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
