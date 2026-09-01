import { defineField, defineType } from 'sanity';

/**
 * Object `socialLinks` — sous-objet de `author`.
 * Fichier séparé pour la lisibilité (voir §10 de la spec).
 */
export const socialLinks = defineType({
  name: 'socialLinks',
  title: 'Réseaux sociaux',
  type: 'object',
  fields: [
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter / X',
      type: 'url',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'email',
      title: 'Email public',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
  ],
  options: { collapsible: true, collapsed: false },
});
