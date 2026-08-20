import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  /** Extra BEM root class for the section's own partial, e.g. `hero`. */
  name?: string;
  variant?: 'default' | 'elevated' | 'inverse' | 'flush' | 'tight';
  decor?: ReactNode;
  className?: string;
  children: ReactNode;
}

/** Full-width section shell: optional decorative layer + contained content. */
export function Section({
  id,
  name,
  variant = 'default',
  decor,
  className,
  children,
}: SectionProps) {
  const classes = [
    'section',
    variant !== 'default' ? `section--${variant}` : '',
    name ?? '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes}>
      {decor ? <div className="section__decor">{decor}</div> : null}
      <div className="section__inner">{children}</div>
    </section>
  );
}
