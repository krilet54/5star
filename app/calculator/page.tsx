'use client'
import { useState } from 'react'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import CalculatorQuoteModal from '@/components/CalculatorQuoteModal'
import GeometricCorners from '@/components/GeometricCorners'
import { pageHeroImages } from '@/lib/site-images'

export default function CalculatorPage() {
  const [companyType, setCompanyType] = useState<'mainland' | 'freezone' | 'offshore'>('freezone')
  const [activity, setActivity] = useState<string>('Trading')
  const [visas, setVisas] = useState<number>(1)
  const [office, setOffice] = useState<'virtual' | 'shared' | 'physical'>('virtual')
  const [services, setServices] = useState<Set<string>>(new Set())
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isEstimateMasked = true

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

  const handleSubmitQuote = async (details: {
    fullName: string
    email: string
    phone: string
    country: string
    message: string
    agreeToDisclaimer: boolean
  }) => {
    const response = await fetch('/api/calculator-leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: details.email,
        companyType,
        activity,
        visas,
        office,
        services: Array.from(services),
        contactDetails: {
          fullName: details.fullName,
          phone: details.phone,
          country: details.country,
          message: details.message,
          agreedDisclaimer: details.agreeToDisclaimer,
        },
        estimatedCost: total,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to submit')
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-96 flex items-center overflow-hidden pt-20" style={{ background: '#0A0A0A' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.07) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <GeometricCorners />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full relative z-10 py-20">
          <div className="max-w-2xl">
            <Reveal>
              <div className="tag">Pricing Estimate</div>
              <h1 className="text-5xl sm:text-6xl font-display font-bold mb-6" style={{ color: '#FAFAFA' }}>
                Business Setup<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Cost Calculator</em>
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-lg" style={{ color: '#AAAAAA' }}>
                Get an instant estimate for setting up your company in the UAE.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 theme-light">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Form Steps - Main focus area */}
            <div className="lg:col-span-2">
              <div className="space-y-10">
                {/* Step 1: Company Type */}
                <div>
                  <h3 className="text-lg font-semibold mb-5" style={{ color: 'var(--ink)' }}>
                    Step 1 — Company Type
                  </h3>
                  <div className="space-y-2">
                    {['mainland', 'freezone', 'offshore'].map(type => (
                      <label
                        key={type}
                        className="flex items-center p-3 rounded border cursor-pointer transition hover:border-opacity-100"
                        style={{
                          borderColor: companyType === type ? 'var(--gold)' : 'var(--border)',
                          background: companyType === type ? 'rgba(201, 160, 96, 0.12)' : 'transparent',
                        }}
                      >
                        <input
                          type="radio"
                          name="company-type"
                          value={type}
                          checked={companyType === type as any}
                          onChange={e => setCompanyType(e.target.value as any)}
                          className="mr-3 w-4 h-4"
                        />
                        <span className="capitalize font-medium" style={{ color: 'var(--ink)' }}>
                          {type === 'freezone' ? 'Free Zone' : type.charAt(0).toUpperCase() + type.slice(1)}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Step 2: Business Activity */}
                <div>
                  <h3 className="text-lg font-semibold mb-5" style={{ color: 'var(--ink)' }}>
                    Step 2 — Business Activity Category
                  </h3>
                  <select
                    value={activity}
                    onChange={e => setActivity(e.target.value)}
                    className="w-full p-3 rounded border font-medium"
                    style={{ borderColor: 'var(--border)', color: 'var(--ink)', background: 'transparent' }}
                  >
                    {['Trading', 'Services', 'Consulting', 'E-commerce', 'Manufacturing', 'Media & Creative', 'Education', 'Technology', 'Other'].map(
                      act => (
                        <option key={act} value={act} style={{ background: '#FAFAFA', color: '#0A0A0A' }}>
                          {act}
                        </option>
                      ),
                    )}
                  </select>
                </div>

                {/* Step 3: Visas */}
                <div>
                  <h3 className="text-lg font-semibold mb-5" style={{ color: 'var(--ink)' }}>
                    Step 3 — Number of Visas Required
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {[0, 1, 2, 3, 4, 5].map(num => (
                      <label
                        key={num}
                        className="flex items-center justify-center p-3 rounded border cursor-pointer transition font-medium"
                        style={{
                          borderColor: visas === num ? 'var(--gold)' : 'var(--border)',
                          background: visas === num ? 'rgba(201, 160, 96, 0.12)' : 'transparent',
                        }}
                      >
                        <input
                          type="radio"
                          name="visas"
                          value={num}
                          checked={visas === num}
                          onChange={e => setVisas(parseInt(e.target.value))}
                          className="hidden"
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
                  <h3 className="text-lg font-semibold mb-5" style={{ color: 'var(--ink)' }}>
                    Step 4 — Office Type
                  </h3>
                  <div className="space-y-2">
                    {[
                      { value: 'virtual', label: 'No Office (Virtual/Flexi-desk)' },
                      { value: 'shared', label: 'Shared Office' },
                      { value: 'physical', label: 'Physical Office' },
                    ].map(opt => (
                      <label
                        key={opt.value}
                        className="flex items-center p-3 rounded border cursor-pointer transition hover:border-opacity-100"
                        style={{
                          borderColor: office === opt.value as any ? 'var(--gold)' : 'var(--border)',
                          background: office === opt.value as any ? 'rgba(201, 160, 96, 0.12)' : 'transparent',
                        }}
                      >
                        <input
                          type="radio"
                          name="office"
                          value={opt.value}
                          checked={office === opt.value as any}
                          onChange={e => setOffice(e.target.value as any)}
                          className="mr-3 w-4 h-4"
                        />
                        <span className="font-medium" style={{ color: 'var(--ink)' }}>
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Step 5: Additional Services */}
                <div>
                  <h3 className="text-lg font-semibold mb-5" style={{ color: 'var(--ink)' }}>
                    Step 5 — Additional Services
                  </h3>
                  <div className="space-y-2">
                    {[
                      { key: 'vat', label: 'VAT Registration' },
                      { key: 'corporate-tax', label: 'Corporate Tax Registration' },
                      { key: 'bank-account', label: 'Corporate Bank Account Opening' },
                      { key: 'accounting', label: 'Accounting & Bookkeeping (Monthly)' },
                      { key: 'trademark', label: 'Trademark Registration' },
                      { key: 'attestation', label: 'Document Attestation' },
                    ].map(svc => (
                      <label
                        key={svc.key}
                        className="flex items-center p-3 rounded border cursor-pointer transition hover:border-opacity-100"
                        style={{ borderColor: 'var(--border)' }}
                      >
                        <input
                          type="checkbox"
                          checked={services.has(svc.key)}
                          onChange={() => toggleService(svc.key)}
                          className="mr-3 w-4 h-4"
                        />
                        <span className="font-medium" style={{ color: 'var(--ink)' }}>
                          {svc.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Summary Card (Sticky) */}
            <div className="lg:col-span-1">
              <div
                className="rounded-lg p-8 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto"
                style={{ background: 'rgba(201, 160, 96, 0.08)', border: '1px solid var(--border)' }}
              >
                <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--ink)' }}>
                  Your Estimate
                </h3>

                <div className="mb-6 p-5 rounded" style={{ background: 'rgba(201, 160, 96, 0.15)', border: '1px solid var(--gold)' }}>
                  <div className="text-sm mb-2" style={{ color: 'var(--ink-muted)' }}>
                    Starting at:
                  </div>
                  <div
                    className="text-3xl font-bold transition"
                    style={{
                      color: 'var(--gold)',
                      filter: isEstimateMasked ? 'blur(8px)' : 'none',
                      userSelect: 'none',
                    }}
                    aria-label={isEstimateMasked ? 'Estimate hidden until quote form is submitted' : 'Estimate visible'}
                  >
                    AED XXXXX
                  </div>
                  {isEstimateMasked && (
                    <div className="text-xs mt-2" style={{ color: 'var(--ink-muted)' }}>
                      Submit the form and our team will share your exact quote.
                    </div>
                  )}
                  {monthlyAdd > 0 && (
                    <div
                      className="text-xs mt-3 pt-3"
                      style={{
                        borderTop: '1px solid rgba(201, 160, 96, 0.3)',
                        color: 'var(--ink-muted)',
                        filter: isEstimateMasked ? 'blur(6px)' : 'none',
                        userSelect: 'none',
                      }}
                    >
                      + AED XXXX / month
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 rounded font-semibold transition mb-4"
                  style={{
                    background: 'var(--gold)',
                    color: 'var(--dark)',
                    cursor: 'pointer',
                  }}
                >
                  Get Quote
                </button>

                <a
                  href="https://wa.me/971507735378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 rounded font-semibold transition border"
                  style={{ borderColor: 'var(--gold)', color: 'var(--gold)', background: 'transparent' }}
                >
                  WhatsApp Us
                </a>

                <div className="mt-6 p-4 rounded text-xs" style={{ background: 'rgba(201, 160, 96, 0.08)', border: '1px solid rgba(201, 160, 96, 0.2)' }}>
                  <div className="font-semibold mb-2" style={{ color: 'var(--gold)' }}>
                    📋 Note
                  </div>
                  <p style={{ color: 'var(--ink-dim)', lineHeight: '1.5' }}>
                    Government fees and third-party charges are additional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <CalculatorQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        totalCost={total}
        monthlyAdd={monthlyAdd}
        onSubmit={handleSubmitQuote}
      />
    </>
  )
}
