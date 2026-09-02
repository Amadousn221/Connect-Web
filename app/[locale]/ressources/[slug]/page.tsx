import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { isLocale, locales } from '@/lib/i18n/config';
import { localePath } from '@/lib/i18n/routing';
import {
  getResource,
  getResourceSlugs,
  getRelatedResources,
  getAuthor,
  getRecentPosts,
} from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { PortableTextRenderer } from '@/components/shared/PortableTextRenderer';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ResourceHeader } from '@/components/shared/ResourceHeader';
import { ResourceProgram } from '@/components/shared/ResourceProgram';
import { ResourceAccessBlock } from '@/components/shared/ResourceAccessBlock';
import { AuthorCard } from '@/components/shared/AuthorCard';
import { CtaBlockRender } from '@/components/shared/CtaBlockRender';
import { RelatedItems } from '@/components/shared/RelatedItems';
import { Sidebar } from '@/components/shared/Sidebar';
import { JsonLd } from '@/components/shared/JsonLd';
import { CtaBand } from '@/components/ui/CtaBand';
import { articleJsonLd, breadcrumbJsonLd } from '@/lib/seo/schema';
import { ressourceCtaBand } from '@/content/fr/ressources';

import styles from './page.module.css';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getResourceSlugs();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = await getResource(slug);
  if (!resource) return {};

  const title = resource.seo?.seoTitle || resource.title;
  const description = resource.seo?.metaDescription || resource.excerpt;
  const ogSource = resource.seo?.ogImage?.asset ? resource.seo.ogImage : resource.coverImage;
  const ogImage = ogSource?.asset
    ? urlFor(ogSource).width(1200).height(630).fit('crop').auto('format').url()
    : undefined;

  return {
    title,
    description,
    ...(resource.seo?.canonicalUrl ? { alternates: { canonical: resource.seo.canonicalUrl } } : {}),
    openGraph: {
      type: 'article',
      title,
      description,
      publishedTime: resource.publishedAt,
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const resource = await getResource(slug);
  if (!resource) notFound();

  const [similarResources, author, recentPosts] = await Promise.all([
    resource.relatedResources.length > 0
      ? Promise.resolve(resource.relatedResources)
      : getRelatedResources({
          resourceId: resource._id,
          categoryId: resource.category?._id ?? null,
        }),
    resource.author ? Promise.resolve(resource.author) : getAuthor(),
    getRecentPosts(3),
  ]);

  const ressourcesHref = localePath(locale, '/ressources');
  const categoryHref = resource.category
    ? `${ressourcesHref}?thematique=${resource.category.slug}`
    : undefined;

  const crumbs = [
    { label: 'Accueil', href: localePath(locale, '/') },
    { label: 'Ressources', href: ressourcesHref },
    ...(resource.category ? [{ label: resource.category.title, href: categoryHref }] : []),
    { label: resource.title },
  ];

  const canonicalPath = localePath(locale, `/ressources/${resource.slug}`);
  const coverUrl = resource.coverImage?.asset
    ? urlFor(resource.coverImage).width(1200).height(630).fit('crop').url()
    : null;

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            type: 'LearningResource',
            headline: resource.title,
            description: resource.excerpt,
            url: canonicalPath,
            imageUrl: coverUrl,
            datePublished: resource.publishedAt,
            dateModified: resource._updatedAt,
            authorName: author?.name,
          }),
          breadcrumbJsonLd(
            crumbs.filter((c) => c.href).map((c) => ({ name: c.label, url: c.href as string })),
          ),
        ]}
      />

      <div className={`cw-sec ${styles.crumbWrap}`}>
        <Breadcrumb items={crumbs} />
      </div>

      <div className={`cw-sec ${styles.layout}`}>
        <div className={styles.main}>
          <ResourceHeader resource={resource} />
          <ResourceProgram program={resource.program} prerequisites={resource.prerequisites} />

          <div className={styles.body}>
            <PortableTextRenderer value={resource.body} />
          </div>

          <ResourceAccessBlock resource={resource} />

          <CtaBlockRender cta={resource.secondaryCta} locale={locale} />

          <AuthorCard author={author} />

          <RelatedItems type="resources" items={similarResources} locale={locale} />
          <RelatedItems
            type="posts"
            items={resource.relatedPosts}
            locale={locale}
            minItems={1}
            title="Articles liés"
          />
        </div>

        <Sidebar
          context="resource-page"
          locale={locale}
          data={{
            otherResources: similarResources.slice(0, 4),
            relatedPosts: resource.relatedPosts,
            recentPosts,
          }}
        />
      </div>

      <div className={styles.ctaBand}>
        <div className="cw-sec">
          <CtaBand
            title={ressourceCtaBand.title}
            body={ressourceCtaBand.body}
            primary={{
              ...ressourceCtaBand.primary,
              href: localePath(locale, ressourceCtaBand.primary.href),
            }}
            secondary={{
              ...ressourceCtaBand.secondary,
              href: localePath(locale, ressourceCtaBand.secondary.href),
            }}
          />
        </div>
      </div>
    </>
  );
}
