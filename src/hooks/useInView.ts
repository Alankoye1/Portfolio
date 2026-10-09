import { useEffect, useRef, useState } from 'react';

interface Options {
      /** How much of the element must be visible, 0 to 1. */
      threshold?: number;
      /** Grow or shrink the viewport box, e.g. "0px 0px -10% 0px". */
      rootMargin?: string;
      /** Stay true after the first time it appears (default). */
      once?: boolean;
}

/**
 * REACT LESSON: useRef gives you a handle to a real DOM element.
 * We attach `ref` to an element, then an IntersectionObserver (a browser tool)
 * tells us when that element scrolls into view. useState stores the answer,
 * and changing state makes React re-render, which is how reveals trigger.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
      threshold = 0.15,
      rootMargin = '0px 0px -8% 0px',
      once = true,
}: Options = {}) {
      const ref = useRef<T | null>(null);
      const [inView, setInView] = useState<boolean>(false);

      useEffect(() => {
            const node = ref.current;
            if (!node) return;

            if (typeof IntersectionObserver === 'undefined') {
                  setInView(true);
                  return;
            }

            const observer = new IntersectionObserver(
                  ([entry]) => {
                        if (entry.isIntersecting) {
                              setInView(true);
                              if (once) observer.disconnect();
                        } else if (!once) {
                              setInView(false);
                        }
                  },
                  { threshold, rootMargin }
            );

            observer.observe(node);
            return () => observer.disconnect();
      }, [threshold, rootMargin, once]);

      return { ref, inView };
}
