import { motion } from 'framer-motion';
import { skillsData } from '@/data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                <h3 className="text-2xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100 
                    }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 hover:scale-105">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className="p-3 rounded-xl bg-muted/50"
                        >
                          <skill.icon 
                            size={32} 
                            style={{ color: skill.color }}
                          />
                        </motion.div>
                        
                        <h4 className="font-medium text-foreground text-sm">
                          {skill.name}
                        </h4>
                        
                        {/* Skill Level Indicator */}
                        <div className="flex space-x-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                i < (skill.level === 'Advanced' ? 3 : skill.level === 'Intermediate' ? 2 : 1)
                                  ? 'bg-accent' 
                                  : 'bg-muted-foreground/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Level Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="absolute -top-2 -right-2 px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        {skill.level}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;