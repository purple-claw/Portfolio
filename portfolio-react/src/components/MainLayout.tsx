'use client';

import { Suspense } from 'react';
import Navigation from './Navigation';
import { ScrollProgress } from './animations';

// Import sections directly for better performance
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsEducationSection from './sections/SkillsEducationSection';
import TimelineWorkSection from './sections/TimelineWorkSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';

// Loading component for suspense fallback
function SectionLoader() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-text-secondary">Loading...</p>
      </div>
    </div>
  );
}

interface MainLayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background-primary">
      <ScrollProgress />
      <Navigation />
      
      {/* Main content with top padding to account for fixed header */}
      <main className="pt-20">
        <Suspense fallback={<SectionLoader />}>
          <HeroSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <SkillsEducationSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <TimelineWorkSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <CertificationsSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
        
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-background-tertiary border-t border-accent-primary/20">
        <div className="container py-8">
          <div className="text-center">
            <p className="text-small text-text-secondary">
              Designed & Built by Nithin Sri
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
