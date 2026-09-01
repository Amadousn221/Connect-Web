import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { apiVersion, dataset, projectId } from './sanity/env';
import { schemaTypes } from './sanity/schemas';
import { deskStructure } from './sanity/lib/deskStructure';

// Config du Sanity Studio embarqué dans Next.js à /studio.
// L'authentification est celle, native, de Sanity (login sur le Studio) —
// aucune auth custom à ajouter.
export default defineConfig({
  basePath: '/studio',
  title: 'Connect Web CMS',
  projectId,
  dataset,
  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
});
