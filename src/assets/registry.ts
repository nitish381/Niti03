/**
 * Asset registry.
 *
 * Every file under `src/assets` is discovered at build time and indexed by its
 * filename stem. Sections ask for an asset by its manifest id — the moment the
 * real Figma export is dropped into the right folder, it is picked up with no
 * code change anywhere.
 *
 * Until then `resolveAsset` returns undefined and `AssetImage` renders a
 * correctly-proportioned empty slot. Nothing is ever substituted.
 *
 * See docs/asset-manifest.md for the id → Figma node mapping.
 */

const modules = import.meta.glob('./**/*.{png,jpg,jpeg,webp,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const byStem = new Map<string, string>();

for (const [path, url] of Object.entries(modules)) {
  const stem = path.split('/').pop()?.replace(/\.[^.]+$/, '');
  if (!stem) continue;

  // Prefer modern formats when several encodings of one asset are present.
  const existing = byStem.get(stem);
  if (existing && /\.(webp|avif)$/.test(existing) && !/\.(webp|avif)$/.test(url)) {
    continue;
  }
  byStem.set(stem, url);
}

export function resolveAsset(id: string): string | undefined {
  return byStem.get(id);
}

export function hasAsset(id: string): boolean {
  return byStem.has(id);
}

/** Count of assets actually present — surfaced in the dev-only banner. */
export const assetCount = byStem.size;
