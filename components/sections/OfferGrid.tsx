import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { offersIntro, offerCards, offersToValidate } from '@/content/fr/accueil';
import styles from './OfferGrid.module.css';

// A5 — Grille des 6 services (raccourci vers les pages d'offre).
export function OfferGrid({ locale }: { locale: Locale }) {
  return (
    <section id="services" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={offersIntro.eyebrow}
            title={offersIntro.title}
            lead={offersIntro.lead}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {offerCards.map((card) => (
            <Link
              key={card.href}
              href={localePath(locale, card.href)}
              className={styles.card}
            >
              <span className={`cw-serif ${styles.cardTitle}`}>{card.title}</span>
              <span className={styles.cardBody}>{card.body}</span>
              <span className={styles.cardMore}>En savoir plus →</span>
            </Link>
          ))}
        </RevealOnScroll>

        <div className={styles.note}>
          <ValidationNote variant="box">{offersToValidate}</ValidationNote>
        </div>
      </div>
    </section>
  );
}
