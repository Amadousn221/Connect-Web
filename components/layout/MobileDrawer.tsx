'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';
import { localePath } from '@/lib/i18n/routing';
import { ThemeToggle } from './ThemeToggle';
import { LangSwitcher } from './LangSwitcher';
import {
  servicesHubPath,
  servicesTop,
  serviceFamilies,
  serviceConseil,
  primaryNav,
  primaryCta,
  contactInfo,
} from './site-nav';
import logo from '@/assets/logo-connect-web.webp';
import styles from './MobileDrawer.module.css';

// Drawer plein écran mobile — mockup Accueil V2 lignes 178-203.
// DECISION 06 : drawer plein écran, CTA + téléphone/WhatsApp prioritaires.

export function MobileDrawer({
  open,
  onClose,
  locale,
}: {
  open: boolean;
  onClose: () => void;
  locale: Locale;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === localePath(locale, path);
  const onServices =
    pathname === localePath(locale, servicesHubPath) ||
    pathname.startsWith(`${localePath(locale, servicesHubPath)}/`);

  // Fermeture à Échap + focus initial sur le bouton fermer + blocage du scroll.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <>
      <div
        className={styles.overlay}
        data-open={open}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={styles.drawer}
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        aria-hidden={!open}
        inert={!open}
      >
        <div className={styles.head}>
          <Image
            src={logo}
            alt="Connect Web"
            height={26}
            className={styles.logo}
            priority
          />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className={styles.close}
          >
            ✕
          </button>
        </div>

        <nav className={styles.nav}>
          {/* Services — accordéon natif : arborescence complète, source unique
              (site-nav.ts). Ouvert par défaut sur une page Services. */}
          <details className={styles.group} open={onServices}>
            <summary className={styles.groupSummary}>
              <span data-active={onServices || undefined}>Services</span>
              <span aria-hidden="true" className={styles.groupChevron} />
            </summary>
            <div className={styles.groupBody}>
              <Link
                href={localePath(locale, servicesTop.path)}
                onClick={onClose}
                className={styles.subLinkStrong}
                aria-current={isActive(servicesTop.path) ? 'page' : undefined}
                data-active={isActive(servicesTop.path) || undefined}
              >
                {servicesTop.label}
              </Link>
              {serviceFamilies.map((family) => (
                <div key={family.heading} className={styles.subFamily}>
                  <p className={styles.subHeading}>{family.heading}</p>
                  {family.links.map((item) => (
                    <Link
                      key={item.path}
                      href={localePath(locale, item.path)}
                      onClick={onClose}
                      className={styles.subLink}
                      aria-current={isActive(item.path) ? 'page' : undefined}
                      data-active={isActive(item.path) || undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                href={localePath(locale, serviceConseil.path)}
                onClick={onClose}
                className={styles.subLink}
                aria-current={isActive(serviceConseil.path) ? 'page' : undefined}
                data-active={isActive(serviceConseil.path) || undefined}
              >
                {serviceConseil.label}
              </Link>
            </div>
          </details>

          {primaryNav.map((item) => (
            <Link
              key={item.path}
              href={localePath(locale, item.path)}
              onClick={onClose}
              aria-current={isActive(item.path) ? 'page' : undefined}
              data-active={isActive(item.path) || undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.controls}>
          <LangSwitcher current={locale} variant="stack" />
          <ThemeToggle tone="on-dark" className={styles.themeInline} />
        </div>

        <div className={styles.actions}>
          <Link
            href={localePath(locale, primaryCta.path)}
            onClick={onClose}
            className={styles.cta}
          >
            {primaryCta.label}
          </Link>
          <div className={styles.reach}>
            <a href={contactInfo.phones[0].href}>Appeler</a>
            <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
