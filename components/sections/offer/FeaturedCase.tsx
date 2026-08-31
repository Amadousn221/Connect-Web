import Image from 'next/image';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { FeaturedCaseContent } from '@/content/offres';
import styles from './FeaturedCase.module.css';

// Section 06a — « Cas plein » : bloc pétrole nuit, visuel (placeholder « à
// valider » tant que le vrai n'est pas fourni) + texte + citation + CTA.
export function FeaturedCase({
  locale,
  content,
}: {
  locale: Locale;
  content: FeaturedCaseContent;
}) {
  const primaryHref = content.primaryCta
    ? /^https?:\/\//.test(content.primaryCta.href)
      ? content.primaryCta.href
      : localePath(locale, content.primaryCta.href)
    : null;

  return (
    <section id="cas" className={styles.section}>
      <div className={`cw-sec ${styles.wrap}`}>
        <RevealOnScroll>
          <div className={styles.eyebrowWrap}>
            <Eyebrow>{content.eyebrow}</Eyebrow>
          </div>
          <div className={styles.grid}>
            {content.image ? (
              <div className={styles.visualImg}>
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  fill
                  sizes="(max-width: 860px) 100vw, 55vw"
                  className={styles.img}
                />
              </div>
            ) : (
              <div className={styles.visual}>
                {content.visualPending ? (
                  <>
                    <ValidationNote>À valider</ValidationNote>
                    <span>{content.visualNote ?? 'Visuel à fournir'}</span>
                  </>
                ) : null}
              </div>
            )}
            <div className={styles.text}>
              <p className={`cw-serif ${styles.name}`}>{content.name}</p>
              <p className={styles.category}>{content.category}</p>
              <p className={styles.body}>{content.body}</p>
              <blockquote className={styles.quote}>{content.quote}</blockquote>
              <div className={styles.ctas}>
                {content.primaryCta && primaryHref ? (
                  <Button href={primaryHref} variant="primary" onDark size="md">
                    {content.primaryCta.label}
                  </Button>
                ) : null}
                {content.externalUrl ? (
                  <a
                    href={content.externalUrl.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.extern}
                  >
                    {content.externalUrl.label}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
