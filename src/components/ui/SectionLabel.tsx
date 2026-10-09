import React from 'react';
import styles from './SectionLabel.module.css';

interface SectionLabelProps {
      number: string;
      title: string;
      /** Draw it in dark ink for use on the lime background. */
      invert?: boolean;
}

/** The small mono "01 / About" tag that opens each section like a magazine folio. */
const SectionLabel: React.FC<SectionLabelProps> = ({ number, title, invert = false }) => (
      <p className={`${styles.label} ${invert ? styles.invert : ''}`}>
            <span className={styles.number}>{number}</span>
            <span className={styles.rule} aria-hidden="true" />
            <span>{title}</span>
      </p>
);

export default SectionLabel;
