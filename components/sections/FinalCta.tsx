import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { showValidationNotes } from '@/lib/flags';
import { contactIntro, contactChannels } from '@/content/fr/contact';
import { TrustLine } from './TrustLine';
import { ProjectForm } from './ProjectForm';
import styles from './FinalCta.module.css';

// A12 — CTA final + contact (Lot D2, §06.11). id="contact" (cible du CTA
// principal, du Hero, de la FAQ). Formulaire à gauche, accès directs à droite.
export function FinalCta() {
  const preview = showValidationNotes();

  return (
    <section id="contact" className={styles.section}>
      <div className={`cw-sec ${styles.grid}`}>
        <div className={styles.left}>
          <RevealOnScroll>
            <SectionHeading
              eyebrow={contactIntro.eyebrow}
              title={contactIntro.title}
            />
            <TrustLine items={contactIntro.trustLine} className={styles.trust} />
            <p className={styles.body}>{contactIntro.body}</p>
          </RevealOnScroll>

          <RevealOnScroll>
            <ProjectForm />
          </RevealOnScroll>
        </div>

        <aside className={styles.right}>
          <p className={styles.reachLabel}>Ou joignez-nous directement</p>
          <ul className={styles.channels}>
            {contactChannels.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href}>{phone.label}</a>
              </li>
            ))}
            <li>
              <a
                href={contactChannels.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactChannels.whatsapp.label}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactChannels.email}`}>
                {contactChannels.email}
              </a>
              {preview ? (
                <span className={styles.note}>
                  <ValidationNote>email à confirmer PO</ValidationNote>
                </span>
              ) : null}
            </li>
          </ul>
          <p className={styles.office}>Bureau — {contactChannels.office}</p>
        </aside>
      </div>
    </section>
  );
}
