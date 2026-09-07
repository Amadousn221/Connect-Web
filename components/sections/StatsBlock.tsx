import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { showValidationNotes } from '@/lib/flags';
import { stats, pendingStat } from '@/content/fr/chiffres';
import styles from './StatsBlock.module.css';

// A8 — Réassurance (brief S02, copy V1). Bande de preuve SILENCIEUSE — pas de
// titre, pas d'eyebrow, pas de cartes, pas d'icônes, pas de compteur animé.
// 3 chiffres FACT séparés par des filets fins. Le 4e (fidélité) a un intitulé
// et une source non confirmés par le PO (copy V1) : masqué en production,
// visible en preview seulement (`pendingStat`).
export function StatsBlock() {
  const showPending = showValidationNotes();
  const items = showPending ? [...stats, pendingStat] : stats;

  return (
    <section id="chiffres" className={styles.section} aria-label="Connect Web en chiffres">
      <RevealOnScroll
        className={`cw-sec ${styles.row}`}
        style={{ '--stat-cols': items.length } as React.CSSProperties}
      >
        {items.map((stat) => (
          <div key={stat.label} className={styles.item}>
            <p className={`cw-serif ${styles.value}`}>{stat.value}</p>
            <p className={styles.caption}>
              {stat.caption}
              {stat === pendingStat ? <ValidationNote> — à confirmer</ValidationNote> : null}
            </p>
          </div>
        ))}
      </RevealOnScroll>
    </section>
  );
}
