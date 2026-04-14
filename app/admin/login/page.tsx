'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      router.push('/admin')
    } else {
      setError('Invalid password. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="admin-body min-h-screen flex items-center justify-center" style={{ background: '#f5f5f0' }}>
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 flex items-center justify-center text-xl font-bold text-black rounded-sm mx-auto mb-4" style={{ background: '#C9A060' }}>S1</div>
          <h1 className="text-xl font-bold text-gray-900">Star One Admin</h1>
          <p className="text-sm text-gray-500 mt-1">Enter your password to continue</p>
        </div>

        <div className="admin-card">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="admin-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="admin-input"
                placeholder="Enter admin password"
                required
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="admin-btn admin-btn-gold w-full justify-center"
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Signing in...' : 'Sign In →'}
            </button>
          </form>
        </div>

        <p className="text-xs text-center text-gray-400 mt-4">
          Star One Business Consultancy Admin Portal
        </p>
      </div>
    </div>
  )
}
