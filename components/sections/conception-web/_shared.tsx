import Link from 'next/link';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Icon } from '@/components/ui/Icon';
import styles from './ConceptionWeb.module.css';

/** Flèche des liens tertiaires — SVG 15 px, décalage discret au survol/focus. */
export function CwArrow() {
  return <Icon name="arrow-up-right" className={styles.ctaArrow} width={15} height={15} />;
}

/** Ancre in-page (`#x`), lien externe (`http…`), ou route interne préfixée. */
export function CwLink({
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

/** Lien tertiaire orange avec flèche (repris de la maquette `.cw-link`). */
export function CwCta({
  href,
  locale,
  children,
}: {
  href: string;
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <CwLink href={href} locale={locale} className={styles.cta}>
      {children}
      <CwArrow />
    </CwLink>
  );
}

/** En-tête de section : eyebrow + titre (gauche) + chapô (droite, optionnel). */
export function CwHead({
  id,
  eyebrow,
  title,
  lead,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className={styles.head}>
      <div>
        <span className={styles.headEyebrow}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </span>
        <h2 id={id} className={`cw-serif ${styles.headTitle}`}>
          {title}
        </h2>
      </div>
      {lead ? <p className={styles.headLead}>{lead}</p> : null}
    </div>
  );
}
