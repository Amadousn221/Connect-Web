import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import {
  systemeIntro,
  systemeParagraphs,
  systemeCta,
} from '@/content/fr/systeme';
import styles from './SystemNarrative.module.css';

// A9 — Du site au système (Lot C). Bloc narratif : 2 paragraphes en texte
// suivi + CTA tertiaire (§06.8). id="systeme" conservé (référencé par les
// pages d'offre → /#systeme).
export function SystemNarrative() {
  return (
    <section id="systeme" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll className={styles.inner}>
          <SectionHeading
            eyebrow={systemeIntro.eyebrow}
            title={systemeIntro.title}
          />

          {systemeParagraphs.map((para) => (
            <p key={para.slice(0, 24)} className={styles.para}>
              {para}
            </p>
          ))}

          <p className={styles.cta}>
            <Link href={systemeCta.href}>
              {systemeCta.label} <span aria-hidden="true">→</span>
            </Link>
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
