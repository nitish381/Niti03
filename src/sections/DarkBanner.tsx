import { gsap } from '@/lib/scroll/gsap';
import { useScrollScene } from '@/lib/scroll/useScrollScene';
import { darkBanner } from '@/content/raahi';

/**
 * #373737 card that overlaps the top edge of the library section behind it.
 * It rises into that overlap as it arrives, which makes the join between the
 * two sections feel deliberate rather than incidental.
 */
export function DarkBanner() {
  const ref = useScrollScene<HTMLDivElement>((root) => {
    gsap.from(root.querySelector('.dark-banner__panel'), {
      y: 46,
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: root, start: 'top 88%', once: true },
    });
  });

  return (
    <div className="dark-banner" ref={ref}>
      <div className="dark-banner__panel">
        <h2 className="dark-banner__title">{darkBanner.title}</h2>
      </div>
    </div>
  );
}
