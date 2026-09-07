import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { audienceIntro, audienceCards, audienceLink } from '@/content/fr/accueil';
import styles from './NeedSelector.module.css';

// S05 — « À qui nous parlons » (copy V1). Grille statique de 4 profils
// (titre + description), plus un seul lien de section. Remplace l'ancien
// sélecteur interactif (situation/réponse/on livre par carte, cf. git log) :
// le brief V1 ne demande plus qu'une reconnaissance d'audience simple.
export function NeedSelector({ locale }: { locale: Locale }) {
  return (
    <section id="construire" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={audienceIntro.eyebrow}
            title={audienceIntro.title}
            lead={audienceIntro.lead}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {audienceCards.map((card) => (
            <div key={card.key} className={styles.card}>
              <h3 className={`cw-serif ${styles.cardTitle}`}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
            </div>
          ))}
        </RevealOnScroll>

        <RevealOnScroll>
          <Link href={localePath(locale, audienceLink.href)} className={styles.link}>
            {audienceLink.label} →
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
