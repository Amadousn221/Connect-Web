import type { ReactNode } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { MapPinIcon, NetworkIcon, ShieldCheckIcon } from '@/components/ui/icons';
import {
  differentiatorsIntro,
  differentiators,
  type Differentiator,
} from '@/content/fr/differentiators';
import styles from './Differentiators.module.css';

// S04 — Ce qui nous distingue (Refonte Accueil, D28 · Lot 2). Placée juste après
// les Services. Trois cartes sobres : icône (même famille, décorative), titre
// court, paragraphe justifié, bordure discrète sans ombre. Textes inchangés.
const ICON: Record<Differentiator['icon'], ReactNode> = {
  pin: <MapPinIcon width={22} height={22} />,
  network: <NetworkIcon width={22} height={22} />,
  shield: <ShieldCheckIcon width={22} height={22} />,
};

export function Differentiators() {
  return (
    <section id="distingue" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={differentiatorsIntro.eyebrow}
            title={differentiatorsIntro.title}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {differentiators.map((d) => (
            <div key={d.title} className={styles.item}>
              <span className={styles.icon} aria-hidden="true">
                {ICON[d.icon]}
              </span>
              <h3 className={`cw-serif ${styles.title}`}>{d.title}</h3>
              <p className={styles.body}>{d.body}</p>
              {d.link ? (
                <Link href={d.link.href} className={styles.link}>
                  {d.link.label} →
                </Link>
              ) : null}
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
