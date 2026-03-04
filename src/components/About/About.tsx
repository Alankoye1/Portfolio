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
            { name: 'Flutter', icon: 'fas fa-mobile-alt', level: 85 },
            { name: 'JavaScript', icon: 'fab fa-js-square', level: 50 },
            { name: 'React', icon: 'fab fa-react', level: 40 },
            { name: 'Laravel', icon: 'fab fa-laravel', level: 40 }
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
                                                Hello! I'm Alan Azad Akram, an advanced mobile application developer with 1 year of
                                                experience building cross-platform apps using Flutter. I'm also an undergraduate student
                                                studying Information System Technology at Erbil Polytechnic University.
                                          </p>

                                          <p className={styles.description}>
                                                My journey in development started with a passion for mobile applications.
                                                I've built projects ranging from fitness planners to sports club apps,
                                                and I'm constantly expanding my skills across web and backend technologies.
                                          </p>

                                          <p className={styles.passion}>
                                                Beyond mobile development, I have foundational knowledge in JavaScript, PHP,
                                                React, and Laravel. I work with databases like MySQL, Oracle, and Firebase
                                                to build complete, data-driven applications.
                                          </p>
                                    </div>

                                    <div className={styles.highlights}>
                                          <div className={styles.highlight}>
                                                <div className={styles.highlightIcon}>
                                                      <i className="fas fa-mobile-alt"></i>
                                                </div>
                                                <div className={styles.highlightContent}>
                                                      <h4>Mobile Development</h4>
                                                      <p>Building cross-platform apps with Flutter</p>
                                                </div>
                                          </div>
                                          <div className={styles.highlight}>
                                                <div className={styles.highlightIcon}>
                                                      <i className="fas fa-database"></i>
                                                </div>
                                                <div className={styles.highlightContent}>
                                                      <h4>Database Management</h4>
                                                      <p>Working with MySQL, Oracle & Firebase</p>
                                                </div>
                                          </div>
                                          <div className={styles.highlight}>
                                                <div className={styles.highlightIcon}>
                                                      <i className="fas fa-graduation-cap"></i>
                                                </div>
                                                <div className={styles.highlightContent}>
                                                      <h4>Continuous Learning</h4>
                                                      <p>Always expanding skills and knowledge</p>
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