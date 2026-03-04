import React, { useState } from 'react';
import styles from './Experience.module.css';

interface WorkExperience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education';
}

interface ExperienceProps { }

const Experience: React.FC<ExperienceProps> = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const experiences: WorkExperience[] = [
    {
      id: 1,
      company: 'Freelance / Personal Projects',
      position: 'Mobile Application Developer',
      duration: '2025 - Present',
      location: 'Erbil, Iraq',
      description: [
        'Developed cross-platform mobile applications using Flutter and Dart',
        'Built Fitness Planner app with BMI calculator, calorie tracking, and workout features',
        'Created Erbil Soccer Club app with match schedules, news, and fan zone',
        'Integrated Firebase for backend services and real-time data management'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'MySQL'],
      type: 'work'
    },
    {
      id: 2,
      company: 'Erbil Polytechnic University',
      position: 'Bachelor in Information System Technology',
      duration: 'Present',
      location: 'Erbil, Iraq',
      description: [
        'Undergraduate student in Information System Technology',
        'Studying software development, databases, and system design',
        'Working on practical projects involving mobile and web development',
        'Learning MySQL, Oracle, and modern development frameworks'
      ],
      technologies: ['Flutter', 'JavaScript', 'PHP', 'MySQL', 'Oracle', 'Firebase'],
      type: 'education'
    }
  ];

  const filteredExperiences = experiences.filter(exp => exp.type === activeTab);

  const handleTabChange = (tab: 'work' | 'education'): void => {
    setActiveTab(tab);
  };

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Experience & Education</h2>
          <p>My journey in software development and learning</p>
        </div>

        <div className={styles.tabContainer}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tabBtn} ${activeTab === 'work' ? styles.active : ''}`}
              onClick={() => handleTabChange('work')}
              type="button"
            >
              <i className="fas fa-briefcase"></i>
              Work Experience
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'education' ? styles.active : ''}`}
              onClick={() => handleTabChange('education')}
              type="button"
            >
              <i className="fas fa-graduation-cap"></i>
              Education
            </button>
          </div>
        </div>

        <div className={styles.timeline}>
          {filteredExperiences.map((exp, index) => (
            <div
              key={exp.id}
              className={styles.timelineItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.timelineMarker}>
                <div className={styles.markerDot}></div>
                <div className={styles.markerLine}></div>
              </div>

              <div className={styles.timelineContent}>
                <div className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.companyInfo}>
                      <h3 className={styles.position}>{exp.position}</h3>
                      <h4 className={styles.company}>{exp.company}</h4>
                    </div>
                    <div className={styles.experienceMeta}>
                      <span className={styles.duration}>
                        <i className="fas fa-calendar-alt"></i>
                        {exp.duration}
                      </span>
                      <span className={styles.location}>
                        <i className="fas fa-map-marker-alt"></i>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <ul className={styles.descriptionList}>
                      {exp.description.map((item, idx) => (
                        <li key={idx} className={styles.descriptionItem}>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className={styles.technologiesSection}>
                      <h5 className={styles.techTitle}>Technologies Used:</h5>
                      <div className={styles.technologies}>
                        {exp.technologies.map((tech) => (
                          <span key={tech} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <i className="fas fa-code"></i>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>3+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <i className="fas fa-project-diagram"></i>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <i className="fas fa-users"></i>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Happy Clients</div>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <i className="fas fa-award"></i>
            </div>
            <div className={styles.statContent}>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;