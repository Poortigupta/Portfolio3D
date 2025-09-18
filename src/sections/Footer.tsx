import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/Poortigupta',
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/poorti-gupta-b11529282/',
    },
    {
      name: 'Twitter',
      icon: FiTwitter,
      url: 'https://twitter.com/PoortiGupta',
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:poortigupta2309@email.com',
    },
  ];

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-6"
        >
          {/* Logo/Name */}
          <div className="text-2xl font-bold gradient-text">
            Poorti Gupta
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass hover-glow transition-smooth"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="text-center text-muted-foreground">
            <p className="mb-2">Let's build something amazing together!</p>
            {/* <p className="text-sm"></p> */}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground pt-6 border-t border-border w-full">
            <p>© 2024 Poorti Gupta. All rights reserved.</p>
            <p className="mt-1">Built with React, Three.js, and lots of ☕</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;