import { AssetImage } from '@/components/AssetImage';
import { gsap } from '@/lib/scroll/gsap';
import { useScrollScene } from '@/lib/scroll/useScrollScene';
import { EASE_SCRUB } from '@/lib/scroll/gsap';
import { parallax } from '@/lib/scroll/scenes';
import { signalDiagram } from '@/content/raahi';

interface SignalLabelProps {
  label: string;
  value: string;
  position: string;
}

function SignalLabel({ label, value, position }: SignalLabelProps) {
  return (
    <div className={`signal-diagram__label signal-diagram__label--${position}`} data-signal="label">
      <span className="signal-diagram__label-key">{label}</span>
      <span className="signal-diagram__label-value">{value}</span>
    </div>
  );
}

/**
 * The personal map, discovered rather than displayed.
 *
 * The crossroads settles out of a slight over-scale as the section arrives, then
 * the four connectors draw outward from it and each label fades in behind its
 * own line — all scrubbed, so the diagram assembles itself under the reader's
 * scroll. The photograph drifts slowly behind the labels to keep the two planes
 * apart.
 *
 * `raahi-personal-map-visual.png` already carries the white squircle frame, so
 * nothing is drawn over it. The connectors are a dashed rule and a ring, which
 * are CSS shapes rather than files.
 */
export function SignalDiagram() {
  const ref = useScrollScene<HTMLElement>((root) => {
    const figure = root.querySelector('.signal-diagram__figure');
    const photo = root.querySelector('[data-signal="photo"]');
    const labels = gsap.utils.toArray<HTMLElement>('[data-signal="label"]', root);
    const lines = gsap.utils.toArray<HTMLElement>('.signal-diagram__connector', root);

    gsap.from(figure, {
      scale: 0.88,
      autoAlpha: 0,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: root, start: 'top 78%', once: true },
    });

    if (photo) parallax(photo, 34, root);

    const tl = gsap.timeline({
      scrollTrigger: { trigger: root, start: 'top 66%', end: 'bottom 76%', scrub: 0.7 },
      defaults: { ease: EASE_SCRUB },
    });

    // Lines grow out of the centre, each label arriving behind its own line.
    lines.forEach((line, i) => {
      tl.from(line, { scaleX: line.dataset.axis === 'x' ? 0 : 1, scaleY: line.dataset.axis === 'y' ? 0 : 1 }, i * 0.12);
    });
    tl.from(labels, { autoAlpha: 0, y: 16, stagger: 0.12 }, 0.1);
  });

  const [top, right, bottom, left] = signalDiagram.points;

  return (
    <section className="signal-diagram" ref={ref}>
      <div className="signal-diagram__inner">
        <SignalLabel label={top.label} value={top.value} position="top" />
        <span className="signal-diagram__connector signal-diagram__connector--top" data-axis="y" aria-hidden="true" />

        <SignalLabel label={left.label} value={left.value} position="left" />
        <span className="signal-diagram__connector signal-diagram__connector--left" data-axis="x" aria-hidden="true" />

        <div className="signal-diagram__figure">
          <div className="signal-diagram__photo-wrap" data-signal="photo">
            <AssetImage
              id="raahi-personal-map-visual"
              alt="A young person with a telescope standing at the centre of a four-way crossroads, seen from directly above"
              className="signal-diagram__photo"
              width={480}
              height={482}
              objectFit="contain"
            />
          </div>
          <span className="signal-diagram__centre" aria-hidden="true">
            {signalDiagram.centreLabel}
          </span>
        </div>

        <span className="signal-diagram__connector signal-diagram__connector--right" data-axis="x" aria-hidden="true" />
        <SignalLabel label={right.label} value={right.value} position="right" />

        <span className="signal-diagram__connector signal-diagram__connector--bottom" data-axis="y" aria-hidden="true" />
        <SignalLabel label={bottom.label} value={bottom.value} position="bottom" />
      </div>
    </section>
  );
}
