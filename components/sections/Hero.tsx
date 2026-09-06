import { Button } from '@/components/ui/Button';
import { hero } from '@/content/fr/accueil';
import type { Locale } from '@/lib/i18n/config';
import { TrustLine } from './TrustLine';
import { HeroShowcase } from './HeroShowcase';
import styles from './Hero.module.css';

// A1 — Hero. Refonte : composition compacte en deux colonnes sur bleu profond
// (pétrole nuit). À gauche (~45 %) le texte — <h1> mesuré, description, CTA,
// trust line — FIXE. À droite (~55 %) une vitrine interactive de réalisations
// réelles (`HeroShowcase`, client component isolé). Hauteur naturelle, pas de
// plein écran imposé. Sur mobile : texte → boutons → vitrine.
// Un seul <h1> sur la page. Seules animations : la pulsation de l'eyebrow et le
// crossfade des captures — toutes deux coupées par `prefers-reduced-motion`.
export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className={styles.hero}>
      <div className={styles.texture} aria-hidden="true" />

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

          <TrustLine
            items={hero.trustLine}
            tone="on-dark"
            className={styles.trust}
          />
        </div>

        <div className={styles.showcase}>
          <HeroShowcase locale={locale} />
        </div>
      </div>
    </section>
  );
}
