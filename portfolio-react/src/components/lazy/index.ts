import { lazy } from 'react'

// Lazy load sections for better performance
export const HeroSection = lazy(() => import('@/components/sections/HeroSection'))
export const AboutSection = lazy(() => import('@/components/sections/AboutSection'))
export const SkillsEducationSection = lazy(() => import('@/components/sections/SkillsEducationSection'))
export const WorkSection = lazy(() => import('@/components/sections/WorkSection'))
export const CertificationsSection = lazy(() => import('@/components/sections/CertificationsSection'))
export const ContactSection = lazy(() => import('@/components/sections/ContactSection'))

// Lazy load animation components
export const ScrollProgress = lazy(() => 
  import('@/components/animations').then(module => ({ default: module.ScrollProgress }))
)

export const ParallaxElement = lazy(() => 
  import('@/components/animations').then(module => ({ default: module.ParallaxElement }))
)

export const MagneticElement = lazy(() => 
  import('@/components/animations').then(module => ({ default: module.MagneticElement }))
)
