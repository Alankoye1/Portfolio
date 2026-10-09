import { useCallback, useRef } from 'react';
import type React from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * 3D tilt that follows the cursor, with a glass highlight (sheen) that slides
 * under it. No library: it only writes four CSS variables onto the element.
 *
 *   --rx / --ry   rotation angles in degrees   (used by `transform`)
 *   --mx / --my   cursor position in percent   (used by the sheen gradient)
 *   --glow        0 or 1, fades the sheen in and out
 *
 * The CSS decides what to do with them, e.g.
 *   transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry));
 *
 * REACT LESSON: this hook returns `bind`, a bundle of event handlers. In the
 * component you write <div ref={ref} {...bind}>: the `...` spreads each handler
 * onto the element, as if you had typed them out one by one.
 *
 * Only a real mouse triggers it (touch has no "hover"), and visitors who prefer
 * reduced motion get no tilt at all.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>(maxDegrees = 10) {
      const ref = useRef<T | null>(null);
      const reduced = useReducedMotion();

      const onPointerMove = useCallback(
            (e: React.PointerEvent<T>): void => {
                  const el = ref.current;
                  if (!el || reduced || e.pointerType !== 'mouse') return;

                  const rect = el.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width; // 0 at the left edge, 1 at the right
                  const y = (e.clientY - rect.top) / rect.height; // 0 at the top, 1 at the bottom

                  el.style.setProperty('--ry', `${((x - 0.5) * 2 * maxDegrees).toFixed(2)}deg`);
                  el.style.setProperty('--rx', `${(-(y - 0.5) * 2 * maxDegrees).toFixed(2)}deg`);
                  el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
                  el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
                  el.style.setProperty('--glow', '1');
            },
            [maxDegrees, reduced]
      );

      const onPointerLeave = useCallback((): void => {
            const el = ref.current;
            if (!el) return;
            el.style.setProperty('--rx', '0deg');
            el.style.setProperty('--ry', '0deg');
            el.style.setProperty('--glow', '0');
      }, []);

      return { ref, bind: { onPointerMove, onPointerLeave } };
}
