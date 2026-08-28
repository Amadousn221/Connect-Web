'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { CtaBand } from '@/components/ui/CtaBand';
import { Tag } from '@/components/ui/Tag';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { needIntro, needOptions, needCtaBand } from '@/content/fr/accueil';
import styles from './NeedSelector.module.css';

// A3 — « Ce qu'on construit » : sélecteur 5 besoins → panneau (situation,
// réponse, ce qu'on livre, lien). + bande CTA « Pas sûr par où commencer ? ».
// Comportement JS de la maquette réécrit en état React.
export function NeedSelector({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const opt = needOptions[active];

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
          <div className={styles.list} role="tablist" aria-label="Votre besoin">
            {needOptions.map((o, i) => (
              <button
                key={o.key}
                role="tab"
                aria-selected={i === active}
                aria-controls={`need-panel-${o.key}`}
                id={`need-tab-${o.key}`}
                className={styles.item}
                data-active={i === active}
                onClick={() => setActive(i)}
              >
                <span className={`cw-serif ${styles.itemTitle}`}>{o.label}</span>
                <span className={styles.itemHint}>{o.hint}</span>
              </button>
            ))}
          </div>

          <div
            className={styles.panel}
            role="tabpanel"
            id={`need-panel-${opt.key}`}
            aria-labelledby={`need-tab-${opt.key}`}
          >
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
