import { defineField, defineType } from 'sanity';

/**
 * Object `ctaBlock` — utilisé par `blogPost.mainCta` et `resource.secondaryCta`.
 * `targetUrl` est volontairement un `string` (pas `url`) pour accepter aussi bien
 * un lien externe `https://…` qu'un chemin interne relatif `/contact`.
 */
export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: "Bloc d'appel à l'action",
  type: 'object',
  fields: [
    defineField({
      name: 'ctaType',
      title: 'Type de CTA',
      type: 'string',
      options: {
        list: [
          { title: 'Contacter', value: 'contact' },
          { title: 'Voir une ressource', value: 'resource' },
          { title: "Voir un cas d'étude", value: 'case_study' },
          { title: 'Lire un autre article', value: 'another_post' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'buttonText',
      title: 'Texte du bouton',
      type: 'string',
      description: "Requis dès que ce bloc CTA est utilisé.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'targetUrl',
      title: 'Lien cible',
      type: 'string',
      description: "Chemin interne (ex. /contact) ou URL externe complète (https://…).",
      validation: (Rule) => Rule.required(),
    }),
  ],
  options: { collapsible: true, collapsed: false },
});
