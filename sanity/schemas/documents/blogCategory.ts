import { defineField, defineType } from 'sanity';

/**
 * Document `blogCategory` — UNE catégorie principale par article de blog.
 * Taxonomie indépendante de `resourceCategory` (fichier séparé volontairement :
 * une évolution de l'une ne doit pas casser l'autre).
 */
export const blogCategory = defineType({
  name: 'blogCategory',
  title: 'Catégorie de blog',
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
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Optionnel — pour une éventuelle page de catégorie.',
    }),
    defineField({
      name: 'orderRank',
      title: "Ordre d'affichage",
      type: 'number',
      description: 'Optionnel — pour trier les filtres manuellement (plus petit = premier).',
    }),
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: 'orderRankAsc',
      by: [{ field: 'orderRank', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
});
