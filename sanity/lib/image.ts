import createImageUrlBuilder from '@sanity/image-url';

import { dataset, projectId } from '../env';

const builder = createImageUrlBuilder({ projectId, dataset });

/**
 * Construit une URL d'image Sanity optimisée (WebP/AVIF servis par le CDN).
 * Ex. : urlFor(post.coverImage).width(1200).height(750).fit('crop').url()
 */
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
