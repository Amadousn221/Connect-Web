import Link from 'next/link';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { ServiceCardData, ServiceLink } from '@/content/types';
import { ServiceIcon } from '@/components/ui/service-icons';
import styles from './ServiceCard.module.css';

// S06 — Carte de service (Refonte Accueil, D27 · Lot 2). Icône sur-mesure + H3 +
// description justifiée + badges technos (max 5) + micro-CTA. La ligne de preuve
// est retirée (Lot 2) : la preuve vit dans Réalisations et la bande de logos.
function resolveHref(link: ServiceLink, locale: Locale): string {
  return link.href.startsWith('#') ? link.href : localePath(locale, link.href);
}

export function ServiceCard({
  card,
  locale,
}: {
  card: ServiceCardData;
  locale: Locale;
}) {
  return (
    <article className={styles.card} data-variant={card.variant ?? 'default'}>
      <span className={styles.icon}>
        <ServiceIcon name={card.icon} />
      </span>

      <h3 className={`cw-serif ${styles.title}`}>{card.title}</h3>
      <p className={styles.desc}>{card.description}</p>

      {card.badges.length > 0 ? (
        <ul className={styles.badges}>
          {card.badges.slice(0, 5).map((badge) => (
            <li key={badge} className={styles.badge}>
              {badge}
            </li>
          ))}
        </ul>
      ) : null}

      {card.cta.todo ? (
        <span className={styles.cta} data-todo="true">
          {card.cta.label} <span aria-hidden="true">→</span>
        </span>
      ) : (
        <Link href={resolveHref(card.cta, locale)} className={styles.cta}>
          {card.cta.label} <span aria-hidden="true">→</span>
        </Link>
      )}
    </article>
  );
}
