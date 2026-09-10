import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import type { Project } from '@/content/site';
import { projectCovers } from '@/content/assets';

interface ProjectRailProps {
  projects: Project[];
}

export function ProjectRail({ projects }: ProjectRailProps) {
  return (
    <ul className="rail">
      {projects.map((project, i) => (
        <Reveal as="li" key={project.slug} delay={i * 60}>
          <Link to={`/work/${project.slug}`} className="rail-row">
            <span className="rail-row__index">{project.index}</span>
            <span className="rail-row__title">
              <span className="rail-row__name display">{project.name}</span>
              <span className="rail-row__subtitle">{project.subtitle}</span>
            </span>
            <span className="rail-row__tags">{project.tags}</span>
            <span className="rail-row__arrow" aria-hidden="true">
              →
            </span>
            <span className="rail-row__preview">
              <img src={projectCovers[project.slug]} alt="" loading="lazy" />
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
