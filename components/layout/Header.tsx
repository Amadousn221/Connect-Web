'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import { localePath } from '@/lib/i18n/routing';
import { MegaMenu } from './MegaMenu';
import { MobileDrawer } from './MobileDrawer';
import { ThemeToggle } from './ThemeToggle';
import { LangSwitcher } from './LangSwitcher';
import { primaryNav, primaryCta, servicesHubPath } from './site-nav';
import logo from '@/assets/logo-connect-web.webp';
import styles from './Header.module.css';

// En-tête partagé — identique sur les 15 mockups (Accueil V2, lignes 123-176).
// Gère l'ouverture du méga-menu Services (desktop) et du drawer (mobile).

export function Header({ locale }: { locale: Locale }) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const megaId = useId();
  const headerRef = useRef<HTMLElement>(null);

  // Fermer le méga-menu au clic extérieur et à Échap.
  useEffect(() => {
    if (!megaOpen) return;
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMegaOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [megaOpen]);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.bar}>
        <Link
          href={localePath(locale, '/')}
          className={styles.logoLink}
          aria-label="Connect Web — accueil"
        >
          <Image
            src={logo}
            alt="Connect Web"
            height={32}
            priority
            className={styles.logo}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Navigation principale">
          <button
            type="button"
            className={styles.navlink}
            aria-expanded={megaOpen}
            aria-controls={megaId}
            onClick={() => setMegaOpen((v) => !v)}
          >
            Services
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              data-open={megaOpen}
              className={styles.chevron}
            >
              <path
                d="M3 4.5 6 7.5 9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {primaryNav.map((item) => (
            <Link
              key={item.path}
              href={localePath(locale, item.path)}
              className={styles.navlink}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <LangSwitcher current={locale} />
          <ThemeToggle className={styles.desktopOnly} />
          <Link
            href={localePath(locale, primaryCta.path)}
            className={`${styles.cta} ${styles.desktopOnly}`}
          >
            {primaryCta.label}
          </Link>
          <button
            type="button"
            className={styles.burger}
            aria-label="Ouvrir le menu"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <MegaMenu
        id={megaId}
        open={megaOpen}
        locale={locale}
        onNavigate={() => setMegaOpen(false)}
      />

      {/* Lien vers le hub Services pour les lecteurs d'écran / sans JS :
          le bouton ci-dessus ouvre le panneau, ce lien mène à la page. */}
      <Link href={localePath(locale, servicesHubPath)} className="cw-skip-link">
        Aller à la page Services
      </Link>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        locale={locale}
      />
    </header>
  );
}
