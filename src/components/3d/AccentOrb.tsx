import React from 'react';
import styles from './AccentOrb.module.css';

/**
 * A small decorative orb for the Skills section: a glossy lime sphere with a
 * tilted ring and a tiny moon circling it.
 *
 * It is pure CSS (no WebGL). One WebGL scene on the page (the hero) is enough:
 * a second one would cost GPU time for very little extra beauty. CSS 3D
 * transforms give the same "floating object" feel at almost no cost.
 */
const AccentOrb: React.FC = () => (
      <div className={styles.orb} aria-hidden="true">
            <div className={styles.float}>
                  <div className={styles.sphere} />
                  {/* Tilted flat, then the ring inside spins around its own centre. */}
                  <div className={styles.plane}>
                        <div className={styles.ring}>
                              <span className={styles.moon} />
                        </div>
                  </div>
            </div>
      </div>
);

export default AccentOrb;
