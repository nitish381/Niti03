import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * House easing. Everything on the page uses one of these two so the motion
 * reads as a single system rather than a pile of separate effects.
 *
 * `power3.out` for entrances — fast to settle, no overshoot, no bounce.
 * `none` for anything scrubbed, so the movement is locked to the user's scroll
 * rather than easing independently of it.
 */
export const EASE_ENTER = 'power3.out';
export const EASE_SCRUB = 'none';

/** Entrance duration, in seconds. */
export const DUR_ENTER = 0.9;

/** Stagger between siblings in a group. */
export const STAGGER = 0.09;

export { gsap, ScrollTrigger };
