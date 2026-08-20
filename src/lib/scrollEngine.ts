/**
 * Shared scroll engine.
 *
 * One passive scroll listener and one rAF loop drive every parallax element on
 * the page. Elements register a rate; the engine writes a single `transform`
 * per frame and only for elements currently near the viewport. Nothing reads
 * layout during the loop — each element's offset is measured on register and on
 * resize, never per frame — so there is no read/write thrashing.
 */

export interface ParallaxTarget {
  el: HTMLElement;
  /** Fraction of scroll distance to move by. 0.15 = moves 15% as far. */
  rate: number;
  /** Optional clamp on the resulting translation, in px. */
  max?: number;
  axis: 'y' | 'x';
  /** Cached layout, refreshed on resize rather than per frame. */
  top: number;
  height: number;
}

const targets = new Set<ParallaxTarget>();

let frame = 0;
let running = false;
let viewportHeight = 0;

function measure(target: ParallaxTarget) {
  const rect = target.el.getBoundingClientRect();
  target.top = rect.top + window.scrollY;
  target.height = rect.height;
}

function remeasureAll() {
  viewportHeight = window.innerHeight;
  targets.forEach(measure);
}

function tick() {
  frame = 0;
  const scrollY = window.scrollY;

  for (const target of targets) {
    // Skip anything comfortably outside the viewport.
    const distanceIntoView = scrollY + viewportHeight - target.top;
    if (distanceIntoView < -viewportHeight || scrollY > target.top + target.height + viewportHeight) {
      continue;
    }

    // Progress measured from the element's own centre so the effect is
    // symmetric around it and never jumps when it enters view.
    const centre = target.top + target.height / 2;
    const offset = (scrollY + viewportHeight / 2 - centre) * target.rate;
    const clamped =
      target.max === undefined ? offset : Math.max(-target.max, Math.min(target.max, offset));

    target.el.style.transform =
      target.axis === 'y'
        ? `translate3d(0, ${clamped.toFixed(2)}px, 0)`
        : `translate3d(${clamped.toFixed(2)}px, 0, 0)`;
  }
}

function requestTick() {
  if (frame === 0) frame = requestAnimationFrame(tick);
}

function start() {
  if (running) return;
  running = true;
  remeasureAll();
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  requestTick();
}

function stop() {
  if (!running) return;
  running = false;
  window.removeEventListener('scroll', requestTick);
  window.removeEventListener('resize', onResize);
  if (frame) cancelAnimationFrame(frame);
  frame = 0;
}

let resizeFrame = 0;
function onResize() {
  if (resizeFrame) cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(() => {
    resizeFrame = 0;
    remeasureAll();
    requestTick();
  });
}

export function registerParallax(
  el: HTMLElement,
  rate: number,
  options: { max?: number; axis?: 'y' | 'x' } = {},
): () => void {
  const target: ParallaxTarget = {
    el,
    rate,
    axis: options.axis ?? 'y',
    top: 0,
    height: 0,
    ...(options.max !== undefined ? { max: options.max } : {}),
  };

  measure(target);
  if (!viewportHeight) viewportHeight = window.innerHeight;
  targets.add(target);
  start();
  requestTick();

  return () => {
    targets.delete(target);
    el.style.transform = '';
    if (targets.size === 0) stop();
  };
}
