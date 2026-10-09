import React from 'react';
import type { Project } from '../../data/site';
import { useInView } from '../../hooks/useInView';
import { useTilt } from '../../hooks/useTilt';
import tilt from '../../styles/tilt.module.css';
import Reveal from '../ui/Reveal';
import ProjectLinks from './ProjectLinks';
import styles from './ProjectSoccer.module.css';

/**
 * Project 02 layout: a full-width lime "pitch" panel. The pitch lines draw
 * themselves when the panel scrolls into view, and the scoreboard rows slide
 * on hover. Same data shape as project 01, completely different layout.
 */
const ProjectSoccer: React.FC<{ project: Project }> = ({ project }) => {
      const { ref, inView } = useInView<HTMLElement>({ threshold: 0.3 });
      const { ref: boardRef, bind } = useTilt<HTMLDivElement>(9);

      return (
            <article
                  ref={ref}
                  className={`${styles.panel} ${inView ? styles.drawn : ''}`}
                  aria-labelledby={`${project.id}-title`}
            >
                  {/* Decorative pitch markings */}
                  <svg className={styles.pitch} viewBox="0 0 400 600" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
                        <g>
                              <rect x="20" y="20" width="360" height="560" pathLength="1" />
                              <line x1="20" y1="300" x2="380" y2="300" pathLength="1" />
                              <circle cx="200" cy="300" r="62" pathLength="1" />
                              <rect x="105" y="20" width="190" height="90" pathLength="1" />
                              <rect x="105" y="490" width="190" height="90" pathLength="1" />
                              <rect x="150" y="20" width="100" height="36" pathLength="1" />
                              <rect x="150" y="544" width="100" height="36" pathLength="1" />
                        </g>
                  </svg>

                  <div className={styles.inner}>
                        <div className={styles.top}>
                              <p className={styles.kicker}>
                                    {project.kind} <span aria-hidden="true">/</span> {project.year}
                              </p>
                              <span className={styles.bigNumber} aria-hidden="true">
                                    {project.number}
                              </span>
                        </div>

                        <Reveal>
                              <h3 id={`${project.id}-title`} className={styles.title}>
                                    {project.title}
                              </h3>
                        </Reveal>

                        <div className={styles.row}>
                              <Reveal delay={100} from="left" className={styles.boardWrap}>
                                    <div className={`${styles.board} ${tilt.sheen}`} ref={boardRef} {...bind}>
                                          <p className={styles.boardHead}>
                                                <span className={styles.live} aria-hidden="true" />
                                                Matchday modules
                                          </p>
                                          <ul>
                                                {project.features.map((feature, i) => (
                                                      <li key={feature} className={styles.boardRow}>
                                                            <span className={styles.boardNum}>0{i + 1}</span>
                                                            <span>{feature}</span>
                                                      </li>
                                                ))}
                                          </ul>
                                    </div>
                              </Reveal>

                              <Reveal delay={200} className={styles.info}>
                                    <p className={styles.pitchLine}>{project.pitch}</p>
                                    <p className={styles.description}>{project.description}</p>
                                    <ul className={styles.tech} aria-label="Built with">
                                          {project.tech.map((t) => (
                                                <li key={t}>{t}</li>
                                          ))}
                                    </ul>
                                    <ProjectLinks project={project} />
                              </Reveal>
                        </div>
                  </div>
            </article>
      );
};

export default ProjectSoccer;
