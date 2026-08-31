import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/Hero';
import { MarketStats } from '@/components/sections/MarketStats';
import { LogoStrip } from '@/components/sections/LogoStrip';
import { NeedSelector } from '@/components/sections/NeedSelector';
import { Wedge } from '@/components/sections/Wedge';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { ProjectSlider } from '@/components/sections/ProjectSlider';
import { StatsBlock } from '@/components/sections/StatsBlock';
import { SystemRoad } from '@/components/sections/SystemRoad';
import { ProofGrid } from '@/components/sections/ProofGrid';
import { Method } from '@/components/sections/Method';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ContactSection } from '@/components/sections/ContactSection';
import { faqIntro, faqItems, faqOutro } from '@/content/fr/accueil';

// Accueil — contenu HARDCODÉ, FR uniquement. Fonds alternés (dark / blanc /
// crème / off-white) — aucune section adjacente de même fond.
// Corrections finales : « Du site au système » fusionne les anciennes sections
// road + trajectoires ; « Pour qui » supprimée.

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
      <MarketStats />
      <LogoStrip />
      <NeedSelector locale={locale} />
      <Wedge />
      <ServiceGrid locale={locale} />
      <ProjectSlider locale={locale} />
      <StatsBlock />
      <SystemRoad />
      <ProofGrid />
      <Method />
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
