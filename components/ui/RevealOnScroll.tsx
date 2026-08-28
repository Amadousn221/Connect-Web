'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

// Révélation au scroll — porté du comportement des maquettes (`[data-reveal]` +
// IntersectionObserver, classe `.cw-in`). opacity + translateY(24px) max.
// `prefers-reduced-motion` : rendu visible d'emblée, aucun transform.
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
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={[shown ? 'cw-in' : undefined, className].filter(Boolean).join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
