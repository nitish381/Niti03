import { Reveal } from '@/components/Reveal';
import { StaggerText } from '@/components/StaggerText';
import { philosophy } from '@/content/site';

export function Philosophy() {
  return (
    <section className="philosophy-break">
      <div className="container philosophy">
        <StaggerText
          as="h2"
          className="philosophy__headline display"
          text={philosophy.headline}
          wordDelay={55}
        />
        <Reveal as="p" className="philosophy__statement" delay={320}>
          {philosophy.statement}
        </Reveal>
      </div>
    </section>
  );
}
