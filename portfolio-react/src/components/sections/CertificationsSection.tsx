'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '@/data/portfolio-data';
import { useRef } from 'react';

export default function CertificationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress for the timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress to height percentage
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <section id="certifications" className="section-work">
      <div className="container-work">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUpVariants}
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Testimonials for my hard work and skills.<br/>
            <strong className="text-accent-primary">My proud achievements.</strong>
          </p>
        </motion.div>

        <div className="timeline-wrapper" ref={containerRef}>
          {/* Progress Line Background */}
          <div className="work-progress"></div>
          
          {/* Animated Progress Line */}
          <motion.div 
            className="work-progress-animated"
            style={{ height: progressHeight }}
          ></motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="w-full"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="timeline-left">
                  <div className="left-wrapper">
                    <div className="work-name">{cert.name}</div>
                    <div className="tags-wrapper">
                      {cert.technologies.slice(0, 3).map((tech, techIndex) => (
                        <div 
                          key={techIndex} 
                          className="tags"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="see-this-project"
                    >
                      <div className="text-block-2">Issued by {cert.issuer}</div>
                    </a>
                  </div>
                </div>
                
                <div className="timeline-center">
                  <div className="circle"></div>
                </div>
                
                <div className="timeline-right">
                  <div className="project-image-wrapper">
                    <div className="project-image-placeholder">
                      <Award size={20} className="text-accent-primary mb-2" />
                      <p className="text-sm text-text-secondary text-center">Certificate</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Link */}
          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <a
              href="https://www.credly.com/users/sri-nithin-juttuka.7df42c6f"
              target="_blank"
              rel="noopener noreferrer"
              className="see-this-project inline-block px-6 py-3 border border-accent-primary rounded-lg hover:bg-accent-primary hover:text-background-primary transition-all duration-300"
            >
              <div className="text-block-2">View All Certifications</div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
