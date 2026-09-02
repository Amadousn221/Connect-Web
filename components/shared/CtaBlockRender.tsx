import { Button } from '@/components/ui/Button';
import type { CtaBlock } from '@/sanity/lib/types';
import { localePath } from '@/lib/i18n/routing';
import type { Locale } from '@/lib/i18n/config';

import styles from './CtaBlockRender.module.css';

/**
 * Rendu de l'objet `mainCta` (blog) / `secondaryCta` (ressource) du schéma —
 * bloc large, ton distinct (spec §6.2 Zone 8). `targetUrl` accepte un chemin
 * interne (`/contact`) ou une URL externe : `Button` gère les deux.
 */
export function CtaBlockRender({ cta, locale }: { cta?: CtaBlock; locale: Locale }) {
  if (!cta?.buttonText || !cta.targetUrl) return null;

  const isExternal = /^https?:\/\//.test(cta.targetUrl);
  const href = isExternal ? cta.targetUrl : localePath(locale, cta.targetUrl);

  return (
    <div className={styles.block}>
      <Button href={href} variant="primary" size="lg" onDark>
        {cta.buttonText}
      </Button>
    </div>
  );
}
