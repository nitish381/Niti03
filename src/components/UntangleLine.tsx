import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Signature move: a tangled line straightens as the visitor scrolls past the
// hero, echoing the headline ("I design complex products to feel simple").
// Point sets share point count so they can be linearly interpolated frame by
// frame, driven off scroll position rather than a fixed-duration animation.

const POINT_COUNT = 9;
const WIDTH = 320;
const HEIGHT = 64;

const TANGLED_Y = [32, 6, 58, 12, 52, 16, 48, 20, 32];
const STRAIGHT_Y = new Array(POINT_COUNT).fill(32);

function toPoints(ys: number[]): Array<[number, number]> {
  return ys.map((y, i) => [(i / (POINT_COUNT - 1)) * WIDTH, y]);
}

function smoothPath(pts: Array<[number, number]>): string {
  let d = `M ${pts[0]![0]} ${pts[0]![1]}`;
  for (let i = 0; i < pts.length - 1; i += 1) {
    const [x0, y0] = pts[i]!;
    const [x1, y1] = pts[i + 1]!;
    const mx = (x0 + x1) / 2;
    const my = (y0 + y1) / 2;
    d += ` Q ${x0} ${y0} ${mx} ${my}`;
  }
  const [lastX, lastY] = pts[pts.length - 1]!;
  d += ` L ${lastX} ${lastY}`;
  return d;
}

function lerpYs(from: number[], to: number[], t: number): number[] {
  return from.map((value, i) => value + ((to[i] ?? value) - value) * t);
}

function clamp01(value: number): number {
  return Math.min(Math.max(value, 0), 1);
}

export function UntangleLine() {
  const pathRef = useRef<SVGPathElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    if (reducedMotion) {
      path.setAttribute('d', smoothPath(toPoints(STRAIGHT_Y)));
      return;
    }

    let ticking = false;

    const render = () => {
      const progress = clamp01(window.scrollY / (window.innerHeight * 0.85));
      path.setAttribute('d', smoothPath(toPoints(lerpYs(TANGLED_Y, STRAIGHT_Y, progress))));
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

  return (
    <svg className="hero__line" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} fill="none" aria-hidden="true">
      <path ref={pathRef} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}
