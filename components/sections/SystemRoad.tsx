'use client';

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ServiceIcon } from '@/components/ui/service-icons';
import { UsersIcon, BarChartIcon } from '@/components/ui/icons';
import { systemIntro } from '@/content/fr/accueil';
import { systemModules } from '@/content/fr/systemExplorer';
import type { SystemModule } from '@/content/types';
import styles from './SystemRoad.module.css';

// S07 — « Du site au système » (Refonte Accueil, Lot 2). Exploration interactive
// de 5 modules (site/boutique, CRM, ERP, automatisation, reporting).
//   · Desktop (≥ 900px) : rangée de sélecteurs (role=tablist, roving tabindex,
//     flèches, Home/End, focus suivi) + un panneau sous les sélecteurs.
//   · Mobile / tablette (< 900px) : accordéon — le contenu s'ouvre directement
//     sous le sélecteur choisi. Un module toujours actif.
// Crossfade discret (~180 ms) coupé par `prefers-reduced-motion`. Aucun ordre
// technique imposé, aucune référence client.
const ICON: Record<SystemModule['icon'], ReactNode> = {
  web: <ServiceIcon name="web" width={22} height={22} />,
  crm: <UsersIcon width={22} height={22} />,
  erp: <ServiceIcon name="erp" width={22} height={22} />,
  automation: <ServiceIcon name="automation" width={22} height={22} />,
  reporting: <BarChartIcon width={22} height={22} />,
};

function ModuleBody({ m }: { m: SystemModule }) {
  return (
    <>
      <p className={`cw-serif ${styles.role}`}>{m.role}</p>

      <p className={styles.usesLabel}>Ce que ça permet</p>
      <ul className={styles.uses}>
        {m.uses.map((u) => (
          <li key={u}>{u}</li>
        ))}
      </ul>

      <p className={styles.exchange}>
        <span className={styles.exchangeLabel}>Échanges</span>
        {m.exchange}
      </p>
    </>
  );
}

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
          {/* Sélecteurs — desktop */}
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

          {/* Panneau — desktop */}
          <div
            className={styles.panel}
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${active}`}
          >
            <div key={current.key} className={styles.panelInner}>
              <ModuleBody m={current} />
            </div>
          </div>

          {/* Accordéon — mobile / tablette */}
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
                  <span className={styles.accLabel}>{m.name}</span>
                  <span className={styles.chevron} aria-hidden="true" />
                </button>
                <div
                  id={`${baseId}-acc-${i}`}
                  className={styles.accPanel}
                  data-open={i === active}
                >
                  <div className={styles.accPanelInner} inert={i !== active}>
                    <ModuleBody m={m} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <p className={styles.framing}>{systemIntro.framing}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
