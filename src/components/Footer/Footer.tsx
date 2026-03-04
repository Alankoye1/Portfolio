import React from 'react';
import styles from './Footer.module.css';

interface SocialLink {
      icon: string;
      name: string;
      url: string;
      color: string;
}

interface QuickLink {
      name: string;
      url: string;
}

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
      const currentYear: number = new Date().getFullYear();

      const socialLinks: SocialLink[] = [
            {
                  icon: 'fab fa-github',
                  name: 'GitHub',
                  url: 'https://github.com/Alankoye1',
                  color: '#333'
            },
            {
                  icon: 'fab fa-linkedin',
                  name: 'LinkedIn',
                  url: 'https://linkedin.com/in/alanazadakram',
                  color: '#0077B5'
            }
      ];

      const quickLinks: QuickLink[] = [
            { name: 'Home', url: '#hero' },
            { name: 'About', url: '#about' },
            { name: 'Skills', url: '#skills' },
            { name: 'Projects', url: '#projects' },
            { name: 'Contact', url: '#contact' }
      ];

      const handleScrollToSection = (sectionId: string): void => {
            const element = document.getElementById(sectionId.substring(1));
            if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
            }
      };

      return (
            <footer className={styles.footer}>
                  <div className={styles.container}>
                        <div className={styles.footerContent}>
                              <div className={styles.footerSection}>
                                    <div className={styles.brand}>
                                          <h3 className={styles.brandName}>
                                                <span className={styles.brandSymbol}>{'<'}</span>
                                                Alan Azad Akram
                                                <span className={styles.brandSymbol}>{'/>'}</span>
                                          </h3>
                                          <p className={styles.brandTagline}>
                                                Building mobile experiences with Flutter and passion
                                          </p>
                                    </div>
                                    <div className={styles.socialLinks}>
                                          {socialLinks.map((social) => (
                                                <a
                                                      key={social.name}
                                                      href={social.url}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className={styles.socialLink}
                                                      style={{ '--social-color': social.color } as React.CSSProperties}
                                                      aria-label={`Follow on ${social.name}`}
                                                >
                                                      <i className={social.icon}></i>
                                                </a>
                                          ))}
                                    </div>
                              </div>

                              <div className={styles.footerSection}>
                                    <h4 className={styles.sectionTitle}>Quick Links</h4>
                                    <ul className={styles.linksList}>
                                          {quickLinks.map((link) => (
                                                <li key={link.name}>
                                                      <button
                                                            onClick={() => handleScrollToSection(link.url)}
                                                            className={styles.footerLink}
                                                            type="button"
                                                      >
                                                            {link.name}
                                                      </button>
                                                </li>
                                          ))}
                                    </ul>
                              </div>

                              <div className={styles.footerSection}>
                                    <h4 className={styles.sectionTitle}>Services</h4>
                                    <ul className={styles.linksList}>
                                          <li><span className={styles.serviceItem}>Web Development</span></li>
                                          <li><span className={styles.serviceItem}>Mobile Apps</span></li>
                                          <li><span className={styles.serviceItem}>UI/UX Design</span></li>
                                          <li><span className={styles.serviceItem}>Consulting</span></li>
                                    </ul>
                              </div>

                              <div className={styles.footerSection}>
                                    <h4 className={styles.sectionTitle}>Contact Info</h4>
                                    <div className={styles.contactInfo}>
                                          <div className={styles.contactItem}>
                                                <i className="fas fa-envelope"></i>
                                                <a href="mailto:alan.koye277@gmail.com" className={styles.contactLink}>
                                                      alan.koye277@gmail.com
                                                </a>
                                          </div>
                                          <div className={styles.contactItem}>
                                                <i className="fas fa-phone"></i>
                                                <a href="tel:+9647503756011" className={styles.contactLink}>
                                                      +964 750 375 6011
                                                </a>
                                          </div>
                                          <div className={styles.contactItem}>
                                                <i className="fas fa-map-marker-alt"></i>
                                                <span className={styles.contactText}>Erbil, Iraq</span>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div className={styles.footerBottom}>
                              <div className={styles.copyright}>
                                    <p>
                                          © {currentYear} Alan Azad. All rights reserved.
                                    </p>
                              </div>
                              <div className={styles.footerMeta}>
                                    <span className={styles.techStack}>
                                          Built with React & TypeScript
                                    </span>
                                    <div className={styles.statusIndicator}>
                                          <span className={styles.statusDot}></span>
                                          Available for work
                                    </div>
                              </div>
                        </div>
                  </div>

                  <div className={styles.footerDecoration}>
                        <div className={styles.decorationLine}></div>
                        <div className={styles.decorationGlow}></div>
                  </div>
            </footer>
      );
};

export default Footer;