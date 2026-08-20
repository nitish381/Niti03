interface LogoProps {
  size?: 'md' | 'sm';
  withWordmark?: boolean;
  className?: string;
}

/**
 * Brand lockup.
 *
 * The mark itself (Figma `Raahi_logo_mark_only 1`, nodes 105:1132 / 167:1172)
 * has not been exported yet — see `docs/asset-manifest.md`. The `__mark` slot
 * is left empty rather than filled with a stand-in graphic; Phase 03 drops the
 * real asset in.
 */
export function Logo({ size = 'md', withWordmark = true, className }: LogoProps) {
  const classes = ['logo', size !== 'md' ? `logo--${size}` : '', className ?? '']
    .filter(Boolean)
    .join(' ');

  return (
    <a href="#home" className={classes} aria-label="Raahi — home">
      <span className="logo__mark" data-asset="raahi-logo-mark" />
      {withWordmark ? <span className="logo__wordmark">Raahi</span> : null}
    </a>
  );
}
