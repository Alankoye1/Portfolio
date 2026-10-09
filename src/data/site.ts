/**
 * EDIT ME. Every piece of text, link and number on the site lives in this file.
 * Change a value here and the site updates. No need to touch the components.
 */

export interface SocialLink {
      label: string;
      url: string;
      handle: string;
}

export interface Project {
      id: string;
      number: string;
      title: string;
      kind: string;
      year: string;
      pitch: string;
      description: string;
      features: string[];
      tech: string[];
      githubUrl: string;
      /** Set to a URL to show a "Live" button. Leave null to hide it. */
      liveUrl: string | null;
}

export interface SkillGroup {
      title: string;
      blurb: string;
      items: string[];
}

export interface Stat {
      value: number;
      suffix?: string;
      label: string;
}

export interface Milestone {
      id: string;
      kind: 'work' | 'education';
      when: string;
      title: string;
      place: string;
      location: string;
      points: string[];
      tech: string[];
}

export const site = {
      name: 'Alan Azad Akram',
      shortName: 'Alan A. Akram',
      role: 'Junior developer',
      roleLine: 'Flutter & React',
      tagline: 'I build mobile apps that feel finished, and I am teaching myself the web next.',
      location: 'Erbil, Iraq',
      /** IANA time zone used for the live clock. Erbil shares Baghdad time. */
      timeZone: 'Asia/Baghdad',
      email: 'alankoye277@gmail.com',
      phone: '+964 750 375 6011',
      cvUrl: '/Alan%20Azad%20Akram%20_%20CV.pdf',
      cvFileName: 'Alan Azad Akram _ CV.pdf',
} as const;

export const socials: SocialLink[] = [
      { label: 'GitHub', url: 'https://github.com/Alankoye1', handle: '@Alankoye1' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/alanazadakram', handle: '/in/alanazadakram' },
];

export const nav = [
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Work' },
      { id: 'skills', label: 'Skills' },
      { id: 'contact', label: 'Contact' },
];

/** Words that circle the sticker in the hero. Keep it around 40 characters. */
export const stickerText = 'FLUTTER • REACT • DART • FIREBASE • ';

export const about = {
      heading: 'Mobile first. Web next. Curious always.',
      paragraphs: [
            'Hello, I am Alan. I am a junior developer from Erbil with a year of Flutter behind me, and I study Information System Technology at Erbil Polytechnic University.',
            'I started with mobile apps, so my projects range from a fitness planner to a fan app for a football club. Now I am pushing into the web with React, JavaScript and PHP.',
            'I like databases as much as interfaces. MySQL, Oracle and Firebase are all part of how I build apps that hold real data, not just pretty screens.',
      ],
      now: [
            'Shipping Flutter apps with Firebase',
            'Learning React and TypeScript in public',
            'Finishing my degree in Erbil',
      ],
};

export const stats: Stat[] = [
      { value: 2, label: 'Apps shipped' },
      { value: 1, suffix: ' yr', label: 'Building with Flutter' },
      { value: 3, label: 'Databases in my toolbox' },
];

export const experience = {
      heading: 'The hours I have put in.',
      items: [
            {
                  id: 'freelance',
                  kind: 'work',
                  when: '2025 – Now',
                  title: 'Mobile Application Developer',
                  place: 'Freelance / Personal Projects',
                  location: 'Erbil, Iraq',
                  points: [
                        'Built cross-platform mobile apps with Flutter and Dart.',
                        'Shipped Fitness Planner: BMI calculator, calorie tracking and workouts.',
                        'Shipped the Erbil Soccer Club app: fixtures, news and a fan zone.',
                        'Used Firebase for backend services and real-time data.',
                  ],
                  tech: ['Flutter', 'Dart', 'Firebase', 'MySQL'],
            },
            {
                  id: 'university',
                  kind: 'education',
                  when: 'In progress',
                  title: 'BSc, Information System Technology',
                  place: 'Erbil Polytechnic University',
                  location: 'Erbil, Iraq',
                  points: [
                        'Studying software development, databases and system design.',
                        'Applying coursework to practical mobile and web projects.',
                        'Working with MySQL, Oracle and modern frameworks.',
                  ],
                  tech: ['Flutter', 'JavaScript', 'PHP', 'MySQL', 'Oracle', 'Firebase'],
            },
      ] as Milestone[],
};

export const projects: Project[] = [
      {
            id: 'fitness-planner',
            number: '01',
            title: 'Fitness Planner',
            kind: 'Mobile app',
            year: '2025',
            pitch: 'Your numbers, your plan, no spreadsheet.',
            description:
                  'A fitness app built with Flutter that turns height, weight and goals into a plan you can actually follow.',
            features: ['BMI calculator', 'Daily calorie calculator', 'Workout tracking'],
            tech: ['Flutter', 'Dart', 'Firebase'],
            githubUrl: 'https://github.com/Alankoye1',
            liveUrl: null,
      },
      {
            id: 'erbil-soccer-club',
            number: '02',
            title: 'Erbil Soccer Club',
            kind: 'Mobile app',
            year: '2025',
            pitch: 'Matchday, in your pocket.',
            description:
                  'The official-feeling companion app for Erbil Soccer Club supporters: know when they play, how it went, and talk about it.',
            features: ['Fixtures & results', 'Latest club news', 'Interactive fan zone'],
            tech: ['Flutter', 'Dart', 'Firebase'],
            githubUrl: 'https://github.com/Alankoye1',
            liveUrl: null,
      },
];

export const skills = {
      heading: 'The toolbox.',
      /** Two marquee rows. Each row scrolls in the opposite direction. */
      rowOne: ['Flutter', 'Dart', 'Firebase', 'MySQL', 'Oracle'],
      rowTwo: ['React', 'JavaScript', 'TypeScript', 'PHP', 'CSS'],
      groups: [
            {
                  title: 'Mobile',
                  blurb: 'Where I am strongest. Cross-platform apps from one Dart codebase.',
                  items: ['Flutter', 'Dart'],
            },
            {
                  title: 'Web',
                  blurb: 'Where I am heading. Building this site is part of the practice.',
                  items: ['React', 'JavaScript', 'TypeScript', 'PHP'],
            },
            {
                  title: 'Data',
                  blurb: 'Apps are only as good as what they remember.',
                  items: ['Firebase', 'MySQL', 'Oracle'],
            },
      ] as SkillGroup[],
};

export const contact = {
      heading: "Let's build something.",
      lead: 'Got a project, an internship, or just a question about Flutter? My inbox is open.',
};
