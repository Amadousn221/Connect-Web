import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { DeveloppementWordpressPage } from '@/components/sections/developpement-wordpress/DeveloppementWordpressPage';
import { JsonLd } from '@/components/shared/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo/schema';
import { absoluteUrl } from '@/lib/seo/site';
import { wpMeta } from '@/content/fr/developpementWordpress';

// Page « Développement WordPress » — reconstruite depuis le pack de handoff
// (maquette V1, builder unifié, 12 sections). `noindex` CONSERVÉ jusqu'à la
// recette visuelle PO — à lever avec l'ajout au sitemap et à la nav globale.
export const metadata: Metadata = {
  title: { absolute: wpMeta.title },
  description: wpMeta.description,
  alternates: { canonical: absoluteUrl('/services/developpement-wordpress') },
  robots: { index: false, follow: true },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Accueil', url: absoluteUrl('/') },
  { name: 'Services', url: absoluteUrl('/services') },
  {
    name: 'Conception et développement web',
    url: absoluteUrl('/services/conception-et-developpement-web'),
  },
  {
    name: 'Développement WordPress',
    url: absoluteUrl('/services/developpement-wordpress'),
  },
]);

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Développement WordPress',
  serviceType: 'Développement de site WordPress',
  provider: { '@type': 'Organization', name: 'Connect Web' },
  areaServed: 'SN',
  url: absoluteUrl('/services/developpement-wordpress'),
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <DeveloppementWordpressPage locale={locale} />
    </>
  );
}
