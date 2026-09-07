'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Tag } from '@/components/ui/Tag';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { NeedOption } from '@/content/types';
import { needIntro, needOptions } from '@/content/fr/accueil';
import styles from './NeedSelector.module.css';

// S05 — « À qui nous parlons » (design éditorial restauré, copy corrigée —
// textes courts). 4 situations → panneau (situation, réponse, services
// associés en badges, avantages en ligne éditoriale, un seul lien de
// routage). Desktop (≥1024px) : liste à gauche, panneau à droite. Mobile /
// tablette (≤1023px) : accordéon — une seule situation ouverte à la fois.
function Panel({ opt, locale }: { opt: NeedOption; locale: Locale }) {
  return (
    <>
      <span className={styles.kicker}>Votre situation</span>
      <p className={`cw-serif ${styles.situation}`}>{opt.situation}</p>
      <p className={styles.answer}>{opt.answer}</p>
      <p className={styles.servicesLabel}>Services associés</p>
      <div className={styles.tags}>
        {opt.services.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
      <p className={styles.advantagesLabel}>Vos avantages</p>
      <p className={styles.advantages}>{opt.advantages.join(' · ')}</p>
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
      </div>
    </section>
  );
}
