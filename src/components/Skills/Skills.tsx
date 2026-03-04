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
            { name: 'Flutter', icon: 'fas fa-mobile-alt', level: 85, category: 'Mobile', color: '#02569B' },
            { name: 'Dart', icon: 'fas fa-code', level: 80, category: 'Mobile', color: '#0175C2' },
            { name: 'JavaScript', icon: 'fab fa-js-square', level: 50, category: 'Frontend', color: '#F7DF1E' },
            { name: 'React', icon: 'fab fa-react', level: 40, category: 'Frontend', color: '#61DAFB' },
            { name: 'PHP', icon: 'fab fa-php', level: 45, category: 'Backend', color: '#777BB4' },
            { name: 'Laravel', icon: 'fab fa-laravel', level: 40, category: 'Backend', color: '#FF2D20' },
            { name: 'MySQL', icon: 'fas fa-database', level: 60, category: 'Database', color: '#4479A1' },
            { name: 'Oracle', icon: 'fas fa-database', level: 50, category: 'Database', color: '#F80000' },
            { name: 'Firebase', icon: 'fas fa-fire', level: 70, category: 'Database', color: '#FFCA28' }
      ];

      const categories: string[] = ['All', 'Mobile', 'Frontend', 'Backend', 'Database'];

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
                                          <i className="fas fa-mobile-alt"></i>
                                    </div>
                                    <div className={styles.statContent}>
                                          <h4>Mobile Development</h4>
                                          <p>Advanced Flutter developer building cross-platform apps</p>
                                    </div>
                              </div>
                              <div className={styles.statCard}>
                                    <div className={styles.statIcon}>
                                          <i className="fas fa-code"></i>
                                    </div>
                                    <div className={styles.statContent}>
                                          <h4>Web Technologies</h4>
                                          <p>Foundational knowledge in React, JavaScript, PHP & Laravel</p>
                                    </div>
                              </div>
                              <div className={styles.statCard}>
                                    <div className={styles.statIcon}>
                                          <i className="fas fa-database"></i>
                                    </div>
                                    <div className={styles.statContent}>
                                          <h4>Databases</h4>
                                          <p>Working with MySQL, Oracle, and Firebase</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Skills;