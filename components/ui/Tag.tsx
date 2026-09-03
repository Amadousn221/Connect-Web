import styles from './Tag.module.css';

// Étiquette info (« ce qu'on livre », techno, etc.) — fond bg-alt, bordure
// fine. P25 : variante `pill` (rayon `--radius-pill`) — seul usage autorisé
// du plein rayon, réservé aux badges (brief P25 §01 « Radius »).
export function Tag({
  children,
  pill = false,
}: {
  children: React.ReactNode;
  pill?: boolean;
}) {
  return (
    <span className={pill ? `${styles.tag} ${styles.pill}` : styles.tag}>
      {children}
    </span>
  );
}
