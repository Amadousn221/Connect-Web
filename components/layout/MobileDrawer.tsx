'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import { localePath } from '@/lib/i18n/routing';
import { ThemeToggle } from './ThemeToggle';
import { LangSwitcher } from './LangSwitcher';
import { useModal } from '@/components/ui/ModalProvider';
import { servicesHubPath, primaryNav, primaryCta, contactInfo } from './site-nav';
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
  const { open: openModal } = useModal();

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
          <Link href={localePath(locale, servicesHubPath)} onClick={onClose}>
            Services
          </Link>
          {primaryNav.map((item) => (
            <Link key={item.path} href={localePath(locale, item.path)} onClick={onClose}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.controls}>
          <LangSwitcher current={locale} variant="stack" />
          <ThemeToggle tone="on-dark" className={styles.themeInline} />
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={() => {
              onClose();
              openModal('project');
            }}
            className={styles.cta}
          >
            {primaryCta.label}
          </button>
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
