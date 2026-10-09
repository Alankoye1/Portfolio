import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * REACT LESSON: a custom hook is just a function whose name starts with "use"
 * and that calls other hooks. It lets many components share the same logic.
 *
 * This one answers: "did the visitor ask their device for less motion?"
 * We read it once with useState, then listen for changes with useEffect.
 */
export function useReducedMotion(): boolean {
      const [reduced, setReduced] = useState<boolean>(
            () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches
      );

      useEffect(() => {
            const media = window.matchMedia(QUERY);
            const onChange = (): void => setReduced(media.matches);
            media.addEventListener('change', onChange);
            // The returned function is "cleanup": React runs it when the component goes away.
            return () => media.removeEventListener('change', onChange);
      }, []);

      return reduced;
}
