import Image from 'next/image';
import type { Locale } from '@/lib/i18n/config';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { ContactForm } from '@/components/sections/ContactForm';
import { contactInfo } from '@/components/layout/site-nav';
import { SpHead, SpLink, SpProse, type SpLinkData } from './parts';
import { TabbedPanels, type TabItem } from './TabbedPanels';
import styles from './service-page.module.css';

type Bg = 'plain' | 'soft' | 'deep';

/** Coquille de section : fond, ancre, rythme vertical. */
export function Section({
  id,
  bg = 'plain',
  labelledBy,
  children,
}: {
  id?: string;
  bg?: Bg;
  labelledBy?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${styles.section} ${bg === 'soft' ? styles.soft : ''} ${
        bg === 'deep' ? styles.deep : ''
      }`}
    >
      <div className="cw-sec">
        <RevealOnScroll>{children}</RevealOnScroll>
      </div>
    </section>
  );
}

export type NumberedItem = { title: string; body: string[]; link?: SpLinkData };

/** Section de pure prose : tête (+ chapô optionnel) + corps de texte. */
export function Prose({
  headId,
  eyebrow,
  title,
  body,
  split = false,
  tone,
}: {
  headId?: string;
  eyebrow: string;
  title: string;
  body: string[];
  split?: boolean;
  tone?: 'on-dark';
}) {
  const content = (
    <div className={styles.leadProse}>
      <SpProse blocks={body} />
    </div>
  );
  if (!split) {
    return (
      <>
        <SpHead id={headId} eyebrow={eyebrow} title={title} tone={tone} />
        {content}
      </>
    );
  }
  return (
    <div className={styles.split}>
      <div className={styles.intro}>
        <SpHead id={headId} eyebrow={eyebrow} title={title} tone={tone} />
      </div>
      {content}
    </div>
  );
}

/** Blocs numérotés — intro à gauche, liste séquentielle à droite (ou empilé). */
export function Sequence({
  headId,
  eyebrow,
  title,
  intro,
  items,
  split = true,
  tone,
}: {
  headId?: string;
  eyebrow: string;
  title: string;
  intro?: string[];
  items: NumberedItem[];
  split?: boolean;
  tone?: 'on-dark';
}) {
  const list = (
    <div className={styles.sequence}>
      {items.map((it, i) => (
        <article key={it.title} className={styles.seqRow}>
          <h3>
            <span className={styles.seqNum}>{`0${i + 1}`}</span>
            <span>{it.title}</span>
          </h3>
          <SpProse blocks={it.body} />
        </article>
      ))}
    </div>
  );
  return (
    <div className={split ? styles.split : undefined}>
      <div className={styles.intro}>
        <SpHead id={headId} eyebrow={eyebrow} title={title} tone={tone} />
        {intro ? <SpProse blocks={intro} /> : null}
      </div>
      {list}
    </div>
  );
}

/** Section de lecture — blocs de prose titrés, rythme éditorial. */
export function Reading({
  headId,
  eyebrow,
  title,
  intro,
  items,
  outro,
  split = true,
  locale,
}: {
  headId?: string;
  eyebrow: string;
  title: string;
  intro?: string[];
  items: NumberedItem[];
  outro?: string;
  split?: boolean;
  locale?: Locale;
}) {
  const list = (
    <div className={styles.reading}>
      {items.map((it) => (
        <article key={it.title} className={styles.readingRow}>
          <h3>{it.title}</h3>
          <SpProse blocks={it.body} />
          {it.link && locale ? (
            <SpLink href={it.link.href} locale={locale} className={styles.cta}>
              {it.link.label}
              <span aria-hidden="true">↗</span>
            </SpLink>
          ) : null}
        </article>
      ))}
      {outro ? <p className={styles.configOutro}>{outro}</p> : null}
    </div>
  );
  return (
    <div className={split ? styles.split : undefined}>
      <div className={styles.intro}>
        <SpHead id={headId} eyebrow={eyebrow} title={title} />
        {intro ? <SpProse blocks={intro} /> : null}
      </div>
      {list}
    </div>
  );
}

/** Cartes de configuration (2–3), la dernière peut être « accentuée ». */
export function ConfigCards({
  headId,
  eyebrow,
  title,
  intro,
  cards,
  outro,
  notes,
}: {
  headId?: string;
  eyebrow: string;
  title: string;
  intro?: string[];
  cards: { title: string; body: string[]; accent?: boolean }[];
  outro?: string;
  notes?: { title: string; body: string[] }[];
}) {
  return (
    <>
      <SpHead id={headId} eyebrow={eyebrow} title={title} />
      {intro ? <div className={styles.leadProse}><SpProse blocks={intro} /></div> : null}
      <div className={styles.configGrid} data-count={cards.length}>
        {cards.map((c) => (
          <article
            key={c.title}
            className={styles.configCard}
            data-accent={c.accent || undefined}
          >
            <h3>{c.title}</h3>
            <SpProse blocks={c.body} />
          </article>
        ))}
      </div>
      {notes && notes.length > 0 ? (
        <div className={styles.configNotes}>
          {notes.map((n) => (
            <div key={n.title} className={styles.configNote}>
              <b>{n.title}</b>
              <SpProse blocks={n.body} />
            </div>
          ))}
        </div>
      ) : null}
      {outro ? <p className={styles.configOutro}>{outro}</p> : null}
    </>
  );
}

/** Étapes numérotées (méthode). */
export function Timeline({
  headId,
  eyebrow,
  title,
  intro,
  steps,
  split = true,
}: {
  headId?: string;
  eyebrow: string;
  title: string;
  intro?: string[];
  steps: { title: string; body: string[] }[];
  split?: boolean;
}) {
  const list = (
    <ol className={styles.timeline}>
      {steps.map((s, i) => (
        <li key={s.title} className={styles.step}>
          <span className={styles.stepNum}>{`0${i + 1}`}</span>
          <h3>{s.title}</h3>
          <SpProse blocks={s.body} />
        </li>
      ))}
    </ol>
  );
  return (
    <div className={split ? styles.split : undefined}>
      <div className={styles.intro}>
        <SpHead id={headId} eyebrow={eyebrow} title={title} />
        {intro ? <SpProse blocks={intro} /> : null}
      </div>
      {list}
    </div>
  );
}

/** 3 (ou 2/4) blocs sobres côte à côte. */
export function Trio({
  headId,
  eyebrow,
  title,
  intro,
  items,
  notes,
  numbered = true,
}: {
  headId?: string;
  eyebrow: string;
  title: string;
  intro?: string[];
  items: { title: string; body: string[] }[];
  notes?: { title: string; body: string[] }[];
  numbered?: boolean;
}) {
  return (
    <>
      <SpHead id={headId} eyebrow={eyebrow} title={title} lead={intro?.join(' ')} />
      <div className={styles.trioGrid} data-count={items.length}>
        {items.map((it, i) => (
          <article key={it.title} className={styles.trio}>
            {numbered ? <span className={styles.stepNum}>{`0${i + 1}`}</span> : null}
            <h3>{it.title}</h3>
            <SpProse blocks={it.body} />
          </article>
        ))}
      </div>
      {notes && notes.length > 0 ? (
        <div className={styles.configNotes}>
          {notes.map((n) => (
            <div key={n.title} className={styles.configNote}>
              <b>{n.title}</b>
              <SpProse blocks={n.body} />
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

/** Propriété : liste de lignes + encart « limites tierces ». */
export function Ownership({
  headId,
  eyebrow,
  title,
  intro,
  rows,
  aside,
  tone,
}: {
  headId?: string;
  eyebrow: string;
  title: string;
  intro?: string[];
  rows: { label: string; text: string }[];
  aside: { eyebrow: string; title: string; body: string[] };
  tone?: 'on-dark';
}) {
  return (
    <div className={styles.split}>
      <div className={styles.intro}>
        <SpHead id={headId} eyebrow={eyebrow} title={title} tone={tone} />
        {intro ? <SpProse blocks={intro} /> : null}
      </div>
      <div>
        <dl className={styles.ownList}>
          {rows.map((r) => (
            <div key={r.label} className={styles.ownRow}>
              <dt>{r.label}</dt>
              <dd>{r.text}</dd>
            </div>
          ))}
        </dl>
        <aside className={styles.ownAside}>
          <span className={styles.miniEyebrow}>{aside.eyebrow}</span>
          <h3>{aside.title}</h3>
          <SpProse blocks={aside.body} />
        </aside>
      </div>
    </div>
  );
}

/** Cartes réalisations : image + badge + titre + texte + lien unique. */
export function Projects({
  headId,
  eyebrow,
  title,
  intro,
  cards,
  note,
  cta,
  locale,
}: {
  headId?: string;
  eyebrow: string;
  title: string;
  intro?: string[];
  cards: {
    badge: string;
    title: string;
    text: string;
    image?: { src: string; alt: string };
    link: SpLinkData;
  }[];
  note?: string;
  cta?: SpLinkData;
  locale: Locale;
}) {
  return (
    <>
      <SpHead id={headId} eyebrow={eyebrow} title={title} lead={intro?.join(' ')} />
      <div className={styles.projects} data-count={cards.length}>
        {cards.map((c) => (
          <article key={c.title} className={`${styles.project} ${styles.clickable}`}>
            {c.image ? (
              <div className={styles.projectCover}>
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 25vw"
                />
              </div>
            ) : null}
            <div className={styles.projectBody}>
              <span className={styles.projectBadge}>{c.badge}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <SpLink href={c.link.href} locale={locale} className={styles.cta}>
                {c.link.label}
                <span aria-hidden="true">↗</span>
              </SpLink>
            </div>
          </article>
        ))}
      </div>
      {note ? <p className={styles.configOutro}>{note}</p> : null}
      {cta ? (
        <p className={styles.sectionCta}>
          <SpLink href={cta.href} locale={locale} className={styles.cta}>
            {cta.label}
            <span aria-hidden="true">↗</span>
          </SpLink>
        </p>
      ) : null}
    </>
  );
}

/** « Du site au système » : lignes éditoriales avec lien par ligne. */
export function Extensions({
  headId,
  eyebrow,
  title,
  intro,
  rows,
  locale,
}: {
  headId?: string;
  eyebrow: string;
  title: string;
  intro?: string[];
  rows: { title: string; text: string; link: SpLinkData }[];
  locale: Locale;
}) {
  return (
    <>
      <SpHead id={headId} eyebrow={eyebrow} title={title} lead={intro?.join(' ')} />
      <div className={styles.extensions}>
        {rows.map((r) => (
          <div key={r.title} className={`${styles.extension} ${styles.clickable}`}>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
            <SpLink href={r.link.href} locale={locale} className={styles.cta}>
              {r.link.label}
              <span aria-hidden="true">↗</span>
            </SpLink>
          </div>
        ))}
      </div>
    </>
  );
}

/** Section « sélecteur » : tête + intro + TabbedPanels + repli <noscript> + outro. */
export function SelectorSection({
  headId,
  eyebrow,
  title,
  intro,
  ariaLabel,
  panelEyebrow,
  items,
  outro,
}: {
  headId?: string;
  eyebrow: string;
  title: string;
  intro?: string[];
  ariaLabel: string;
  panelEyebrow?: string;
  items: TabItem[];
  outro?: string;
}) {
  return (
    <>
      <SpHead id={headId} eyebrow={eyebrow} title={title} />
      {intro ? <div className={styles.leadProse}><SpProse blocks={intro} /></div> : null}
      <TabbedPanels ariaLabel={ariaLabel} panelEyebrow={panelEyebrow} items={items} />
      <noscript>
        <div className={styles.selectorFallback}>
          {items.map((it) => (
            <div key={it.label}>
              <h3>{it.label}</h3>
              <SpProse blocks={it.body} />
            </div>
          ))}
        </div>
      </noscript>
      {outro ? <p className={styles.configOutro}>{outro}</p> : null}
    </>
  );
}

/** S final — contact : coordonnées + formulaire réel (backend inchangé). */
export function ContactBlock({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <div className={styles.contactGrid}>
      <div>
        <span className={styles.headEyebrow}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </span>
        <h2 className={`cw-serif ${styles.headTitle}`}>{title}</h2>
        <p className={styles.leadProse}>{lead}</p>
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
      </div>
      <div>
        <ContactForm tone="on-light" />
        <p className={styles.fallback}>
          Si le formulaire ne s’envoie pas, écrivez-nous directement à{' '}
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> — nous vous
          répondrons dans la journée.
        </p>
      </div>
    </div>
  );
}
