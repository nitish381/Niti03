import { gsap } from '@/lib/scroll/gsap';
import { useScrollScene } from '@/lib/scroll/useScrollScene';
import { reveal } from '@/lib/scroll/scenes';
import { statementBand } from '@/content/raahi';

/** Thesis line bridging the hero into the personal map. A quiet beat: the two
 *  lines settle in sequence and nothing else moves. */
export function StatementBand() {
  const ref = useScrollScene<HTMLElement>((root) => {
    reveal(root, gsap.utils.toArray('[data-statement] > *', root), { y: 30, stagger: 0.12 });
  });

  return (
    <section className="statement-band" ref={ref}>
      <div className="statement-band__inner" data-statement>
        <h2 className="statement-band__title">{statementBand.title}</h2>
        <p className="statement-band__body">{statementBand.body}</p>
      </div>
    </section>
  );
}
