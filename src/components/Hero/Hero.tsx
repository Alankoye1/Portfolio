import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
      const [currentCodeLine, setCurrentCodeLine] = useState<number>(0);

      const codeLines: string[] = [
            "interface Developer {",
            "  name: string;",
            "  skills: string[];",
            "  passion: boolean;",
            "  experience: number;",
            "}",
            "",
            "const john: Developer = {",
            "  name: 'John Doe',",
            "  skills: ['React', 'TypeScript', 'Node.js'],",
            "  passion: true,",
            "  experience: 3",
            "};"
      ];

      useEffect(() => {
            const timer = setInterval(() => {
                  setCurrentCodeLine((prev) => (prev + 1) % codeLines.length);
            }, 2000);

            return () => clearInterval(timer);
      }, [codeLines.length]);

      const handleScrollToContact = (): void => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
            }
      };

      const handleScrollToProjects = (): void => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
      };

      return (
            <section className={styles.hero} id="hero">
                  <div className={styles.container}>
                        <div className={styles.heroContent}>
                              <div className={styles.heroText}>
                                    <div className={styles.greeting}>
                                          <span className={styles.wave}>👋</span>
                                          Hello, I'm
                                    </div>

                                    <h1 className={styles.heroTitle}>
                                          <span className={styles.firstName}>John</span>
                                          <span className={styles.lastName}>Doe</span>
                                    </h1>

                                    <div className={styles.heroSubtitle}>
                                          <span className={styles.role}>Full Stack Developer</span>
                                          <span className={styles.specialization}>& TypeScript Enthusiast</span>
                                    </div>

                                    <p className={styles.heroDescription}>
                                          I create beautiful, functional, and user-friendly digital experiences using modern web technologies.
                                          Passionate about clean code, performance optimization, and building scalable applications.
                                    </p>

                                    <div className={styles.heroActions}>
                                          <button
                                                onClick={handleScrollToProjects}
                                                className={styles.primaryBtn}
                                                type="button"
                                          >
                                                <i className="fas fa-rocket"></i>
                                                View My Work
                                          </button>
                                          <button
                                                onClick={handleScrollToContact}
                                                className={styles.secondaryBtn}
                                                type="button"
                                          >
                                                <i className="fas fa-envelope"></i>
                                                Get In Touch
                                          </button>
                                    </div>

                                    <div className={styles.socialLinks}>
                                          <a
                                                href="https://github.com/yourusername"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.socialLink}
                                                aria-label="GitHub Profile"
                                          >
                                                <i className="fab fa-github"></i>
                                          </a>
                                          <a
                                                href="https://linkedin.com/in/yourusername"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.socialLink}
                                                aria-label="LinkedIn Profile"
                                          >
                                                <i className="fab fa-linkedin"></i>
                                          </a>
                                          <a
                                                href="https://twitter.com/yourusername"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.socialLink}
                                                aria-label="Twitter Profile"
                                          >
                                                <i className="fab fa-twitter"></i>
                                          </a>
                                    </div>
                              </div>

                              <div className={styles.heroVisual}>
                                    <div className={styles.codeBlock}>
                                          <div className={styles.codeHeader}>
                                                <div className={styles.windowControls}>
                                                      <span className={styles.controlDot} style={{ background: '#ff5f56' }}></span>
                                                      <span className={styles.controlDot} style={{ background: '#ffbd2e' }}></span>
                                                      <span className={styles.controlDot} style={{ background: '#27ca3f' }}></span>
                                                </div>
                                                <div className={styles.codeTitle}>developer.ts</div>
                                          </div>

                                          <div className={styles.codeContent}>
                                                {codeLines.map((line, index) => (
                                                      <div
                                                            key={index}
                                                            className={`${styles.codeLine} ${index <= currentCodeLine ? styles.codeLineVisible : ''
                                                                  }`}
                                                            style={{ animationDelay: `${index * 0.1}s` }}
                                                      >
                                                            <span className={styles.lineNumber}>{(index + 1).toString().padStart(2, '0')}</span>
                                                            <span className={styles.lineContent}>
                                                                  {line || '\u00A0'} {/* Non-breaking space for empty lines */}
                                                            </span>
                                                      </div>
                                                ))}
                                          </div>

                                          <div className={styles.cursor}>|</div>
                                    </div>

                                    <div className={styles.floatingElements}>
                                          <div className={styles.floatingIcon} style={{ '--delay': '0s' } as React.CSSProperties}>
                                                <i className="fab fa-react"></i>
                                          </div>
                                          <div className={styles.floatingIcon} style={{ '--delay': '1s' } as React.CSSProperties}>
                                                <i className="fab fa-node-js"></i>
                                          </div>
                                          <div className={styles.floatingIcon} style={{ '--delay': '2s' } as React.CSSProperties}>
                                                <i className="fab fa-js-square"></i>
                                          </div>
                                          <div className={styles.floatingIcon} style={{ '--delay': '3s' } as React.CSSProperties}>
                                                <i className="fab fa-github"></i>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div className={styles.scrollIndicator}>
                              <div className={styles.scrollDot}></div>
                              <div className={styles.scrollText}>Scroll to explore</div>
                        </div>
                  </div>

                  <div className={styles.heroBackground}>
                        <div className={styles.gridPattern}></div>
                        <div className={styles.gradientOrb1}></div>
                        <div className={styles.gradientOrb2}></div>
                  </div>
            </section>
      );
};

export default Hero;