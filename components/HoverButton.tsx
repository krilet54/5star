'use client'

import Link from 'next/link'
import { ReactNode, useRef } from 'react'

interface HoverButtonProps {
  href: string
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  isExternal?: boolean
  target?: string
  rel?: string
}

export default function HoverButton({
  href,
  children,
  className = '',
  style = {},
  isExternal = false,
  target,
  rel,
}: HoverButtonProps) {
  const ref = useRef<HTMLElement>(null)

  const handleMouseEnter = () => {
    if (ref.current) {
      ref.current.style.borderColor = '#C9A84C'
      ref.current.style.color = '#C9A84C'
    }
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.borderColor = 'rgba(250,250,250,0.3)'
      ref.current.style.color = '#FAFAFA'
    }
  }

  const defaultStyle = {
    color: '#FAFAFA',
    borderColor: 'rgba(250,250,250,0.3)',
    ...style,
  }

  const containerStyle = {
    display: 'inline-block',
  }

  if (isExternal) {
    return (
      <span style={containerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          ref={ref as any}
          href={href}
          target={target}
          rel={rel}
          className={className}
          style={defaultStyle}
        >
          {children}
        </a>
      </span>
    )
  }

  return (
    <span style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        ref={ref as any}
        href={href}
        className={className}
        style={defaultStyle}
      >
        {children}
      </Link>
    </span>
  )
}
