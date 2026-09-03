import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { ValidationNote } from '@/components/ui/ValidationNote';
import type { PricingContent } from '@/content/offres';
import styles from './PricingBlock.module.css';

// Section 09 — Investissement : bloc pétrole nuit 2 col (texte + carte prix).
// Le montant reste un placeholder [À PARTIR DE] tant que le PO n'a pas fixé
// les vrais montants (DECISION 10) — jamais de chiffre inventé.
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
            {priceFrom ? (
              <span className={styles.priceFrom}>{priceFrom}</span>
            ) : null}
            <span className={`cw-serif ${styles.priceValue}`}>
              {content.pricePlaceholder}
            </span>
          </p>
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
          <Button href={content.cta.href} variant="primary" onDark size="md">
            {content.cta.label}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
