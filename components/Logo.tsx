import Link from 'next/link'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 no-underline ${className}`}>
      <div
        className="w-10 h-10 flex items-center justify-center font-bold text-black text-lg flex-shrink-0"
        style={{ background: 'var(--gold)', borderRadius: 2, fontFamily: 'var(--font-display)' }}
      >
        S1
      </div>
      <div className="font-display text-xl font-semibold leading-none" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>
        Star <span style={{ color: 'var(--gold)' }}>One</span>
      </div>
    </Link>
  )
}
