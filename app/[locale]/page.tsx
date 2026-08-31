import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/Hero';
import { StatsBlock } from '@/components/sections/StatsBlock';
import { LogoStrip } from '@/components/sections/LogoStrip';
import { NeedSelector } from '@/components/sections/NeedSelector';
import { Wedge } from '@/components/sections/Wedge';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { ProjectSlider } from '@/components/sections/ProjectSlider';
import { SystemRoad } from '@/components/sections/SystemRoad';
import { TechnoStrip } from '@/components/sections/TechnoStrip';
import { ProofGrid } from '@/components/sections/ProofGrid';
import { Method } from '@/components/sections/Method';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ContactSection } from '@/components/sections/ContactSection';
import { faqIntro, faqItems, faqOutro } from '@/content/fr/accueil';

// Accueil — contenu HARDCODÉ, FR uniquement. Fonds alternés (dark / blanc /
// crème / off-white) — aucune section adjacente de même fond.
// Corrections finales : « Du site au système » fusionne les anciennes sections
// road + trajectoires ; « Pour qui » supprimée.
// Vague 4 : la bande de stats de marché (MarketStats) est supprimée ; la bande
// « En chiffres » (StatsBlock) remonte juste après le Hero. Slider techno ajouté
// après « On montre, on ne prétend pas ». Carte des fonds :
//   Hero(pétrole) · StatsBlock(off-white) · LogoStrip(crème) · NeedSelector(off-white)
//   · Wedge(pétrole) · ServiceGrid(crème) · ProjectSlider(blanc) · SystemRoad(pétrole)
//   · ProofGrid(blanc) · TechnoStrip(crème) · Method(off-white) · FaqAccordion(blanc)
//   · ContactSection(off-white)

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
      <NeedSelector locale={locale} />
      <Wedge />
      <ServiceGrid locale={locale} />
      <ProjectSlider locale={locale} />
      <SystemRoad />
      <ProofGrid />
      <TechnoStrip />
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
