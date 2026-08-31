import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/Hero';
import { LogoStrip } from '@/components/sections/LogoStrip';
import { NeedSelector } from '@/components/sections/NeedSelector';
import { Wedge } from '@/components/sections/Wedge';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { ProjectSlider } from '@/components/sections/ProjectSlider';
import { StatsBlock } from '@/components/sections/StatsBlock';
import { SystemNarrative } from '@/components/sections/SystemNarrative';
import { Method } from '@/components/sections/Method';
import { WhoForGrid } from '@/components/sections/WhoForGrid';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ContactSection } from '@/components/sections/ContactSection';
import { faqIntro, faqItems, faqOutro } from '@/content/fr/accueil';

// Accueil — refonte V2.1 (Design Handoff), contenu HARDCODÉ, FR uniquement.
// Sections « Vos besoins » (NeedSelector) et « Contact » (ContactSection)
// restaurées dans leur version d'avant la refonte, à la demande du PO.

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <Hero />
      <LogoStrip />
      <NeedSelector locale={locale} />
      <Wedge />
      <ServiceGrid locale={locale} />
      <ProjectSlider locale={locale} />
      <StatsBlock />
      <SystemNarrative />
      <Method />
      <WhoForGrid />
      <FaqAccordion
        locale={locale}
        intro={faqIntro}
        items={faqItems}
        outro={faqOutro}
      />
      <ContactSection />
    </>
  );
}
