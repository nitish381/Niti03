interface AppStoreBadgeProps {
  store: 'apple' | 'google';
  href?: string;
}

const COPY = {
  apple: { kicker: 'Download on the', store: 'App Store' },
  google: { kicker: 'Get it On', store: 'Google Play' },
} as const;

/**
 * Dark bordered store badge (Figma 105:1361 / 105:1368).
 *
 * The store glyphs are pending export — see `docs/asset-manifest.md`. The
 * `__icon` slot stays empty until the real SVGs land.
 */
export function AppStoreBadge({ store, href = '#' }: AppStoreBadgeProps) {
  const { kicker, store: name } = COPY[store];

  return (
    <a className="app-badge" href={href} aria-label={`${kicker} ${name}`}>
      <span className="app-badge__icon" data-asset={`store-${store}`} />
      <span className="app-badge__text">
        <span className="app-badge__kicker">{kicker}</span>
        <span className="app-badge__store">{name}</span>
      </span>
    </a>
  );
}
