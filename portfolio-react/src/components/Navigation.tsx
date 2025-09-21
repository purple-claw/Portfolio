'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#hero', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#work', text: 'Work' },
    { href: '#certifications', text: 'Certifications' },
    { href: '#contact', text: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section
      const sections = navLinks.map(link => link.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleNavClick = (href: string) => {
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Global Styles */}
      <style jsx global>{`
        body {
          padding-top: 0 !important;
        }

        header {
          position: fixed !important;
          top: 0 !important;
          z-index: 1000 !important;
        }

        .navbar-container {
          position: relative !important;
          z-index: 1001 !important;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -40px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(40px, 10px) scale(1.05); }
        }

        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .nav-link:hover {
          color: white !important;
          transform: translateY(-2px);
        }

        .nav-link:hover .nav-hover-effect {
          opacity: 1;
        }

        .nav-link:hover .nav-ripple {
          width: 100px;
          height: 100px;
        }

        .logo-icon:hover {
          transform: scale(1.1) rotate(5deg);
        }

        .logo-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shine 3s infinite;
        }

        .mobile-nav-link:hover {
          color: white !important;
          background: rgba(255, 255, 255, 0.1) !important;
          transform: translateX(10px);
        }

        .mobile-menu-btn:hover {
          background: rgba(100, 255, 218, 0.2) !important;
          transform: scale(1.05);
        }

        .hamburger-line.active.line-1 {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger-line.active.line-2 {
          opacity: 0;
        }

        .hamburger-line.active.line-3 {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        @media (max-width: 768px) {
          .navbar-nav {
            display: none !important;
          }

          .mobile-menu-btn {
            display: flex !important;
          }
        }

        @media (max-width: 640px) {
          .navbar-container {
            margin: 0 1rem !important;
            padding: 0.75rem 1rem !important;
          }

          .brand-name {
            font-size: 1rem !important;
          }

          .logo-icon {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
        }
      `}</style>

      {/* Background Effects */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
      }}>
        {/* Floating Orbs */}
        <div style={{
          position: 'absolute',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          opacity: 0.15,
          filter: 'blur(40px)',
          background: 'radial-gradient(circle, #FF8000 20%, transparent)',
          top: '10%',
          left: '20%',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '0s',
        }}></div>
        
        <div style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          opacity: 0.15,
          filter: 'blur(40px)',
          background: 'radial-gradient(circle, #FF8000 20%, transparent)',
          top: '20%',
          right: '20%',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '2s',
        }}></div>
        
        <div style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          opacity: 0.15,
          filter: 'blur(40px)',
          background: 'radial-gradient(circle, #3f51b5 20%, transparent)',
          bottom: '30%',
          left: '30%',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '4s',
        }}></div>
        
        <div style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          opacity: 0.15,
          filter: 'blur(40px)',
          background: 'radial-gradient(circle, #9c27b0 20%, transparent)',
          top: '50%',
          right: '10%',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '6s',
        }}></div>
      </div>

      {/* Navigation Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '1rem 0' : '2rem 0',
        transition: 'all 0.3s ease',
        backgroundColor: 'transparent',
        width: '100%',
      }}>
        <div 
          className="navbar-container"
          style={{
            maxWidth: '1500px',
            margin: '0 auto',
            padding: '0.5rem 1.5rem',
            background: isScrolled ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'}`,
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: isScrolled ? '0 12px 40px rgba(0, 0, 0, 0.4)' : '0 8px 32px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            zIndex: 1001,
          }}
        >
          {/* Brand Name Only */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <span 
              className="brand-name"
              style={{
              color: 'white',
              fontSize: '1.85rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #FF8000, #ffb347, #ffcc80)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 100%',
              animation: 'gradient-flow 4s ease infinite',
              cursor: 'pointer',
              }}
            >
              NITIN SRI
            </span>
          </div>

          {/* Desktop Navigation Menu */}
          <nav 
            className="navbar-nav"
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              margin: '0 2rem',
            }}
          >
            <ul style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.75rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}>
              {navLinks.map((link, index) => (
                <li key={link.href} style={{ position: 'relative' }}>
                  <a
                    href={link.href}
                    className="nav-link"
                    style={{
                      position: 'relative',
                      display: 'block',
                      padding: '0.5rem 1.5rem',
                      color: activeSection === link.href.slice(0) ? '#FF8000' : 'rgba(255, 255, 255, 0.9)',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1.15rem',
                      borderRadius: '2rem',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                      background: activeSection === link.href.slice(0) ? '#70a79a4b' : 'transparent',
                      border: activeSection === link.href.slice(1) ? '0.75px solid #FF8000' : '1px solid transparent',
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    <span style={{ position: 'relative', zIndex: 1 }}>{link.text}</span>
                    
                    {/* Hover Effect */}
                    <div 
                      className="nav-hover-effect"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(188, 69, 199, 0.26), rgba(59, 130, 246, 0.2))',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        borderRadius: '0.95rem',
                      }}
                    />
                    
                    {/* Ripple Effect */}
                    <div 
                      className="nav-ripple"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 0,
                        height: 0,
                        background: 'radial-gradient(circle, rgba(100, 255, 218, 0.4) 0%, transparent 70%)',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                        transition: 'all 0.6s ease',
                      }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '3rem',
              height: '3rem',
              background: 'rgba(100, 255, 218, 0.1)',
              border: '1px solid hsla(27, 91%, 67%, 0.30)',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onClick={toggleMenu}
          >
            <span 
              className={`hamburger-line line-1 ${isMenuOpen ? 'active' : ''}`}
              style={{
                width: '1.25rem',
                height: '2px',
                background: 'white',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                borderRadius: '1px',
              }}
            />
            <span 
              className={`hamburger-line line-2 ${isMenuOpen ? 'active' : ''}`}
              style={{
                width: '1.25rem',
                height: '2px',
                background: 'white',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                borderRadius: '1px',
              }}
            />
            <span 
              className={`hamburger-line line-3 ${isMenuOpen ? 'active' : ''}`}
              style={{
                width: '1.25rem',
                height: '2px',
                background: 'white',
                margin: '2px 0',
                transition: 'all 0.3s ease',
                borderRadius: '1px',
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                margin: '0 2rem',
                borderRadius: '0 0 1rem 1rem',
                overflow: 'hidden',
              }}
            >
              <nav style={{ padding: '1rem' }}>
                <ul style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                }}>
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      style={{ marginBottom: '0.5rem' }}
                    >
                      <a
                        href={link.href}
                        className="mobile-nav-link"
                        style={{
                          display: 'block',
                          padding: '1rem 1.5rem',
                          color: activeSection === link.href.slice(1) ? '#FF8000' : 'rgba(255, 255, 255, 0.9)',
                          textDecoration: 'none',
                          fontWeight: '500',
                          borderRadius: '0.75rem',
                          transition: 'all 0.3s ease',
                          background: activeSection === link.href.slice(1) ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                          border: activeSection === link.href.slice(1) ? '1px solid rgba(100, 255, 218, 0.3)' : '1px solid transparent',
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                      >
                        {link.text}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}