import Link from 'next/link'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center no-underline ${className}`}>
      <img src="/starone-logo-dark.jpg" alt="Star One" className="h-8 block" />
    </Link>
  )
}
