import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projectsData } from '@/data/projectsData';
import { Button } from '@/components/ui/button';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-muted/10 via-background to-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Symmetric Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
              className="group perspective-1000 h-full"
            >
              <motion.div 
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-card to-background border border-border rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-accent/10 transition-all duration-500 transform-gpu flex flex-col h-full"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 md:h-56 w-full">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Floating Featured Badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="absolute top-4 right-4 px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-bold rounded-full backdrop-blur-sm shadow-lg"
                    >
                      ✨ FEATURED
                    </motion.div>
                  )}
                  
                  {/* Overlay with Quick Actions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="p-3 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:border-accent transition-colors"
                    >
                      <FiGithub size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="p-3 bg-accent text-accent-foreground rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                      <FiExternalLink size={20} />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <motion.h3 
                    className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Animated Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 + 0.5 }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "hsl(var(--accent))",
                          color: "hsl(var(--accent-foreground))"
                        }}
                        className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full border border-border hover:border-accent transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Interactive Footer */}
                  <motion.div 
                    className="flex gap-3 mt-auto"
                    whileHover={{ y: -2 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn border-2 hover:border-accent"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FiGithub className="mr-2" />
                      </motion.div>
                      View Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent group/btn"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiExternalLink className="mr-2" />
                      </motion.div>
                      Live Demo
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;