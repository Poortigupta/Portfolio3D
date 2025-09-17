import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

interface MobileMenuProps {
  navItems: Array<{ id: string; label: string }>;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navItems, activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-full glass hover-glow transition-smooth"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[80vw] glass z-50 p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold gradient-text">Navigation</h2>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              <nav className="space-y-4">
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => handleNavigate(id)}
                    className={`block w-full text-left p-3 rounded-lg transition-smooth ${
                      activeSection === id
                        ? 'bg-accent text-accent-foreground'
                        : 'hover:bg-muted text-foreground/80'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;