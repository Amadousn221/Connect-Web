import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import type { BigStatContent } from '@/content/offres';
import styles from './BigStat.module.css';

// P-STAT (P26 §12) — grand chiffre isolé, pour ancrer un bénéfice. Valeur
// réelle uniquement (jamais un chiffre inventé) : si `value` n'est pas
// confirmée, ne pas monter ce composant plutôt que d'afficher un
// placeholder chiffré. Aucun compteur animé (cohérent avec StatsBlock,
// Accueil) — statique.
export function BigStat({ value, label, caption }: BigStatContent) {
  return (
    <section className={styles.section}>
      <RevealOnScroll className={`cw-sec ${styles.inner}`}>
        <p className={`cw-serif ${styles.value}`}>{value}</p>
        <p className={styles.label}>{label}</p>
        {caption ? <p className={styles.caption}>{caption}</p> : null}
      </RevealOnScroll>
    </section>
  );
}
