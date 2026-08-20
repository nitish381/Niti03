import { AssetImage } from '@/components/AssetImage';
import { gsap } from '@/lib/scroll/gsap';
import { useScrollScene } from '@/lib/scroll/useScrollScene';
import { parallax, reveal, scrollWipe } from '@/lib/scroll/scenes';
import { iceberg } from '@/content/raahi';

/**
 * The visual thesis: what you see versus what shapes you — and the page's
 * strongest scroll moment.
 *
 * `raahi-mental-model-iceberg.png` carries the whole diagram, including all ten
 * marker rings and labels, so individual markers cannot be animated separately
 * without cutting up the artwork. Instead the reader *descends* it: a
 * scroll-driven wipe uncovers the image from the waterline downwards, so the
 * submerged mass — and the labels sitting on it — are revealed exactly as far
 * as the reader has scrolled. The surface is there from the start; the depth
 * has to be earned.
 *
 * Underneath that, the graphic drifts upward slightly slower than the copy
 * beside it, which separates the two planes without anything moving visibly.
 */
export function Iceberg() {
  const ref = useScrollScene<HTMLElement>((root) => {
    const art = root.querySelector('[data-ice="art"]') as HTMLElement | null;
    const image = root.querySelector('.iceberg__image');
    const copy = gsap.utils.toArray<HTMLElement>('[data-ice="copy"] > *', root);

    reveal(root, copy, { y: 34, stagger: 0.1 });

    if (art) parallax(art, -70, root);

    // The descent. Starts just after the section enters and completes while it
    // is still comfortably on screen, so the reveal is never racing the reader.
    if (image) {
      scrollWipe(image, root, { start: 'top 72%', end: 'bottom 78%', from: 58 });
    }
  });

  const above = iceberg.markers.filter((m) => m.depth === 'above');
  const below = iceberg.markers.filter((m) => m.depth === 'below');

  return (
    <section className="iceberg" ref={ref}>
      <div className="iceberg__inner">
        <div className="iceberg__copy" data-ice="copy">
          <p className="iceberg__eyebrow">{iceberg.eyebrow}</p>
          <h2 className="iceberg__title">{iceberg.title}</h2>
          <div className="iceberg__body">
            {iceberg.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <a className="btn-raahi btn-raahi--lg" href="#the-app">
            {iceberg.cta}
          </a>
        </div>

        <div className="iceberg__figure">
          <div className="iceberg__art" data-ice="art">
            <AssetImage
              id="raahi-mental-model-iceberg"
              alt="An iceberg with a small peak above the waterline and its far greater mass below it"
              className="iceberg__image"
              width={711}
              height={832}
              objectFit="contain"
            />
          </div>

          {/* The marker labels live inside the image; this is their text
              equivalent for screen readers. */}
          <div className="u-visually-hidden">
            <p>{iceberg.aboveHeading}</p>
            <ul>
              {above.map((marker) => (
                <li key={marker.label}>{marker.label}</li>
              ))}
            </ul>
            <p>{iceberg.belowHeading}</p>
            <ul>
              {below.map((marker) => (
                <li key={marker.label}>{marker.label}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
