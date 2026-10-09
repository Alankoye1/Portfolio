import { useEffect } from 'react';

/**
 * Writes the page scroll position into two CSS variables on <html>:
 *   --scroll     0 to 1 (how far down the page we are)
 *   --scroll-px  pixels scrolled
 *
 * Any CSS can then use them, e.g. `rotate: calc(var(--scroll-px) * 0.2deg)`.
 * That keeps scroll-linked effects in CSS and out of React state, so the page
 * does not re-render on every scroll tick (good for performance).
 *
 * requestAnimationFrame groups updates so we write at most once per frame.
 */
export function useScrollProgress(): void {
      useEffect(() => {
            const root = document.documentElement;
            let frame = 0;

            const update = (): void => {
                  frame = 0;
                  const max = root.scrollHeight - window.innerHeight;
                  const y = window.scrollY;
                  root.style.setProperty('--scroll', max > 0 ? (y / max).toFixed(4) : '0');
                  root.style.setProperty('--scroll-px', y.toFixed(0));
            };

            const onScroll = (): void => {
                  if (!frame) frame = window.requestAnimationFrame(update);
            };

            update();
            window.addEventListener('scroll', onScroll, { passive: true });
            window.addEventListener('resize', onScroll);
            return () => {
                  window.removeEventListener('scroll', onScroll);
                  window.removeEventListener('resize', onScroll);
                  if (frame) window.cancelAnimationFrame(frame);
            };
      }, []);
}
