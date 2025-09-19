import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '@/contexts/ThemeContext';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass rounded-none"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer"
            aria-label="Go to home"
          >
            <span className="text-3xl md:text-4xl leading-none">
              <span className="align-middle">&lt; </span>
              <span className="font-signature">Poorti Gupta</span>
              <span className="align-middle"> / &gt;</span>
            </span>
          </motion.button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium transition-smooth hover:text-accent ${
                  activeSection === id ? 'text-accent' : 'text-foreground/80'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              onClick={toggleTheme}
              className="p-2 rounded-full glass hover-glow transition-smooth"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <BsMoon size={20} /> : <BsSun size={20} />}
            </motion.button>

            <MobileMenu
              navItems={navItems}
              activeSection={activeSection}
              onNavigate={scrollToSection}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;