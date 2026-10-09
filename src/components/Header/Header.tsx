import React, { useEffect, useState } from 'react';
import { nav, site } from '../../data/site';
import Arrow from '../ui/Arrow';
import styles from './Header.module.css';

/**
 * Fixed top bar.
 *  - Scroll-spy: highlights the link for the section you are reading.
 *  - A lime progress line along the bottom edge fills as you scroll.
 *  - On phones the links live in a full-screen menu.
 */
const Header: React.FC = () => {
      const [menuOpen, setMenuOpen] = useState<boolean>(false);
      const [active, setActive] = useState<string>('');

      // Scroll-spy: watch each section and remember which one is mid-screen.
      useEffect(() => {
            const sections = nav
                  .map((item) => document.getElementById(item.id))
                  .filter((el): el is HTMLElement => el !== null);

            const observer = new IntersectionObserver(
                  (entries) => {
                        entries.forEach((entry) => {
                              if (entry.isIntersecting) setActive(entry.target.id);
                        });
                  },
                  { rootMargin: '-45% 0px -50% 0px' }
            );

            sections.forEach((section) => observer.observe(section));
            return () => observer.disconnect();
      }, []);

      // While the mobile menu is open: lock page scroll and let Escape close it.
      useEffect(() => {
            if (!menuOpen) return;
            const previous = document.body.style.overflow;
            document.body.style.overflow = 'hidden';

            const onKey = (e: KeyboardEvent): void => {
                  if (e.key === 'Escape') setMenuOpen(false);
            };
            window.addEventListener('keydown', onKey);

            return () => {
                  document.body.style.overflow = previous;
                  window.removeEventListener('keydown', onKey);
            };
      }, [menuOpen]);

      const closeMenu = (): void => setMenuOpen(false);

      return (
            <header className={styles.header}>
                  <div className={styles.bar}>
                        <a href="#top" className={styles.logo} aria-label={`${site.shortName}, back to top`} onClick={closeMenu}>
                              <span className={styles.mark} aria-hidden="true">A</span>
                              <span className={styles.logoText}>{site.shortName}</span>
                        </a>

                        <nav
                              id="site-nav"
                              className={`${styles.nav} ${menuOpen ? styles.open : ''}`}
                              aria-label="Primary"
                        >
                              <ul className={styles.list}>
                                    {nav.map((item, index) => (
                                          <li key={item.id}>
                                                <a
                                                      href={`#${item.id}`}
                                                      className={`${styles.link} ${active === item.id ? styles.active : ''}`}
                                                      aria-current={active === item.id ? 'true' : undefined}
                                                      onClick={closeMenu}
                                                >
                                                      <span className={styles.index}>0{index + 1}</span>
                                                      {item.label}
                                                </a>
                                          </li>
                                    ))}
                              </ul>
                              <a
                                    href={site.cvUrl}
                                    download={site.cvFileName}
                                    className={styles.cv}
                                    onClick={closeMenu}
                              >
                                    Résumé <Arrow dir="down" size={16} />
                              </a>
                        </nav>

                        <button
                              type="button"
                              className={styles.toggle}
                              aria-expanded={menuOpen}
                              aria-controls="site-nav"
                              onClick={() => setMenuOpen((open) => !open)}
                        >
                              <span className={styles.toggleText}>{menuOpen ? 'Close' : 'Menu'}</span>
                              <span className={styles.burger} aria-hidden="true" />
                        </button>
                  </div>
                  <div className={styles.progress} aria-hidden="true" />
            </header>
      );
};

export default Header;
