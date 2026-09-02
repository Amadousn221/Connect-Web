import { defineArrayMember, defineField, defineType } from 'sanity';

import { richTextField } from '../blocks/portableText';

/** Exclut le document courant (et son brouillon) d'une liste de références. */
function excludeSelf({ document }: { document?: { _id?: string } }) {
  const rawId = document?._id ?? '';
  const id = rawId.replace(/^drafts\./, '');
  return {
    filter: '_id != $id && _id != $draftId',
    params: { id, draftId: `drafts.${id}` },
  };
}

/**
 * Document `blogPost` — article éditorial. Voir §2.1 de la spec.
 */
export const blogPost = defineType({
  name: 'blogPost',
  title: 'Article de blog',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenu', default: true },
    { name: 'taxonomy', title: 'Taxonomie & relations' },
    { name: 'seo', title: 'SEO' },
    { name: 'meta', title: 'Meta' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      group: 'content',
      description: 'Idéalement sous 70 caractères.',
      validation: (Rule) => [
        Rule.required(),
        Rule.max(70).warning('Au-delà de 70 caractères, le titre risque d\'être tronqué.'),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Auteur',
      type: 'reference',
      to: [{ type: 'author' }],
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      group: 'content',
      description: 'Ratio 16:10 recommandé.',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texte alternatif',
          type: 'string',
          validation: (Rule) => Rule.required().error('Le texte alternatif est obligatoire.'),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Extrait',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Affiché sur les cartes catalogue et comme meta description par défaut.',
      validation: (Rule) => [
        Rule.required(),
        Rule.min(100).warning('Un extrait trop court passe mal sur les cartes.'),
        Rule.max(200).warning('Au-delà de 200 caractères, l\'extrait est tronqué.'),
      ],
    }),
    defineField({
      name: 'readingTime',
      title: 'Temps de lecture (minutes)',
      type: 'number',
      group: 'content',
      validation: (Rule) => Rule.required().integer().min(1),
    }),
    defineField({
      name: 'lede',
      title: 'Chapô',
      type: 'text',
      rows: 4,
      group: 'content',
      description: '1-2 phrases affichées entre le titre et le corps (typo plus grande).',
    }),
    defineField({
      name: 'keyPoints',
      title: 'En bref',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      group: 'content',
      description: '3 à 5 points clés pour les lecteurs pressés.',
      validation: (Rule) => Rule.max(5),
    }),
    richTextField('body', "Corps de l'article", { group: 'content', required: true }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'reference',
      to: [{ type: 'blogCategory' }],
      group: 'taxonomy',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'blogTag' }] })],
      group: 'taxonomy',
    }),
    defineField({
      name: 'mainCta',
      title: "CTA de fin d'article",
      type: 'ctaBlock',
      group: 'taxonomy',
    }),
    defineField({
      name: 'relatedResource',
      title: 'Ressources associées',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'resource' }] })],
      group: 'taxonomy',
      description: 'Ressources téléchargeables mentionnées dans l\'article (max 2).',
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: 'relatedCaseStudy',
      title: "Cas d'étude associé",
      type: 'reference',
      to: [{ type: 'realisation' }],
      group: 'taxonomy',
    }),
    defineField({
      name: 'manualRelatedPosts',
      title: 'Articles similaires (choix manuel)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'blogPost' }],
          options: { filter: excludeSelf },
        }),
      ],
      group: 'taxonomy',
      description: "Override de l'algorithme automatique (max 3).",
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoFields',
      group: 'seo',
    }),
    defineField({
      name: 'viewCount',
      title: 'Nombre de vues',
      type: 'number',
      group: 'meta',
      initialValue: 0,
      readOnly: true,
      hidden: true,
      description: 'Incrémenté automatiquement côté frontend.',
    }),
  ],
  orderings: [
    {
      title: 'Date de publication (récent → ancien)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', media: 'coverImage', category: 'category.title' },
    prepare({ title, media, category }) {
      return { title, media, subtitle: category };
    },
  },
});
