import { Link, Navigate, useParams } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/content/site';
import { projectCovers } from '@/content/assets';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) return <Navigate to="/work" replace />;

  const project = projects[index]!;
  const next = projects[(index + 1) % projects.length]!;

  return (
    <article>
      <header className="container project-hero">
        <p className="project-hero__index display">{project.index} / SELECTED WORK</p>
        <h1 className="project-hero__name display">{project.name}</h1>
        <p className="project-hero__subtitle display">{project.subtitle}</p>
        <p className="project-hero__tags">{project.tags}</p>
      </header>

      <Reveal as="div" className="container project-cover">
        <img src={projectCovers[project.slug]} alt="" />
      </Reveal>

      <div className="section container project-body">
        <p className="project-body__label">Overview</p>
        <Reveal as="p" className="project-body__description">
          {project.description}
        </Reveal>
      </div>

      <div className="container section--tight">
        <nav className="project-nav">
          <Link to="/work">← All Projects</Link>
          <Link to={`/work/${next.slug}`}>Next: {next.name} →</Link>
        </nav>
      </div>
    </article>
  );
}
