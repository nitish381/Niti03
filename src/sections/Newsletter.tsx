import { useState, type FormEvent } from 'react';
import { Reveal } from '@/components/Reveal';
import { newsletter } from '@/content/raahi';

export function Newsletter() {
  const [done, setDone] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // No endpoint is specified in the design; the success state is local only.
    setDone(true);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__glow" aria-hidden="true" />

      <div className="newsletter__inner">
        <Reveal className="newsletter__head">
          <p className="newsletter__eyebrow">{newsletter.eyebrow}</p>
          <h2 className="newsletter__title">{newsletter.title}</h2>
        </Reveal>

        <Reveal className="newsletter__form" delay={100}>
          <form onSubmit={onSubmit} className="newsletter__field">
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
              autoComplete="email"
            />
            <button type="submit" className="newsletter__submit">
              {done ? '✓' : newsletter.cta}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
