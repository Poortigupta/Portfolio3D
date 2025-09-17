import { motion } from 'framer-motion';
import { FiArrowDown, FiDownload } from 'react-icons/fi';
import Scene3D from '@/components/Scene3D';
import TypingAnimation from '@/components/TypingAnimation';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // In a real app, this would download the actual resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This should be a real PDF file
    link.download = 'Poorti_Gupta_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-6xl lg:text-7xl font-bold mb-4">
                Hi, I'm <span className="gradient-text">Poorti</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-3xl lg:text-4xl font-semibold mb-6"
            >
              <TypingAnimation
                texts={[
                  "A Creative Software Developer",
                  "Web Developer",
                  "AI Enthusiast", 
                  "Open Source Contributor"
                ]}
                speed={80}
                className="text-foreground"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              I build immersive and user-friendly digital experiences that bridge the gap between design and technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-hero-gradient hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 group"
              >
                View My Work
                <FiArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button
                onClick={downloadResume}
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-96 lg:h-[500px] w-full"
          >
            <Scene3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;