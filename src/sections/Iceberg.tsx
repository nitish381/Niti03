import { Button } from '@/components/Button';
import { NodeMarker } from '@/components/NodeMarker';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { iceberg } from '@/content/raahi';

/** Surface-vs-depth thesis. Iceberg render pending export. */
export function Iceberg() {
  const above = iceberg.markers.filter((m) => m.depth === 'above');
  const below = iceberg.markers.filter((m) => m.depth === 'below');

  return (
    <Section name="iceberg">
      <div className="iceberg__grid">
        <div className="iceberg__copy">
          <SectionHeading
            eyebrow={iceberg.eyebrow}
            title={iceberg.title}
            size="lg"
          />
          {iceberg.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
          <Button variant="lg">{iceberg.cta}</Button>
        </div>

        <figure className="iceberg__figure">
          <div className="iceberg__image" data-asset="iceberg-render" />
          {[
            { heading: iceberg.aboveHeading, items: above, depth: 'above' as const },
            { heading: iceberg.belowHeading, items: below, depth: 'below' as const },
          ].map((group) => (
            <ul
              key={group.depth}
              className={`iceberg__markers iceberg__markers--${group.depth}`}
              aria-label={group.heading}
            >
              {group.items.map((marker) => (
                <li key={marker.label} className="iceberg__marker">
                  <NodeMarker depth={marker.depth} />
                  {marker.label}
                </li>
              ))}
            </ul>
          ))}
        </figure>
      </div>
    </Section>
  );
}
