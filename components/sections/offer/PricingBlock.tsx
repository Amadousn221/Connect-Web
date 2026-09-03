import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { PricingQualifyForm } from './PricingQualifyForm';
import type { PricingContent } from '@/content/offres';
import styles from './PricingBlock.module.css';

// P-PRICING (P26 §11) — fond blanc (n'est plus une des 3 sections encre de
// la page). Plancher « à partir de » réel ou placeholder balisé (DECISION
// 10, jamais un montant inventé) ; `scopeNote` (« selon périmètre ») pour
// les offres 100 % sur-mesure (Plateformes/Odoo, note tarification §1) ;
// formulaire de qualification court intégré à la carte, remplace le simple
// lien vers le formulaire de contact général.
export function PricingBlock({ content }: { content: PricingContent }) {
  const priceFrom = content.priceFrom ?? 'à partir de';
  const isPlaceholder = content.pricePlaceholder.includes('[');
  return (
    <section className={styles.section}>
      <div className={`cw-sec ${styles.grid}`}>
        <RevealOnScroll>
          <div className={styles.eyebrowWrap}>
            <Eyebrow>{content.eyebrow}</Eyebrow>
          </div>
          <h2 className={`cw-serif ${styles.title}`}>{content.title}</h2>
          <p className={styles.body}>{content.body}</p>
          {isPlaceholder ? (
            <div className={styles.note}>
              <ValidationNote>Montant « à partir de » à confirmer</ValidationNote>
            </div>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll className={styles.card}>
          <p className={styles.cardLabel}>{content.cardLabel}</p>
          <p className={styles.price}>
            {priceFrom ? <span className={styles.priceFrom}>{priceFrom}</span> : null}
            <span className={`cw-serif ${styles.priceValue}`}>{content.pricePlaceholder}</span>
          </p>
          {content.scopeNote ? <p className={styles.scopeNote}>{content.scopeNote}</p> : null}
          <ul className={styles.includes}>
            {content.includes.map((inc) => (
              <li key={inc}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8.5l3.2 3.2L13 5"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {inc}
              </li>
            ))}
          </ul>
          <PricingQualifyForm offerTitle={content.cardLabel} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
