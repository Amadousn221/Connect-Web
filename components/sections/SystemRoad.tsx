'use client';

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ServiceIcon } from '@/components/ui/service-icons';
import { UsersIcon, BarChartIcon } from '@/components/ui/icons';
import { systemIntro, systemCta } from '@/content/fr/accueil';
import { systemModules } from '@/content/fr/systemExplorer';
import type { SystemModule } from '@/content/types';
import styles from './SystemRoad.module.css';

// S07 — « Du site au système » (Refonte Accueil, Lot 2 ; copy V1). Section
// stratégique sur bleu profond, EXPLORATION INTERACTIVE : 6 modules
// sélectionnables (site/boutique, application web, CRM, ERP, automatisation,
// reporting). Onglets réutilisant le mécanisme de Method.tsx (role=tablist,
// roving tabindex, flèches, Home/End, focus suivi). Un module actif à
// l'arrivée. Panneau sous les sélecteurs : rôle · 2–3 usages. Crossfade
// discret (~180 ms), coupé par prefers-reduced-motion. Aucun ordre technique
// imposé, aucune référence client.
const ICON: Record<SystemModule['icon'], ReactNode> = {
  web: <ServiceIcon name="web" width={22} height={22} />,
  apps: <ServiceIcon name="apps" width={22} height={22} />,
  crm: <UsersIcon width={22} height={22} />,
  erp: <ServiceIcon name="erp" width={22} height={22} />,
  automation: <ServiceIcon name="automation" width={22} height={22} />,
  reporting: <BarChartIcon width={22} height={22} />,
};

export function SystemRoad() {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const count = systemModules.length;
  const current = systemModules[active];

  const goTo = (i: number) => {
    const next = (i + count) % count;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goTo(active - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goTo(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      goTo(count - 1);
    }
  };

  return (
    <section id="systeme" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={systemIntro.eyebrow}
            title={systemIntro.title}
            lead={systemIntro.lead}
            tone="on-dark"
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.explorer}>
          <div
            className={styles.tabs}
            role="tablist"
            aria-label="Les outils du système"
            aria-orientation="horizontal"
            onKeyDown={onKeyDown}
          >
            {systemModules.map((m, i) => (
              <button
                key={m.key}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`${baseId}-panel`}
                tabIndex={i === active ? 0 : -1}
                className={styles.tab}
                data-active={i === active}
                onClick={() => setActive(i)}
              >
                <span className={styles.tabIcon} aria-hidden="true">
                  {ICON[m.icon]}
                </span>
                <span className={styles.tabLabel}>{m.name}</span>
              </button>
            ))}
          </div>

          <div
            className={styles.panel}
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${active}`}
          >
            <div key={current.key} className={styles.panelInner}>
              <p className={styles.moduleName}>{current.name}</p>
              <p className={`cw-serif ${styles.role}`}>{current.role}</p>

              <p className={styles.usesLabel}>Ce que ça permet</p>
              <ul className={styles.uses}>
                {current.uses.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Accordéon — mobile/tablette : le contenu s'ouvre directement
              sous le module touché, au lieu d'un panneau unique après les 6
              onglets empilés (même mécanisme que Method.tsx). */}
          <div className={styles.accordion}>
            {systemModules.map((m, i) => (
              <div key={m.key} className={styles.accItem}>
                <button
                  type="button"
                  className={styles.accHead}
                  aria-expanded={i === active}
                  aria-controls={`${baseId}-acc-${i}`}
                  data-active={i === active}
                  onClick={() => setActive(i)}
                >
                  <span className={styles.tabIcon} aria-hidden="true">
                    {ICON[m.icon]}
                  </span>
                  <span className={styles.accTitle}>{m.name}</span>
                  <span className={styles.chevron} aria-hidden="true" />
                </button>
                <div
                  id={`${baseId}-acc-${i}`}
                  className={styles.accPanel}
                  data-open={i === active}
                >
                  <div className={styles.accPanelInner} inert={i !== active}>
                    <p className={`cw-serif ${styles.role}`}>{m.role}</p>
                    <p className={styles.usesLabel}>Ce que ça permet</p>
                    <ul className={styles.uses}>
                      {m.uses.map((u) => (
                        <li key={u}>{u}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className={styles.framing}>{systemIntro.framing}</p>
          <Link href={systemCta.href} className={styles.cta}>
            {systemCta.label} →
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
