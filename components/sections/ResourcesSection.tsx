import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { resourcesEnabled, resourcesSectionIntro, resourcesArticles } from '@/content/fr/resourcesSection';
import styles from './ResourcesSection.module.css';

// P25 S10 — Ressources, conditionnelle. `resourcesEnabled` est un flag manuel
// (content/fr/resourcesSection.ts) — pas de CMS sur l'Accueil (P25 §08).
// Ne rend RIEN tant que < 2 vrais articles n'existent : la FAQ suit alors
// directement la Méthode, sans creux visuel.
export function ResourcesSection() {
  if (!resourcesEnabled || resourcesArticles.length < 2) return null;

  return (
    <section className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading eyebrow={resourcesSectionIntro.eyebrow} title={resourcesSectionIntro.title} />
        </RevealOnScroll>

        <RevealOnScroll className={styles.grid}>
          {resourcesArticles.slice(0, 3).map((a) => (
            <Link key={a.href} href={a.href} className={styles.card}>
              <span className={styles.category}>{a.category}</span>
              <h3 className={`cw-serif ${styles.title}`}>{a.title}</h3>
              <p className={styles.excerpt}>{a.excerpt}</p>
              <p className={styles.meta}>
                {a.date} · {a.readTime}
              </p>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
