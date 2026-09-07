import { showValidationNotes } from '@/lib/flags';
import styles from './ValidationNote.module.css';

// Repère « À valider » des maquettes (données qui attendent une source réelle :
// visuels, montants, noms, URLs). Rendu conditionné par le flag
// NEXT_PUBLIC_SHOW_VALIDATION_NOTES : visible en preview, masqué en prod.
//
// Ce composant ne fabrique jamais de fausse donnée : il signale un manque.
// La donnée absente elle-même est gérée par la règle des états vides.
export function ValidationNote({
  children,
  variant = 'badge',
  tone = 'default',
}: {
  children: React.ReactNode;
  /** `badge` = petite pastille inline ; `box` = encart avec préfixe. */
  variant?: 'badge' | 'box';
  /** `on-dark` : posé sur une surface sombre fixe (ex. BlogSection sur `--ink-deep`) — le texte `--ink-soft` par défaut y est illisible. */
  tone?: 'default' | 'on-dark';
}) {
  if (!showValidationNotes()) return null;
  if (variant === 'badge') {
    return <span className={styles.badge}>{children}</span>;
  }
  return (
    <p className={[styles.box, tone === 'on-dark' && styles.onDark].filter(Boolean).join(' ')}>
      <span className={styles.prefix}>À valider — </span>
      {children}
    </p>
  );
}
