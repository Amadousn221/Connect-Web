/**
 * Types TypeScript des documents Sanity et des résultats de query.
 *
 * Écrits à la main (pas de codegen Sanity pour l'instant — on reste simple).
 * Ils doivent rester alignés sur `sanity/schemas/**` et sur les projections
 * de `sanity/lib/queries.ts`. Si un champ de schema change, mettre à jour ici.
 */

import type { PortableTextBlock } from '@portabletext/types';

import type { SanityImage } from './image';

export type { SanityImage } from './image';
export type { BlogOrderBy, ResourceOrderBy } from './constants';

// ── Blocs custom du Portable Text (voir blocks/portableText.ts) ────────────
export type PortableImageBlock = {
  _type: 'imageBlock';
  _key: string;
} & SanityImage & { caption?: string };

export type PortableCodeBlock = {
  _type: 'codeBlock';
  _key: string;
  code: string;
  language?: string;
};

export type RichText = Array<PortableTextBlock | PortableImageBlock | PortableCodeBlock>;

// ── Objects réutilisables ─────────────────────────────────────────────────
export type SeoFields = {
  seoTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  ogImage?: SanityImage | null;
};

export type CtaBlock = {
  ctaType?: 'contact' | 'resource' | 'case_study' | 'another_post';
  buttonText: string;
  targetUrl: string;
};

export type ProgramItem = {
  _key: string;
  text: string;
};

export type SocialLinks = {
  linkedin?: string;
  twitter?: string;
  email?: string;
};

// ── Documents ─────────────────────────────────────────────────────────────
export type Author = {
  _id: string;
  _type: 'author';
  name: string;
  role: string;
  avatar: SanityImage | null;
  shortBio: string;
  longBio?: RichText;
  socialLinks?: SocialLinks;
};

export type BlogCategory = {
  _id: string;
  _type: 'blogCategory';
  title: string;
  slug: string;
  description?: string;
  orderRank?: number;
};

export type BlogTag = {
  _id: string;
  _type: 'blogTag';
  title: string;
  slug: string;
};

export type ResourceCategory = {
  _id: string;
  _type: 'resourceCategory';
  title: string;
  slug: string;
  description?: string;
  orderRank?: number;
};

export type Realisation = {
  _id: string;
  _type: 'realisation';
  title: string;
  slug: string;
  client?: string;
};

export type Lead = {
  _id: string;
  _type: 'lead';
  nom: string;
  email: string;
  organisation?: string;
  resourceRef: { _type: 'reference'; _ref: string };
  resourceSnapshot?: { title?: string; slug?: string; resourceType?: string };
  consentRgpd: boolean;
  submittedAt: string;
  source: string;
  emailSent: boolean;
  emailSentAt?: string;
  notes?: string;
};

export type ResourceDeliveryMode = 'download' | 'online';

export type ResourceType =
  | 'guide_pdf'
  | 'livre_blanc'
  | 'checklist'
  | 'template'
  | 'formation_video'
  | 'webinaire'
  | 'glossaire'
  | 'etude';

// ── Résultats de query : cartes (projections légères pour les catalogues) ──
export type BlogPostCard = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  readingTime: number;
  coverImage: SanityImage | null;
  category: Pick<BlogCategory, 'title' | 'slug'> | null;
};

export type ResourceCardData = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  resourceType: ResourceType;
  deliveryMode: ResourceDeliveryMode;
  pagesOrDuration?: string;
  downloadCount?: number;
  coverImage: SanityImage | null;
  category: Pick<ResourceCategory, 'title' | 'slug'> | null;
};

// ── Résultats de query : documents complets (pages de détail) ──────────────
export type BlogPostFull = {
  _id: string;
  _updatedAt: string;
  title: string;
  slug: string;
  publishedAt: string;
  readingTime: number;
  excerpt: string;
  lede?: string;
  keyPoints?: string[];
  coverImage: SanityImage | null;
  body: RichText;
  author: Author | null;
  category: BlogCategory | null;
  tags: BlogTag[];
  mainCta?: CtaBlock;
  relatedResource: ResourceCardData[];
  relatedCaseStudy: Realisation | null;
  manualRelatedPosts: BlogPostCard[];
  seo?: SeoFields;
  viewCount?: number;
};

export type ResourceFull = {
  _id: string;
  _updatedAt: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string;
  resourceType: ResourceType;
  deliveryMode: ResourceDeliveryMode;
  /**
   * Métadonnées du fichier si deliveryMode === 'download' (jamais l'URL directe :
   * le lien signé est généré côté serveur à l'Étape 3.4 après capture email).
   */
  downloadFile: { originalFilename?: string; extension?: string; size?: number } | null;
  /** Présent uniquement si deliveryMode === 'online'. */
  onlineUrl: string | null;
  pagesOrDuration?: string;
  prerequisites?: string;
  program: ProgramItem[];
  confirmationMessage?: string;
  coverImage: SanityImage | null;
  body: RichText;
  author: Author | null;
  category: ResourceCategory | null;
  secondaryCta?: CtaBlock;
  relatedPosts: BlogPostCard[];
  relatedResources: ResourceCardData[];
  seo?: SeoFields;
  downloadCount?: number;
};

// ── Agrégats (sidebar / filtres) ──────────────────────────────────────────
export type CategoryWithCount = {
  _id: string;
  title: string;
  slug: string;
  count: number;
};

export type TagWithCount = {
  _id: string;
  title: string;
  slug: string;
  count: number;
};

// ── Enveloppes paginées ───────────────────────────────────────────────────
export type BlogIndexResult = {
  items: BlogPostCard[];
  total: number;
};

export type ResourceIndexResult = {
  items: ResourceCardData[];
  total: number;
};
