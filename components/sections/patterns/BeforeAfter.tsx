import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import type { BeforeAfterContent } from '@/content/offres';
import styles from './BeforeAfter.module.css';

// P-BEFORE-AFTER (P26 §12) — split comparatif avant/après. Signature sur
// certaines pages (fond encre, `tone="ink"`, défaut) ou section valeur sur
// d'autres (fond blanc, `tone="blanc"`) — le fond est une décision de
// composition par page (Phase 2+), pas une donnée de contenu. Mobile :
// empilé, avant puis après.
export function BeforeAfter({
  content,
  tone = 'ink',
}: {
  content: BeforeAfterContent;
  tone?: 'ink' | 'blanc';
}) {
  const { eyebrow, title, lead, before, after } = content;
  return (
    <section className={styles.section} data-tone={tone}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            lead={lead}
            tone={tone === 'ink' ? 'on-dark' : 'default'}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.split}>
          <div className={styles.col} data-col="before">
            <p className={styles.colLabel}>{before.label}</p>
            <ul className={styles.list}>
              {before.items.map((item) => (
                <li key={item} className={styles.itemBefore}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.divider} aria-hidden="true">
            <span>→</span>
          </div>

          <div className={styles.col} data-col="after">
            <p className={styles.colLabel}>{after.label}</p>
            <ul className={styles.list}>
              {after.items.map((item) => (
                <li key={item} className={styles.itemAfter}>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8.5l3.2 3.2L13 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
