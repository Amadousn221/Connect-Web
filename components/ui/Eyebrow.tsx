import styles from './Eyebrow.module.css';

// Eyebrow à puce colorée — Design Foundations §03, présent sur chaque section
// des maquettes (puce orange 7px + label 12px uppercase, letter-spacing .16em).
export function Eyebrow({
  children,
  tone = 'default',
}: {
  children: React.ReactNode;
  /** `on-dark` : sur surface pétrole nuit. */
  tone?: 'default' | 'on-dark';
}) {
  return (
    <span className={styles.eyebrow} data-tone={tone}>
      <span aria-hidden="true" className={styles.dot} />
      {children}
    </span>
  );
}
