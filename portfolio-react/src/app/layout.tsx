import type { Metadata, Viewport } from "next";
import "./globals.css";
import PerformanceMonitor from '@/components/PerformanceMonitor';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#64ffda',
}

export const metadata: Metadata = {
  title: "Nithin Sri - Portfolio | Software Developer & AI Researcher",
  description: "Portfolio of Nithin Sri - Associate Software Developer, Freelance Penetration Tester, and AI&ML Researcher. Explore my projects, skills, and experience.",
  keywords: "Nithin Sri, Software Developer, AI Researcher, Penetration Tester, React, Next.js, Machine Learning",
  authors: [{ name: "Nithin Sri" }],
  openGraph: {
    title: "Nithin Sri - Portfolio",
    description: "Associate Software Developer, Freelance Penetration Tester, and AI&ML Researcher",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithin Sri - Portfolio",
    description: "Associate Software Developer, Freelance Penetration Tester, and AI&ML Researcher",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  );
}
