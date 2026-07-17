import { useEffect, useRef, useState } from 'react';

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// If the observer has not fired by now, show the content anyway. A reveal that
// never runs must never be able to leave a section permanently blank — which is
// what happens in headless renders, prerenderers, and background tabs, where
// IntersectionObserver callbacks and transitions are throttled or skipped.
const FAILSAFE_MS = 1500;

/**
 * Scroll reveal that enhances an already-visible default.
 *
 * The element renders with no reveal state, so a no-JS or reduced-motion render
 * shows content outright. Only once JS has run and motion is allowed do we opt
 * into 'pending', and even then the failsafe guarantees it becomes visible.
 */
export function useReveal({ delay = 0 } = {}) {
  const ref = useRef(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced() || !('IntersectionObserver' in window)) {
      setState(null);
      return;
    }

    // Already on screen at mount (above the fold): skip straight to visible so
    // the first paint isn't a flash of hidden content.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      setState(null);
      return;
    }

    setState('pending');

    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setState('shown');
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    io.observe(el);

    const failsafe = setTimeout(show, FAILSAFE_MS);
    // Printing must never produce blank sections.
    const onPrint = () => show();
    window.addEventListener('beforeprint', onPrint);

    return () => {
      clearTimeout(failsafe);
      window.removeEventListener('beforeprint', onPrint);
      io.disconnect();
    };
  }, []);

  return {
    ref,
    props: {
      'data-reveal': state ?? undefined,
      style: delay ? { '--reveal-delay': `${delay}ms` } : undefined,
    },
  };
}
