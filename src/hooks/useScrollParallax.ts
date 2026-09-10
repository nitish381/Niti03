import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Sets a `--scroll-p` CSS custom property (0 → 1, scaled to roughly the
 * first viewport height) on the returned element ref. Layers inside that
 * element read it at their own rate via `calc(var(--scroll-p) * <px>)`, so
 * one rAF-throttled scroll listener drives every parallax layer instead of
 * one listener per element. `transform` only, per the layout hard rule —
 * never top/left/width/height. No-ops under prefers-reduced-motion, leaving
 * every layer at its default (0) position.
 */
export function useScrollParallax<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    let ticking = false;

    const render = () => {
      const progress = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
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
    return () => window.removeEventListener('scroll', onScroll);
  }, [reducedMotion]);

  return ref;
}
