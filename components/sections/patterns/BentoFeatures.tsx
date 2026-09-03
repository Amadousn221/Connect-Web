import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { OfferIcon } from '@/components/ui/IconSet';
import type { BentoFeaturesContent } from '@/content/offres';
import styles from './BentoFeatures.module.css';

// P-BENTO (P26 §12) — grille bento de tailles variées, remplace la grille
// uniforme 2×2 (DeliverableGrid) pour montrer la valeur sans « 3 cartes »
// identiques. `size` pilote l'emprise dans la grille (voir .module.css).
export function BentoFeatures({ eyebrow, title, lead, items }: BentoFeaturesContent) {
  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {items.map((item) => (
            <div key={item.title} className={styles.item} data-size={item.size ?? 'md'}>
              {item.icon ? (
                <div className={styles.iconBox}>
                  <OfferIcon offer={item.icon} width={24} height={24} />
                </div>
              ) : null}
              <h3 className={`cw-serif ${styles.title}`}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
