import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/Hero';
import { StatsBlock } from '@/components/sections/StatsBlock';
import { Differentiators } from '@/components/sections/Differentiators';
import { NeedSelector } from '@/components/sections/NeedSelector';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { SystemRoad } from '@/components/sections/SystemRoad';
import { ProjectSlider } from '@/components/sections/ProjectSlider';
import { Method } from '@/components/sections/Method';
import { BlogSection } from '@/components/sections/BlogSection';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ContactSection } from '@/components/sections/ContactSection';
import { faqIntro, faqItems, faqOutro } from '@/content/fr/accueil';
import styles from './page.module.css';

// Accueil — contenu HARDCODÉ, FR uniquement.
//
// REFONTE ACCUEIL — Lot 2 (sept. 2026) + copy V1. Page blanc-dominante avec
// fonds alternés, plus minimaliste et plus interactive.
//   Ordre : 01 Hero (pétrole) · 02 Réassurance/StatsBlock (blanc) · 03 À qui
//   on parle/NeedSelector (ivoire) · 04 Services/ServiceGrid (blanc) · 05 Ce
//   qui nous distingue/Differentiators (ivoire) · 06 Du site au système/
//   SystemRoad (pétrole, explorateur interactif) · 07 Réalisations/
//   ProjectSlider (blanc) · Méthode (ivoire) · Blog (pétrole, 3 derniers
//   articles) · Ressources (flag) · FAQ (blanc) · Contact (pétrole) · Footer.
//
// Retiré du render : TechnoStrip, LogoStrip (composants conservés dans le repo).

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className={styles.page}>
      <Hero locale={locale} />
      <StatsBlock />
      <NeedSelector locale={locale} />
      <ServiceGrid locale={locale} />
      <Differentiators />
      <SystemRoad />
      <ProjectSlider locale={locale} />
      <Method />
      <BlogSection locale={locale} />
      <ResourcesSection locale={locale} />
      <FaqAccordion
        locale={locale}
        intro={faqIntro}
        items={faqItems}
        outro={faqOutro}
      />
      <ContactSection />
    </div>
  );
}
