import { Eyebrow } from './Eyebrow';
import styles from './SectionHeading.module.css';

// En-tête de section : eyebrow + titre (Newsreader) + chapô optionnel.
// Reproduit le bloc récurrent des maquettes (`.cw-head` quand centré).
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'default',
  as = 'h2',
  className,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'default' | 'on-dark';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}) {
  const Title = as;
  return (
    <div
      className={[styles.head, className].filter(Boolean).join(' ')}
      data-align={align}
      data-tone={tone}
    >
      {eyebrow ? (
        <div className={styles.eyebrowWrap}>
          <Eyebrow tone={tone === 'on-dark' ? 'on-dark' : 'default'}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <Title className={`cw-serif ${styles.title}`}>{title}</Title>
      {lead ? <p className={styles.lead}>{lead}</p> : null}
    </div>
  );
}
