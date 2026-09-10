import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { BrandGlyph, type BrandName } from '@/components/ui/BrandGlyph';
import { TrustLine } from '@/components/sections/TrustLine';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';
import styles from './ServiceHero.module.css';

// ── Hero partagé des pages Services ───────────────────────────────────────
// Un seul composant, réutilisé par les 13 pages du chantier. Le contenu passe
// entièrement par les props — jamais de duplication page par page.
//
// Direction (handoff §4) : pétrole sombre, photo d'ambiance cover pleine
// largeur, overlay lisible, texte aligné à gauche, hauteur compacte pilotée
// par le contenu (pas de hauteur fixe qui coupe). Aucun collage d'écrans.
//
// Repères V6 : H1 Newsreader 36→61px (37px mobile) ; intro 16px / 1,7 /
// max 650px ; rythme vertical ~65/56 desktop, 43/38 mobile.

export type ServiceHeroCta = { label: string; href: string };

/** Point focal de l'image de fond, en `object-position`. */
export type ServiceHeroFocal = string; // ex. '50% 30%'

export interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: ServiceHeroCta;
  secondaryCta?: ServiceHeroCta;
  /** Image d'ambiance de fond (cover). Absente → aplat pétrole seul. */
  image?: { src: string; alt?: string };
  focalDesktop?: ServiceHeroFocal;
  focalMobile?: ServiceHeroFocal;
  /** Intensité de l'overlay au-dessus de l'image. `strong` par défaut. */
  overlay?: 'strong' | 'medium';
  /** Ligne de réassurance optionnelle sous les CTA. */
  reassurance?: string[];
  /** Marque technologique affichée devant l'eyebrow (pages WordPress / Shopify).
   *  Logo officiel, non déformé, lisible sur le pétrole. */
  brandGlyph?: BrandName;
  /** Si fourni, les hrefs internes des CTA (hors `#ancre` et `http…`) sont
   *  préfixés par la locale. Absent → href passé tel quel (compat. hub). */
  locale?: Locale;
}

export function ServiceHero({
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
  image,
  focalDesktop = '50% 50%',
  focalMobile,
  overlay = 'strong',
  reassurance,
  brandGlyph,
  locale,
}: ServiceHeroProps) {
  const resolve = (href: string) =>
    locale && !href.startsWith('#') && !/^[a-z]+:/i.test(href)
      ? localePath(locale, href)
      : href;
  return (
    <section
      className={styles.hero}
      data-overlay={overlay}
      style={
        {
          '--sh-focal-desktop': focalDesktop,
          '--sh-focal-mobile': focalMobile ?? focalDesktop,
        } as React.CSSProperties
      }
    >
      {image ? (
        <div className={styles.media} aria-hidden="true">
          <Image
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.mediaImg}
          />
        </div>
      ) : null}

      <div className={`cw-sec ${styles.inner}`}>
        {brandGlyph ? (
          <span className={styles.brandRow}>
            <BrandGlyph brand={brandGlyph} label={brandGlyph === 'wordpress' ? 'WordPress' : 'Shopify'} size={20} />
            <Eyebrow tone="on-dark">{eyebrow}</Eyebrow>
          </span>
        ) : (
          <Eyebrow tone="on-dark">{eyebrow}</Eyebrow>
        )}

        <h1 className={`cw-serif ${styles.title}`}>{title}</h1>
        <p className={styles.intro}>{intro}</p>

        <div className={styles.ctas}>
          <Button href={resolve(primaryCta.href)} variant="primary" onDark size="xs">
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button href={resolve(secondaryCta.href)} variant="link" onDark size="xs">
              {secondaryCta.label} →
            </Button>
          ) : null}
        </div>

        {reassurance && reassurance.length > 0 ? (
          <TrustLine items={reassurance} tone="on-dark" className={styles.trust} />
        ) : null}
      </div>
    </section>
  );
}
