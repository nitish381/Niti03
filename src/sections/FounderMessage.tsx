import { Section } from '@/components/Section';
import { founder } from '@/content/raahi';

export function FounderMessage() {
  return (
    <Section name="founder-message" variant="tight">
      <div className="founder-message__grid">
        <div className="founder-message__person">
          <div className="founder-message__avatar" data-asset="founder-avatar" />
          <p className="founder-message__name">{founder.name}</p>
          <p className="founder-message__role">{founder.role}</p>
        </div>

        <blockquote className="founder-message__quote">
          <span className="founder-message__mark" data-asset="quote-mark" aria-hidden="true" />
          <h2 className="founder-message__title">{founder.title}</h2>
          {founder.quote.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </blockquote>
      </div>
    </Section>
  );
}
