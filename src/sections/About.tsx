import { Row, Col } from 'react-bootstrap';
import { Reveal } from '@/components/Reveal';
import { about } from '@/content/site';

export function About() {
  return (
    <section className="section container">
      <Row className="g-4">
        <Col xs={12} md={8} lg={3}>
          <h2 className="about__heading display">{about.heading}</h2>
        </Col>
        <Col xs={12} md={8} lg={9}>
          <Reveal as="p" className="about__body">
            {about.body}
          </Reveal>
        </Col>
      </Row>
    </section>
  );
}
