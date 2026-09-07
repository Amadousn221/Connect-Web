import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { conceptionWebCriteria as data } from '@/content/fr/conceptionWeb';
import styles from './CwCriteria.module.css';

// 04 — Les choix qui comptent. Composition éditoriale 2 colonnes : titre +
// intro à gauche, 4 critères en lignes numérotées avec séparateurs fins à
// droite. Pas de grille de cartes à icônes.
export function CwCriteria() {
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
          <ol className={styles.list}>
            {data.items.map((item, i) => (
              <li key={item.title} className={styles.row}>
                <span className={`cw-serif ${styles.num}`} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className={`cw-serif ${styles.rowTitle}`}>{item.title}</p>
                  <p className={styles.rowText}>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={styles.outro}>{data.outro}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
