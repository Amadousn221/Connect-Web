import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/Hero';
import { StatsBlock } from '@/components/sections/StatsBlock';
import { LogoStrip } from '@/components/sections/LogoStrip';
import { Differentiators } from '@/components/sections/Differentiators';
import { AudienceRouter } from '@/components/sections/AudienceRouter';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { SystemRoad } from '@/components/sections/SystemRoad';
import { ProjectSlider } from '@/components/sections/ProjectSlider';
import { MethodStepper } from '@/components/sections/MethodStepper';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { FinalCtaContact } from '@/components/sections/FinalCtaContact';
import { faqIntro, faqItems, faqOutro } from '@/content/fr/accueil';

// Accueil — P25 (docs/connect-web/connect-web-P25-refonte-accueil-DECISION-
// BRIEF.md §03). Contenu HARDCODÉ, FR uniquement. Discipline de fonds :
// BLANC-DOMINANT, encre (--ink) = ponctuation rare (3 sections max), crème
// (--cream) = repos rare (2 sections max), jamais de damier.
//
// Carte des fonds (12 sections) :
//   01 Hero(ink) · 02 StatsBlock(blanc) · 03 LogoStrip(blanc, collée à 02)
//   · 04 Differentiators(blanc) · 05 AudienceRouter(crème, 1/2)
//   · 06 ServiceGrid(blanc) · 07 SystemRoad(ink, 2/3) · 08 ProjectSlider(blanc)
//   · 09 MethodStepper(crème, 2/2) · 10 ResourcesSection(blanc, conditionnelle)
//   · 11 FaqAccordion(blanc) · 12 FinalCtaContact(ink, 3/3)
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
      <StatsBlock />
      <LogoStrip />
      <Differentiators />
      <AudienceRouter locale={locale} />
      <ServiceGrid locale={locale} />
      <SystemRoad />
      <ProjectSlider locale={locale} />
      <MethodStepper />
      <ResourcesSection />
      <FaqAccordion locale={locale} intro={faqIntro} items={faqItems} outro={faqOutro} />
      <FinalCtaContact />
    </>
  );
}
