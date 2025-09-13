'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/portfolio-data';

export default function WorkSection() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <section id="work" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUpVariants}
        >
          <h2 className="mb-6">Projects</h2>
          <p className="text-lg text-text-secondary mb-12 max-w-2xl">
            Take a Look at my Projects.<br/>
            <strong className="text-text-primary">Get to know me better.</strong>
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-background-secondary p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-text-primary flex-1 pr-4">
                  {project.name}
                </h3>
                <div className="flex gap-3 flex-shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent-primary transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-text-secondary mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="font-mono text-xs bg-background-primary px-2 py-1 rounded text-accent-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show more projects link */}
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUpVariants}
        >
          <a
            href="https://github.com/purple-claw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
