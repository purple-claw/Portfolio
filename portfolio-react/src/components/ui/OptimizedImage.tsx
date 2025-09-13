import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface OptimizedImageProps {
  src: string | StaticImageData
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  sizes?: string
  quality?: number
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      placeholder={placeholder}
      sizes={sizes}
      quality={quality}
      loading={priority ? 'eager' : 'lazy'}
    />
  )
}

interface LazyImageProps extends OptimizedImageProps {
  fallback?: React.ReactNode
}

export function LazyImage({ fallback = null, ...props }: LazyImageProps) {
  return (
    <div className="relative">
      {fallback && (
        <div className="absolute inset-0 flex items-center justify-center bg-background-secondary animate-pulse">
          {fallback}
        </div>
      )}
      <OptimizedImage {...props} />
    </div>
  )
}
