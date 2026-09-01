import { defineField, defineType } from 'sanity';

/**
 * Object `programItem` — un point de la liste "Ce que vous allez apprendre"
 * (`resource.program`).
 */
export const programItem = defineType({
  name: 'programItem',
  title: 'Point du programme',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Texte',
      type: 'string',
      description: 'Une ligne, ex. « Comprendre les frais Mobile Money par opérateur ».',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'text' },
  },
});
