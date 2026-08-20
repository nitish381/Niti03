import { AssetImage } from '@/components/AssetImage';
import { gsap } from '@/lib/scroll/gsap';
import { useScrollScene } from '@/lib/scroll/useScrollScene';
import { reveal } from '@/lib/scroll/scenes';
import { features } from '@/content/raahi';

const ICONS = [
  'raahi-feature-adaptive-literature',
  'raahi-feature-playable-decisions',
  'raahi-feature-moments-that-matter',
  'raahi-feature-reflective-calibration',
];

/**
 * Four engine mechanics. Figma: 1600 wide, 30px gap, 1px #D2C1AC border,
 * radius 30, 41px padding.
 *
 * Card 2's body is 14px/24px in Figma against 16px/26px on the other three,
 * and its height differs by 1px. Normalised to 16px/26px — flagged in Phase 01.
 */
export function FeatureGrid() {
  /** Cards arrive left to right on their own beat, each lifting a little
   *  further than the last so the row has a subtle diagonal to it. */
  const ref = useScrollScene<HTMLElement>((root) => {
    reveal(root, gsap.utils.toArray('[data-features="head"] > *', root), { y: 26 });

    gsap.from(gsap.utils.toArray<HTMLElement>('.feature-grid__card', root), {
      y: (i: number) => 44 + i * 10,
      autoAlpha: 0,
      duration: 0.95,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: { trigger: root, start: 'top 76%', once: true },
    });
  });

  return (
    <section id="how-it-works" className="feature-grid" ref={ref}>
      <div className="feature-grid__inner">
        <div className="feature-grid__head" data-features="head">
          <p className="feature-grid__eyebrow">{features.eyebrow}</p>
          <h2 className="feature-grid__title">{features.title}</h2>
        </div>

        <ul className="feature-grid__list">
          {features.cards.map((card, index) => (
            <li key={card.title} className="feature-grid__card">
              <span className="feature-grid__icon" aria-hidden="true">
                <AssetImage
                  id={ICONS[index] ?? ''}
                  alt=""
                  width={94}
                  height={94}
                  objectFit="contain"
                  decorative
                />
              </span>
              <span className="feature-grid__text">
                <h3 className="feature-grid__card-title">{card.title}</h3>
                <p className="feature-grid__card-body">{card.body}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
