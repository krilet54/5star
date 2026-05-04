'use client'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function LeadCapturePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+971',
    mobile: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('leadPopupShown')
    if (!popupShown) {
      // Show after 8 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem('leadPopupShown', 'true')
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [])

  // Exit intent - show popup when user moves mouse towards closing
  useEffect(() => {
    if (hasShown) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem('leadPopupShown', 'true')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: `${formData.countryCode} ${formData.mobile}`,
          message: formData.message || 'Lead from popup - Planning to start a business',
          subject: 'Lead Capture - Planning to start a business',
        }),
      })

      if (response.ok) {
        setIsOpen(false)
        setFormData({ firstName: '', lastName: '', email: '', countryCode: '+971', mobile: '', message: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.5)' }}>
      <div className="relative max-w-md w-full rounded-lg shadow-2xl p-8" style={{ background: 'var(--dark)', border: '1px solid var(--border)' }}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-1"
          style={{ color: 'var(--ink-muted)' }}
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--ink)' }}>
          Planning to start a business?
        </h2>
        <p className="mb-6" style={{ color: 'var(--ink-muted)' }}>
          Get a free consultation today
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded border text-sm bg-opacity-0"
              style={{ borderColor: 'var(--border)', color: 'var(--ink)' }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded border text-sm bg-opacity-0"
              style={{ borderColor: 'var(--border)', color: 'var(--ink)' }}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded border text-sm bg-opacity-0"
            style={{ borderColor: 'var(--border)', color: 'var(--ink)' }}
          />

          <div className="flex gap-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-24 px-3 py-2 rounded border text-sm bg-opacity-0"
              style={{ borderColor: 'var(--border)', color: 'var(--ink)' }}
            >
              <option value="+971">+971 (UAE)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+1">+1 (US)</option>
              <option value="+27">+27 (SA)</option>
              <option value="+91">+91 (India)</option>
            </select>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-2 rounded border text-sm bg-opacity-0"
              style={{ borderColor: 'var(--border)', color: 'var(--ink)' }}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 rounded border text-sm bg-opacity-0"
            style={{ borderColor: 'var(--border)', color: 'var(--ink)' }}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded font-medium transition"
            style={{
              background: 'var(--gold)',
              color: 'var(--dark)',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        <p className="text-xs text-center mt-4" style={{ color: 'var(--ink-dim)' }}>
          We'll get back to you within 24 hours
        </p>
      </div>
    </div>
  )
}
