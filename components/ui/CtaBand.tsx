import Link from 'next/link';
import { Button } from './Button';
import styles from './CtaBand.module.css';

type Action = { label: string; href: string };

// Bande d'appel à l'action sur surface pétrole nuit — maquette Accueil A3b
// (« Pas sûr par où commencer ? »).
export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: React.ReactNode;
  body?: React.ReactNode;
  primary: Action;
  secondary?: Action;
}) {
  return (
    <div className={styles.band}>
      <div className={styles.text}>
        <p className={`cw-serif ${styles.title}`}>{title}</p>
        {body ? <p className={styles.body}>{body}</p> : null}
      </div>
      <div className={styles.actions}>
        <Button href={primary.href} variant="primary" onDark size="md">
          {primary.label}
        </Button>
        {secondary ? (
          <Link href={secondary.href} className={styles.secondary}>
            {secondary.label}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
