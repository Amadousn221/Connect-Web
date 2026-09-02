import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { resourceTypeLabel } from '@/sanity/lib/constants';
import type {
  BlogPostCard as BlogPostCardData,
  CategoryWithCount,
  ResourceCardData,
  ResourceType,
} from '@/sanity/lib/types';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';

import { TableOfContents } from './TableOfContents';
import type { TocHeading } from './toc';
import styles from './Sidebar.module.css';

// À propos — 2-3 lignes, cohérent avec content/fr/agence.ts (spec §8.1).
const ABOUT_TEXT =
  "Connect Web est un studio digital basé à Dakar. On conçoit et on connecte les sites, boutiques et outils numériques des organisations d'Afrique de l'Ouest — du premier site à l'automatisation complète.";

// TODO(PO) : URL de la page LinkedIn Connect Web à fournir (décision fin Étape 2 :
// seul LinkedIn Connect Web dans la sidebar). Tant qu'elle est absente, le bloc
// « Suivez-nous » n'est pas rendu — jamais d'URL bidon.
const LINKEDIN_URL: string | null = null;

export type SidebarContext = 'blog-index' | 'blog-post' | 'resource-index' | 'resource-page';

export type SidebarData = {
  /** blog-index */
  popularPosts?: BlogPostCardData[];
  blogCategories?: CategoryWithCount[];
  recentResources?: ResourceCardData[];
  /** blog-post */
  tocHeadings?: TocHeading[];
  recommendedResource?: ResourceCardData | null;
  /** resource-index */
  topDownloaded?: ResourceCardData[];
  resourceTypeCounts?: { resourceType: ResourceType; count: number }[];
  recentPosts?: BlogPostCardData[];
  /** resource-page */
  otherResources?: ResourceCardData[];
  relatedPosts?: BlogPostCardData[];
};

/**
 * Sidebar variable selon le contexte (spec §8). Purement présentationnelle :
 * la page serveur récupère les données (`SidebarData`) et les passe ici.
 * Desktop ≥1024px : sticky partielle. Tablette : blocs en ligne. Mobile :
 * empilée, CTA en premier.
 */
export function Sidebar({
  context,
  data,
  locale,
}: {
  context: SidebarContext;
  data: SidebarData;
  locale: Locale;
}) {
  return (
    <aside className={styles.sidebar} data-context={context}>
      <div className={styles.inner}>
        <SidebarCta locale={locale} />
        <AboutBlock locale={locale} />

        {context === 'blog-post' && data.tocHeadings && data.tocHeadings.length >= 2 ? (
          <Block title="">
            <TableOfContents headings={data.tocHeadings} />
          </Block>
        ) : null}

        {context === 'blog-post' && data.recommendedResource ? (
          <Block title="Ressource recommandée">
            <LinkList items={[resourceRow(data.recommendedResource, locale)]} />
          </Block>
        ) : null}

        {context === 'blog-post' && data.recentResources && data.recentResources.length > 0 ? (
          <Block title="Ressources à consulter">
            <LinkList items={data.recentResources.map((r) => resourceRow(r, locale))} />
          </Block>
        ) : null}

        {context === 'blog-index' ? (
          <>
            {data.popularPosts && data.popularPosts.length > 0 ? (
              <Block title="Articles populaires">
                <LinkList items={data.popularPosts.map((p) => postRow(p, locale))} />
              </Block>
            ) : null}
            {data.blogCategories && data.blogCategories.length > 0 ? (
              <Block title="Catégories">
                <CountList
                  items={data.blogCategories.map((c) => ({
                    key: c._id,
                    href: localePath(locale, `/blog?categorie=${c.slug}`),
                    label: c.title,
                    count: c.count,
                  }))}
                />
              </Block>
            ) : null}
            {data.recentResources && data.recentResources.length > 0 ? (
              <Block title="Ressources à consulter">
                <LinkList items={data.recentResources.map((r) => resourceRow(r, locale))} />
              </Block>
            ) : null}
          </>
        ) : null}

        {context === 'resource-index' ? (
          <>
            {data.topDownloaded && data.topDownloaded.length > 0 ? (
              <Block title="Les plus téléchargées">
                <LinkList items={data.topDownloaded.map((r) => resourceRow(r, locale))} />
              </Block>
            ) : null}
            {data.resourceTypeCounts && data.resourceTypeCounts.length > 0 ? (
              <Block title="Types de ressources">
                <CountList
                  items={data.resourceTypeCounts.map((t) => ({
                    key: t.resourceType,
                    href: localePath(locale, `/ressources?type=${t.resourceType}`),
                    label: resourceTypeLabel(t.resourceType),
                    count: t.count,
                  }))}
                />
              </Block>
            ) : null}
            {data.recentPosts && data.recentPosts.length > 0 ? (
              <Block title="Articles récents">
                <LinkList items={data.recentPosts.map((p) => postRow(p, locale))} />
              </Block>
            ) : null}
          </>
        ) : null}

        {context === 'resource-page' ? (
          <>
            {data.otherResources && data.otherResources.length > 0 ? (
              <Block title="Autres ressources de cette thématique">
                <LinkList items={data.otherResources.map((r) => resourceRow(r, locale))} />
              </Block>
            ) : null}
            {data.relatedPosts && data.relatedPosts.length > 0 ? (
              <Block title="Articles liés">
                <LinkList items={data.relatedPosts.map((p) => postRow(p, locale))} />
              </Block>
            ) : null}
            {data.recentPosts && data.recentPosts.length > 0 ? (
              <Block title="Articles récents">
                <LinkList items={data.recentPosts.map((p) => postRow(p, locale))} />
              </Block>
            ) : null}
          </>
        ) : null}

        {LINKEDIN_URL ? <SocialBlock url={LINKEDIN_URL} /> : null}
      </div>
    </aside>
  );
}

// ── Blocs ────────────────────────────────────────────────────────────────

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={styles.block}>
      {title ? <h2 className={styles.blockTitle}>{title}</h2> : null}
      {children}
    </section>
  );
}

function SidebarCta({ locale }: { locale: Locale }) {
  return (
    <section className={`${styles.block} ${styles.cta}`}>
      <p className={styles.ctaTitle}>Un projet à démarrer&nbsp;?</p>
      <p className={styles.ctaText}>
        On revient vers vous sous 24&nbsp;h, avec un premier cadrage.
      </p>
      <Button href={localePath(locale, '/#contact')} variant="primary" size="sm">
        Parlons-en
      </Button>
    </section>
  );
}

function AboutBlock({ locale }: { locale: Locale }) {
  return (
    <section className={styles.block}>
      <h2 className={styles.blockTitle}>À propos</h2>
      <p className={styles.aboutText}>{ABOUT_TEXT}</p>
      <Link href={localePath(locale, '/agence')} className={styles.aboutLink}>
        En savoir plus sur l&apos;agence <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}

function SocialBlock({ url }: { url: string }) {
  return (
    <section className={styles.block}>
      <h2 className={styles.blockTitle}>Suivez-nous</h2>
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.aboutLink}>
        LinkedIn <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}

// ── Listes compactes ─────────────────────────────────────────────────────

type Row = { key: string; href: string; label: string; sub?: string };

function LinkList({ items }: { items: Row[] }) {
  return (
    <ul className={styles.linkList}>
      {items.map((row) => (
        <li key={row.key}>
          <Link href={row.href} className={styles.rowLink}>
            <span className={styles.rowLabel}>{row.label}</span>
            {row.sub ? <span className={styles.rowSub}>{row.sub}</span> : null}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function CountList({
  items,
}: {
  items: { key: string; href: string; label: string; count: number }[];
}) {
  return (
    <ul className={styles.countList}>
      {items.map((row) => (
        <li key={row.key}>
          <Link href={row.href} className={styles.countRow}>
            <span>{row.label}</span>
            <span className={styles.count}>{row.count}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function postRow(post: BlogPostCardData, locale: Locale): Row {
  return {
    key: post._id,
    href: localePath(locale, `/blog/${post.slug}`),
    label: post.title,
    sub: post.readingTime ? `${post.readingTime} min` : undefined,
  };
}

function resourceRow(resource: ResourceCardData, locale: Locale): Row {
  return {
    key: resource._id,
    href: localePath(locale, `/ressources/${resource.slug}`),
    label: resource.title,
    sub: resourceTypeLabel(resource.resourceType),
  };
}
