import { Row, Col } from 'react-bootstrap';
import { hero } from '@/content/site';
import { heroPortrait } from '@/content/assets';
import { UntangleLine } from '@/components/UntangleLine';
import { Monogram } from '@/components/Monogram';

export function Hero() {
  return (
    <section className="hero container">
      <Row className="hero__row align-items-center g-4">
        <Col xs={12} md={7}>
          <div className="hero__copy">
            <Monogram />
            <UntangleLine />
            <h1 className="hero__headline display">{hero.headline}</h1>
            <p className="hero__role">{hero.role}</p>
            <p className="hero__description">{hero.description}</p>
            <p className="hero__capabilities">{hero.capabilities}</p>
          </div>
        </Col>
        <Col xs={12} md={5} className="hero__portrait-col">
          <div className="hero__portrait">
            <img src={heroPortrait} alt="Portrait of Nitish Kumar" width={960} height={1200} />
          </div>
        </Col>
      </Row>
    </section>
  );
}
