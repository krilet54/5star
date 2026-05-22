import Link from 'next/link'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center no-underline ${className}`}>
      <img
        src="/starone-logo-dark (2).png"
        alt="Star One"
        className="block"
        style={{ width: 'auto', height: '64px' }}
      />
    </Link>
  )
}
