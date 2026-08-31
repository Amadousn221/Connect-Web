import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { RealisationsPage } from '@/components/sections/RealisationsPage';
import { realisationsMeta } from '@/content/fr/realisations';

export const metadata: Metadata = {
  title: realisationsMeta.title,
  description: realisationsMeta.description,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <RealisationsPage locale={locale} />;
}
