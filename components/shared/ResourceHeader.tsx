import Image from 'next/image';

import { urlFor } from '@/sanity/lib/image';
import { resourceTypeLabel } from '@/sanity/lib/constants';
import type { ResourceFull } from '@/sanity/lib/types';

import { ShareButton } from './ShareButton';
import styles from './ResourceHeader.module.css';

const DATE_FMT = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

/** En-tête de page ressource — 2 colonnes desktop (spec §6.4 Zone 3). */
export function ResourceHeader({ resource }: { resource: ResourceFull }) {
  const cover = resource.coverImage?.asset
    ? urlFor(resource.coverImage).width(720).height(960).fit('crop').auto('format').quality(82).url()
    : null;

  // Le compteur n'est affiché qu'au-delà de 50 pour ne pas montrer « 3 » (spec §6.4).
  const showCount = (resource.downloadCount ?? 0) > 50;

  return (
    <header className={styles.header}>
      <div className={styles.text}>
        <p className={styles.type}>{resourceTypeLabel(resource.resourceType)}</p>
        <h1 className={`cw-serif ${styles.title}`}>{resource.title}</h1>
        <p className={styles.excerpt}>{resource.excerpt}</p>

        <div className={styles.meta}>
          {resource.pagesOrDuration ? <span>{resource.pagesOrDuration}</span> : null}
          <time dateTime={resource.publishedAt}>
            {DATE_FMT.format(new Date(resource.publishedAt))}
          </time>
          {showCount ? <span>{resource.downloadCount} téléchargements</span> : null}
          <ShareButton title={resource.title} className={styles.share} />
        </div>
      </div>

      {cover ? (
        <div className={styles.cover}>
          <Image
            src={cover}
            alt={resource.coverImage?.alt || ''}
            width={360}
            height={480}
            priority
            sizes="(max-width: 900px) 60vw, 360px"
            className={styles.coverImg}
          />
        </div>
      ) : null}
    </header>
  );
}
