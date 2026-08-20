import { useEffect, useRef } from 'react';
import { registerParallax } from '@/lib/scrollEngine';
import { useReducedMotion } from './useReducedMotion';

interface ParallaxOptions {
  max?: number;
  axis?: 'y' | 'x';
  /** Disable below this viewport width — parallax is a desktop affordance. */
  minWidth?: number;
}

/**
 * Attaches an element to the shared scroll engine.
 * Returns a ref; no effect is registered when the user prefers reduced motion.
 */
export function useParallax<T extends HTMLElement>(
  rate: number,
  { max, axis = 'y', minWidth = 768 }: ParallaxOptions = {},
) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    if (minWidth && window.innerWidth < minWidth) return;

    return registerParallax(el, rate, {
      axis,
      ...(max !== undefined ? { max } : {}),
    });
  }, [rate, max, axis, minWidth, reduced]);

  return ref;
}
