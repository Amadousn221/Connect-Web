import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import styles from './ServicesHub.module.css';

/**
 * Lien contextuel : ancre in-page (`#x`), lien externe (`http…`, nouvel
 * onglet), ou route interne préfixée par la locale.
 */
export function SmartLink({
  href,
  locale,
  className,
  ariaLabel,
  children,
}: {
  href: string;
  locale: Locale;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith('#')) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  if (/^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={localePath(locale, href)} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

/** Lien tertiaire orange avec flèche (repris de la maquette `.cw-link`). */
export function HubCta({
  href,
  locale,
  ariaLabel,
  children,
}: {
  href: string;
  locale: Locale;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <SmartLink href={href} locale={locale} className={styles.link} ariaLabel={ariaLabel}>
      {children}
      <span aria-hidden="true">↗</span>
    </SmartLink>
  );
}

// Helpers partagés des sections du Hub Services.

/**
 * Rend un corps de texte : les lignes préfixées « - » deviennent une liste,
 * sinon un paragraphe. Les blocs sont séparés par des sauts de ligne doubles.
 */
export function RichBody({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/).filter(Boolean);
  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.split('\n');
        const isList = lines.every((l) => l.trimStart().startsWith('- '));
        if (isList) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{l.replace(/^\s*-\s/, '')}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{block}</p>;
      })}
    </>
  );
}

/** En-tête de section : eyebrow + titre (à gauche) + chapô (à droite). */
export function HubHead({
  eyebrow,
  title,
  lead,
  tone = 'default',
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: 'default' | 'on-dark';
}) {
  return (
    <div className={styles.head}>
      <div>
        <span className={styles.headEyebrow}>
          <Eyebrow tone={tone === 'on-dark' ? 'on-dark' : 'default'}>{eyebrow}</Eyebrow>
        </span>
        <h2 className={`cw-serif ${styles.headTitle}`}>{title}</h2>
      </div>
      {lead ? <p className={styles.headLead}>{lead}</p> : null}
    </div>
  );
}
