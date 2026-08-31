import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import type { DeliverableItem, SectionIntro } from '@/content/offres';
import styles from './DeliverableGrid.module.css';

// Section 03 — Ce qu'on construit : head centré + cartes livrables (2 col,
// pastille icône générique + titre + texte) + rangée de chips « outils ».
export function DeliverableGrid({
  intro,
  items,
  toolsLabel,
  tools,
}: {
  intro: SectionIntro;
  items: DeliverableItem[];
  toolsLabel?: string;
  tools?: string[];
}) {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <RevealOnScroll>
          <SectionHeading
            eyebrow={intro.eyebrow}
            title={intro.title}
            lead={intro.lead}
            align="center"
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {items.map((item) => (
            <div key={item.title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7l8-4 8 4-8 4-8-4zM4 7v10l8 4 8-4V7"
                    stroke="var(--orange)"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className={`cw-serif ${styles.cardTitle}`}>{item.title}</p>
                <p className={styles.cardBody}>{item.body}</p>
              </div>
            </div>
          ))}
        </RevealOnScroll>

        {tools && tools.length ? (
          <RevealOnScroll className={styles.tools}>
            {toolsLabel ? <p className={styles.toolsLabel}>{toolsLabel}</p> : null}
            <div className={styles.chips}>
              {tools.map((t) => (
                <span key={t} className={styles.chip}>
                  {t}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
