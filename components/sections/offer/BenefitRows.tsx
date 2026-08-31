import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import type { NumberedItem, SectionIntro } from '@/content/offres';
import styles from './BenefitRows.module.css';

// Section 07 — Ce que ça change : head aligné à gauche + rangées à chiffre
// fantôme (colonne 100px).
export function BenefitRows({
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
          />
        </RevealOnScroll>
        <RevealOnScroll className={styles.list}>
          {items.map((item, i) => (
            <div key={item.title} className={styles.row}>
              <div className={`cw-serif ${styles.num}`}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
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
