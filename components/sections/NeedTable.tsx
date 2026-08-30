import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { besoinsIntro, besoinsRows, besoinsCta } from '@/content/fr/besoins';
import styles from './NeedTable.module.css';

// A3 — Vos besoins (Lot C). Tableau statique 2 colonnes en desktop, blocs
// empilés en mobile (§06.3). On part du problème, pas du catalogue.
export function NeedTable() {
  return (
    <section id="besoins" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={besoinsIntro.eyebrow}
            title={besoinsIntro.title}
            lead={besoinsIntro.lead}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Vous voulez…</th>
                <th scope="col">Nous construisons…</th>
              </tr>
            </thead>
            <tbody>
              {besoinsRows.map((row) => (
                <tr key={row.want}>
                  <th scope="row" className={styles.want}>
                    {row.want}
                  </th>
                  <td className={styles.build}>
                    {row.build}{' '}
                    <span className={styles.service}>
                      — <i>{row.service}</i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className={styles.cta}>
            <Link href={besoinsCta.href}>
              {besoinsCta.label} <span aria-hidden="true">→</span>
            </Link>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
