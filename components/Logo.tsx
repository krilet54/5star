import Link from 'next/link'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center no-underline ${className}`}>
      <img
        src="/starone-logo-dark.png"
        alt="Star One"
        className="h-16 block"
        style={{ width: 'auto' }}
        onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/starone-logo-dark.jpg' }}
      />
    </Link>
  )
}
