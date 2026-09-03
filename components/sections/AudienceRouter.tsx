'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Tag } from '@/components/ui/Tag';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import type { NeedOption } from '@/content/types';
import { audienceRouterIntro, audienceSegments } from '@/content/fr/audienceRouter';
import styles from './AudienceRouter.module.css';

// P25 S05 — « À qui on parle ». Squelette d'interaction repris intégralement
// de l'ancien NeedSelector.tsx (desktop : liste + panneau `aria-live` ;
// mobile/tablette : accordéon CSS sur le même DOM, `inert` sur le contenu
// replié) — voir plan P25 §3. Contenu allégé : pas de bande CTA de fin (le
// spec S05 ne la prévoit pas ; sa copy nourrit désormais le bloc Conseil de
// la section Services, cf. content/fr/services.ts).
function Panel({ opt, locale }: { opt: NeedOption; locale: Locale }) {
  return (
    <>
      <div className={styles.panelHead}>
        <span className={styles.kicker}>Votre situation</span>
      </div>
      <p className={`cw-serif ${styles.situation}`}>{opt.situation}</p>
      <p className={styles.answer}>{opt.answer}</p>
      <div className={styles.tags}>
        {opt.delivers.map((d) => (
          <Tag key={d} pill>
            {d}
          </Tag>
        ))}
      </div>
      <Link href={localePath(locale, opt.link.href)} className={styles.more}>
        {opt.link.label} →
      </Link>
    </>
  );
}

export function AudienceRouter({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const opt = audienceSegments[active];
  const baseId = useId();

  return (
    <section id="audience" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={audienceRouterIntro.eyebrow}
            title={audienceRouterIntro.title}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.editorial}>
          <div className={styles.list} role="group" aria-label="Votre organisation">
            {audienceSegments.map((o, i) => {
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
                    <span className={`cw-serif ${styles.itemTitle}`}>{o.label}</span>
                    <span className={styles.itemHint}>{o.hint}</span>
                  </button>

                  {/* Panneau accordéon — mobile / tablette uniquement */}
                  <div id={panelId} className={styles.panelMobile} data-open={isActive}>
                    <div className={styles.panelMobileInner} inert={!isActive}>
                      <div className={styles.panelMobileContent}>
                        <Panel opt={o} locale={locale} />
                      </div>
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
