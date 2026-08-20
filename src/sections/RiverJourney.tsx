import { AssetImage } from '@/components/AssetImage';
import { gsap } from '@/lib/scroll/gsap';
import { useScrollScene } from '@/lib/scroll/useScrollScene';
import { parallax, reveal, scrollWipe, sequence } from '@/lib/scroll/scenes';
import { journey } from '@/content/raahi';

/**
 * The river metaphor, made scroll-driven.
 *
 * The river is wiped in from its source downwards as the section passes, so the
 * water appears to be flowing toward the reader at exactly the rate they scroll.
 * Each of the five stops then arrives in turn, tied to scroll position rather
 * than to a timer — passing a stop is something the reader does, not something
 * that happens to them.
 *
 * The mountain horizon behind drifts at its own slower rate, which is what sets
 * the river forward of it.
 */
export function RiverJourney() {
  const ref = useScrollScene<HTMLElement>((root) => {
    const panorama = root.querySelector('[data-journey="panorama"]');
    const river = root.querySelector('.river-journey__river img, .river-journey__river .asset-slot');
    const head = gsap.utils.toArray<HTMLElement>('[data-journey="head"] > *', root);
    const stops = gsap.utils.toArray<HTMLElement>('.river-journey__stop', root);

    reveal(root, head, { y: 30 });

    if (panorama) parallax(panorama, 90, root);
    if (river) scrollWipe(river, root, { start: 'top 68%', end: 'bottom 75%', from: 88 });

    if (stops.length) {
      sequence(stops, root, { start: 'top 62%', end: 'bottom 80%', y: 26 });
    }
  });

  return (
    <section id="journey" className="river-journey" ref={ref}>
      <div className="river-journey__panorama" data-journey="panorama" aria-hidden="true">
        <AssetImage
          id="raahi-journey-background"
          alt=""
          width={1920}
          height={257}
          objectFit="cover"
          decorative
        />
      </div>

      <div className="river-journey__inner">
        <div className="river-journey__head" data-journey="head">
          <p className="river-journey__eyebrow">{journey.eyebrow}</p>
          <h2 className="river-journey__title">{journey.title}</h2>
        </div>

        <div className="river-journey__stage">
          <div className="river-journey__river" aria-hidden="true">
            <AssetImage
              id="raahi-journey-road"
              alt="A river winding down through open water, with a single figure rowing a small boat"
              width={436}
              height={731}
              objectFit="contain"
            />
          </div>

          <ol className="river-journey__stops">
            {journey.stops.map((stop) => (
              <li key={stop.value} className={`river-journey__stop river-journey__stop--${stop.side}`}>
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
