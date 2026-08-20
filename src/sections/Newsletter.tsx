import type { FormEvent } from 'react';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { newsletter } from '@/content/raahi';

export function Newsletter() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Wiring lands with the real endpoint in a later phase.
  };

  return (
    <Section name="newsletter">
      <div className="section__decor" data-asset-group="newsletter-glow" />

      <SectionHeading
        eyebrow={newsletter.eyebrow}
        title={newsletter.title}
        size="xl"
        align="center"
      />

      <form className="newsletter__form" onSubmit={onSubmit}>
        <label className="u-visually-hidden" htmlFor="newsletter-email">
          {newsletter.placeholder}
        </label>
        <input
          id="newsletter-email"
          className="newsletter__input"
          type="email"
          name="email"
          placeholder={newsletter.placeholder}
          required
        />
        <button type="submit" className="newsletter__submit">
          {newsletter.cta}
        </button>
      </form>
    </Section>
  );
}
