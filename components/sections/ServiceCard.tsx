import Link from 'next/link';
import { OfferIcon } from '@/components/ui/IconSet';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { ServiceCardData, ServiceLink } from '@/content/types';
import styles from './ServiceCard.module.css';

// P25 S06 — Carte de service : icône sur-mesure (IconSet, override PO — plus
// de capture) + H3 + description + ligne de preuve nommée DANS la carte
// (DECISION 23). IA/Marketing : `capabilityNote` honnête à la place d'une
// preuve (asymétrie de preuve, aucun cas ni chiffre).
function resolveHref(link: ServiceLink, locale: Locale): string {
  return link.href.startsWith('#') ? link.href : localePath(locale, link.href);
}

export function ServiceCard({ card, locale }: { card: ServiceCardData; locale: Locale }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconBox}>
        <OfferIcon offer={card.icon} width={26} height={26} />
      </div>

      <div className={styles.body}>
        <h3 className={`cw-serif ${styles.title}`}>{card.title}</h3>
        <p className={styles.desc}>{card.description}</p>

        {card.proof ? (
          <p className={styles.proof}>
            <span className={styles.proofLabel}>Preuve</span>
            {' — '}
            {card.proof.clients.join(', ')}
            {card.proof.tools?.length ? ` · ${card.proof.tools.join(', ')}` : ''}
          </p>
        ) : card.capabilityNote ? (
          <p className={styles.capability}>{card.capabilityNote}</p>
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
