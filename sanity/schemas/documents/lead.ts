import { defineField, defineType } from 'sanity';

/**
 * Document `lead` — capture email d'une ressource téléchargeable (décision D1).
 *
 * Créé UNIQUEMENT côté serveur par l'endpoint `/api/download-resource`
 * (client Sanity authentifié avec `SANITY_API_WRITE_TOKEN`). Aucune création
 * ni édition manuelle dans le Studio : tous les champs sont `readOnly`, sauf
 * `notes` (usage interne).
 *
 * `resourceSnapshot` fige le titre/slug/type au moment de la capture pour
 * survivre à une suppression ou un renommage futur de la ressource.
 */
export const lead = defineType({
  name: 'lead',
  title: 'Lead (téléchargement ressource)',
  type: 'document',
  fields: [
    defineField({
      name: 'nom',
      title: 'Nom',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'organisation',
      title: 'Organisation',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'resourceRef',
      title: 'Ressource',
      type: 'reference',
      to: [{ type: 'resource' }],
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resourceSnapshot',
      title: 'Ressource (instantané)',
      type: 'object',
      readOnly: true,
      fields: [
        defineField({ name: 'title', title: 'Titre', type: 'string' }),
        defineField({ name: 'slug', title: 'Slug', type: 'string' }),
        defineField({ name: 'resourceType', title: 'Type', type: 'string' }),
      ],
    }),
    defineField({
      name: 'consentRgpd',
      title: 'Consentement RGPD',
      type: 'boolean',
      readOnly: true,
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Date de soumission',
      type: 'datetime',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      readOnly: true,
      initialValue: 'resource-download',
    }),
    defineField({
      name: 'emailSent',
      title: 'Email envoyé',
      type: 'boolean',
      readOnly: true,
      initialValue: false,
    }),
    defineField({
      name: 'emailSentAt',
      title: "Date d'envoi de l'email",
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'notes',
      title: 'Notes internes',
      type: 'text',
      rows: 3,
      description: 'Seul champ éditable — pour un suivi commercial manuel.',
    }),
  ],
  orderings: [
    {
      title: 'Date de soumission (récent → ancien)',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      email: 'email',
      resourceTitle: 'resourceSnapshot.title',
      submittedAt: 'submittedAt',
      emailSent: 'emailSent',
    },
    prepare({ email, resourceTitle, submittedAt, emailSent }) {
      const date = submittedAt
        ? new Date(submittedAt).toLocaleDateString('fr-FR')
        : '';
      return {
        title: email,
        subtitle: [resourceTitle, date, emailSent ? '✓ envoyé' : '⏳ à envoyer']
          .filter(Boolean)
          .join(' · '),
      };
    },
  },
});
