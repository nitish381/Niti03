import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/content/site';
import { projectCovers } from '@/content/assets';

export function SelectedWork() {
  return (
    <section className="section container">
      <div className="work-list__head">
        <h2 className="work-list__heading display">Selected Work</h2>
        <Link to="/work" className="work-list__more">
          MORE PROJECTS →
        </Link>
      </div>
      <div>
        {projects.map((project, i) => (
          <Reveal as="div" key={project.slug} delay={i * 60}>
            <Link to={`/work/${project.slug}`} className="project-row">
              <span className="project-row__index">{project.index}</span>
              <span className="project-row__title">
                <span className="project-row__name display">{project.name}</span>
                <span className="project-row__subtitle">{project.subtitle}</span>
              </span>
              <span className="project-row__thumb">
                <img src={projectCovers[project.slug]} alt="" />
              </span>
              <span className="project-row__meta">
                <span className="project-row__tags">{project.tags}</span>
                <span className="project-row__description">{project.description}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
