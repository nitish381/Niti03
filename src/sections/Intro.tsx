import { Reveal } from '@/components/Reveal';
import { intro } from '@/content/site';

export function Intro() {
  return (
    <section className="section container intro">
      <Reveal as="h2" className="intro__heading display">
        {intro.heading}
      </Reveal>
      <div className="intro__body">
        <Reveal as="p" className="intro__description">
          {intro.description}
        </Reveal>
        <Reveal as="p" className="intro__statement display" delay={80}>
          {intro.statement}
        </Reveal>
      </div>
    </section>
  );
}
