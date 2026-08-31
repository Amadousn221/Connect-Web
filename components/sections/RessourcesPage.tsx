import Link from 'next/link';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { ContactSection } from '@/components/sections/ContactSection';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import {
  ressourcesHero,
  ressourcesEmpty,
} from '@/content/fr/ressources';
import styles from './RessourcesPage.module.css';

// Hub Ressources — état vide (aucun article rédigé, contenu WordPress M3).
export function RessourcesPage({ locale }: { locale: Locale }) {
  return (
    <>
      <section className={styles.hero}>
        <div className="cw-sec">
          <nav className={styles.crumb} aria-label="Fil d'Ariane">
            <Link href={localePath(locale, '/')}>Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Ressources</span>
          </nav>
          <div className={styles.eyebrowWrap}>
            <Eyebrow tone="on-dark">{ressourcesHero.eyebrow}</Eyebrow>
          </div>
          <h1 className={`cw-serif ${styles.title}`}>{ressourcesHero.title}</h1>
          <p className={styles.sub}>{ressourcesHero.subtitle}</p>
        </div>
      </section>

      <section className={styles.empty}>
        <RevealOnScroll className={styles.emptyInner}>
          <span className={styles.emptyIcon} aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 5.5A1.5 1.5 0 0 1 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5V5.5ZM12 4h6.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H12M8 9h1M8 13h1M15 9h1M15 13h1"
                stroke="var(--orange)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className={`cw-serif ${styles.emptyTitle}`}>{ressourcesEmpty.title}</p>
          <p className={`cw-prose ${styles.emptyBody}`}>{ressourcesEmpty.body}</p>
          <Button href={ressourcesEmpty.cta.href} variant="primary" size="md">
            {ressourcesEmpty.cta.label}
          </Button>
        </RevealOnScroll>
      </section>

      <ContactSection />
    </>
  );
}
