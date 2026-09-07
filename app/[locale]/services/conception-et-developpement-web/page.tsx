import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { ConceptionWebPage } from '@/components/sections/ConceptionWebPage';
import { conceptionWebMeta } from '@/content/fr/conceptionWeb';

export const metadata: Metadata = {
  title: conceptionWebMeta.title,
  description: conceptionWebMeta.description,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ConceptionWebPage locale={locale} />;
}
