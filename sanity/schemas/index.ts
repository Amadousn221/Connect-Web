import type { SchemaTypeDefinition } from 'sanity';

// Documents
import { author } from './documents/author';
import { blogCategory } from './documents/blogCategory';
import { blogTag } from './documents/blogTag';
import { blogPost } from './documents/blogPost';
import { resourceCategory } from './documents/resourceCategory';
import { resource } from './documents/resource';
import { realisation } from './documents/realisation';
import { lead } from './documents/lead';

// Objects réutilisables
import { seoFields } from './objects/seoFields';
import { ctaBlock } from './objects/ctaBlock';
import { programItem } from './objects/programItem';
import { socialLinks } from './objects/socialLinks';

// Les blocs custom du Portable Text (imageBlock, codeBlock, annotation link) sont
// définis inline dans ./blocks/portableText.ts et n'ont pas besoin d'être
// enregistrés séparément ici.

export const schemaTypes: SchemaTypeDefinition[] = [
  // Documents
  author,
  blogCategory,
  blogTag,
  blogPost,
  resourceCategory,
  resource,
  realisation,
  lead,
  // Objects
  seoFields,
  ctaBlock,
  programItem,
  socialLinks,
];
