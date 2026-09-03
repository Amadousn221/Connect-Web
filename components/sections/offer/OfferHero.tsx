import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { OfferHeroContent } from '@/content/offres';
import styles from './OfferHero.module.css';

// Section 01 — Hero d'offre : image + dégradé, fil d'Ariane, eyebrow, h1, sous-
// titre, 2 CTA, 3 puces à coche.
export function OfferHero({
  locale,
  content,
}: {
  locale: Locale;
  content: OfferHeroContent;
}) {
  return (
    <section
      className={styles.hero}
      data-plain={content.image ? undefined : 'true'}
    >
      {content.image ? (
        <>
          <Image
            src={content.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.bg}
          />
          <div className={styles.scrim} />
        </>
      ) : null}

      <div className={`cw-sec ${styles.crumbWrap}`}>
        <nav aria-label="Fil d'Ariane" className={styles.crumb}>
          <Link href={localePath(locale, '/')}>Accueil</Link>
          <span aria-hidden="true">/</span>
          <Link href={localePath(locale, '/services')}>Services</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{content.breadcrumb}</span>
        </nav>
      </div>

      <div className={`cw-sec ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" className={styles.pulse} />
            {content.eyebrow}
          </p>
          <h1 className={`cw-serif ${styles.title}`}>{content.title}</h1>
          <p className={styles.sub}>{content.subtitle}</p>

          <div className={styles.ctas}>
            <Button href={content.ctas[0].href} variant="primary" onDark size="md">
              {content.ctas[0].label}
            </Button>
            <Button href={content.ctas[1].href} variant="outline" onDark size="md">
              {content.ctas[1].label}
            </Button>
          </div>

          <ul className={styles.features}>
            {content.features.map((f) => (
              <li key={f}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8.5l3.2 3.2L13 5"
                    stroke="var(--accent)"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
