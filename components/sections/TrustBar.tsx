import { trustItems } from '@/content/fr/accueil';
import styles from './TrustBar.module.css';

// A2 — Bande de réassurance (4 colonnes, icône + titre + texte, séparées de
// filets). Icônes : cercle orange à 10% + glyphe. Version M2 : un jeu d'icônes
// SVG génériques cohérentes ; affinage visuel possible en M6.
const ICONS = [
  // accompagnement
  <path
    key="a"
    d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 11a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM20 8v6M23 11h-6"
    stroke="var(--orange)"
    strokeWidth="1.6"
    strokeLinecap="round"
  />,
  // ownership
  <path
    key="b"
    d="M4 10h16v11H4zM8 10V7a4 4 0 0 1 8 0v3"
    stroke="var(--orange)"
    strokeWidth="1.6"
    strokeLinecap="round"
  />,
  // local + international
  <path
    key="c"
    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3c2.4 2.6 3.5 5.8 3.5 9s-1.1 6.4-3.5 9c-2.4-2.6-3.5-5.8-3.5-9s1.1-6.4 3.5-9z"
    stroke="var(--orange)"
    strokeWidth="1.6"
  />,
  // cadrage
  <path
    key="d"
    d="M4 5h16M4 12h10M4 19h6M18 20.4a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z"
    stroke="var(--orange)"
    strokeWidth="1.6"
    strokeLinecap="round"
  />,
];

export function TrustBar() {
  return (
    <section className={styles.section}>
      <div className={`cw-sec ${styles.grid}`}>
        {trustItems.map((item, i) => (
          <div key={item.title} className={styles.cell}>
            <span className={styles.icon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                {ICONS[i]}
              </svg>
            </span>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.body}>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
