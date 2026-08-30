import styles from './TrustLine.module.css';

// Ligne de réassurance — §06.1 du Design Handoff (« Réponse sous 24 h · Devis
// gratuit · Vos accès vous appartiennent »). Posée sous les CTA du Hero ;
// réutilisable telle quelle sous le CTA final (§06.11). Sans icône (choix Lot A).
export function TrustLine({
  items,
  tone = 'default',
  className,
}: {
  items: string[];
  /** `on-dark` : sur surface pétrole nuit (Hero). */
  tone?: 'default' | 'on-dark';
  className?: string;
}) {
  if (!items.length) return null;
  return (
    <ul
      className={[styles.line, className].filter(Boolean).join(' ')}
      data-tone={tone}
    >
      {items.map((item, i) => (
        <li key={item} className={styles.item}>
          {i > 0 ? (
            <span aria-hidden="true" className={styles.sep}>
              ·
            </span>
          ) : null}
          {item}
        </li>
      ))}
    </ul>
  );
}
