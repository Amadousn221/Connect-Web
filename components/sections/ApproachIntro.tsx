import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { approcheIntro as approcheIntroFr } from '@/content/fr/approche';
import { approcheIntro as approcheIntroEn } from '@/content/en/approche';
import styles from './ApproachIntro.module.css';

// Section de transition « Notre approche » — entre la réassurance
// (StatsBlock) et les services (ServiceGrid). Composition asymétrique 2
// colonnes desktop (surtitre + titre / paragraphe + lien), 1 colonne mobile.
// Réutilise l'architecture existante : `cw-sec` (largeur de conteneur),
// `Eyebrow` (repère orange), `RevealOnScroll` (apparition au scroll,
// `prefers-reduced-motion` déjà géré) — aucune dépendance ajoutée.
export function ApproachIntro({ locale }: { locale: Locale }) {
  const t = locale === 'en' ? approcheIntroEn : approcheIntroFr;

  return (
    <section className={styles.section} aria-labelledby="approach-heading">
      <RevealOnScroll className={`cw-sec ${styles.grid}`}>
        <div className={styles.left}>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 id="approach-heading" className={`cw-serif ${styles.title}`}>
            {t.title}
          </h2>
        </div>
        <div className={styles.right}>
          <p className={styles.body}>{t.body}</p>
          <Link href={localePath(locale, t.link.href)} className={styles.link}>
            <span>{t.link.label}</span>
            <span aria-hidden="true" className={styles.arrow}>
              →
            </span>
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
