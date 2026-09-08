import { HubHead } from './_shared';
import { hubMethod } from '@/content/fr/servicesHub';
import styles from './ServicesHub.module.css';

// S12 — Notre approche en quatre temps. Roadmap horizontale sur grand écran,
// timeline verticale en mobile. Même famille visuelle que la méthode de
// l'accueil, sans la dupliquer.
export function HubMethod() {
  return (
    <section id="methode" className={styles.section} data-bg="soft">
      <div className="cw-sec">
        <HubHead
          eyebrow={hubMethod.eyebrow}
          title={hubMethod.title}
          lead={hubMethod.intro}
        />

        <ol className={styles.roadmap}>
          {hubMethod.steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.stepNum}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
