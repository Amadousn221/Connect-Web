import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n/config';
import { ContactPage } from '@/components/sections/ContactPage';
import { contactPageMeta } from '@/content/fr/contact';

export const metadata: Metadata = {
  title: contactPageMeta.title,
  description: contactPageMeta.description,
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ContactPage locale={locale} />;
}
