import React from 'react';
import { about, stats, type Stat } from '../../data/site';
import { useCountUp } from '../../hooks/useCountUp';
import { useInView } from '../../hooks/useInView';
import Reveal from '../ui/Reveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './About.module.css';

/**
 * REACT LESSON: a small component can live in the same file as its parent when
 * only the parent uses it. StatItem owns the count-up logic for ONE number, so
 * each number runs its own hook instance, independent of the others.
 */
const StatItem: React.FC<{ stat: Stat; delay: number }> = ({ stat, delay }) => {
      const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.5 });
      const value = useCountUp(stat.value, inView);

      return (
            <Reveal delay={delay} from="right">
                  <div className={styles.stat} ref={ref}>
                        <p className={styles.statValue}>
                              <span className="sr-only">
                                    {stat.value}
                                    {stat.suffix}
                              </span>
                              <span aria-hidden="true">
                                    {value}
                                    {stat.suffix && <span className={styles.suffix}>{stat.suffix}</span>}
                              </span>
                        </p>
                        <p className={styles.statLabel}>{stat.label}</p>
                  </div>
            </Reveal>
      );
};

const About: React.FC = () => (
      <section id="about" className={styles.about} aria-labelledby="about-title">
            <div className={styles.inner}>
                  <div className={styles.head}>
                        <Reveal>
                              <SectionLabel number="01" title="About" />
                        </Reveal>
                        <Reveal delay={100}>
                              <h2 id="about-title" className={styles.title}>
                                    {about.heading}
                              </h2>
                        </Reveal>
                  </div>

                  <div className={styles.body}>
                        {about.paragraphs.map((text, i) => (
                              <Reveal key={i} delay={i * 90}>
                                    <p className={i === 0 ? styles.lead : styles.text}>{text}</p>
                              </Reveal>
                        ))}
                  </div>

                  <aside className={styles.side} aria-label="Quick facts">
                        <div className={styles.stats}>
                              {stats.map((stat, i) => (
                                    <StatItem key={stat.label} stat={stat} delay={i * 120} />
                              ))}
                        </div>

                        <Reveal delay={200} from="left" className={styles.noteWrap}>
                              <div className={styles.note}>
                                    <p className={styles.noteTitle}>Right now</p>
                                    <ul className={styles.noteList}>
                                          {about.now.map((line) => (
                                                <li key={line}>{line}</li>
                                          ))}
                                    </ul>
                              </div>
                        </Reveal>
                  </aside>
            </div>
      </section>
);

export default About;
