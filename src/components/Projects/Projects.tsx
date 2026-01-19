import React, { useState } from 'react';
import styles from './Projects.module.css';

interface Project {
      id: number;
      title: string;
      description: string;
      image: string;
      technologies: string[];
      githubUrl: string;
      liveUrl: string;
      category: string;
      featured: boolean;
}

interface ProjectsProps { }

const Projects: React.FC<ProjectsProps> = () => {
      const [filter, setFilter] = useState<string>('All');

      const projects: Project[] = [
            {
                  id: 1,
                  title: 'E-Commerce Platform',
                  description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
                  image: '/images/projects/ecommerce.jpg',
                  technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'TypeScript'],
                  githubUrl: 'https://github.com/yourusername/ecommerce',
                  liveUrl: 'https://ecommerce-demo.vercel.app',
                  category: 'Full Stack',
                  featured: true
            },
            {
                  id: 2,
                  title: 'Social Media Dashboard',
                  description: 'A responsive dashboard for social media analytics built with React and D3.js. Features real-time data visualization and interactive charts.',
                  image: '/images/projects/dashboard.jpg',
                  technologies: ['React', 'D3.js', 'TypeScript', 'TailwindCSS', 'Chart.js'],
                  githubUrl: 'https://github.com/yourusername/dashboard',
                  liveUrl: 'https://dashboard-demo.netlify.app',
                  category: 'Frontend',
                  featured: true
            },
            {
                  id: 3,
                  title: 'Task Management API',
                  description: 'A RESTful API for task management with JWT authentication, CRUD operations, and PostgreSQL database integration.',
                  image: '/images/projects/api.jpg',
                  technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Prisma'],
                  githubUrl: 'https://github.com/yourusername/task-api',
                  liveUrl: 'https://task-api.herokuapp.com',
                  category: 'Backend',
                  featured: false
            }
      ];

      const categories: string[] = ['All', 'Full Stack', 'Frontend', 'Backend'];

      const filteredProjects: Project[] = filter === 'All'
            ? projects
            : projects.filter(project => project.category === filter);

      const handleFilterChange = (category: string): void => {
            setFilter(category);
      };

      return (
            <section className={styles.projects} id="projects">
                  <div className={styles.container}>
                        <div className={styles.sectionTitle}>
                              <h2>Featured Projects</h2>
                              <p>A showcase of my work and technical expertise</p>
                        </div>

                        <div className={styles.filterContainer}>
                              <div className={styles.filterButtons}>
                                    {categories.map((category) => (
                                          <button
                                                key={category}
                                                className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
                                                onClick={() => handleFilterChange(category)}
                                                type="button"
                                          >
                                                {category}
                                          </button>
                                    ))}
                              </div>
                        </div>

                        <div className={styles.projectsGrid}>
                              {filteredProjects.map((project, index) => (
                                    <div
                                          key={project.id}
                                          className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
                                          style={{
                                                animationDelay: `${index * 0.1}s`,
                                                '--project-color': project.featured ? 'var(--accent-cyan)' : 'var(--accent-purple)'
                                          } as React.CSSProperties}
                                    >
                                          <div className={styles.projectImage}>
                                                <div className={styles.imagePlaceholder}>
                                                      <i className="fas fa-code" style={{ color: 'var(--project-color)' }}></i>
                                                </div>
                                                <div className={styles.projectOverlay}>
                                                      <div className={styles.projectLinks}>
                                                            <a
                                                                  href={project.githubUrl}
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className={styles.projectLink}
                                                                  aria-label="View GitHub repository"
                                                            >
                                                                  <i className="fab fa-github"></i>
                                                            </a>
                                                            <a
                                                                  href={project.liveUrl}
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className={styles.projectLink}
                                                                  aria-label="View live project"
                                                            >
                                                                  <i className="fas fa-external-link-alt"></i>
                                                            </a>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className={styles.projectContent}>
                                                <div className={styles.projectHeader}>
                                                      <h3 className={styles.projectTitle}>{project.title}</h3>
                                                      <span
                                                            className={styles.projectCategory}
                                                            style={{ '--category-color': 'var(--project-color)' } as React.CSSProperties}
                                                      >
                                                            {project.category}
                                                      </span>
                                                </div>

                                                <p className={styles.projectDescription}>
                                                      {project.description}
                                                </p>

                                                <div className={styles.technologiesContainer}>
                                                      <div className={styles.technologies}>
                                                            {project.technologies.map((tech) => (
                                                                  <span
                                                                        key={tech}
                                                                        className={styles.techTag}
                                                                        style={{ '--tech-color': 'var(--project-color)' } as React.CSSProperties}
                                                                  >
                                                                        {tech}
                                                                  </span>
                                                            ))}
                                                      </div>
                                                </div>

                                                <div className={styles.projectActions}>
                                                      <a
                                                            href={project.githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={styles.btnSecondary}
                                                      >
                                                            <i className="fab fa-github"></i>
                                                            Code
                                                      </a>
                                                      <a
                                                            href={project.liveUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={styles.btnPrimary}
                                                      >
                                                            <i className="fas fa-external-link-alt"></i>
                                                            Live Demo
                                                      </a>
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Projects;