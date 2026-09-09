import Link from 'next/link';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { Eyebrow } from '@/components/ui/Eyebrow';
import styles from './service-page.module.css';

export type SpLinkData = { label: string; href: string };

/** Ancre in-page (`#x`), lien externe (`http…`), ou route interne préfixée. */
export function SpLink({
  href,
  locale,
  className,
  children,
}: {
  href: string;
  locale: Locale;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith('#')) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={localePath(locale, href)} className={className}>
      {children}
    </Link>
  );
}

/** Lien tertiaire orange à flèche (maquette `.cw-link`). `tone` sur fond pétrole. */
export function SpCta({
  href,
  locale,
  tone,
  children,
}: {
  href: string;
  locale: Locale;
  tone?: 'on-dark';
  children: React.ReactNode;
}) {
  return (
    <SpLink
      href={href}
      locale={locale}
      className={`${styles.cta} ${tone === 'on-dark' ? styles.ctaOnDark : ''}`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </SpLink>
  );
}

/** En-tête de section : eyebrow + titre (gauche) + chapô (droite, optionnel). */
export function SpHead({
  id,
  eyebrow,
  title,
  lead,
  tone,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: 'on-dark';
}) {
  return (
    <div className={styles.head}>
      <div>
        <span className={styles.headEyebrow}>
          <Eyebrow tone={tone === 'on-dark' ? 'on-dark' : 'default'}>{eyebrow}</Eyebrow>
        </span>
        <h2 id={id} className={`cw-serif ${styles.headTitle}`}>
          {title}
        </h2>
      </div>
      {lead ? <p className={styles.headLead}>{lead}</p> : null}
    </div>
  );
}

/** Rend un tableau de paragraphes ; une entrée commençant par « - » → liste. */
export function SpProse({ blocks }: { blocks: string[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        const lines = b.split('\n');
        if (lines.every((l) => l.trimStart().startsWith('- '))) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{l.replace(/^\s*-\s/, '')}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{b}</p>;
      })}
    </>
  );
}
