import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className={`cw-sec ${styles.wrap}`} aria-busy="true" aria-label="Chargement">
      <div className={styles.line} style={{ width: '40%' }} />
      <div className={styles.title} />
      <div className={styles.line} style={{ width: '70%' }} />
      <div className={styles.cover} />
      <div className={styles.line} style={{ width: '100%' }} />
      <div className={styles.line} style={{ width: '95%' }} />
      <div className={styles.line} style={{ width: '88%' }} />
    </div>
  );
}
