// Client WPGraphQL — DECISION 18 / ADR-002.
// Une seule fonction de bas niveau : toutes les requêtes passent par elle.
// Le fetch est mis en cache par Next (SSG/ISR) — jamais de requête WordPress
// à chaque visite (ADR-001, budget perf P10). La fraîcheur vient de la
// revalidation à la demande (webhook WP → /api/revalidate, Milestone M3),
// pas d'un `revalidate` court.

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

export interface GraphQLRequestOptions {
  /** Variables de la requête. */
  variables?: Record<string, unknown>;
  /**
   * Tags de cache Next pour la revalidation ciblée par `revalidateTag()`
   * (Milestone M3). Ex. ['case-studies', `case-study:${slug}`].
   */
  tags?: string[];
  /**
   * Fenêtre ISR de secours en secondes. `false` = cache permanent jusqu'à
   * revalidation à la demande (comportement par défaut voulu).
   */
  revalidate?: number | false;
}

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string; path?: Array<string | number> }>;
}

export class WordPressApiError extends Error {
  constructor(
    message: string,
    readonly detail?: unknown,
  ) {
    super(message);
    this.name = 'WordPressApiError';
  }
}

function authHeader(): Record<string, string> {
  const user = process.env.WORDPRESS_AUTH_USER;
  const pass = process.env.WORDPRESS_AUTH_APP_PASSWORD;
  if (!user || !pass) return {};
  const token = Buffer.from(`${user}:${pass}`).toString('base64');
  return { Authorization: `Basic ${token}` };
}

export async function fetchGraphQL<T>(
  query: string,
  options: GraphQLRequestOptions = {},
): Promise<T> {
  if (!WORDPRESS_API_URL) {
    throw new WordPressApiError(
      'WORDPRESS_API_URL non défini. Renseigner .env.local à partir de .env.example ' +
        '(URL de l\'endpoint WPGraphQL fournie par le PO — instance Hostinger).',
    );
  }

  const { variables, tags, revalidate = false } = options;

  let res: Response;
  try {
    res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...authHeader(),
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate, tags },
    });
  } catch (cause) {
    throw new WordPressApiError(
      `Requête WPGraphQL injoignable (${WORDPRESS_API_URL}).`,
      cause,
    );
  }

  if (!res.ok) {
    throw new WordPressApiError(
      `WPGraphQL a répondu ${res.status} ${res.statusText}.`,
      await res.text().catch(() => undefined),
    );
  }

  const json = (await res.json()) as GraphQLResponse<T>;

  if (json.errors?.length) {
    throw new WordPressApiError(
      `Erreur(s) GraphQL : ${json.errors.map((e) => e.message).join(' · ')}`,
      json.errors,
    );
  }

  if (!json.data) {
    throw new WordPressApiError('Réponse WPGraphQL sans données.', json);
  }

  return json.data;
}

/** Vrai si la configuration minimale WordPress est présente. */
export function isWordPressConfigured(): boolean {
  return Boolean(WORDPRESS_API_URL);
}
