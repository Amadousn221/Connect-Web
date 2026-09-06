import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import {
  differentiatorsIntro,
  differentiators,
} from '@/content/fr/differentiators';
import styles from './Differentiators.module.css';

// S04 — Ce qui nous distingue (Refonte Accueil, D28). Trois blocs éditoriaux
// numérotés 01/02/03 sur fond blanc. Pas de cartes : filet supérieur, numéro
// (accent), titre, 1–2 phrases. Composition éditoriale, pas grille de pastilles.
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
          {differentiators.map((d, i) => (
            <div key={d.title} className={styles.item}>
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
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
