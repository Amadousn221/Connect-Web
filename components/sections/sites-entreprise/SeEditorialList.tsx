import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import type { EditorialItem } from '@/content/fr/sitesEntreprise';
import styles from './SeEditorialList.module.css';

// Composition éditoriale 2 colonnes réutilisée par les sections « Ce qu'un site
// doit accomplir » (02) et « Présenter votre activité » (04) : titre + intro à
// gauche, liste numérotée à droite avec séparateurs fins. Pas de cartes, pas
// d'icônes.
export function SeEditorialList({
  eyebrow,
  title,
  lead,
  items,
  conclusion,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  items: EditorialItem[];
  conclusion?: string;
}) {
  return (
    <section className={styles.section}>
      <div className={`cw-sec ${styles.grid}`}>
        <RevealOnScroll className={styles.intro}>
          <div className={styles.eyebrowWrap}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h2 className={`cw-serif ${styles.title}`}>{title}</h2>
          <p className={styles.lead}>{lead}</p>
        </RevealOnScroll>

        <RevealOnScroll>
          <ol className={styles.list}>
            {items.map((item, i) => (
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
          {conclusion ? <p className={styles.conclusion}>{conclusion}</p> : null}
        </RevealOnScroll>
      </div>
    </section>
  );
}
