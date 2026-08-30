import { Button } from '@/components/ui/Button';
import { hero, heroShots } from '@/content/fr/accueil';
import { HeroComposite } from './HeroComposite';
import { TrustLine } from './TrustLine';
import styles from './Hero.module.css';

// A1 — Hero (V2.1, Lot A). Statique : texte à gauche, composite de captures
// réelles à droite (§17.1, §19.2). Fond pétrole nuit plein — l'image de fond
// décorative + ken-burns de la V2 est retirée (audit §01.3). Un seul <h1> sur
// la page. Pas d'animation hors la pulsation de l'eyebrow (coupée par
// `prefers-reduced-motion` via les styles globaux).
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`cw-sec ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" className={styles.pulse} />
            {hero.eyebrow}
          </p>

          <h1 className={`cw-serif ${styles.title}`}>{hero.title}</h1>
          <p className={styles.sub}>{hero.subtitle}</p>

          <div className={styles.ctas}>
            <Button href={hero.ctas[0].href} variant="primary" onDark size="lg">
              {hero.ctas[0].label}
            </Button>
            <Button href={hero.ctas[1].href} variant="outline" onDark size="lg">
              {hero.ctas[1].label}
            </Button>
          </div>

          <TrustLine
            items={hero.trustLine}
            tone="on-dark"
            className={styles.trust}
          />
        </div>

        <div className={styles.media}>
          <HeroComposite shots={heroShots} />
        </div>
      </div>
    </section>
  );
}
