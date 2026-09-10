import { Reveal } from '@/components/Reveal';
import { aiDesign } from '@/content/site';

export function AiDesign() {
  return (
    <section className="section container">
      <Reveal as="div" className="ai-design">
        <div className="ai-design__inner">
          <h2 className="ai-design__heading display">{aiDesign.heading}</h2>
          <p className="ai-design__statement">{aiDesign.statement}</p>
          <p className="ai-design__description">{aiDesign.description}</p>
          <div className="ai-design__workflow">
            {aiDesign.workflow.map((stage) => (
              <div key={stage.stage}>
                <p className="ai-design__stage display">{stage.stage}</p>
                <p className="ai-design__stage-detail">{stage.detail}</p>
              </div>
            ))}
          </div>
          <p className="ai-design__tools">{aiDesign.tools}</p>
        </div>
      </Reveal>
    </section>
  );
}
