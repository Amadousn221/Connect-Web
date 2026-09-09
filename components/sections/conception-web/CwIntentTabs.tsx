'use client';

import { useId, useRef, useState } from 'react';
import styles from './ConceptionWeb.module.css';

type Intent = { label: string; text: string };

// S2 — sélecteur d'intentions. Motif ARIA « tabs » : tous les panneaux restent
// dans le DOM (contrat UX : « ne pas reprendre uniquement le premier état
// visible »), navigation clavier ← → Home Fin, activation au focus.
// Sans hydratation, le SSR n'affiche que le 1ᵉʳ panneau (les autres `hidden`) :
// le parent fournit la liste complète en repli via <noscript>.
export function CwIntentTabs({ intents }: { intents: Intent[] }) {
  const [active, setActive] = useState(0);
  const base = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (i: number) => {
    const next = (i + intents.length) % intents.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        focusTab(active + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        focusTab(active - 1);
        break;
      case 'Home':
        e.preventDefault();
        focusTab(0);
        break;
      case 'End':
        e.preventDefault();
        focusTab(intents.length - 1);
        break;
    }
  };

  return (
    <div className={styles.intentLayout}>
      <div
        role="tablist"
        aria-label="Intentions possibles d'un site"
        aria-orientation="vertical"
        className={styles.intentNav}
        onKeyDown={onKeyDown}
      >
        {intents.map((intent, i) => (
          <button
            key={intent.label}
            id={`${base}-tab-${i}`}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`${base}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            className={styles.intentTab}
            onClick={() => setActive(i)}
          >
            <span aria-hidden="true" className={styles.intentNum}>
              0{i + 1}
            </span>
            <span>{intent.label}</span>
          </button>
        ))}
      </div>

      {intents.map((intent, i) => (
        <div
          key={intent.label}
          id={`${base}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${base}-tab-${i}`}
          hidden={i !== active}
          tabIndex={0}
          className={styles.intentPanel}
        >
          <span className={styles.intentPanelEyebrow}>Intention active</span>
          <h3 className={`cw-serif ${styles.intentPanelTitle}`}>{intent.label}</h3>
          <p>{intent.text}</p>
        </div>
      ))}
    </div>
  );
}
