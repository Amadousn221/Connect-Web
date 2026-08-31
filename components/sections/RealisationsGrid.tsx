'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import type { CaseTeaser } from '@/content/types';
import { realisationsFilters } from '@/content/fr/realisations';
import styles from './RealisationsGrid.module.css';

// Grille filtrable du hub Réalisations. Filtre client sur `CaseTeaser.group`.
// Les fiches détaillées (/realisations/[slug]) n'existent pas encore (WordPress,
// M3) — les cartes ne sont pas cliquables ; `preview` (calculé côté serveur)
// affiche la note d'explication hors production.
export function RealisationsGrid({
  items,
  preview,
}: {
  items: CaseTeaser[];
  preview: boolean;
}) {
  const [active, setActive] = useState<string>('tout');

  const shown = useMemo(
    () => (active === 'tout' ? items : items.filter((c) => c.group === active)),
    [active, items],
  );

  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <div className={styles.filters} role="group" aria-label="Filtrer par type de projet">
          {realisationsFilters.map((f) => (
            <button
              key={f.key}
              type="button"
              className={styles.chip}
              data-active={active === f.key}
              aria-pressed={active === f.key}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {preview ? (
          <p className={styles.note}>
            À valider — fiches de cas détaillées à venir (contenu WordPress) ; les
            cartes ne sont pas encore cliquables.
          </p>
        ) : null}

        <RevealOnScroll className={styles.grid}>
          {shown.map((c) => (
            <article key={c.name} className={styles.card}>
              <div className={styles.media}>
                {c.image ? (
                  <Image
                    src={c.image.src}
                    alt={c.image.alt}
                    fill
                    sizes="(max-width: 760px) 90vw, (max-width: 1100px) 46vw, 30vw"
                    className={styles.img}
                  />
                ) : preview ? (
                  <span className={styles.missing}>Visuel à fournir</span>
                ) : null}
              </div>
              <div className={styles.body}>
                <span className={styles.category}>{c.category}</span>
                <p className={`cw-serif ${styles.name}`}>{c.name}</p>
                <p className={styles.desc}>{c.body}</p>
              </div>
            </article>
          ))}
        </RevealOnScroll>

        {shown.length === 0 ? (
          <p className={styles.empty}>
            {'Aucun projet dans cette catégorie pour l’instant.'}
          </p>
        ) : null}
      </div>
    </section>
  );
}
