import type { Locale } from '@/lib/i18n/config';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { CaseTeaserCarousel } from '@/components/sections/CaseTeaserCarousel';
import { ContactSection } from '@/components/sections/ContactSection';
import { pickCaseTeasers } from '@/content/fr/accueil';
import {
  sitesEntrepriseRole,
  sitesEntrepriseRealisations,
  sitesEntrepriseStructure,
  sitesEntrepriseFaq,
} from '@/content/fr/sitesEntreprise';
import { SeHero } from './sites-entreprise/SeHero';
import { SeEditorialList } from './sites-entreprise/SeEditorialList';
import { SeConversion } from './sites-entreprise/SeConversion';
import { SeTeam } from './sites-entreprise/SeTeam';
import { SeTech } from './sites-entreprise/SeTech';
import { SeStartingPoint } from './sites-entreprise/SeStartingPoint';

// Page « Sites d'entreprise » — architecture propre à cette page (clarté de
// l'offre, crédibilité, conversion B2B, autonomie de l'équipe). Ne clone pas
// OfferPage : sections bespoke + composants partagés réutilisés tels quels
// (CaseTeaserCarousel, FaqAccordion, ContactSection). La page se termine par
// la vraie section de contact avec formulaire (Resend + HubSpot), puis le
// footer global (rendu par le layout).
export function SitesEntreprisePage({ locale }: { locale: Locale }) {
  return (
    <>
      <SeHero locale={locale} />

      <SeEditorialList
        eyebrow={sitesEntrepriseRole.eyebrow}
        title={sitesEntrepriseRole.title}
        lead={sitesEntrepriseRole.lead}
        items={sitesEntrepriseRole.items}
        conclusion={sitesEntrepriseRole.conclusion}
      />

      <CaseTeaserCarousel
        locale={locale}
        intro={{
          eyebrow: sitesEntrepriseRealisations.eyebrow,
          title: sitesEntrepriseRealisations.title,
          lead: sitesEntrepriseRealisations.lead,
        }}
        items={pickCaseTeasers(sitesEntrepriseRealisations.projectNames)}
        link={sitesEntrepriseRealisations.link}
        align="left"
        anchorId=""
      />

      <SeEditorialList
        eyebrow={sitesEntrepriseStructure.eyebrow}
        title={sitesEntrepriseStructure.title}
        lead={sitesEntrepriseStructure.lead}
        items={sitesEntrepriseStructure.items}
      />

      <SeConversion />
      <SeTeam />
      <SeTech />
      <SeStartingPoint />

      <FaqAccordion
        locale={locale}
        intro={{
          eyebrow: sitesEntrepriseFaq.eyebrow,
          title: sitesEntrepriseFaq.title,
        }}
        items={sitesEntrepriseFaq.items}
      />

      <ContactSection />
    </>
  );
}
