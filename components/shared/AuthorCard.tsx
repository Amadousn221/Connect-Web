import Image from 'next/image';

import { urlFor } from '@/sanity/lib/image';
import type { Author } from '@/sanity/lib/types';

import styles from './AuthorCard.module.css';

/** Encart auteur en fin d'article / de ressource (spec §6.2 Zone 9, §10). */
export function AuthorCard({ author }: { author: Author | null }) {
  if (!author) return null;

  const avatar = author.avatar?.asset
    ? urlFor(author.avatar).width(160).height(160).fit('crop').auto('format').quality(80).url()
    : null;

  return (
    <aside className={styles.card}>
      {avatar ? (
        <Image
          src={avatar}
          alt={author.avatar?.alt || author.name}
          width={80}
          height={80}
          className={styles.avatar}
        />
      ) : (
        <span className={styles.avatarFallback} aria-hidden="true">
          {author.name.charAt(0)}
        </span>
      )}
      <div className={styles.body}>
        <p className={styles.name}>{author.name}</p>
        <p className={styles.role}>{author.role}</p>
        {author.shortBio ? <p className={styles.bio}>{author.shortBio}</p> : null}
        {author.socialLinks?.linkedin ? (
          <a
            href={author.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            LinkedIn <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </aside>
  );
}
