import { Row, Col } from 'react-bootstrap';
import { Reveal } from '@/components/Reveal';
import { intro } from '@/content/site';

export function Intro() {
  return (
    <section className="section container">
      <Row className="g-4">
        <Col xs={12} md={8} lg={4}>
          <Reveal as="h2" className="intro__heading display">
            {intro.heading}
          </Reveal>
        </Col>
        <Col xs={12} md={8}>
          <div className="intro__body">
            <Reveal as="p" className="intro__description">
              {intro.description}
            </Reveal>
            <Reveal as="p" className="intro__statement display" delay={80}>
              {intro.statement}
            </Reveal>
          </div>
        </Col>
      </Row>
    </section>
  );
}
