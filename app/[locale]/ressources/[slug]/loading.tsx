import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={`cw-sec ${styles.wrap}`} aria-busy="true" aria-label="Chargement">
      <div className={styles.header}>
        <div className={styles.col}>
          <div className={styles.line} style={{ width: '35%' }} />
          <div className={styles.title} />
          <div className={styles.line} style={{ width: '90%' }} />
          <div className={styles.line} style={{ width: '80%' }} />
        </div>
        <div className={styles.cover} />
      </div>
      <div className={styles.block} />
    </div>
  );
}
