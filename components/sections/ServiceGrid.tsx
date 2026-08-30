import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ValidationNote } from '@/components/ui/ValidationNote';
import type { Locale } from '@/lib/i18n/config';
import {
  servicesIntro,
  servicesN1,
  servicesN2,
  serviceConseil,
} from '@/content/fr/services';
import { ServiceCard } from './ServiceCard';
import styles from './ServiceGrid.module.css';

// A5 — Section Services (Lot B). Hiérarchie DECISION 23 : carte parente + carte
// Niveau 1 (rangée 3fr/2fr), 3 cartes Niveau 2, puis Conseil pleine largeur.
export function ServiceGrid({ locale }: { locale: Locale }) {
  const todoRoutes = [...servicesN1, ...servicesN2, serviceConseil]
    .flatMap((c) => [...(c.subServices ?? []), c.cta])
    .filter((l) => l.todo)
    .map((l) => l.href);
  const uniqueTodo = Array.from(new Set(todoRoutes));

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

        <RevealOnScroll className={styles.groups}>
          <div className={styles.n1}>
            {servicesN1.map((card) => (
              <ServiceCard key={card.title} card={card} locale={locale} />
            ))}
          </div>
          <div className={styles.n2}>
            {servicesN2.map((card) => (
              <ServiceCard key={card.title} card={card} locale={locale} />
            ))}
          </div>
          <ServiceCard card={serviceConseil} locale={locale} />
        </RevealOnScroll>

        {uniqueTodo.length ? (
          <div className={styles.note}>
            <ValidationNote variant="box">
              Pages à créer avant publication (liens non cliquables pour l’instant) :{' '}
              {uniqueTodo.join(' · ')}
            </ValidationNote>
          </div>
        ) : null}
      </div>
    </section>
  );
}
