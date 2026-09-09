'use client';

import { useEffect, useRef } from 'react';
import styles from './ConceptionWeb.module.css';

// Défilement doux vers les ancres in-page (#contact), offset du header réel,
// respect de `prefers-reduced-motion`. Sans JS, les `<a href="#x">` marchent
// nativement grâce au `scroll-margin-top` des sections. Porte aussi l'échelle
// typo mobile de la page (`.page`), comme `.hub` sur le hub Services.
export function CwScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href')!.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.pushState(null, '', `#${id}`);
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    };

    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, []);

  return (
    <div ref={ref} id="conception-web" className={styles.page}>
      {children}
    </div>
  );
}
