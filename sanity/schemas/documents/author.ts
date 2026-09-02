import { defineField, defineType } from 'sanity';

import { simpleTextField } from '../blocks/portableText';

/**
 * Document `author` — signataire des articles et ressources.
 * Une seule instance pour l'instant (Amadou Diallo), extensible si équipe future.
 * Voir §10 de la spec.
 */
export const author = defineType({
  name: 'author',
  title: 'Auteur',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Fonction',
      type: 'string',
      initialValue: 'Product Owner & Fondateur, Connect Web',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Photo',
      type: 'image',
      description: 'Photo carrée, min 400×400.',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texte alternatif',
          type: 'string',
          validation: (Rule) => Rule.required().error("Le texte alternatif est obligatoire."),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortBio',
      title: 'Bio courte',
      type: 'text',
      rows: 3,
      description: '2-3 lignes affichées sous les articles. Max ~300 caractères.',
      validation: (Rule) => [
        Rule.required(),
        Rule.max(300).warning('Idéalement sous 300 caractères.'),
      ],
    }),
    simpleTextField('longBio', 'Bio longue (optionnelle)'),
    defineField({
      name: 'socialLinks',
      title: 'Réseaux sociaux',
      type: 'socialLinks',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'avatar' },
  },
});
