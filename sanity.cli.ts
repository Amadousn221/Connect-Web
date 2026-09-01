import { defineCliConfig } from 'sanity/cli';

// Config pour la CLI Sanity (`npx sanity manage`, `npx sanity deploy`, …).
// Le CLI charge lui-même les fichiers .env / .env.local.
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
});
