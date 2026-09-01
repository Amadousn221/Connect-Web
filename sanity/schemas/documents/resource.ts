import { defineArrayMember, defineField, defineType } from 'sanity';

import { richTextField } from '../blocks/portableText';

/**
 * Document `resource` — guide, checklist, template, formation, livre blanc… Voir §3.1.
 *
 * ÉCART ASSUMÉ vis-à-vis de la spec littérale (§3.1 / §3.3) :
 * la spec décrit un champ `requiresEmail` "computed" dérivé de `deliveryMode`.
 * Sanity ne sait pas stocker de façon fiable un champ réellement calculé, et
 * `initialValue` est statique (évalué à la création, avant le choix du type).
 * → PAS de champ `requiresEmail` stocké.
 * → `deliveryMode.initialValue = 'download'` (couvre 5 types sur 8).
 * → Une validation "warning" signale les incohérences type ↔ mode.
 * → La règle "email requis si téléchargement" est appliquée 100 % côté frontend
 *   (Étape 3), à partir de `deliveryMode`.
 */

const RESOURCE_TYPES = [
  { title: 'Guide PDF', value: 'guide_pdf' },
  { title: 'Livre blanc', value: 'livre_blanc' },
  { title: 'Checklist', value: 'checklist' },
  { title: 'Template', value: 'template' },
  { title: 'Formation vidéo', value: 'formation_video' },
  { title: 'Webinaire', value: 'webinaire' },
  { title: 'Glossaire', value: 'glossaire' },
  { title: 'Étude', value: 'etude' },
] as const;

/** Types dont le mode "naturel" est la consultation en ligne. */
const ONLINE_TYPES = ['formation_video', 'webinaire', 'glossaire'];

const RESOURCE_TYPE_LABELS: Record<string, string> = Object.fromEntries(
  RESOURCE_TYPES.map((t) => [t.value, t.title]),
);

type ConditionalParent = { parent?: { deliveryMode?: string } };

const hideUnlessDownload = ({ parent }: ConditionalParent) =>
  parent?.deliveryMode !== 'download';
const hideUnlessOnline = ({ parent }: ConditionalParent) =>
  parent?.deliveryMode !== 'online';

export const resource = defineType({
  name: 'resource',
  title: 'Ressource',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenu', default: true },
    { name: 'access', title: 'Accès & format' },
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
      validation: (Rule) => Rule.required(),
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
      description: 'Ratio 4:3, style « couverture de livre ».',
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
      description: 'Résume ce que le lecteur va obtenir.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resourceType',
      title: 'Type de ressource',
      type: 'string',
      group: 'access',
      options: { list: [...RESOURCE_TYPES] },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deliveryMode',
      title: 'Mode de mise à disposition',
      type: 'string',
      group: 'access',
      description:
        'Passer à « Consultable en ligne » pour formation vidéo, webinaire, glossaire.',
      options: {
        list: [
          { title: 'Fichier à télécharger', value: 'download' },
          { title: 'Consultable en ligne', value: 'online' },
        ],
        layout: 'radio',
      },
      initialValue: 'download',
      validation: (Rule) => [
        Rule.required(),
        Rule.custom((value, context) => {
          const type = (context.document as { resourceType?: string } | undefined)?.resourceType;
          if (!value || !type) return true;
          if (value === 'download' && ONLINE_TYPES.includes(type)) {
            return 'Ce type est généralement consultable en ligne — vérifiez le mode.';
          }
          if (value === 'online' && !ONLINE_TYPES.includes(type)) {
            return 'Ce type est généralement un fichier à télécharger — vérifiez le mode.';
          }
          return true;
        }).warning(),
      ],
    }),
    defineField({
      name: 'downloadFile',
      title: 'Fichier à télécharger',
      type: 'file',
      group: 'access',
      description: 'PDF, ZIP ou XLSX principalement. Obligatoire si mode = téléchargement.',
      hidden: hideUnlessDownload,
    }),
    defineField({
      name: 'onlineUrl',
      title: 'URL de consultation',
      type: 'url',
      group: 'access',
      description:
        'Page interne, vidéo non listée, plateforme de formation… Obligatoire si mode = en ligne.',
      hidden: hideUnlessOnline,
      validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'pagesOrDuration',
      title: 'Pages ou durée',
      type: 'string',
      group: 'content',
      description: 'Ex. « 42 pages », « 2h30 », « 12 modules ».',
    }),
    defineField({
      name: 'prerequisites',
      title: 'Prérequis',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Ce que le lecteur doit connaître avant.',
    }),
    defineField({
      name: 'program',
      title: 'Au programme',
      type: 'array',
      of: [defineArrayMember({ type: 'programItem' })],
      group: 'content',
      description: '« Ce que vous allez apprendre » — 3 à 6 points.',
      validation: (Rule) => Rule.required().min(3).max(6),
    }),
    defineField({
      name: 'confirmationMessage',
      title: 'Message de confirmation',
      type: 'text',
      rows: 2,
      group: 'access',
      description:
        'Affiché après capture email. Obligatoire si mode = téléchargement. Ex. « Merci. Vous recevez le guide par email dans quelques instants. »',
      hidden: hideUnlessDownload,
    }),
    richTextField('body', 'Description longue', { group: 'content', required: true }),
    defineField({
      name: 'secondaryCta',
      title: 'CTA secondaire',
      type: 'ctaBlock',
      group: 'taxonomy',
    }),
    defineField({
      name: 'category',
      title: 'Thématique',
      type: 'reference',
      to: [{ type: 'resourceCategory' }],
      group: 'taxonomy',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Articles de blog associés',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'blogPost' }] })],
      group: 'taxonomy',
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'relatedResources',
      title: 'Ressources similaires (choix manuel)',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'resource' }] })],
      group: 'taxonomy',
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoFields',
      group: 'seo',
    }),
    defineField({
      name: 'downloadCount',
      title: 'Nombre de téléchargements / consultations',
      type: 'number',
      group: 'meta',
      initialValue: 0,
      readOnly: true,
      hidden: true,
    }),
  ],
  validation: (Rule) =>
    Rule.custom((doc) => {
      const d = doc as
        | {
            deliveryMode?: string;
            downloadFile?: unknown;
            onlineUrl?: unknown;
            confirmationMessage?: unknown;
          }
        | undefined;
      if (!d) return true;
      const errors: string[] = [];
      if (d.deliveryMode === 'download') {
        if (!d.downloadFile) errors.push('Le fichier à télécharger est obligatoire (mode téléchargement).');
        if (!d.confirmationMessage) errors.push('Le message de confirmation est obligatoire (mode téléchargement).');
      }
      if (d.deliveryMode === 'online' && !d.onlineUrl) {
        errors.push("L'URL de consultation est obligatoire (mode en ligne).");
      }
      return errors.length ? errors.join(' ') : true;
    }),
  orderings: [
    {
      title: 'Date de publication (récent → ancien)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Plus téléchargées',
      name: 'downloadCountDesc',
      by: [{ field: 'downloadCount', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', media: 'coverImage', resourceType: 'resourceType' },
    prepare({ title, media, resourceType }) {
      return {
        title,
        media,
        subtitle: resourceType ? RESOURCE_TYPE_LABELS[resourceType] ?? resourceType : undefined,
      };
    },
  },
});
