import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { proofIntro, proofItems } from '@/content/fr/accueil';
import styles from './ProofGrid.module.css';

// A9 — Preuve (4 items, filets verticaux). Deux items portent un « À valider »
// (source à confirmer). Aucun chiffre décoratif : rien d'inventé.
export function ProofGrid() {
  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={proofIntro.eyebrow}
            title={proofIntro.title}
            lead={proofIntro.lead}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {proofItems.map((item) => (
            <div key={item.title} className={styles.cell}>
              <p className={`cw-serif ${styles.title}`}>{item.title}</p>
              <p className={styles.body}>{item.body}</p>
              {item.toValidate ? (
                <span className={styles.note}>
                  <ValidationNote>À valider</ValidationNote>
                </span>
              ) : null}
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
