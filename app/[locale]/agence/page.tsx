import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { AgencePage } from '@/components/sections/AgencePage';
import { agenceMeta } from '@/content/fr/agence';

export const metadata: Metadata = {
  title: agenceMeta.title,
  description: agenceMeta.description,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <AgencePage locale={locale} />;
}
