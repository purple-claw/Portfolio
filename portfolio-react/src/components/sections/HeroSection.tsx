'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const handleWorkClick = () => {
    document.getElementById('work')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="container">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={itemVariants}
            className="text-accent-primary font-mono text-lg mb-4 font-normal"
          >
            Hi There,
          </motion.h2>
          
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="text-hero font-bold leading-tight">
              I'm{' '}
              <span className="text-accent-primary">Nithin Sri</span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-section text-text-secondary font-semibold leading-tight">
              Associate Software Developer
            </h2>
            <h2 className="text-section text-text-secondary font-semibold leading-tight">
              Freelance Penetration Tester
            </h2>
            <h2 className="text-section text-text-secondary font-semibold leading-tight">
              AI&ML Researcher
            </h2>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-text-secondary mb-8 max-w-2xl leading-relaxed"
          >
            I write code, break things, and then fix them (sometimes)
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-8">
            <button
              onClick={handleWorkClick}
              className="btn text-base font-medium"
            >
              Check out my work!
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
