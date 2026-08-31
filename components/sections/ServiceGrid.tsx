import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ValidationNote } from '@/components/ui/ValidationNote';
import type { Locale } from '@/lib/i18n/config';
import { servicesIntro, serviceCards } from '@/content/fr/services';
import { ServiceCard } from './ServiceCard';
import styles from './ServiceGrid.module.css';

// A5 — Section Services. Grille uniforme 6 cartes en 3 colonnes (2 rangées),
// format « image en tête + badges ».
export function ServiceGrid({ locale }: { locale: Locale }) {
  const todoRoutes = Array.from(
    new Set(serviceCards.filter((c) => c.cta.todo).map((c) => c.cta.href)),
  );

  return (
    <section id="services" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={servicesIntro.eyebrow}
            title={servicesIntro.title}
            lead={servicesIntro.lead}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {serviceCards.map((card) => (
            <ServiceCard key={card.title} card={card} locale={locale} />
          ))}
        </RevealOnScroll>

        {todoRoutes.length > 0 ? (
          <div className={styles.note}>
            <ValidationNote variant="box">
              Pages à créer avant publication (liens non cliquables pour
              l’instant) : {todoRoutes.join(' · ')}
            </ValidationNote>
          </div>
        ) : null}
      </div>
    </section>
  );
}
