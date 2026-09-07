import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { showValidationNotes } from '@/lib/flags';
import {
  contactIntro,
  contactPoints,
  contactPerson,
  hero,
} from '@/content/fr/accueil';
import { ContactForm } from './ContactForm';
import { TrustLine } from './TrustLine';
import styles from './ContactSection.module.css';

// S12 — CTA final + formulaire (Refonte Accueil, D33). Apogée de conversion sur
// fond BLEU PROFOND (3e et dernière ponctuation). Message à gauche, formulaire
// (carte claire) à droite en desktop ; pile en mobile. Ancre #contact.
// Icônes : SVG inline (convention du projet — pas de librairie d'icônes).
const PhoneIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.56 3.5a1 1 0 0 1-.24 1L6.6 10.8Z"
      stroke="var(--orange)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const WhatsAppIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z"
      stroke="var(--orange)"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M9 8.5c0 4 2.5 6.5 6.5 6.5.6 0 1-.5 1-1l-.2-1.2-1.9-.6-1 1a5.4 5.4 0 0 1-2.4-2.4l1-1L10.2 8 9 7.8c-.5 0-1 .4-1 .7Z"
      fill="var(--orange)"
    />
  </svg>
);
const MailIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
      stroke="var(--orange)"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="m3.5 7 8.5 6 8.5-6" stroke="var(--orange)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PinIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z"
      stroke="var(--orange)"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.3" stroke="var(--orange)" strokeWidth="1.6" />
  </svg>
);

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
            tone="on-dark"
          />

          <TrustLine
            items={hero.trustLine}
            tone="on-dark"
            className={styles.trust}
          />

          <ul className={styles.points}>
            {contactPoints.map((p) => {
              const icon = p.href.includes('wa.me')
                ? WhatsAppIcon
                : p.href.startsWith('mailto:')
                  ? MailIcon
                  : p.href
                    ? PhoneIcon
                    : PinIcon;
              return (
                <li key={p.label}>
                  {p.href ? (
                    <a
                      href={p.href}
                      {...(p.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      <span className={styles.pointIcon} aria-hidden="true">
                        {icon}
                      </span>
                      {p.label}
                    </a>
                  ) : (
                    <span className={styles.pointStatic}>
                      <span className={styles.pointIcon} aria-hidden="true">
                        {icon}
                      </span>
                      {p.label}
                    </span>
                  )}
                </li>
              );
            })}
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
