import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { sitesEntrepriseStartingPoint as data } from '@/content/fr/sitesEntreprise';
import styles from './SeStartingPoint.module.css';

// 08 — Créer, refondre ou reprendre l'existant. 4 points de départ (nouveau
// site / refonte / migration / reprise), méthode commune, CTA. Contenu
// entièrement statique — accessible sans JavaScript (pas d'onglets).
export function SeStartingPoint() {
  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading eyebrow={data.eyebrow} title={data.title} />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {data.steps.map((step) => (
            <article key={step.num} className={styles.item}>
              <span className={`cw-serif ${styles.num}`} aria-hidden="true">
                {step.num}
              </span>
              <h3 className={`cw-serif ${styles.itemTitle}`}>{step.title}</h3>
              <p className={styles.itemBody}>{step.body}</p>
            </article>
          ))}
        </RevealOnScroll>

        <RevealOnScroll className={styles.footer}>
          <p className={styles.method}>{data.method}</p>
          <Link href={data.cta.href} className={styles.cta}>
            {data.cta.label} <span aria-hidden="true">→</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
