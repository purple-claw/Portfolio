'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio-data';
import { Github, Linkedin, Award, Code, Mail } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    'Python', 'JavaScript/TypeScript', 'React & Next.js', 'Node.js & Express',
    'AWS & Azure', 'Docker & Kubernetes', 'PyTorch & TensorFlow', 'Cybersecurity Tools'
  ];

  const socialPlatforms = [
    {
      name: 'GitHub',
      icon: Github,
      iconColor: 'text-white',
      textColor: 'text-white',
      url: 'https://github.com/purple-claw',
      glowColor: 'rgba(255, 255, 255, 0.5)',
      borderColor: 'border-white/15',
      hoverBorder: 'hover:border-white/60',
      description: 'Open Source'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      iconColor: 'text-blue-500',
      textColor: 'text-white',
      url: 'https://linkedin.com/in/yourusername',
      glowColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'border-blue-400/15',
      hoverBorder: 'hover:border-blue-400/60',
      description: 'Network'
    },
    {
      name: 'LeetCode',
      icon: Code,
      iconColor: 'text-yellow-500',
      textColor: 'text-white',
      url: 'https://leetcode.com/nitin_016',
      glowColor: 'rgba(255, 193, 7, 0.5)',
      borderColor: 'border-yellow-400/15',
      hoverBorder: 'hover:border-yellow-400/60',
      description: 'Coding'
    },
    {
      name: 'Credly',
      icon: Award,
      iconColor: 'text-orange-500',
      textColor: 'text-white',
      url: 'https://credly.com/users/yourusername',
      glowColor: 'rgba(147, 51, 234, 0.5)',
      borderColor: 'border-purple-400/15',
      hoverBorder: 'hover:border-purple-400/60',
      description: 'Credentials'
    },
    {
      name: 'ProtonMail',
      icon: Mail,
      iconColor: 'text-blue-500',
      textColor: 'text-white',
      url: 'https://credly.com/users/yourusername',
      glowColor: 'hsla(241, 71%, 69%, 0.57)',
      borderColor: 'border-purple-400/15',
      hoverBorder: 'hover:border-purple-400/60',
      description: 'Developers'
    },
    {
      name: 'Mail',
      icon: Mail,
      iconColor: 'text-red-500',
      textColor: 'text-white',
      url: 'https://credly.com/users/yourusername',
      glowColor: 'rgba(240, 79, 15, 0.53)',
      borderColor: 'border-purple-400/15',
      hoverBorder: 'hover:border-purple-400/60',
      description: 'Contact'
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
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
        
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUpVariants}
          >
            <div className="space-y-6 text-text-secondary text-lg">
              <p>
                By day, I architect and build software that (hopefully) doesn't keep my users up at night, unless they're binge-using its brilliantly intuitive features. 
                By night, I moonlight as a digital burglar, professionally breaking into the very systems I build. This isn't an identity crisis.
                It's a rigorous quality assurance process.
              </p>
              <p>
                My core mission is to develop intelligent, scalable applications that are so secure, they’re frankly a little boring for people like me to test. 
                I have a particular affinity for AI and Machine Learning, where I focus on the unglamorous, critical work of turning raw data into something that doesn’t just look smart in a lab, 
                but actually functions with ruthless efficiency in the real world.
              </p>
              <p>
                I believe in writing code that is resilient, designing systems that are defensible, 
                and delivering solutions that are so committed to doing their job, 
                they’ve basically eliminated the need for my after-hours pentesting alter-ego. (A guy can dream, right?)
              </p>
              <p>
                Here are some technologies I've been working with recently:
              </p>
              <ul className="custom-list grid grid-cols-2 gap-2 text-base">
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
          
          {/* Modern Animated Social Stack */}
          <motion.div
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto lg:mx-0">
              {socialPlatforms.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      relative group p-6 rounded-2xl 
                      bg-transparent backdrop-blur-sm 
                      border-2 ${platform.borderColor} ${platform.hoverBorder}
                      transition-all duration-300 ease-out
                      hover:scale-105 hover:shadow-2xl
                      active:scale-95
                      aspect-square flex flex-col items-center justify-center
                    `}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      boxShadow: `0 0 0 0 ${platform.glowColor}`,
                      transition: 'all 0.3s ease-out, box-shadow 0.3s ease-out'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 30px 5px ${platform.glowColor}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 0 ${platform.glowColor}`;
                    }}
                  >
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Floating Animation Border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border border-accent-primary/20 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center space-y-3">
                      <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300 border border-white/10 group-hover:border-white/20">
                        <IconComponent className={`w-6 h-6 ${platform.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      
                      <div className="text-center">
                        <h3 className={`text-base font-semibold ${platform.textColor} mb-1`}>{platform.name}</h3>
                        <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                          {platform.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-all duration-700 group-hover:translate-x-full" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
