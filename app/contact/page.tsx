import type { Metadata } from 'next'
import EnquiryForm from '@/components/EnquiryForm'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Contact Us — Book a Free Consultation',
  description: 'Get in touch with Star One. Book a free 30-minute consultation with our Dubai business setup experts. WhatsApp, phone, email — we\'re here to help.',
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 relative overflow-hidden" style={{ background: 'var(--dark)' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.06) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="tag">Contact</div>
          <h1 className="font-display mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 500, lineHeight: 1.1 }}>
            Let's Build Your<br /><em style={{ color: 'var(--gold)' }}>Business Together</em>
          </h1>
          <p className="text-lg max-w-lg" style={{ color: 'var(--ink-muted)', lineHeight: 1.8 }}>
            Whether you're ready to launch or just exploring — our team is here to answer every question and guide you forward with clarity.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid lg:grid-cols-[1fr_540px] gap-16 items-start">
            {/* LEFT: Contact info */}
            <div>
              <div className="flex flex-col gap-6 mb-10">
                {[
                  {
                    icon: '📍',
                    title: 'Our Location',
                    lines: ['Dubai, United Arab Emirates'],
                    action: null,
                  },
                  {
                    icon: '📞',
                    title: 'Phone',
                    lines: ['+971 50 216 5471', '+971 50 850 1608'],
                    action: 'tel:+971502165471',
                  },
                  {
                    icon: '✉️',
                    title: 'Email',
                    lines: ['info@starone.ae'],
                    action: 'mailto:info@starone.ae',
                  },
                  {
                    icon: '🕐',
                    title: 'Business Hours',
                    lines: ['Mon – Fri: 9:00 AM – 6:00 PM GST', 'Sat: 10:00 AM – 2:00 PM GST'],
                    action: null,
                  },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <div className="flex gap-5 items-start">
                      <div className="w-12 h-12 flex items-center justify-center text-xl flex-shrink-0 border rounded-sm" style={{ background: 'var(--gold-muted)', borderColor: 'var(--gold-border)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--ink-muted)' }}>{item.title}</div>
                        {item.lines.map((line, j) =>
                          item.action && j === 0 ? (
                            <a key={j} href={item.action} className="block text-base" style={{ color: 'var(--ink)' }}>{line}</a>
                          ) : (
                            <div key={j} className="text-base" style={{ color: 'var(--ink)' }}>{line}</div>
                          )
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* WhatsApp block */}
              <Reveal delay={250}>
                <a
                    href="https://wa.me/971502165471?text=Hello%20Star%20One%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 p-6 border rounded-sm transition-all mb-10 wa-block"
                    style={{ background: 'rgba(37,211,102,0.04)', borderColor: 'rgba(37,211,102,0.2)' }}
                  >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#25D366' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5" style={{ color: 'var(--ink)' }}>WhatsApp Us Directly</div>
                    <div className="text-xs" style={{ color: 'var(--ink-muted)' }}>Typically replies within 1 hour · +971 50 216 5471</div>
                  </div>
                </a>
              </Reveal>

              {/* Quick facts */}
              <div className="grid grid-cols-3 gap-0 border rounded-sm" style={{ borderColor: 'var(--border)' }}>
                {[
                  { val: '24hrs', label: 'Response Time' },
                  { val: 'Free', label: 'Consultation' },
                  { val: '500+', label: 'Clients Served' },
                ].map((s, i) => (
                  <div key={i} className="p-6 text-center border-r last:border-r-0" style={{ borderColor: 'var(--border)', background: 'var(--dark-2)' }}>
                    <div className="font-display text-2xl font-medium" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>{s.val}</div>
                    <div className="text-xs mt-1 tracking-wide" style={{ color: 'var(--ink-muted)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="border p-10 rounded-sm" style={{ background: 'var(--dark-3)', borderColor: 'var(--border)' }}>
              <h2 className="font-display text-2xl font-medium mb-2" style={{ fontFamily: 'var(--font-display)' }}>Request a Free Consultation</h2>
              <p className="text-sm mb-8" style={{ color: 'var(--ink-muted)' }}>
                Fill in your details and our team will contact you within 24 hours to arrange a consultation.
              </p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <div className="border-t" style={{ borderColor: 'var(--border)', background: 'var(--dark-2)' }}>
        <div className="h-64 flex items-center justify-center" style={{ background: 'var(--dark-3)' }}>
          <div className="text-center">
            <div className="text-4xl mb-3">📍</div>
            <div className="font-display text-xl" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>Dubai, UAE</div>
            <div className="text-sm mt-1" style={{ color: 'var(--ink-muted)' }}>Business Bay / DIFC area</div>
            <a
              href="https://maps.google.com/?q=Dubai+UAE"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-4"
              style={{ display: 'inline-flex' }}
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
