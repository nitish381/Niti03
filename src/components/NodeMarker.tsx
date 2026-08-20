interface NodeMarkerProps {
  depth?: 'default' | 'above' | 'below';
  size?: 'md' | 'sm';
  active?: boolean;
}

/** The 24.057px ring shared by the journey, signal diagram and iceberg. */
export function NodeMarker({
  depth = 'default',
  size = 'md',
  active = false,
}: NodeMarkerProps) {
  const classes = [
    'node-marker',
    depth !== 'default' ? `node-marker--${depth}` : '',
    size !== 'md' ? `node-marker--${size}` : '',
    active ? 'node-marker--active' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classes} aria-hidden="true" />;
}
