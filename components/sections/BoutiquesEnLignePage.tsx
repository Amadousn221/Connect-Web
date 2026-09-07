import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Button } from '@/components/ui/Button';
import type { Locale } from '@/lib/i18n/config';
import { OfferHero } from '@/components/sections/offer/OfferHero';
import { DeliverableGrid } from '@/components/sections/offer/DeliverableGrid';
import { FeaturedCase } from '@/components/sections/offer/FeaturedCase';
import { EditorialWedge } from '@/components/sections/offer/EditorialWedge';
import { BenefitRows } from '@/components/sections/offer/BenefitRows';
import { OfferProcess } from '@/components/sections/offer/OfferProcess';
import { CaseTeaserCarousel } from '@/components/sections/CaseTeaserCarousel';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { FinalCta } from '@/components/sections/offer/FinalCta';
import { ContactSection } from '@/components/sections/ContactSection';
import { pickCaseTeasers } from '@/content/fr/accueil';
import {
  boutiquesHero,
  activitySolutionsIntro,
  activitySolutions,
  attaFeaturedCase,
  otherShopsIntro,
  otherShopsLink,
  otherShopsNames,
  buyingJourneyIntro,
  buyingJourneySteps,
  marketsContent,
  managementIntro,
  managementItems,
  techChoiceContent,
  processIntro,
  processSteps,
  migrationNote,
  faqIntro,
  faqItems,
  finalCta,
} from '@/content/fr/offres/boutiques-en-ligne';
import styles from './BoutiquesEnLignePage.module.css';

// Page « Boutiques en ligne » — refonte validée PO (7 sept. 2026). Architecture
// propre à cette offre (DECISION 04) : assemblée ici plutôt que via l'archétype
// générique `OfferPage`, en réutilisant les mêmes briques que les autres pages
// d'offre (hero, grilles, wedge éditorial, process, FAQ, CTA, contact).
export function BoutiquesEnLignePage({ locale }: { locale: Locale }) {
  return (
    <>
      <OfferHero locale={locale} content={boutiquesHero} />

      {/* 01 — Une solution adaptée à votre activité (3 blocs, pas 4). */}
      <DeliverableGrid intro={activitySolutionsIntro} items={activitySolutions} columns={3} />

      {/* 02 — ATTA Africa, preuve concrète + autres boutiques réelles. */}
      <FeaturedCase locale={locale} content={attaFeaturedCase} />
      <CaseTeaserCarousel
        locale={locale}
        intro={otherShopsIntro}
        items={pickCaseTeasers(otherShopsNames)}
        link={otherShopsLink}
        anchorId=""
      />

      {/* 03 — Du catalogue à la commande (parcours d'achat, 4 lignes). */}
      <BenefitRows intro={buyingJourneyIntro} items={buyingJourneySteps} />

      {/* 04 — Vendre sur vos marchés. */}
      <EditorialWedge content={marketsContent} />

      {/* 05 — Une boutique que votre équipe peut gérer. */}
      <DeliverableGrid intro={managementIntro} items={managementItems} columns={2} />

      {/* 06 — Choisir la bonne base technique. */}
      <EditorialWedge content={techChoiceContent} />

      {/* 07 — Lancer, refondre ou faire évoluer. */}
      <OfferProcess intro={processIntro} steps={processSteps} />
      <div className={styles.migration}>
        <RevealOnScroll className={`cw-sec ${styles.migrationInner}`}>
          <div>
            <p className={`cw-serif ${styles.migrationTitle}`}>{migrationNote.title}</p>
            <p className={styles.migrationBody}>{migrationNote.body}</p>
          </div>
          <Button href={migrationNote.cta.href} variant="outline" size="md">
            {migrationNote.cta.label}
          </Button>
        </RevealOnScroll>
      </div>

      {/* 08 — FAQ (centrée par défaut). */}
      <FaqAccordion locale={locale} intro={faqIntro} items={faqItems} />

      {/* 09 — CTA final + contact + footer (composants existants, inchangés). */}
      <FinalCta locale={locale} content={finalCta} />
      <ContactSection />
    </>
  );
}
