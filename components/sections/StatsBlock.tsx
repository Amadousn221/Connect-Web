import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { stats } from '@/content/fr/chiffres';
import styles from './StatsBlock.module.css';

// A8 — Réassurance (brief S02). Refonte Accueil : bande de preuve SILENCIEUSE —
// pas de titre, pas d'eyebrow, pas de cartes, pas d'icônes, pas de compteur
// animé. Quatre chiffres FACT (DECISION 22) séparés par des filets fins.
export function StatsBlock() {
  return (
    <section id="chiffres" className={styles.section} aria-label="Connect Web en chiffres">
      <RevealOnScroll className={`cw-sec ${styles.row}`}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.item}>
            <p className={`cw-serif ${styles.value}`}>{stat.value}</p>
            <p className={styles.caption}>{stat.caption}</p>
          </div>
        ))}
      </RevealOnScroll>
    </section>
  );
}
