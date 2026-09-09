'use client';

import { useState } from 'react';
import styles from './AudienceSelector.module.css';

type Public = { label: string; seeks: string[] };

// S3 — sélecteur de publics. Groupe de boutons `aria-pressed` : un seul panneau
// visible à la fois, mais tous les contenus restent dans le DOM (repli
// <noscript> fourni par le parent). Sans hydratation, le SSR montre le 1ᵉʳ
// public ; la navigation clavier native (Tab entre boutons) reste utilisable.
export function AudienceSelector({
  label,
  panelEyebrow,
  publics,
}: {
  label: string;
  panelEyebrow: string;
  publics: Public[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.wrap}>
      <div className={styles.choices} role="group" aria-label={label}>
        {publics.map((p, i) => (
          <button
            key={p.label}
            type="button"
            aria-pressed={i === active}
            className={styles.choice}
            onClick={() => setActive(i)}
          >
            {p.label}
          </button>
        ))}
      </div>

      {publics.map((p, i) => (
        <div key={p.label} className={styles.panel} hidden={i !== active} aria-live="polite">
          <span className={styles.panelEyebrow}>{panelEyebrow}</span>
          <h3 className={`cw-serif ${styles.panelTitle}`}>{p.label}</h3>
          <ul className={styles.panelList}>
            {p.seeks.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
