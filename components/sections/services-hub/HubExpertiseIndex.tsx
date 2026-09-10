import { Icon } from '@/components/ui/Icon';
import { HubHead } from './_shared';
import { hubIndex } from '@/content/fr/servicesHub';
import styles from './ServicesHub.module.css';

// S2 — Les cinq expertises en un regard. Lignes numérotées, chacune est une
// ancre vers sa section détaillée (S3→S7). Ligne de rattache Conseil ensuite.
export function HubExpertiseIndex() {
  return (
    <section id="expertises" className={styles.section}>
      <div className="cw-sec">
        <HubHead
          eyebrow={hubIndex.eyebrow}
          title={hubIndex.title}
          lead={hubIndex.intro}
        />

        <div className={styles.indexList}>
          {hubIndex.rows.map((row, i) => (
            <a key={row.anchor} href={row.anchor} className={styles.indexRow}>
              <span className={styles.indexNum}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>
                {row.icon ? <Icon name={row.icon} className={styles.leadIcon} /> : null}
                <span>{row.title}</span>
              </h3>
              <p>{row.summary}</p>
              <span className={styles.indexArrow} aria-hidden="true">
                ↘
              </span>
            </a>
          ))}
        </div>

        <p className={styles.rattach}>
          <span>{hubIndex.rattach.text}</span>
          <a href={hubIndex.rattach.link.href} className={styles.link}>
            {hubIndex.rattach.link.label}
            <span aria-hidden="true">↘</span>
          </a>
        </p>
      </div>
    </section>
  );
}
