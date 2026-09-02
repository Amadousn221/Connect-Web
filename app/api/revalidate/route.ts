import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

/**
 * Webhook de revalidation ISR déclenché par Sanity à chaque publication.
 *
 * Config côté Sanity (Manage → API → Webhooks), à faire par le PO après merge :
 *   - URL     : https://<domaine-prod>/api/revalidate
 *   - Trigger : create / update / delete
 *   - Filter  : _type in ["blogPost","resource","blogCategory","blogTag","resourceCategory","author"]
 *   - Projection : { "_type": _type, "slug": slug.current }
 *   - HTTP Header : Authorization = "Bearer <SANITY_REVALIDATE_SECRET>"
 *
 * Les tags correspondent à ceux posés par `sanityFetch` (sanity/lib/queries.ts).
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type WebhookBody = {
  _type?: string;
  slug?: string | { current?: string };
};

function tagsFor(type: string, slug: string | null): string[] {
  switch (type) {
    case 'blogPost':
      return slug ? ['blogPost', `blogPost:${slug}`] : ['blogPost'];
    case 'resource':
      return slug ? ['resource', `resource:${slug}`] : ['resource'];
    case 'blogCategory':
      return ['blogPost', 'blogCategory'];
    case 'blogTag':
      return ['blogPost', 'blogTag'];
    case 'resourceCategory':
      return ['resource', 'resourceCategory'];
    case 'author':
      return ['author', 'blogPost', 'resource'];
    default:
      return [];
  }
}

export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'Revalidation non configurée.' }, { status: 503 });
  }

  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 });
  }

  let body: WebhookBody;
  try {
    body = (await request.json()) as WebhookBody;
  } catch {
    return NextResponse.json({ error: 'Corps invalide.' }, { status: 400 });
  }

  const type = body._type;
  if (!type) {
    return NextResponse.json({ error: 'Champ _type manquant.' }, { status: 400 });
  }

  const slug =
    typeof body.slug === 'string' ? body.slug : (body.slug?.current ?? null);

  const tags = tagsFor(type, slug);
  if (tags.length === 0) {
    return NextResponse.json({ revalidated: [], note: `Type non géré : ${type}` });
  }

  for (const tag of tags) revalidateTag(tag);

  return NextResponse.json({ revalidated: tags, at: Date.now() });
}
