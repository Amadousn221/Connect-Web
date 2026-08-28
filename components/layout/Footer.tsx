import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import { localePath } from '@/lib/i18n/routing';
import {
  footerColumns,
  legalNav,
  contactInfo,
  socialLinks,
} from './site-nav';
import styles from './Footer.module.css';

// Pied de page partagé — mockup Accueil V2 lignes 952-980.

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`cw-sec ${styles.inner}`}>
        <div className={styles.grid}>
          <div>
            <p className={styles.blurb}>
              Studio digital à Dakar. On conçoit et connecte les outils
              numériques qui font tourner votre organisation.
            </p>
            <div className={styles.social}>
              <a
                href={contactInfo.whatsapp}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M9 2a7 7 0 0 0-6 10.5L2 16l3.5-1A7 7 0 1 0 9 2z"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              {socialLinks.length > 0 ? (
                socialLinks.map((s) => (
                  <a key={s.path} href={s.path} className={styles.socialBtn}>
                    {s.label}
                  </a>
                ))
              ) : (
                // URLs réseaux sociaux non fournies par le PO (journal de
                // décisions) : pas de lien mort, on garde le repère du mockup.
                <span className={styles.pending}>Réseaux actifs à valider</span>
              )}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p className={styles.colHeading}>{col.heading}</p>
              <ul className={styles.colList}>
                {col.links.map((link) => (
                  <li key={`${col.heading}-${link.path}-${link.label}`}>
                    <Link href={localePath(locale, link.path)}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className={styles.colHeading}>Contact</p>
            <ul className={styles.colList}>
              <li>{contactInfo.city}</li>
              {contactInfo.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href}>{p.label}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} Connect Web. Tous droits réservés.
          </p>
          <div className={styles.legal}>
            {legalNav.map((item) => (
              <Link key={item.path} href={localePath(locale, item.path)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
