import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { hero } from '@/content/fr/accueil';
import { TrustLine } from './TrustLine';
import styles from './Hero.module.css';

// A1 — Hero. Composition minimaliste sur bleu profond : un bloc texte compact
// (eyebrow, H1 mesuré, description, CTA, trust line) suivi d'une image de
// couverture pleine largeur, à hauteur réduite. Plus de vitrine projets.
// Un seul <h1> sur la page. Seule animation : la pulsation de l'eyebrow
// (coupée par `prefers-reduced-motion` via les styles globaux).
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.texture} aria-hidden="true" />

      <div className={`cw-sec ${styles.inner}`}>
        <p className={styles.eyebrow}>
          <span aria-hidden="true" className={styles.pulse} />
          {hero.eyebrow}
        </p>

        <h1 className={`cw-serif ${styles.title}`}>{hero.title}</h1>
        <p className={styles.sub}>{hero.subtitle}</p>

        <div className={styles.ctas}>
          <Button href={hero.ctas[0].href} variant="primary" onDark size="sm">
            {hero.ctas[0].label}
          </Button>
          <Button href={hero.ctas[1].href} variant="link" onDark size="sm">
            {hero.ctas[1].label} →
          </Button>
        </div>

        <TrustLine
          items={hero.trustLine}
          tone="on-dark"
          className={styles.trust}
        />
      </div>

      <div className={styles.cover}>
        <Image
          src="/assets/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.coverImg}
        />
      </div>
    </section>
  );
}
