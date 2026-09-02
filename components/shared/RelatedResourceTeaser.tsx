import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/sanity/lib/image';
import { resourceTypeLabel } from '@/sanity/lib/constants';
import type { ResourceCardData } from '@/sanity/lib/types';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';

import styles from './RelatedResourceTeaser.module.css';

/**
 * Encart « ressource associée » dans un article (spec §6.2 Zone 6).
 * Le bouton pointe toujours vers la page ressource (la capture email a lieu
 * là-bas) ; seul son libellé varie selon `deliveryMode`.
 */
export function RelatedResourceTeaser({
  resources,
  locale,
}: {
  resources: ResourceCardData[];
  locale: Locale;
}) {
  if (!resources || resources.length === 0) return null;

  return (
    <div className={styles.wrap}>
      {resources.map((resource) => {
        const href = localePath(locale, `/ressources/${resource.slug}`);
        const cover = resource.coverImage?.asset
          ? urlFor(resource.coverImage).width(320).height(240).fit('crop').auto('format').url()
          : null;
        const label =
          resource.deliveryMode === 'download' ? 'Télécharger la ressource' : 'Voir la ressource';

        return (
          <Link key={resource._id} href={href} className={styles.card}>
            {cover ? (
              <Image
                src={cover}
                alt={resource.coverImage?.alt || ''}
                width={120}
                height={90}
                className={styles.img}
              />
            ) : null}
            <div className={styles.body}>
              <p className={styles.type}>{resourceTypeLabel(resource.resourceType)}</p>
              <p className={`cw-serif ${styles.title}`}>{resource.title}</p>
              <p className={styles.excerpt}>{resource.excerpt}</p>
              <span className={styles.cta}>
                {label} <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
