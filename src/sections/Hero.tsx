import { useEffect, useState } from 'react';
import { AssetImage } from '@/components/AssetImage';
import { useParallax } from '@/hooks/useParallax';
import { hero } from '@/content/raahi';

/**
 * Cinematic opener.
 *
 * `raahi-hero.png` is the complete composition as delivered — photograph, fog,
 * horizon glow, the golden path and both waypoint markers with their labels are
 * all part of the artwork. Nothing is layered on top of it and nothing is
 * redrawn; the only overlay is the headline block, which sits to the left where
 * the artwork is deliberately empty.
 *
 * Parallax moves the artwork as a whole. It is never scaled non-uniformly or
 * cropped in a way that loses the path or the markers.
 */
export function Hero() {
  const [entered, setEntered] = useState(false);
  const artRef = useParallax<HTMLDivElement>(0.12, { max: 90 });

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="home"
      className={['hero', entered ? 'hero--entered' : ''].filter(Boolean).join(' ')}
    >
      <div className="hero__stage">
        <div className="hero__art" ref={artRef}>
          <AssetImage
            id="raahi-hero"
            alt="A lone figure on a ridge above a valley of cloud, with a golden path curving up toward a distant summit. Two waypoints are marked: “You are here — Story 01, The Fog”, and “Target identity — 100 stories ahead”."
            className="hero__art-img"
            width={1920}
            height={1080}
            loading="eager"
            objectFit="cover"
          />
        </div>
        <span className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">{hero.title}</h1>
          <div className="hero__body">
            {hero.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <a className="btn-raahi btn-raahi--sm hero__cta" href="#journey">
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
