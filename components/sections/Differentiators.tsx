import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { differentiatorsIntro, differentiators } from '@/content/fr/differentiators';
import styles from './Differentiators.module.css';

// P25 S04 — Ce qui nous distingue. 3 blocs éditoriaux numérotés, PAS de
// cartes (filet supérieur + numéro orange + titre + corps court). Absorbe
// l'ancien Wedge.tsx (voir plan P25 §4).
export function Differentiators() {
  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading eyebrow={differentiatorsIntro.eyebrow} title={differentiatorsIntro.title} />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {differentiators.map((d) => (
            <div key={d.num} className={styles.item}>
              <span className={styles.num}>{d.num}</span>
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
