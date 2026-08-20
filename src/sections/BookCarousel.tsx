import { useCallback, useEffect, useRef, useState } from 'react';
import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { library } from '@/content/raahi';

/**
 * Covers, in slide order. Only three were supplied; slides 04 and 05 keep their
 * place in the rail — the design calls for five — and render an empty cover
 * until their artwork arrives. Nothing is substituted for them.
 */
const BOOK_ASSETS = [
  'raahi-book-discipline-of-attention',
  'raahi-book-work-that-matters',
  'raahi-book-ladder-within',
  '',
  '',
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
      {/* Figma layers a tall mountain silhouette behind this section
          (node 111:2096). No artwork for it was supplied — the thin
          `raahi-journey-background` strip belongs to the Journey section and
          would have to be stretched to stand in here — so only the gradient
          fade into the page ground is drawn. */}
      <div className="book-carousel__decor" aria-hidden="true">
        <span className="book-carousel__fade" />
      </div>

      <div className="book-carousel__inner">
        <div className="book-carousel__head">
          <Reveal className="book-carousel__intro">
            <h2 className="book-carousel__title">{library.title}</h2>
            <p className="book-carousel__lede">{library.body}</p>
          </Reveal>

          {/* No store-badge artwork was supplied, so these render as the same
              bordered badge used in the download band rather than as a
              stand-in for the official Apple and Google marks. */}
          <Reveal className="book-carousel__badges" delay={100}>
            <a className="app-badge app-badge--google" href="#" aria-label="Get it on Google Play">
              <span className="app-badge__text">
                <span className="app-badge__kicker">Get it On</span>
                <span className="app-badge__store">Google Play</span>
              </span>
            </a>
            <a className="app-badge app-badge--apple" href="#" aria-label="Download on the App Store">
              <span className="app-badge__text">
                <span className="app-badge__kicker">Download on the</span>
                <span className="app-badge__store">App Store</span>
              </span>
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
                    width={445}
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
