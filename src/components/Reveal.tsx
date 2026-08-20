import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type RevealVariant = 'up' | 'fade' | 'scale' | 'left' | 'right';

interface RevealProps {
  as?: ElementType;
  variant?: RevealVariant;
  /** Delay in ms — used to stagger grids. */
  delay?: number;
  threshold?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * The page's default entrance: opacity 0→1 with a 24px rise, 600ms on the
 * house easing curve. `prefers-reduced-motion` is handled in CSS, which drops
 * the transform and shortens the transition rather than hiding content.
 */
export function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  threshold,
  className,
  style,
  children,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>(
    threshold !== undefined ? { threshold } : {},
  );

  const classes = [
    'reveal',
    `reveal--${variant}`,
    visible ? 'is-visible' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </Tag>
  );
}
