'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  const roles = [
    "Aspiring Software Engineer",
    "LLM Developer & AI & ML Researcher"
  ];

  const handleWorkClick = () => {
    document.getElementById('work')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Now I Updated the enhanced animation variants with ultra-smooth transitions and its fucking awesomeeeeee....!
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
        ease: "easeOut" as const,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const greetingVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        type: "spring" as const,
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        type: "spring" as const,
        stiffness: 80,
        damping: 18,
      },
    },
  };

  const roleVariants = {
    hidden: { 
      opacity: 0, 
      x: -40,
      y: 20,
      scale: 0.9,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.0,
        delay: i * 0.08 + 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        type: "spring" as const,
        stiffness: 110,
        damping: 14,
      },
    }),
  };

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.1,
        delay: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        type: "spring" as const,
        stiffness: 90,
        damping: 16,
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.3,
        delay: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      {/* Global Styles */}
      <style jsx global>{`
        /* Force remove any decorative elements from h2 tags */
        h2::before {
          display: none !important;
          content: none !important;
        }

        h2::after {
          display: none !important;
          content: none !important;
        }

        .greeting-text::before,
        .greeting-text::after {
          display: none !important;
          content: none !important;
        }

        .role-text::before,
        .role-text::after {
          display: none !important;
          content: none !important;
        }

        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes text-glow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
          }
          50% { 
            text-shadow: 0 0 30px rgba(100, 255, 218, 0.8), 0 0 40px rgba(100, 255, 218, 0.6);
          }
        }

        @keyframes float-gentle {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-10px) scale(1.02);
          }
        }

        * {
          will-change: transform, opacity;
        }

        .hero-title {
          background: linear-gradient(135deg, #64ffda, #3b82f6, #9333ea);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 100%;
          animation: gradient-flow 4s ease infinite;
          will-change: background-position;
        }

        .role-text {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, color;
          animation: float-gentle 6s ease-in-out infinite;
        }

        .role-text:hover {
          transform: translateX(15px) scale(1.02);
          color: #64ffda !important;
          text-shadow: 0 0 20px rgba(100, 255, 218, 0.4);
        }

        .greeting-text {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        .greeting-text:hover {
          transform: translateY(-2px) scale(1.01);
          text-shadow: 0 0 15px rgba(100, 255, 218, 0.3);
        }

        .hero-description {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        .hero-description:hover {
          transform: translateY(-2px);
          color: rgba(255, 255, 255, 0.9) !important;
        }

        .hero-button {
          background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(59, 130, 246, 0.1));
          border: 2px solid rgba(100, 255, 218, 0.3);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, background, border-color, box-shadow;
          position: relative;
          overflow: hidden;
        }

        .hero-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, hsla(0, 0%, 100%, 0.00), transparent);
          transition: left 0.5s ease;
        }

        .hero-button:hover::before {
          left: 100%;
        }

        .hero-button:hover {
          background: linear-gradient(135deg, rgba(100, 255, 218, 0.25), rgba(59, 130, 246, 0.25));
          border-color: rgba(100, 255, 218, 0.8);
          transform: translateY(-5px) scale(1.05);
          box-shadow: 
            0 25px 50px rgba(100, 255, 218, 0.25),
            0 0 50px rgba(100, 255, 218, 0.1);
        }

        .hero-button:active {
          transform: translateY(-2px) scale(1.02);
          transition: all 0.1s ease;
        }

        .hero-container {
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .hero-main-title {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        .hero-main-title:hover {
          transform: translateY(-3px) scale(1.01);
          filter: drop-shadow(0 10px 20px rgba(100, 255, 218, 0.2));
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <section id="home" className="section min-h-screen flex items-center">
        <div className="container">
          <motion.div
            className="max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          > 
            {/* Static Greeting with Smooth Animations */}
            <div style={{
              marginBottom: '2rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              <motion.h2
                variants={greetingVariants}
                className="greeting-text"
                style={{
                  color: 'rgba(234, 240, 238, 1)',
                  fontSize: '1.45rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  textAlign: 'left',
                }}
              >
                Hi There,
              </motion.h2>
              <motion.h2
                variants={greetingVariants}
                className="greeting-text"
                style={{
                  color: 'rgba(238, 239, 239, 1)',
                  fontSize: '1.45rem',
                  fontWeight: '700',
                  textAlign: 'left',
                }}
              >
                Welcome to my Space,
              </motion.h2>
            </div>
            
            <motion.div 
              variants={titleVariants}
              className="mb-4 hero-main-title"
              style={{ 
                marginBottom: '2rem',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <h1 
                className="text-hero font-bold leading-tight hero-title"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 'bold',
                  lineHeight: 1.1,
                  marginBottom: '1rem',
                  textAlign: 'left',
                }}
              >
                I'm Nitin Sri
              </h1>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              className="mb-6"
              style={{ 
                marginBottom: '2.5rem',
                textAlign: 'left',
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}
            >
              {roles.map((role, index) => (
                <motion.h2
                  key={role}
                  custom={index}
                  variants={roleVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-section text-text-secondary font-semibold leading-tight role-text"
                  style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                    fontWeight: '600',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '0.8rem',
                    cursor: 'default',
                    listStyle: 'none',
                    textAlign: 'left',
                    display: 'block',
                    width: '100%',
                    maxWidth: '600px',
                  }}
                >
                  {role}
                </motion.h2>
              ))}
            </motion.div>
            
            <motion.p
              variants={descriptionVariants}
              className="text-lg text-text-secondary mb-8 max-w-2xl leading-relaxed hero-description"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '700px',
                lineHeight: 1.7,
                marginTop: '2rem',
                marginBottom: '3rem',
                marginLeft: '0',
                marginRight: 'auto',
                textAlign: 'left',
                padding: '0',
              }}
            >
              I turn coffee into code, debug more than I develop, and somehow convince machines to do my bidding. 
              Currently specializing in teaching AI models to be smarter than me (low bar, I know) while 
              occasionally pretending I understand why my code works in production but fails in demos.
            </motion.p>
            
            <motion.div 
              variants={buttonVariants}
              className="mt-8"
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                textAlign: 'left',
              }}
            >
              <button
                onClick={handleWorkClick}
                className="hero-button text-base font-medium"
                style={{
                  padding: '0.75rem 1rem',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'white',
                  cursor: 'pointer',
                  borderRadius: '2.5rem',
                  backdropFilter: 'blur(5px)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'inline-block',
                }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>
                  Check out my work!
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
