import { defineField, defineType } from 'sanity';

/**
 * Object réutilisable `seoFields` — utilisé par `blogPost.seo` et `resource.seo`.
 * Tous les champs sont des overrides optionnels : s'ils sont vides, le frontend
 * (Étape 3) retombe sur `title` / `excerpt` / `coverImage`.
 */
export const seoFields = defineType({
  name: 'seoFields',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'Titre SEO',
      type: 'string',
      description: 'Override du titre dans les résultats de recherche. Max 60 caractères.',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description: "Override de l'extrait pour la balise meta description. Max 155 caractères.",
      validation: (Rule) => Rule.max(155),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'URL canonique',
      type: 'url',
      description: 'Rare — uniquement si ce contenu existe déjà ailleurs sur le web.',
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'ogImage',
      title: 'Image de partage (Open Graph)',
      type: 'image',
      description: "Si différente de l'image de couverture.",
      options: { hotspot: true },
    }),
  ],
  options: { collapsible: true, collapsed: true },
});
