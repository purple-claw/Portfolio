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

// Navigation utilities
export function getActiveSection(sections: string[]): string {
  const currentSection = sections.find(section => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= 100 && rect.bottom >= 100;
    }
    return false;
  });

  return currentSection || sections[0];
}
