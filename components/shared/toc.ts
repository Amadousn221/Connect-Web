import type { PortableTextBlock } from '@portabletext/react';

import type { RichText } from '@/sanity/lib/types';

import { slugifyHeading } from './slugify';

export type TocHeading = { id: string; text: string; level: 2 | 3 };

/**
 * Extrait les titres H2 / H3 d'un corps Portable Text pour la table des
 * matières. Les `id` générés correspondent à ceux posés par
 * `PortableTextRenderer` (même `slugifyHeading`).
 *
 * Fait côté serveur (pur) puis passé au composant client `TableOfContents` —
 * plus fiable qu'un scraping du DOM.
 */
export function extractHeadings(body: RichText | null | undefined): TocHeading[] {
  if (!Array.isArray(body)) return [];
  const headings: TocHeading[] = [];

  for (const block of body) {
    if (!isTextBlock(block)) continue;
    const style = block.style;
    if (style !== 'h2' && style !== 'h3') continue;

    const text = (block.children ?? [])
      .map((child) => (child && typeof child === 'object' && 'text' in child ? String(child.text) : ''))
      .join('')
      .trim();
    if (!text) continue;

    // Même dérivation d'`id` que PortableTextRenderer (pas de suffixe de
    // dédup : deux titres identiques pointeraient vers la même ancre — cas
    // rare dans un article bien rédigé).
    headings.push({ id: slugifyHeading(text), text, level: style === 'h2' ? 2 : 3 });
  }

  return headings;
}

function isTextBlock(
  block: unknown,
): block is PortableTextBlock & { style?: string; children?: Array<Record<string, unknown>> } {
  return (
    typeof block === 'object' &&
    block !== null &&
    '_type' in block &&
    (block as { _type: unknown })._type === 'block'
  );
}
