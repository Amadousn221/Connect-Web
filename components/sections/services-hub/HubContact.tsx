import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ContactForm } from '@/components/sections/ContactForm';
import { contactInfo } from '@/components/layout/site-nav';
import { hubContact } from '@/content/fr/servicesHub';
import styles from './HubContact.module.css';

// S14 — Parlons de votre projet. Composition V6 : coordonnées à gauche,
// formulaire existant (carte claire) à droite, sur fond crème, avant le footer
// global. Le formulaire, ses champs et son backend Resend/HubSpot sont ceux du
// site — seule la présentation est claire (tone="on-light").
export function HubContact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`cw-sec ${styles.grid}`}>
        <RevealOnScroll>
          <SectionHeading
            eyebrow={hubContact.eyebrow}
            title={hubContact.title}
            lead={hubContact.lead}
          />

          <address className={styles.coords}>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <span>Rond-point SCAT-URBAM, G49</span>
            <span>{contactInfo.city}</span>
            {contactInfo.phones.map((p) => (
              <a key={p.href} href={p.href}>
                {p.label}
              </a>
            ))}
            <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </address>
        </RevealOnScroll>

        <RevealOnScroll>
          <ContactForm tone="on-light" />
          <p className={styles.fallback}>
            Si le formulaire ne s’envoie pas, écrivez-nous directement à{' '}
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> — nous
            vous répondrons dans la journée.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
