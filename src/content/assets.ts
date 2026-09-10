// Temporary placeholder media, generated for development only.
//
// This sandbox's network policy blocks direct downloads from the generation
// host, so these are referenced as remote URLs rather than bundled local
// files. They resolve fine for real visitors (the restriction only applies
// to this build environment). Swap every entry below for a self-hosted file
// under src/assets/ once final photography/video is supplied — see README.

export const heroPortrait =
  'https://pikaso.cdnpk.net/private/production/5406881085/render.jpg?token=exp=1789257600~hmac=1e2e987021c24cbf649823bd3b0292e54965275069a4668cf08ee21264488d8e';

const projectCovers: Record<string, string> = {
  healthaera:
    'https://pikaso.cdnpk.net/private/production/5406883430/render.jpg?token=exp=1789257600~hmac=dd72617a7fc18a30c332d14b6dd3fbf4d0ea892ce72be91c9bd6f46cac7a5ead',
  blocknexus:
    'https://pikaso.cdnpk.net/private/production/5406883977/render.jpg?token=exp=1789257600~hmac=f0ec82c323e81b0868dbeea54652c78b7e2f7ebbdb6a096b0a80f55e127ffe82',
  rwa: 'https://pikaso.cdnpk.net/private/production/5406884756/render.jpg?token=exp=1789257600~hmac=7df8ad6530a19b21d948ac47cdcf91c04ded1851eb3994603cca4259fa6e7a7c',
  'gem-pocket':
    'https://pikaso.cdnpk.net/private/production/5406884974/render.jpg?token=exp=1789257600~hmac=b9d125314a39c871f9365f77c66418c9d481a9cc1666cd093c6588941455a495',
};

/**
 * Single resolver for a project's thumbnail/cover image. Components look
 * projects up by slug through this function rather than indexing the map
 * directly, so the media source can move (e.g. to a bundled local file)
 * without touching call sites.
 */
export function getProjectThumbnail(slug: string): string {
  return projectCovers[slug] ?? '';
}

export const teaserPoster =
  'https://pikaso.cdnpk.net/private/production/5406886103/render.jpg?token=exp=1789257600~hmac=a0adddabbc176829a33155669e16505a89ad5df6455e9a30e8163a4aeec69ebe';

export const teaserVideo =
  'https://pikaso.cdnpk.net/private/production/5406910150/7e34b3a8-db22-41bf-a143-d1c3238edd1a-0.mp4?token=exp=1789257600~hmac=922a0ad8514e023aa9f683048b432cdb1779b3906e78f9bcd62fdc614efd24c6';
