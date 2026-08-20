import { NodeMarker } from '@/components/NodeMarker';
import { Section } from '@/components/Section';
import { signalDiagram } from '@/content/raahi';

/** Radial four-signal diagram. Centre photo pending export. */
export function SignalDiagram() {
  return (
    <Section name="signal-diagram">
      <div className="signal-diagram__stage" data-asset="signal-crossroads">
        <span className="signal-diagram__centre">{signalDiagram.centreLabel}</span>
      </div>
      <ul className="signal-diagram__points">
        {signalDiagram.points.map((point) => (
          <li
            key={point.label}
            className={`signal-diagram__point signal-diagram__point--${point.position}`}
          >
            <NodeMarker size="sm" />
            <span className="signal-diagram__label">{point.label}</span>
            <span className="signal-diagram__value">{point.value}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
