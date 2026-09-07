import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { conceptionWebOrientation as data } from '@/content/fr/conceptionWeb';
import styles from './CwOrientation.module.css';

// 02 — Choisir la bonne solution. Chapô éditorial + 3 cartes uniformes vers les
// pages enfants, puis une bifurcation plus légère vers les logiciels & apps.
// Les cartes distinguent des usages, pas des technologies.
export function CwOrientation({ locale }: { locale: Locale }) {
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

        <RevealOnScroll className={styles.grid}>
          {data.cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <span className={styles.index} aria-hidden="true">
                {card.index}
              </span>
              <h3 className={`cw-serif ${styles.cardTitle}`}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
              <ul className={styles.needs}>
                {card.needs.map((need) => (
                  <li key={need} className={styles.need}>
                    {need}
                  </li>
                ))}
              </ul>
              <Link
                href={localePath(locale, card.link.href)}
                className={styles.cardLink}
              >
                {card.link.label} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </RevealOnScroll>

        <RevealOnScroll className={styles.bifurcation}>
          <div>
            <p className={`cw-serif ${styles.bifTitle}`}>
              {data.bifurcation.title}
            </p>
            <p className={styles.bifBody}>{data.bifurcation.body}</p>
          </div>
          <Link
            href={localePath(locale, data.bifurcation.link.href)}
            className={styles.bifLink}
          >
            {data.bifurcation.link.label} <span aria-hidden="true">→</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
