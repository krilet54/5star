import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center no-underline ${className}`}>
      <Image src="/starone-logo-dark.jpg" alt="Star One" width={160} height={40} className="h-8 block" priority />
    </Link>
  )
}
