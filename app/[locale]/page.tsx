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
import { FinalCta } from '@/components/sections/FinalCta';
import { faqIntro, faqItems, faqOutro } from '@/content/fr/accueil';

// Accueil — refonte V2.1 (Design Handoff), contenu HARDCODÉ, FR uniquement.
// Ordre §04 : Hero · Bande logos · Vos besoins · Wedge · Services · Cas phares ·
// Chiffres · Du site au système · Méthode · Pour qui · FAQ · CTA + contact.
// Lots A/B/C/D livrés. Homepage V2.1 complète.

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
      <FinalCta />
    </>
  );
}
