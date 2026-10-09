import React from 'react';
import { site } from '../../data/site';
import Arrow from '../ui/Arrow';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
      <footer className={styles.footer}>
            <div className={styles.inner}>
                  <p>
                        © {new Date().getFullYear()} {site.name}
                  </p>
                  <p className={styles.made}>Built with React, TypeScript and too much coffee.</p>
                  <a href="#top" className={styles.top}>
                        Back to top <Arrow dir="up" size={16} />
                  </a>
            </div>
      </footer>
);

export default Footer;
