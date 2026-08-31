import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { ContactSection } from '@/components/sections/ContactSection';
import { RealisationsGrid } from '@/components/sections/RealisationsGrid';
import Link from 'next/link';
import { localePath } from '@/lib/i18n/routing';
import { showValidationNotes } from '@/lib/flags';
import type { Locale } from '@/lib/i18n/config';
import { caseTeasers } from '@/content/fr/accueil';
import {
  realisationsHero,
  realisationsStats,
  realisationsFinalCta,
} from '@/content/fr/realisations';
import styles from './RealisationsPage.module.css';

export function RealisationsPage({ locale }: { locale: Locale }) {
  return (
    <>
      <section className={styles.hero}>
        <div className="cw-sec">
          <nav className={styles.crumb} aria-label="Fil d'Ariane">
            <Link href={localePath(locale, '/')}>Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Réalisations</span>
          </nav>
          <div className={styles.eyebrowWrap}>
            <Eyebrow tone="on-dark">{realisationsHero.eyebrow}</Eyebrow>
          </div>
          <h1 className={`cw-serif ${styles.title}`}>{realisationsHero.title}</h1>
          <p className={styles.sub}>{realisationsHero.subtitle}</p>
        </div>
      </section>

      <section className={styles.stats}>
        <RevealOnScroll className={`cw-sec ${styles.statsGrid}`}>
          {realisationsStats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <p className={`cw-serif ${styles.statValue}`}>{s.value}</p>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </RevealOnScroll>
      </section>

      <RealisationsGrid items={caseTeasers} preview={showValidationNotes()} />

      <section className={styles.finalCta}>
        <RevealOnScroll className={styles.finalInner}>
          <div className={styles.eyebrowWrap}>
            <Eyebrow tone="on-dark">{realisationsFinalCta.eyebrow}</Eyebrow>
          </div>
          <h2 className={`cw-serif ${styles.finalTitle}`}>
            {realisationsFinalCta.title}
          </h2>
          <Button href={realisationsFinalCta.cta.href} variant="primary" onDark size="md">
            {realisationsFinalCta.cta.label}
          </Button>
        </RevealOnScroll>
      </section>

      <ContactSection />
    </>
  );
}
