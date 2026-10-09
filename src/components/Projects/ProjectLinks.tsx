import React from 'react';
import type { Project } from '../../data/site';
import Arrow from '../ui/Arrow';
import styles from './ProjectLinks.module.css';

interface ProjectLinksProps {
      project: Project;
      /** "dark" is for dark backgrounds, "light" for the lime panel. */
      tone?: 'dark' | 'light';
}

/** Code + optional Live buttons. The Live button only appears if liveUrl is set in site.ts. */
const ProjectLinks: React.FC<ProjectLinksProps> = ({ project, tone = 'dark' }) => (
      <div className={`${styles.links} ${tone === 'light' ? styles.light : ''}`}>
            <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primary}
            >
                  View code <Arrow size={16} />
                  <span className="sr-only"> for {project.title} on GitHub (opens in a new tab)</span>
            </a>
            {project.liveUrl && (
                  <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondary}
                  >
                        Live demo <Arrow size={16} />
                        <span className="sr-only"> of {project.title} (opens in a new tab)</span>
                  </a>
            )}
      </div>
);

export default ProjectLinks;
