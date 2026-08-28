import Link from 'next/link';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import {
  trajectoriesLabel,
  trajectories,
  trajectoriesLink,
} from '@/content/fr/accueil';
import styles from './TrajectoryGrid.module.css';

// A7 — Trajectoires (4 cartes « X → Y → Z »), suite de la section pétrole nuit.
export function TrajectoryGrid({ locale }: { locale: Locale }) {
  return (
    <section id="trajectoires" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <p className={styles.label}>{trajectoriesLabel}</p>
          <div className={styles.grid}>
            {trajectories.map((t) => (
              <div key={t.chain.join('-')} className={styles.cell}>
                <p className={styles.chain}>
                  {t.chain.map((step, i) => (
                    <span key={i}>
                      {step}
                      {i < t.chain.length - 1 ? (
                        <span aria-hidden="true" className={styles.arrow}>
                          {' '}
                          →{' '}
                        </span>
                      ) : null}
                    </span>
                  ))}
                </p>
                <p className={styles.body}>{t.body}</p>
              </div>
            ))}
          </div>
          <div className={styles.link}>
            <Link href={localePath(locale, trajectoriesLink.href)}>
              {trajectoriesLink.label} →
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
