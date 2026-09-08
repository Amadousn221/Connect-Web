import type { Locale } from '@/lib/i18n/config';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { RichBody, HubCta } from './_shared';
import type { HubDetailBlock } from '@/content/fr/servicesHub';
import styles from './ServicesHub.module.css';

// S4–S8 — Gabarit d'expertise compact, rythme identique pour renforcer la
// lecture parallèle. Colonne gauche : intro + CTA. Colonne droite : blocs de
// détail. S6 distingue visuellement « prouvé » / « exploré » (variant).
// S8 (Conseil) réutilise la structure mais sur bande pétrole (tone="on-dark").
export function HubExpertiseBlock({
  id,
  bg,
  tone = 'default',
  eyebrow,
  title,
  intro,
  cta,
  blocks,
  locale,
}: {
  id: string;
  bg?: 'soft' | 'deep';
  tone?: 'default' | 'on-dark';
  eyebrow: string;
  title: string;
  intro: string;
  cta: { label: string; href: string };
  blocks: HubDetailBlock[];
  locale: Locale;
}) {
  return (
    <section id={id} className={styles.section} data-bg={bg}>
      <div className="cw-sec">
        <div className={styles.expertise}>
          <div className={styles.expertiseIntro}>
            <Eyebrow tone={tone === 'on-dark' ? 'on-dark' : 'default'}>
              {eyebrow}
            </Eyebrow>
            <h2 className={`cw-serif ${styles.expertiseTitle}`}>{title}</h2>
            <p>{intro}</p>
            <HubCta href={cta.href} locale={locale}>
              {cta.label}
            </HubCta>
          </div>

          <div>
            {blocks.map((b) => (
              <div
                key={b.heading}
                className={styles.detailBlock}
                data-variant={b.variant}
              >
                <h3>{b.heading}</h3>
                <RichBody text={b.body} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
