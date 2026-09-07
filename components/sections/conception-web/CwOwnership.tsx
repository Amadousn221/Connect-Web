import Link from 'next/link';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { conceptionWebOwnership as data } from '@/content/fr/conceptionWeb';
import styles from './CwOwnership.module.css';

// 05 — Vos accès, votre continuité. Surface pétrole sombre. Titre pleine
// largeur puis 2 colonnes : ce qu'on clarifie pendant le projet / ce qui
// dépend du contrat. Aucune garantie juridique absolue.
export function CwOwnership({ locale }: { locale: Locale }) {
  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll className={styles.head}>
          <div className={styles.eyebrowWrap}>
            <Eyebrow tone="on-dark">{data.eyebrow}</Eyebrow>
          </div>
          <h2 className={`cw-serif ${styles.title}`}>{data.title}</h2>
          <p className={styles.lead}>{data.lead}</p>
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {data.columns.map((col) => (
            <div key={col.label} className={styles.col}>
              <p className={styles.colLabel}>{col.label}</p>
              <ul className={styles.items}>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {col.note ? <p className={styles.colNote}>{col.note}</p> : null}
            </div>
          ))}
        </RevealOnScroll>

        <RevealOnScroll className={styles.footer}>
          <p className={styles.conclusion}>{data.conclusion}</p>
          <Link
            href={localePath(locale, data.cta.href)}
            className={styles.cta}
          >
            {data.cta.label} <span aria-hidden="true">→</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
