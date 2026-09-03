import type { ReactNode } from 'react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import {
  CalendarIcon,
  FolderStackIcon,
  BoltIcon,
  RepeatIcon,
} from '@/components/ui/icons';
import { chiffresIntro, stats } from '@/content/fr/chiffres';
import type { StatTile } from '@/content/types';
import styles from './StatsBlock.module.css';

// P25 S02 — Réassurance. 4 chiffres réels, AUCUN compteur animé. Pas de
// titre visible (brief P25 §S02) — un <h2> masqué visuellement garde un
// repère de landmark accessible.
const ICON: Record<StatTile['icon'], ReactNode> = {
  calendar: <CalendarIcon />,
  folder: <FolderStackIcon />,
  bolt: <BoltIcon />,
  repeat: <RepeatIcon />,
};

export function StatsBlock() {
  return (
    <section id="chiffres" className={styles.section} aria-labelledby="chiffres-h">
      <div className="cw-sec">
        <h2 id="chiffres-h" className="cw-sr-only">
          {chiffresIntro.eyebrow}
        </h2>

        <RevealOnScroll className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.tile}>
              <span className={styles.icon} aria-hidden="true">
                {ICON[stat.icon]}
              </span>
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
