import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { isLocale, locales } from '@/lib/i18n/config';
import { localePath } from '@/lib/i18n/routing';
import {
  getBlogPost,
  getBlogSlugs,
  getRelatedPosts,
  getAuthor,
  getRecentResources,
} from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { PortableTextRenderer } from '@/components/shared/PortableTextRenderer';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ArticleHeader } from '@/components/shared/ArticleHeader';
import { KeyPoints } from '@/components/shared/KeyPoints';
import { AuthorCard } from '@/components/shared/AuthorCard';
import { CtaBlockRender } from '@/components/shared/CtaBlockRender';
import { RelatedResourceTeaser } from '@/components/shared/RelatedResourceTeaser';
import { RelatedItems } from '@/components/shared/RelatedItems';
import { Sidebar } from '@/components/shared/Sidebar';
import { JsonLd } from '@/components/shared/JsonLd';
import { CtaBand } from '@/components/ui/CtaBand';
import { extractHeadings } from '@/components/shared/toc';
import { articleJsonLd, breadcrumbJsonLd } from '@/lib/seo/schema';
import { blogArticleCtaBand } from '@/content/fr/blog';

import styles from './page.module.css';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  const title = post.seo?.seoTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const ogSource = post.seo?.ogImage?.asset ? post.seo.ogImage : post.coverImage;
  const ogImage = ogSource?.asset
    ? urlFor(ogSource).width(1200).height(630).fit('crop').auto('format').url()
    : undefined;

  return {
    title,
    description,
    ...(post.seo?.canonicalUrl ? { alternates: { canonical: post.seo.canonicalUrl } } : {}),
    openGraph: {
      type: 'article',
      title,
      description,
      publishedTime: post.publishedAt,
      ...(ogImage ? { images: [{ url: ogImage, width: 1200, height: 630 }] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const post = await getBlogPost(slug);
  if (!post) notFound();

  const isManualRelated = post.manualRelatedPosts.length > 0;
  const [related, author, recentResources] = await Promise.all([
    isManualRelated
      ? Promise.resolve(post.manualRelatedPosts)
      : getRelatedPosts({
          postId: post._id,
          categoryId: post.category?._id ?? null,
          tagIds: post.tags.map((t) => t._id),
        }),
    post.author ? Promise.resolve(post.author) : getAuthor(),
    getRecentResources(3),
  ]);

  // TODO(3.4) : incrémenter `viewCount` ici via un endpoint dédié
  // (`/api/track-view`) appelé côté client après montage — cf. master 3.4 BLOC D.

  const headings = extractHeadings(post.body);
  const blogHref = localePath(locale, '/blog');
  const categoryHref = post.category
    ? `${blogHref}?categorie=${post.category.slug}`
    : undefined;

  const crumbs = [
    { label: 'Accueil', href: localePath(locale, '/') },
    { label: 'Blog', href: blogHref },
    ...(post.category ? [{ label: post.category.title, href: categoryHref }] : []),
    { label: post.title },
  ];

  const canonicalPath = localePath(locale, `/blog/${post.slug}`);
  const coverUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(630).fit('crop').url()
    : null;

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            headline: post.title,
            description: post.excerpt,
            url: canonicalPath,
            imageUrl: coverUrl,
            datePublished: post.publishedAt,
            dateModified: post._updatedAt,
            authorName: author?.name,
          }),
          breadcrumbJsonLd(
            crumbs
              .filter((c) => c.href)
              .map((c) => ({ name: c.label, url: c.href as string })),
          ),
        ]}
      />

      <div className={`cw-sec ${styles.crumbWrap}`}>
        <Breadcrumb items={crumbs} />
      </div>

      <div className={`cw-sec ${styles.layout}`}>
        <article className={styles.article}>
          <ArticleHeader post={post} />
          <KeyPoints points={post.keyPoints} />

          <div data-pt-content>
            <PortableTextRenderer value={post.body} />
          </div>

          <RelatedResourceTeaser resources={post.relatedResource} locale={locale} />

          {post.relatedCaseStudy ? (
            <div className={styles.caseStudy}>
              <p className={styles.caseStudyLabel}>Cas d&apos;étude</p>
              <p className={`cw-serif ${styles.caseStudyTitle}`}>{post.relatedCaseStudy.title}</p>
              {post.relatedCaseStudy.client ? (
                <p className={styles.caseStudyClient}>{post.relatedCaseStudy.client}</p>
              ) : null}
              {/* Les fiches /realisations/[slug] n'existent pas encore (M3) :
                  on renvoie vers le hub. */}
              <a href={localePath(locale, '/realisations')} className={styles.caseStudyLink}>
                Voir nos réalisations <span aria-hidden="true">→</span>
              </a>
            </div>
          ) : null}

          <CtaBlockRender cta={post.mainCta} locale={locale} />

          <AuthorCard author={author} />

          <RelatedItems
            type="posts"
            items={related}
            locale={locale}
            minItems={isManualRelated ? 1 : 3}
            title={isManualRelated ? 'À lire aussi' : undefined}
          />
        </article>

        <Sidebar
          context="blog-post"
          locale={locale}
          data={{
            tocHeadings: headings,
            recommendedResource: post.relatedResource[0] ?? null,
            recentResources,
          }}
        />
      </div>

      <div className={styles.ctaBand}>
        <div className="cw-sec">
          <CtaBand
            title={blogArticleCtaBand.title}
            body={blogArticleCtaBand.body}
            primary={{
              ...blogArticleCtaBand.primary,
              href: localePath(locale, blogArticleCtaBand.primary.href),
            }}
            secondary={{
              ...blogArticleCtaBand.secondary,
              href: localePath(locale, blogArticleCtaBand.secondary.href),
            }}
          />
        </div>
      </div>
    </>
  );
}
