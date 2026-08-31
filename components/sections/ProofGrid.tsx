import type { ReactNode } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { UsersIcon, ImageFrameIcon, ShieldCheckIcon } from '@/components/ui/icons';
import { proofIntro, proofItems } from '@/content/fr/accueil';
import type { ProofItem } from '@/content/types';
import styles from './ProofGrid.module.css';

// A9 — Preuve. Angle unique : la VÉRIFIABILITÉ. Vague 4 : 3 piliers en colonnes,
// une icône fonctionnelle chacun, composition aérée. Rien d'inventé.
const ICON: Record<ProofItem['icon'], ReactNode> = {
  users: <UsersIcon />,
  image: <ImageFrameIcon />,
  shield: <ShieldCheckIcon />,
};

const LABEL: Record<ProofItem['icon'], string> = {
  users: 'Clients',
  image: 'Captures',
  shield: 'Chiffres',
};

export function ProofGrid() {
  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={proofIntro.eyebrow}
            title={proofIntro.title}
            lead={proofIntro.lead}
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {proofItems.map((item) => (
            <div key={item.title} className={styles.cell}>
              <span
                className={styles.icon}
                role="img"
                aria-label={LABEL[item.icon]}
              >
                {ICON[item.icon]}
              </span>
              <p className={`cw-serif ${styles.title}`}>{item.title}</p>
              <p className={`cw-prose ${styles.body}`}>{item.body}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
