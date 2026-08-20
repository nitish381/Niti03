import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { useParallax } from '@/hooks/useParallax';
import { useReveal } from '@/hooks/useReveal';
import { journey } from '@/content/raahi';

/**
 * The river metaphor — five stops alternating either side of a vertical river
 * illustration.
 *
 * The Figma composition is absolutely positioned at fixed Y offsets. Here the
 * stops sit in a three-column grid (left label · river · right label) so the
 * alternation survives every width, and collapse to a single left-aligned
 * timeline below 768 with the river as its spine.
 */
export function RiverJourney() {
  const panoramaRef = useParallax<HTMLDivElement>(0.08, { max: 70 });
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="journey" className="river-journey">
      <div className="river-journey__panorama" ref={panoramaRef} aria-hidden="true">
        <AssetImage id="mountain-panorama-tile" alt="" objectFit="cover" decorative />
      </div>

      <div className="river-journey__inner">
        <Reveal className="river-journey__head">
          <p className="river-journey__eyebrow">{journey.eyebrow}</p>
          <h2 className="river-journey__title">{journey.title}</h2>
        </Reveal>

        <div
          className={['river-journey__stage', visible ? 'is-active' : '']
            .filter(Boolean)
            .join(' ')}
          ref={ref}
        >
          <div className="river-journey__river" aria-hidden="true">
            <AssetImage id="river-with-rower" alt="" objectFit="contain" decorative />
          </div>

          <ol className="river-journey__stops">
            {journey.stops.map((stop, index) => (
              <li
                key={stop.value}
                className={`river-journey__stop river-journey__stop--${stop.side}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <span className="river-journey__connector" aria-hidden="true" />
                <span className="node-marker river-journey__marker" aria-hidden="true" />
                <span className="river-journey__text">
                  <span className="river-journey__label">{stop.label}</span>
                  <span className="river-journey__value">{stop.value}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
