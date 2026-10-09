import React, { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei/core/MeshDistortMaterial';
import * as THREE from 'three';
import SceneCanvas from './SceneCanvas';

/** Same lime as --lime in tokens.css, so the 3D and the UI share one accent. */
const LIME = '#c6ff3d';

interface OrbProps {
      still: boolean;
}

/**
 * REACT THREE FIBER LESSONS
 *
 * - A <mesh> is a 3D object = a GEOMETRY (the shape) + a MATERIAL (the surface).
 * - <group> is an empty box that moves/rotates everything inside it together.
 * - Props like position, rotation and scale work like normal React props, but
 *   they take 3D numbers ([x, y, z]).
 * - useFrame(fn) runs `fn` on every animation frame (about 60 times a second).
 *   It is where all motion lives. We change values through refs (not useState)
 *   so React never re-renders: that is what keeps animation smooth.
 */
const Orb: React.FC<OrbProps> = ({ still }) => {
      const group = useRef<THREE.Group>(null);
      const sphere = useRef<THREE.Mesh>(null);
      const ring = useRef<THREE.Mesh>(null);

      // Mouse position from -1 to 1 across the whole window, kept in a ref.
      const pointer = useRef({ x: 0, y: 0 });
      useEffect(() => {
            const onMove = (e: PointerEvent): void => {
                  pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
                  pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
            };
            window.addEventListener('pointermove', onMove, { passive: true });
            return () => window.removeEventListener('pointermove', onMove);
      }, []);

      // viewport = how big the visible 3D area is, in 3D units. Used to place the orb
      // to the right of the name and scale it with the window.
      const viewport = useThree((state) => state.viewport);
      const scale = Math.min(viewport.height * 0.19, viewport.width * 0.15);
      const x = viewport.width * 0.27;
      const y = -viewport.height * 0.1;

      useFrame((state, delta) => {
            if (still || !group.current || !sphere.current || !ring.current) return;
            const t = state.clock.elapsedTime;

            // Parallax tilt: ease (damp) the whole group toward the mouse.
            group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.current.y * 0.35, 3, delta);
            group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.current.x * 0.5, 3, delta);
            // Gentle float up and down.
            group.current.position.y = y + Math.sin(t * 0.7) * 0.05;

            // Slow self-rotation of the sphere, and a slowly turning ring.
            sphere.current.rotation.y += delta * 0.15;
            ring.current.rotation.z += delta * 0.08;
      });

      return (
            <group ref={group} position={[x, y, 0]} scale={scale}>
                  <mesh ref={sphere}>
                        <sphereGeometry args={[1, 48, 48]} />
                        {/* Drei's MeshDistortMaterial is a glossy material whose surface gently wobbles. */}
                        <MeshDistortMaterial
                              color={LIME}
                              distort={still ? 0 : 0.16}
                              speed={still ? 0 : 0.9}
                              roughness={0.18}
                              metalness={0.05}
                              clearcoat={1}
                              clearcoatRoughness={0.08}
                        />
                  </mesh>
                  <mesh ref={ring} rotation={[1.15, 0.2, 0]}>
                        <torusGeometry args={[1.4, 0.014, 8, 96]} />
                        <meshBasicMaterial color={LIME} transparent opacity={0.55} />
                  </mesh>
            </group>
      );
};

interface HeroSceneProps {
      still: boolean;
      onReady: () => void;
}

/** The whole hero scene: one ambient light, one directional light, one orb. */
const HeroScene: React.FC<HeroSceneProps> = ({ still, onReady }) => (
      <SceneCanvas still={still} onReady={onReady}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[3, 4, 5]} intensity={2.4} />
            <Orb still={still} />
      </SceneCanvas>
);

export default HeroScene;
