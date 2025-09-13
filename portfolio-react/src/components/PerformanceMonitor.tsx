'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function usePerformanceMonitoring() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Web Vitals monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Type assertion for performance entries that have a value property
        const entryWithValue = entry as PerformanceEntry & { value?: number };
        
        if (entryWithValue.value !== undefined) {
          const metric: PerformanceMetrics = {
            name: entry.name,
            value: entryWithValue.value,
            rating: getRating(entry.name, entryWithValue.value),
          };

          // Log to console in development
          if (process.env.NODE_ENV === 'development') {
            console.log(`${metric.name}: ${metric.value} (${metric.rating})`);
          }

          // Send to analytics in production
          // You can replace this with your preferred analytics service
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', metric.name, {
              event_category: 'Web Vitals',
              value: Math.round(metric.value),
              custom_map: { metric_rating: metric.rating },
            });
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    } catch (e) {
      // Ignore if not supported
    }

    return () => {
      observer.disconnect();
    };
  }, []);
}

function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  switch (name) {
    case 'largest-contentful-paint':
      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
    case 'first-input-delay':
      return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
    case 'cumulative-layout-shift':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
    default:
      return 'good';
  }
}

// Performance monitoring component
export default function PerformanceMonitor() {
  usePerformanceMonitoring();
  return null;
}
