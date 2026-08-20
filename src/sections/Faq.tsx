import { useState } from 'react';
import { gsap } from '@/lib/scroll/gsap';
import { useScrollScene } from '@/lib/scroll/useScrollScene';
import { reveal } from '@/lib/scroll/scenes';
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

  /** Rows drop in one after another, close together — a list assembling, not
   *  five separate animations. */
  const ref = useScrollScene<HTMLElement>((root) => {
    reveal(root, gsap.utils.toArray('[data-faq="head"] > *', root), { y: 26 });
    reveal(root, gsap.utils.toArray('.faq__item', root), {
      y: 24,
      stagger: 0.07,
      start: 'top 78%',
      delay: 0.1,
    });
  });

  return (
    <section className="faq" ref={ref}>
      <div className="faq__inner">
        <div className="faq__head" data-faq="head">
          <p className="faq__eyebrow">{faq.eyebrow}</p>
          <h2 className="faq__title">{faq.title}</h2>
        </div>

        <ul className="faq__list">
          {faq.entries.map((entry, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <li
                key={entry.question}
                className={['faq__item', isOpen ? 'is-open' : ''].filter(Boolean).join(' ')}
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
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
