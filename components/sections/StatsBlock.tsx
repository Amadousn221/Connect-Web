import type { ReactNode } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
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

// A8 — Chiffres (Lot C). 4 tuiles statiques, données FACT (DECISION 22).
// Vague 4 : remonté juste après le Hero (remplace l'ancienne bande de stats de
// marché) + une icône fonctionnelle par tuile. AUCUN compteur animé.
const ICON: Record<StatTile['icon'], ReactNode> = {
  calendar: <CalendarIcon />,
  folder: <FolderStackIcon />,
  bolt: <BoltIcon />,
  repeat: <RepeatIcon />,
};

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
