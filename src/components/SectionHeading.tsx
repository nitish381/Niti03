interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  size?: 'md' | 'lg' | 'xl';
  align?: 'start' | 'center';
  as?: 'h1' | 'h2' | 'h3';
}

/** Eyebrow + heading pair used by nearly every section. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  size = 'md',
  align = 'start',
  as: Tag = 'h2',
}: SectionHeadingProps) {
  const classes = [
    'section-heading',
    `section-heading--${size}`,
    align === 'center' ? 'section-heading--center' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <Tag className="section-heading__title">{title}</Tag>
      {lede ? <p className="section-heading__lede">{lede}</p> : null}
    </div>
  );
}
