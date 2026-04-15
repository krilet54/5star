import Link from 'next/link'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center no-underline ${className}`}>
      <img src="/starone-logo-dark.png" alt="Star One" className="h-12 block" style={{ width: 'auto' }} />
    </Link>
  )
}
