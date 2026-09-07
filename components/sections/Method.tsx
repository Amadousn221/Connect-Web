'use client';

import { useId, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { methodeIntro, methodeSteps, methodeOutro } from '@/content/fr/methode';
import styles from './Method.module.css';

// S09 — Méthode (Refonte Accueil, D29). 4 phases navigables :
//   · Desktop (≥ 900px) : stepper horizontal 01 ─ 02 ─ 03 ─ 04, sélection →
//     panneau de contenu. Navigable au clavier (flèches).
//   · Mobile : accordéon vertical, une phase ouverte à la fois.
// État actif en orange. `prefers-reduced-motion` respecté (styles globaux).
export function Method() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  // `active` peut valoir -1 (accordéon mobile entièrement replié) : le panneau
  // desktop retombe alors sur la première phase.
  const step = methodeSteps[active] ?? methodeSteps[0];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => (i + 1) % methodeSteps.length);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => (i - 1 + methodeSteps.length) % methodeSteps.length);
    }
  };

  return (
    <section id="methode" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={methodeIntro.eyebrow}
            title={methodeIntro.title}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.stepper}>
          {/* Stepper / onglets — desktop */}
          <div
            className={styles.tabs}
            role="tablist"
            aria-label="Les phases de notre méthode"
            aria-orientation="horizontal"
            onKeyDown={onKeyDown}
          >
            {methodeSteps.map((s, i) => (
              <button
                key={s.num}
                type="button"
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`${baseId}-panel-${i}`}
                tabIndex={i === active ? 0 : -1}
                className={styles.tab}
                data-active={i === active}
                onClick={() => setActive(i)}
              >
                <span className={styles.tabNum}>{s.num}</span>
                <span className={styles.tabLabel}>{s.title}</span>
              </button>
            ))}
          </div>

          {/* Panneau — desktop */}
          <div
            className={styles.panel}
            role="tabpanel"
            id={`${baseId}-panel-${active}`}
            aria-labelledby={`${baseId}-tab-${active}`}
          >
            <PhaseBody step={step} />
          </div>

          {/* Accordéon — mobile */}
          <div className={styles.accordion}>
            {methodeSteps.map((s, i) => (
              <div key={s.num} className={styles.accItem}>
                <button
                  type="button"
                  className={styles.accHead}
                  aria-expanded={i === active}
                  aria-controls={`${baseId}-acc-${i}`}
                  data-active={i === active}
                  onClick={() => setActive(i === active ? -1 : i)}
                >
                  <span className={styles.tabNum}>{s.num}</span>
                  <span className={styles.accTitle}>{s.title}</span>
                  <span className={styles.chevron} aria-hidden="true" />
                </button>
                <div
                  id={`${baseId}-acc-${i}`}
                  className={styles.accPanel}
                  data-open={i === active}
                >
                  <div className={styles.accPanelInner} inert={i !== active}>
                    <PhaseBody step={s} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className={styles.outro}>{methodeOutro.text}</p>
          <Link href={methodeOutro.link.href} className={styles.outroLink}>
            {methodeOutro.link.label} →
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function PhaseBody({ step }: { step: (typeof methodeSteps)[number] }) {
  return (
    <>
      <p className={`cw-serif ${styles.intent}`}>{step.intent}</p>
      {step.does ? <p className={styles.does}>{step.does}</p> : null}
      {step.deliverable ? (
        <p className={styles.deliverable}>
          <span className={styles.deliverableLabel}>Livrable</span>
          {step.deliverable}
        </p>
      ) : null}
    </>
  );
}
