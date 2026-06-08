import { faqData } from '@/lib/faq-data'

export default function FAQsContent() {
  return (
    <section className="py-20 theme-dark">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="content-frame">
          <div className="space-y-12">
            {faqData.map((category, categoryIdx) => (
              <div key={category.title}>
                <div className="mb-6">
                  <div className="tag mb-2">Category {String(categoryIdx + 1).padStart(2, '0')}</div>
                  <h2 className="font-display text-2xl sm:text-3xl font-medium" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.faqs.map((faq, idx) => (
                    <details
                      key={faq.q}
                      className="rounded border transition-all content-box-light"
                      style={{ borderColor: 'var(--border)', background: 'transparent' }}
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6" style={{ color: 'var(--ink)' }}>
                        <span className="text-base font-medium flex-1">{faq.q}</span>
                        <span className="flex-shrink-0 text-sm font-semibold" style={{ color: 'var(--gold)' }}>
                          {idx < 9 ? '0' : ''}{idx + 1}
                        </span>
                      </summary>
                      <div
                        className="px-6 pb-6 text-sm"
                        style={{ color: 'var(--ink-muted)', lineHeight: 1.7 }}
                      >
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
