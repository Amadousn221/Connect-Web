import { Fragment, type ReactNode } from 'react';
import Link from 'next/link';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { LegalPageContent, LegalSection } from '@/content/fr/legal';
import styles from './LegalPage.module.css';

// Page légale (mentions légales, confidentialité). Colonne unique lisible,
// en-tête sur fond off-white. Les marqueurs ⟦…⟧ des données non fournies sont
// rendus visiblement — une page légale incomplète doit le montrer.

const UPDATED_FMT = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

// Découpe le texte sur ⟦…⟧ (placeholders PO) et {{lien}} (lien de section).
function renderText(text: string, link?: LegalSection['link']): ReactNode[] {
  return text.split(/(⟦[^⟧]+⟧|\{\{lien\}\})/g).map((part, i) => {
    if (part.startsWith('⟦') && part.endsWith('⟧')) {
      return (
        <mark key={i} className={styles.todo}>
          [à compléter — {part.slice(1, -1)}]
        </mark>
      );
    }
    if (part === '{{lien}}' && link) {
      return (
        <a key={i} href={link.href} className={styles.inlineLink}>
          {link.label}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

export function LegalPage({
  locale,
  content,
}: {
  locale: Locale;
  content: LegalPageContent;
}) {
  const updated = content.updated
    ? UPDATED_FMT.format(new Date(content.updated))
    : null;

  return (
    <>
      <section className={styles.head}>
        <div className={styles.wrap}>
          <nav className={styles.crumb} aria-label="Fil d'Ariane">
            <Link href={localePath(locale, '/')}>Accueil</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{content.breadcrumb}</span>
          </nav>
          <p className={styles.eyebrow}>
            <span aria-hidden="true" className={styles.dot} />
            {content.eyebrow}
          </p>
          <h1 className={`cw-serif ${styles.title}`}>{content.title}</h1>
          <p className={styles.lead}>{content.lead}</p>
          <p className={styles.updated}>
            Dernière mise à jour :{' '}
            {updated ?? (
              <mark className={styles.todo}>[à compléter — date de publication]</mark>
            )}
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.wrap}>
          {content.sections.map((section) => (
            <Fragment key={section.title}>
              <h2 className={`cw-serif ${styles.h2}`}>{section.title}</h2>
              {section.blocks.map((block, i) =>
                'ul' in block ? (
                  <ul key={i} className={styles.list}>
                    {block.ul.map((li, j) => (
                      <li key={j}>{renderText(li, section.link)}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className={styles.p}>
                    {renderText(block.p, section.link)}
                  </p>
                ),
              )}
            </Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
