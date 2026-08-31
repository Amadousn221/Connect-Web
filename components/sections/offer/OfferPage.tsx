import type { Locale } from '@/lib/i18n/config';
import type { OfferContent } from '@/content/offres';
import { pickCaseTeasers } from '@/content/fr/accueil';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { CaseTeaserCarousel } from '@/components/sections/CaseTeaserCarousel';
import { ContactSection } from '@/components/sections/ContactSection';
import { OfferHero } from './OfferHero';
import { PainList } from './PainList';
import { DeliverableGrid } from './DeliverableGrid';
import { EditorialWedge } from './EditorialWedge';
import { WhyGrid } from './WhyGrid';
import { FeaturedCase } from './FeaturedCase';
import { BenefitRows } from './BenefitRows';
import { OfferProcess } from './OfferProcess';
import { PricingBlock } from './PricingBlock';
import { SystemBridge } from './SystemBridge';
import { FinalCta } from './FinalCta';

// Assemble une page d'offre à partir de son `OfferContent` (archétype P07 —
// sections 01→13). Chaque page ne monte que les sections qu'elle porte : les
// clés `editorial`, `featuredCase`, `relatedCaseNames`, `pricing`,
// `systemBridge` sont optionnelles (DECISION 04 — pas de template générique).
export function OfferPage({
  locale,
  content,
}: {
  locale: Locale;
  content: OfferContent;
}) {
  const relatedNames = content.relatedCaseNames ?? [];
  return (
    <>
      <OfferHero locale={locale} content={content.hero} />
      <PainList intro={content.pain} items={content.pain.items} />
      <DeliverableGrid
        intro={content.deliverables}
        items={content.deliverables.items}
        toolsLabel={content.deliverables.toolsLabel}
        tools={content.deliverables.tools}
      />
      {content.editorial ? <EditorialWedge content={content.editorial} /> : null}
      {content.why ? (
        <WhyGrid intro={content.why} items={content.why.items} />
      ) : null}

      {content.featuredCase ? (
        <FeaturedCase locale={locale} content={content.featuredCase} />
      ) : null}
      {relatedNames.length && content.relatedIntro ? (
        <CaseTeaserCarousel
          locale={locale}
          intro={content.relatedIntro}
          items={pickCaseTeasers(relatedNames)}
          anchorId={content.featuredCase ? '' : 'cas'}
        />
      ) : null}

      {content.benefits ? (
        <BenefitRows intro={content.benefits} items={content.benefits.items} />
      ) : null}
      <OfferProcess intro={content.process} steps={content.process.steps} />
      {content.pricing ? <PricingBlock content={content.pricing} /> : null}

      <FaqAccordion locale={locale} intro={content.faq} items={content.faq.items} />

      {content.systemBridge ? (
        <SystemBridge locale={locale} content={content.systemBridge} />
      ) : null}
      <FinalCta locale={locale} content={content.finalCta} />
      <ContactSection />
    </>
  );
}
