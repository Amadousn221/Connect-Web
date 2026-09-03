import { Fragment } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import type { ComparePanelContent } from '@/content/offres';
import styles from './ComparePanel.module.css';

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return (
      <span className={styles.boolCell} data-yes={value}>
        {value ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8.5l3.2 3.2L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        )}
      </span>
    );
  }
  return <span className={styles.textCell}>{value}</span>;
}

// P-COMPARE (P26 §12) — colonnes comparatives honnêtes (ex. ONG vs
// Entreprise). Desktop : grille alignée ; mobile/tablette : défilement
// horizontal contrôlé (`role="region"`) plutôt qu'un empilement, pour
// garder les lignes alignées quel que soit le nombre de colonnes.
export function ComparePanel({ eyebrow, title, lead, rowLabels, columns }: ComparePanelContent) {
  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        </RevealOnScroll>

        <RevealOnScroll>
          <div className={styles.scroller} role="region" aria-label={title} tabIndex={0}>
            <div
              className={styles.grid}
              style={{ gridTemplateColumns: `minmax(160px, 1.2fr) repeat(${columns.length}, minmax(140px, 1fr))` }}
            >
              <div className={styles.headCell} aria-hidden="true" />
              {columns.map((col) => (
                <div key={col.label} className={styles.headCell}>
                  {col.label}
                </div>
              ))}

              {rowLabels.map((row, i) => (
                <Fragment key={row}>
                  <div className={styles.rowLabel}>{row}</div>
                  {columns.map((col) => (
                    <div key={`${row}-${col.label}`} className={styles.cell}>
                      <Cell value={col.rows[i]} />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
