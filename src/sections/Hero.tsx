import { AssetImage } from '@/components/AssetImage';
import { gsap, EASE_ENTER, EASE_SCRUB } from '@/lib/scroll/gsap';
import { useScrollScene } from '@/lib/scroll/useScrollScene';
import { hero } from '@/content/raahi';

/**
 * Cinematic opener.
 *
 * `raahi-hero.png` is the complete composition as delivered — photograph, fog,
 * horizon glow, golden path and both waypoint markers are painted into the one
 * file — so the atmosphere cannot be split into separately moving planes.
 * Depth is built from the layers that *are* separable: the artwork, the scrim
 * over it, and the copy, each travelling at a different rate.
 *
 * On load the frame settles out of a slight over-scale. On scroll the artwork
 * drifts down slowly while the copy lifts away faster and dims — the parallax
 * differential that makes the viewer feel they are moving past the scene rather
 * than watching it slide.
 */
export function Hero() {
  const ref = useScrollScene<HTMLElement>((root) => {
    const art = root.querySelector('[data-hero="art"]');
    const scrim = root.querySelector('[data-hero="scrim"]');
    const copy = gsap.utils.toArray<HTMLElement>('[data-hero="line"]', root);

    // -- Entrance -----------------------------------------------------------
    gsap
      .timeline({ defaults: { ease: EASE_ENTER } })
      .from(art, { autoAlpha: 0, scale: 1.08, duration: 1.6 })
      .from(copy, { yPercent: 40, autoAlpha: 0, duration: 1.1, stagger: 0.12 }, 0.35);

    // -- Scroll: three planes, three rates ----------------------------------
    gsap
      .timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
        defaults: { ease: EASE_SCRUB },
      })
      .to(art, { yPercent: 12, scale: 1.06 }, 0)
      .to(scrim, { opacity: 1.35 }, 0)
      .to(copy, { yPercent: -70, autoAlpha: 0, stagger: 0.02 }, 0);
  });

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero__stage">
        <div className="hero__art" data-hero="art">
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
        <span className="hero__scrim" data-hero="scrim" aria-hidden="true" />
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title" data-hero="line">
            {hero.title}
          </h1>
          <div className="hero__body" data-hero="line">
            {hero.body.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div data-hero="line">
            <a className="btn-raahi btn-raahi--sm" href="#journey">
              {hero.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
