import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { SitesEntreprisePage } from '@/components/sections/SitesEntreprisePage';
import { sitesEntrepriseMeta } from '@/content/fr/sitesEntreprise';

export const metadata: Metadata = {
  title: sitesEntrepriseMeta.title,
  description: sitesEntrepriseMeta.description,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <SitesEntreprisePage locale={locale} />;
}
