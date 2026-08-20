import { gsap, EASE_ENTER, EASE_SCRUB, DUR_ENTER, STAGGER } from './gsap';

type Targets = gsap.TweenTarget;

interface RevealOptions {
  /** Distance travelled, in px. Keep small — this is a settle, not a slide. */
  y?: number;
  x?: number;
  stagger?: number;
  duration?: number;
  delay?: number;
  /** Fraction of the viewport the element must reach. */
  start?: string;
  scale?: number;
}

/**
 * The page's default entrance.
 *
 * Written as `from`, so the finished state is whatever the stylesheet says and
 * GSAP only ever animates *into* it. Content is never left hidden.
 */
export function reveal(root: Element, targets: Targets, opts: RevealOptions = {}) {
  const {
    y = 28,
    x = 0,
    stagger = STAGGER,
    duration = DUR_ENTER,
    delay = 0,
    start = 'top 82%',
    scale,
  } = opts;

  return gsap.from(targets, {
    y,
    x,
    autoAlpha: 0,
    ...(scale !== undefined ? { scale } : {}),
    duration,
    delay,
    ease: EASE_ENTER,
    stagger,
    scrollTrigger: { trigger: root, start, once: true },
  });
}

/**
 * Scroll-linked vertical drift. `distance` is the total travel in px across the
 * element's whole pass through the viewport; positive moves down (slower than
 * the page), negative moves up (faster).
 */
export function parallax(target: Targets, distance: number, trigger: Element) {
  return gsap.fromTo(
    target,
    { y: -distance / 2 },
    {
      y: distance / 2,
      ease: EASE_SCRUB,
      scrollTrigger: {
        trigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.8,
      },
    },
  );
}

/**
 * Progressive reveal driven by scroll position rather than a timer: the artwork
 * is wiped in from the top as the section travels through the viewport, so the
 * lower part of an image is uncovered exactly as far as the reader has scrolled.
 *
 * Used for the iceberg and the river, where the subject *is* depth — the reader
 * descends the image as they descend the page.
 */
export function scrollWipe(
  target: Targets,
  trigger: Element,
  opts: { start?: string; end?: string; from?: number } = {},
) {
  const { start = 'top 78%', end = 'bottom 62%', from = 62 } = opts;

  return gsap.fromTo(
    target,
    { clipPath: `inset(0% 0% ${from}% 0%)` },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      ease: EASE_SCRUB,
      scrollTrigger: { trigger, start, end, scrub: 0.7 },
    },
  );
}

/**
 * Reveals a set of elements one after another as the section passes, each tied
 * to scroll position rather than firing all at once on entry.
 */
export function sequence(
  targets: Targets,
  trigger: Element,
  opts: { start?: string; end?: string; y?: number } = {},
) {
  const { start = 'top 76%', end = 'bottom 70%', y = 22 } = opts;

  return gsap.from(targets, {
    y,
    autoAlpha: 0,
    ease: EASE_SCRUB,
    stagger: 0.5,
    scrollTrigger: { trigger, start, end, scrub: 0.8 },
  });
}
