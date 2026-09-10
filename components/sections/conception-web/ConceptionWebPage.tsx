import Image from 'next/image';
import type { Locale } from '@/lib/i18n/config';
import { ServiceHero } from '@/components/sections/service-hero/ServiceHero';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ContactForm } from '@/components/sections/ContactForm';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Icon } from '@/components/ui/Icon';
import { BrandGlyph } from '@/components/ui/BrandGlyph';
import { contactInfo } from '@/components/layout/site-nav';
import { CwScroll } from './CwScroll';
import { CwIntentTabs } from './CwIntentTabs';
import { CwLink, CwCta, CwArrow, CwHead } from './_shared';
import styles from './ConceptionWeb.module.css';
import {
  cwHero,
  cwIntent,
  cwUsages,
  cwPlatform,
  cwRefonte,
  cwMethod,
  cwDurable,
  cwOwnership,
  cwProjects,
  cwExtensions,
  cwFaqIntro,
  cwFaqItems,
  cwContact,
} from '@/content/fr/conceptionWeb';

// Page parente « Conception et développement web » (/services/conception-et-
// developpement-web). Composition finale de la maquette V2 (12 sections) :
// S1 Hero partagé · S2 poser la bonne question (sélecteur d'intentions) ·
// S3 trois usages · S4 choix de plateforme · S5 refonte · S6 méthode 6 temps ·
// S7 ce qui fait qu'un site tient · S8 propriété · S9 réalisations web ·
// S10 prolongements · S11 FAQ (composant partagé) · S12 contact (formulaire réel).
//
// Fonds alternés : blanc → crème → blanc → crème … ; pétrole sur S5 et S12.
export function ConceptionWebPage({ locale }: { locale: Locale }) {
  return (
    <CwScroll>
      <ServiceHero
        eyebrow={cwHero.eyebrow}
        title={cwHero.title}
        intro={cwHero.intro}
        primaryCta={cwHero.primaryCta}
        secondaryCta={cwHero.secondaryCta}
        locale={locale}
        image={{ src: '/assets/hero-bg.jpg' }}
        focalDesktop="50% 38%"
        focalMobile="50% 42%"
        overlay="strong"
        reassurance={cwHero.reassurance}
      />

      {/* S2 — Poser la bonne question */}
      <section className={styles.section} aria-labelledby="cw-s2">
        <div className="cw-sec">
          <RevealOnScroll>
            <div className={styles.reading}>
              <span className={styles.headEyebrow}>
                <Eyebrow>{cwIntent.eyebrow}</Eyebrow>
              </span>
              <h2 id="cw-s2" className={`cw-serif ${styles.readingTitle}`}>
                {cwIntent.title}
              </h2>
              <p className={styles.readingBody}>{cwIntent.body}</p>

              <CwIntentTabs intents={cwIntent.intents} />

              {/* Repli statique sans JS : la liste complète reste lisible. */}
              <noscript>
                <ul className={styles.intentFallback}>
                  {cwIntent.intents.map((it) => (
                    <li key={it.label}>
                      <strong>{it.label}.</strong> {it.text}
                    </li>
                  ))}
                </ul>
              </noscript>

              <div className={styles.routeNote}>
                <p>{cwIntent.routeNote.text}</p>
                <CwCta href={cwIntent.routeNote.link.href} locale={locale}>
                  {cwIntent.routeNote.link.label}
                </CwCta>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* S3 — Trois usages */}
      <section className={`${styles.section} ${styles.soft}`} aria-labelledby="cw-s3">
        <div className="cw-sec">
          <RevealOnScroll>
            <CwHead id="cw-s3" eyebrow={cwUsages.eyebrow} title={cwUsages.title} lead={cwUsages.lead} />
            <div className={styles.usageGrid}>
              {cwUsages.items.map((u) => (
                <article key={u.title} className={`${styles.usage} ${styles.clickable}`}>
                  <span className={styles.usageAudience}>{u.audience}</span>
                  <h3 className={styles.usageTitle}>
                    {u.icon ? <Icon name={u.icon} className={styles.leadIcon} /> : null}
                    <span>{u.title}</span>
                  </h3>
                  <p>{u.text}</p>
                  <CwLink href={u.link.href} locale={locale} className={styles.cta}>
                    {u.link.label}
                    <CwArrow />
                  </CwLink>
                </article>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* S4 — Choix de la plateforme */}
      <section className={styles.section} aria-labelledby="cw-s4">
        <div className="cw-sec">
          <RevealOnScroll>
            <CwHead
              id="cw-s4"
              eyebrow={cwPlatform.eyebrow}
              title={cwPlatform.title}
              lead={cwPlatform.lead}
            />
            <div className={styles.platformGrid}>
              {cwPlatform.cards.map((c) => (
                <article key={c.title} className={styles.platformCard}>
                  <span className={styles.platformEyebrow}>{c.eyebrow}</span>
                  <h3 className={styles.platformTitle} data-brand={c.kind}>
                    <BrandGlyph brand={c.brand} size={24} className={styles.brandGlyph} />
                    <span>{c.title}</span>
                  </h3>
                  <p>{c.text}</p>
                  <CwLink href={c.link.href} locale={locale} className={styles.cta}>
                    {c.link.label}
                    <CwArrow />
                  </CwLink>
                </article>
              ))}
            </div>

            <div className={styles.adapted}>
              <div>
                <span className={styles.platformEyebrow}>{cwPlatform.adapted.eyebrow}</span>
                <h3 className={styles.adaptedTitle}>
                  {cwPlatform.adapted.icon ? (
                    <Icon name={cwPlatform.adapted.icon} className={styles.leadIcon} />
                  ) : null}
                  <span>{cwPlatform.adapted.title}</span>
                </h3>
              </div>
              <div>
                <p>{cwPlatform.adapted.text}</p>
                <CwCta href={cwPlatform.adapted.link.href} locale={locale}>
                  {cwPlatform.adapted.link.label}
                </CwCta>
              </div>
            </div>

            <div className={styles.choiceNote}>
              <b>{cwPlatform.choiceNote.title}</b>
              <p>{cwPlatform.choiceNote.text}</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* S5 — Refonte */}
      <section
        className={`${styles.section} ${styles.deep}`}
        aria-labelledby="cw-s5"
      >
        <div className="cw-sec">
          <RevealOnScroll>
            <div className={styles.refonteLayout}>
              <div>
                <span className={styles.headEyebrow}>
                  <Eyebrow tone="on-dark">{cwRefonte.eyebrow}</Eyebrow>
                </span>
                <h2 id="cw-s5" className={`cw-serif ${styles.refonteTitle}`}>
                  {cwRefonte.title}
                </h2>
                <p className={styles.refonteBody}>{cwRefonte.body}</p>
                <CwCta href={cwRefonte.link.href} locale={locale}>
                  {cwRefonte.link.label}
                </CwCta>
              </div>
              <div>
                <h3 className={styles.refonteQuestionsTitle}>{cwRefonte.questionsTitle}</h3>
                <ul className={styles.refonteQuestions}>
                  {cwRefonte.questions.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* S6 — Méthode en six temps */}
      <section className={styles.section} aria-labelledby="cw-s6">
        <div className="cw-sec">
          <RevealOnScroll>
            <CwHead id="cw-s6" eyebrow={cwMethod.eyebrow} title={cwMethod.title} lead={cwMethod.lead} />
            <ol className={styles.roadmap}>
              {cwMethod.steps.map((s, i) => (
                <li key={s.title} className={styles.step}>
                  <span className={styles.stepNum}>{`0${i + 1}`}</span>
                  <h3>
                    {s.icon ? <Icon name={s.icon} className={styles.leadIcon} /> : null}
                    <span>{s.title}</span>
                  </h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </RevealOnScroll>
        </div>
      </section>

      {/* S7 — Ce qui fait qu'un site tient */}
      <section className={`${styles.section} ${styles.soft}`} aria-labelledby="cw-s7">
        <div className="cw-sec">
          <RevealOnScroll>
            <CwHead id="cw-s7" eyebrow={cwDurable.eyebrow} title={cwDurable.title} lead={cwDurable.lead} />
            <div className={styles.durableGrid}>
              {cwDurable.items.map((d, i) => (
                <article key={d.title} className={styles.durable}>
                  <span className={styles.stepNum}>{`0${i + 1}`}</span>
                  <h3>
                    {d.icon ? <Icon name={d.icon} className={styles.leadIcon} /> : null}
                    <span>{d.title}</span>
                  </h3>
                  <p>{d.text}</p>
                </article>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* S8 — Propriété */}
      <section className={styles.section} aria-labelledby="cw-s8">
        <div className="cw-sec">
          <RevealOnScroll>
            <CwHead
              id="cw-s8"
              eyebrow={cwOwnership.eyebrow}
              title={cwOwnership.title}
              lead={cwOwnership.lead}
            />
            <div className={styles.ownership}>
              <dl className={styles.ownershipList}>
                {cwOwnership.rows.map((r) => (
                  <div key={r.label} className={styles.ownershipRow}>
                    <dt>
                      {r.icon ? <Icon name={r.icon} className={styles.leadIcon} /> : null}
                      <span>{r.label}</span>
                    </dt>
                    <dd>{r.text}</dd>
                  </div>
                ))}
              </dl>
              <aside className={styles.thirdParty}>
                <span className={styles.platformEyebrow}>{cwOwnership.aside.eyebrow}</span>
                <h3>
                  {cwOwnership.aside.icon ? (
                    <Icon name={cwOwnership.aside.icon} className={styles.leadIcon} />
                  ) : null}
                  <span>{cwOwnership.aside.title}</span>
                </h3>
                <p>{cwOwnership.aside.text}</p>
              </aside>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* S9 — Réalisations web */}
      <section className={`${styles.section} ${styles.soft}`} aria-labelledby="cw-s9">
        <div className="cw-sec">
          <RevealOnScroll>
            <CwHead
              id="cw-s9"
              eyebrow={cwProjects.eyebrow}
              title={cwProjects.title}
              lead={cwProjects.lead}
            />
            <div className={styles.projects}>
              {cwProjects.cards.map((p) => (
                <article key={p.title} className={`${styles.project} ${styles.clickable}`}>
                  <div className={styles.projectCover}>
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.projectBody}>
                    <span className={styles.projectBadge}>{p.badge}</span>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                    <CwLink href={p.link.href} locale={locale} className={styles.cta}>
                      {p.link.label}
                      <CwArrow />
                    </CwLink>
                  </div>
                </article>
              ))}

              <article className={`${styles.project} ${styles.projectPortfolio} ${styles.clickable}`}>
                <div className={styles.projectBody}>
                  <div className={styles.portfolioTags} aria-hidden="true">
                    {cwProjects.portfolio.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <span className={styles.projectBadge}>{cwProjects.portfolio.badge}</span>
                  <h3>{cwProjects.portfolio.title}</h3>
                  <p>{cwProjects.portfolio.text}</p>
                  <CwLink
                    href={cwProjects.portfolio.link.href}
                    locale={locale}
                    className={styles.cta}
                  >
                    {cwProjects.portfolio.link.label}
                    <CwArrow />
                  </CwLink>
                </div>
              </article>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* S10 — Prolongements */}
      <section className={styles.section} aria-labelledby="cw-s10">
        <div className="cw-sec">
          <RevealOnScroll>
            <CwHead
              id="cw-s10"
              eyebrow={cwExtensions.eyebrow}
              title={cwExtensions.title}
              lead={cwExtensions.lead}
            />
            <div className={styles.extensions}>
              {cwExtensions.rows.map((r) => (
                <div key={r.title} className={`${styles.extension} ${styles.clickable}`}>
                  <h3>
                    {r.icon ? <Icon name={r.icon} className={styles.leadIcon} /> : null}
                    <span>{r.title}</span>
                  </h3>
                  <p>{r.text}</p>
                  <CwLink href={r.link.href} locale={locale} className={styles.cta}>
                    {r.link.label}
                    <CwArrow />
                  </CwLink>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* S11 — FAQ (composant partagé, <details> natif) */}
      <section className={`${styles.section} ${styles.soft}`}>
        <div className="cw-sec">
          <FaqAccordion
            locale={locale}
            intro={cwFaqIntro}
            items={cwFaqItems}
            align="left"
            layout="split"
          />
        </div>
      </section>

      {/* S12 — Contact (formulaire réel, backend inchangé) */}
      <section id="contact" className={`${styles.section} ${styles.contact}`}>
        <div className={`cw-sec ${styles.contactGrid}`}>
          <RevealOnScroll>
            <span className={styles.headEyebrow}>
              <Eyebrow>{cwContact.eyebrow}</Eyebrow>
            </span>
            <h2 className={`cw-serif ${styles.readingTitle}`}>{cwContact.title}</h2>
            <p className={styles.readingBody}>{cwContact.lead}</p>
            <address className={styles.coords}>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <span>Rond-point SCAT-URBAM, G49</span>
              <span>{contactInfo.city}</span>
              {contactInfo.phones.map((p) => (
                <a key={p.href} href={p.href}>
                  {p.label}
                </a>
              ))}
              <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </address>
          </RevealOnScroll>

          <RevealOnScroll>
            <ContactForm tone="on-light" />
            <p className={styles.fallback}>
              Si le formulaire ne s’envoie pas, écrivez-nous directement à{' '}
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> — nous
              vous répondrons dans la journée.
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </CwScroll>
  );
}
