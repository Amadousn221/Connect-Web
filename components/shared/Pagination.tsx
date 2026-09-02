import Link from 'next/link';

import styles from './Pagination.module.css';

/**
 * Pagination numérotée (spec §6.1 Zone 5). Server component : rend des liens
 * `<Link>` réels (crawlables, fonctionnent sans JS). La page fournit
 * `makeHref` pour conserver les autres query params.
 */
export function Pagination({
  currentPage,
  totalPages,
  makeHref,
}: {
  currentPage: number;
  totalPages: number;
  makeHref: (page: number) => string;
}) {
  if (totalPages <= 1) return null;

  const pages = pageWindow(currentPage, totalPages);

  return (
    <nav className={styles.nav} aria-label="Pagination">
      {currentPage > 1 ? (
        <Link href={makeHref(currentPage - 1)} className={styles.arrow} rel="prev">
          <span aria-hidden="true">←</span> Précédent
        </Link>
      ) : (
        <span className={`${styles.arrow} ${styles.disabled}`} aria-hidden="true">
          ← Précédent
        </span>
      )}

      <ol className={styles.list}>
        {pages.map((p, i) =>
          p === '…' ? (
            <li key={`gap-${i}`} className={styles.gap} aria-hidden="true">
              …
            </li>
          ) : (
            <li key={p}>
              <Link
                href={makeHref(p)}
                className={styles.page}
                data-current={p === currentPage ? 'true' : undefined}
                aria-current={p === currentPage ? 'page' : undefined}
              >
                {p}
              </Link>
            </li>
          ),
        )}
      </ol>

      {currentPage < totalPages ? (
        <Link href={makeHref(currentPage + 1)} className={styles.arrow} rel="next">
          Suivant <span aria-hidden="true">→</span>
        </Link>
      ) : (
        <span className={`${styles.arrow} ${styles.disabled}`} aria-hidden="true">
          Suivant →
        </span>
      )}
    </nav>
  );
}

/** Fenêtre de pages : 1 … c-1 c c+1 … N */
function pageWindow(current: number, total: number): (number | '…')[] {
  const out: (number | '…')[] = [];
  const push = (n: number) => out.push(n);

  push(1);
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) out.push('…');
  for (let i = start; i <= end; i += 1) push(i);
  if (end < total - 1) out.push('…');
  if (total > 1) push(total);

  return out;
}
