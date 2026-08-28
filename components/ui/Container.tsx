import type { ElementType, ReactNode } from 'react';

// Conteneur centré standard des maquettes (max 1280, padding 32 / 20 mobile).
// Équivaut à `.cw-sec` en global mais typé et composable.
export function Container({
  as: Tag = 'div',
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={['cw-sec', className].filter(Boolean).join(' ')}>{children}</Tag>
  );
}
