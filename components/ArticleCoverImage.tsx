'use client'

import Image from 'next/image'
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
    <Image
      src={currentSrc}
      alt={alt}
      className={className}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      quality={72}
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc)
      }}
    />
  )
}
