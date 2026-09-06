import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/Hero';
import { StatsBlock } from '@/components/sections/StatsBlock';
import { LogoStrip } from '@/components/sections/LogoStrip';
import { Differentiators } from '@/components/sections/Differentiators';
import { NeedSelector } from '@/components/sections/NeedSelector';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { SystemRoad } from '@/components/sections/SystemRoad';
import { ProjectSlider } from '@/components/sections/ProjectSlider';
import { TechnoStrip } from '@/components/sections/TechnoStrip';
import { Method } from '@/components/sections/Method';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ContactSection } from '@/components/sections/ContactSection';
import { faqIntro, faqItems, faqOutro } from '@/content/fr/accueil';

// Accueil — contenu HARDCODÉ, FR uniquement.
//
// REFONTE ACCUEIL (brief CTO/CRO, sept. 2026). La page passe d'un damier
// (dark / crème / dark…) à une page BLANC-DOMINANTE : le bleu profond
// (pétrole nuit) devient une ponctuation, le crème un repos rare.
//   · Bleu profond (≤ 3) : Hero, SystemRoad, ContactSection
//   · Crème (≤ 2)        : NeedSelector, Method
//   · Blanc              : tout le reste
//
// Architecture (brief §03) :
//   01 Hero (bleu) · 02 Réassurance/StatsBlock · 03 Logos · 04 Differentiators
//   · 05 NeedSelector « à qui on parle » (crème) · 06 Services · 07 SystemRoad
//   « du site au système » (bleu) · 08 Réalisations · [techno] · 09 Méthode
//   (crème) · 10 Ressources (flag, masquée si < 2 articles) · 11 FAQ
//   · 12 CTA final / ContactSection (bleu)
//
// Supprimées : « On montre, on ne prétend pas » (ProofGrid) + bande CTA orange.

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <Hero locale={locale} />
      <StatsBlock />
      <LogoStrip />
      <Differentiators />
      <NeedSelector locale={locale} />
      <ServiceGrid locale={locale} />
      <SystemRoad />
      <ProjectSlider locale={locale} />
      <TechnoStrip />
      <Method />
      <ResourcesSection locale={locale} />
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
