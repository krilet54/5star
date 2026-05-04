'use client'

import { useState } from 'react'

interface FAQCategory {
  title: string
  faqs: Array<{ q: string; a: string }>
}

const faqData: FAQCategory[] = [
  {
    title: 'Business Setup',
    faqs: [
      {
        q: 'What is the difference between mainland and free zone?',
        a: 'Mainland companies can trade freely throughout the UAE and with government entities. Free zone companies operate within their designated zone and internationally, but cannot trade directly on the UAE mainland without a local distributor.',
      },
      {
        q: 'Can I own 100% of a company as a foreigner?',
        a: 'Yes. Following the 2021 UAE reforms, most mainland business activities allow 100% foreign ownership. Free zones have always allowed 100% foreign ownership.',
      },
      {
        q: 'How long does business setup take?',
        a: 'A free zone setup typically takes 3 to 5 business days. Mainland setups generally take 5 to 10 business days depending on the activity and approvals required.',
      },
      {
        q: 'Do I need a physical office to set up a company?',
        a: 'For mainland companies, a physical tenancy contract (Ejari) is generally required. Many free zones offer flexi-desk and virtual office options.',
      },
      {
        q: 'What documents are needed to set up a company?',
        a: 'Typically: a copy of your passport, passport-size photos, a business plan (for some activities), and completed application forms. We will provide you with a full checklist at your consultation.',
      },
    ],
  },
  {
    title: 'Visa & Residency',
    faqs: [
      {
        q: 'What visa options are available for business owners?',
        a: 'Business owners can apply for an investor visa, employment visa, or the Golden Visa depending on their investment level, business type, and eligibility.',
      },
      {
        q: 'How long does a UAE visa take to process?',
        a: 'Employment visas typically take 2 to 4 weeks from the entry permit stage. The Golden Visa timeline varies by category, generally 4 to 8 weeks.',
      },
      {
        q: 'Can I sponsor my family in the UAE?',
        a: 'Yes. UAE residents can sponsor their spouse, children, and in some cases parents for dependent visas.',
      },
      {
        q: 'Who qualifies for the Golden Visa?',
        a: 'Investors, senior executives, specialised professionals, outstanding students, and real estate investors may qualify. Contact us for a free eligibility assessment.',
      },
    ],
  },
  {
    title: 'Compliance & Tax',
    faqs: [
      {
        q: 'Do I need to register for Corporate Tax?',
        a: 'Yes. All UAE businesses must register for Corporate Tax within 3 months of obtaining their trade license, even if they have not yet started generating revenue.',
      },
      {
        q: 'What is the Corporate Tax rate?',
        a: '0% on taxable income up to AED 375,000 and 9% on income above that threshold.',
      },
      {
        q: 'When do I need to register for VAT?',
        a: 'When your taxable supplies exceed AED 375,000 annually, VAT registration is mandatory. Voluntary registration is available from AED 187,500.',
      },
      {
        q: 'Is an audit report mandatory?',
        a: 'It depends on your jurisdiction. Many free zones require an annual audit report for license renewal. Mainland companies may also require it for Corporate Tax and banking purposes.',
      },
    ],
  },
  {
    title: 'Banking',
    faqs: [
      {
        q: 'How long does corporate bank account opening take?',
        a: 'Typically 2 to 6 weeks depending on the bank\'s compliance requirements and the nature of your business.',
      },
      {
        q: 'Which banks does Star One work with?',
        a: 'We have relationships with Emirates NBD, ADCB, Mashreq, FAB, RAK Bank, CBD, and several other UAE and international banks.',
      },
      {
        q: 'Can a newly formed company open a bank account immediately?',
        a: 'Yes, many banks accept applications from newly formed companies. Having a clear business plan and complete documents helps accelerate the process.',
      },
    ],
  },
  {
    title: 'General',
    faqs: [
      {
        q: 'How much does business setup cost in the UAE?',
        a: 'Costs vary by license type, activity, and jurisdiction. Our packages start from AED 5,450. Contact us for a personalised quote.',
      },
      {
        q: 'Does Star One handle everything from start to finish?',
        a: 'Yes. We manage the entire process — from consultation and document preparation to license issuance, visa processing, banking, and ongoing compliance.',
      },
      {
        q: 'I am based outside the UAE. Can you still help me?',
        a: 'Absolutely. We specialise in helping international entrepreneurs from the UK, US, South Africa, and worldwide set up businesses in the UAE remotely.',
      },
      {
        q: 'Do you offer post-setup support?',
        a: 'Yes. Our services extend well beyond setup — including accounting, compliance, HR, payroll, VAT filing, and more.',
      },
    ],
  },
]

export default function FAQsContent() {
  const [openCategory, setOpenCategory] = useState(0)
  const [openFAQ, setOpenFAQ] = useState<{ [key: number]: number }>({ 0: 0 })

  return (
    <section className="py-20 theme-light">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
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
                className="rounded border transition-all"
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
    </section>
  )
}
