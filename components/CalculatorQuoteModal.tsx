'use client'
import { useState } from 'react'
import { X } from 'lucide-react'

interface CalculatorQuoteModalProps {
  isOpen: boolean
  onClose: () => void
  totalCost: number
  monthlyAdd: number
  onSubmit: (details: {
    fullName: string
    email: string
    phone: string
    country: string
    message: string
    agreeToDisclaimer: boolean
  }) => Promise<void>
}

export default function CalculatorQuoteModal({
  isOpen,
  onClose,
  totalCost,
  monthlyAdd,
  onSubmit,
}: CalculatorQuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    message: '',
    agreeToDisclaimer: false,
  })
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      await onSubmit(formData)
      setSubmitMessage({ type: 'success', text: 'Thank you! Our team will reach out to you soon.' })
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          country: '',
          message: '',
          agreeToDisclaimer: false,
        })
        onClose()
        setSubmitMessage(null)
      }, 2000)
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'Failed to submit. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  const canSubmit = formData.fullName.trim() && formData.email.trim() && formData.phone.trim() && formData.agreeToDisclaimer

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(10, 10, 10, 0.55)', backdropFilter: 'blur(3px)' }}>
      <div
        className="relative max-w-xl w-full rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto"
        style={{ background: '#FAFAFA', border: '1px solid rgba(201, 160, 96, 0.3)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:opacity-70 transition"
          style={{ color: '#555555' }}
        >
          <X size={24} />
        </button>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2" style={{ color: '#0A0A0A' }}>
            Your Estimate
          </h2>
          <p className="text-sm" style={{ color: '#555555' }}>
            Share your details and our team will send your personalized quote.
          </p>
        </div>

        {/* Cost Summary */}
        <div className="mb-8 p-6 rounded-xl" style={{ background: 'rgba(201, 160, 96, 0.12)', border: '1px solid var(--gold)' }}>
          <div className="text-sm mb-2" style={{ color: '#555555' }}>
            Service Fees (starting from):
          </div>
          <div
            className="text-4xl font-semibold mb-4"
            style={{
              color: 'var(--gold)',
              filter: 'blur(9px)',
              userSelect: 'none',
            }}
            aria-label="Estimate hidden until team consultation"
          >
            AED XXXXX
          </div>
          {monthlyAdd > 0 && (
            <div
              className="text-sm pt-4"
              style={{
                borderTop: '1px solid rgba(201, 160, 96, 0.3)',
                color: '#555555',
                filter: 'blur(7px)',
                userSelect: 'none',
              }}
            >
              + AED XXXX / month
              <span className="text-xs block mt-1" style={{ color: '#777777' }}>
                (Recurring add-ons)
              </span>
            </div>
          )}
          <p className="text-xs mt-4" style={{ color: '#666666' }}>
            Exact pricing is shared by our team after reviewing your submission.
          </p>
        </div>

        {/* Lead Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-6">
          <div>
            <label className="text-sm mb-2 block" style={{ color: '#555555' }}>
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
              required
              className="w-full px-4 py-3 rounded border text-sm"
              style={{ borderColor: 'var(--border)', color: '#0A0A0A', background: '#FFFFFF' }}
            />
          </div>

          <div>
            <label className="text-sm mb-2 block" style={{ color: '#555555' }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              className="w-full px-4 py-3 rounded border text-sm"
              style={{ borderColor: 'var(--border)', color: '#0A0A0A', background: '#FFFFFF' }}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm mb-2 block" style={{ color: '#555555' }}>
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+971..."
                value={formData.phone}
                onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                required
                className="w-full px-4 py-3 rounded border text-sm"
                style={{ borderColor: 'var(--border)', color: '#0A0A0A', background: '#FFFFFF' }}
              />
            </div>
            <div>
              <label className="text-sm mb-2 block" style={{ color: '#555555' }}>
                Country (Optional)
              </label>
              <input
                type="text"
                placeholder="UAE"
                value={formData.country}
                onChange={e => setFormData(prev => ({ ...prev, country: e.target.value }))}
                className="w-full px-4 py-3 rounded border text-sm"
                style={{ borderColor: 'var(--border)', color: '#0A0A0A', background: '#FFFFFF' }}
              />
            </div>
          </div>

          <div>
            <label className="text-sm mb-2 block" style={{ color: '#555555' }}>
              Notes (Optional)
            </label>
            <textarea
              placeholder="Tell us more about your requirements..."
              value={formData.message}
              onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
              rows={3}
              className="w-full px-4 py-3 rounded border text-sm"
              style={{ borderColor: 'var(--border)', color: '#0A0A0A', background: '#FFFFFF' }}
            />
          </div>

          <label className="flex items-start gap-3 p-3 rounded border" style={{ borderColor: 'rgba(201, 160, 96, 0.25)' }}>
            <input
              type="checkbox"
              checked={formData.agreeToDisclaimer}
              onChange={e => setFormData(prev => ({ ...prev, agreeToDisclaimer: e.target.checked }))}
              className="mt-1"
              required
            />
            <span className="text-xs" style={{ color: '#555555', lineHeight: 1.5 }}>
              I understand this is an estimate only and final costs may vary based on authority fees and business requirements.
            </span>
          </label>

          <button
            type="submit"
            disabled={isSubmitting || !canSubmit}
            className="w-full py-3 rounded font-medium transition"
            style={{
              background: 'var(--gold)',
              color: 'var(--dark)',
              opacity: isSubmitting || !canSubmit ? 0.6 : 1,
              cursor: isSubmitting || !canSubmit ? 'not-allowed' : 'pointer',
            }}
          >
            {isSubmitting ? 'Sending...' : 'Submit & Get Detailed Quote'}
          </button>
        </form>

        {/* Message */}
        {submitMessage && (
          <div
            className="p-4 rounded text-sm text-center mb-6"
            style={{
              background: submitMessage.type === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
              color: submitMessage.type === 'success' ? '#4CAF50' : '#F44336',
              border: `1px solid ${submitMessage.type === 'success' ? '#4CAF50' : '#F44336'}`,
            }}
          >
            {submitMessage.text}
          </div>
        )}

        {/* Disclaimer button */}
        <div className="pt-3" style={{ borderTop: '1px solid var(--border)' }}>
          <button
            type="button"
            onClick={() => setShowDisclaimer(prev => !prev)}
            className="w-full py-2.5 rounded border text-sm font-medium transition"
            style={{ borderColor: 'rgba(201, 160, 96, 0.45)', color: '#7A5F2A', background: 'rgba(201, 160, 96, 0.08)' }}
          >
            {showDisclaimer ? 'Hide Disclaimer' : 'View Disclaimer'}
          </button>
          {showDisclaimer && (
            <p className="text-xs mt-3" style={{ color: '#666666', lineHeight: '1.6' }}>
              <strong>Disclaimer:</strong> The estimate shown is indicative and excludes government authority fees, visa costs,
              third-party charges, and activity-specific requirements. Final pricing is confirmed after document review and
              consultation.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
