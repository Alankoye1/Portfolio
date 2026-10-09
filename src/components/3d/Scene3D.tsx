import React, { Suspense, lazy, useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import CssOrb from './CssOrb';
import { use3DSupport } from './use3DSupport';
import styles from './Scene3D.module.css';

/**
 * REACT LESSON: React.lazy + Suspense = "code splitting".
 * `lazy(() => import(...))` tells the bundler to put HeroScene (and the whole
 * three.js library it needs) in a SEPARATE file that is only downloaded when
 * this component first tries to render it. The visitor sees the page first,
 * the 3D arrives a moment later.
 */
const HeroScene = lazy(() => import('./HeroScene'));

/** Run `fn` when the browser is idle (or after a short delay where unsupported). */
function whenIdle(fn: () => void): () => void {
      if (typeof window.requestIdleCallback === 'function') {
            const id = window.requestIdleCallback(fn, { timeout: 2500 });
            return () => window.cancelIdleCallback(id);
      }
      const id = window.setTimeout(fn, 900);
      return () => window.clearTimeout(id);
}

/**
 * The hero orb. Always shows the CSS orb first; upgrades to real 3D only on
 * capable devices, and only after the page has painted and gone idle.
 */
const Scene3D: React.FC = () => {
      const supported = use3DSupport();
      const reduced = useReducedMotion();
      const [load, setLoad] = useState<boolean>(false);
      const [live, setLive] = useState<boolean>(false);
      // After the 3D orb has faded in, remove the CSS orb from the page entirely.
      const [cssGone, setCssGone] = useState<boolean>(false);

      useEffect(() => {
            if (!supported) return;
            return whenIdle(() => setLoad(true));
      }, [supported]);

      // A timer (not a CSS transition) does the removal, so it can never get stuck
      // half-way and leave two orbs on screen.
      useEffect(() => {
            if (!live) return;
            const id = window.setTimeout(() => setCssGone(true), 1400);
            return () => window.clearTimeout(id);
      }, [live]);

      return (
            <div className={styles.scene} aria-hidden="true">
                  {!cssGone && <CssOrb hidden={live} />}
                  {load && (
                        <Suspense fallback={null}>
                              <div className={`${styles.canvasFade} ${live ? styles.canvasLive : ''}`}>
                                    <HeroScene still={reduced} onReady={() => setLive(true)} />
                              </div>
                        </Suspense>
                  )}
            </div>
      );
};

export default Scene3D;
