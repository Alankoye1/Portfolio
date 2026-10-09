import { useEffect, useState } from 'react';

interface NavigatorExtras {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
}

/** Can this browser create a WebGL context? Tried on a throw-away canvas. */
function hasWebGL(): boolean {
      try {
            const canvas = document.createElement('canvas');
            return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
      } catch {
            return false;
      }
}

/**
 * Decides ONCE, after the page has mounted, whether this visitor gets the real
 * 3D scene or the lightweight CSS version.
 *
 * 3D is only for: a mouse + a wide screen + a reasonably strong device + WebGL
 * + no "data saver". Phones and tablets, weak laptops and low-power setups all
 * get the CSS fallback and never download the three.js code.
 */
export function use3DSupport(): boolean {
      const [supported, setSupported] = useState<boolean>(false);

      useEffect(() => {
            const nav = navigator as Navigator & NavigatorExtras;

            const finePointer = window.matchMedia('(pointer: fine)').matches;
            const wideScreen = window.matchMedia('(min-width: 900px)').matches;
            const enoughCores = (nav.hardwareConcurrency ?? 8) >= 4;
            const enoughMemory = (nav.deviceMemory ?? 8) >= 4;
            const saveData = nav.connection?.saveData === true;

            setSupported(finePointer && wideScreen && enoughCores && enoughMemory && !saveData && hasWebGL());
      }, []);

      return supported;
}
