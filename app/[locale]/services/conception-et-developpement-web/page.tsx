import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { ConceptionWebPage } from '@/components/sections/conception-web/ConceptionWebPage';
import { JsonLd } from '@/components/shared/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo/schema';
import { absoluteUrl } from '@/lib/seo/site';
import { cwMeta } from '@/content/fr/conceptionWeb';

// Page parente de l'expertise web — reconstruite depuis le pack de handoff
// CONNECT-WEB-SERVICES-HANDOFF-V1 (Opus + maquette V2, 12 sections).
//
// `noindex` CONSERVÉ le temps de la recette PO (fidélité maquette + QA
// 320/390/768/1024/1440 × clair/sombre non encore contrôlées). À lever par le
// PO à la validation, avec ré-ajout au sitemap (app/sitemap.ts) et à la nav
// globale (site-nav.ts) — voir aussi les 3 routes d'attente créées pour S4/S5
// (developpement-wordpress, developpement-shopify, refonte-site-internet).
export const metadata: Metadata = {
  title: { absolute: cwMeta.title },
  description: cwMeta.description,
  alternates: { canonical: absoluteUrl('/services/conception-et-developpement-web') },
  robots: { index: false, follow: true },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Accueil', url: absoluteUrl('/') },
  { name: 'Services', url: absoluteUrl('/services') },
  {
    name: 'Conception et développement web',
    url: absoluteUrl('/services/conception-et-developpement-web'),
  },
]);

const service = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Conception et développement web',
  serviceType: 'Conception et développement de sites web',
  provider: { '@type': 'Organization', name: 'Connect Web' },
  areaServed: 'SN',
  url: absoluteUrl('/services/conception-et-developpement-web'),
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
      <ConceptionWebPage locale={locale} />
    </>
  );
}
