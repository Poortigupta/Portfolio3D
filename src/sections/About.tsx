import { motion } from 'framer-motion';
import AboutAnimation from '@/components/AboutAnimation';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start h-80"
          >
            <div className="w-full h-full">
              <AboutAnimation />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground">
              “The best algorithm I follow, keep hustling..”
            </h3>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
               CS student (Top 10) | 10+ AI & full-stack projects | Skilled in DSA, MERN, AI/ML, Agile + Jira | Writing clean, maintainable, scalable code.
              </p>
              
              <p>
                Focused on building AI-driven applications, full-stack solutions, and scalable systems that create real-world impact
, with projects recognized among the top 5 at a college level  workshop.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="font-semibold text-accent mb-2">Location</h4>
                <p className="text-muted-foreground">Jodhpur, Rajasthan</p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Status</h4>
                <p className="text-muted-foreground">Available for Opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;