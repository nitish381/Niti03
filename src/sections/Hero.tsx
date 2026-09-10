import type { CSSProperties } from 'react';
import { Row, Col } from 'react-bootstrap';
import { hero } from '@/content/site';
import { heroPortrait } from '@/content/assets';
import { UntangleLine } from '@/components/UntangleLine';
import { Monogram } from '@/components/Monogram';
import { RotatingBadge } from '@/components/RotatingBadge';
import { useScrollParallax } from '@/hooks/useScrollParallax';

const capabilityPills = hero.capabilities.split(' · ');

export function Hero() {
  const parallaxRef = useScrollParallax<HTMLElement>();

  return (
    <section className="hero container" ref={parallaxRef}>
      {/* A different capability than the marquee's own leading item, so the
          two don't visually echo once the bled word scrolls into view above it. */}
      <p className="hero__bg-word display" aria-hidden="true">
        {capabilityPills[3]}
      </p>
      <Row className="hero__row align-items-center g-4">
        <Col xs={12} md={7}>
          <div className="hero__copy">
            <Monogram />
            <UntangleLine />
            <h1 className="hero__headline display">{hero.headline}</h1>
            <p className="hero__role">{hero.role}</p>
            <p className="hero__description">{hero.description}</p>
          </div>
        </Col>
        <Col xs={12} md={5} className="hero__portrait-col">
          <div className="hero__portrait-wrap">
            <div className="hero__portrait">
              <img src={heroPortrait} alt="Portrait of Nitish Kumar" width={960} height={1200} />
            </div>
            <ul className="hero__pills" aria-label="Capabilities">
              {capabilityPills.map((pill, i) => (
                <li className="hero__pill" style={{ '--i': i } as CSSProperties} key={pill}>
                  {pill}
                </li>
              ))}
            </ul>
            <RotatingBadge />
          </div>
        </Col>
      </Row>
    </section>
  );
}
