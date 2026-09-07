import type { Locale } from '@/lib/i18n/config';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { CaseTeaserCarousel } from '@/components/sections/CaseTeaserCarousel';
import { FinalCta } from '@/components/sections/offer/FinalCta';
import { ContactSection } from '@/components/sections/ContactSection';
import { pickCaseTeasers } from '@/content/fr/accueil';
import {
  conceptionWebRealisations,
  conceptionWebFaq,
  conceptionWebFinalCta,
} from '@/content/fr/conceptionWeb';
import { CwHero } from './conception-web/CwHero';
import { CwOrientation } from './conception-web/CwOrientation';
import { CwCriteria } from './conception-web/CwCriteria';
import { CwOwnership } from './conception-web/CwOwnership';
import { CwMethod } from './conception-web/CwMethod';

// Page parente « Conception et développement web ». Compose des sections
// propres à cette page + des composants partagés réutilisés tels quels
// (CaseTeaserCarousel, FaqAccordion, FinalCta, ContactSection). Elle ne clone
// pas OfferPage : pas de PainList/DeliverableGrid/PricingBlock — mais conserve
// le formulaire de contact existant (correction de fidélité visuelle, PO).
export function ConceptionWebPage({ locale }: { locale: Locale }) {
  return (
    <>
      <CwHero locale={locale} />
      <CwOrientation locale={locale} />

      <CaseTeaserCarousel
        locale={locale}
        intro={{
          eyebrow: conceptionWebRealisations.eyebrow,
          title: conceptionWebRealisations.title,
          lead: conceptionWebRealisations.lead,
        }}
        items={pickCaseTeasers(conceptionWebRealisations.projectNames)}
        link={conceptionWebRealisations.link}
        align="left"
        anchorId=""
      />

      <CwCriteria />
      <CwOwnership locale={locale} />
      <CwMethod locale={locale} />

      <FaqAccordion
        locale={locale}
        intro={{ eyebrow: conceptionWebFaq.eyebrow, title: conceptionWebFaq.title }}
        items={conceptionWebFaq.items}
      />

      <FinalCta locale={locale} content={conceptionWebFinalCta} />
      <ContactSection />
    </>
  );
}
