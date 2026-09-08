import { HubHead } from './_shared';
import { hubMarkers } from '@/content/fr/servicesHub';
import styles from './ServicesHub.module.css';

// S10 — Ce qui nous différencie. Trois colonnes éditoriales à filets, sobres :
// le texte porte la valeur, pas d'icône décorative.
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
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
