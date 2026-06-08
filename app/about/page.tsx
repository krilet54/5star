import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  CheckCircle2,
  Globe,
  Handshake,
  ShieldCheck,
  TrendingUp,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Star One | Dubai Business Setup Experts | Star One',
  description: 'About Star One and our Dubai business setup team. Clear UAE company formation support from AED 5,750. Book a free consultation today.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Star One | Dubai Business Setup Experts | Star One',
    description: 'About Star One and our Dubai business setup team. Clear UAE company formation support from AED 5,750. Book a free consultation today.',
    url: '/about',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'About Star One | Dubai Business Setup Experts | Star One', description: 'About Star One and our Dubai business setup team. Clear UAE company formation support from AED 5,750. Book a free consultation today.' },
}

type ValueItem = {
  title: string
  desc: string
  icon: ReactNode
}

const values: ValueItem[] = [
  {
    title: 'Precision',
    desc: 'Every application and document handled with care.',
    icon: <CheckCircle2 size={22} color="#C9A84C" aria-hidden="true" />,
  },
  {
    title: 'Partnership',
    desc: 'We work with you throughout the setup journey.',
    icon: <Handshake size={22} color="#C9A84C" aria-hidden="true" />,
  },
  {
    title: 'Integrity',
    desc: 'Transparent pricing and straightforward advice.',
    icon: <ShieldCheck size={22} color="#C9A84C" aria-hidden="true" />,
  },
  {
    title: 'Speed',
    desc: 'Fast turnaround and pragmatic solutions.',
    icon: <Zap size={22} color="#C9A84C" aria-hidden="true" />,
  },
  {
    title: 'Global Thinking',
    desc: 'Experienced with international clients and cross-border needs.',
    icon: <Globe size={22} color="#C9A84C" aria-hidden="true" />,
  },
  {
    title: 'Growth-Focused',
    desc: 'Services designed to support scaling businesses.',
    icon: <TrendingUp size={22} color="#C9A84C" aria-hidden="true" />,
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FAFAFA] py-24">
        <Image
          src="/who we are.png"
          alt="Star One business consultancy team and workspace in the UAE"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center blur-[1.5px] scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.14)]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center md:px-16">
          <div className="mx-auto max-w-[760px]">
            <div className="font-display mb-4 inline-flex rounded-full border border-[rgba(255,255,255,0.75)] bg-[rgba(255,255,255,0.72)] px-3 py-1 text-[13px] font-bold uppercase tracking-[0.12em] text-[#A07840] backdrop-blur-[2px]">
              Who We Are
            </div>
            <h1 className="font-display text-[#000000]" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.15 }}>
              We Make Starting a Business in the UAE Feel Simple.
            </h1>
            <p className="mx-auto mt-5 max-w-[640px] text-center text-[#333333]" style={{ fontSize: '17px', lineHeight: 1.75 }}>
              We are Star One — and we are here to make starting a business in the UAE feel simple, smooth, and actually exciting.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F4] py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-16">
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'We Keep It Real',
                desc: 'Straightforward advice without hidden fees or surprises.',
              },
              {
                step: '02',
                title: 'We Stay With You',
                desc: 'End-to-end support from formation to growth.',
              },
              {
                step: '03',
                title: 'Built For Growth',
                desc: 'Practical solutions that prepare you to scale.',
              },
            ].map((item) => (
              <div key={item.title} className="flex h-full flex-col rounded-[12px] bg-[#FFFFFF] p-8">
                <div className="mb-3 text-[40px] font-bold leading-none text-[#C9A84C]">{item.step}</div>
                <h2 className="font-display mb-2 text-[18px] font-semibold text-[#000000]">{item.title}</h2>
                <p className="text-[15px] leading-[1.7] text-[#555555]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-24">
        <div className="mx-auto flex max-w-6xl items-stretch justify-center px-6 md:px-16">
          <div className="flex max-w-[800px] flex-row items-stretch">
            <div className="mr-8 w-[3px] self-stretch bg-[#C9A84C]" />
            <div className="text-center md:text-left">
              <p className="font-display text-[#FFFFFF]" style={{ fontSize: '28px', fontWeight: 500, lineHeight: 1.5 }}>
                To make business setup in the UAE simple, stress-free, and accessible for every entrepreneur.
              </p>
              <p className="mt-4 text-[#999999]" style={{ fontSize: '17px', lineHeight: 1.7 }}>
                We guide you with clarity, helping you make the right decisions based on your goals, budget, and long-term vision — so ideas can become real businesses with confidence.
              </p>
              <div className="mt-5 text-[#C9A84C]" style={{ fontSize: '15px', fontStyle: 'italic', lineHeight: 1.7 }}>
                Structured, calm, professional.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-16 text-center">
          <div className="font-display text-[13px] font-semibold uppercase tracking-[0.1em] text-[#C9A84C]">
            Our Values
          </div>
          <h2 className="font-display mb-10 mt-2 text-[#000000]" style={{ fontSize: '36px', lineHeight: 1.15, fontWeight: 700 }}>
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex h-full flex-col rounded-[10px] border border-[#E5E5E5] border-t-[3px] border-t-[#C9A84C] bg-[#FFFFFF] p-7 text-center md:text-left">
                <div className="mb-3 text-[#C9A84C]" aria-hidden="true">
                  {value.icon}
                </div>
                <h3 className="font-display mb-1.5 text-[16px] font-semibold text-[#000000]">{value.title}</h3>
                <p className="text-[14px] leading-[1.65] text-[#555555]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F4] py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-16 text-center">
          <div className="font-display text-[13px] font-semibold uppercase tracking-[0.1em] text-[#C9A84C]">
            The Team
          </div>
          <h2 className="font-display mb-10 mt-2 text-[#000000]" style={{ fontSize: '36px', lineHeight: 1.15, fontWeight: 700 }}>
            The People Behind Star One
          </h2>
          <div className="mx-auto max-w-[520px] rounded-[14px] border border-[#E5E5E5] bg-[#FFFFFF] p-9 text-center md:text-left">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-6">
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full border-[3px] border-[#C9A84C] bg-[#C9A84C] text-[18px] font-semibold text-[#000000]">
                MS
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-[20px] font-semibold text-[#000000]">Maria</div>
                <div className="mt-0.5 text-[14px] text-[#555555]">Founder & Principal Consultant</div>
                <div className="my-3 border-t border-[#E5E5E5]" />
                <p className="text-[15px] leading-[1.7] text-[#555555]">
                  With over a decade of experience in UAE business formation, Maria leads the team with practical, results-driven guidance. The focus is always the same: remove friction, reduce uncertainty, and give founders a calm path from idea to operating company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0A0A] py-24">
        <div className="mx-auto max-w-[680px] px-6 md:px-16 text-center">
          <div className="font-display text-[13px] font-semibold uppercase tracking-[0.1em] text-[#C9A84C]">
            Ready to Get Started?
          </div>
          <h2 className="font-display mt-3 text-[#FFFFFF]" style={{ fontSize: '38px', fontWeight: 700, lineHeight: 1.15 }}>
            Let&apos;s Build Your UAE Business Today
          </h2>
          <p className="mt-3 text-[#999999]" style={{ fontSize: '16px', lineHeight: 1.7 }}>
            Book a free 30-minute consultation. No obligation, just expert guidance.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-[8px] bg-[#C9A84C] px-6 py-3 font-semibold text-[#000000] transition-opacity hover:opacity-90 sm:w-auto"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-[8px] border border-[1.5px] border-[#FFFFFF] px-6 py-3 font-semibold text-[#FFFFFF] transition-colors hover:bg-[#FFFFFF] hover:text-[#000000] sm:w-auto"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
