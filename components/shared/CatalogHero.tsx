import { Eyebrow } from '@/components/ui/Eyebrow';

import styles from './CatalogHero.module.css';

/**
 * En-tête des pages catalogue /blog et /ressources (spec §6.1 / §6.3).
 * Fond off-white distinct du Header.
 */
export function CatalogHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header className={styles.hero}>
      <div className="cw-sec">
        <div className={styles.eyebrowWrap}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className={`cw-serif ${styles.title}`}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </header>
  );
}
