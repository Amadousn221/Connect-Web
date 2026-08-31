import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { methodeIntro, methodeSteps } from '@/content/fr/methode';
import styles from './Method.module.css';

// A10 — Méthode : roadmap à 3 nœuds sur une ligne de progression. À l'entrée
// dans le viewport (RevealOnScroll), la ligne se trace et les étapes
// apparaissent en séquence. `prefers-reduced-motion` : apparition directe
// (styles globaux). <ol> sémantique sous l'habillage visuel.
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

        <RevealOnScroll className={styles.roadmap}>
          <span className={styles.line} aria-hidden="true" />
          <ol className={styles.steps}>
            {methodeSteps.map((step, i) => (
              <li key={step.num} className={styles.step} data-step={i + 1}>
                <span className={styles.dot} aria-hidden="true" />
                <span className={`cw-serif ${styles.num}`} aria-hidden="true">
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
