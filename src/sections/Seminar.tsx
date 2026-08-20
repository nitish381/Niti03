import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { useParallax } from '@/hooks/useParallax';
import { seminar } from '@/content/raahi';

/**
 * Seminar pitch. Figma mosaic: a 393.47 × 636 portrait on the left with a
 * 355.70 × 265 crowd shot and a 355.70 × 361 group shot stacked to its right,
 * 10px gutters.
 */
export function Seminar() {
  const mosaicRef = useParallax<HTMLDivElement>(0.05, { max: 36 });

  return (
    <section className="seminar">
      <div className="seminar__inner">
        {/* `raahi-founder-story.png` is the finished three-photo mosaic —
            portrait, audience and group with their gutters and corners already
            composed. It is placed whole rather than rebuilt from tiles. */}
        <Reveal variant="left" className="seminar__mosaic">
          <div className="seminar__mosaic-inner" ref={mosaicRef}>
          <AssetImage
            id="raahi-founder-story"
            alt="Three photographs from a Raahi seminar: the founder speaking from a chair on stage, a full auditorium of attendees, and speakers standing together on stage afterwards"
            className="seminar__photo"
            width={760}
            height={636}
            objectFit="contain"
          />
          </div>
        </Reveal>

        <Reveal variant="right" className="seminar__copy" delay={100}>
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
        </Reveal>
      </div>
    </section>
  );
}
