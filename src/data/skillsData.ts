import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiNodedotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiGit, 
  SiDocker, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiExpress,
  SiTensorflow,
  SiKubernetes,
  SiAmazonaws,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
  SiPostman,
  SiFramer,
  SiMysql,
  SiGooglecloud,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiScikitlearn,
  SiPytorch
} from 'react-icons/si';
import { FaBrain, FaRocket, FaCloud, FaDatabase } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  // level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Areas of Interest",
    skills: [
      {
        name: 'Full-Stack AI',
        icon: FaBrain,
        color: '#FF6B6B',
      },
      {
        name: 'Web Development',
        icon: SiReact,
        color: '#4ECDC4',
      },
      {
        name: 'DevOps',
        icon: SiDocker,
        color: '#45B7D1',
      }
      // Optionally add: { name: 'Cloud-Native ML', icon: FaCloud, color: '#96CEB4' }
    ]
  },
  {
    title: "Web Technologies",
    skills: [
      {
        name: 'React',
        icon: SiReact,
        color: '#61DAFB',
        
      },
      {
        name: 'Node.js',
        icon: SiNodedotjs,
        color: '#339933',
       
      },
      {
        name: 'MongoDB',
        icon: SiMongodb,
        color: '#47A248',
       
      },
      {
        name: 'Git/GitHub',
        icon: SiGit,
        color: '#F05032',
        
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: '#06B6D4',
       
      },
      {
        name: 'Express.js',
        icon: SiExpress,
        color: '#000000',
        
      }
      ,
      {
        name: 'HTML',
        icon: SiHtml5,
        color: '#E34F26',
      },
      {
        name: 'CSS',
        icon: SiCss3,
        color: '#1572B6',
      },
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        color: '#000000',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#3178C6',
      },
      {
        name: 'Framer Motion',
        icon: SiFramer,
        color: '#0055FF',
      },
      {
        name: 'shadcn/ui',
        icon: FaRocket,
        color: '#000000',
      },
      {
        name: 'Postman',
        icon: SiPostman,
        color: '#FF6C37',
      }
    ]
  },

  {
    title: "Programming Languages",
    skills: [
      {
        name: 'JavaScript',
        icon: SiJavascript,
        color: '#F7DF1E',

      },
      {
        name: 'Python',
        icon: SiPython,
        color: '#3776AB',

      },
      {
        name: 'C++',
        icon: SiCplusplus,
        color: '#00599C',

      },
      {
        name: 'C',
        icon: SiC,
        color: '#A8B9CC',
      }
    ]
  },
  {
    title: "Databases & Cloud",
    skills: [
      {
        name: 'MySQL',
        icon: SiMysql,
        color: '#F7DF1E',

      },
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        color: '#336791',

      },
      {
        name: 'PineconeDB',
        icon: FaDatabase,
        color: '#10B981',
      },
      {
        name: 'FAISSDB',
        icon: FaDatabase,
        color: '#6366F1',
      },
      {
        name: 'ChromaDB',
        icon: FaDatabase,
        color: '#6366F1',
      },
      {
        name: 'Google Cloud',
        icon: SiGooglecloud,
        color: '#4285F4',
      }
    ]
  }
  ,
  {
    title: "Machine Learning",
    skills: [
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'Matplotlib', icon: FaBrain, color: '#11557C' },
      { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
      { name: 'scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
    ]
  }
];