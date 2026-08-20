import type { ElementType, ReactNode } from 'react';

interface ContainerProps {
  as?: ElementType;
  flush?: boolean;
  wide?: boolean;
  className?: string;
  children: ReactNode;
}

/** The 1600px / 160px-gutter container from the Figma grid. */
export function Container({
  as: Tag = 'div',
  flush = false,
  wide = false,
  className,
  children,
}: ContainerProps) {
  const classes = [
    'container-raahi',
    flush ? 'container-raahi--flush' : '',
    wide ? 'container-raahi--wide' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
