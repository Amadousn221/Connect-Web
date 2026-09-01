import { defineField, defineType } from 'sanity';

/**
 * Document `blogTag` — étiquette libre sur les articles de blog.
 * Création libre par le PO (ex. « Shopify », « Mobile Money », « SEO »…).
 */
export const blogTag = defineType({
  name: 'blogTag',
  title: 'Tag de blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
});
