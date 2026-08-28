'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { systemIntro, systemRoadLabel, systemRoad } from '@/content/fr/accueil';
import styles from './SystemRoad.module.css';

// A6 — « Du site au système » : 6 points d'entrée sur une ligne de progression.
// Cliquer un nœud fait avancer la ligne jusqu'à lui.
export function SystemRoad() {
  const [active, setActive] = useState(0);
  const pct = systemRoad.length > 1 ? (active / (systemRoad.length - 1)) * 100 : 0;

  return (
    <section id="systeme" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={systemIntro.eyebrow}
            title={systemIntro.title}
            lead={systemIntro.lead}
            tone="on-dark"
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <p className={styles.label}>{systemRoadLabel}</p>
          <div className={styles.road}>
            <div className={styles.track} aria-hidden="true" />
            <div
              className={styles.progress}
              aria-hidden="true"
              style={{ width: `${pct}%` }}
            />
            <ul className={styles.nodes}>
              {systemRoad.map((node, i) => (
                <li key={node.label}>
                  <button
                    className={styles.node}
                    data-active={i <= active}
                    aria-pressed={i === active}
                    onClick={() => setActive(i)}
                  >
                    <span className={styles.dot} aria-hidden="true">
                      <span />
                    </span>
                    <span className={styles.nodeLabel}>{node.label}</span>
                    <span className={styles.nodeDesc}>{node.desc}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
