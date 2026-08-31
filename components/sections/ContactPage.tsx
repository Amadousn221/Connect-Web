import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ContactSection } from '@/components/sections/ContactSection';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { contactPageHero } from '@/content/fr/contact';
import styles from './ContactPage.module.css';

// Page /contact — hero sobre + ContactSection (coordonnées + formulaire).
export function ContactPage({ locale }: { locale: Locale }) {
  return (
    <>
      <section className={styles.hero}>
        <div className="cw-sec">
          <nav className={styles.crumb} aria-label="Fil d'Ariane">
            <Link href={localePath(locale, '/')}>Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <div className={styles.eyebrowWrap}>
            <Eyebrow tone="on-dark">{contactPageHero.eyebrow}</Eyebrow>
          </div>
          <h1 className={`cw-serif ${styles.title}`}>{contactPageHero.title}</h1>
          <p className={styles.sub}>{contactPageHero.subtitle}</p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
