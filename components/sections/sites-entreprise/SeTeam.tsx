import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { sitesEntrepriseTeam as data } from '@/content/fr/sitesEntreprise';
import styles from './SeTeam.module.css';

// 06 — Un site utile aussi pour votre équipe. Section fonctionnelle : colonne
// gauche = texte + autonomie ; colonne droite = administration / rôles /
// documentation / évolutivité / continuité, en lignes séparées (pas une grille
// SaaS). Distincte de la section conversion.
export function SeTeam() {
  return (
    <section className={styles.section}>
      <div className={`cw-sec ${styles.grid}`}>
        <RevealOnScroll className={styles.intro}>
          <div className={styles.eyebrowWrap}>
            <Eyebrow>{data.eyebrow}</Eyebrow>
          </div>
          <h2 className={`cw-serif ${styles.title}`}>{data.title}</h2>
          <p className={styles.lead}>{data.lead}</p>
        </RevealOnScroll>

        <RevealOnScroll>
          <dl className={styles.list}>
            {data.items.map((item) => (
              <div key={item.title} className={styles.row}>
                <dt className={`cw-serif ${styles.rowTitle}`}>{item.title}</dt>
                <dd className={styles.rowText}>{item.body}</dd>
              </div>
            ))}
          </dl>
        </RevealOnScroll>
      </div>
    </section>
  );
}
