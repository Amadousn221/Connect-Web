import { Button } from '@/components/ui/Button';

import styles from './EmptyState.module.css';

/**
 * État vide générique — catalogue sans contenu publié, ou 0 résultat de
 * filtre. « Beau sans contenu » (règle projet P10). Jamais de faux items.
 */
export function EmptyState({
  title,
  body,
  cta,
}: {
  title: string;
  body: string;
  cta?: { label: string; href: string };
}) {
  return (
    <div className={styles.wrap}>
      <span className={styles.icon} aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 5.5A1.5 1.5 0 0 1 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5V5.5ZM12 4h6.5A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5H12"
            stroke="var(--orange)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <p className={`cw-serif ${styles.title}`}>{title}</p>
      <p className={styles.body}>{body}</p>
      {cta ? (
        <Button href={cta.href} variant="primary" size="md">
          {cta.label}
        </Button>
      ) : null}
    </div>
  );
}
