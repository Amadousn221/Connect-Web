import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { servicesIntro, servicesL1, servicesSystem, servicesConseil } from '@/content/fr/services';
import { ServiceCard } from './ServiceCard';
import styles from './ServiceGrid.module.css';

// P25 S06 — Nos services / expertises. Taxonomie verrouillée DECISION 03 :
// Niveau 1 (4, dominant) + Système (3, secondaire) + Conseil (porte d'entrée,
// 1 ligne CTA — pas une carte).
export function ServiceGrid({ locale }: { locale: Locale }) {
  return (
    <section id="services" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={servicesIntro.eyebrow}
            title={servicesIntro.title}
            lead={servicesIntro.lead}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.groupLabel}>Ce qu'on construit</RevealOnScroll>
        <RevealOnScroll className={styles.gridL1}>
          {servicesL1.map((card) => (
            <ServiceCard key={card.title} card={card} locale={locale} />
          ))}
        </RevealOnScroll>

        <RevealOnScroll className={styles.groupLabel}>Le système</RevealOnScroll>
        <RevealOnScroll className={styles.gridSystem}>
          {servicesSystem.map((card) => (
            <ServiceCard key={card.title} card={card} locale={locale} />
          ))}
        </RevealOnScroll>

        <RevealOnScroll className={styles.conseil}>
          <div>
            <p className={styles.conseilTitle}>{servicesConseil.title}</p>
            <p className={styles.conseilBody}>{servicesConseil.body}</p>
          </div>
          <Link href={localePath(locale, servicesConseil.cta.href)} className={styles.conseilCta}>
            {servicesConseil.cta.label} <span aria-hidden="true">→</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
