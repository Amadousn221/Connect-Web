import Image from 'next/image';

import { urlFor } from '@/sanity/lib/image';
import type { BlogPostFull } from '@/sanity/lib/types';

import { ShareButton } from './ShareButton';
import styles from './ArticleHeader.module.css';

const DATE_FMT = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

/** En-tête d'article (spec §6.2 Zone 3). */
export function ArticleHeader({ post }: { post: BlogPostFull }) {
  const cover = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1280).height(800).fit('crop').auto('format').quality(80).url()
    : null;
  const avatar = post.author?.avatar?.asset
    ? urlFor(post.author.avatar).width(64).height(64).fit('crop').auto('format').url()
    : null;

  return (
    <header className={styles.header}>
      {post.category ? <p className={styles.category}>{post.category.title}</p> : null}
      <h1 className={`cw-serif ${styles.title}`}>{post.title}</h1>
      {post.lede ? <p className={styles.lede}>{post.lede}</p> : null}

      <div className={styles.meta}>
        <div className={styles.author}>
          {avatar ? (
            <Image
              src={avatar}
              alt={post.author?.avatar?.alt || post.author?.name || ''}
              width={32}
              height={32}
              className={styles.authorAvatar}
            />
          ) : null}
          {post.author ? <span className={styles.authorName}>{post.author.name}</span> : null}
        </div>
        <span className={styles.dot} aria-hidden="true">
          ·
        </span>
        <time dateTime={post.publishedAt}>{DATE_FMT.format(new Date(post.publishedAt))}</time>
        {post.readingTime ? (
          <>
            <span className={styles.dot} aria-hidden="true">
              ·
            </span>
            <span>{post.readingTime} min de lecture</span>
          </>
        ) : null}
        <ShareButton title={post.title} className={styles.share} />
      </div>

      {cover ? (
        <div className={styles.cover}>
          <Image
            src={cover}
            alt={post.coverImage?.alt || ''}
            width={1280}
            height={800}
            priority
            sizes="(max-width: 1024px) 100vw, 960px"
            className={styles.coverImg}
          />
        </div>
      ) : null}
    </header>
  );
}
