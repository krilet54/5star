'use client'
import { trackPhoneClick } from '@/lib/ga4-events'

export default function FooterPhoneLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <a href={href} className={className} onClick={() => trackPhoneClick('footer')}>
      {children}
    </a>
  )
}
