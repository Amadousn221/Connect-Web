'use client';

import { useId, useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import type { MethodPhase } from '@/content/types';
import { methodeIntro, methodePhases } from '@/content/fr/methode';
import styles from './MethodStepper.module.css';

// P25 S09 — Méthode, 4 phases. Même squelette d'interaction que
// AudienceRouter/l'ancien NeedSelector (index actif, panneau partagé desktop
// `aria-live`, accordéon par item en mobile/tablette avec `inert` sur le
// contenu replié) — reflow desktop en tabs numérotées horizontales au lieu
// d'une liste verticale (plan P25 §3).
function PhaseBody({ phase }: { phase: MethodPhase }) {
  return (
    <>
      <p className={styles.intention}>{phase.intention}</p>
      <ul className={styles.actions}>
        {phase.actions.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
      {phase.deliverables?.length ? (
        <>
          <p className={styles.deliversLabel}>Livrable</p>
          <ul className={styles.deliverables}>
            {phase.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </>
      ) : null}
    </>
  );
}

export function MethodStepper() {
  const [active, setActive] = useState(0);
  const phase = methodePhases[active];
  const baseId = useId();

  return (
    <section id="methode" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading eyebrow={methodeIntro.eyebrow} title={methodeIntro.title} />
        </RevealOnScroll>

        <RevealOnScroll>
          {/* Tabs — desktop uniquement */}
          <div className={styles.tabs} role="tablist" aria-label="Les 4 phases de la méthode">
            {methodePhases.map((p, i) => {
              const panelId = `${baseId}-tabpanel`;
              const isActive = i === active;
              return (
                <button
                  key={p.num}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={isActive ? panelId : undefined}
                  className={styles.tab}
                  data-active={isActive}
                  onClick={() => setActive(i)}
                >
                  <span className={styles.tabNum}>{p.num}</span>
                  <span className={`cw-serif ${styles.tabTitle}`}>{p.title}</span>
                </button>
              );
            })}
          </div>

          {/* Panneau — desktop uniquement */}
          <div id={`${baseId}-tabpanel`} className={styles.panel} role="region" aria-live="polite">
            <PhaseBody phase={phase} />
          </div>

          {/* Accordéon — mobile / tablette uniquement */}
          <div className={styles.accordion}>
            {methodePhases.map((p, i) => {
              const panelId = `${baseId}-p${i}`;
              const isActive = i === active;
              return (
                <div key={p.num} className={styles.accItem}>
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    className={styles.accHead}
                    data-active={isActive}
                    onClick={() => setActive(isActive ? active : i)}
                  >
                    <span className={styles.tabNum}>{p.num}</span>
                    <span className={`cw-serif ${styles.tabTitle}`}>{p.title}</span>
                  </button>
                  <div id={panelId} className={styles.accPanel} data-open={isActive}>
                    <div className={styles.accPanelInner} inert={!isActive}>
                      <div className={styles.accPanelContent}>
                        <PhaseBody phase={p} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
