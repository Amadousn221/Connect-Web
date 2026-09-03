import { Button } from '@/components/ui/Button';
import { hero } from '@/content/fr/accueil';
import { TrustLine } from './TrustLine';
import styles from './Hero.module.css';

// P25 S01 — Hero. Composition purement typographique sur fond ink (décision
// PO — plus d'image/mockup dans le hero, cf. brief P25 §04-D26/S01). CTA
// hiérarchisé : primaire orange compact, secondaire en lien discret (pas un
// 2e bouton de même poids). Un seul <h1> sur la page. Seule animation : la
// pulsation de l'eyebrow (coupée par `prefers-reduced-motion`).
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
            <Button href={hero.ctas[0].href} variant="primary" onDark size="md">
              {hero.ctas[0].label}
            </Button>
            <Button href={hero.ctas[1].href} variant="link" onDark size="md">
              {hero.ctas[1].label} →
            </Button>
          </div>

          <TrustLine items={hero.trustLine} tone="on-dark" className={styles.trust} />
        </div>
      </div>
    </section>
  );
}
