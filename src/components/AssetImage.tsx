import { resolveAsset } from '@/assets/registry';

interface AssetImageProps {
  /** Manifest id — the target filename stem from docs/asset-manifest.md. */
  id: string;
  alt: string;
  className?: string;
  /** Intrinsic Figma dimensions; used to reserve exact layout space. */
  width?: number;
  height?: number;
  objectPosition?: string;
  objectFit?: 'cover' | 'contain';
  loading?: 'lazy' | 'eager';
  decorative?: boolean;
}

/**
 * Renders the original Figma asset when it is present in `src/assets`.
 *
 * When it is not, renders an empty slot that reserves the exact same box so the
 * surrounding composition stays pixel-correct. No stand-in graphic is drawn —
 * the assets could not be exported (see docs/asset-manifest.md), and inventing
 * one would misrepresent the design.
 */
export function AssetImage({
  id,
  alt,
  className,
  width,
  height,
  objectPosition,
  objectFit = 'cover',
  loading = 'lazy',
  decorative = false,
}: AssetImageProps) {
  const src = resolveAsset(id);

  const style = {
    ...(width && height ? { aspectRatio: `${width} / ${height}` } : {}),
    ...(objectPosition ? { objectPosition } : {}),
    objectFit,
  };

  if (!src) {
    // A decorative asset that was never supplied simply isn't drawn — an empty
    // box in place of an icon reads as a bug. Meaningful images still reserve
    // their space so the composition around them stays correct.
    if (decorative) return null;

    return (
      <span
        className={[
          'asset-slot',
          // The dashed outline is a development aid only — in a production
          // build the slot is a quiet tonal block, not a wireframe box.
          import.meta.env.DEV ? 'asset-slot--debug' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={width && height ? { aspectRatio: `${width} / ${height}` } : undefined}
        data-asset-id={id}
        role={decorative ? 'presentation' : 'img'}
        aria-label={decorative ? undefined : alt}
        aria-hidden={decorative || undefined}
      />
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={decorative ? '' : alt}
      width={width}
      height={height}
      style={style}
      loading={loading}
      decoding="async"
      aria-hidden={decorative || undefined}
    />
  );
}
