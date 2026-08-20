import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { philosophy } from '@/content/raahi';

/**
 * Two columns: a dark art card carrying the Gurmukhi calligraphy, and the
 * belief-system copy. Per the Phase 01 motion notes this section is one of the
 * page's rests — reveal only, no parallax.
 */
export function Philosophy() {
  return (
    <section id="philosophy" className="philosophy">
      <div className="philosophy__inner">
        <Reveal variant="left" className="philosophy__art">
          <h3 className="philosophy__art-title">{philosophy.artCard.title}</h3>

          <AssetImage
            id="gurmukhi-calligraphy"
            alt="Gurmukhi calligraphy rendered in gold"
            className="philosophy__art-image"
            width={395}
            height={395}
            objectFit="contain"
          />

          <p className="philosophy__art-quote">
            <span className="philosophy__quote-glyph philosophy__quote-glyph--open" aria-hidden="true">
              <AssetImage id="quote-glyph" alt="" objectFit="contain" decorative />
            </span>
            {philosophy.artCard.translation}
            <span className="philosophy__quote-glyph philosophy__quote-glyph--close" aria-hidden="true">
              <AssetImage id="quote-glyph" alt="" objectFit="contain" decorative />
            </span>
          </p>
        </Reveal>

        <Reveal variant="right" className="philosophy__copy" delay={100}>
          <p className="philosophy__eyebrow">{philosophy.eyebrow}</p>
          <h2 className="philosophy__title">{philosophy.title}</h2>

          <div className="philosophy__body">
            {philosophy.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          <ul className="philosophy__checks">
            {philosophy.checks.map((check) => (
              <li key={check} className="philosophy__check">
                <span className="philosophy__check-icon" aria-hidden="true">
                  <AssetImage id="check-circle" alt="" objectFit="contain" decorative />
                </span>
                {check}
              </li>
            ))}
          </ul>

          <a className="btn-raahi btn-raahi--sm" href="#the-app">
            {philosophy.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
