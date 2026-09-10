import { useLocation, useOutlet } from 'react-router-dom';

// Subtle cross-fade + rise on every route change. Keying on the pathname
// remounts the subtree, which restarts the CSS entry animation for free —
// no effect/setState choreography needed. prefers-reduced-motion disables
// the animation in CSS (components/_route-transition.scss).
export function RouteTransition() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div key={location.pathname} className="route-transition">
      {outlet}
    </div>
  );
}
