import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { features } from '@/content/raahi';

const ICONS = [
  'feature-adaptive-literature',
  'feature-decision-points',
  'feature-moments',
  'feature-calibration',
];

/**
 * Four engine mechanics. Figma: 1600 wide, 30px gap, 1px #D2C1AC border,
 * radius 30, 41px padding.
 *
 * Card 2's body is 14px/24px in Figma against 16px/26px on the other three,
 * and its height differs by 1px. Normalised to 16px/26px — flagged in Phase 01.
 */
export function FeatureGrid() {
  return (
    <section id="how-it-works" className="feature-grid">
      <div className="feature-grid__inner">
        <Reveal className="feature-grid__head">
          <p className="feature-grid__eyebrow">{features.eyebrow}</p>
          <h2 className="feature-grid__title">{features.title}</h2>
        </Reveal>

        <ul className="feature-grid__list">
          {features.cards.map((card, index) => (
            <Reveal
              as="li"
              key={card.title}
              className="feature-grid__card"
              delay={index * 80}
            >
              <span className="feature-grid__icon" aria-hidden="true">
                <AssetImage
                  id={ICONS[index] ?? ''}
                  alt=""
                  width={93}
                  height={93}
                  objectFit="contain"
                  decorative
                />
              </span>
              <span className="feature-grid__text">
                <h3 className="feature-grid__card-title">{card.title}</h3>
                <p className="feature-grid__card-body">{card.body}</p>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
