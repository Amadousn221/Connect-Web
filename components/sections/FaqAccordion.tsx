'use client';

import { useId } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { Cta, FaqItem } from '@/content/types';
import styles from './FaqAccordion.module.css';

// Accordéon FAQ — amélioration progressive stricte.
//
// Chaque question est un `<details>/<summary>` natif : sans JavaScript, elle
// s'ouvre et se ferme au clic comme au clavier (Entrée / Espace), l'état
// ouvert/fermé est annoncé nativement par les lecteurs d'écran, et TOUTES les
// réponses restent consultables. Aucun script requis.
//
//   layout="split"      : titre à gauche, questions à droite (maquette V6 hub).
//   allowMultiple=false : accordéon exclusif via l'attribut natif `name`
//     (referme les autres à l'ouverture, sur navigateurs récents). Sur les
//     navigateurs sans support de `name`, les questions s'ouvrent librement —
//     dégradation acceptable, aucune réponse n'est masquée.
export function FaqAccordion({
  locale,
  intro,
  items,
  outro,
  align = 'center',
  layout = 'stack',
  allowMultiple = false,
}: {
  locale: Locale;
  intro: { eyebrow: string; title: string };
  items: FaqItem[];
  outro?: { text: string; link: Cta };
  align?: 'left' | 'center';
  layout?: 'stack' | 'split';
  allowMultiple?: boolean;
}) {
  // Nom de groupe stable pour l'accordéon exclusif natif (sans `:` — invalide
  // dans certains contextes DOM).
  const groupName = `faq-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;

  const list = (
    <div className={styles.list}>
      {items.map((item) => (
        <details
          key={item.q}
          className={styles.item}
          name={allowMultiple ? undefined : groupName}
        >
          <summary className={styles.qButton}>
            <h3 className={`cw-serif ${styles.qText}`}>{item.q}</h3>
            <span aria-hidden="true" className={styles.icon} />
          </summary>
          <div className={styles.body}>
            <p>{item.a}</p>
            {item.toValidateNote ? (
              <ValidationNote variant="box">{item.toValidateNote}</ValidationNote>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={`cw-sec ${styles.inner}`} data-layout={layout}>
        {layout === 'split' ? (
          <div className={styles.split}>
            <SectionHeading eyebrow={intro.eyebrow} title={intro.title} align="left" />
            {list}
          </div>
        ) : (
          <>
            <SectionHeading eyebrow={intro.eyebrow} title={intro.title} align={align} />
            {list}
          </>
        )}

        {outro ? (
          <p className={styles.outro}>
            <span>{outro.text}</span>{' '}
            <Link
              href={
                outro.link.href.startsWith('#')
                  ? outro.link.href
                  : localePath(locale, outro.link.href)
              }
              className={styles.outroLink}
            >
              {outro.link.label}
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
