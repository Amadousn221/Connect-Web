import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { isLocale } from '@/lib/i18n/config';
import { localePath } from '@/lib/i18n/routing';
import {
  getResourceIndex,
  getResourceCategoriesWithCount,
  getResourceTypeCounts,
  getTopDownloaded,
  getRecentPosts,
} from '@/sanity/lib/queries';
import { RESOURCE_PER_PAGE, RESOURCE_TYPE_LABELS } from '@/sanity/lib/constants';
import type { ResourceType } from '@/sanity/lib/types';
import { ResourceCard } from '@/components/shared/ResourceCard';
import { CatalogHero } from '@/components/shared/CatalogHero';
import { FilterBar } from '@/components/shared/FilterBar';
import { Pagination } from '@/components/shared/Pagination';
import { EmptyState } from '@/components/shared/EmptyState';
import { Sidebar } from '@/components/shared/Sidebar';
import { CtaBand } from '@/components/ui/CtaBand';
import {
  ressourcesMeta,
  ressourcesHero,
  ressourcesEmpty,
  ressourcesNoResults,
  ressourcesCtaBand,
  RESOURCE_SORTS,
} from '@/content/fr/ressources';

import styles from './page.module.css';

export const revalidate = 60;

type SearchParams = Record<string, string | string[] | undefined>;

function firstValue(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

const RESOURCE_TYPE_ORDER = Object.keys(RESOURCE_TYPE_LABELS) as ResourceType[];

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const { locale } = await params;
  const sp = await searchParams;
  const categorySlug = firstValue(sp.thematique) ?? null;
  const rawType = firstValue(sp.type) ?? null;
  const type =
    rawType && RESOURCE_TYPE_ORDER.includes(rawType as ResourceType) ? (rawType as ResourceType) : null;

  let title = ressourcesMeta.title;
  if (categorySlug) {
    const categories = await getResourceCategoriesWithCount();
    const match = categories.find((c) => c.slug === categorySlug);
    if (match) title = `${ressourcesMeta.title} · ${match.title}`;
  } else if (type) {
    title = `${ressourcesMeta.title} · ${RESOURCE_TYPE_LABELS[type]}`;
  }

  const base = isLocale(locale) ? localePath(locale, '/ressources') : '/ressources';
  const qs = new URLSearchParams();
  if (categorySlug) qs.set('thematique', categorySlug);
  if (type) qs.set('type', type);
  const s = qs.toString();

  return {
    title,
    description: ressourcesMeta.description,
    alternates: { canonical: s ? `${base}?${s}` : base },
    openGraph: { title, description: ressourcesMeta.description, type: 'website' },
  };
}

export default async function ResourcesIndexPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const sp = await searchParams;

  const categorySlug = firstValue(sp.thematique) ?? null;
  const rawType = firstValue(sp.type) ?? null;
  const resourceType = (
    rawType && RESOURCE_TYPE_ORDER.includes(rawType as ResourceType) ? rawType : null
  ) as ResourceType | null;
  const sortParam = firstValue(sp.tri);
  const orderBy = RESOURCE_SORTS.find((s) => s.param === sortParam)?.value ?? 'recent';
  const page = Math.max(1, Number.parseInt(firstValue(sp.page) ?? '1', 10) || 1);

  const [index, categories, typeCounts, topDownloaded, recentPosts] = await Promise.all([
    getResourceIndex({
      categorySlug,
      resourceType,
      orderBy,
      page,
      perPage: RESOURCE_PER_PAGE,
    }),
    getResourceCategoriesWithCount(),
    getResourceTypeCounts(),
    getTopDownloaded(5),
    getRecentPosts(3),
  ]);

  const totalPages = Math.max(1, Math.ceil(index.total / RESOURCE_PER_PAGE));
  const countByType = new Map(typeCounts.map((t) => [t.resourceType, t.count]));
  const hasFilters = categorySlug !== null || resourceType !== null;

  const makeHref = (target: number) => {
    const qs = new URLSearchParams();
    if (categorySlug) qs.set('thematique', categorySlug);
    if (resourceType) qs.set('type', resourceType);
    if (sortParam) qs.set('tri', sortParam);
    if (target > 1) qs.set('page', String(target));
    const s = qs.toString();
    return s ? `${localePath(locale, '/ressources')}?${s}` : localePath(locale, '/ressources');
  };

  return (
    <>
      <CatalogHero
        eyebrow={ressourcesHero.eyebrow}
        title={ressourcesHero.title}
        subtitle={ressourcesHero.subtitle}
      />

      {index.total > 0 || hasFilters ? (
        <FilterBar
          resultCount={index.total}
          resultNoun="ressource"
          sort={{
            param: 'tri',
            defaultValue: 'recentes',
            options: RESOURCE_SORTS.map((s) => ({ value: s.param, label: s.label })),
          }}
          groups={[
            {
              param: 'thematique',
              label: 'Thématique',
              allLabel: 'Toutes',
              options: categories.map((c) => ({ value: c.slug, label: c.title, count: c.count })),
            },
            {
              param: 'type',
              label: 'Type',
              allLabel: 'Tous',
              options: RESOURCE_TYPE_ORDER.map((t) => ({
                value: t,
                label: RESOURCE_TYPE_LABELS[t],
                count: countByType.get(t) ?? 0,
              })),
            },
          ]}
        />
      ) : null}

      <div className={`cw-sec ${styles.layout}`}>
        <div className={styles.main}>
          {index.items.length > 0 ? (
            <div className={styles.grid}>
              {index.items.map((resource) => (
                <ResourceCard key={resource._id} resource={resource} locale={locale} />
              ))}
            </div>
          ) : !hasFilters ? (
            <EmptyState
              title={ressourcesEmpty.title}
              body={ressourcesEmpty.body}
              cta={ressourcesEmpty.cta}
            />
          ) : (
            <EmptyState title={ressourcesNoResults.title} body={ressourcesNoResults.body} />
          )}

          <Pagination currentPage={page} totalPages={totalPages} makeHref={makeHref} />
        </div>

        <Sidebar
          context="resource-index"
          locale={locale}
          data={{ topDownloaded, resourceTypeCounts: typeCounts, recentPosts }}
        />
      </div>

      <div className={styles.ctaBand}>
        <div className="cw-sec">
          <CtaBand
            title={ressourcesCtaBand.title}
            body={ressourcesCtaBand.body}
            primary={{
              ...ressourcesCtaBand.primary,
              href: localePath(locale, ressourcesCtaBand.primary.href),
            }}
            secondary={{
              ...ressourcesCtaBand.secondary,
              href: localePath(locale, ressourcesCtaBand.secondary.href),
            }}
          />
        </div>
      </div>
    </>
  );
}
