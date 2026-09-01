import { defineArrayMember, defineField } from 'sanity';

/**
 * Configuration Portable Text réutilisable pour les champs de contenu riche
 * (`blogPost.body`, `resource.body`, et en version allégée `author.longBio`).
 *
 * Le rendu frontend (PortableTextRenderer + serializers custom) est fait à
 * l'Étape 3 — ici on ne définit que la structure éditoriale.
 *
 * Hors périmètre MVP (à ajouter en V2 après les 5 premiers articles) :
 *   - type `table`
 *   - type `embed` (YouTube / X)
 *   - type `callout` (encadré info/warning/tip)
 */

const languageOptions = [
  { title: 'Texte brut', value: 'text' },
  { title: 'JavaScript', value: 'javascript' },
  { title: 'TypeScript', value: 'typescript' },
  { title: 'Bash', value: 'bash' },
  { title: 'JSON', value: 'json' },
  { title: 'HTML', value: 'html' },
  { title: 'CSS', value: 'css' },
];

/** Bloc de texte standard : styles, listes, décorateurs et annotation lien. */
const textBlock = defineArrayMember({
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
    { title: 'Titre H2', value: 'h2' },
    { title: 'Titre H3', value: 'h3' },
    { title: 'Titre H4', value: 'h4' },
    { title: 'Citation', value: 'blockquote' },
  ],
  lists: [
    { title: 'Puces', value: 'bullet' },
    { title: 'Numérotée', value: 'number' },
  ],
  marks: {
    decorators: [
      { title: 'Gras', value: 'strong' },
      { title: 'Italique', value: 'em' },
      { title: 'Code', value: 'code' },
    ],
    annotations: [
      {
        name: 'link',
        title: 'Lien',
        type: 'object',
        fields: [
          defineField({
            name: 'href',
            title: 'URL ou chemin',
            type: 'string',
            description: 'https://…, /ressources/mon-slug, mailto:… ou tel:…',
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: 'blank',
            title: 'Ouvrir dans un nouvel onglet',
            type: 'boolean',
            initialValue: false,
          }),
        ],
      },
    ],
  },
});

/** Image insérée dans le corps du contenu. Alt text OBLIGATOIRE (strict). */
const imageBlock = defineArrayMember({
  type: 'image',
  name: 'imageBlock',
  title: 'Image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      title: 'Texte alternatif',
      type: 'string',
      description: "Description de l'image pour l'accessibilité et le SEO. Obligatoire.",
      validation: (Rule) => Rule.required().error("Le texte alternatif est obligatoire."),
    }),
    defineField({
      name: 'caption',
      title: 'Légende',
      type: 'string',
      description: 'Optionnel — affichée sous l\'image.',
    }),
  ],
});

/** Bloc de code avec choix de langage (coloration syntaxique gérée au frontend). */
const codeBlock = defineArrayMember({
  type: 'object',
  name: 'codeBlock',
  title: 'Bloc de code',
  fields: [
    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',
      rows: 8,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Langage',
      type: 'string',
      options: { list: languageOptions },
      initialValue: 'text',
    }),
  ],
  preview: {
    select: { code: 'code', language: 'language' },
    prepare({ code, language }) {
      return {
        title: language ? `Code (${language})` : 'Bloc de code',
        subtitle: typeof code === 'string' ? code.split('\n')[0] : '',
      };
    },
  },
});

type RichTextOptions = {
  group?: string;
  required?: boolean;
  description?: string;
};

/**
 * Champ de contenu riche complet (texte + image + code).
 * @param name  nom du champ (ex. 'body')
 * @param title libellé affiché dans le Studio
 */
export function richTextField(name: string, title: string, opts: RichTextOptions = {}) {
  return defineField({
    name,
    title,
    type: 'array',
    of: [textBlock, imageBlock, codeBlock],
    group: opts.group,
    description: opts.description,
    validation: opts.required ? (Rule) => Rule.required() : undefined,
  });
}

/**
 * Version allégée : texte + liens uniquement, sans image ni code.
 * Utilisée pour `author.longBio`.
 */
export function simpleTextField(name: string, title: string, opts: RichTextOptions = {}) {
  return defineField({
    name,
    title,
    type: 'array',
    of: [textBlock],
    group: opts.group,
    description: opts.description,
    validation: opts.required ? (Rule) => Rule.required() : undefined,
  });
}
