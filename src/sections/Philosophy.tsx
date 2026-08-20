import { Button } from '@/components/Button';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { philosophy } from '@/content/raahi';

export function Philosophy() {
  return (
    <Section id="philosophy" name="philosophy" variant="elevated">
      <div className="philosophy__grid">
        <aside className="philosophy__art is-inverse">
          <h3 className="philosophy__art-title">{philosophy.artCard.title}</h3>
          <div className="philosophy__art-image" data-asset="philosophy-calligraphy" />
          <blockquote className="philosophy__art-quote">
            {philosophy.artCard.translation}
          </blockquote>
        </aside>

        <div className="philosophy__copy">
          <SectionHeading eyebrow={philosophy.eyebrow} title={philosophy.title} />
          {philosophy.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <ul className="philosophy__checks">
            {philosophy.checks.map((check) => (
              <li key={check} className="philosophy__check">
                <span className="philosophy__check-icon" data-asset="icon-check" />
                {check}
              </li>
            ))}
          </ul>
          <Button variant="sm">{philosophy.cta}</Button>
        </div>
      </div>
    </Section>
  );
}
