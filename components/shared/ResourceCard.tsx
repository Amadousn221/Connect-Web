import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/sanity/lib/image';
import { resourceTypeLabel } from '@/sanity/lib/constants';
import type { ResourceCardData } from '@/sanity/lib/types';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';

import styles from './ResourceCard.module.css';

/**
 * Carte de ressource — catalogue Ressources + sidebar (spec §6.3).
 * Format couverture 4:3, badge type en surimpression, bouton « Voir la
 * ressource » — JAMAIS de téléchargement direct depuis la carte.
 */
export function ResourceCard({ resource, locale }: { resource: ResourceCardData; locale: Locale }) {
  const href = localePath(locale, `/ressources/${resource.slug}`);
  const cover = resource.coverImage?.asset
    ? urlFor(resource.coverImage).width(640).height(480).fit('crop').auto('format').quality(75).url()
    : null;

  return (
    <article className={styles.card}>
      <Link href={href} className={styles.link}>
        <div className={styles.media}>
          {cover ? (
            <Image
              src={cover}
              alt={resource.coverImage?.alt || ''}
              fill
              sizes="(max-width: 640px) 88vw, (max-width: 1023px) 46vw, 30vw"
              className={styles.img}
            />
          ) : (
            <span className={styles.mediaFallback} aria-hidden="true" />
          )}
          <span className={styles.badge}>{resourceTypeLabel(resource.resourceType)}</span>
        </div>

        <div className={styles.body}>
          <h3 className={`cw-serif ${styles.title}`}>{resource.title}</h3>
          <p className={styles.excerpt}>{resource.excerpt}</p>
          {resource.pagesOrDuration ? (
            <p className={styles.detail}>{resource.pagesOrDuration}</p>
          ) : null}
          <span className={styles.cta}>
            Voir la ressource <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
