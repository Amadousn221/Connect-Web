import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { sitesEntrepriseConversion as data } from '@/content/fr/sitesEntreprise';
import styles from './SeConversion.module.css';

// 05 — Transformer l'intérêt en prise de contact. Fond crème. 4 scénarios de
// conversion en bande étagée (pas une grille de cartes) + un principe qui
// rappelle qu'on ne multiplie pas les points de contact.
export function SeConversion() {
  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            lead={data.lead}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <ol className={styles.steps}>
            {data.items.map((item, i) => (
              <li key={item.title} className={styles.step}>
                <span className={`cw-serif ${styles.num}`} aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className={`cw-serif ${styles.stepTitle}`}>{item.title}</p>
                <p className={styles.stepBody}>{item.body}</p>
              </li>
            ))}
          </ol>
          <p className={styles.principle}>{data.principle}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
