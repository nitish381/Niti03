import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { useReveal } from '@/hooks/useReveal';
import { useParallax } from '@/hooks/useParallax';
import { iceberg } from '@/content/raahi';

/**
 * The visual thesis: what you see versus what shapes you.
 *
 * Above 768 the markers keep the exact radial positions from Figma, placed as
 * percentages of the graphic's own box. Below 768 they detach and become two
 * labelled lists — at that width a pile of absolutely-positioned labels over a
 * 300px graphic is unreadable, and the meaning survives the change intact.
 */
export function Iceberg() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const textureRef = useParallax<HTMLDivElement>(0.06, { max: 50 });

  const above = iceberg.markers.filter((m) => m.depth === 'above');
  const below = iceberg.markers.filter((m) => m.depth === 'below');

  return (
    <section className="iceberg">
      <div className="iceberg__texture" ref={textureRef} aria-hidden="true">
        <AssetImage id="grid-texture-a" alt="" objectFit="contain" decorative />
        <AssetImage id="grid-texture-b" alt="" objectFit="contain" decorative />
      </div>

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

        <div
          className={['iceberg__figure', visible ? 'is-active' : '']
            .filter(Boolean)
            .join(' ')}
          ref={ref}
        >
          <div className="iceberg__graphic">
            <AssetImage
              id="iceberg"
              alt="An iceberg, with a small part above the waterline and its mass below"
              className="iceberg__image"
              width={645}
              height={774}
              objectFit="contain"
            />

            {iceberg.markers.map((marker, index) => (
              <span
                key={marker.label}
                className={[
                  'iceberg__marker',
                  `iceberg__marker--${marker.depth}`,
                  `iceberg__marker--ring-${marker.side}`,
                ].join(' ')}
                style={{
                  left: `${marker.x}%`,
                  top: `${marker.y}%`,
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <span className="node-marker" aria-hidden="true" />
                <span className="iceberg__marker-label">{marker.label}</span>
              </span>
            ))}
          </div>

          {/* Below 768 the markers read as two grouped lists instead. */}
          <div className="iceberg__lists">
            {[
              { heading: iceberg.aboveHeading, items: above, depth: 'above' as const },
              { heading: iceberg.belowHeading, items: below, depth: 'below' as const },
            ].map((group) => (
              <div key={group.depth} className={`iceberg__list iceberg__list--${group.depth}`}>
                <h3 className="iceberg__list-title">{group.heading}</h3>
                <ul className="iceberg__list-items">
                  {group.items.map((marker) => (
                    <li key={marker.label} className="iceberg__list-item">
                      <span className="node-marker node-marker--sm" aria-hidden="true" />
                      {marker.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
