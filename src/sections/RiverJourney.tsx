import { NodeMarker } from '@/components/NodeMarker';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { journey } from '@/content/raahi';

/** Five-stop river metaphor. Sticky sequencing and river art arrive in Phase 03. */
export function RiverJourney() {
  return (
    <Section id="journey" name="river-journey">
      <SectionHeading
        eyebrow={journey.eyebrow}
        title={journey.title}
        align="center"
      />

      <div className="river-journey__stage">
        <div className="river-journey__river" data-asset="journey-river" />
        <ol className="river-journey__stops">
          {journey.stops.map((stop) => (
            <li
              key={stop.value}
              className={`river-journey__stop river-journey__stop--${stop.side}`}
            >
              <NodeMarker />
              <span className="river-journey__label">{stop.label}</span>
              <span className="river-journey__value">{stop.value}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
