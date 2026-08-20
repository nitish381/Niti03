import { useLayoutEffect, useRef, type RefObject } from 'react';
import { gsap, ScrollTrigger } from './gsap';

type SceneFn = (root: HTMLElement, ctx: gsap.Context) => void;

/**
 * Builds a scroll scene scoped to one section.
 *
 * Every scene is created inside a `gsap.context` bound to the section element,
 * so selector strings inside it only ever match that section and a single
 * `revert()` tears the whole thing down — including its ScrollTriggers — on
 * unmount or under StrictMode's double-invoke.
 *
 * Two rules the scenes rely on:
 *
 * 1. Scenes are built with `gsap.from()`, never `gsap.to()` from a hidden CSS
 *    state. Content is visible in the stylesheet, and GSAP animates *out of* a
 *    hidden state. If JavaScript never runs, or motion is reduced, the page is
 *    simply the finished design — nothing is ever stranded at opacity 0.
 * 2. Nothing animates a property that triggers layout. Transforms and opacity
 *    only, so there are no layout shifts mid-scroll.
 */
export function useScrollScene<T extends HTMLElement>(
  scene: SceneFn,
  deps: unknown[] = [],
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context((self) => scene(root, self), root);

    // Late-loading artwork changes section heights; recompute once it settles.
    const images = Array.from(root.querySelectorAll('img'));
    const pending = images.filter((img) => !img.complete);
    let settled = pending.length;

    const onSettle = () => {
      settled -= 1;
      if (settled <= 0) ScrollTrigger.refresh();
    };

    pending.forEach((img) => {
      img.addEventListener('load', onSettle, { once: true });
      img.addEventListener('error', onSettle, { once: true });
    });

    return () => {
      pending.forEach((img) => {
        img.removeEventListener('load', onSettle);
        img.removeEventListener('error', onSettle);
      });
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
