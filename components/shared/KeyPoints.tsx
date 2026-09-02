import styles from './KeyPoints.module.css';

/** Encadré « En bref » en haut d'article (spec §6.2 Zone 4 — `keyPoints`). */
export function KeyPoints({ points }: { points?: string[] }) {
  if (!points || points.length === 0) return null;

  return (
    <aside className={styles.box} aria-label="En bref">
      <p className={styles.label}>En bref</p>
      <ul className={styles.list}>
        {points.map((point, i) => (
          <li key={i} className={styles.item}>
            {point}
          </li>
        ))}
      </ul>
    </aside>
  );
}
