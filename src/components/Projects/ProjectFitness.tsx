import React from 'react';
import type { Project } from '../../data/site';
import { useTilt } from '../../hooks/useTilt';
import tilt from '../../styles/tilt.module.css';
import Reveal from '../ui/Reveal';
import ProjectLinks from './ProjectLinks';
import styles from './ProjectFitness.module.css';

/**
 * Project 01 layout: text on the left, a CSS-built phone on the right that
 * overlaps the giant outlined number and tilts toward your mouse.
 * The phone screen is an illustration drawn in code (swap in a real
 * screenshot whenever you have one).
 */
const ProjectFitness: React.FC<{ project: Project }> = ({ project }) => {
      // Shared tilt hook: writes --rx/--ry/--mx/--my on the stage; the phone inherits them.
      const { ref: stageRef, bind } = useTilt<HTMLDivElement>(14);

      return (
            <article className={styles.project} aria-labelledby={`${project.id}-title`}>
                  <span className={styles.bigNumber} aria-hidden="true">
                        {project.number}
                  </span>

                  <div className={styles.text}>
                        <Reveal>
                              <p className={styles.kicker}>
                                    {project.kind} <span aria-hidden="true">/</span> {project.year}
                              </p>
                        </Reveal>
                        <Reveal delay={80}>
                              <h3 id={`${project.id}-title`} className={styles.title}>
                                    {project.title}
                              </h3>
                        </Reveal>
                        <Reveal delay={160}>
                              <p className={styles.pitch}>{project.pitch}</p>
                              <p className={styles.description}>{project.description}</p>
                        </Reveal>
                        <Reveal delay={220}>
                              <ul className={styles.features}>
                                    {project.features.map((f) => (
                                          <li key={f}>{f}</li>
                                    ))}
                              </ul>
                        </Reveal>
                        <Reveal delay={280}>
                              <ul className={styles.tech} aria-label="Built with">
                                    {project.tech.map((t) => (
                                          <li key={t}>{t}</li>
                                    ))}
                              </ul>
                              <ProjectLinks project={project} />
                        </Reveal>
                  </div>

                  <Reveal from="right" delay={120} className={styles.stageWrap}>
                        <div className={styles.stage} ref={stageRef} {...bind}>
                              <div
                                    className={`${styles.phone} ${tilt.sheen}`}
                                    role="img"
                                    aria-label="Illustration of the Fitness Planner app: a BMI gauge, calorie progress and workout count."
                              >
                                    <div className={styles.screen} aria-hidden="true">
                                          <div className={styles.notch} />
                                          <p className={styles.screenTop}>Today</p>

                                          <div className={styles.gauge}>
                                                <svg viewBox="0 0 120 120">
                                                      <circle cx="60" cy="60" r="50" className={styles.gaugeTrack} />
                                                      <circle cx="60" cy="60" r="50" className={styles.gaugeFill} />
                                                </svg>
                                                <div className={styles.gaugeText}>
                                                      <strong>22.4</strong>
                                                      <span>BMI · healthy</span>
                                                </div>
                                          </div>

                                          <div className={styles.bars}>
                                                <div>
                                                      <span>Calories</span>
                                                      <i style={{ '--w': '84%' } as React.CSSProperties} />
                                                </div>
                                                <div>
                                                      <span>Protein</span>
                                                      <i style={{ '--w': '62%' } as React.CSSProperties} />
                                                </div>
                                                <div>
                                                      <span>Workouts</span>
                                                      <i style={{ '--w': '60%' } as React.CSSProperties} />
                                                </div>
                                          </div>

                                          <p className={styles.cta}>Start workout</p>
                                    </div>
                              </div>
                        </div>
                  </Reveal>
            </article>
      );
};

export default ProjectFitness;
