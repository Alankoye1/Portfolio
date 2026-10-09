import React from 'react';
import { useInView } from '../../hooks/useInView';
import styles from './Reveal.module.css';

interface RevealProps {
      children: React.ReactNode;
      /** Delay in milliseconds, handy for staggering siblings. */
      delay?: number;
      /** Which way the content travels in from. */
      from?: 'up' | 'left' | 'right' | 'none';
      /** Render as another tag, e.g. "li" or "section". */
      as?: keyof React.JSX.IntrinsicElements;
      className?: string;
}

/**
 * REACT LESSON: "props" are the inputs to a component, like function arguments.
 * <Reveal delay={200}>…</Reveal> wraps any content (the `children` prop) and
 * fades it in when it scrolls into view. Write it once, reuse it everywhere.
 */
const Reveal: React.FC<RevealProps> = ({
      children,
      delay = 0,
      from = 'up',
      as = 'div',
      className = '',
}) => {
      const { ref, inView } = useInView<HTMLElement>();
      const Tag = as as React.ElementType;

      return (
            <Tag
                  ref={ref}
                  className={`${styles.reveal} ${styles[from]} ${inView ? styles.visible : ''} ${className}`}
                  style={{ '--delay': `${delay}ms` } as React.CSSProperties}
            >
                  {children}
            </Tag>
      );
};

export default Reveal;
