'use client';

import { useEffect, useRef } from 'react';
import styles from './ServicesHub.module.css';

// Défilement doux vers les ancres in-page du hub, avec offset du header réel
// et respect de `prefers-reduced-motion` (défilement immédiat). L'historique
// natif est mis à jour pour garder le lien partageable et le retour arrière.
//
// Fallback : sans JS, les `<a href="#x">` fonctionnent nativement (le
// `scroll-margin-top` des sections gère l'offset).
export function AnchorScroll({ children }: { children: React.ReactNode }) {
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
      // Cible focusable pour les lecteurs d'écran / clavier, sans halo persistant.
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    };

    el.addEventListener('click', onClick);
    return () => el.removeEventListener('click', onClick);
  }, []);

  return (
    <div ref={ref} id="services-hub" className={styles.hub}>
      {children}
    </div>
  );
}
