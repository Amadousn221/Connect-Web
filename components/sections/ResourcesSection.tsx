import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { resourcesEnabled } from '@/lib/flags';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import { getRecentPosts, getRecentResources } from '@/sanity/lib/queries';
import styles from './ResourcesSection.module.css';

// S10 — Ressources (Refonte Accueil, brief §04-S10 / D31).
// Section éditoriale premium, 3 entrées max. LIVRÉE MAIS MASQUÉE :
//   1. le flag `resourcesEnabled()` doit être explicitement activé,
//   2. il faut au moins 2 contenus réels publiés (Sanity).
// Sinon → rend `null`, rien ne se déséquilibre (la FAQ suit directement).
// Aucun titre placeholder n'est jamais rendu.

type Item = {
  key: string;
  href: string;
  category: string | null;
  title: string;
  excerpt: string;
  date: string;
  meta: string | null;
};

const dateFmt = new Intl.DateTimeFormat('fr-FR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export async function ResourcesSection({ locale }: { locale: Locale }) {
  if (!resourcesEnabled()) return null;

  const [posts, resources] = await Promise.all([
    getRecentPosts(3).catch(() => []),
    getRecentResources(3).catch(() => []),
  ]);

  const items: Item[] = [
    ...posts.map((p) => ({
      key: p._id,
      href: localePath(locale, `/blog/${p.slug}`),
      category: p.category?.title ?? 'Article',
      title: p.title,
      excerpt: p.excerpt,
      date: p.publishedAt,
      meta: p.readingTime ? `${p.readingTime} min de lecture` : null,
    })),
    ...resources.map((r) => ({
      key: r._id,
      href: localePath(locale, `/ressources/${r.slug}`),
      category: r.category?.title ?? 'Ressource',
      title: r.title,
      excerpt: r.excerpt,
      date: r.publishedAt,
      meta: r.pagesOrDuration ?? null,
    })),
  ]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 3);

  if (items.length < 2) return null;

  return (
    <section id="ressources" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Ressources"
            title="Comprendre le digital, sans jargon."
          />
        </RevealOnScroll>

        <RevealOnScroll className={styles.list}>
          {items.map((item) => (
            <Link key={item.key} href={item.href} className={styles.row}>
              <span className={styles.meta}>
                {item.category ? <span>{item.category}</span> : null}
                <span>{dateFmt.format(new Date(item.date))}</span>
                {item.meta ? <span>{item.meta}</span> : null}
              </span>
              <h3 className={`cw-serif ${styles.title}`}>{item.title}</h3>
              <p className={styles.excerpt}>{item.excerpt}</p>
              <span className={styles.arrow} aria-hidden="true">
                Lire →
              </span>
            </Link>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
