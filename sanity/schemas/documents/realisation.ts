import { defineField, defineType } from 'sanity';

/**
 * Document `realisation` — SCHEMA MINIMAL.
 *
 * Sert UNIQUEMENT de cible de référence pour `blogPost.relatedCaseStudy`.
 * Aujourd'hui les réalisations (ATTA, SCOD, Maison Peinture…) vivent en contenu
 * statique dans `content/fr/realisations.ts` — elles ne sont PAS gérées dans Sanity.
 *
 * À enrichir (galerie, résultats chiffrés, stack, témoignage…) si et seulement si
 * les réalisations sont un jour migrées vers le CMS. Hors périmètre de l'Étape 2.
 */
export const realisation = defineType({
  name: 'realisation',
  title: 'Réalisation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
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
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'client' },
  },
});
