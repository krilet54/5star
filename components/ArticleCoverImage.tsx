'use client'

import { useState } from 'react'

interface ArticleCoverImageProps {
  src: string
  fallbackSrc: string
  alt: string
  className?: string
}

export default function ArticleCoverImage({
  src,
  fallbackSrc,
  alt,
  className,
}: ArticleCoverImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc)
      }}
    />
  )
}
