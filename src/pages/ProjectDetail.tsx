import { Link, Navigate, useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Reveal } from '@/components/Reveal';
import { projectRoute, projects } from '@/content/site';
import { getProjectThumbnail } from '@/content/assets';
import { useDocumentHead } from '@/hooks/useDocumentHead';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = index === -1 ? undefined : projects[index];

  useDocumentHead(
    project
      ? {
          title: `${project.name} — Nitish Kumar`,
          description: project.description,
        }
      : { title: 'Project not found — Nitish Kumar' },
  );

  if (!project) return <Navigate to="/work" replace />;

  const next = projects[(index + 1) % projects.length]!;

  return (
    <article>
      <header className="container project-hero">
        <p className="project-hero__index">
          <span className="project-hero__index-num">{project.index}</span> / Selected Work
        </p>
        <h1 className="project-hero__name display">{project.name}</h1>
        <p className="project-hero__subtitle display">{project.subtitle}</p>
        <p className="project-hero__tags">{project.tags}</p>
      </header>

      <Reveal as="div" className="container project-cover">
        <img
          src={getProjectThumbnail(project.slug)}
          alt=""
          width={1600}
          height={1000}
          loading="lazy"
        />
      </Reveal>

      <div className="section container">
        <Row className="g-4">
          <Col xs={12} md={8} lg={3}>
            <p className="project-body__label">Overview</p>
          </Col>
          <Col xs={12} md={8} lg={9}>
            <Reveal as="p" className="project-body__description display">
              {project.description}
            </Reveal>
          </Col>
        </Row>
      </div>

      <div className="container section--tight">
        <nav className="project-nav" aria-label="Project">
          <Link to="/work">
            <span className="arrow arrow--back" aria-hidden="true">
              ←
            </span>
            All Projects
          </Link>
          <Link to={projectRoute(next.slug)}>
            Next: {next.name}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
