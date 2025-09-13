'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio-data';

export default function AboutSection() {
  const skills = [
    'Python', 'JavaScript/TypeScript', 'React & Next.js', 'Node.js & Express',
    'AWS & Azure', 'Docker & Kubernetes', 'PyTorch & TensorFlow', 'Cybersecurity Tools'
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUpVariants}
        >
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <div className="space-y-6 text-text-secondary">
              <p>
                I'm a passionate software developer and cybersecurity enthusiast with a strong 
                background in AI & Machine Learning research. My journey in technology spans 
                across multiple domains, from building scalable web applications to conducting 
                penetration testing and developing AI-driven solutions.
              </p>
              <p>
                Currently working as an {personalInfo.title}, I specialize in creating 
                robust, secure, and user-friendly applications. My freelance penetration testing 
                work has given me deep insights into cybersecurity, which I apply to build more 
                secure software solutions.
              </p>
              <p>
                I actively research Artificial Intelligence and Machine Learning, focusing on 
                integrating advanced ML models into real-world software applications. My work 
                emphasizes not just model development but also optimizing data collection and 
                preprocessing to ensure meaningful and actionable insights.
              </p>
              <p>
                Here are some technologies I've been working with recently:
              </p>
              <ul className="custom-list grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1] as const
                    }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            className="flex justify-center lg:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <div className="relative max-w-xs group">
              {/* Main image container */}
              <div className="relative z-10 bg-background-secondary w-64 h-64 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-text-secondary">Profile Image</span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              {/* Decorative border */}
              <div className="absolute top-4 left-4 w-64 h-64 border-2 border-accent-primary rounded-lg -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
