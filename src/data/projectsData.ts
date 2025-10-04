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
    image: '/Subscriptify.png',
    technologies: ['Python', 'spaCy', 'BeautifulSoup', 'Requests', 'Streamlit'],
    githubUrl: 'https://github.com/Poortigupta/Subscriptify-Web-Subscription-Checker',
    liveUrl: 'https://subscriptify-demo.com',
    featured: false
  },
  {
    id: '3',
    title: 'RAG PDF QA Chatbot',
    description: 'Upload PDFs and chat with their contents—RAG pipeline + modern React UI.',
    image: '/Ragchatbot.png',
    technologies: ['FastAPI', 'LangChain', 'ChromaDB', 'React', 'TypeScript', 'Tailwind CSS','Gemini LLM', 'Render', 'Vercel'],
    githubUrl: 'https://github.com/Poortigupta/RAG-CHATBOT-UI',
    liveUrl: 'https://rag-chatbot-ui-navy.vercel.app/',
    featured: true
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
    githubUrl: 'https://github.com/poortigupta/ml-predictor',
    liveUrl: 'https://ml-predictor-demo.com',
    featured: true
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'This very portfolio! Built with React, Three.js, and Framer Motion. Features 3D graphics, particle effects, and smooth animations.',
    image: '/portfolio.png',
    technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Poortigupta/Portfolio3D',
    liveUrl: 'https://portfoliopoorti-gupta-9842dsjyg.vercel.app/',
    featured: false
  }
];