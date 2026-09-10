import { Link } from 'react-router-dom';
import { ProjectRail } from '@/components/ProjectRail';
import { projects } from '@/content/site';

export function SelectedWork() {
  return (
    <section className="section container">
      <div className="work-list__head">
        <h2 className="work-list__heading display">Selected Work</h2>
        <Link to="/work" className="work-list__more">
          More projects
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
      <ProjectRail projects={projects} />
    </section>
  );
}
