import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { useParallax } from '@/hooks/useParallax';
import { iceberg } from '@/content/raahi';

/**
 * The visual thesis: what you see versus what shapes you.
 *
 * `raahi-mental-model-iceberg.png` carries the full diagram — the iceberg, the
 * waterline, the faint grid, and all ten marker rings and labels in their green
 * and red. Those markers are part of the artwork, so none are drawn over it.
 *
 * The label text is therefore pixels rather than characters, so the same list
 * is repeated for assistive technology in a visually hidden block.
 *
 * The graphic rises gently on scroll — position only, never scaled or cropped.
 */
export function Iceberg() {
  const artRef = useParallax<HTMLDivElement>(0.05, { max: 40 });

  const above = iceberg.markers.filter((m) => m.depth === 'above');
  const below = iceberg.markers.filter((m) => m.depth === 'below');

  return (
    <section className="iceberg">
      <div className="iceberg__inner">
        <Reveal className="iceberg__copy">
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
        </Reveal>

        <Reveal variant="scale" className="iceberg__figure">
          <div className="iceberg__art" ref={artRef}>
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
        </Reveal>
      </div>
    </section>
  );
}
