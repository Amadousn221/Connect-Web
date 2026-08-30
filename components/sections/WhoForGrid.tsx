import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { pourquiIntro, pourquiCells, pourquiCta } from '@/content/fr/pourqui';
import styles from './WhoForGrid.module.css';

// « Pour qui » (Lot D). Grille statique 6 cases — plus d'onglets (§12). Chaque
// case : nom du segment + « Besoin » + « On construit ». CTA unique en bas.
export function WhoForGrid() {
  return (
    <section id="pourqui" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={pourquiIntro.eyebrow}
            title={pourquiIntro.title}
            lead={pourquiIntro.lead}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {pourquiCells.map((cell) => (
            <div key={cell.name} className={styles.cell}>
              <h3 className={`cw-serif ${styles.name}`}>{cell.name}</h3>
              <dl className={styles.meta}>
                <div>
                  <dt>Besoin</dt>
                  <dd>{cell.need}</dd>
                </div>
                <div>
                  <dt>On construit</dt>
                  <dd>{cell.build}</dd>
                </div>
              </dl>
            </div>
          ))}
        </RevealOnScroll>

        <p className={styles.cta}>
          <Link href={pourquiCta.href}>
            {pourquiCta.label} <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
