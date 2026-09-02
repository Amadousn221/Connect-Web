'use client';

import { useCallback, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import styles from './FilterBar.module.css';

export type FilterOption = { value: string; label: string; count?: number };

export type FilterGroup = {
  /** Nom du query param (ex. 'categorie'). */
  param: string;
  /** Libellé du groupe (ex. 'Catégorie'). */
  label: string;
  /** Libellé de l'option « tout » (ex. 'Toutes'). */
  allLabel: string;
  options: FilterOption[];
  /** Si défini : n'affiche que les N premières, puis « voir tous ». */
  collapseAfter?: number;
};

export type SortConfig = {
  param: string;
  options: { value: string; label: string }[];
  /** Valeur par param par défaut (jamais écrite dans l'URL). */
  defaultValue: string;
};

/**
 * Barre de filtres des catalogues (spec §4.4). Sticky au scroll desktop.
 * Chaque changement réécrit les query params de l'URL (SSR + partageable),
 * en remettant `page` à 1. Filtres combinables (logique ET côté GROQ).
 */
export function FilterBar({
  groups,
  sort,
  resultCount,
  resultNoun,
}: {
  groups: FilterGroup[];
  sort: SortConfig;
  resultCount: number;
  /** Nom au singulier ('article', 'ressource') — accord au pluriel géré ici. */
  resultNoun: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const commit = useCallback(
    (mutate: (params: URLSearchParams) => void) => {
      const params = new URLSearchParams(searchParams.toString());
      mutate(params);
      params.delete('page');
      const qs = params.toString();
      router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  const setParam = (param: string, value: string | null) =>
    commit((params) => {
      if (value === null) params.delete(param);
      else params.set(param, value);
    });

  const activeFilterCount = groups.reduce(
    (n, g) => n + (searchParams.get(g.param) ? 1 : 0),
    0,
  );
  const currentSort = sort.options.find((o) => o.value === searchParams.get(sort.param));

  const plural = resultCount > 1 ? `${resultNoun}s` : resultNoun;

  return (
    <div className={styles.bar}>
      <div className={`cw-sec ${styles.inner}`}>
        <div className={styles.groups}>
          {groups.map((group) => {
            const active = searchParams.get(group.param);
            const isExpanded = expanded[group.param] ?? false;
            const visible =
              group.collapseAfter && !isExpanded
                ? group.options.slice(0, group.collapseAfter)
                : group.options;
            const hiddenCount = group.options.length - visible.length;

            return (
              <div key={group.param} className={styles.group} role="group" aria-label={group.label}>
                <span className={styles.groupLabel}>{group.label}</span>
                <div className={styles.pills}>
                  <button
                    type="button"
                    className={styles.pill}
                    data-active={active === null || active === undefined ? 'true' : undefined}
                    onClick={() => setParam(group.param, null)}
                  >
                    {group.allLabel}
                  </button>
                  {visible.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      className={styles.pill}
                      data-active={active === opt.value ? 'true' : undefined}
                      onClick={() =>
                        setParam(group.param, active === opt.value ? null : opt.value)
                      }
                    >
                      {opt.label}
                      {typeof opt.count === 'number' ? (
                        <span className={styles.pillCount}>{opt.count}</span>
                      ) : null}
                    </button>
                  ))}
                  {hiddenCount > 0 ? (
                    <button
                      type="button"
                      className={styles.more}
                      onClick={() =>
                        setExpanded((s) => ({ ...s, [group.param]: true }))
                      }
                    >
                      voir tous ({hiddenCount})
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.tail}>
          <label className={styles.sort}>
            <span className={styles.groupLabel}>Trier</span>
            <select
              className={styles.select}
              value={currentSort?.value ?? sort.defaultValue}
              onChange={(e) =>
                setParam(sort.param, e.target.value === sort.defaultValue ? null : e.target.value)
              }
            >
              {sort.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>

          <p className={styles.count} aria-live="polite">
            {resultCount} {plural}
          </p>

          {activeFilterCount > 0 || currentSort ? (
            <button
              type="button"
              className={styles.reset}
              onClick={() => router.push(pathname, { scroll: false })}
            >
              Réinitialiser
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
