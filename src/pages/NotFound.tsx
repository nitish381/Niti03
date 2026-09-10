import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="section container final-cta">
      <h1 className="final-cta__headline display">Page not found.</h1>
      <Link to="/" className="final-cta__action">
        Back home ↗
      </Link>
    </section>
  );
}
