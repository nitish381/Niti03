import { AssetImage } from '@/components/AssetImage';
import { gsap } from '@/lib/scroll/gsap';
import { useScrollScene } from '@/lib/scroll/useScrollScene';
import { reveal } from '@/lib/scroll/scenes';
import { founder } from '@/content/raahi';

/** A rest in the page — reveal only, no parallax, per the Phase 01 motion plan. */
export function FounderMessage() {
  /** The person arrives first, the words follow. */
  const ref = useScrollScene<HTMLElement>((root) => {
    reveal(root, gsap.utils.toArray('[data-founder="person"]', root), { y: 26, scale: 0.94 });
    reveal(root, gsap.utils.toArray('[data-founder="quote"] > *', root), {
      y: 24,
      stagger: 0.09,
      delay: 0.12,
    });
  });

  return (
    <section className="founder-message" ref={ref}>
      <div className="founder-message__inner">
        <div className="founder-message__person" data-founder="person">
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
        </div>

        <blockquote className="founder-message__quote" data-founder="quote">
          <span className="founder-message__mark" aria-hidden="true">
            <AssetImage id="quote-mark-large" alt="" objectFit="contain" decorative />
          </span>
          <h2 className="founder-message__title">{founder.title}</h2>
          {founder.quote.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </blockquote>
      </div>
    </section>
  );
}
