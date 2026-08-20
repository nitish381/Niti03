import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { useReveal } from '@/hooks/useReveal';
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
 * Radial four-signal composition: a squircle photo at the centre with dashed
 * connectors running out to N / E / S / W labels. On entry the connectors draw
 * outward from the centre with a 100ms stagger.
 *
 * Below 768 the radial layout is abandoned for a 2 × 2 label grid under the
 * photo — the connectors carry no meaning once the axes collapse.
 */
export function SignalDiagram() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.25 });

  const [top, right, bottom, left] = signalDiagram.points;

  return (
    <section className="signal-diagram">
      <div
        className={[
          'signal-diagram__inner',
          visible ? 'is-drawn' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        ref={ref}
      >
        <SignalLabel label={top.label} value={top.value} position="top" />

        <span className="signal-diagram__connector signal-diagram__connector--top" aria-hidden="true">
          <AssetImage id="connector-vertical-top" alt="" objectFit="contain" decorative />
        </span>

        <SignalLabel label={left.label} value={left.value} position="left" />

        <span className="signal-diagram__connector signal-diagram__connector--left" aria-hidden="true">
          <AssetImage id="connector-horizontal-left" alt="" objectFit="contain" decorative />
        </span>

        <Reveal variant="scale" className="signal-diagram__figure">
          <AssetImage
            id="signal-crossroads"
            alt="A child with a telescope standing at a four-way crossroads, seen from above"
            className="signal-diagram__photo"
            width={448}
            height={450}
            objectPosition="50% 50%"
          />
          <span className="signal-diagram__centre" aria-hidden="true">
            {signalDiagram.centreLabel}
          </span>
        </Reveal>

        <span className="signal-diagram__connector signal-diagram__connector--right" aria-hidden="true">
          <AssetImage id="connector-horizontal-right" alt="" objectFit="contain" decorative />
        </span>

        <SignalLabel label={right.label} value={right.value} position="right" />

        <span className="signal-diagram__connector signal-diagram__connector--bottom" aria-hidden="true">
          <AssetImage id="connector-vertical-bottom" alt="" objectFit="contain" decorative />
        </span>

        <SignalLabel label={bottom.label} value={bottom.value} position="bottom" />
      </div>
    </section>
  );
}
