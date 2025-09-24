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
    title: 'Intern',
    subtitle: 'AI Engineer Intern',
    institution: 'AIPlanTech, Jodhpur',
    date: 'June 2025 - July 2025',
    description: ['Leading Agile SaaS development team',
      'Optimizing face recognition systems',
      'Gaining hands-on experience in machine learning and Automating scalable cloud pipelines'
      
    ]
  },
  {
    id: 'exp-2',
    type: 'experience',
    title: 'Open Source Contributor',
    subtitle: 'Contributor',
    institution: 'GirlScript Summer of Code (GSSoC)',
    date: '2024',
    description: [
      'Enhancing UI/UX with modern React.js optimizations',
      'Contributed in boosting web performance and load efficiency',
      'Contributing to open-source through PRs and reviews'
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
    title: 'Coordinator',
    subtitle: 'Sports Festival',
    institution: 'Khelo MBM Fest, MBM Jodhpur',
    date: '2024',
    description: [
      'Coordinating KheloMBM’24 sports fest with 300+ participants',
      'Representing CSE department in inter-department events',
      'Winning a gold medal in cricket competition'
    ]
  },
    {
    id: 'exp-5',
    type: 'experience',
    title: 'Coordinator',
    subtitle: 'Technical Events',
    institution: 'Techkriti’23, MBM University',
    date: '2023',
    description: [
      'Coordinating Techkriti’23 promotions and logistics',
      'Leading an 8-member team for event execution',
      'Driving 22% growth in participation and engagement'
    ]
  },

  
];