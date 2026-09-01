import { defineField, defineType } from 'sanity';

/**
 * Document `resourceCategory` — thématique d'une ressource.
 * Champs identiques à `blogCategory` mais fichier et type distincts pour garder
 * les deux taxonomies indépendantes (voir §4.3 de la spec).
 */
export const resourceCategory = defineType({
  name: 'resourceCategory',
  title: 'Thématique de ressource',
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
      description: 'Optionnel — pour une éventuelle page de thématique.',
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
