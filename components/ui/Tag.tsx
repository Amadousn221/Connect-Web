import styles from './Tag.module.css';

// Étiquette info (« ce qu'on livre », techno, etc.) — maquettes : fond bg-alt,
// bordure fine, angles vifs.
export function Tag({ children }: { children: React.ReactNode }) {
  return <span className={styles.tag}>{children}</span>;
}
