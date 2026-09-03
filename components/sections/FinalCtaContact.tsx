import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { contactIntro, hero } from '@/content/fr/accueil';
import { TrustLine } from './TrustLine';
import { ContactForm } from './ContactForm';
import styles from './FinalCtaContact.module.css';

// P25 S12 — CTA final. 3e et dernière ponctuation ink de la page. 2 colonnes
// desktop (message + TrustLine | formulaire), pile mobile (message d'abord).
// Réutilise ContactForm.tsx tel quel (états idle/loading/succès/erreur déjà
// gérés) — sa propre carte claire (`--card`) reste lisible sur fond ink, même
// motif que PricingBlock/FinalCta (pages offre). ContactSection.tsx n'est PAS
// touché (partagé avec les 8 pages d'offre via OfferPage.tsx).
export function FinalCtaContact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`cw-sec ${styles.grid}`}>
        <RevealOnScroll className={styles.copy}>
          <SectionHeading
            eyebrow={contactIntro.eyebrow}
            title={contactIntro.title}
            lead={contactIntro.lead}
            tone="on-dark"
          />
          <TrustLine items={hero.trustLine} tone="on-dark" className={styles.trust} />
        </RevealOnScroll>

        <RevealOnScroll>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}
