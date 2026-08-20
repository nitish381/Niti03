import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { founder } from '@/content/raahi';

/** A rest in the page — reveal only, no parallax, per the Phase 01 motion plan. */
export function FounderMessage() {
  return (
    <section className="founder-message">
      <div className="founder-message__inner">
        <Reveal className="founder-message__person">
          <AssetImage
            id="founder-avatar"
            alt="Vikram R Singh"
            className="founder-message__avatar"
            width={140}
            height={140}
            objectPosition="50% 30%"
          />
          <span className="founder-message__name">{founder.name}</span>
          <span className="founder-message__role">{founder.role}</span>
        </Reveal>

        <Reveal as="blockquote" className="founder-message__quote" delay={100}>
          <span className="founder-message__mark" aria-hidden="true">
            <AssetImage id="quote-mark-large" alt="" objectFit="contain" decorative />
          </span>
          <h2 className="founder-message__title">{founder.title}</h2>
          {founder.quote.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
