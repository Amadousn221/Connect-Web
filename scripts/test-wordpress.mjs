#!/usr/bin/env node
/**
 * Test de bout en bout WPGraphQL — critère de sortie du Milestone M1.
 *
 *   node scripts/test-wordpress.mjs
 *
 * Vérifie, contre l'instance WordPress headless renseignée dans .env.local :
 *   1. l'endpoint répond ;
 *   2. les 4 types de contenu existent dans le schéma
 *      (caseStudies, portfolioItems, teamMembers, resources) ;
 *   3. les 2 taxonomies existent (sectors, offerCategories) ;
 *   4. les groupes ACF sont exposés (caseStudyFields & co) — via introspection ;
 *   5. si des entrées de test existent, on en lit une de chaque type et on
 *      affiche quels champs optionnels sont null (contrôle « état absent »).
 *
 * Aucune dépendance : Node >= 20 (fetch natif).
 * Sort avec le code 1 au premier échec bloquant.
 */

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// ── mini-chargeur .env.local (pas de dépendance dotenv) ────────────────────
function loadEnv() {
  for (const file of ['.env.local', '.env']) {
    try {
      const raw = readFileSync(resolve(ROOT, file), 'utf8');
      for (const line of raw.split('\n')) {
        const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
        if (m && !(m[1] in process.env)) {
          process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
        }
      }
    } catch {
      /* fichier absent : on continue */
    }
  }
}
loadEnv();

const API = process.env.WORDPRESS_API_URL;
const AUTH_USER = process.env.WORDPRESS_AUTH_USER;
const AUTH_PASS = process.env.WORDPRESS_AUTH_APP_PASSWORD;

const c = {
  ok: (s) => `\x1b[32m✓\x1b[0m ${s}`,
  ko: (s) => `\x1b[31m✗\x1b[0m ${s}`,
  warn: (s) => `\x1b[33m!\x1b[0m ${s}`,
  head: (s) => `\n\x1b[1m${s}\x1b[0m`,
};

let failed = false;
const fail = (msg) => {
  failed = true;
  console.log(c.ko(msg));
};

if (!API) {
  console.error(
    c.ko(
      'WORDPRESS_API_URL absent. Copier .env.example → .env.local et renseigner ' +
        "l'URL de l'endpoint WPGraphQL (fournie par le PO — instance Hostinger).",
    ),
  );
  process.exit(1);
}

async function gql(query, variables) {
  const headers = { 'Content-Type': 'application/json' };
  if (AUTH_USER && AUTH_PASS) {
    headers.Authorization =
      'Basic ' + Buffer.from(`${AUTH_USER}:${AUTH_PASS}`).toString('base64');
  }
  const res = await fetch(API, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  const json = await res.json();
  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join(' · '));
  }
  return json.data;
}

// ── 1. endpoint joignable ─────────────────────────────────────────────────
console.log(c.head(`Endpoint : ${API}`));
try {
  await gql(`query { generalSettings { title } }`);
  console.log(c.ok('endpoint WPGraphQL répond'));
} catch (e) {
  fail(`endpoint injoignable ou invalide : ${e.message}`);
  process.exit(1);
}

// ── 2 & 3. types & taxonomies présents dans le schéma ─────────────────────
console.log(c.head('Schéma — types de contenu & taxonomies'));
const EXPECTED_TYPES = [
  'CaseStudy',
  'PortfolioItem',
  'TeamMember',
  'Resource',
  'Sector',
  'OfferCategory',
];
try {
  const data = await gql(`
    query { __schema { types { name } } }
  `);
  const names = new Set(data.__schema.types.map((t) => t.name));
  for (const t of EXPECTED_TYPES) {
    if (names.has(t)) console.log(c.ok(`type ${t}`));
    else fail(`type ${t} absent du schéma — CPT/taxonomie non exposé ?`);
  }
} catch (e) {
  fail(`introspection impossible : ${e.message}`);
}

// ── 4. groupes ACF exposés ───────────────────────────────────────────────
console.log(c.head('Schéma — groupes ACF'));
const ACF_TYPES = [
  'CaseStudyFields',
  'PortfolioItemFields',
  'TeamMemberFields',
  'ResourceFields',
];
try {
  const data = await gql(`query { __schema { types { name } } }`);
  const names = new Set(data.__schema.types.map((t) => t.name));
  for (const t of ACF_TYPES) {
    if (names.has(t)) console.log(c.ok(`groupe ACF ${t}`));
    else
      console.log(
        c.warn(
          `groupe ACF ${t} absent — vérifier WPGraphQL for ACF + graphql_field_name`,
        ),
      );
  }
} catch (e) {
  console.log(c.warn(`introspection ACF impossible : ${e.message}`));
}

// ── 5. lecture d'une entrée de chaque type + contrôle des champs optionnels ─
console.log(c.head('Contenu — une entrée par type (si présente)'));

async function peek(label, query, pick) {
  try {
    const data = await gql(query);
    const node = pick(data);
    if (!node) {
      console.log(c.warn(`${label} : aucune entrée publiée (crée une entrée de test)`));
      return;
    }
    console.log(c.ok(`${label} : entrée « ${node.__label ?? node.slug ?? node.id} » lue`));
    if (node.__optional) {
      for (const [k, v] of Object.entries(node.__optional)) {
        console.log(
          `    ${v === null || (Array.isArray(v) && v.length === 0) ? '·' : '●'} ${k} : ${
            v === null ? 'null (bloc masqué)' : Array.isArray(v) ? `${v.length} élément(s)` : 'présent'
          }`,
        );
      }
    }
  } catch (e) {
    fail(`${label} : ${e.message}`);
  }
}

await peek(
  'caseStudy',
  `query {
     caseStudies(first: 1, where: { status: PUBLISH }) {
       nodes {
         id slug
         caseStudyFields {
           casClientName casTitleFr casTitleEn
           casAutomationIntroFr casExternalUrl
           casResult { casResultValue }
           casTestimonialQuoteFr
           casGallery { nodes { sourceUrl } }
         }
       }
     }
   }`,
  (d) => {
    const n = d.caseStudies?.nodes?.[0];
    if (!n) return null;
    const f = n.caseStudyFields ?? {};
    return {
      slug: n.slug,
      __label: f.casTitleFr || n.slug,
      __optional: {
        automation_chapter: f.casAutomationIntroFr ?? null,
        result: f.casResult ?? [],
        testimonial: f.casTestimonialQuoteFr ?? null,
        external_url: f.casExternalUrl ?? null,
        gallery: f.casGallery?.nodes ?? [],
      },
    };
  },
);

await peek(
  'portfolioItem',
  `query {
     portfolioItems(first: 1, where: { status: PUBLISH }) {
       nodes { id slug portfolioItemFields { realTitleFr realExternalUrl } }
     }
   }`,
  (d) => {
    const n = d.portfolioItems?.nodes?.[0];
    if (!n) return null;
    const f = n.portfolioItemFields ?? {};
    return {
      slug: n.slug,
      __label: f.realTitleFr || n.slug,
      __optional: { external_url: f.realExternalUrl ?? null },
    };
  },
);

await peek(
  'teamMember',
  `query {
     teamMembers(first: 1, where: { status: PUBLISH }) {
       nodes { id teamMemberFields { membreName } }
     }
   }`,
  (d) => {
    const n = d.teamMembers?.nodes?.[0];
    if (!n) return null;
    return { id: n.id, __label: n.teamMemberFields?.membreName || n.id };
  },
);

await peek(
  'resource',
  `query {
     resources(first: 1, where: { status: PUBLISH }) {
       nodes { id slug resourceFields { ressourceTitleFr } }
     }
   }`,
  (d) => {
    const n = d.resources?.nodes?.[0];
    if (!n) return null;
    return { slug: n.slug, __label: n.resourceFields?.ressourceTitleFr || n.slug };
  },
);

console.log(
  failed
    ? c.head('\x1b[31mRÉSULTAT : échecs — voir ci-dessus.\x1b[0m')
    : c.head('\x1b[32mRÉSULTAT : OK.\x1b[0m'),
);
process.exit(failed ? 1 : 0);
