import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { features } from '@/content/raahi';

export function FeatureGrid() {
  return (
    <Section id="how-it-works" name="feature-grid">
      <SectionHeading
        eyebrow={features.eyebrow}
        title={features.title}
        align="center"
      />

      <ul className="feature-grid__list">
        {features.cards.map((card) => (
          <li key={card.title} className="feature-grid__card">
            <span
              className="feature-grid__icon"
              data-asset={`feature-icon-${card.iconNode}`}
            />
            <h3 className="feature-grid__title">{card.title}</h3>
            <p className="feature-grid__body">{card.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
