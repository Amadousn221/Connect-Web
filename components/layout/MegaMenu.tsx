import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import { localePath } from '@/lib/i18n/routing';
import {
  megaMenuBuild,
  megaMenuSystem,
  megaMenuConseil,
} from './site-nav';
import styles from './MegaMenu.module.css';

// Méga-menu Services — 3 blocs (mockup Accueil V2, lignes 149-175) :
// « Ce qu'on construit » (Niveau 1) · « Le système » (Niveau 2) · Conseil.
// Présentationnel : l'état ouvert/fermé et le focus trap sont gérés par Header.

export function MegaMenu({
  id,
  open,
  locale,
  onNavigate,
}: {
  id: string;
  open: boolean;
  locale: Locale;
  onNavigate?: () => void;
}) {
  return (
    <div id={id} className={styles.mega} hidden={!open}>
      <div className={styles.inner}>
        <div>
          <p className={styles.eyebrow}>Ce qu&apos;on construit</p>
          <ul className={styles.list}>
            {megaMenuBuild.map((item) => (
              <li key={item.path}>
                <Link
                  href={localePath(locale, item.path)}
                  className={styles.link}
                  onClick={onNavigate}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.eyebrow}>Le système</p>
          <ul className={styles.list}>
            {megaMenuSystem.map((item) => (
              <li key={item.path}>
                <Link
                  href={localePath(locale, item.path)}
                  className={styles.link}
                  onClick={onNavigate}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true" className={styles.arrow}>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.conseil}>
          <p className={styles.eyebrow}>Conseil</p>
          <p className={`cw-serif ${styles.conseilTitle}`}>{megaMenuConseil.title}</p>
          <p className={styles.conseilBody}>{megaMenuConseil.body}</p>
          <Link
            href={localePath(locale, megaMenuConseil.path)}
            className={styles.conseilCta}
            onClick={onNavigate}
          >
            {megaMenuConseil.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
