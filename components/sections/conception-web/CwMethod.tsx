import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { conceptionWebMethod as data } from '@/content/fr/conceptionWeb';
import styles from './CwMethod.module.css';

// 06 — Une méthode qui s'adapte à votre point de départ. Roadmap 4 étapes
// (horizontale desktop, verticale mobile), contenu toujours visible — pas
// d'accordéon (≠ Method.tsx de la home). Encart « Vous avez déjà un site ? »
// pour l'audience « site existant » (audit / amélioration / refonte / migration
// / reprise).
export function CwMethod({ locale }: { locale: Locale }) {
  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            lead={data.lead}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <ol className={styles.steps}>
            {data.steps.map((step) => (
              <li key={step.num} className={styles.step}>
                <span className={`cw-serif ${styles.num}`} aria-hidden="true">
                  {step.num}
                </span>
                <h3 className={`cw-serif ${styles.stepTitle}`}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
                <p className={styles.deliverables}>
                  <span className={styles.deliverablesLabel}>
                    Livrables possibles
                  </span>
                  {step.deliverables}
                </p>
              </li>
            ))}
          </ol>
        </RevealOnScroll>

        <RevealOnScroll className={styles.rework}>
          <div>
            <p className={`cw-serif ${styles.reworkTitle}`}>
              {data.rework.title}
            </p>
            <p className={styles.reworkBody}>{data.rework.body}</p>
          </div>
          <Link
            href={localePath(locale, data.rework.cta.href)}
            className={styles.reworkCta}
          >
            {data.rework.cta.label} <span aria-hidden="true">→</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
