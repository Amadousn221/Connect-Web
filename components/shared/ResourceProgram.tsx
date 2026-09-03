import type { ProgramItem } from '@/sanity/lib/types';

import styles from './ResourceProgram.module.css';

/** « Au programme » (spec §6.4 Zone 4) + prérequis (Zone 6). */
export function ResourceProgram({
  program,
  prerequisites,
}: {
  program: ProgramItem[];
  prerequisites?: string;
}) {
  return (
    <div className={styles.wrap}>
      {program.length > 0 ? (
        <section className={styles.block}>
          <h2 className={styles.heading}>Au programme</h2>
          <ul className={styles.list}>
            {program.map((item) => (
              <li key={item._key} className={styles.item}>
                <span className={styles.check} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="m3 8.5 3 3 7-7"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {prerequisites ? (
        <section className={styles.block}>
          <h2 className={styles.heading}>Prérequis</h2>
          <p className={styles.prereq}>{prerequisites}</p>
        </section>
      ) : null}
    </div>
  );
}
