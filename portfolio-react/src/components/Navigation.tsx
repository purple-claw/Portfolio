'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background-tertiary border-t-2 border-accent-primary">
        <div className="container">
          <div className="flex justify-end py-2">
            <a
              href="mailto:nitinjuttuka63@gmail.com"
              className="text-sm text-text-primary hover:text-accent-primary transition-colors duration-300"
            >
              Email me
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header 
        className={cn(
          'fixed top-8 left-0 right-0 z-40 transition-all duration-300',
          isScrolled ? 'bg-background-primary/95 backdrop-blur-md shadow-lg' : ''
        )}
      >
        <div className="container">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-2xl font-bold text-accent-primary hover:scale-105 transition-transform duration-300"
            >
              MK
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    'relative text-sm font-medium transition-colors duration-300 py-2',
                    activeSection === item.href.slice(1)
                      ? 'text-accent-primary'
                      : 'text-text-primary hover:text-accent-primary'
                  )}
                >
                  {item.label}
                  {/* Active indicator */}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-primary rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-text-primary hover:text-accent-primary transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background-secondary/95 backdrop-blur-md border-t border-accent-primary/20">
            <div className="container py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      'text-sm font-medium transition-colors duration-300 py-2 px-4 rounded',
                      activeSection === item.href.slice(1)
                        ? 'text-accent-primary bg-accent-hover'
                        : 'text-text-primary hover:text-accent-primary hover:bg-accent-hover'
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
