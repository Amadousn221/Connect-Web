import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={`cw-sec ${styles.wrap}`} aria-busy="true" aria-label="Chargement">
      <div className={styles.hero} />
      <div className={styles.grid}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.card} />
        ))}
      </div>
    </div>
  );
}
