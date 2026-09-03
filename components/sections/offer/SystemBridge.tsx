import Link from 'next/link';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { OfferIcon } from '@/components/ui/IconSet';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { OfferContent } from '@/content/offres';
import styles from './SystemBridge.module.css';

// P-CROSSSELL — bande écosystème fine, pas une section pleine (P26 §12).
// Déjà conforme à la spec telle quelle (Section 11 — Pont système, pont
// compact centré vers « Le système ») ; léger habillage Phase 1 : icône
// d'offre optionnelle + flèche sur le lien.
export function SystemBridge({
  locale,
  content,
}: {
  locale: Locale;
  content: NonNullable<OfferContent['systemBridge']>;
}) {
  return (
    <section className={styles.section}>
      <RevealOnScroll className={styles.inner}>
        {content.icon ? (
          <div className={styles.iconBox}>
            <OfferIcon offer={content.icon} width={22} height={22} />
          </div>
        ) : null}
        <div className={styles.eyebrowWrap}>
          <Eyebrow>{content.eyebrow}</Eyebrow>
        </div>
        <h2 className={`cw-serif ${styles.title}`}>{content.title}</h2>
        <p className={styles.body}>{content.body}</p>
        {content.link ? (
          <Link
            href={localePath(locale, content.link.href)}
            className={styles.link}
          >
            {content.link.label} <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </RevealOnScroll>
    </section>
  );
}
