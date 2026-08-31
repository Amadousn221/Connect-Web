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

// A5 — Section Services. Grille uniforme 6 cartes en 3 colonnes (2 rangées).
// Le contenu DECISION 23 est conservé (carte parente à sous-services, Conseil),
// mais toutes les cartes sont de taille égale.
export function ServiceGrid({ locale }: { locale: Locale }) {
  const cards = [...servicesN1, ...servicesN2, serviceConseil];
  const todoRoutes = cards
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

        <RevealOnScroll className={styles.grid}>
          {cards.map((card) => (
            <ServiceCard key={card.title} card={card} locale={locale} />
          ))}
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
