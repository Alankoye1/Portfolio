import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Counts from 0 up to `target` once `active` turns true.
 * Visitors who prefer reduced motion get the final number straight away.
 */
export function useCountUp(target: number, active: boolean, duration = 1200): number {
      const reduced = useReducedMotion();
      const [value, setValue] = useState<number>(0);

      useEffect(() => {
            if (!active) return;
            if (reduced) {
                  setValue(target);
                  return;
            }

            let frame = 0;
            const start = performance.now();

            const tick = (now: number): void => {
                  const t = Math.min((now - start) / duration, 1);
                  const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
                  setValue(Math.round(target * eased));
                  if (t < 1) frame = requestAnimationFrame(tick);
            };

            frame = requestAnimationFrame(tick);
            return () => cancelAnimationFrame(frame);
      }, [active, target, duration, reduced]);

      return value;
}
