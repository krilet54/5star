'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'

export default function LeadCapturePopup() {
  const pathname = usePathname()
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
  const isAdminRoute = pathname?.startsWith('/admin')

  useEffect(() => {
    if (isAdminRoute) return

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
  }, [isAdminRoute])

  // Exit intent - show popup when user moves mouse towards closing
  useEffect(() => {
    if (isAdminRoute || hasShown) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true)
        setHasShown(true)
        sessionStorage.setItem('leadPopupShown', 'true')
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown, isAdminRoute])

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

  if (isAdminRoute || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(10,10,10,0.52)', backdropFilter: 'blur(4px)' }}>
      <div
        className="relative w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden"
        style={{ background: '#FAFAFA', border: '1px solid rgba(201, 168, 76, 0.28)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full" style={{ background: '#C9A84C', opacity: 0.6 }} />

        <div className="p-6 md:p-8">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full transition hover:bg-black/5"
          style={{ color: '#555555' }}
        >
          <X size={24} />
        </button>

        <div className="mb-6 pr-8">
          <div className="tag mb-3">Free Consultation</div>
          <h2 className="font-display text-3xl md:text-[2.15rem] font-medium leading-tight mb-2" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>
            Planning to start a business?
          </h2>
          <p className="text-sm md:text-base" style={{ color: '#555555', lineHeight: 1.7 }}>
            Share your details and we’ll get back to you with the right next step.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border text-sm transition focus:outline-none"
              style={{ borderColor: 'rgba(201, 168, 76, 0.22)', color: '#0A0A0A', background: '#FFFFFF' }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border text-sm transition focus:outline-none"
              style={{ borderColor: 'rgba(201, 168, 76, 0.22)', color: '#0A0A0A', background: '#FFFFFF' }}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border text-sm transition focus:outline-none"
            style={{ borderColor: 'rgba(201, 168, 76, 0.22)', color: '#0A0A0A', background: '#FFFFFF' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-3">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-full px-3 py-3 rounded-lg border text-sm transition focus:outline-none"
              style={{ borderColor: 'rgba(201, 168, 76, 0.22)', color: '#0A0A0A', background: '#FFFFFF' }}
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
              className="w-full px-4 py-3 rounded-lg border text-sm transition focus:outline-none"
              style={{ borderColor: 'rgba(201, 168, 76, 0.22)', color: '#0A0A0A', background: '#FFFFFF' }}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border text-sm transition focus:outline-none resize-none"
            style={{ borderColor: 'rgba(201, 168, 76, 0.22)', color: '#0A0A0A', background: '#FFFFFF' }}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-lg font-semibold transition"
            style={{
              background: 'var(--gold)',
              color: '#0A0A0A',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              boxShadow: '0 10px 24px rgba(201, 168, 76, 0.18)',
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        <div className="mt-5 pt-4 border-t text-center" style={{ borderColor: 'rgba(201, 168, 76, 0.18)' }}>
          <p className="text-xs" style={{ color: '#777777' }}>
            We’ll get back to you within 24 hours
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}
