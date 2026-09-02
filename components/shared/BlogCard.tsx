import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '@/sanity/lib/image';
import type { BlogPostCard as BlogPostCardData } from '@/sanity/lib/types';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';

import styles from './BlogCard.module.css';

const DATE_FMT = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

/** Carte d'article — catalogue Blog + sidebar (spec §6.1). Cliquable en entier. */
export function BlogCard({ post, locale }: { post: BlogPostCardData; locale: Locale }) {
  const href = localePath(locale, `/blog/${post.slug}`);
  const cover = post.coverImage?.asset
    ? urlFor(post.coverImage).width(760).height(475).fit('crop').auto('format').quality(75).url()
    : null;

  return (
    <article className={styles.card}>
      <Link href={href} className={styles.link}>
        <div className={styles.media}>
          {cover ? (
            <Image
              src={cover}
              alt={post.coverImage?.alt || ''}
              fill
              sizes="(max-width: 640px) 88vw, (max-width: 1023px) 46vw, 33vw"
              className={styles.img}
            />
          ) : (
            <span className={styles.mediaFallback} aria-hidden="true" />
          )}
        </div>

        <div className={styles.body}>
          {post.category ? <span className={styles.category}>{post.category.title}</span> : null}
          <h3 className={`cw-serif ${styles.title}`}>{post.title}</h3>
          <p className={styles.excerpt}>{post.excerpt}</p>
          <p className={styles.meta}>
            <time dateTime={post.publishedAt}>{DATE_FMT.format(new Date(post.publishedAt))}</time>
            {post.readingTime ? <span> · {post.readingTime} min de lecture</span> : null}
          </p>
        </div>
      </Link>
    </article>
  );
}
