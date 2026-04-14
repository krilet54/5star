import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-8" style={{ background: 'var(--dark)' }}>
      <div>
        <div
          className="font-display mb-4"
          style={{ fontFamily: 'var(--font-display)', fontSize: '8rem', fontWeight: 500, lineHeight: 1, color: 'var(--dark-5)' }}
        >
          404
        </div>
        <h1 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          Page Not Found
        </h1>
        <p className="text-base mb-8 max-w-sm mx-auto" style={{ color: 'var(--ink-muted)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn btn-gold">Back to Home →</Link>
          <Link href="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
