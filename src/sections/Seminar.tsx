import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { seminar } from '@/content/raahi';

/** Seminar pitch with a three-photo mosaic. Photos pending export. */
export function Seminar() {
  return (
    <Section name="seminar">
      <div className="seminar__grid">
        <div className="seminar__mosaic">
          <div className="seminar__photo seminar__photo--tall" data-asset="seminar-founder" />
          <div className="seminar__photo seminar__photo--wide" data-asset="seminar-audience" />
          <div className="seminar__photo seminar__photo--group" data-asset="seminar-group" />
        </div>

        <div className="seminar__copy">
          <ul className="seminar__meta">
            {seminar.meta.map((item) => (
              <li key={item} className="seminar__meta-item">
                {item}
              </li>
            ))}
          </ul>
          <h2 className="seminar__title">{seminar.title}</h2>
          {seminar.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <Button variant="lg">{seminar.cta}</Button>
        </div>
      </div>
    </Section>
  );
}
