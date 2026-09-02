import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { isLocale } from '@/lib/i18n/config';
import { localePath } from '@/lib/i18n/routing';
import {
  getBlogIndex,
  getBlogCategoriesWithCount,
  getTopTags,
  getPopularPosts,
  getRecentResources,
} from '@/sanity/lib/queries';
import { BLOG_PER_PAGE } from '@/sanity/lib/constants';
import { BlogCard } from '@/components/shared/BlogCard';
import { CatalogHero } from '@/components/shared/CatalogHero';
import { FilterBar } from '@/components/shared/FilterBar';
import { Pagination } from '@/components/shared/Pagination';
import { EmptyState } from '@/components/shared/EmptyState';
import { Sidebar } from '@/components/shared/Sidebar';
import { CtaBand } from '@/components/ui/CtaBand';
import {
  blogMeta,
  blogHero,
  blogEmpty,
  blogNoResults,
  blogCtaBand,
  BLOG_SORTS,
} from '@/content/fr/blog';

import styles from './page.module.css';

export const revalidate = 60;

type SearchParams = Record<string, string | string[] | undefined>;

function firstValue(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const { locale } = await params;
  const sp = await searchParams;
  const categorySlug = firstValue(sp.categorie) ?? null;
  const tagSlug = firstValue(sp.tag) ?? null;

  let title = blogMeta.title;
  if (categorySlug) {
    const categories = await getBlogCategoriesWithCount();
    const match = categories.find((c) => c.slug === categorySlug);
    if (match) title = `${blogMeta.title} · ${match.title}`;
  } else if (tagSlug) {
    title = `${blogMeta.title} · #${tagSlug}`;
  }

  const canonical = buildCanonical(locale, { categorie: categorySlug, tag: tagSlug });

  return {
    title,
    description: blogMeta.description,
    alternates: { canonical },
    openGraph: { title, description: blogMeta.description, type: 'website' },
  };
}

function buildCanonical(
  locale: string,
  filters: Record<string, string | null>,
): string {
  const base = isLocale(locale) ? localePath(locale, '/blog') : '/blog';
  const qs = new URLSearchParams();
  for (const [k, v] of Object.entries(filters)) if (v) qs.set(k, v);
  const s = qs.toString();
  return s ? `${base}?${s}` : base;
}

export default async function BlogIndexPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const sp = await searchParams;

  const categorySlug = firstValue(sp.categorie) ?? null;
  const tagSlug = firstValue(sp.tag) ?? null;
  const sortParam = firstValue(sp.tri);
  const orderBy = BLOG_SORTS.find((s) => s.param === sortParam)?.value ?? 'recent';
  const page = Math.max(1, Number.parseInt(firstValue(sp.page) ?? '1', 10) || 1);

  const [index, categories, tags, popularPosts, recentResources] = await Promise.all([
    getBlogIndex({ categorySlug, tagSlug, orderBy, page, perPage: BLOG_PER_PAGE }),
    getBlogCategoriesWithCount(),
    getTopTags(24),
    getPopularPosts(5),
    getRecentResources(3),
  ]);

  const totalPages = Math.max(1, Math.ceil(index.total / BLOG_PER_PAGE));
  const hasAnyContent = index.total > 0 || categorySlug !== null || tagSlug !== null;

  const makeHref = (target: number) => {
    const qs = new URLSearchParams();
    if (categorySlug) qs.set('categorie', categorySlug);
    if (tagSlug) qs.set('tag', tagSlug);
    if (sortParam) qs.set('tri', sortParam);
    if (target > 1) qs.set('page', String(target));
    const s = qs.toString();
    return s ? `${localePath(locale, '/blog')}?${s}` : localePath(locale, '/blog');
  };

  return (
    <>
      <CatalogHero eyebrow={blogHero.eyebrow} title={blogHero.title} subtitle={blogHero.subtitle} />

      {hasAnyContent ? (
        <Suspense fallback={null}>
          <FilterBar
            resultCount={index.total}
            resultNoun="article"
            sort={{
              param: 'tri',
              defaultValue: 'recents',
              options: BLOG_SORTS.map((s) => ({ value: s.param, label: s.label })),
            }}
            groups={[
              {
                param: 'categorie',
                label: 'Catégorie',
                allLabel: 'Toutes',
                options: categories.map((c) => ({ value: c.slug, label: c.title, count: c.count })),
              },
              {
                param: 'tag',
                label: 'Tag',
                allLabel: 'Tous',
                collapseAfter: 12,
                options: tags.map((t) => ({ value: t.slug, label: t.title })),
              },
            ]}
          />
        </Suspense>
      ) : null}

      <div className={`cw-sec ${styles.layout}`}>
        <div className={styles.main}>
          {index.items.length > 0 ? (
            <div className={styles.grid}>
              {index.items.map((post) => (
                <BlogCard key={post._id} post={post} locale={locale} />
              ))}
            </div>
          ) : index.total === 0 && categorySlug === null && tagSlug === null ? (
            <EmptyState title={blogEmpty.title} body={blogEmpty.body} cta={blogEmpty.cta} />
          ) : (
            <EmptyState title={blogNoResults.title} body={blogNoResults.body} />
          )}

          <Pagination currentPage={page} totalPages={totalPages} makeHref={makeHref} />
        </div>

        <Sidebar
          context="blog-index"
          locale={locale}
          data={{ popularPosts, blogCategories: categories, recentResources }}
        />
      </div>

      <div className={styles.ctaBand}>
        <div className="cw-sec">
          <CtaBand
            title={blogCtaBand.title}
            body={blogCtaBand.body}
            primary={{ ...blogCtaBand.primary, href: localePath(locale, blogCtaBand.primary.href) }}
            secondary={{
              ...blogCtaBand.secondary,
              href: localePath(locale, blogCtaBand.secondary.href),
            }}
          />
        </div>
      </div>
    </>
  );
}
