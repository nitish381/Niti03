import { useCallback, useEffect, useRef, useState } from 'react';
import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { useParallax } from '@/hooks/useParallax';
import { library } from '@/content/raahi';

const BOOK_ASSETS = [
  'book-01-discipline-of-attention',
  'book-02-work-that-matters',
  'book-03-ladder-within',
  'book-04-beyond-first-flight',
  'book-05-code-courage-clarity',
];

/**
 * Five-slide library rail.
 *
 * Built on native scroll-snap rather than a transform carousel: touch, trackpad,
 * keyboard and screen-reader behaviour all come for free, and pointer-drag is
 * layered on top for mouse users. The "Explore" pill rising from the cover is a
 * real state in the Figma component, so it is built rather than dropped.
 */
export function BookCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const mountainRef = useParallax<HTMLDivElement>(0.1, { max: 90 });

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    syncEdges();
    track.addEventListener('scroll', syncEdges, { passive: true });
    window.addEventListener('resize', syncEdges);
    return () => {
      track.removeEventListener('scroll', syncEdges);
      window.removeEventListener('resize', syncEdges);
    };
  }, [syncEdges]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.book-carousel__slide');
    const step = card ? card.offsetWidth + 32 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  };

  // Pointer drag for mouse users; touch is already handled natively.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let dragging = false;
    let startX = 0;
    let startScroll = 0;

    const onDown = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      dragging = true;
      startX = event.clientX;
      startScroll = track.scrollLeft;
      track.classList.add('is-dragging');
    };

    const onMove = (event: PointerEvent) => {
      if (!dragging) return;
      track.scrollLeft = startScroll - (event.clientX - startX);
    };

    const onUp = () => {
      dragging = false;
      track.classList.remove('is-dragging');
    };

    track.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      track.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  return (
    <section id="the-app" className="book-carousel">
      <div className="book-carousel__decor" aria-hidden="true">
        <div className="book-carousel__mountains" ref={mountainRef}>
          <AssetImage id="mountain-silhouette" alt="" objectFit="cover" decorative />
        </div>
        <span className="book-carousel__fade" />
      </div>

      <div className="book-carousel__inner">
        <div className="book-carousel__head">
          <Reveal className="book-carousel__intro">
            <h2 className="book-carousel__title">{library.title}</h2>
            <p className="book-carousel__lede">{library.body}</p>
          </Reveal>

          <Reveal className="book-carousel__badges" delay={100}>
            <a className="app-badge app-badge--art" href="#" aria-label="Get it on Google Play">
              <AssetImage id="badge-google-play" alt="" width={169} height={59} decorative />
            </a>
            <a className="app-badge app-badge--art" href="#" aria-label="Download on the App Store">
              <AssetImage id="badge-app-store" alt="" width={174} height={59} decorative />
            </a>
          </Reveal>
        </div>

        <div className="book-carousel__rail">
          <ul className="book-carousel__track" ref={trackRef}>
            {library.slides.map((slide, index) => (
              <li key={slide.index} className="book-carousel__slide">
                <span className="book-carousel__index">{slide.index}</span>
                <a className="book-carousel__card" href="#the-app">
                  <AssetImage
                    id={BOOK_ASSETS[index] ?? ''}
                    alt={slide.title}
                    className="book-carousel__cover"
                    width={444}
                    height={643}
                    objectFit="contain"
                  />
                  <span className="book-carousel__explore">{slide.cta}</span>
                  <span className="u-visually-hidden">{slide.title}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="book-carousel__controls">
            <button
              type="button"
              className="book-carousel__arrow"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Previous books"
            >
              ‹
            </button>
            <button
              type="button"
              className="book-carousel__arrow"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Next books"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
