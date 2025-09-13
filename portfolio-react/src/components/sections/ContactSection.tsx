'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Award } from 'lucide-react';
import { personalInfo } from '@/data/portfolio-data';

export default function ContactSection() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  const socialLinks = [
    {
      href: personalInfo.socialLinks.github,
      icon: Github,
      label: 'GitHub',
      external: true,
    },
    {
      href: personalInfo.socialLinks.linkedin,
      icon: Linkedin,
      label: 'LinkedIn',
      external: true,
    },
    {
      href: `mailto:${personalInfo.protonEmail}`,
      icon: Mail,
      label: 'ProtonMail',
      external: false,
    },
    {
      href: personalInfo.socialLinks.credly,
      icon: Award,
      label: 'Credly',
      external: true,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <h2 className="mb-8">Let's code together</h2>
          </motion.div>

          <motion.p
            className="text-lg text-text-secondary mb-8 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            If you need a modern and powerful AI, Web, Security solutions for your business,<br/>
            startup or yourself, I am available for work.
          </motion.p>
          
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn inline-block text-lg px-8 py-4"
            >
              Email me
            </a>
          </motion.div>
          
          <motion.div
            className="flex justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {socialLinks.map(({ href, icon: Icon, label, external }) => (
              <motion.a
                key={label}
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="group flex flex-col items-center gap-2 text-text-secondary hover:text-accent-primary transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon 
                  size={24} 
                  className="group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="text-sm font-medium">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
