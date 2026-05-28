'use client'

import { useState } from 'react'
import { faqData } from '@/lib/faq-data'

export default function FAQsContent() {
  const [openCategory, setOpenCategory] = useState(0)
  const [openFAQ, setOpenFAQ] = useState<{ [key: number]: number }>({ 0: 0 })

  return (
    <section className="py-20 theme-dark">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="content-frame">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12">
            {/* Category sidebar */}
            <div className="space-y-2">
              {faqData.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setOpenCategory(idx)
                    setOpenFAQ({ [idx]: 0 })
                  }}
                  className="w-full text-left py-3 px-4 rounded transition-colors text-sm font-medium"
                  style={{
                    background: openCategory === idx ? 'var(--gold)' : 'transparent',
                    color: openCategory === idx ? 'var(--dark)' : 'var(--ink-muted)',
                    borderLeft: openCategory === idx ? 'none' : '2px solid var(--border)',
                    paddingLeft: openCategory === idx ? 16 : 16,
                  }}
                >
                  {category.title}
                </button>
              ))}
            </div>

            {/* FAQs content */}
            <div className="space-y-4">
              {faqData[openCategory].faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded border transition-all content-box-light"
                  style={{
                    borderColor: 'var(--border)',
                    background: openFAQ[openCategory] === idx ? 'rgba(201, 160, 96, 0.05)' : 'transparent',
                  }}
                >
                  <button
                    onClick={() =>
                      setOpenFAQ(prev => ({
                        ...prev,
                        [openCategory]: prev[openCategory] === idx ? -1 : idx,
                      }))
                    }
                    className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-opacity-50 transition"
                  >
                    <span className="text-base font-medium flex-1" style={{ color: 'var(--ink)' }}>
                      {faq.q}
                    </span>
                    <span
                      className="flex-shrink-0 transition-transform"
                      style={{
                        transform: openFAQ[openCategory] === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: 'var(--gold)',
                      }}
                    >
                      ▼
                    </span>
                  </button>
                  {openFAQ[openCategory] === idx && (
                    <div
                      className="px-6 pb-6 text-sm"
                      style={{ color: 'var(--ink-muted)', lineHeight: 1.7 }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
