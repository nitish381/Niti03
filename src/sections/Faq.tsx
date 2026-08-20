import Accordion from 'react-bootstrap/Accordion';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { faq } from '@/content/raahi';

/**
 * Single-open accordion. Answer copy is still Lorem ipsum in Figma, so the
 * bodies render empty rather than shipping placeholder prose.
 */
export function Faq() {
  return (
    <Section name="faq">
      <SectionHeading eyebrow={faq.eyebrow} title={faq.title} align="center" />

      <Accordion defaultActiveKey="0" className="faq__list">
        {faq.entries.map((entry, index) => (
          <Accordion.Item
            key={entry.question}
            eventKey={String(index)}
            className="faq__item"
          >
            <Accordion.Header>
              <span className="faq__index">{index + 1}</span>
              <span className="faq__question">{entry.question}</span>
            </Accordion.Header>
            <Accordion.Body className="faq__answer">{entry.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Section>
  );
}
