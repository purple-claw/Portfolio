import Navigation from './Navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      {/* Main content with top padding to account for fixed header */}
      <main className="pt-20">
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
