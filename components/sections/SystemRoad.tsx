import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { systemRoadIntro, systemRoadModules, systemRoadProofs } from '@/content/fr/systemRoad';
import styles from './SystemRoad.module.css';

// P25 S07 — « Du site au système ». Remplace l'ancienne grille statique
// besoin→solution→exemple par une chaîne de modules reliés (SITE → CRM/ERP →
// E-COMMERCE → OUTILS MÉTIER → AUTOMATISATION → SYSTÈME), révélation
// séquentielle légère au scroll. Ancrée par 2 preuves réelles ; résultat en
// placeholder balisé explicite tant qu'aucun chiffre n'est confirmé (jamais
// inventé) — cf. plan P25 §2/§6.
export function SystemRoad() {
  return (
    <section id="systeme" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={systemRoadIntro.eyebrow}
            title={systemRoadIntro.title}
            lead={systemRoadIntro.lead}
            tone="on-dark"
          />
        </RevealOnScroll>

        <div className={styles.chain}>
          {systemRoadModules.map((m, i) => (
            <RevealOnScroll key={m.key} className={styles.moduleWrap} delay={i * 70}>
              <span className={styles.module}>{m.label}</span>
              {i < systemRoadModules.length - 1 ? (
                <span className={styles.connector} aria-hidden="true" />
              ) : null}
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className={styles.proofs}>
          {systemRoadProofs.map((p) => (
            <div key={p.client} className={styles.proof}>
              <p className={styles.proofClient}>{p.client}</p>
              <p className={styles.proofChain}>{p.chain}</p>
              <p className={styles.proofResult}>{p.result ?? '[RÉSULTAT — à confirmer]'}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
