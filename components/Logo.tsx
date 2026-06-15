import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center no-underline ${className}`} style={{ width: 220, height: 64 }}>
      <Image
        src="/starone-logo-dark (2).png"
        alt="Star One"
        className="block"
        width={220}
        height={64}
        priority={true}
      />
    </Link>
  )
}
