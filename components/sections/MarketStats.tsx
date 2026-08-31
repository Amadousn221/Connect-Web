import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { marcheIntro, marketStats } from '@/content/fr/marche';
import styles from './MarketStats.module.css';

// Bande de réassurance digitale — statistiques de MARCHÉ (pas les chiffres
// Connect Web, qui sont plus bas dans StatsBlock). Chaque tuile affiche sa
// source : c'est le point distinctif de la section.
export function MarketStats() {
  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={marcheIntro.eyebrow}
            title={marcheIntro.title}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {marketStats.map((stat) => (
            <div key={stat.value} className={styles.item}>
              <p className={`cw-serif ${styles.value}`}>{stat.value}</p>
              <p className={styles.text}>{stat.text}</p>
              <p className={styles.source}>{stat.source}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
