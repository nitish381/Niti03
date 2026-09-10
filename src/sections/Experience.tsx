import { Reveal } from '@/components/Reveal';
import { experience } from '@/content/site';

export function Experience() {
  return (
    <section className="section container">
      <h2 className="experience__heading display">Experience</h2>
      <div>
        {experience.map((role, i) => (
          <Reveal as="div" className="experience-row" key={role.company} delay={i * 50}>
            <span className="experience-row__period">{role.period}</span>
            <span>
              <span className="experience-row__company display">{role.company}</span>
              <p className="experience-row__role">{role.role}</p>
            </span>
            <span>
              {role.tags && <p className="experience-row__tags">{role.tags}</p>}
              {role.detail && <p className="experience-row__detail">{role.detail}</p>}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
