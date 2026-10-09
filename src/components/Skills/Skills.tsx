import React from 'react';
import { skills } from '../../data/site';
import AccentOrb from '../3d/AccentOrb';
import Marquee from '../ui/Marquee';
import Reveal from '../ui/Reveal';
import SectionLabel from '../ui/SectionLabel';
import styles from './Skills.module.css';

/**
 * Skills = two giant opposite-direction marquees (the "wow") plus three short
 * columns underneath (the "what it actually means"). No fake percentage bars:
 * honest one-line context says more than "React 40%".
 */
const Skills: React.FC = () => (
      <section id="skills" className={styles.skills} aria-labelledby="skills-title">
            <div className={styles.head}>
                  <Reveal>
                        <SectionLabel number="04" title="Skills" />
                  </Reveal>
                  <Reveal delay={100}>
                        <h2 id="skills-title" className={styles.title}>
                              {skills.heading}
                        </h2>
                  </Reveal>
                  <div className={styles.accent}>
                        <AccentOrb />
                  </div>
            </div>

            <div className={styles.marquees}>
                  <Marquee items={skills.rowOne} duration={32} />
                  <Marquee items={skills.rowTwo} duration={38} reverse outline />
            </div>

            <div className={styles.groups}>
                  {skills.groups.map((group, i) => (
                        <Reveal key={group.title} delay={i * 110} className={`${styles.group} ${styles[`g${i}`]}`}>
                              <h3 className={styles.groupTitle}>{group.title}</h3>
                              <p className={styles.blurb}>{group.blurb}</p>
                              <ul className={styles.items}>
                                    {group.items.map((item) => (
                                          <li key={item}>{item}</li>
                                    ))}
                              </ul>
                        </Reveal>
                  ))}
            </div>
      </section>
);

export default Skills;
