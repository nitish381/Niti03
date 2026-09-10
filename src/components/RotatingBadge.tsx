import { Link } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function RotatingBadge() {
  const reducedMotion = useReducedMotion();

  return (
    <Link to="/contact" className="hero-badge" aria-label="Say hello">
      <svg
        viewBox="0 0 120 120"
        className={`hero-badge__ring ${reducedMotion ? '' : 'hero-badge__ring--spin'}`}
        aria-hidden="true"
      >
        <defs>
          <path id="hero-badge-path" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text className="hero-badge__text">
          <textPath href="#hero-badge-path">SAY HELLO · SAY HELLO · </textPath>
        </text>
      </svg>
      <span className="hero-badge__arrow" aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
