import Image from 'next/image';
import Link from 'next/link';
import { showValidationNotes } from '@/lib/flags';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { ProjectCardData } from '@/content/types';
import styles from './ProjectCard.module.css';

// A7 — Carte de cas phare (Lot D, §09.2). Image 16:10 sur fond sombre, client
// en label, titre H3 serif, secteur, tag solution, ligne résultat (rendue
// seulement si fournie), CTA tertiaire. Slug de page inexistant → CTA non
// cliquable.
export function ProjectCard({
  card,
  locale,
}: {
  card: ProjectCardData;
  locale: Locale;
}) {
  const preview = showValidationNotes();

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {card.image ? (
          <Image
            src={card.image.src}
            alt={card.image.alt}
            fill
            sizes="(max-width: 640px) 88vw, (max-width: 1023px) 66vw, 40vw"
            className={styles.img}
          />
        ) : preview && card.imageMissing ? (
          <span className={styles.missing}>
            <span className={styles.missingTag}>Visuel à fournir</span>
            <span className={styles.missingLabel}>{card.imageMissing}</span>
          </span>
        ) : null}
      </div>

      <div className={styles.body}>
        <span className={styles.client}>{card.client}</span>
        <h3 className={`cw-serif ${styles.title}`}>{card.title}</h3>
        <p className={styles.sector}>{card.sector}</p>
        <span className={styles.tag}>{card.solutionTag}</span>

        {card.result ? <p className={styles.result}>{card.result}</p> : null}

        {card.cta.todo ? (
          <span className={styles.cta} data-todo="true">
            {card.cta.label} <span aria-hidden="true">→</span>
          </span>
        ) : (
          <Link href={localePath(locale, card.cta.href)} className={styles.cta}>
            {card.cta.label} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  );
}
