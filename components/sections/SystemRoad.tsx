import type { ReactNode } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { systemIntro, systemElements } from '@/content/fr/accueil';
import type { SystemElement } from '@/content/types';
import styles from './SystemRoad.module.css';

// A6 — « Du site au système ». Fusion des anciennes sections road + trajectoires.
// 4 éléments besoin → solution, multi-segment, une icône fonctionnelle chacun.
const ICON: Record<SystemElement['icon'], ReactNode> = {
  building: (
    <path
      d="M4 21V5l7-2v18M11 21h9V9l-9-3M8 8v0M8 12v0M8 16v0M15 12v0M15 16v0"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  cart: (
    <path
      d="M3 4h2l2.4 11.5a2 2 0 0 0 2 1.5h7.7a2 2 0 0 0 2-1.6L21 8H6M9 21v0M18 21v0"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  gear: (
    <path
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 12a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 5.3l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 12 3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  bolt: (
    <path
      d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  ),
};

export function SystemRoad() {
  return (
    <section id="systeme" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={systemIntro.eyebrow}
            title={systemIntro.title}
            lead={systemIntro.lead}
            tone="on-dark"
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {systemElements.map((el) => (
            <div key={el.need} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  {ICON[el.icon]}
                </svg>
              </span>
              <p className={styles.need}>{el.need}</p>
              <p className={styles.solution}>{el.solution}</p>
              <p className={styles.example}>{el.example}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
