import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { showValidationNotes } from '@/lib/flags';
import { contactIntro, contactPoints, contactPerson } from '@/content/fr/accueil';
import { ContactForm } from './ContactForm';
import styles from './ContactSection.module.css';

// A12 — Section Contact de l'Accueil (ancre #contact, cible du CTA principal en
// M2 ; pointera vers /contact quand la page existera — M5/M6).
export function ContactSection() {
  const showPlaceholders = showValidationNotes();

  return (
    <section id="contact" className={styles.section}>
      <div className={`cw-sec ${styles.grid}`}>
        <RevealOnScroll>
          <SectionHeading
            eyebrow={contactIntro.eyebrow}
            title={contactIntro.title}
            lead={contactIntro.lead}
          />

          <ul className={styles.points}>
            {contactPoints.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  {...(p.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <span className={styles.pointIcon} aria-hidden="true" />
                  {p.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Réseaux sociaux : URLs réelles non fournies (journal de décisions) —
              pas de lien mort. Repère visible en preview seulement. */}
          <div className={styles.social}>
            <ValidationNote>Liens réseaux à valider</ValidationNote>
          </div>

          {/* « Votre interlocuteur » : nom + photo réels non fournis. Jamais de
              placeholder visible côté public (règle P08) — affiché en preview. */}
          {showPlaceholders ? (
            <div className={styles.person}>
              <div className={styles.personPhoto} aria-hidden="true">
                <ValidationNote>Photo</ValidationNote>
              </div>
              <div>
                <div className={styles.personRole}>
                  {contactPerson.role}
                  <ValidationNote>Nom à valider</ValidationNote>
                </div>
                <p className={styles.personBody}>{contactPerson.body}</p>
              </div>
            </div>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}
