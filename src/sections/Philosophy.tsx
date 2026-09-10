import { Reveal } from '@/components/Reveal';
import { philosophy } from '@/content/site';

export function Philosophy() {
  return (
    <section className="philosophy-break">
      <div className="container philosophy">
        <Reveal as="h2" className="philosophy__headline display">
          {philosophy.headline}
        </Reveal>
        <Reveal as="p" className="philosophy__statement" delay={80}>
          {philosophy.statement}
        </Reveal>
      </div>
    </section>
  );
}
