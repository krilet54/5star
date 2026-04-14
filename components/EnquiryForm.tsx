'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  first_name: z.string().min(2, 'Required'),
  last_name: z.string().optional(),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  country: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
})
type FormData = z.infer<typeof schema>

const COUNTRIES = ['United Kingdom', 'United States', 'South Africa', 'India', 'Pakistan', 'UAE (Existing resident)', 'Canada', 'Australia', 'Other']
const SERVICES = [
  'Business Setup (Mainland)',
  'Business Setup (Free Zone)',
  'Employment Visa',
  'Golden Visa',
  'VAT / Corporate Tax',
  'Accounting & Bookkeeping',
  'Bank Account Opening',
  'HR & Payroll Services',
  'Compliance Services',
  'Trademark Registration',
  'Not sure — need guidance',
]

export default function EnquiryForm({ preselectedService }: { preselectedService?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: preselectedService || '' },
  })

  async function onSubmit(data: FormData) {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="text-4xl mb-4" style={{ color: 'var(--gold)' }}>✦</div>
        <h3 className="font-display text-2xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>Thank You!</h3>
        <p className="mb-6" style={{ color: 'var(--ink-muted)' }}>
          We've received your enquiry and will be in touch within 24 hours.
        </p>
        <a
          href="https://wa.me/971502165471"
          className="btn btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp →
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="form-label">First Name *</label>
          <input {...register('first_name')} className="form-input" placeholder="John" />
          {errors.first_name && <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.first_name.message}</p>}
        </div>
        <div>
          <label className="form-label">Last Name</label>
          <input {...register('last_name')} className="form-input" placeholder="Smith" />
        </div>
      </div>

      <div>
        <label className="form-label">Email Address *</label>
        <input {...register('email')} type="email" className="form-input" placeholder="john@example.com" />
        {errors.email && <p className="text-xs mt-1" style={{ color: '#f87171' }}>{errors.email.message}</p>}
      </div>

      <div>
        <label className="form-label">Phone / WhatsApp</label>
        <input {...register('phone')} type="tel" className="form-input" placeholder="+44 7700 900000" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="form-label">Country</label>
          <select {...register('country')} className="form-select form-input">
            <option value="">Select...</option>
            {COUNTRIES.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="form-label">Service Required</label>
          <select {...register('service')} className="form-select form-input">
            <option value="">Select...</option>
            {SERVICES.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="form-label">Message</label>
        <textarea {...register('message')} className="form-textarea" placeholder="Tell us about your business idea or question..." />
      </div>

      {error && <p className="text-sm text-center" style={{ color: '#f87171' }}>{error}</p>}

      <button type="submit" disabled={loading} className="btn btn-gold w-full mt-2" style={{ opacity: loading ? 0.7 : 1 }}>
        {loading ? 'Sending...' : 'Submit Enquiry →'}
      </button>

      <p className="text-xs text-center" style={{ color: 'var(--ink-dim)' }}>
        We respect your privacy. Your data is never shared with third parties.
      </p>
    </form>
  )
}
