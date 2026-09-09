'use client';

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

// Révélation au scroll — amélioration progressive stricte.
//
// Le contenu est rendu VISIBLE par défaut : côté serveur, sans JavaScript,
// si `IntersectionObserver` est absent, ou sous `prefers-reduced-motion`,
// aucun attribut `data-reveal` n'est posé — donc aucune règle d'opacité 0.
// L'animation d'apparition (opacity + translateY, portée par les styles
// globaux `[data-reveal]` / `.cw-in`) n'est armée que côté client, avant le
// premier paint, et uniquement pour les éléments encore hors de l'écran au
// montage. Un élément déjà visible n'est jamais masqué.
//
// `prefers-reduced-motion` est réévalué : si la préférence est active au
// montage, on ne masque rien.

// useLayoutEffect côté client (arme l'état avant le paint, pas de flash),
// useEffect côté serveur (évite l'avertissement React au rendu SSR).
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type Phase = 'idle' | 'armed' | 'shown';

export function RevealOnScroll({
  className,
  delay,
  children,
}: {
  className?: string;
  /** décalage en ms pour un effet de stagger entre frères (60–80ms conseillé) */
  delay?: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // 'idle' = état SSR + 1er rendu client : visible, aucun attribut, aucune classe.
  const [phase, setPhase] = useState<Phase>('idle');

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') return;

    // Déjà (au moins partiellement) dans le viewport au montage : pas
    // d'animation, et surtout on ne le masque jamais.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    // Arme l'état masqué avant le paint (l'élément est hors écran de toute façon).
    setPhase('armed');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setPhase('shown');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const animating = phase !== 'idle';

  return (
    <div
      ref={ref}
      data-reveal={animating ? '' : undefined}
      className={
        [phase === 'shown' ? 'cw-in' : undefined, className]
          .filter(Boolean)
          .join(' ') || undefined
      }
      style={animating && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
