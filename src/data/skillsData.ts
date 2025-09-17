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
  SiC
} from 'react-icons/si';
import { FaBrain, FaRocket, FaCloud } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Technical Skills",
    skills: [
      {
        name: 'React',
        icon: SiReact,
        color: '#61DAFB',
        level: 'Advanced'
      },
      {
        name: 'Node.js',
        icon: SiNodedotjs,
        color: '#339933',
        level: 'Intermediate'
      },
      {
        name: 'MongoDB',
        icon: SiMongodb,
        color: '#47A248',
        level: 'Intermediate'
      },
      {
        name: 'Git',
        icon: SiGit,
        color: '#F05032',
        level: 'Advanced'
      },
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        color: '#06B6D4',
        level: 'Advanced'
      },
      {
        name: 'Express.js',
        icon: SiExpress,
        color: '#000000',
        level: 'Intermediate'
      }
    ]
  },
  {
    title: "Areas of Interest",
    skills: [
      {
        name: 'Full-Stack AI',
        icon: FaBrain,
        color: '#FF6B6B',
        level: 'Advanced'
      },
      {
        name: 'Web Development',
        icon: SiReact,
        color: '#4ECDC4',
        level: 'Advanced'
      },
      {
        name: 'DevOps',
        icon: SiDocker,
        color: '#45B7D1',
        level: 'Intermediate'
      },
      {
        name: 'Cloud-Native ML',
        icon: FaCloud,
        color: '#96CEB4',
        level: 'Intermediate'
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
        level: 'Advanced'
      },
      {
        name: 'Python',
        icon: SiPython,
        color: '#3776AB',
        level: 'Advanced'
      },
      {
        name: 'C++',
        icon: SiCplusplus,
        color: '#00599C',
        level: 'Intermediate'
      },
      {
        name: 'C',
        icon: SiC,
        color: '#A8B9CC',
        level: 'Intermediate'
      }
    ]
  }
];