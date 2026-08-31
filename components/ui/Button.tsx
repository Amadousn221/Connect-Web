import Link from 'next/link';
import type { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';

// `outline` = variante secondaire (bordure fine, fond transparent, texte foncé).
// `link` = variante tertiaire (lien texte, sans fond ; la flèche → est fournie
// par l'appelant). Vague 4 : poids 500, largeur au contenu, ~44px de haut.
type Variant = 'primary' | 'outline' | 'ghost' | 'link';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  /** posé sur une surface pétrole nuit / hero sombre */
  onDark?: boolean;
  className?: string;
  children: ReactNode;
}

interface LinkProps extends BaseProps {
  href: string;
}

interface ButtonProps extends BaseProps {
  href?: undefined;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  'aria-label'?: string;
}

function cx(p: BaseProps): string {
  const { variant = 'primary', size = 'md', onDark, className } = p;
  return [
    styles.btn,
    styles[variant],
    styles[size],
    onDark ? styles.onDark : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

export function Button(props: LinkProps | ButtonProps) {
  if (typeof props.href === 'string') {
    const { href, children } = props;
    const isHttp = /^https?:\/\//.test(href);
    const isProtocol = isHttp || href.startsWith('mailto:') || href.startsWith('tel:');
    if (isProtocol) {
      return (
        <a
          href={href}
          className={cx(props)}
          {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cx(props)}>
        {children}
      </Link>
    );
  }

  const { children, type = 'button', disabled, onClick } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-label={props['aria-label']}
      className={cx(props)}
    >
      {children}
    </button>
  );
}
