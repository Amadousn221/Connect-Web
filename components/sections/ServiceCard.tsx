import Image from 'next/image';
import Link from 'next/link';
import { showValidationNotes } from '@/lib/flags';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { ServiceCardData, ServiceLink } from '@/content/types';
import styles from './ServiceCard.module.css';

// A5 — Carte de service : image en tête + H3 + description + badges (max 5) +
// micro-CTA. Les badges portent les technos/déclinaisons (preuve dans la carte,
// jamais en carte autonome — DECISION 23). Zéro icône décorative.
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
  const preview = showValidationNotes();
  const showMedia = card.variant !== 'conseil';

  return (
    <article className={styles.card} data-variant={card.variant ?? 'default'}>
      {showMedia ? (
        <div className={styles.media}>
          {card.image ? (
            <Image
              src={card.image.src}
              alt={card.image.alt}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1023px) 46vw, 33vw"
              className={styles.img}
            />
          ) : preview && card.imageMissing ? (
            <span className={styles.missing}>
              <span className={styles.missingTag}>Image à fournir</span>
              <span className={styles.missingLabel}>{card.imageMissing}</span>
            </span>
          ) : null}
        </div>
      ) : null}

      <div className={styles.body}>
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
      </div>
    </article>
  );
}
