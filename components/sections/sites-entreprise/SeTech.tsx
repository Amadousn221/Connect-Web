import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { sitesEntrepriseTech as data } from '@/content/fr/sitesEntreprise';
import styles from './SeTech.module.css';

// 07 — Choisir la bonne base technique. Bloc contrasté (pétrole). Critères de
// choix + technologies en TAGS de preuve. Aucune carte « WordPress » /
// « Webflow » / « Next.js » — la techno reste un moyen, jamais une offre.
export function SeTech() {
  return (
    <section className={styles.section}>
      <div className={`cw-sec ${styles.grid}`}>
        <RevealOnScroll className={styles.intro}>
          <div className={styles.eyebrowWrap}>
            <Eyebrow tone="on-dark">{data.eyebrow}</Eyebrow>
          </div>
          <h2 className={`cw-serif ${styles.title}`}>{data.title}</h2>
          <p className={styles.lead}>{data.lead}</p>
        </RevealOnScroll>

        <RevealOnScroll className={styles.body}>
          <p className={styles.criteriaLabel}>{data.criteriaLabel}</p>
          <ul className={styles.criteria}>
            {data.criteria.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <p className={styles.tagsLabel}>{data.tagsLabel}</p>
          <ul className={styles.tags}>
            {data.tags.map((t) => (
              <li key={t} className={styles.tag}>
                {t}
              </li>
            ))}
          </ul>

          <p className={styles.note}>{data.note}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
