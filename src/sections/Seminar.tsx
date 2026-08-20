import { AssetImage } from '@/components/AssetImage';
import { gsap } from '@/lib/scroll/gsap';
import { useScrollScene } from '@/lib/scroll/useScrollScene';
import { parallax, reveal, scrollWipe } from '@/lib/scroll/scenes';
import { seminar } from '@/content/raahi';

/**
 * Seminar pitch. Figma mosaic: a 393.47 × 636 portrait on the left with a
 * 355.70 × 265 crowd shot and a 355.70 × 361 group shot stacked to its right,
 * 10px gutters.
 */
export function Seminar() {
  /**
   * The mosaic is uncovered rather than faded in: a wipe from the top edge, so
   * the three photographs resolve as the reader arrives. The copy beside it
   * staggers in slightly later and travels a shorter distance, which reads as
   * the images being further away.
   */
  const ref = useScrollScene<HTMLElement>((root) => {
    const mosaic = root.querySelector('[data-seminar="mosaic"]');
    const photo = root.querySelector('.seminar__photo');
    const copy = gsap.utils.toArray<HTMLElement>('[data-seminar="copy"] > *', root);

    if (photo) scrollWipe(photo, root, { start: 'top 80%', end: 'top 30%', from: 46 });
    if (mosaic) parallax(mosaic, -40, root);

    reveal(root, copy, { y: 30, stagger: 0.1, start: 'top 74%' });
  });

  return (
    <section className="seminar" ref={ref}>
      <div className="seminar__inner">
        {/* `raahi-founder-story.png` is the finished three-photo mosaic —
            portrait, audience and group with their gutters and corners already
            composed. It is placed whole rather than rebuilt from tiles. */}
        <div className="seminar__mosaic">
          <div className="seminar__mosaic-inner" data-seminar="mosaic">
          <AssetImage
            id="raahi-founder-story"
            alt="Three photographs from a Raahi seminar: the founder speaking from a chair on stage, a full auditorium of attendees, and speakers standing together on stage afterwards"
            className="seminar__photo"
            width={760}
            height={636}
            objectFit="contain"
          />
          </div>
        </div>

        <div className="seminar__copy" data-seminar="copy">
          <ul className="seminar__meta">
            {seminar.meta.map((item) => (
              <li key={item} className="seminar__meta-item">
                {item}
              </li>
            ))}
          </ul>

          <h2 className="seminar__title">{seminar.title}</h2>

          <div className="seminar__body">
            {seminar.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          <a className="btn-raahi btn-raahi--lg" href="#the-app">
            {seminar.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
