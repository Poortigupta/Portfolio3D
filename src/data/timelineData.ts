export interface TimelineItem {
  id: string;
  type: 'education' | 'experience';
  title: string;
  subtitle: string;
  institution: string;
  date: string;
  description: string[];
  current?: boolean;
}

export const educationData: TimelineItem[] = [
  {
    id: 'edu-1',
    type: 'education',
    title: 'Bachelor of Engineering in Computer Science Engineering',
    subtitle: 'Computer Science Engineering',
    institution: 'MBM University Jodhpur',
    date: '2023 - Present',
    description: [
      'CGPA: 8.51',
      'Ranked among top 20 in college',
      'Relevant Coursework: Data Structures, Algorithms, Web Development, AI'
    ],
    current: true
  },
  {
    id: 'edu-2',
    type: 'education',
    title: 'Class XII',
    subtitle: 'RBSE Board',
    institution: 'Ashish Memorial Public School, Karauli',
    date: '2021 - 2022',
    description: [
      'Percentage: 93%'
    ]
  },
  {
    id: 'edu-3',
    type: 'education',
    title: 'Class X',
    subtitle: 'RBSE Board',
    institution: 'Ashish Memorial Public School, Karauli',
    date: '2019 - 2020',
    description: [
      'Percentage: 90.84%'
    ]
  }
];

export const experienceData: TimelineItem[] = [
  {
    id: 'exp-1',
    type: 'experience',
    title: 'Volunteer',
    subtitle: 'Event Management',
    institution: 'Techkriti, MBM Jodhpur',
    date: '2024',
    description: [
      'Volunteered at Techkriti technical festival',
      'Assisted in event management and coordination',
      'Gained experience in teamwork and leadership'
    ]
  },
  {
    id: 'exp-2',
    type: 'experience',
    title: 'Volunteer',
    subtitle: 'Sports Festival',
    institution: 'Khelo MBM Fest, MBM Jodhpur',
    date: '2024',
    description: [
      'Volunteered at sports festival',
      'Helped in organizing and managing sports events',
      'Demonstrated commitment to extracurricular activities'
    ]
  },
  {
    id: 'exp-3',
    type: 'experience',
    title: 'Hackathon Participant',
    subtitle: 'Healthcare Services Theme',
    institution: 'SITE Hackathon, Jaipur',
    date: 'March 2025',
    description: [
      'Collaborated with a team of 6 members',
      'Developed "JEEVNI" healthcare service solution',
      'Utilized both frontend and backend technologies',
      'Demonstrated problem-solving and teamwork skills'
    ]
  },
  {
    id: 'exp-4',
    type: 'experience',
    title: 'Intern',
    subtitle: 'AI Engineer Intern',
    institution: 'AIPlanTech',
    date: 'June 2025 - Present',
    description: [
      'Working on AI-driven projects',
      'Collaborating with cross-functional teams',
      'Gaining hands-on experience in machine learning and data analysis'
    ]
  }
];