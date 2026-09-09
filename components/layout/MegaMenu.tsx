import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';
import { localePath } from '@/lib/i18n/routing';
import {
  megaMenuWebFamily,
  megaMenuSystemFamily,
  megaMenuConseil,
  servicesHubPath,
} from './site-nav';
import styles from './MegaMenu.module.css';

// Méga-menu Services — hub + 2 familles (4 liens chacune) + Conseil, alignés
// sur les 5 expertises + Conseil du hub /services (content/fr/servicesHub.ts) :
// « Conception & développement web » · « Systèmes & croissance » · Conseil.
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
  const pathname = usePathname();
  const isActive = (path: string) => pathname === localePath(locale, path);

  return (
    <div id={id} className={styles.mega} hidden={!open}>
      <div className={styles.inner}>
        <Link
          href={localePath(locale, servicesHubPath)}
          className={styles.hubLink}
          aria-current={isActive(servicesHubPath) ? 'page' : undefined}
          onClick={onNavigate}
        >
          Tous nos services
          <span aria-hidden="true" className={styles.arrow}>
            →
          </span>
        </Link>

        <div>
          <p className={styles.eyebrow}>Conception &amp; développement web</p>
          <ul className={styles.list}>
            {megaMenuWebFamily.map((item) => (
              <li key={item.path}>
                <Link
                  href={localePath(locale, item.path)}
                  className={styles.link}
                  aria-current={isActive(item.path) ? 'page' : undefined}
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
          <p className={styles.eyebrow}>Systèmes &amp; croissance</p>
          <ul className={styles.list}>
            {megaMenuSystemFamily.map((item) => (
              <li key={item.path}>
                <Link
                  href={localePath(locale, item.path)}
                  className={styles.link}
                  aria-current={isActive(item.path) ? 'page' : undefined}
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
            aria-current={isActive(megaMenuConseil.path) ? 'page' : undefined}
            onClick={onNavigate}
          >
            {megaMenuConseil.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
