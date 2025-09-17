import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';
import { educationData } from '@/data/timelineData';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and achievements
          </p>
        </motion.div>

        <Timeline items={educationData} />
      </div>
    </section>
  );
};

export default Education;