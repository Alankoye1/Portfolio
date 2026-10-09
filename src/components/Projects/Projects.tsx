import React from 'react';
import { projects } from '../../data/site';
import Reveal from '../ui/Reveal';
import SectionLabel from '../ui/SectionLabel';
import ProjectFitness from './ProjectFitness';
import ProjectSoccer from './ProjectSoccer';
import styles from './Projects.module.css';

/**
 * REACT LESSON: instead of one generic <Card> repeated with .map(), each
 * project here gets its own component and layout. They still read from the
 * same `projects` array in data/site.ts, so you edit content in one place.
 */
const Projects: React.FC = () => {
      const [fitness, soccer] = projects;

      return (
            <section id="projects" className={styles.projects} aria-labelledby="projects-title">
                  <div className={styles.head}>
                        <Reveal>
                              <SectionLabel number="03" title="Selected work" />
                        </Reveal>
                        <Reveal delay={100}>
                              <h2 id="projects-title" className={styles.title}>
                                    Two apps, <br />
                                    <span className={styles.accent}>shipped.</span>
                              </h2>
                        </Reveal>
                  </div>

                  <ProjectFitness project={fitness} />
                  <ProjectSoccer project={soccer} />
            </section>
      );
};

export default Projects;
