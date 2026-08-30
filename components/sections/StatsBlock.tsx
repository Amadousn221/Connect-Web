import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { chiffresIntro, stats } from '@/content/fr/chiffres';
import styles from './StatsBlock.module.css';

// A8 — Chiffres (Lot C). 4 tuiles statiques, données FACT (DECISION 22).
// Apparition unique au scroll via RevealOnScroll (IntersectionObserver +
// unobserve + respect prefers-reduced-motion). AUCUN compteur animé.
export function StatsBlock() {
  return (
    <section id="chiffres" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={chiffresIntro.eyebrow}
            title={chiffresIntro.title}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.tile}>
              <p className={styles.label}>{stat.label}</p>
              <p className={`cw-serif ${styles.value}`}>{stat.value}</p>
              <p className={styles.caption}>{stat.caption}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
