'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { processIntro, processSteps, primaryCta } from '@/content/fr/accueil';
import styles from './ProcessSteps.module.css';

// A10 — « Méthode » : rail sticky + 6 étapes avec scroll-spy (IntersectionObserver,
// zone active au centre du viewport). Le rail affiche l'étape courante ; les
// bordures des étapes passées se colorent.
export function ProcessSteps() {
  const [current, setCurrent] = useState(0);
  const stepsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const els = stepsRef.current.filter(
      (el): el is HTMLLIElement => el != null,
    );
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = els.indexOf(e.target as HTMLLIElement);
          if (i >= 0) setCurrent(i);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const step = processSteps[current];
  const barScale = (current + 1) / processSteps.length;

  return (
    <section id="methode" className={styles.section}>
      <div className={`cw-sec ${styles.grid}`}>
        <div className={styles.rail}>
          <div className={styles.eyebrow}>
            <span aria-hidden="true" className={styles.dot} />
            {processIntro.eyebrow}
          </div>
          <h2 className={`cw-serif ${styles.title}`}>{processIntro.title}</h2>
          <p className={styles.lead}>{processIntro.lead}</p>

          <div className={styles.tracker}>
            <div className={styles.trackerBar} aria-hidden="true">
              <div
                className={styles.trackerFill}
                style={{ transform: `scaleY(${barScale})` }}
              />
            </div>
            <div>
              <div className={`cw-serif ${styles.trackerNum}`}>
                <span>{step.num}</span> <span className={styles.trackerTotal}>/ 06</span>
              </div>
              <div className={styles.trackerLabel}>{step.title}</div>
            </div>
          </div>

          <Button href={primaryCta.href} variant="primary" size="md">
            {primaryCta.label}
          </Button>
        </div>

        <ol className={styles.steps}>
          {processSteps.map((s, i) => (
            <li
              key={s.num}
              ref={(el) => {
                stepsRef.current[i] = el;
              }}
              className={styles.step}
              data-passed={i <= current}
            >
              <span className={`cw-serif ${styles.stepNum}`}>{s.num}</span>
              <div>
                <h3 className={`cw-serif ${styles.stepTitle}`}>{s.title}</h3>
                <p className={styles.stepBody}>{s.body}</p>
                <p className={styles.deliverable}>Livrable — {s.deliverable}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
