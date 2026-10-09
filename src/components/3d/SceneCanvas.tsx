import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import styles from './Scene3D.module.css';

interface SceneCanvasProps {
      children: React.ReactNode;
      /** Reduced motion: draw a single still frame instead of animating. */
      still?: boolean;
      /** Called once the WebGL context exists. */
      onReady?: () => void;
}

/**
 * REACT THREE FIBER LESSON: <Canvas> is the window into the 3D world.
 * Everything you put INSIDE it (<mesh>, <ambientLight> ...) is a 3D object, not
 * an HTML element. It creates the WebGL renderer, a camera and an animation
 * loop for you.
 *
 * Performance settings used here:
 *  - dpr={[1, 1.5]}  pixel ratio never goes above 1.5 (sharp but cheap)
 *  - antialias off   the orb is soft, so edge smoothing is not worth the GPU cost
 *  - frameloop       "always" while on screen, "never" while scrolled away
 */
const SceneCanvas: React.FC<SceneCanvasProps> = ({ children, still = false, onReady }) => {
      const wrapRef = useRef<HTMLDivElement | null>(null);
      const [visible, setVisible] = useState<boolean>(true);

      // Pause drawing when the hero scrolls off screen.
      useEffect(() => {
            const node = wrapRef.current;
            if (!node || typeof IntersectionObserver === 'undefined') return;
            const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
                  threshold: 0,
            });
            observer.observe(node);
            return () => observer.disconnect();
      }, []);

      return (
            <div ref={wrapRef} className={styles.canvasWrap}>
                  <Canvas
                        dpr={[1, 1.5]}
                        camera={{ position: [0, 0, 5], fov: 35 }}
                        gl={{ antialias: false, alpha: true, powerPreference: 'default' }}
                        frameloop={still ? 'demand' : visible ? 'always' : 'never'}
                        onCreated={() => onReady?.()}
                  >
                        {children}
                  </Canvas>
            </div>
      );
};

export default SceneCanvas;
