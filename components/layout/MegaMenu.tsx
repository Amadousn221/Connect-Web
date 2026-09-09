'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';
import { localePath } from '@/lib/i18n/routing';
import { serviceFamilies, serviceConseil, servicesTop } from './site-nav';
import styles from './MegaMenu.module.css';

// Méga-menu Services — 3 colonnes : « Tous nos services » en tête, puis les
// deux familles de routes RÉELLES (serviceFamilies) et le bloc Conseil.
// Source unique de routes : site-nav.ts. Ouverture / fermeture / Échap : Header.

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
          href={localePath(locale, servicesTop.path)}
          className={styles.hubLink}
          aria-current={isActive(servicesTop.path) ? 'page' : undefined}
          data-active={isActive(servicesTop.path) || undefined}
          onClick={onNavigate}
        >
          {servicesTop.label}
          <span aria-hidden="true" className={styles.arrow}>
            →
          </span>
        </Link>

        {serviceFamilies.map((family) => (
          <div key={family.heading} className={styles.col}>
            <p className={styles.eyebrow}>{family.heading}</p>
            <ul className={styles.list}>
              {family.links.map((item) => (
                <li key={item.path}>
                  <Link
                    href={localePath(locale, item.path)}
                    className={styles.link}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                    data-active={isActive(item.path) || undefined}
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
        ))}

        <div className={styles.conseil}>
          <p className={styles.eyebrow}>Conseil</p>
          <p className={`cw-serif ${styles.conseilTitle}`}>{serviceConseil.title}</p>
          <p className={styles.conseilBody}>{serviceConseil.body}</p>
          <Link
            href={localePath(locale, serviceConseil.path)}
            className={styles.conseilCta}
            aria-current={isActive(serviceConseil.path) ? 'page' : undefined}
            onClick={onNavigate}
          >
            {serviceConseil.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
