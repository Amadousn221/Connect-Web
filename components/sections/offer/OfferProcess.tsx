'use client';

import { useId, useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { NumberedItem, SectionIntro } from '@/content/offres';
import styles from './OfferProcess.module.css';

// Section 08 — Notre process : head centré + cartes d'étape dépliables (grille
// 3 col). Cliquer une carte révèle son livrable.
export function OfferProcess({
  intro,
  steps,
}: {
  intro: SectionIntro;
  steps: Array<NumberedItem & { deliverable: string }>;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <SectionHeading
          eyebrow={intro.eyebrow}
          title={intro.title}
          lead={intro.lead}
          align="center"
        />
        <div className={styles.grid}>
          {steps.map((step, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-p${i}`;
            return (
              <div key={step.title} className={styles.card}>
                <button
                  type="button"
                  className={styles.cardBtn}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={styles.cardTop}>
                    <span className={`cw-serif ${styles.num}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span aria-hidden="true" className={styles.icon}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </span>
                  <span className={`cw-serif ${styles.cardTitle}`}>{step.title}</span>
                  <span className={styles.cardBody}>{step.body}</span>
                </button>
                <div
                  id={panelId}
                  className={styles.deliverable}
                  data-open={isOpen}
                  hidden={!isOpen}
                >
                  Livrable — {step.deliverable}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
