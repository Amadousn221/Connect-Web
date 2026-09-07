import { isLocale } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/sections/Hero';
import { StatsBlock } from '@/components/sections/StatsBlock';
import { OurRole } from '@/components/sections/OurRole';
import { Differentiators } from '@/components/sections/Differentiators';
import { NeedSelector } from '@/components/sections/NeedSelector';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { SystemRoad } from '@/components/sections/SystemRoad';
import { ProjectSlider } from '@/components/sections/ProjectSlider';
import { Method } from '@/components/sections/Method';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ContactSection } from '@/components/sections/ContactSection';
import { faqIntro, faqItems, faqOutro } from '@/content/fr/accueil';
import styles from './page.module.css';

// Accueil — contenu HARDCODÉ, FR uniquement (à l'exception d'OurRole, seule
// section bilingue FR/EN de la page — content/fr + content/en/notreRole.ts).
//
// REFONTE ACCUEIL — Lot 2 + retouches (sept. 2026). Page blanc-dominante avec
// fonds alternés, plus minimaliste et plus interactive.
//   Ordre : 01 Hero (pétrole, image de couverture) · 02 Réassurance/StatsBlock
//   (blanc) · 03 Notre rôle/OurRole (blanc, transition) · 04 À qui on parle/
//   NeedSelector (ivoire) · 05 Services/ServiceGrid (blanc) · 06 Ce qui nous
//   distingue/Differentiators (ivoire) · 07 Du site au système/SystemRoad
//   (pétrole, explorateur interactif) · 08 Réalisations/ProjectSlider (blanc)
//   · Méthode (ivoire) · Ressources (flag) · FAQ (blanc) · Contact (pétrole,
//   fond unique) · Footer.
//
// Retirés du render : TechnoStrip, LogoStrip (composants conservés dans le repo).

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className={styles.page}>
      <Hero />
      <StatsBlock />
      <OurRole locale={locale} />
      <NeedSelector locale={locale} />
      <ServiceGrid locale={locale} />
      <Differentiators />
      <SystemRoad />
      <ProjectSlider locale={locale} />
      <Method />
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
