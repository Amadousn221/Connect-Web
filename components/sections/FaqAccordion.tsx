'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { Cta, FaqItem } from '@/content/types';
import styles from './FaqAccordion.module.css';

// Accordéon FAQ réutilisable (Accueil A11 + chaque page d'offre).
//   layout="split"     : titre à gauche, accordéons à droite (maquette V6 hub).
//   allowMultiple=true : plusieurs réponses peuvent rester ouvertes.
export function FaqAccordion({
  locale,
  intro,
  items,
  outro,
  align = 'center',
  layout = 'stack',
  allowMultiple = false,
}: {
  locale: Locale;
  intro: { eyebrow: string; title: string };
  items: FaqItem[];
  outro?: { text: string; link: Cta };
  align?: 'left' | 'center';
  layout?: 'stack' | 'split';
  allowMultiple?: boolean;
}) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const baseId = useId();

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = allowMultiple ? new Set(prev) : new Set<number>();
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const list = (
    <div className={styles.list}>
      {items.map((item, i) => {
        const isOpen = open.has(i);
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
                onClick={() => toggle(i)}
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
  );

  return (
    <section className={styles.section}>
      <div className={`cw-sec ${styles.inner}`} data-layout={layout}>
        {layout === 'split' ? (
          <div className={styles.split}>
            <SectionHeading eyebrow={intro.eyebrow} title={intro.title} align="left" />
            {list}
          </div>
        ) : (
          <>
            <SectionHeading eyebrow={intro.eyebrow} title={intro.title} align={align} />
            {list}
          </>
        )}

        {outro ? (
          <p className={styles.outro}>
            <span>{outro.text}</span>{' '}
            <Link
              href={
                outro.link.href.startsWith('#')
                  ? outro.link.href
                  : localePath(locale, outro.link.href)
              }
              className={styles.outroLink}
            >
              {outro.link.label}
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
