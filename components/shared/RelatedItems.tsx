import { SliderRail } from '@/components/ui/SliderRail';
import type { BlogPostCard as BlogPostCardData, ResourceCardData } from '@/sanity/lib/types';
import type { Locale } from '@/lib/i18n/config';

import { BlogCard } from './BlogCard';
import { ResourceCard } from './ResourceCard';
import styles from './RelatedItems.module.css';

type Props =
  | { type: 'posts'; items: BlogPostCardData[]; locale: Locale; title?: string; minItems?: number }
  | { type: 'resources'; items: ResourceCardData[]; locale: Locale; title?: string; minItems?: number };

/**
 * « Articles similaires » / « Ressources similaires » (spec §7, §9).
 * Réutilise `SliderRail` (mécanique des carrousels homepage).
 *
 * `minItems` : seuil en-dessous duquel la section n'est pas rendue. Défaut 3
 * pour les listes algorithmiques (spec §7.2 — « mieux vaut rien que du bruit »).
 * Passer `minItems={1}` pour une liste choisie manuellement par l'éditeur.
 */
export function RelatedItems(props: Props) {
  const { type, items, locale, minItems = 3 } = props;
  if (!items || items.length < minItems) return null;

  const heading = props.title ?? (type === 'posts' ? 'À lire aussi' : 'Ressources similaires');
  const ariaLabel = type === 'posts' ? 'Articles similaires' : 'Ressources similaires';

  return (
    <section className={styles.section}>
      <h2 className={`cw-serif ${styles.heading}`}>{heading}</h2>
      <SliderRail ariaLabel={ariaLabel}>
        {type === 'posts'
          ? items.map((post) => <BlogCard key={post._id} post={post} locale={locale} />)
          : items.map((resource) => (
              <ResourceCard key={resource._id} resource={resource} locale={locale} />
            ))}
      </SliderRail>
    </section>
  );
}
