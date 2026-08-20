import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './gsap';

/**
 * Smooth scrolling, wired into ScrollTrigger.
 *
 * Lenis drives the page position and GSAP's ticker drives Lenis, so there is
 * exactly one rAF loop on the page and scroll-linked animations stay in lockstep
 * with the scroll position instead of lagging a frame behind it.
 *
 * Deliberately switched off in two cases:
 *
 * - `prefers-reduced-motion` — hijacking the scroll is precisely what that
 *   preference is asking us not to do.
 * - Touch devices — the OS already provides momentum that users know, and
 *   synthetic smoothing on top of it feels heavy and interferes with browser
 *   chrome hiding. Lenis handles wheel and keyboard only.
 *
 * In both cases the page falls back to native scrolling and every ScrollTrigger
 * keeps working, because ScrollTrigger reads real scroll position either way.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;

    if (reduced || coarse) {
      // Native smooth scrolling is fine here; anchors use it directly.
      document.documentElement.classList.add('no-lenis');
      return;
    }

    /**
     * Absolute page position that puts `el` just below the header. Measured
     * from the header's rendered height rather than the design token, so it
     * stays correct in the compact scrolled state too.
     */
    const targetTop = (el: Element) => {
      const header = document.querySelector('.site-header');
      const headerH = header ? header.getBoundingClientRect().height : 96;
      return el.getBoundingClientRect().top + window.scrollY - headerH - 8;
    };

    const lenis = new Lenis({
      duration: 1.05,
      // Long, flat-tailed curve: quick to respond, unhurried to settle.
      easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
      wheelMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Anchor links have to go through Lenis, or the browser jumps while Lenis
    // believes it is somewhere else.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      // Resolve the destination ourselves and hand Lenis a number. Passing it
      // an element plus an offset applies the offset twice, landing the section
      // roughly two header-heights down the page.
      lenis.scrollTo(targetTop(target), { duration: 1.2 });
    };

    // Keyboard focus must be able to pull the page. While Lenis owns the scroll
    // position, the browser's own "scroll the focused element into view" can be
    // overridden by the next Lenis frame, which would strand a tabbing user
    // looking at content they cannot see. Bringing focus targets in through
    // Lenis itself keeps the two in agreement.
    // Anything inside a fixed container — the header, the drawer — is already
    // on screen at every scroll position. Trying to "bring it into view" would
    // scroll the page out from under whatever the user actually clicked.
    const insideFixed = (node: HTMLElement) => {
      let current: HTMLElement | null = node;
      while (current && current !== document.body) {
        if (getComputedStyle(current).position === 'fixed') return true;
        current = current.parentElement;
      }
      return false;
    };

    const onFocusIn = (event: FocusEvent) => {
      const el = event.target as HTMLElement | null;
      if (!el || typeof el.getBoundingClientRect !== 'function') return;
      if (insideFixed(el)) return;

      const rect = el.getBoundingClientRect();
      const header = document.querySelector('.site-header');
      const headerH = header ? header.getBoundingClientRect().height : 96;

      const above = rect.top < headerH;
      const below = rect.bottom > window.innerHeight;
      if (!above && !below) return;

      lenis.scrollTo(targetTop(el) - 24, { duration: 0.6 });
    };

    document.addEventListener('click', onClick);
    document.addEventListener('focusin', onFocusIn);

    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('focusin', onFocusIn);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
}
