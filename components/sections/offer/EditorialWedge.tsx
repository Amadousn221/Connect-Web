import { Fragment } from 'react';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import type { EditorialContent } from '@/content/offres';
import styles from './EditorialWedge.module.css';

// Section 04 — Le wedge, expliqué : titre + corps éditorial (lettrine + sous-
// titres) + panneau latéral de faits (bordure orange). Signature de la page.

// Rendu minimal du **gras** dans les faits latéraux.
function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? (
      <b key={i}>{p.slice(2, -2)}</b>
    ) : (
      <Fragment key={i}>{p}</Fragment>
    ),
  );
}

export function EditorialWedge({ content }: { content: EditorialContent }) {
  const sideFacts = content.sideFacts ?? [];
  return (
    <section id="wedge" className={styles.section}>
      <div className={styles.wrap}>
        <RevealOnScroll className={styles.head}>
          <div className={styles.eyebrowWrap}>
            <Eyebrow>{content.eyebrow}</Eyebrow>
          </div>
          <h2 className={`cw-serif ${styles.title}`}>{content.title}</h2>
        </RevealOnScroll>

        <RevealOnScroll
          className={styles.grid}
          data-no-side={sideFacts.length ? undefined : 'true'}
        >
          <div className={styles.bodyCol}>
            {content.blocks.map((block, i) =>
              typeof block === 'string' ? (
                <p key={i} className={styles.para}>
                  {block}
                </p>
              ) : (
                <h3 key={i} className={`cw-serif ${styles.h3}`}>
                  {block.h3}
                </h3>
              ),
            )}
            {content.link ? (
              <a href={content.link.href} className={styles.link}>
                {content.link.label}
              </a>
            ) : null}
          </div>

          {sideFacts.length ? (
            <aside className={styles.side}>
              {content.sideLabel ? (
                <p className={styles.sideLabel}>{content.sideLabel}</p>
              ) : null}
              {sideFacts.map((fact, i) => (
                <p key={i} className={styles.fact}>
                  {renderBold(fact)}
                </p>
              ))}
            </aside>
          ) : null}
        </RevealOnScroll>
      </div>
    </section>
  );
}
