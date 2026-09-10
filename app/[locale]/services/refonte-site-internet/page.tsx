import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { RefonteSiteInternetPage } from '@/components/sections/refonte-site-internet/RefonteSiteInternetPage';
import { JsonLd } from '@/components/shared/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo/schema';
import { absoluteUrl } from '@/lib/seo/site';
import { refonteMeta } from '@/content/fr/refonteSiteInternet';

// Page « Refonte de site internet » — intégrée depuis la copy Opus
// (EN-ATTENTE-UX, aucune maquette validée). Page enfant de « Conception et
// développement web ». `noindex` CONSERVÉ jusqu'à la recette visuelle PO — à
// lever avec l'ajout au sitemap et à la nav globale.
export const metadata: Metadata = {
  title: { absolute: refonteMeta.title },
  description: refonteMeta.description,
  alternates: { canonical: absoluteUrl('/services/refonte-site-internet') },
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
    name: 'Refonte de site internet',
    url: absoluteUrl('/services/refonte-site-internet'),
  },
]);

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Refonte de site internet',
  serviceType: 'Refonte, migration et modernisation de site web',
  provider: { '@type': 'Organization', name: 'Connect Web' },
  areaServed: 'SN',
  url: absoluteUrl('/services/refonte-site-internet'),
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
      <RefonteSiteInternetPage locale={locale} />
    </>
  );
}
