import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { OfferIcon } from '@/components/ui/IconSet';
import type { JourneyTimelineContent } from '@/content/offres';
import styles from './JourneyTimeline.module.css';

// P-JOURNEY (P26 §12) — signature de la page Boutiques en ligne (« Le
// parcours d'achat »), fond encre. Chaîne horizontale numérotée d'étapes ;
// un `highlight` optionnel s'insère APRÈS l'étape qu'il qualifie et rompt
// le fil pour porter le moment différenciant (ex. le wedge local×
// international) directement dans le parcours plutôt qu'en aparté — c'est
// le mécanisme qui rend cette section non transposable telle quelle sur
// une autre page. Mobile : timeline verticale.
export function JourneyTimeline({ eyebrow, title, lead, steps, highlight }: JourneyTimelineContent) {
  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} tone="on-dark" />
        </RevealOnScroll>

        <ol className={styles.chain}>
          {steps.map((step, i) => (
            <li key={step.key} className={styles.stepGroup}>
              <RevealOnScroll className={styles.stepWrap} delay={i * 80}>
                <div className={styles.step}>
                  {step.icon ? (
                    <span className={styles.stepIcon} aria-hidden="true">
                      <OfferIcon offer={step.icon} width={20} height={20} />
                    </span>
                  ) : (
                    <span className={styles.stepNum} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  )}
                  <span className={styles.stepLabel}>{step.label}</span>
                  {step.detail ? <span className={styles.stepDetail}>{step.detail}</span> : null}
                </div>
                {i < steps.length - 1 ? <span className={styles.arrow} aria-hidden="true">→</span> : null}
              </RevealOnScroll>

              {highlight && highlight.afterStepKey === step.key ? (
                <RevealOnScroll className={styles.highlightWrap}>
                  <div className={styles.highlight}>
                    <p className={styles.highlightLabel}>{highlight.label}</p>
                    <p className={styles.highlightBody}>{highlight.body}</p>
                  </div>
                </RevealOnScroll>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
