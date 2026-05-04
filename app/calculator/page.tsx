'use client'
import { useState } from 'react'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export default function CalculatorPage() {
  const [companyType, setCompanyType] = useState<'mainland' | 'freezone' | 'offshore'>('freezone')
  const [activity, setActivity] = useState<string>('Trading')
  const [visas, setVisas] = useState<number>(1)
  const [office, setOffice] = useState<'virtual' | 'shared' | 'physical'>('virtual')
  const [services, setServices] = useState<Set<string>>(new Set())
  const [email, setEmail] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const toggleService = (service: string) => {
    const newServices = new Set(services)
    if (newServices.has(service)) {
      newServices.delete(service)
    } else {
      newServices.add(service)
    }
    setServices(newServices)
  }

  // Calculate costs
  const baseCosts = {
    mainland: 8000,
    freezone: 5450,
    offshore: 4500,
  }

  const visaCosts = {
    0: 0,
    1: 2500,
    2: 4800,
    3: 6900,
    4: 8800,
    5: 11000,
  }

  const officeCosts = {
    virtual: 0,
    shared: 3000,
    physical: 8000,
  }

  const additionalServices: { [key: string]: number } = {
    'vat': 750,
    'corporate-tax': 750,
    'bank-account': 500,
    'accounting': 1200,
    'trademark': 3500,
    'attestation': 800,
  }

  let total = baseCosts[companyType]
  total += visaCosts[visas as keyof typeof visaCosts] || 11000
  total += officeCosts[office]

  let monthlyAdd = 0
  services.forEach(service => {
    if (service === 'accounting') {
      monthlyAdd += 1200
    } else {
      total += additionalServices[service] || 0
    }
  })

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const response = await fetch('/api/calculator-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          companyType,
          activity,
          visas,
          office,
          services: Array.from(services),
          estimatedCost: total,
        }),
      })

      if (response.ok) {
        setSubmitMessage({ type: 'success', text: 'Estimate sent! We\'ll contact you within 24 hours.' })
        setEmail('')
      } else {
        setSubmitMessage({ type: 'error', text: 'Failed to submit. Please try again.' })
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: 'An error occurred. Please try again.' })
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-96 flex items-center overflow-hidden pt-20" style={{ background: 'var(--dark)' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.07) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10 py-20">
          <div className="max-w-2xl">
            <Reveal>
              <h1 className="text-5xl sm:text-6xl font-display font-bold mb-6" style={{ color: 'var(--ink)' }}>
                Business Setup Cost Calculator
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-lg" style={{ color: 'var(--ink-muted)' }}>
                Get an instant estimate for setting up your company in the UAE.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20" style={{ background: 'var(--dark-2)' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="space-y-12">
              {/* Step 1: Company Type */}
              <div>
                <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--ink)' }}>
                  Step 1 — Company Type
                </h3>
                <div className="space-y-3">
                  {['mainland', 'freezone', 'offshore'].map(type => (
                    <label
                      key={type}
                      className="flex items-center p-4 rounded border cursor-pointer transition"
                      style={{
                        borderColor: companyType === type ? 'var(--gold)' : 'var(--border)',
                        background: companyType === type ? 'rgba(201, 160, 96, 0.1)' : 'transparent',
                      }}
                    >
                      <input
                        type="radio"
                        name="company-type"
                        value={type}
                        checked={companyType === type as any}
                        onChange={e => setCompanyType(e.target.value as any)}
                        className="mr-3"
                      />
                      <span className="capitalize" style={{ color: 'var(--ink)' }}>
                        {type === 'freezone' ? 'Free Zone' : type.charAt(0).toUpperCase() + type.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 2: Business Activity */}
              <div>
                <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--ink)' }}>
                  Step 2 — Business Activity Category
                </h3>
                <select
                  value={activity}
                  onChange={e => setActivity(e.target.value)}
                  className="w-full p-3 rounded border bg-opacity-0"
                  style={{ borderColor: 'var(--border)', color: 'var(--ink)' }}
                >
                  {['Trading', 'Services', 'Consulting', 'E-commerce', 'Manufacturing', 'Media & Creative', 'Education', 'Technology', 'Other'].map(
                    act => (
                      <option key={act} value={act} style={{ background: 'var(--dark)', color: 'var(--ink)' }}>
                        {act}
                      </option>
                    ),
                  )}
                </select>
              </div>

              {/* Step 3: Visas */}
              <div>
                <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--ink)' }}>
                  Step 3 — Number of Visas Required
                </h3>
                <div className="space-y-3">
                  {[0, 1, 2, 3, 4, 5].map(num => (
                    <label
                      key={num}
                      className="flex items-center p-4 rounded border cursor-pointer transition"
                      style={{
                        borderColor: visas === num ? 'var(--gold)' : 'var(--border)',
                        background: visas === num ? 'rgba(201, 160, 96, 0.1)' : 'transparent',
                      }}
                    >
                      <input
                        type="radio"
                        name="visas"
                        value={num}
                        checked={visas === num}
                        onChange={e => setVisas(parseInt(e.target.value))}
                        className="mr-3"
                      />
                      <span style={{ color: 'var(--ink)' }}>
                        {num === 5 ? '5+' : num}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 4: Office Type */}
              <div>
                <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--ink)' }}>
                  Step 4 — Office Type
                </h3>
                <div className="space-y-3">
                  {[
                    { value: 'virtual', label: 'No Office (Virtual/Flexi-desk)' },
                    { value: 'shared', label: 'Shared Office' },
                    { value: 'physical', label: 'Physical Office' },
                  ].map(opt => (
                    <label
                      key={opt.value}
                      className="flex items-center p-4 rounded border cursor-pointer transition"
                      style={{
                        borderColor: office === opt.value as any ? 'var(--gold)' : 'var(--border)',
                        background: office === opt.value as any ? 'rgba(201, 160, 96, 0.1)' : 'transparent',
                      }}
                    >
                      <input
                        type="radio"
                        name="office"
                        value={opt.value}
                        checked={office === opt.value as any}
                        onChange={e => setOffice(e.target.value as any)}
                        className="mr-3"
                      />
                      <span style={{ color: 'var(--ink)' }}>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 5: Additional Services */}
              <div>
                <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--ink)' }}>
                  Step 5 — Additional Services
                </h3>
                <div className="space-y-3">
                  {[
                    { key: 'vat', label: 'VAT Registration', price: 750 },
                    { key: 'corporate-tax', label: 'Corporate Tax Registration', price: 750 },
                    { key: 'bank-account', label: 'Corporate Bank Account Opening', price: 500 },
                    { key: 'accounting', label: 'Accounting & Bookkeeping (Monthly)', price: 1200 },
                    { key: 'trademark', label: 'Trademark Registration', price: 3500 },
                    { key: 'attestation', label: 'Document Attestation', price: 800 },
                  ].map(svc => (
                    <label key={svc.key} className="flex items-center p-3 rounded border cursor-pointer transition" style={{ borderColor: 'var(--border)' }}>
                      <input
                        type="checkbox"
                        checked={services.has(svc.key)}
                        onChange={() => toggleService(svc.key)}
                        className="mr-3"
                      />
                      <span className="flex-1" style={{ color: 'var(--ink-muted)' }}>
                        {svc.label}
                      </span>
                      <span style={{ color: 'var(--gold)', fontSize: '0.9em' }}>AED {svc.price.toLocaleString()}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div
                className="rounded-lg p-8 sticky top-24"
                style={{ background: 'rgba(201, 160, 96, 0.08)', border: '1px solid var(--border)' }}
              >
                <h3 className="text-2xl font-semibold mb-8" style={{ color: 'var(--ink)' }}>
                  Estimated Cost
                </h3>

                <div className="space-y-6 mb-8 pb-8" style={{ borderBottom: '1px solid var(--border)' }}>
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--ink-muted)' }}>Base Company Cost:</span>
                    <span style={{ color: 'var(--ink)' }}>AED {baseCosts[companyType].toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--ink-muted)' }}>Visa Processing ({visas}):</span>
                    <span style={{ color: 'var(--ink)' }}>
                      AED {(visaCosts[visas as keyof typeof visaCosts] || 11000).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: 'var(--ink-muted)' }}>Office Setup:</span>
                    <span style={{ color: 'var(--ink)' }}>AED {officeCosts[office].toLocaleString()}</span>
                  </div>
                  {Array.from(services).map(svc => (
                    <div key={svc} className="flex justify-between">
                      <span style={{ color: 'var(--ink-muted)' }}>
                        {svc === 'vat' && 'VAT Registration'}
                        {svc === 'corporate-tax' && 'Corporate Tax Registration'}
                        {svc === 'bank-account' && 'Bank Account Opening'}
                        {svc === 'trademark' && 'Trademark Registration'}
                        {svc === 'attestation' && 'Document Attestation'}
                      </span>
                      {svc !== 'accounting' && (
                        <span style={{ color: 'var(--ink)' }}>
                          AED {(additionalServices[svc] || 0).toLocaleString()}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mb-6 p-6 rounded" style={{ background: 'rgba(201, 160, 96, 0.15)', border: '1px solid var(--gold)' }}>
                  <div className="text-sm mb-2" style={{ color: 'var(--ink-muted)' }}>
                    Service Fees (starting from):
                  </div>
                  <div className="text-3xl font-semibold" style={{ color: 'var(--gold)' }}>
                    AED {total.toLocaleString()}
                  </div>
                  {monthlyAdd > 0 && (
                    <div className="text-sm mt-3 pt-3" style={{ borderTop: '1px solid var(--border)', color: 'var(--ink-muted)' }}>
                      + AED {monthlyAdd.toLocaleString()} / month (accounting)
                    </div>
                  )}
                </div>

                <div className="mb-6 p-4 rounded text-sm" style={{ background: 'rgba(201, 160, 96, 0.05)', color: 'var(--ink-dim)' }}>
                  <strong>Important:</strong> Government fees and third-party charges are additional and will be communicated transparently before you proceed.
                </div>

                <div className="flex flex-col gap-3">
                  <form onSubmit={handleSubmitQuote} className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 rounded border bg-opacity-0 text-sm"
                      style={{ borderColor: 'var(--border)', color: 'var(--ink)' }}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting || !email}
                      className="btn btn-gold block w-full text-center"
                      style={{ opacity: isSubmitting || !email ? 0.6 : 1, cursor: isSubmitting || !email ? 'not-allowed' : 'pointer' }}
                    >
                      {isSubmitting ? 'Sending...' : 'Get Exact Quote'}
                    </button>
                  </form>
                  {submitMessage && (
                    <div
                      className="p-3 rounded text-sm text-center"
                      style={{
                        background: submitMessage.type === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                        color: submitMessage.type === 'success' ? '#4CAF50' : '#F44336',
                        border: `1px solid ${submitMessage.type === 'success' ? '#4CAF50' : '#F44336'}`,
                      }}
                    >
                      {submitMessage.text}
                    </div>
                  )}
                  <a
                    href="https://wa.me/971502165471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline block text-center"
                    style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
                  >
                    WhatsApp Us
                  </a>
                </div>

                <div className="mt-6 text-xs" style={{ color: 'var(--ink-dim)' }}>
                  These are approximate estimates for service fees only. Government authority fees, third-party charges, and costs specific to your chosen
                  free zone or activity are additional.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
