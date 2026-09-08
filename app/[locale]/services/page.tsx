import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { ServicesHub } from '@/components/sections/services-hub/ServicesHub';
import { JsonLd } from '@/components/shared/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo/schema';
import { absoluteUrl } from '@/lib/seo/site';
import { hubMeta } from '@/content/fr/servicesHub';

// Hub Services — page d'orientation reconstruite (maquette V6 validée PO,
// 2026-09-08). Les 9 autres routes /services* restent en ServicePlaceholder
// le temps de leur reconstruction.
export const metadata: Metadata = {
  title: { absolute: hubMeta.title },
  description: hubMeta.description,
  alternates: { canonical: absoluteUrl('/services') },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Accueil', url: absoluteUrl('/') },
  { name: 'Services', url: absoluteUrl('/services') },
]);

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
      <ServicesHub locale={locale} />
    </>
  );
}
