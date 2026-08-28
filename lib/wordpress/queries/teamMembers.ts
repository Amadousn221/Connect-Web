import { fetchGraphQL } from '../client';
import type { TeamMember, WpImage } from '../types';
import { IMAGE_FIELDS } from './_fragments';

// Requête « équipe » (team_member).
// RÈGLE P08 : la section Agence / TeamGrid reste MASQUÉE tant qu'aucun membre
// réel n'est publié. Cette requête renvoie donc `[]` par défaut — et c'est le
// cas nominal, pas une anomalie. Le composant ne rend rien quand la liste est
// vide (jamais de carte « photo à venir »).

const ALL_TEAM_MEMBERS = /* GraphQL */ `
  ${IMAGE_FIELDS}
  query AllTeamMembers {
    teamMembers(first: 50, where: { status: PUBLISH, orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        id
        featuredImage { node { ...ImageFields } }
        teamMemberFields {
          membreName
          membreRoleFr
          membreRoleEn
          membreBioFr
          membreBioEn
          membrePhoto { node { ...ImageFields } }
        }
      }
    }
  }
`;

function mapImage(node: unknown): WpImage | null {
  const n = node as
    | { sourceUrl?: string; altText?: string | null; mediaDetails?: { width?: number; height?: number } }
    | null
    | undefined;
  if (!n?.sourceUrl) return null;
  return {
    sourceUrl: n.sourceUrl,
    altText: n.altText ?? null,
    width: n.mediaDetails?.width ?? null,
    height: n.mediaDetails?.height ?? null,
  };
}

function nullify(v: unknown): string | null {
  return typeof v === 'string' && v.trim() !== '' ? v : null;
}

function mapTeamMember(node: Record<string, unknown>): TeamMember {
  const f = (node.teamMemberFields ?? {}) as Record<string, unknown>;
  return {
    id: String(node.id),
    name: nullify(f.membreName) ?? '',
    roleFr: nullify(f.membreRoleFr),
    roleEn: nullify(f.membreRoleEn),
    bioFr: nullify(f.membreBioFr),
    bioEn: nullify(f.membreBioEn),
    photo:
      mapImage((f.membrePhoto as { node?: unknown } | null)?.node) ??
      mapImage((node.featuredImage as { node?: unknown } | null)?.node),
  };
}

/** Renvoie `[]` tant que le PO n'a pas fourni de vrais membres (cas nominal). */
export async function getAllTeamMembers(): Promise<TeamMember[]> {
  const data = await fetchGraphQL<{ teamMembers: { nodes: Record<string, unknown>[] } }>(
    ALL_TEAM_MEMBERS,
    { tags: ['team'] },
  );
  return data.teamMembers.nodes.map(mapTeamMember);
}

export const _queries = { ALL_TEAM_MEMBERS };
