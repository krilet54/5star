import type { Metadata } from 'next'
import EnquiryForm from '@/components/EnquiryForm'
import Reveal from '@/components/Reveal'
import GeometricCorners from '@/components/GeometricCorners'
import { SITE_INFO } from '@/lib/site-info'
import { buildLocalBusinessJsonLd } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Contact Us - Book a Free Consultation',
  description: 'Get in touch with Star One for UAE business setup help. Call, WhatsApp, or email our team to book a free consultation today.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us - Book a Free Consultation',
    description: 'Get in touch with Star One for UAE business setup help. Call, WhatsApp, or email our team to book a free consultation today.',
    url: '/contact',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Contact Us - Book a Free Consultation', description: 'Get in touch with Star One for UAE business setup help. Call, WhatsApp, or email our team to book a free consultation today.' },
}

export default function ContactPage() {
  const localBusinessJsonLd = buildLocalBusinessJsonLd()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      {/* HERO */}
      <section className="pt-24 pb-20 relative overflow-hidden section-corner-accent" style={{ background: '#FAFAFA', borderColor: '#E0E0E0', color: '#0A0A0A' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.06) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <GeometricCorners />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="decor-vertical" />
          <div className="tag tag-dark">Contact</div>
          <h1 className="font-display mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 500, lineHeight: 1.1, color: '#0A0A0A' }}>
            Let's Build Your<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Business Together</em>
          </h1>
          <p className="text-lg max-w-lg" style={{ color: '#555555', lineHeight: 1.8 }}>
            Whether you're ready to launch or just exploring — our team is here to answer every question and guide you forward with clarity.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="pb-24 relative section-corner-accent-subtle" style={{ background: '#FAFAFA', color: '#0A0A0A' }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.06) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_540px] gap-16 items-start">
            {/* LEFT: Contact info with decorative frame */}
            <div className="content-frame">
              <div className="flex flex-col gap-6 mb-10">
                {[
                  {
                    icon: '📍',
                    title: 'Our Location',
                    lines: [SITE_INFO.address.streetAddress, `${SITE_INFO.address.addressLocality}, ${SITE_INFO.address.addressRegion}, UAE`],
                    action: null,
                  },
                  {
                    icon: '📞',
                    title: 'Phone',
                    lines: [SITE_INFO.phoneDisplay],
                    action: `tel:${SITE_INFO.phoneHref}`,
                  },
                  {
                    icon: '✉️',
                    title: 'Email',
                    lines: [SITE_INFO.email],
                    action: `mailto:${SITE_INFO.email}`,
                  },
                  {
                    icon: '🕐',
                    title: 'Business Hours',
                    lines: ['Sunday - Thursday: 9:00 AM - 6:00 PM GST', 'Friday: 9:00 AM - 1:00 PM GST', 'Saturday: Closed'],
                    action: null,
                  },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 60}>
                    <div className="flex gap-5 items-start">
                      <div className="w-12 h-12 flex items-center justify-center text-xl flex-shrink-0 border rounded-sm" style={{ background: 'rgba(201,168,76,0.1)', borderColor: '#E0E0E0', color: '#0A0A0A' }}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#555555' }}>{item.title}</div>
                        {item.lines.map((line, j) =>
                          item.action && j === 0 ? (
                            <a key={j} href={item.action} className="block text-base" style={{ color: '#0A0A0A' }}>{line}</a>
                          ) : (
                            <div key={j} className="text-base" style={{ color: '#0A0A0A' }}>{line}</div>
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
                  href={`${SITE_INFO.whatsappHref}?text=Hello%20Star%20One%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
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
                    <div className="font-semibold text-sm mb-0.5" style={{ color: '#0A0A0A' }}>WhatsApp Us Directly</div>
                    <div className="text-xs" style={{ color: '#555555' }}>Typically replies within 1 hour · {SITE_INFO.phoneDisplay}</div>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={280}>
                <a
                  href={SITE_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-sm border px-5 py-3 text-sm font-semibold transition-all mb-10"
                  style={{ background: '#25D366', borderColor: '#25D366', color: '#FFFFFF' }}
                >
                  WhatsApp Chat
                </a>
              </Reveal>

              {/* LinkedIn block */}
              <Reveal delay={340}>
                <a
                  href={SITE_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 border rounded-sm transition-all mb-10"
                  style={{ background: 'rgba(10,102,194,0.04)', borderColor: 'rgba(10,102,194,0.2)' }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#0A66C2' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.369-1.85 3.601 0 4.267 2.369 4.267 5.452v6.289zM5.337 7.433c-1.144 0-2.069-.925-2.069-2.065 0-1.14.925-2.065 2.069-2.065 1.143 0 2.068.925 2.068 2.065 0 1.14-.925 2.065-2.068 2.065zM7.119 20.452H3.553V9h3.566v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.207 24 24 23.226 24 22.271V1.729C24 .774 23.207 0 22.225 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5" style={{ color: '#0A0A0A' }}>Follow Us on LinkedIn</div>
                    <div className="text-xs" style={{ color: '#555555' }}>See company updates, insights, and announcements</div>
                  </div>
                </a>
              </Reveal>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-0 border rounded-sm" style={{ borderColor: '#E0E0E0' }}>
                {[
                  { val: '24hrs', label: 'Response Time' },
                  { val: 'Free', label: 'Consultation' },
                ].map((s, i) => (
                  <div key={i} className="p-6 text-center border-r last:border-r-0" style={{ borderColor: '#E0E0E0', background: '#F5F5F5' }}>
                    <div className="font-display text-2xl font-medium" style={{ fontFamily: 'var(--font-display)', color: '#C9A84C' }}>{s.val}</div>
                    <div className="text-xs mt-1 tracking-wide" style={{ color: '#555555' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Form with decorative frame */}
            <div className="frame-with-corners" style={{ background: '#FAFAFA', color: '#0A0A0A' }}>
              <h2 className="font-display text-2xl font-medium mb-2" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>Request a Free Consultation</h2>
              <p className="text-sm mb-8" style={{ color: '#555555' }}>
                Fill in your details and our team will contact you within 24 hours to arrange a consultation.
              </p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <div className="border-t" style={{ borderColor: '#E0E0E0' }}>
        <iframe
          title="Star One office location map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(`${SITE_INFO.address.streetAddress}, ${SITE_INFO.address.addressLocality}, UAE`)}&output=embed`}
          width="100%"
          height="360"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  )
}
