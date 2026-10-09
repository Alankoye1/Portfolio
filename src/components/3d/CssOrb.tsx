import React from 'react';
import styles from './Scene3D.module.css';

/**
 * The no-WebGL version of the hero orb: a glossy lime sphere made of CSS
 * gradients. It is shown instantly (so the page never looks empty), stays for
 * phones and low-power devices, and fades away once the real 3D orb is ready.
 */
const CssOrb: React.FC<{ hidden?: boolean }> = ({ hidden = false }) => (
      <div className={`${styles.cssOrb} ${hidden ? styles.cssOrbHidden : ''}`} aria-hidden="true">
            <span className={styles.cssOrbRing} />
      </div>
);

export default CssOrb;
