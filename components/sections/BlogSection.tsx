import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { showValidationNotes } from '@/lib/flags';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { getRecentPosts } from '@/sanity/lib/queries';
import type { BlogPostCard as BlogPostCardData } from '@/sanity/lib/types';
import { BlogCard } from '@/components/shared/BlogCard';
import styles from './BlogSection.module.css';

// Section Blog — homepage, entre Méthode et Ressources/FAQ. 3 derniers
// articles publiés (`getRecentPosts`, déjà utilisée par la sidebar
// Ressources — même requête, même cache/revalidation, aucune duplication).
//
// Fond `--ink-deep` (bleu pétrole, fixe) : seul token restant pour alterner
// sans répéter Méthode (ivoire) ni la FAQ qui suit (blanc). Les cartes sont
// forcées en surface claire (`surface="light"`) pour rester lisibles sur ce
// fond quel que soit le thème du site (voir BlogCard.module.css).
//
// Panne Sanity → `getRecentPosts` est déjà catchée : la section se masque
// sans faire échouer la homepage. Zéro article publié → masquée en
// production ; en dev/preview (`showValidationNotes`), un aperçu avec des
// données de démonstration clairement identifiées reste visible, pour que
// l'intégration soit vérifiable avant publication du premier article.
//
// Les cartes de démo ne sont JAMAIS des liens : aucun article réel n'existe
// derrière, donc aucune URL à fabriquer (règle « pas de lien cassé »).

const DEMO_POSTS: { title: string; excerpt: string }[] = [
  {
    title: 'Choisir entre boutique en ligne et plateforme sur-mesure',
    excerpt:
      'Aperçu de démonstration — visible uniquement hors production, en attendant le premier article publié dans Sanity.',
  },
  {
    title: 'Automatiser sans complexifier son CRM',
    excerpt:
      'Aperçu de démonstration — visible uniquement hors production, en attendant le premier article publié dans Sanity.',
  },
  {
    title: "Ce qui rend un site institutionnel crédible",
    excerpt:
      'Aperçu de démonstration — visible uniquement hors production, en attendant le premier article publié dans Sanity.',
  },
];

export async function BlogSection({ locale }: { locale: Locale }) {
  const posts: BlogPostCardData[] = await getRecentPosts(3).catch(() => []);
  const isDemo = posts.length === 0 && showValidationNotes();

  if (posts.length === 0 && !isDemo) return null;

  return (
    <section id="blog" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll className={styles.head}>
          <div className={styles.headText}>
            <Eyebrow tone="on-dark">Le blog</Eyebrow>
            <h2 className={`cw-serif ${styles.title}`}>
              Des repères pour vos projets numériques.
            </h2>
            <p className={styles.lead}>
              Web, e-commerce et automatisation : des conseils concrets pour
              comprendre vos options et faire avancer votre projet.
            </p>
          </div>
          <Link href={localePath(locale, '/blog')} className={styles.allLink}>
            Tous les articles →
          </Link>
        </RevealOnScroll>

        {isDemo ? (
          <ValidationNote variant="box">
            Section Blog masquée en production : aucun article publié dans
            Sanity pour l’instant. Aperçu ci-dessous avec des données de
            démonstration (visibles hors production uniquement, sans lien) —
            publiez au moins un article <code>blogPost</code> pour l’activer.
          </ValidationNote>
        ) : null}

        <RevealOnScroll className={styles.grid}>
          {isDemo
            ? DEMO_POSTS.map((demo) => (
                <article key={demo.title} className={styles.demoCard} aria-hidden="true">
                  <div className={styles.demoMedia} />
                  <div className={styles.demoBody}>
                    <span className={styles.demoBadge}>Aperçu démo — non publié</span>
                    <h3 className={`cw-serif ${styles.demoTitle}`}>{demo.title}</h3>
                    <p className={styles.demoExcerpt}>{demo.excerpt}</p>
                  </div>
                </article>
              ))
            : posts.map((post) => (
                <BlogCard
                  key={post._id}
                  post={post}
                  locale={locale}
                  showReadMore
                  surface="light"
                />
              ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
