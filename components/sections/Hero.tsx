import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { hero } from '@/content/fr/accueil';
import { TrustLine } from './TrustLine';
import styles from './Hero.module.css';

// A1 — Hero. Image de fond en cover + overlay pétrole nuit (dégradé
// 0.80 → 0.92) pour garantir le contraste du texte blanc. Texte aligné à
// gauche sur ~60 %. Un seul <h1> sur la page. Seule animation : la pulsation
// de l'eyebrow (coupée par `prefers-reduced-motion` via les styles globaux).
export function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/assets/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.bg}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`cw-sec ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" className={styles.pulse} />
            {hero.eyebrow}
          </p>

          <h1 className={`cw-serif ${styles.title}`}>{hero.title}</h1>
          <p className={styles.sub}>{hero.subtitle}</p>

          <div className={styles.ctas}>
            <Button href={hero.ctas[0].href} variant="primary" onDark size="md">
              {hero.ctas[0].label}
            </Button>
            <Button href={hero.ctas[1].href} variant="outline" onDark size="md">
              {hero.ctas[1].label}
            </Button>
          </div>

          <TrustLine
            items={hero.trustLine}
            tone="on-dark"
            className={styles.trust}
          />
        </div>
      </div>
    </section>
  );
}
