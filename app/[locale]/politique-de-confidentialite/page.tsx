import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { LegalPage } from '@/components/sections/LegalPage';
import { politiqueConfidentialite as content } from '@/content/fr/legal';

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalPage locale={locale} content={content} />;
}
