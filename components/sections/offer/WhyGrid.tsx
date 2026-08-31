import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import type { NumberedItem, SectionIntro } from '@/content/offres';
import styles from './WhyGrid.module.css';

// Section 05 — Pourquoi Connect Web : head centré + grille 3 colonnes à
// chiffre fantôme (6 arguments).
export function WhyGrid({
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
        <RevealOnScroll className={styles.grid}>
          {items.map((item, i) => (
            <div key={item.title} className={styles.item}>
              <div className={`cw-serif ${styles.num}`}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className={`cw-serif ${styles.itemTitle}`}>{item.title}</p>
              <p className={styles.itemBody}>{item.body}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
