import { Reveal } from '@/components/Reveal';
import { about } from '@/content/site';

export function About() {
  return (
    <section className="section container about">
      <h2 className="about__heading display">{about.heading}</h2>
      <Reveal as="p" className="about__body">
        {about.body}
      </Reveal>
    </section>
  );
}
