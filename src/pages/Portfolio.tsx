import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Education from '@/sections/Education';
import Experience from '@/sections/Experience';
import Footer from '@/sections/Footer';

const Portfolio = () => {
  return (
    <div className="relative min-h-screen">
      {/* Particles Background */}
      <ParticlesBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;