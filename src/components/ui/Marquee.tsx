import React from 'react';
import styles from './Marquee.module.css';

interface MarqueeProps {
      items: string[];
      /** Scroll direction. */
      reverse?: boolean;
      /** Draw words as outlines instead of solid. */
      outline?: boolean;
      /** Seconds for one full loop. Higher is slower. */
      duration?: number;
}

/**
 * An endless scrolling strip of words.
 *
 * Trick: we render the list twice and slide the track left by exactly 50%.
 * When the animation restarts, the second copy sits exactly where the first
 * began, so the loop looks seamless.
 *
 * Accessibility: the moving copy is hidden from screen readers (aria-hidden)
 * and a plain list is provided for them instead.
 */
const Marquee: React.FC<MarqueeProps> = ({ items, reverse = false, outline = false, duration = 28 }) => {
      const row = (hidden: boolean) => (
            <ul className={styles.row} aria-hidden={hidden || undefined} data-copy={hidden ? 'clone' : 'main'}>
                  {items.map((item) => (
                        <li key={item} className={styles.item}>
                              <span className={outline ? styles.outline : styles.solid}>{item}</span>
                              <span className={styles.dot} aria-hidden="true">
                                    ✱
                              </span>
                        </li>
                  ))}
            </ul>
      );

      return (
            <div
                  className={`${styles.marquee} ${reverse ? styles.reverse : ''}`}
                  style={{ '--duration': `${duration}s` } as React.CSSProperties}
            >
                  <div className={styles.track}>
                        {row(false)}
                        {row(true)}
                        {row(true)}
                  </div>
            </div>
      );
};

export default Marquee;
