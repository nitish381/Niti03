import { useEffect, useRef, useState } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Subtle cross-fade + rise between routes. No loading spinner, no long hold.
export function RouteTransition() {
  const location = useLocation();
  const outlet = useOutlet();
  const reducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(outlet);
  const [phase, setPhase] = useState<'enter' | 'idle'>('idle');
  const key = useRef(location.pathname);

  useEffect(() => {
    if (key.current === location.pathname) return;
    key.current = location.pathname;

    if (reducedMotion) {
      setDisplayed(outlet);
      return;
    }

    setPhase('enter');
    setDisplayed(outlet);
    const frame = requestAnimationFrame(() => setPhase('idle'));
    return () => cancelAnimationFrame(frame);
  }, [location.pathname, outlet, reducedMotion]);

  useEffect(() => {
    if (key.current === location.pathname) setDisplayed(outlet);
  }, [outlet, location.pathname]);

  return (
    <div className={`route-transition ${phase === 'enter' ? 'route-transition--enter' : ''}`}>
      {displayed}
    </div>
  );
}
