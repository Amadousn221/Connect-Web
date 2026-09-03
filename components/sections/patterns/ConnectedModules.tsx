import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import type { ConnectedModulesContent } from '@/content/offres';
import styles from './ConnectedModules.module.css';

// P-CONNECTED (P26 §12) — modules reliés, lisible par un non-technique.
// Signature de la page Odoo/ERP-CRM. Version props-based du squelette
// « chaîne de modules » déjà construit pour SystemRoad (Accueil, P25) —
// même technique (pastilles + filets, révélation séquentielle, repli
// vertical mobile), mais générique : aucun contenu importé en dur.
export function ConnectedModules({ eyebrow, title, lead, modules, proofs }: ConnectedModulesContent) {
  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} tone="on-dark" />
        </RevealOnScroll>

        <div className={styles.chain}>
          {modules.map((m, i) => (
            <RevealOnScroll key={m.key} className={styles.moduleWrap} delay={i * 70}>
              <span className={styles.module}>{m.label}</span>
              {i < modules.length - 1 ? <span className={styles.connector} aria-hidden="true" /> : null}
            </RevealOnScroll>
          ))}
        </div>

        {proofs.length ? (
          <RevealOnScroll className={styles.proofs}>
            {proofs.map((p) => (
              <div key={p.client} className={styles.proof}>
                <p className={styles.proofClient}>{p.client}</p>
                <p className={styles.proofChain}>{p.chain}</p>
                <p className={styles.proofResult}>{p.result ?? '[RÉSULTAT — à confirmer]'}</p>
              </div>
            ))}
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
