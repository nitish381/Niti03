import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * A small dot that rides alongside the real pointer and grows over links
 * and buttons — restrained on purpose: it never hides the OS cursor (so a
 * mount failure or lag never leaves the visitor without a pointer at all),
 * only mounts on fine-pointer (mouse/trackpad) devices, and stays off
 * entirely under prefers-reduced-motion.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const enabled = !reducedMotion && window.matchMedia('(pointer: fine)').matches;

  useEffect(() => {
    if (!enabled) return;
    const node = dotRef.current;
    if (!node) return;

    let frame = 0;

    const move = (event: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        node.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        frame = 0;
      });
    };

    const setActive = (active: boolean) => (event: MouseEvent) => {
      if ((event.target as Element | null)?.closest('a, button')) {
        node.classList.toggle('cursor--active', active);
      }
    };
    const onOver = setActive(true);
    const onOut = setActive(false);

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return <div ref={dotRef} className="cursor" aria-hidden="true" />;
}
