import Image from 'next/image';
import Link from 'next/link';
import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from '@portabletext/react';

import { sanityImageProps } from '@/sanity/lib/image';
import type { PortableCodeBlock, PortableImageBlock, RichText } from '@/sanity/lib/types';

import { slugifyHeading } from './slugify';
import styles from './PortableTextRenderer.module.css';

export { slugifyHeading };

/**
 * Rendu du contenu Portable Text de Sanity (spec §6.5).
 *
 * Serializers custom soignés — on ne s'appuie jamais sur le rendu par défaut
 * de la lib. Le composant n'accepte que `value` et ne crashe pas si le
 * contenu est absent.
 *
 * NB : la coloration syntaxique des blocs de code est volontairement reportée
 * (décision 3.1 Q2 — pas de dépendance `prism-react-renderer` pour l'instant).
 * Le bloc est stylé proprement, l'ajout du highlight se fera sans changer l'API.
 */

/** Texte brut d'un bloc, pour générer les ancres de titres (TOC). */
function blockToPlainText(block: PortableTextBlock): string {
  if (!Array.isArray(block.children)) return '';
  return block.children
    .map((child) => (typeof child === 'object' && child && 'text' in child ? String(child.text) : ''))
    .join('');
}

function isExternalHref(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('tel:');
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
    h2: ({ children, value }) => (
      <h2 id={slugifyHeading(blockToPlainText(value))} className={styles.h2}>
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3 id={slugifyHeading(blockToPlainText(value))} className={styles.h3}>
        {children}
      </h3>
    ),
    h4: ({ children }) => <h4 className={styles.h4}>{children}</h4>,
    blockquote: ({ children }) => <blockquote className={styles.quote}>{children}</blockquote>,
  },

  list: {
    bullet: ({ children }) => <ul className={styles.ul}>{children}</ul>,
    number: ({ children }) => <ol className={styles.ol}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className={styles.li}>{children}</li>,
    number: ({ children }) => <li className={styles.li}>{children}</li>,
  },

  marks: {
    strong: ({ children }) => <strong className={styles.strong}>{children}</strong>,
    em: ({ children }) => <em className={styles.em}>{children}</em>,
    code: ({ children }) => <code className={styles.inlineCode}>{children}</code>,
    link: ({ children, value }) => {
      const href: string = value?.href ?? '#';
      const external = isExternalHref(href);
      const openInNew = external || value?.blank === true;

      if (external || openInNew) {
        return (
          <a
            href={href}
            className={styles.link}
            {...(openInNew ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={styles.link}>
          {children}
        </Link>
      );
    },
  },

  types: {
    imageBlock: ({ value }: { value: PortableImageBlock }) => {
      const img = sanityImageProps(value, { width: 1440 });
      if (!img) return null;
      return (
        <figure className={styles.figure}>
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            sizes="(max-width: 760px) 100vw, 720px"
            className={styles.image}
            {...(img.blurDataURL ? { placeholder: 'blur', blurDataURL: img.blurDataURL } : {})}
          />
          {value.caption ? <figcaption className={styles.caption}>{value.caption}</figcaption> : null}
        </figure>
      );
    },

    codeBlock: ({ value }: { value: PortableCodeBlock }) => {
      if (!value?.code) return null;
      return (
        <figure className={styles.codeBlock}>
          {value.language && value.language !== 'text' ? (
            <figcaption className={styles.codeLang}>{value.language}</figcaption>
          ) : null}
          <pre className={styles.pre}>
            <code>{value.code}</code>
          </pre>
        </figure>
      );
    },
  },
};

export function PortableTextRenderer({ value }: { value: RichText | null | undefined }) {
  if (!Array.isArray(value) || value.length === 0) return null;
  return (
    <div className={styles.root}>
      <PortableText value={value} components={components} />
    </div>
  );
}
