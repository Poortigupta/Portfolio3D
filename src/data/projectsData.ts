export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Samadhan – AI-Powered Civic Issue Resolution Platform',
    description: 'Samadhan is an AI-powered civic issue reporting and resolution platform. Citizens submit complaints with media, departments prioritize and assign tasks, and field staff update progress. Role-based dashboards, smart routing, and an integrated knowledge chatbot accelerate response and transparency',
    image: '/Samadhan.png',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'RAG Based Chatbot', 'Tailwind CSS', 'Google Cloud', 'Render','Vercel'],
    githubUrl: 'https://github.com/Poortigupta/Samadhan_Frontend',
    liveUrl: ' https://samadhan-wine.vercel.app/',
    featured: true
  },
  {
    id: '2',
    title: 'Subscriptify - Website Subscription Checker Bot',
    description: 'An AI-powered chatbot that determines whether a website is free, freemium, or requires a paid subscription. Uses natural language processing to analyze website content and provide subscription status.',
    image: '/project-1.jpg',
    technologies: ['Python', 'spaCy', 'BeautifulSoup', 'Requests', 'Streamlit'],
    githubUrl: 'https://github.com/poortigupta/subscriptify',
    liveUrl: 'https://subscriptify-demo.com',
    featured: true
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current weather and forecasts using OpenWeather API. Built with vanilla JavaScript and modern CSS.',
    image: '/project-3.jpg',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'OpenWeather API'],
    githubUrl: 'https://github.com/johndoe/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.com',
    featured: false
  },
  {
    id: '4',
    title: 'Social Media API',
    description: 'RESTful API for a social media platform with user authentication, posts, comments, and likes. Built with Node.js, Express, and PostgreSQL.',
    image: '/project-4.jpg',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Bcrypt'],
    githubUrl: 'https://github.com/johndoe/social-api',
    liveUrl: 'https://social-api-docs.com',
    featured: false
  },
  {
    id: '5',
    title: 'Machine Learning Predictor',
    description: 'A machine learning web app that predicts house prices using Python, Flask, and scikit-learn. Interactive visualizations with Chart.js.',
    image: '/project-5.jpg',
    technologies: ['Python', 'Flask', 'scikit-learn', 'Pandas', 'Chart.js'],
    githubUrl: 'https://github.com/johndoe/ml-predictor',
    liveUrl: 'https://ml-predictor-demo.com',
    featured: true
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'This very portfolio! Built with React, Three.js, and Framer Motion. Features 3D graphics, particle effects, and smooth animations.',
    image: '/project-6.jpg',
    technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/johndoe/portfolio',
    liveUrl: 'https://johndoe-portfolio.com',
    featured: false
  }
];