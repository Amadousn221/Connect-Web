import Image from 'next/image';
import Link from 'next/link';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { ServiceCardData, ServiceLink } from '@/content/types';
import styles from './ServiceCard.module.css';

// A5 — Carte de service (Lot B). Une carte, 4 variantes (parent / primary /
// secondary / conseil) pilotées par `data-variant`. Aucune icône décorative
// (§08.4). Les liens `todo` sont rendus non cliquables — la liste des pages à
// créer est signalée une seule fois au niveau de la section (ServiceGrid).
function resolveHref(link: ServiceLink, locale: Locale): string {
  return link.href.startsWith('#') ? link.href : localePath(locale, link.href);
}

function SubTag({ link, locale }: { link: ServiceLink; locale: Locale }) {
  if (link.todo) {
    return (
      <span className={styles.tag} data-todo="true">
        {link.label}
      </span>
    );
  }
  return (
    <Link href={resolveHref(link, locale)} className={styles.tag}>
      {link.label}
    </Link>
  );
}

function CardCta({ link, locale }: { link: ServiceLink; locale: Locale }) {
  if (link.todo) {
    return (
      <span className={styles.cta} data-todo="true">
        {link.label} <span aria-hidden="true">→</span>
      </span>
    );
  }
  return (
    <Link href={resolveHref(link, locale)} className={styles.cta}>
      {link.label} <span aria-hidden="true">→</span>
    </Link>
  );
}

export function ServiceCard({
  card,
  locale,
}: {
  card: ServiceCardData;
  locale: Locale;
}) {
  return (
    <article className={styles.card} data-variant={card.variant}>
      {card.num ? <span className={styles.num}>{card.num}</span> : null}

      <h3 className={`cw-serif ${styles.title}`}>{card.title}</h3>
      <p className={styles.desc}>{card.description}</p>

      {card.subServices && card.subServices.length > 0 ? (
        <ul className={styles.tags}>
          {card.subServices.map((s) => (
            <li key={s.label}>
              <SubTag link={s} locale={locale} />
            </li>
          ))}
        </ul>
      ) : null}

      {card.proof ? <p className={styles.proof}>{card.proof}</p> : null}

      {card.image ? (
        <div className={styles.media}>
          <Image
            src={card.image.src}
            alt={card.image.alt}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1023px) 46vw, 40vw"
            className={styles.img}
          />
        </div>
      ) : null}

      {card.tech ? <p className={styles.tech}>{card.tech}</p> : null}

      <CardCta link={card.cta} locale={locale} />
    </article>
  );
}
