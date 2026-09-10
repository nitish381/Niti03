import { Reveal } from '@/components/Reveal';
import { aiDesign } from '@/content/site';

export function AiDesign() {
  return (
    <section className="ai-design">
      <div className="container ai-design__inner">
        <Reveal as="h2" className="ai-design__heading display">
          {aiDesign.heading}
        </Reveal>
        <Reveal as="p" className="ai-design__statement" delay={60}>
          {aiDesign.statement}
        </Reveal>
        <Reveal as="p" className="ai-design__description" delay={100}>
          {aiDesign.description}
        </Reveal>
        <div className="ai-design__workflow">
          {aiDesign.workflow.map((stage, i) => (
            <Reveal as="div" key={stage.stage} delay={i * 60}>
              <p className="ai-design__stage display">{stage.stage}</p>
              <p className="ai-design__stage-detail">{stage.detail}</p>
            </Reveal>
          ))}
        </div>
        <p className="ai-design__tools">{aiDesign.tools}</p>
      </div>
    </section>
  );
}
