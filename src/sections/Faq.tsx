import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { faq } from '@/content/raahi';

/**
 * Single-open accordion.
 *
 * Built directly rather than on React-Bootstrap's Accordion: the Figma design
 * needs a numbered badge inside the trigger and a plus→minus morph, and the
 * height transition has to be driven by grid-template-rows to animate to
 * intrinsic height without measuring. Item 1 is open by default, as in Figma.
 *
 * Answer bodies are Lorem ipsum in the source file, so nothing is rendered for
 * them yet — see the note in content/raahi.ts.
 */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq">
      <div className="faq__inner">
        <Reveal className="faq__head">
          <p className="faq__eyebrow">{faq.eyebrow}</p>
          <h2 className="faq__title">{faq.title}</h2>
        </Reveal>

        <ul className="faq__list">
          {faq.entries.map((entry, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <Reveal
                as="li"
                key={entry.question}
                className={['faq__item', isOpen ? 'is-open' : ''].filter(Boolean).join(' ')}
                delay={index * 60}
              >
                <h3 className="faq__heading">
                  <button
                    type="button"
                    id={buttonId}
                    className="faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="faq__index" aria-hidden="true">
                      {index + 1}
                    </span>
                    <span className="faq__question">{entry.question}</span>
                    <span className="faq__toggle" aria-hidden="true">
                      <span className="faq__toggle-bar" />
                      <span className="faq__toggle-bar faq__toggle-bar--vertical" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  className="faq__panel"
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <div className="faq__panel-inner">
                    {entry.answer ? <p className="faq__answer">{entry.answer}</p> : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
