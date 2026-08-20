import { Reveal } from '@/components/Reveal';
import { darkBanner } from '@/content/raahi';

/**
 * #373737 card, radius 30, that deliberately overlaps the top edge of the
 * library section behind it. The overlap is the point — it stitches the two
 * sections together.
 */
export function DarkBanner() {
  return (
    <div className="dark-banner">
      <Reveal className="dark-banner__panel">
        <h2 className="dark-banner__title">{darkBanner.title}</h2>
      </Reveal>
    </div>
  );
}
