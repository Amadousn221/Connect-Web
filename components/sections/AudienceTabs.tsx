'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealOnScroll } from '@/components/ui/RevealOnScroll';
import { Button } from '@/components/ui/Button';
import { ValidationNote } from '@/components/ui/ValidationNote';
import { audienceIntro, audiencePanels } from '@/content/fr/accueil';
import styles from './AudienceTabs.module.css';

// A4 — « Pour qui » : onglets 6 segments → panneau 2 colonnes (texte + image
// client). Les images portent un « À valider » (attribution à confirmer).
export function AudienceTabs() {
  const [active, setActive] = useState(0);
  const p = audiencePanels[active];

  return (
    <section id="pourqui" className={styles.section}>
      <div className="cw-sec">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={audienceIntro.eyebrow}
            title={audienceIntro.title}
            lead={audienceIntro.lead}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <div className={styles.tabs} role="tablist" aria-label="Type d'organisation">
            {audiencePanels.map((panel, i) => (
              <button
                key={panel.key}
                role="tab"
                aria-selected={i === active}
                aria-controls={`aud-panel-${panel.key}`}
                id={`aud-tab-${panel.key}`}
                className={styles.tab}
                data-active={i === active}
                onClick={() => setActive(i)}
              >
                {panel.tab}
              </button>
            ))}
          </div>

          <div
            className={styles.panel}
            role="tabpanel"
            id={`aud-panel-${p.key}`}
            aria-labelledby={`aud-tab-${p.key}`}
          >
            <div className={styles.text}>
              <h3 className={`cw-serif ${styles.title}`}>{p.title}</h3>
              <p className={styles.body}>{p.body}</p>
              <dl className={styles.meta}>
                <div>
                  <dt>Besoin</dt>
                  <dd>{p.need}</dd>
                </div>
                <div>
                  <dt>On construit</dt>
                  <dd>{p.build}</dd>
                </div>
              </dl>
              <Button href={p.cta.href} variant="primary" size="md">
                {p.cta.label}
              </Button>
            </div>

            <figure className={styles.media}>
              <div className={styles.imageWrap}>
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.image}
                />
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.clientName}>{p.client.name}</span>
                <span className={styles.clientNote}>{p.client.note}</span>
                {p.client.toValidate ? <ValidationNote>À valider</ValidationNote> : null}
              </figcaption>
            </figure>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
