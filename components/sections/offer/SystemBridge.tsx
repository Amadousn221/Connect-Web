import Link from 'next/link';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { OfferContent } from '@/content/offres';
import styles from './SystemBridge.module.css';

// Section 11 — Pont système : bande compacte centrée qui renvoie vers « Le
// système » (montée B→A).
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
            {content.link.label}
          </Link>
        ) : null}
      </RevealOnScroll>
    </section>
  );
}
