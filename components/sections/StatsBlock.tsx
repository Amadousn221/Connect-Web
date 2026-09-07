import type { ReactNode } from 'react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import {
  CalendarIcon,
  FolderStackIcon,
  BoltIcon,
  RepeatIcon,
} from '@/components/ui/icons';
import { stats } from '@/content/fr/chiffres';
import type { StatTile } from '@/content/types';
import styles from './StatsBlock.module.css';

// A8 — Réassurance (brief S02). Bande de preuve sobre : une icône fonctionnelle,
// un chiffre FACT (DECISION 22), un libellé court. Filets fins, pas de carte ni
// d'ombre. Les icônes apparaissent en cascade quand la bande entre à l'écran
// (coupé par `prefers-reduced-motion`) — aucun compteur animé.
const ICON: Record<StatTile['icon'], ReactNode> = {
  calendar: <CalendarIcon width={20} height={20} />,
  folder: <FolderStackIcon width={20} height={20} />,
  bolt: <BoltIcon width={20} height={20} />,
  repeat: <RepeatIcon width={20} height={20} />,
};

export function StatsBlock() {
  return (
    <section
      id="chiffres"
      className={styles.section}
      aria-label="Connect Web en chiffres"
    >
      <RevealOnScroll className={`cw-sec ${styles.row}`}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.item}>
            <span className={styles.icon} aria-hidden="true">
              {ICON[stat.icon]}
            </span>
            <p className={`cw-serif ${styles.value}`}>{stat.value}</p>
            <p className={styles.caption}>{stat.caption}</p>
          </div>
        ))}
      </RevealOnScroll>
    </section>
  );
}
