import React, { useRef } from 'react';
import { site, stickerText } from '../../data/site';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import Scene3D from '../3d/Scene3D';
import Arrow from '../ui/Arrow';
import LocalTime from '../ui/LocalTime';
import styles from './Hero.module.css';

const NAME_LINES = ['Alan', 'Azad', 'Akram'];

/**
 * Hero = the first screen. Three things happen here:
 *  1. On load, every letter of the name slides up out of a mask (pure CSS).
 *  2. A lime sticker with circling text spins and also turns as you scroll.
 *  3. On desktop, letters near your mouse get lighter, like a spotlight.
 */
const Hero: React.FC = () => {
      const reduced = useReducedMotion();

      // useRef holds a value that survives re-renders WITHOUT causing one.
      // Here it stores every letter element so the mouse handler can reach them.
      const letters = useRef<HTMLSpanElement[]>([]);
      const frame = useRef<number>(0);

      const handlePointerMove = (e: React.PointerEvent<HTMLElement>): void => {
            // Only react to a real mouse, and only if motion is allowed.
            if (reduced || e.pointerType !== 'mouse') return;
            const { clientX, clientY } = e;

            cancelAnimationFrame(frame.current);
            frame.current = requestAnimationFrame(() => {
                  letters.current.forEach((el) => {
                        if (!el) return;
                        const rect = el.getBoundingClientRect();
                        const dx = clientX - (rect.left + rect.width / 2);
                        const dy = clientY - (rect.top + rect.height / 2);
                        const distance = Math.hypot(dx, dy);
                        // Close to the cursor = lighter weight (400). Far away = heavy (800).
                        const weight = Math.round(Math.min(800, Math.max(400, 400 + distance * 1.2)));
                        el.style.fontVariationSettings = `"wght" ${weight}`;
                  });
            });
      };

      const resetLetters = (): void => {
            cancelAnimationFrame(frame.current);
            letters.current.forEach((el) => {
                  if (el) el.style.fontVariationSettings = '';
            });
      };

      let letterIndex = 0;

      return (
            <section
                  id="top"
                  className={styles.hero}
                  aria-labelledby="hero-title"
                  onPointerMove={handlePointerMove}
                  onPointerLeave={resetLetters}
            >
                  {/* 3D orb (or its CSS twin) sits behind everything else in the hero */}
                  <Scene3D />

                  <div className={styles.meta}>
                        <span>Portfolio / {new Date().getFullYear()}</span>
                        <span>
                              {site.location} · <LocalTime timeZone={site.timeZone} />
                        </span>
                        <span className={styles.metaHide}>36.19°N 44.01°E</span>
                  </div>

                  <h1 id="hero-title" className={styles.title} aria-label={site.name}>
                        {NAME_LINES.map((word, lineIndex) => (
                              <span key={word} className={`${styles.line} ${styles[`line${lineIndex}`]}`} aria-hidden="true">
                                    {word.split('').map((char) => {
                                          const i = letterIndex++;
                                          return (
                                                <span
                                                      key={i}
                                                      className={styles.letter}
                                                      style={{ '--i': i } as React.CSSProperties}
                                                      ref={(el) => {
                                                            if (el) letters.current[i] = el;
                                                      }}
                                                >
                                                      {char}
                                                </span>
                                          );
                                    })}
                              </span>
                        ))}
                  </h1>

                  <a href="#projects" className={styles.sticker}>
                        <span className="sr-only">See my work</span>
                        <svg className={styles.ring} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
                              <defs>
                                    <path id="ring-path" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
                              </defs>
                              <text className={styles.ringText}>
                                    <textPath href="#ring-path" textLength="486" lengthAdjust="spacing">
                                          {stickerText}
                                    </textPath>
                              </text>
                        </svg>
                        <span className={styles.stickerArrow}>
                              <Arrow dir="down" size={44} />
                        </span>
                  </a>

                  <div className={styles.bottom}>
                        <div className={styles.copy}>
                              <p className={styles.role}>
                                    {site.role} <span aria-hidden="true">—</span> {site.roleLine}
                              </p>
                              <p className={styles.tagline}>{site.tagline}</p>
                        </div>
                        <div className={styles.actions}>
                              <a href="#projects" className={styles.primary}>
                                    See the work <Arrow dir="down" size={18} />
                              </a>
                              <a href="#contact" className={styles.secondary}>
                                    Say hi
                              </a>
                        </div>
                  </div>
            </section>
      );
};

export default Hero;
