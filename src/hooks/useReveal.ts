import { useEffect, useRef, useState } from 'react';

interface RevealOptions {
  /** Fraction of the element that must be visible. */
  threshold?: number;
  /** Reveal once and stop observing. */
  once?: boolean;
  rootMargin?: string;
}

/**
 * Scroll reveal via IntersectionObserver — no scroll listener, no layout reads.
 * Elements start revealed when the observer is unavailable so content is never
 * trapped invisible.
 */
export function useReveal<T extends HTMLElement>({
  threshold = 0.15,
  once = true,
  rootMargin = '0px 0px -10% 0px',
}: RevealOptions = {}) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return { ref, visible };
}
