'use client';

import { useEffect, useRef } from 'react';
import styles from './service-page.module.css';

// Coquille commune des pages Services enfants (Sites d'entreprise, Institutionnels
// & ONG, Boutiques, WordPress, Shopify, Applications).
//
// - défilement doux vers les ancres in-page (#contact…), offset du header réel,
//   respect de `prefers-reduced-motion` ; sans JS, les `<a href="#x">` marchent
//   nativement grâce au `scroll-margin-top` des sections ;
// - porte l'échelle typo mobile de la page (`.page`), comme `.hub` sur le hub.
export function ServicePageShell({
  id,
  children,
}: {
  /** id du wrapper — sert d'ancre de rattache et de hook de style éventuel */
  id: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute('href')!;
      if (hash.length < 2) return;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;

      e.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.pushState(null, '', hash);
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    };

    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, []);

  return (
    <div ref={ref} id={id} className={styles.page}>
      {children}
    </div>
  );
}
