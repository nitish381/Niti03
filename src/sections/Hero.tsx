import { useEffect, useState } from 'react';
import { AssetImage } from '@/components/AssetImage';
import { useParallax } from '@/hooks/useParallax';
import { hero } from '@/content/raahi';

interface WaypointProps {
  title: string;
  meta: string;
  place: 'here' | 'target';
  delay: number;
}

function Waypoint({ title, meta, place, delay }: WaypointProps) {
  return (
    <div
      className={`hero__waypoint hero__waypoint--${place}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="hero__waypoint-icon">
        <AssetImage id="waypoint-compass" alt="" width={116} height={117} decorative />
      </span>
      <span className="hero__waypoint-text">
        <span className="hero__waypoint-title">{title}</span>
        <span className="hero__waypoint-meta">{meta}</span>
      </span>
    </div>
  );
}

/**
 * Cinematic opener. Layer order bottom → top, exactly as in Figma:
 * black base → photo @30% + left scrim → golden path → two fog layers →
 * horizon glow → waypoints → copy.
 *
 * The photo and fog drift at different rates on scroll, which is what gives the
 * section its depth.
 */
export function Hero() {
  const [entered, setEntered] = useState(false);

  const photoRef = useParallax<HTMLDivElement>(0.15, { max: 120 });
  const fogRightRef = useParallax<HTMLDivElement>(0.35, { max: 160 });
  const fogLeftRef = useParallax<HTMLDivElement>(0.28, { max: 140 });
  const glowRef = useParallax<HTMLDivElement>(0.1, { max: 80 });

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="home"
      className={['hero', entered ? 'hero--entered' : ''].filter(Boolean).join(' ')}
    >
      <div className="hero__stage" aria-hidden="true">
        <div className="hero__photo" ref={photoRef}>
          <AssetImage
            id="hero-mountain-valley"
            alt=""
            className="hero__photo-img"
            loading="eager"
            objectPosition="50% 50%"
            decorative
          />
          <span className="hero__scrim" />
        </div>

        <div className="hero__path">
          <AssetImage id="hero-golden-path" alt="" objectFit="contain" decorative />
        </div>

        <div className="hero__fog hero__fog--right" ref={fogRightRef}>
          <AssetImage id="hero-fog-right" alt="" objectFit="contain" decorative />
        </div>
        <div className="hero__fog hero__fog--left" ref={fogLeftRef}>
          <AssetImage id="hero-fog-left" alt="" objectFit="contain" decorative />
        </div>

        <div className="hero__glow" ref={glowRef}>
          <AssetImage id="hero-horizon-glow" alt="" objectFit="contain" decorative />
        </div>

        <Waypoint
          title={hero.waypoints[0].title}
          meta={hero.waypoints[0].meta}
          place="here"
          delay={1800}
        />
        <Waypoint
          title={hero.waypoints[1].title}
          meta={hero.waypoints[1].meta}
          place="target"
          delay={2100}
        />
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
