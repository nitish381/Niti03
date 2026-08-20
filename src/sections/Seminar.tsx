import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { seminar } from '@/content/raahi';

/**
 * Seminar pitch. Figma mosaic: a 393.47 × 636 portrait on the left with a
 * 355.70 × 265 crowd shot and a 355.70 × 361 group shot stacked to its right,
 * 10px gutters.
 */
export function Seminar() {
  return (
    <section className="seminar">
      <div className="seminar__inner">
        <Reveal variant="left" className="seminar__mosaic">
          <AssetImage
            id="seminar-founder-stage"
            alt="The founder speaking on stage at a Raahi seminar"
            className="seminar__photo seminar__photo--tall"
            width={393}
            height={636}
            objectPosition="50% 30%"
          />
          <AssetImage
            id="seminar-audience"
            alt="Seminar attendees listening from the audience"
            className="seminar__photo seminar__photo--wide"
            width={356}
            height={265}
            objectPosition="50% 45%"
          />
          <AssetImage
            id="seminar-group"
            alt="Attendees gathered together on stage after the session"
            className="seminar__photo seminar__photo--group"
            width={356}
            height={361}
            objectPosition="50% 40%"
          />
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
