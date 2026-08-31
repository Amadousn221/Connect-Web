import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { RessourcesPage } from '@/components/sections/RessourcesPage';
import { ressourcesMeta } from '@/content/fr/ressources';

export const metadata: Metadata = {
  title: ressourcesMeta.title,
  description: ressourcesMeta.description,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <RessourcesPage locale={locale} />;
}
