import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { TimelineItem } from '@/data/timelineData';

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-start"
          >
            {/* Timeline Dot */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16 mr-6">
              <div className={`w-4 h-4 rounded-full border-4 border-background ${
                item.current ? 'bg-accent' : 'bg-muted'
              }`}></div>
              {item.current && (
                <div className="absolute w-6 h-6 bg-accent/20 rounded-full animate-pulse"></div>
              )}
            </div>

            {/* Timeline Content */}
            <div className="flex-1 bg-card border border-border rounded-xl p-6 hover-glow transition-smooth">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-accent font-medium mb-2">
                    {item.subtitle}
                  </p>
                </div>
                
                <div className="flex flex-col lg:items-end text-sm text-muted-foreground">
                  <div className="flex items-center mb-1">
                    <FiCalendar className="mr-1" size={14} />
                    {item.date}
                    {item.current && (
                      <span className="ml-2 px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="mr-1" size={14} />
                    {item.institution}
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex} className="text-muted-foreground flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;