import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { TrustLine } from '@/components/sections/TrustLine';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { conceptionWebHero as hero } from '@/content/fr/conceptionWeb';
import styles from './CwHero.module.css';

// 01 — Hero d'expertise. Section pleine largeur sur pétrole nuit, image
// d'ambiance en cover très discrète sous un overlay sombre, texte au premier
// plan aligné à gauche. Hauteur desktop resserrée (~520–600 px). Sur mobile,
// la hauteur est déterminée par le contenu. Aucune carte de réalisation, aucun
// montage d'écrans. Structure calquée sur OfferHero (composant, pas OfferPage).
export function CwHero({ locale }: { locale: Locale }) {
  return (
    <section className={styles.hero}>
      <Image
        src={hero.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.bg}
      />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={`cw-sec ${styles.crumbWrap}`}>
        <nav aria-label="Fil d'Ariane" className={styles.crumb}>
          <Link href={localePath(locale, '/')}>Accueil</Link>
          <span aria-hidden="true">/</span>
          <Link href={localePath(locale, '/services')}>Services</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{hero.breadcrumb}</span>
        </nav>
      </div>

      <div className={`cw-sec ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" className={styles.pulse} />
            {hero.eyebrow}
          </p>
          <h1 className={`cw-serif ${styles.title}`}>{hero.title}</h1>
          <p className={styles.sub}>{hero.intro}</p>

          <div className={styles.ctas}>
            <Button
              href={localePath(locale, hero.ctas[0].href)}
              variant="primary"
              onDark
              size="sm"
            >
              {hero.ctas[0].label}
            </Button>
            <Button
              href={localePath(locale, hero.ctas[1].href)}
              variant="link"
              onDark
              size="sm"
            >
              {hero.ctas[1].label} →
            </Button>
          </div>

          <TrustLine items={hero.trustLine} tone="on-dark" className={styles.trust} />
        </div>
      </div>
    </section>
  );
}
