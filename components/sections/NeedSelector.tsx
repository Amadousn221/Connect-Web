'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { CtaBand } from '@/components/ui/CtaBand';
import { Tag } from '@/components/ui/Tag';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { NeedOption } from '@/content/types';
import { needIntro, needOptions, needCtaBand } from '@/content/fr/accueil';
import styles from './NeedSelector.module.css';

// A3 — « Ce qu'on construit » : 5 besoins → panneau (situation, réponse, ce
// qu'on livre, lien) + bande CTA. Desktop (≥1024px) : liste à gauche, panneau
// à droite. Mobile / tablette (≤1023px) : accordéon — le contenu s'ouvre juste
// sous l'entrée cliquée, une seule ouverte à la fois.
function Panel({ opt, locale }: { opt: NeedOption; locale: Locale }) {
  return (
    <>
      <div className={styles.panelHead}>
        <span className={styles.kicker}>Votre situation</span>
        {opt.capabilityBadge ? (
          <span className={styles.capBadge}>Capacité démontrée</span>
        ) : null}
      </div>
      <p className={`cw-serif ${styles.situation}`}>{opt.situation}</p>
      <p className={styles.answer}>{opt.answer}</p>
      <p className={styles.deliversLabel}>Ce qu'on livre</p>
      <div className={styles.tags}>
        {opt.delivers.map((d) => (
          <Tag key={d}>{d}</Tag>
        ))}
      </div>
      <Link href={localePath(locale, opt.link.href)} className={styles.more}>
        {opt.link.label} →
      </Link>
    </>
  );
}

export function NeedSelector({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const opt = needOptions[active];
  const baseId = useId();

  return (
    <section id="construire" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={needIntro.eyebrow}
            title={needIntro.title}
            lead={needIntro.lead}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.editorial}>
          <div className={styles.list} role="group" aria-label="Votre besoin">
            {needOptions.map((o, i) => {
              const panelId = `${baseId}-p${i}`;
              const isActive = i === active;
              return (
                <div key={o.key} className={styles.itemWrap}>
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    className={styles.item}
                    data-active={isActive}
                    onClick={() => setActive(i)}
                  >
                    <span className={`cw-serif ${styles.itemTitle}`}>
                      {o.label}
                    </span>
                    <span className={styles.itemHint}>{o.hint}</span>
                  </button>

                  {/* Panneau accordéon — mobile / tablette uniquement */}
                  <div
                    id={panelId}
                    className={styles.panelMobile}
                    data-open={isActive}
                  >
                    <div className={styles.panelMobileInner} inert={!isActive}>
                      <Panel opt={o} locale={locale} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Panneau latéral — desktop uniquement */}
          <div className={styles.panel} role="region" aria-live="polite">
            <Panel opt={opt} locale={locale} />
          </div>
        </RevealOnScroll>

        <RevealOnScroll className={styles.band}>
          <CtaBand
            title={needCtaBand.title}
            body={needCtaBand.body}
            primary={needCtaBand.primary}
            secondary={needCtaBand.secondary}
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
