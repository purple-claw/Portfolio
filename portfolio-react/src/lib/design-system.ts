import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

// Animation utilities
export const fadeInUpAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const staggerAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Responsive breakpoints
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1200px',
  large: '1560px',
} as const;

// Design tokens
export const designTokens = {
  colors: {
    background: {
      primary: '#0a0a0a',
      secondary: '#161616',
      tertiary: '#0a0a0a',
    },
    text: {
      primary: '#ededed',
      secondary: '#8892b0',
    },
    accent: {
      primary: '#64ffda',
      secondary: '#8892b0',
      hover: 'rgba(100, 255, 218, 0.1)',
    },
  },
  fonts: {
    sans: 'Inter, sans-serif',
    mono: 'Fira Code, monospace',
  },
  spacing: {
    section: '6rem',
    container: '2rem',
  },
} as const;
