import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { BoutiquesEnLignePage } from '@/components/sections/boutiques-en-ligne/BoutiquesEnLignePage';
import { JsonLd } from '@/components/shared/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo/schema';
import { absoluteUrl } from '@/lib/seo/site';
import { shopMeta } from '@/content/fr/boutiquesEnLigne';

// Page « Boutiques en ligne » — reconstruite depuis le pack de handoff
// (Opus + maquette V1, 11 sections). `noindex` CONSERVÉ jusqu'à la recette
// visuelle PO — à lever avec l'ajout au sitemap et à la nav.
export const metadata: Metadata = {
  title: { absolute: shopMeta.title },
  description: shopMeta.description,
  alternates: { canonical: absoluteUrl('/services/boutiques-en-ligne') },
  robots: { index: false, follow: true },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Accueil', url: absoluteUrl('/') },
  { name: 'Services', url: absoluteUrl('/services') },
  {
    name: 'Conception et développement web',
    url: absoluteUrl('/services/conception-et-developpement-web'),
  },
  { name: 'Boutiques en ligne', url: absoluteUrl('/services/boutiques-en-ligne') },
]);

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Boutique en ligne',
  serviceType: 'Conception de boutique e-commerce',
  provider: { '@type': 'Organization', name: 'Connect Web' },
  areaServed: 'SN',
  url: absoluteUrl('/services/boutiques-en-ligne'),
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
      <BoutiquesEnLignePage locale={locale} />
    </>
  );
}
