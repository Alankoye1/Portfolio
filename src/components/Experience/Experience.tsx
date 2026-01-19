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

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const experiences: WorkExperience[] = [
    {
      id: 1,
      company: 'Tech Innovation Corp',
      position: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'New York, NY',
      description: [
        'Lead development of scalable web applications using React, Node.js, and AWS',
        'Architected and implemented microservices infrastructure serving 100K+ users',
        'Mentored junior developers and conducted code reviews',
        'Collaborated with cross-functional teams to deliver high-quality products'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'MongoDB', 'Docker'],
      type: 'work'
    },
    {
      id: 2,
      company: 'Digital Solutions Ltd',
      position: 'Full Stack Developer',
      duration: '2020 - 2022',
      location: 'San Francisco, CA',
      description: [
        'Developed and maintained e-commerce platforms using MERN stack',
        'Implemented payment integration with Stripe and PayPal',
        'Optimized application performance resulting in 40% faster load times',
        'Built responsive user interfaces following modern design principles'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Stripe', 'Redux', 'Sass'],
      type: 'work'
    },
    {
      id: 3,
      company: 'StartupX',
      position: 'Frontend Developer',
      duration: '2019 - 2020',
      location: 'Austin, TX',
      description: [
        'Built interactive dashboards and data visualization components',
        'Collaborated with UX/UI designers to implement pixel-perfect designs',
        'Integrated RESTful APIs and managed application state',
        'Participated in agile development processes and sprint planning'
      ],
      technologies: ['React', 'D3.js', 'JavaScript', 'CSS3', 'Git', 'Figma'],
      type: 'work'
    },
    {
      id: 4,
      company: 'University of Technology',
      position: 'Bachelor of Science in Computer Science',
      duration: '2015 - 2019',
      location: 'Boston, MA',
      description: [
        'Graduated Magna Cum Laude with 3.8 GPA',
        'Specialized in Software Engineering and Web Development',
        'Completed senior project on machine learning applications',
        'Active member of Computer Science Society and Coding Club'
      ],
      technologies: ['Java', 'Python', 'C++', 'SQL', 'Git', 'Linux'],
      type: 'education'
    },
    {
      id: 5,
      company: 'Code Academy',
      position: 'Full Stack Web Development Bootcamp',
      duration: '2018',
      location: 'Online',
      description: [
        'Intensive 6-month program covering modern web development',
        'Built 15+ projects using various technologies and frameworks',
        'Collaborated on team projects using agile methodologies',
        'Received certification in Full Stack Web Development'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
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