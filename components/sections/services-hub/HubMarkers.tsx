import { Icon } from '@/components/ui/Icon';
import { HubHead } from './_shared';
import { hubMarkers } from '@/content/fr/servicesHub';
import styles from './ServicesHub.module.css';

// S10 — Ce qui nous différencie. Trois colonnes éditoriales à filets ; un glyphe
// fonctionnel coiffe chaque marqueur (numéro conservé).
export function HubMarkers() {
  return (
    <section id="differenciation" className={styles.section} data-bg="soft">
      <div className="cw-sec">
        <HubHead
          eyebrow={hubMarkers.eyebrow}
          title={hubMarkers.title}
          lead={hubMarkers.intro}
        />

        <div className={styles.markers}>
          {hubMarkers.markers.map((m, i) => (
            <article key={m.title} className={styles.marker}>
              <span className={styles.markerNum}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>
                {m.icon ? <Icon name={m.icon} className={styles.leadIcon} /> : null}
                <span>{m.title}</span>
              </h3>
              <p>{m.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
