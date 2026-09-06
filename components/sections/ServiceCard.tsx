import Link from 'next/link';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { ServiceCardData, ServiceLink } from '@/content/types';
import { ServiceIcon } from '@/components/ui/service-icons';
import styles from './ServiceCard.module.css';

// S06 — Carte de service (Refonte Accueil, D27). Icône sur-mesure + H3 +
// description + ligne de preuve + badges technos (max 5) + micro-CTA.
// Plus de capture : la preuve montrée vit sur Réalisations. La ligne `proof`
// (clients réels ou formulation-capacité) est ce qui empêche l'icône d'être
// décorative.
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

      {card.proof ? <p className={styles.proof}>{card.proof}</p> : null}

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
