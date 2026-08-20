import { AssetImage } from '@/components/AssetImage';
import { gsap } from '@/lib/scroll/gsap';
import { useScrollScene } from '@/lib/scroll/useScrollScene';
import { parallax, reveal } from '@/lib/scroll/scenes';
import { philosophy } from '@/content/raahi';

/**
 * Two columns: the manifesto card and the belief-system copy.
 *
 * `raahi-manifesto-quote-card.png` is the whole left-hand card as designed —
 * the dark panel, the "Man Jeetai Jag Jeet." title, the gold Gurmukhi
 * calligraphy and the translation pill with its quote glyphs are all part of
 * the artwork. It is placed as a single image rather than reassembled, so the
 * card is never re-typeset.
 *
 * Per the Phase 01 motion plan this section is one of the page's rests —
 * reveal only, no parallax.
 */
export function Philosophy() {
  /** A rest in the page. The card is uncovered from the side and drifts a
   *  little slower than the copy; nothing else moves. */
  const ref = useScrollScene<HTMLElement>((root) => {
    const art = root.querySelector('[data-philosophy="art"]');
    const copy = gsap.utils.toArray<HTMLElement>('[data-philosophy="copy"] > *', root);

    gsap.from(art, {
      x: -46,
      autoAlpha: 0,
      duration: 1.15,
      ease: 'power3.out',
      scrollTrigger: { trigger: root, start: 'top 76%', once: true },
    });
    if (art) parallax(art, -30, root);

    reveal(root, copy, { y: 28, stagger: 0.09, start: 'top 72%' });
  });

  return (
    <section id="philosophy" className="philosophy" ref={ref}>
      <div className="philosophy__inner">
        <div className="philosophy__art" data-philosophy="art">
          <AssetImage
            id="raahi-manifesto-quote-card"
            alt={`${philosophy.artCard.title} — ${philosophy.artCard.translation}`}
            className="philosophy__art-img"
            width={568}
            height={737}
            objectFit="contain"
          />
        </div>

        <div className="philosophy__copy" data-philosophy="copy">
          <p className="philosophy__eyebrow">{philosophy.eyebrow}</p>
          <h2 className="philosophy__title">{philosophy.title}</h2>

          <div className="philosophy__body">
            {philosophy.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          {/* The check-circle icon (Figma 108:799) was not among the supplied
              assets, so each row carries no glyph rather than a stand-in. */}
          <ul className="philosophy__checks">
            {philosophy.checks.map((check) => (
              <li key={check} className="philosophy__check">
                {check}
              </li>
            ))}
          </ul>

          <a className="btn-raahi btn-raahi--sm" href="#the-app">
            {philosophy.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
