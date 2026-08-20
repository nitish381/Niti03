import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { useReveal } from '@/hooks/useReveal';
import { useParallax } from '@/hooks/useParallax';
import { signalDiagram } from '@/content/raahi';

interface SignalLabelProps {
  label: string;
  value: string;
  position: string;
}

function SignalLabel({ label, value, position }: SignalLabelProps) {
  return (
    <div className={`signal-diagram__label signal-diagram__label--${position}`}>
      <span className="signal-diagram__label-key">{label}</span>
      <span className="signal-diagram__label-value">{value}</span>
    </div>
  );
}

/**
 * Radial four-signal composition.
 *
 * `raahi-personal-map-visual.png` already carries the white squircle frame, so
 * no border or radius is applied over it. The connectors are dashed rules with
 * a ring terminal — a line and a circle in the design, so they are drawn in CSS
 * rather than shipped as files. On entry they draw outward from the centre.
 */
export function SignalDiagram() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.25 });
  const photoRef = useParallax<HTMLDivElement>(0.04, { max: 26 });
  const [top, right, bottom, left] = signalDiagram.points;

  return (
    <section className="signal-diagram">
      <div
        className={['signal-diagram__inner', visible ? 'is-drawn' : '']
          .filter(Boolean)
          .join(' ')}
        ref={ref}
      >
        <SignalLabel label={top.label} value={top.value} position="top" />
        <span
          className="signal-diagram__connector signal-diagram__connector--top"
          aria-hidden="true"
        />

        <SignalLabel label={left.label} value={left.value} position="left" />
        <span
          className="signal-diagram__connector signal-diagram__connector--left"
          aria-hidden="true"
        />

        <Reveal variant="scale" className="signal-diagram__figure">
          <div className="signal-diagram__photo-wrap" ref={photoRef}>
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
        </Reveal>

        <span
          className="signal-diagram__connector signal-diagram__connector--right"
          aria-hidden="true"
        />
        <SignalLabel label={right.label} value={right.value} position="right" />

        <span
          className="signal-diagram__connector signal-diagram__connector--bottom"
          aria-hidden="true"
        />
        <SignalLabel label={bottom.label} value={bottom.value} position="bottom" />
      </div>
    </section>
  );
}
