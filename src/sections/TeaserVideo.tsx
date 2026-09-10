import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useSectionParallax } from '@/hooks/useSectionParallax';
import { teaserPoster, teaserVideo } from '@/content/assets';

export function TeaserVideo() {
  const reducedMotion = useReducedMotion();
  const parallaxRef = useSectionParallax<HTMLElement>();

  return (
    <section className="teaser" ref={parallaxRef}>
      {reducedMotion ? (
        <img className="teaser__poster" src={teaserPoster} alt="" />
      ) : (
        <video
          className="teaser__video"
          src={teaserVideo}
          poster={teaserPoster}
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      )}
      <div className="teaser__scrim" />
      <p className="teaser__caption display">Untangling complexity, one product at a time.</p>
    </section>
  );
}
