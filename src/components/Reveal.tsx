import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
  delay?: number;
}

export function Reveal({ as, children, delay = 0, className = '', style, ...rest }: RevealProps) {
  const Tag = as ?? 'div';
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
