import { useState, type FormEvent } from 'react';
import { gsap } from '@/lib/scroll/gsap';
import { useScrollScene } from '@/lib/scroll/useScrollScene';
import { parallax, reveal } from '@/lib/scroll/scenes';
import { newsletter } from '@/content/raahi';

export function Newsletter() {
  const [done, setDone] = useState(false);

  /** The closing beat. The glow expands behind the words as the section
   *  arrives, so the page ends on a widening rather than a stop. */
  const ref = useScrollScene<HTMLElement>((root) => {
    const glow = root.querySelector('.newsletter__glow');

    gsap.from(glow, {
      scale: 0.72,
      autoAlpha: 0,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: root, start: 'top 85%', once: true },
    });
    if (glow) parallax(glow, 44, root);

    reveal(root, gsap.utils.toArray('[data-news] > *', root), { y: 30, stagger: 0.11 });
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // No endpoint is specified in the design; the success state is local only.
    setDone(true);
  };

  return (
    <section className="newsletter" ref={ref}>
      <div className="newsletter__glow" aria-hidden="true" />

      <div className="newsletter__inner" data-news>
        <div className="newsletter__head">
          <p className="newsletter__eyebrow">{newsletter.eyebrow}</p>
          <h2 className="newsletter__title">{newsletter.title}</h2>
        </div>

        <div className="newsletter__form">
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
        </div>
      </div>
    </section>
  );
}
