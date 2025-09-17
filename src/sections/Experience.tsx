import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';
import { experienceData } from '@/data/timelineData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience and work history
          </p>
        </motion.div>

        <Timeline items={experienceData} />
      </div>
    </section>
  );
};

export default Experience;