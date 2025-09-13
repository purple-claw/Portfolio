'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className = '' }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-accent-primary z-50 origin-left ${className}`}
      style={{ scaleX }}
    />
  );
}

interface ParallaxElementProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxElement({ children, offset = 50, className = '' }: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface MagneticElementProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function MagneticElement({ children, className = '', intensity = 0.3 }: MagneticElementProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * intensity;
    const deltaY = (e.clientY - centerY) * intensity;

    ref.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function FadeInWhenVisible({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  y = 20,
  className = '' 
}: FadeInWhenVisibleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as const
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggeredAnimationProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function StaggeredAnimation({ 
  children, 
  className = '', 
  staggerDelay = 0.1 
}: StaggeredAnimationProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

interface ScaleOnHoverProps {
  children: React.ReactNode;
  scale?: number;
  className?: string;
}

export function ScaleOnHover({ children, scale = 1.05, className = '' }: ScaleOnHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: scale * 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  amplitude?: number;
}

export function FloatingElement({ 
  children, 
  className = '', 
  duration = 3,
  amplitude = 10 
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

interface TypewriterEffectProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TypewriterEffect({ 
  text, 
  className = '', 
  delay = 0,
  speed = 0.1 
}: TypewriterEffectProps) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: speed, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
