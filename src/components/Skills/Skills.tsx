import React, { useState } from 'react';
import styles from './Skills.module.css';

interface Skill {
      name: string;
      icon: string;
      level: number;
      category: string;
      color: string;
}

interface SkillsProps { }

const Skills: React.FC<SkillsProps> = () => {
      const [filter, setFilter] = useState<string>('All');

      const skills: Skill[] = [
            { name: 'React', icon: 'fab fa-react', level: 95, category: 'Frontend', color: '#61DAFB' },
            { name: 'TypeScript', icon: 'fab fa-js-square', level: 90, category: 'Frontend', color: '#3178C6' },
            { name: 'Node.js', icon: 'fab fa-node-js', level: 85, category: 'Backend', color: '#339933' },
            { name: 'Python', icon: 'fab fa-python', level: 80, category: 'Backend', color: '#3776AB' },
            { name: 'MongoDB', icon: 'fas fa-database', level: 82, category: 'Database', color: '#47A248' },
            { name: 'PostgreSQL', icon: 'fas fa-database', level: 78, category: 'Database', color: '#336791' },
            { name: 'Docker', icon: 'fab fa-docker', level: 75, category: 'DevOps', color: '#2496ED' },
            { name: 'AWS', icon: 'fab fa-aws', level: 70, category: 'DevOps', color: '#FF9900' }
      ];

      const categories: string[] = ['All', 'Frontend', 'Backend', 'Database', 'DevOps'];

      const filteredSkills: Skill[] = filter === 'All'
            ? skills
            : skills.filter(skill => skill.category === filter);

      const handleFilterChange = (category: string): void => {
            setFilter(category);
      };

      return (
            <section className={styles.skills} id="skills">
                  <div className={styles.container}>
                        <div className={styles.sectionTitle}>
                              <h2>Skills & Technologies</h2>
                              <p>The tools and technologies I use to bring ideas to life</p>
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

                        <div className={styles.skillsGrid}>
                              {filteredSkills.map((skill, index) => (
                                    <div
                                          key={skill.name}
                                          className={styles.skillCard}
                                          style={{
                                                animationDelay: `${index * 0.1}s`,
                                                '--skill-color': skill.color
                                          } as React.CSSProperties}
                                    >
                                          <div className={styles.skillIcon}>
                                                <i className={skill.icon}></i>
                                          </div>
                                          <h3 className={styles.skillName}>{skill.name}</h3>
                                          <p className={styles.skillCategory}>{skill.category}</p>
                                          <div className={styles.skillLevel}>
                                                <div className={styles.levelBar}>
                                                      <div
                                                            className={styles.levelProgress}
                                                            style={{ width: `${skill.level}%` }}
                                                      ></div>
                                                </div>
                                                <span className={styles.levelText}>{skill.level}%</span>
                                          </div>
                                    </div>
                              ))}
                        </div>

                        <div className={styles.statsContainer}>
                              <div className={styles.statCard}>
                                    <div className={styles.statIcon}>
                                          <i className="fas fa-code"></i>
                                    </div>
                                    <div className={styles.statContent}>
                                          <h4>Languages Mastered</h4>
                                          <p>Proficient in multiple programming languages and frameworks</p>
                                    </div>
                              </div>
                              <div className={styles.statCard}>
                                    <div className={styles.statIcon}>
                                          <i className="fas fa-tools"></i>
                                    </div>
                                    <div className={styles.statContent}>
                                          <h4>Development Tools</h4>
                                          <p>Experienced with modern development environments and workflows</p>
                                    </div>
                              </div>
                              <div className={styles.statCard}>
                                    <div className={styles.statIcon}>
                                          <i className="fas fa-cloud"></i>
                                    </div>
                                    <div className={styles.statContent}>
                                          <h4>Cloud Platforms</h4>
                                          <p>Deployment and scaling applications in cloud environments</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Skills;