'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const roles = [
    "Software Developer(Data, Full-Stack, Cloud)",
    "LLM Developer & AI & ML Researcher"
  ];

  // Typing animation state
  const [firstGreeting, setFirstGreeting] = useState('');
  const [secondGreeting, setSecondGreeting] = useState('');
  const [showFirstCursor, setShowFirstCursor] = useState(true);
  const [showSecondCursor, setShowSecondCursor] = useState(false);

  const firstText = "Hi There,";
  const secondText = "Welcome to my Space,";

  useEffect(() => {
    let firstTimeout: NodeJS.Timeout;
    let secondTimeout: NodeJS.Timeout;

    // Type first greeting
    const typeFirstGreeting = () => {
      let i = 0;
      const typing = () => {
        if (i < firstText.length) {
          setFirstGreeting(firstText.slice(0, i + 1));
          i++;
          firstTimeout = setTimeout(typing, 100);
        } else {
          setShowFirstCursor(false);
          // Start second greeting after a delay
          setTimeout(() => {
            setShowSecondCursor(true);
            typeSecondGreeting();
          }, 300);
        }
      };
      typing();
    };

    // Type second greeting
    const typeSecondGreeting = () => {
      let i = 0;
      const typing = () => {
        if (i < secondText.length) {
          setSecondGreeting(secondText.slice(0, i + 1));
          i++;
          secondTimeout = setTimeout(typing, 100);
        } else {
          setShowSecondCursor(false);
        }
      };
      typing();
    };

    // Start typing after component mounts
    const startDelay = setTimeout(typeFirstGreeting, 500);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
    };
  }, []);

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

        @keyframes typing-cursor {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .typing-cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background-color: hsla(18, 100%, 70%, 0.80);
          margin-left: 2px;
          animation: typing-cursor 1s infinite;
        }

        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes text-glow {
          0%, 100% { 
            text-shadow: 0 0 20px hsla(31, 100%, 70%, 0.50);
          }
          50% { 
            text-shadow: 0 0 30px #FF8000, 0 0 40px hsla(26, 100%, 70%, 0.60);
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
          background: linear-gradient(135deg, #FF8C00 0%, #FF8C00 80%, #FFD700 95%, #FF4500 100%);
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
          color: #FF8000 !important;
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
          background: linear-gradient(135deg, hsla(166, 100%, 70%, 0.00), hsla(217, 91%, 60%, 0.00));
          border: 2px solid hsla(23, 98%, 54%, 0.71);
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
          transition: left 0.5s easAspiring Software Engineere;
        }

        .hero-button:hover::before {
          left: 100%;
        }

        .hero-button:hover {
          background: linear-gradient(135deg, hsla(166, 100%, 70%, 0.01), hsla(217, 91%, 60%, 0.01));
          border-color: #FF8000;
          transform: translateY(-5px) scale(1.05);
          box-shadow: 
            0 25px 50px #ed82488e,
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
            {/* Typing Greeting Animation */}
            <div style={{
              marginBottom: '1rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              <motion.h2
                variants={greetingVariants}
                className="greeting-text"
                style={{
                  color: 'hsla(160, 17%, 93%, 0.94)',
                  fontSize: '1.45rem',
                  fontWeight: '650',
                  marginBottom: '1rem',
                  textAlign: 'left',
                  lineHeight: 1.4,
                }}
              >
                {firstGreeting}
                {showFirstCursor && <span className="typing-cursor"></span>}
              </motion.h2>
              <motion.h2
                variants={greetingVariants}
                className="greeting-text"
                style={{
                  color: 'hsla(180, 3%, 94%, 0.94)',
                  fontSize: '1.45rem',
                  fontWeight: '650',
                  textAlign: 'left',
                  lineHeight: 1.4,
                }}
              >
                {secondGreeting}
                {showSecondCursor && <span className="typing-cursor"></span>}
              </motion.h2>
            </div>
            
            <motion.div 
              variants={titleVariants}
              className="mb-4 hero-main-title"
              style={{ 
                marginBottom: '1rem',
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
                  lineHeight: 1.2,
                  marginBottom: '0.5rem',
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
                marginBottom: '1rem',
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
                    fontSize: 'clamp(1.4rem, 2.5vw, 1.4rem)',
                    fontWeight: '650',
                    color: 'rgba(255, 255, 255, 0.8)',
                    marginBottom: '0.5rem',
                    cursor: 'default',
                    listStyle: 'none',
                    textAlign: 'left',
                    display: 'block',
                    width: '100%',
                    maxWidth: '600px',
                    lineHeight: 1.4,
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
                fontSize: 'clamp(1.3rem, 2vw, 1.2rem)',
                color: 'hsla(0, 0%, 100%, 0.69)',
                maxWidth: '650px',
                fontWeight: 350,
                lineHeight: 1.5,
                marginTop: '1rem',
                marginBottom: '2rem',
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
                  fontSize: '1.15rem',
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
