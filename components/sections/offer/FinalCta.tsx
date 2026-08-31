import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { OfferContent } from '@/content/offres';
import styles from './FinalCta.module.css';

// Section 12 — CTA final : bande pétrole nuit compacte et centrée.
export function FinalCta({
  locale,
  content,
}: {
  locale: Locale;
  content: OfferContent['finalCta'];
}) {
  const resolve = (href: string) =>
    /^https?:\/\//.test(href) ? href : localePath(locale, href);

  return (
    <section className={styles.section}>
      <RevealOnScroll className={styles.inner}>
        <div className={styles.eyebrowWrap}>
          <Eyebrow tone="on-dark">{content.eyebrow}</Eyebrow>
        </div>
        <h2 className={`cw-serif ${styles.title}`}>{content.title}</h2>
        <p className={styles.body}>{content.body}</p>
        <div className={styles.ctas}>
          <Button href={resolve(content.ctas[0].href)} variant="primary" onDark size="md">
            {content.ctas[0].label}
          </Button>
          <Button href={resolve(content.ctas[1].href)} variant="outline" onDark size="md">
            {content.ctas[1].label}
          </Button>
        </div>
        <ul className={styles.features}>
          {content.features.map((f) => (
            <li key={f}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8.5l3.2 3.2L13 5"
                  stroke="var(--orange)"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </section>
  );
}
