import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { methodeIntro, methodeSteps } from '@/content/fr/methode';
import styles from './Method.module.css';

// A10 — Méthode (Lot C). 3 étapes en liste ordonnée sémantique (§06.9).
// Pas de rail scroll-spy, pas d'icône, pas de ligne de connexion animée.
export function Method() {
  return (
    <section id="methode" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={methodeIntro.eyebrow}
            title={methodeIntro.title}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <ol className={styles.steps}>
            {methodeSteps.map((step) => (
              <li key={step.num} className={styles.step}>
                <span
                  className={`cw-serif ${styles.num}`}
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <h3 className={`cw-serif ${styles.stepTitle}`}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </li>
            ))}
          </ol>
        </RevealOnScroll>
      </div>
    </section>
  );
}
