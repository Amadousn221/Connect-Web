import type { Locale } from '@/lib/i18n/config';
import { ServiceHero } from '@/components/sections/service-hero/ServiceHero';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ServicePageShell } from '@/components/sections/service-page/ServicePageShell';
import { AudiencesSection } from './AudiencesSection';
import {
  Section,
  Sequence,
  Reading,
  Trio,
  Timeline,
  Ownership,
  Projects,
  Extensions,
  ContactBlock,
} from '@/components/sections/service-page/blocks';
import {
  ongHero,
  ongRole,
  ongAudiences,
  ongAutonomie,
  ongEditorial,
  ongStandards,
  ongProprio,
  ongMethode,
  ongProjects,
  ongNext,
  ongFaqIntro,
  ongFaqItems,
  ongContact,
} from '@/content/fr/sitesInstitutionnels';

// Page « Sites institutionnels & ONG » — 12 sections (Opus + maquette V1).
// S3 : sélecteur de publics interactif. Fonds alternés ; pétrole sur S7 propriété.
export function SitesInstitutionnelsPage({ locale }: { locale: Locale }) {
  return (
    <ServicePageShell id="sites-institutionnels-ong">
      <ServiceHero
        eyebrow={ongHero.eyebrow}
        title={ongHero.title}
        intro={ongHero.intro}
        primaryCta={ongHero.primaryCta}
        secondaryCta={ongHero.secondaryCta}
        locale={locale}
        image={{ src: '/assets/hero-bg.jpg' }}
        focalDesktop="50% 38%"
        focalMobile="50% 42%"
        overlay="strong"
        reassurance={ongHero.reassurance}
      />

      <Section id="s2" labelledBy="ong-s2">
        <Sequence
          headId="ong-s2"
          eyebrow={ongRole.eyebrow}
          title={ongRole.title}
          intro={ongRole.intro}
          items={ongRole.items}
        />
      </Section>

      <Section id="s3" bg="soft" labelledBy="ong-s3">
        <AudiencesSection data={ongAudiences} />
      </Section>

      <Section id="s4" labelledBy="ong-s4">
        <Trio
          headId="ong-s4"
          eyebrow={ongAutonomie.eyebrow}
          title={ongAutonomie.title}
          intro={ongAutonomie.intro}
          items={ongAutonomie.items}
        />
      </Section>

      <Section id="s5" bg="soft" labelledBy="ong-s5">
        <Reading
          headId="ong-s5"
          eyebrow={ongEditorial.eyebrow}
          title={ongEditorial.title}
          intro={ongEditorial.intro}
          items={ongEditorial.items}
          outro={ongEditorial.outro}
        />
      </Section>

      <Section id="s6" labelledBy="ong-s6">
        <Reading
          headId="ong-s6"
          eyebrow={ongStandards.eyebrow}
          title={ongStandards.title}
          intro={ongStandards.intro}
          items={ongStandards.items}
        />
      </Section>

      <Section id="s7" bg="deep" labelledBy="ong-s7">
        <Ownership
          headId="ong-s7"
          eyebrow={ongProprio.eyebrow}
          title={ongProprio.title}
          intro={ongProprio.intro}
          rows={ongProprio.rows}
          aside={ongProprio.aside}
          tone="on-dark"
        />
      </Section>

      <Section id="s8" labelledBy="ong-s8">
        <Timeline
          headId="ong-s8"
          eyebrow={ongMethode.eyebrow}
          title={ongMethode.title}
          intro={ongMethode.intro}
          steps={ongMethode.steps}
        />
      </Section>

      <Section id="s9" bg="soft" labelledBy="ong-s9">
        <Projects
          headId="ong-s9"
          eyebrow={ongProjects.eyebrow}
          title={ongProjects.title}
          intro={ongProjects.intro}
          cards={ongProjects.cards}
          cta={ongProjects.cta}
          locale={locale}
        />
      </Section>

      <Section id="s10" labelledBy="ong-s10">
        <Extensions
          headId="ong-s10"
          eyebrow={ongNext.eyebrow}
          title={ongNext.title}
          intro={ongNext.intro}
          rows={ongNext.rows}
          locale={locale}
        />
      </Section>

      <Section id="s11" bg="soft">
        <FaqAccordion
          locale={locale}
          intro={ongFaqIntro}
          items={ongFaqItems}
          align="left"
          layout="split"
        />
      </Section>

      <Section id="contact" bg="soft">
        <ContactBlock
          eyebrow={ongContact.eyebrow}
          title={ongContact.title}
          lead={ongContact.lead}
        />
      </Section>
    </ServicePageShell>
  );
}
