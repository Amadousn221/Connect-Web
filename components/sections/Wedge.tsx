import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { wedgeIntro, wedgeLede, wedgePoints } from '@/content/fr/wedge';
import styles from './Wedge.module.css';

// Wedge / Différenciation (Lot C). Bloc éditorial 2 colonnes asymétriques sur
// fond pétrole nuit (§06.4). Chapô à gauche, 3 points en texte suivi à droite.
// Zéro carte, zéro puce, zéro icône.
export function Wedge() {
  return (
    <section id="wedge" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={wedgeIntro.eyebrow}
            title={wedgeIntro.title}
            tone="on-dark"
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.body}>
          <p className={styles.lede}>{wedgeLede}</p>

          <div className={styles.points}>
            {wedgePoints.map((point) => (
              <div key={point.title} className={styles.point}>
                <p className={styles.pointTitle}>{point.title}</p>
                <p className={styles.pointBody}>{point.body}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
