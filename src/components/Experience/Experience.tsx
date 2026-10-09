import React from 'react';
import { experience, type Milestone } from '../../data/site';
import { useInView } from '../../hooks/useInView';
import Reveal from '../ui/Reveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './Experience.module.css';

/**
 * One row of the timeline. When it scrolls into view, `inView` flips to true
 * and the CSS class `lit` lights the node and draws the connecting line.
 */
const Entry: React.FC<{ item: Milestone; isLast: boolean }> = ({ item, isLast }) => {
      const { ref, inView } = useInView<HTMLLIElement>({ threshold: 0.25 });

      return (
            <li
                  ref={ref}
                  className={`${styles.entry} ${inView ? styles.lit : ''} ${isLast ? styles.last : ''}`}
            >
                  <div className={styles.when}>
                        <span className={styles.kind}>{item.kind === 'work' ? 'Work' : 'Education'}</span>
                        <span className={styles.date}>{item.when}</span>
                  </div>

                  <div className={styles.rail} aria-hidden="true">
                        <span className={styles.node} />
                        <span className={styles.line} />
                  </div>

                  <div className={styles.content}>
                        <h3 className={styles.role}>{item.title}</h3>
                        <p className={styles.place}>
                              {item.place} <span aria-hidden="true">/</span> {item.location}
                        </p>
                        <ul className={styles.points}>
                              {item.points.map((point) => (
                                    <li key={point}>{point}</li>
                              ))}
                        </ul>
                        <ul className={styles.tech} aria-label="Technologies used">
                              {item.tech.map((t) => (
                                    <li key={t}>{t}</li>
                              ))}
                        </ul>
                  </div>
            </li>
      );
};

const Experience: React.FC = () => (
      <section id="experience" className={styles.experience} aria-labelledby="experience-title">
            <div className={styles.inner}>
                  <div className={styles.head}>
                        <Reveal>
                              <SectionLabel number="02" title="Experience" />
                        </Reveal>
                        <Reveal delay={100}>
                              <h2 id="experience-title" className={styles.title}>
                                    {experience.heading}
                              </h2>
                        </Reveal>
                  </div>

                  <ol className={styles.timeline}>
                        {experience.items.map((item, i) => (
                              <Entry key={item.id} item={item} isLast={i === experience.items.length - 1} />
                        ))}
                  </ol>
            </div>
      </section>
);

export default Experience;
