'use client';

import { useId, useRef, useState } from 'react';
import { SpProse } from './parts';
import styles from './service-page.module.css';

export type TabItem = { label: string; body: string[] };

// Sélecteur générique : motif ARIA « tabs », navigation clavier ← → Home Fin,
// tous les panneaux dans le DOM. Sans hydratation, le SSR montre le 1ᵉʳ panneau
// (les autres `hidden`) ; fournir un repli <noscript> côté parent.
export function TabbedPanels({
  ariaLabel,
  panelEyebrow,
  items,
}: {
  ariaLabel: string;
  panelEyebrow?: string;
  items: TabItem[];
}) {
  const [active, setActive] = useState(0);
  const base = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (i: number) => {
    const n = (i + items.length) % items.length;
    setActive(n);
    tabRefs.current[n]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      focusTab(active + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      focusTab(active - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusTab(items.length - 1);
    }
  };

  return (
    <div className={styles.tabbed}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        aria-orientation="vertical"
        className={styles.tabList}
        onKeyDown={onKeyDown}
      >
        {items.map((it, i) => (
          <button
            key={it.label}
            id={`${base}-tab-${i}`}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`${base}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(i)}
          >
            {it.label}
          </button>
        ))}
      </div>

      {items.map((it, i) => (
        <div
          key={it.label}
          id={`${base}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${base}-tab-${i}`}
          hidden={i !== active}
          tabIndex={0}
          className={styles.tabPanel}
        >
          {panelEyebrow ? <span className={styles.tabPanelEyebrow}>{panelEyebrow}</span> : null}
          <h3 className={`cw-serif ${styles.tabPanelTitle}`}>{it.label}</h3>
          <SpProse blocks={it.body} />
        </div>
      ))}
    </div>
  );
}
