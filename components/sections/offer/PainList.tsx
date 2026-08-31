import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import type { NumberedItem, SectionIntro } from '@/content/offres';
import styles from './PainList.module.css';

// Section 02 — Le problème : head centré + rangées numérotées asymétriques.
export function PainList({
  intro,
  items,
}: {
  intro: SectionIntro;
  items: NumberedItem[];
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
        <RevealOnScroll className={styles.list}>
          {items.map((item, i) => (
            <div key={item.title} className={styles.row} data-even={i % 2 === 1}>
              <div className={`cw-serif ${styles.num}`}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className={styles.body}>
                <p className={`cw-serif ${styles.rowTitle}`}>{item.title}</p>
                <p className={styles.rowText}>{item.body}</p>
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
