import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { apiVersion, dataset, projectId } from './sanity/env';
import { schemaTypes } from './sanity/schemas';

// Config du Sanity Studio embarqué dans Next.js à /studio.
// L'authentification est celle, native, de Sanity (login sur le Studio) —
// aucune auth custom à ajouter.
export default defineConfig({
  basePath: '/studio',
  title: 'Connect Web CMS',
  projectId,
  dataset,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
});
