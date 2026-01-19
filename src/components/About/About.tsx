import React from 'react';
import styles from './About.module.css';

interface Skill {
      name: string;
      icon: string;
      level: number;
}

interface AboutProps { }

const About: React.FC<AboutProps> = () => {
      const skills: Skill[] = [
            { name: 'React', icon: 'fab fa-react', level: 95 },
            { name: 'TypeScript', icon: 'fab fa-js-square', level: 90 },
            { name: 'Node.js', icon: 'fab fa-node-js', level: 85 },
            { name: 'Python', icon: 'fab fa-python', level: 80 }
      ];

      return (
            <section className={styles.about} id="about">
                  <div className={styles.container}>
                        <div className={styles.aboutContent}>
                              <div className={styles.aboutText}>
                                    <div className={styles.sectionTitle}>
                                          <h2>About Me</h2>
                                          <p>Discover my journey and passion for creating digital experiences</p>
                                    </div>

                                    <div className={styles.textContent}>
                                          <p className={styles.intro}>
                                                Hello! I'm John Doe, a passionate full-stack developer with over 3 years of experience
                                                building modern web applications. I specialize in React, TypeScript, and Node.js,
                                                creating scalable and user-friendly solutions.
                                          </p>

                                          <p className={styles.description}>
                                                My journey in web development started with a curiosity about how websites work.
                                                Since then, I've been constantly learning and evolving my skills to stay current
                                                with the latest technologies and best practices.
                                          </p>

                                          <p className={styles.passion}>
                                                I believe in writing clean, maintainable code and creating seamless user experiences.
                                                When I'm not coding, you can find me exploring new technologies, contributing to
                                                open-source projects, or sharing knowledge with the developer community.
                                          </p>
                                    </div>

                                    <div className={styles.highlights}>
                                          <div className={styles.highlight}>
                                                <div className={styles.highlightIcon}>
                                                      <i className="fas fa-code"></i>
                                                </div>
                                                <div className={styles.highlightContent}>
                                                      <h4>Clean Code</h4>
                                                      <p>Writing maintainable and scalable code</p>
                                                </div>
                                          </div>
                                          <div className={styles.highlight}>
                                                <div className={styles.highlightIcon}>
                                                      <i className="fas fa-mobile-alt"></i>
                                                </div>
                                                <div className={styles.highlightContent}>
                                                      <h4>Responsive Design</h4>
                                                      <p>Creating seamless experiences across devices</p>
                                                </div>
                                          </div>
                                          <div className={styles.highlight}>
                                                <div className={styles.highlightIcon}>
                                                      <i className="fas fa-rocket"></i>
                                                </div>
                                                <div className={styles.highlightContent}>
                                                      <h4>Performance</h4>
                                                      <p>Optimizing for speed and user experience</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              <div className={styles.aboutVisual}>
                                    <div className={styles.skillsPreview}>
                                          <h3 className={styles.skillsTitle}>Core Technologies</h3>
                                          <div className={styles.skillsList}>
                                                {skills.map((skill) => (
                                                      <div key={skill.name} className={styles.skillItem}>
                                                            <div className={styles.skillHeader}>
                                                                  <div className={styles.skillInfo}>
                                                                        <i className={skill.icon}></i>
                                                                        <span className={styles.skillName}>{skill.name}</span>
                                                                  </div>
                                                                  <span className={styles.skillLevel}>{skill.level}%</span>
                                                            </div>
                                                            <div className={styles.skillBar}>
                                                                  <div
                                                                        className={styles.skillProgress}
                                                                        style={{ width: `${skill.level}%` }}
                                                                  ></div>
                                                            </div>
                                                      </div>
                                                ))}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default About;