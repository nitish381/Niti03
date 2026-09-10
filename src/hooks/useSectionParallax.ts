import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Same `--scroll-p` CSS-variable contract as `useScrollParallax`, but for a
 * section that can sit anywhere on the page rather than only the first
 * viewport: progress (0 → 1) tracks the element's own position as it
 * travels through the viewport (0 as it enters from the bottom, 1 as it
 * exits at the top), via getBoundingClientRect on each scroll tick.
 *
 * useScrollParallax stays a separate, unchanged hook — the hero's tuned,
 * already-verified resting state depends on its absolute-scroll formula,
 * and folding both cases into one hook would have changed that behavior.
 */
export function useSectionParallax<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    let ticking = false;

    const render = () => {
      const rect = node.getBoundingClientRect();
      const span = window.innerHeight + rect.height;
      const progress = Math.min(Math.max((window.innerHeight - rect.top) / span, 0), 1);
      node.style.setProperty('--scroll-p', String(progress));
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(render);
    };

    render();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [reducedMotion]);

  return ref;
}
