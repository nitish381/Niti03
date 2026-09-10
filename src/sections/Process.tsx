import { Reveal } from '@/components/Reveal';
import { process } from '@/content/site';

export function Process() {
  return (
    <section className="section container">
      <h2 className="process__heading display">{process.heading}</h2>
      <div className="process__list">
        {process.steps.map((step, i) => (
          <Reveal as="div" className="process-row" key={step.index} delay={i * 50}>
            <span className="process-row__index">{step.index}</span>
            <span className="process-row__title display">{step.title}</span>
            <span className="process-row__detail">{step.detail}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
