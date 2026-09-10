import { Reveal } from '@/components/Reveal';
import { finalCta } from '@/content/site';

interface FinalCtaProps {
  headingLevel?: 'h1' | 'h2';
}

export function FinalCta({ headingLevel = 'h2' }: FinalCtaProps) {
  return (
    <section className="section container final-cta">
      <Reveal as={headingLevel} className="final-cta__headline display">
        {finalCta.headline}
      </Reveal>
      <p className="final-cta__sub display">{finalCta.subheadline}</p>
      <a className="final-cta__action" href={finalCta.links.email}>
        {finalCta.action}
        <span className="arrow" aria-hidden="true">
          ↗
        </span>
      </a>
      <div className="final-cta__links">
        <a href={finalCta.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={finalCta.links.email}>Email</a>
        <a href={finalCta.links.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </section>
  );
}
