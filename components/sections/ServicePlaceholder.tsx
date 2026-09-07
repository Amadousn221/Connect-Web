import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import styles from './ServicePlaceholder.module.css';

// Page d'attente transitoire — reset des architectures Services (2026-09-07).
// Volontairement minimale : aucune section, aucun template réutilisable. Les
// pages Services sont reconstruites une par une via le workflow validé. Les
// routes restent accessibles (pas de lien mort, pas de redirection). `noindex`
// posé dans le `metadata` de chaque route le temps du chantier.
export function ServicePlaceholder({
  locale,
  title,
  isHub = false,
}: {
  locale: Locale;
  title: string;
  isHub?: boolean;
}) {
  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <nav aria-label="Fil d'Ariane" className={styles.crumb}>
          <Link href={localePath(locale, '/')}>Accueil</Link>
          <span aria-hidden="true">/</span>
          {isHub ? (
            <span aria-current="page">Services</span>
          ) : (
            <>
              <Link href={localePath(locale, '/services')}>Services</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{title}</span>
            </>
          )}
        </nav>

        <p className={styles.eyebrow}>Services</p>
        <h1 className={`cw-serif ${styles.title}`}>{title}</h1>
        <p className={styles.body}>
          Cette page est en cours de refonte. En attendant, décrivez-nous votre
          projet : nous vous orientons vers la bonne solution et les prochaines
          étapes.
        </p>

        <div className={styles.ctas}>
          <Button
            href={localePath(locale, '/contact')}
            variant="primary"
            onDark
            size="sm"
          >
            Parlons de votre projet
          </Button>
          <Button
            href={localePath(locale, '/')}
            variant="link"
            onDark
            size="sm"
          >
            Retour à l’accueil →
          </Button>
        </div>
      </div>
    </section>
  );
}
