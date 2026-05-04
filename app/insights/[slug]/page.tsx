import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { createClient } from '@/lib/supabase-server'
import { formatDate } from '@/lib/utils'
import EnquiryForm from '@/components/EnquiryForm'

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: article } = await supabase.from('articles').select('*').eq('slug', slug).single()
  if (!article) return {}
  return {
    title: article.meta_title || article.title,
    description: article.meta_description || article.excerpt || undefined,
    openGraph: {
      title: article.title,
      description: article.excerpt || undefined,
      type: 'article',
      publishedTime: article.created_at,
      modifiedTime: article.updated_at,
    },
  }
}

export const revalidate = 3600

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!article) notFound()

  const { data: related } = await supabase
    .from('articles')
    .select('id, title, slug, excerpt, category, read_time, created_at')
    .eq('published', true)
    .eq('category', article.category)
    .neq('id', article.id)
    .limit(3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.created_at,
    dateModified: article.updated_at,
    author: { '@type': 'Organization', name: 'Star One' },
    publisher: {
      '@type': 'Organization',
      name: 'Star One Business Consultancy',
      url: 'https://starone.ae',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="pt-40 pb-16 relative overflow-hidden" style={{ background: 'var(--dark)' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 max-w-4xl">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs mb-8" style={{ color: 'var(--ink-dim)' }}>
              <Link href="/" style={{ color: 'var(--ink-dim)' }}>Home</Link>
              <span>/</span>
              <Link href="/insights" style={{ color: 'var(--ink-dim)' }}>Insights</Link>
              <span>/</span>
              <span style={{ color: 'var(--gold)' }}>{article.category}</span>
            </div>

            <div className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase mb-6" style={{ background: 'var(--gold)', color: '#000' }}>
              {article.category}
            </div>

            <h1 className="font-display mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 500, lineHeight: 1.15 }}>
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--ink-muted)' }}>{article.excerpt}</p>
            )}

            {article.cover_image && (
              <div className="mb-8">
                <img src={article.cover_image} alt={article.title} className="w-full h-64 object-cover rounded-sm" />
              </div>
            )}

            <div className="flex items-center gap-6 text-xs pt-6 border-t" style={{ borderColor: 'var(--border)', color: 'var(--ink-dim)' }}>
              <span>By <span style={{ color: 'var(--ink-muted)' }}>Star One Team</span></span>
              <span>{formatDate(article.created_at)}</span>
              <span>{article.read_time} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_340px] gap-20 items-start">
            {/* Article content */}
            <div>
              <div className="prose-gold text-base">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {article.content}
                </ReactMarkdown>
              </div>

              {/* Share / tags */}
              <div className="mt-14 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--ink-muted)' }}>Share:</span>
                  {[
                    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=https://starone.ae/insights/${article.slug}` },
                    { label: 'Twitter / X', href: `https://twitter.com/intent/tweet?url=https://starone.ae/insights/${article.slug}&text=${encodeURIComponent(article.title)}` },
                    { label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(article.title + ' https://starone.ae/insights/' + article.slug)}` },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="btn btn-dark" style={{ padding: '8px 16px', fontSize: 11 }}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Author box */}
              <div className="mt-10 p-8 border rounded-sm" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold flex-shrink-0"
                    style={{ background: 'var(--gold-muted)', border: '1px solid var(--gold-border)', color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: 18 }}>
                    S1
                  </div>
                  <div>
                    <div className="font-semibold mb-1" style={{ color: 'var(--ink)' }}>Star One Team</div>
                    <div className="text-xs mb-2" style={{ color: 'var(--gold)' }}>Business Setup Experts, Dubai UAE</div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-muted)' }}>
                      Star One's advisory team brings together over 12 years of UAE business formation experience, helping entrepreneurs from the UK, US, South Africa and beyond establish successful companies in Dubai.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6 sticky top-24">
              {/* CTA Card */}
              <div className="border p-8 rounded-sm" style={{ background: 'var(--dark-3)', borderColor: 'var(--gold-border)' }}>
                <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>Free Consultation</div>
                <h3 className="font-display text-xl font-medium mb-3" style={{ fontFamily: 'var(--font-display)' }}>Ready to Set Up Your UAE Business?</h3>
                <p className="text-sm mb-6" style={{ color: 'var(--ink-muted)' }}>Get personalised guidance from our Dubai business setup experts. 30 minutes, no obligation.</p>
                <EnquiryForm />
              </div>

              {/* Related */}
              {related && related.length > 0 && (
                <div className="border p-6 rounded-sm" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
                  <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--ink-muted)' }}>Related Articles</div>
                  <div className="flex flex-col gap-4">
                    {related.map((r: { id: string; title: string; slug: string; category: string; read_time: number; created_at: string }) => (
                      <Link key={r.id} href={`/insights/${r.slug}`} className="block group" style={{ textDecoration: 'none' }}>
                        <div className="text-xs mb-1" style={{ color: 'var(--gold)' }}>{r.category}</div>
                        <div className="text-sm font-medium leading-snug" style={{ color: 'var(--ink)' }}>{r.title}</div>
                        <div className="text-xs mt-1" style={{ color: 'var(--ink-dim)' }}>{r.read_time} min read</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
