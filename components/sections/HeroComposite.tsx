import Image from 'next/image';
import { showValidationNotes } from '@/lib/flags';
import type { HeroShot } from '@/content/types';
import styles from './HeroComposite.module.css';

// Composite visuel du Hero (§06.1) — mosaïque de captures réelles de projets.
// Règle anti-slop : jamais de mockup ni de placeholder décoratif. Une tuile
// sans capture (`missing`) n'est rendue qu'en preview, avec un repère explicite
// « Visuel à fournir » ; en production elle disparaît (l'absence est soignée).
export function HeroComposite({ shots }: { shots: HeroShot[] }) {
  const preview = showValidationNotes();
  const visible = shots.filter((s) => s.src || (s.missing && preview));
  if (visible.length === 0) return null;

  const real = visible.filter((s) => s.src).length;

  return (
    <div className={styles.composite} data-count={visible.length}>
      {visible.map((shot, i) => (
        <figure key={shot.alt} className={styles.frame}>
          {shot.src ? (
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(max-width: 1024px) 92vw, 42vw"
              className={styles.img}
              priority={i === 0 && real > 0}
            />
          ) : (
            <span className={styles.missing}>
              <span className={styles.missingTag}>Visuel à fournir</span>
              <span className={styles.missingLabel}>{shot.missing}</span>
            </span>
          )}
        </figure>
      ))}
    </div>
  );
}
