import { Reveal } from '@/components/Reveal';
import { experience, experienceProgression, experienceYears } from '@/content/site';

export function Experience() {
  return (
    <section className="section container">
      <h2 className="experience__heading display">Experience</h2>

      <Reveal as="div" className="experience-headline">
        <span className="experience-headline__years display">{experienceYears}</span>
        <ol className="experience-headline__progression">
          {experienceProgression.map((stage, i) => (
            <li key={stage}>
              {stage}
              {i < experienceProgression.length - 1 && (
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Reveal>

      <div className="experience-list">
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
