import Link from 'next/link';

import styles from './Breadcrumb.module.css';

export type BreadcrumbItem = {
  label: string;
  /** Absent = élément courant (dernier), non cliquable. */
  href?: string;
};

/**
 * Fil d'Ariane — « Accueil > Blog > [Catégorie] > [Titre] ».
 * Utilisé sur /blog/[slug] et /ressources/[slug]. Le dernier item est la page
 * courante et n'est jamais un lien.
 */
export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Fil d'Ariane" className={styles.nav}>
      <ol className={styles.list}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className={styles.item}>
              {item.href && !isLast ? (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className={styles.current}>
                  {item.label}
                </span>
              )}
              {!isLast ? (
                <span aria-hidden="true" className={styles.sep}>
                  ›
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
