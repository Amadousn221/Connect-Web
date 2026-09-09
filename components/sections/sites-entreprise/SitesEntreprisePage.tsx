import type { Locale } from '@/lib/i18n/config';
import { ServiceHero } from '@/components/sections/service-hero/ServiceHero';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ServicePageShell } from '@/components/sections/service-page/ServicePageShell';
import {
  Section,
  Sequence,
  Reading,
  ConfigCards,
  Timeline,
  Trio,
  Ownership,
  Projects,
  Extensions,
  ContactBlock,
} from '@/components/sections/service-page/blocks';
import {
  seHero,
  seRole,
  seCritères,
  seContenu,
  seMethode,
  seDurable,
  seProprio,
  seProjects,
  seNext,
  seFaqIntro,
  seFaqItems,
  seContact,
} from '@/content/fr/sitesEntreprise';

// Page « Sites d'entreprise » — 11 sections (Opus + maquette V1). Fonds
// alternés blanc / crème ; pétrole sur S7 (propriété) et S11 (contact).
export function SitesEntreprisePage({ locale }: { locale: Locale }) {
  return (
    <ServicePageShell id="sites-entreprise">
      <ServiceHero
        eyebrow={seHero.eyebrow}
        title={seHero.title}
        intro={seHero.intro}
        primaryCta={seHero.primaryCta}
        secondaryCta={seHero.secondaryCta}
        locale={locale}
        image={{ src: '/assets/hero-bg.jpg' }}
        focalDesktop="50% 38%"
        focalMobile="50% 42%"
        overlay="strong"
        reassurance={seHero.reassurance}
      />

      <Section id="s2" labelledBy="se-s2">
        <Sequence
          headId="se-s2"
          eyebrow={seRole.eyebrow}
          title={seRole.title}
          intro={seRole.intro}
          items={seRole.items}
        />
      </Section>

      <Section id="s3" bg="soft" labelledBy="se-s3">
        <Reading
          headId="se-s3"
          eyebrow={seCritères.eyebrow}
          title={seCritères.title}
          intro={seCritères.intro}
          items={seCritères.items}
        />
      </Section>

      <Section id="s4" labelledBy="se-s4">
        <ConfigCards
          headId="se-s4"
          eyebrow={seContenu.eyebrow}
          title={seContenu.title}
          intro={seContenu.intro}
          cards={seContenu.cards}
          outro={seContenu.outro}
        />
      </Section>

      <Section id="s5" bg="soft" labelledBy="se-s5">
        <Timeline
          headId="se-s5"
          eyebrow={seMethode.eyebrow}
          title={seMethode.title}
          intro={seMethode.intro}
          steps={seMethode.steps}
        />
      </Section>

      <Section id="s6" labelledBy="se-s6">
        <Trio
          headId="se-s6"
          eyebrow={seDurable.eyebrow}
          title={seDurable.title}
          intro={seDurable.intro}
          items={seDurable.items}
        />
      </Section>

      <Section id="s7" bg="deep" labelledBy="se-s7">
        <Ownership
          headId="se-s7"
          eyebrow={seProprio.eyebrow}
          title={seProprio.title}
          intro={seProprio.intro}
          rows={seProprio.rows}
          aside={seProprio.aside}
          tone="on-dark"
        />
      </Section>

      <Section id="s8" bg="soft" labelledBy="se-s8">
        <Projects
          headId="se-s8"
          eyebrow={seProjects.eyebrow}
          title={seProjects.title}
          intro={seProjects.intro}
          cards={seProjects.cards}
          cta={seProjects.cta}
          locale={locale}
        />
      </Section>

      <Section id="s9" labelledBy="se-s9">
        <Extensions
          headId="se-s9"
          eyebrow={seNext.eyebrow}
          title={seNext.title}
          intro={seNext.intro}
          rows={seNext.rows}
          locale={locale}
        />
      </Section>

      <Section id="s10" bg="soft">
        <FaqAccordion
          locale={locale}
          intro={seFaqIntro}
          items={seFaqItems}
          align="left"
          layout="split"
        />
      </Section>

      <Section id="contact" bg="soft">
        <ContactBlock
          eyebrow={seContact.eyebrow}
          title={seContact.title}
          lead={seContact.lead}
        />
      </Section>
    </ServicePageShell>
  );
}
