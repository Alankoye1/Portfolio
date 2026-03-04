import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
      const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
      const [isScrolled, setIsScrolled] = useState<boolean>(false);

      useEffect(() => {
            const handleScroll = (): void => {
                  setIsScrolled(window.scrollY > 50);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const handleMenuToggle = (): void => {
            setIsMenuOpen(!isMenuOpen);
      };

      const scrollToSection = (sectionId: string): void => {
            const element = document.getElementById(sectionId);
            if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false); // Close mobile menu after clicking
            }
      };

      const navLinks = [
            { name: 'Home', href: 'hero' },
            { name: 'About', href: 'about' },
            { name: 'Skills', href: 'skills' },
            { name: 'Experience', href: 'experience' },
            { name: 'Projects', href: 'projects' },
            { name: 'Contact', href: 'contact' }
      ];

      return (
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
                  <div className={styles.container}>
                        <div className={styles.logo}>
                              <button
                                    onClick={() => scrollToSection('hero')}
                                    className={styles.logoBtn}
                                    type="button"
                                    aria-label="Go to home"
                              >
                                    <span className={styles.logoSymbol}>{'<'}</span>
                                    <span className={styles.logoText}>AlanAkram</span>
                                    <span className={styles.logoSymbol}>{'/>'}</span>
                              </button>
                        </div>

                        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                              <ul className={styles.navList}>
                                    {navLinks.map((link) => (
                                          <li key={link.name} className={styles.navItem}>
                                                <button
                                                      onClick={() => scrollToSection(link.href)}
                                                      className={styles.navLink}
                                                      type="button"
                                                >
                                                      {link.name}
                                                </button>
                                          </li>
                                    ))}
                              </ul>
                        </nav>

                        <div className={styles.headerActions}>
                              <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.resumeBtn}
                                    aria-label="Download Resume"
                              >
                                    <i className="fas fa-download"></i>
                                    Resume
                              </a>

                              <button
                                    onClick={handleMenuToggle}
                                    className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleActive : ''}`}
                                    type="button"
                                    aria-label="Toggle menu"
                                    aria-expanded={isMenuOpen}
                              >
                                    <span className={styles.hamburgerLine}></span>
                                    <span className={styles.hamburgerLine}></span>
                                    <span className={styles.hamburgerLine}></span>
                              </button>
                        </div>
                  </div>

                  {/* Mobile menu overlay */}
                  {isMenuOpen && (
                        <div
                              className={styles.mobileOverlay}
                              onClick={() => setIsMenuOpen(false)}
                        />
                  )}
            </header>
      );
};

export default Header;