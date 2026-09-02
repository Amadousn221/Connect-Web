import createImageUrlBuilder from '@sanity/image-url';

import { dataset, projectId } from '../env';

const builder = createImageUrlBuilder({ projectId, dataset });

/** Source acceptée par le builder (objet image Sanity, asset, ou réf). */
export type SanityImageSource = Parameters<typeof builder.image>[0];

/**
 * Construit une URL d'image Sanity optimisée (WebP/AVIF servis par le CDN).
 * Ex. : urlFor(post.coverImage).width(1200).height(750).fit('crop').url()
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Forme d'image renvoyée par les projections GROQ (voir `IMAGE_PROJECTION`
 * dans `queries.ts`). `asset._id` est conservé pour que `urlFor` puisse
 * résoudre hotspot/crop.
 */
export type SanityImage = {
  alt: string;
  hotspot?: { x: number; y: number } | null;
  crop?: { top: number; bottom: number; left: number; right: number } | null;
  asset: {
    _id: string;
    url: string;
    lqip?: string | null;
    dimensions?: { width: number; height: number; aspectRatio: number } | null;
  } | null;
};

type ImagePropsOptions = {
  width: number;
  /**
   * Hauteur cible. Si absente : dérivée du ratio réel de l'image
   * (`asset.dimensions.aspectRatio`), sinon carré en dernier recours.
   */
  height?: number;
  quality?: number;
};

/**
 * Prépare les props d'une image de contenu Sanity pour `next/image`.
 * Retourne `null` si l'asset est absent (contenu incomplet) — l'appelant
 * doit gérer ce cas plutôt que de crasher.
 */
export function sanityImageProps(
  image: SanityImage | null | undefined,
  { width, height, quality = 80 }: ImagePropsOptions,
): { src: string; width: number; height: number; alt: string; blurDataURL?: string } | null {
  if (!image?.asset) return null;

  const ratio = image.asset.dimensions?.aspectRatio;
  const h = height ?? (ratio && ratio > 0 ? Math.round(width / ratio) : width);
  let b = builder
    .image(image as SanityImageSource)
    .width(width)
    .height(h)
    .quality(quality)
    .auto('format')
    .fit('crop');

  if (image.hotspot) {
    b = b.focalPoint(image.hotspot.x, image.hotspot.y);
  }

  return {
    src: b.url(),
    width,
    height: h,
    alt: image.alt || '',
    ...(image.asset.lqip ? { blurDataURL: image.asset.lqip } : {}),
  };
}
