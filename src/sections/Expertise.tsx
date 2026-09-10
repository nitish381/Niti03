import { Reveal } from '@/components/Reveal';
import { expertise } from '@/content/site';

export function Expertise() {
  return (
    <section className="section container">
      <Reveal as="h2" className="expertise__heading display">
        Expertise
      </Reveal>
      <div className="expertise__grid">
        {expertise.map((item, i) => (
          <Reveal as="div" className="expertise__item" key={item.title} delay={i * 40}>
            <h3 className="expertise__title display">{item.title}</h3>
            <p className="expertise__tags">{item.tags}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
