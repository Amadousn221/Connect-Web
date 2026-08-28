'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { faqIntro, faqItems, faqOutro } from '@/content/fr/accueil';
import styles from './FaqAccordion.module.css';

// A11 — FAQ (accordéon 6 questions ; l'item prix porte un « À valider »).
export function FaqAccordion({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className={styles.section}>
      <div className={`cw-sec ${styles.inner}`}>
        <SectionHeading
          eyebrow={faqIntro.eyebrow}
          title={faqIntro.title}
          align="center"
        />

        <div className={styles.list}>
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-p${i}`;
            const btnId = `${baseId}-b${i}`;
            return (
              <div key={item.q} className={styles.item}>
                <h3 className={styles.qHeading}>
                  <button
                    id={btnId}
                    type="button"
                    className={styles.qButton}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="cw-serif">{item.q}</span>
                    <span aria-hidden="true" className={styles.icon}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={styles.body}
                  data-open={isOpen}
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                  {item.toValidateNote ? (
                    <ValidationNote variant="box">{item.toValidateNote}</ValidationNote>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <p className={styles.outro}>
          <span>{faqOutro.text}</span>{' '}
          <Link href={localePath(locale, faqOutro.link.href)} className={styles.outroLink}>
            {faqOutro.link.label}
          </Link>
        </p>
      </div>
    </section>
  );
}
