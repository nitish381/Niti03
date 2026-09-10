import { ProjectRail } from '@/components/ProjectRail';
import { projects } from '@/content/site';
import { useDocumentHead } from '@/hooks/useDocumentHead';

export function Work() {
  useDocumentHead({
    title: 'All Projects — Nitish Kumar',
    description: 'Product, UX and UI work across Web3, FinTech, HealthTech and SaaS.',
  });

  return (
    <section className="section container">
      <h1 className="work-page__heading display">All Projects</h1>
      <p className="work-page__intro">
        Product, UX and UI work across Web3, FinTech, HealthTech and SaaS.
      </p>
      <div className="work-page__rail">
        <ProjectRail projects={projects} />
      </div>
    </section>
  );
}
