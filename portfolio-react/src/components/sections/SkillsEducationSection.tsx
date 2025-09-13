'use client';

import { motion } from 'framer-motion';
import { skills, education } from '@/data/portfolio-data';

export default function SkillsEducationSection() {
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

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  const skillCategories = [
    { title: 'Programming Languages', items: skills.programmingLanguages },
    { title: 'Frameworks', items: skills.frameworks },
    { title: 'Libraries', items: skills.libraries },
    { title: 'Security & Testing', items: skills.securityTesting },
    { title: 'Cloud & DevOps', items: skills.cloudDevOps },
    { title: 'Development', items: skills.development },
  ];

  return (
    <>
      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <motion.h2
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            Skills
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={skillItemVariants}
                className="bg-background-secondary p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        ease: [0.25, 0.1, 0.25, 1] as const
                      }}
                      className="font-mono text-sm bg-background-primary px-3 py-1 rounded text-accent-primary border border-accent-primary/20 hover:border-accent-primary/50 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section bg-background-secondary">
        <div className="container">
          <motion.h2
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            Education
          </motion.h2>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={skillItemVariants}
                className="bg-background-primary p-8 rounded-lg border border-accent-primary/20 hover:border-accent-primary/40 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {edu.institution}
                    </h3>
                    <h4 className="text-lg font-semibold text-accent-primary mb-3">
                      {edu.degree}
                    </h4>
                  </div>
                  <div className="text-right">
                    {edu.cgpa && (
                      <div className="text-accent-primary font-mono font-semibold">
                        CGPA: {edu.cgpa}
                      </div>
                    )}
                    {edu.percentage && (
                      <div className="text-accent-primary font-mono font-semibold">
                        {edu.percentage}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
