import { SpHead, SpProse } from '@/components/sections/service-page/parts';
import { AudienceSelector } from './AudienceSelector';
import styles from './AudienceSelector.module.css';

type Data = {
  eyebrow: string;
  title: string;
  intro: string[];
  selectorLabel: string;
  panelEyebrow: string;
  publics: { label: string; seeks: string[]; icon?: string }[];
  outro: string[];
};

// S3 — « Plusieurs publics, un seul site ». Tête + prose + sélecteur interactif
// (client) + repli <noscript> + prose de conclusion.
export function AudiencesSection({ data }: { data: Data }) {
  return (
    <>
      <SpHead id="ong-s3" eyebrow={data.eyebrow} title={data.title} />
      <div className={styles.introProse}>
        <SpProse blocks={data.intro} />
      </div>

      <AudienceSelector
        label={data.selectorLabel}
        panelEyebrow={data.panelEyebrow}
        publics={data.publics}
      />
      <noscript>
        <ul className={styles.fallbackList}>
          {data.publics.map((p) => (
            <li key={p.label}>
              <strong>{p.label}&nbsp;:</strong> {p.seeks.join(' · ')}
            </li>
          ))}
        </ul>
      </noscript>

      <div className={styles.outroProse}>
        <SpProse blocks={data.outro} />
      </div>
    </>
  );
}
