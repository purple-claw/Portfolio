import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        'background-primary': '#0a0a0a',
        'background-secondary': '#161616',
        'background-tertiary': '#0a0a0a',
        
        // Text colors
        'text-primary': '#ededed',
        'text-secondary': '#8892b0',
        
        // Accent colors
        'accent-primary': '#64ffda',
        'accent-secondary': '#8892b0',
        'accent-hover': 'rgba(100, 255, 218, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        // Fluid typography using clamp()
        'hero': 'clamp(2.5rem, 5vw, 4.5rem)',
        'section': 'clamp(1.5rem, 4vw, 2rem)',
        'subsection': '1.5rem',
        'body': '1rem',
        'small': '0.875rem',
      },
      lineHeight: {
        'relaxed': '1.6',
      },
      spacing: {
        'section': '6rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
};
export default config;
