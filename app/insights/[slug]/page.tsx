import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { createClient } from '@/lib/supabase-server'
import { formatDate } from '@/lib/utils'
import EnquiryForm from '@/components/EnquiryForm'
import ArticleCoverImage from '@/components/ArticleCoverImage'
import { getArticleImage } from '@/lib/article-images'
import { getArticleFallbackImage } from '@/lib/site-images'

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
      <section className="pt-40 pb-16 relative overflow-hidden" style={{ background: '#FAFAFA', color: '#0A0A0A' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,76,0.045) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 max-w-4xl">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs mb-8" style={{ color: '#555555' }}>
              <Link href="/" style={{ color: '#555555' }}>Home</Link>
              <span>/</span>
              <Link href="/insights" style={{ color: '#555555' }}>Insights</Link>
              <span>/</span>
              <span style={{ color: '#C9A84C' }}>{article.category}</span>
            </div>

            <div className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase mb-6" style={{ background: '#C9A84C', color: '#0A0A0A' }}>
              {article.category}
            </div>

            <h1 className="font-display mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 500, lineHeight: 1.15, color: '#0A0A0A' }}>
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#555555' }}>{article.excerpt}</p>
            )}

            <div className="relative overflow-hidden rounded-2xl border border-[#E0E0E0] mb-8 min-h-[280px] bg-[#F5F5F5] shadow-[0_10px_30px_rgba(10,10,10,0.05)]">
              <ArticleCoverImage
                src={getArticleImage(article)}
                fallbackSrc={getArticleFallbackImage(article.category)}
                alt={article.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.1), rgba(10,10,10,0.35))' }} />
              <div className="absolute top-5 left-5 px-3 py-1.5 text-xs font-bold tracking-widest uppercase" style={{ background: '#C9A84C', color: '#0A0A0A' }}>
                {article.category}
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs pt-6 border-t" style={{ borderColor: '#E0E0E0', color: '#666666' }}>
              <span>By <span style={{ color: '#0A0A0A' }}>Star One Team</span></span>
              <span>{formatDate(article.created_at)}</span>
              <span>{article.read_time} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24" style={{ background: '#F5F5F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-12">
          <div className="grid lg:grid-cols-[1fr_340px] gap-20 items-start">
            {/* Article content */}
            <div className="bg-[#FAFAFA] border border-[#E0E0E0] rounded-2xl p-8 sm:p-10 shadow-[0_12px_40px_rgba(10,10,10,0.04)]">
              <div className="prose-gold text-base">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {article.content}
                </ReactMarkdown>
              </div>

              {/* Share / tags */}
              <div className="mt-14 pt-8 border-t" style={{ borderColor: '#E0E0E0' }}>
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#777777' }}>Share:</span>
                  {[
                    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=https://starone.ae/insights/${article.slug}` },
                    { label: 'Twitter / X', href: `https://twitter.com/intent/tweet?url=https://starone.ae/insights/${article.slug}&text=${encodeURIComponent(article.title)}` },
                    { label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(article.title + ' https://starone.ae/insights/' + article.slug)}` },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="btn btn-outline" style={{ padding: '8px 16px', fontSize: 11, borderColor: '#0A0A0A', color: '#0A0A0A' }}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Author box */}
              <div className="mt-10 p-8 border rounded-2xl" style={{ background: '#FAFAFA', borderColor: '#E0E0E0' }}>
                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold flex-shrink-0"
                    style={{ background: 'rgba(201, 168, 76, 0.12)', border: '1px solid rgba(201, 168, 76, 0.24)', color: '#C9A84C', fontFamily: 'var(--font-display)', fontSize: 18 }}>
                    S1
                  </div>
                  <div>
                    <div className="font-semibold mb-1" style={{ color: '#0A0A0A' }}>Star One Team</div>
                    <div className="text-xs mb-2" style={{ color: '#C9A84C' }}>Business Setup Experts, Dubai UAE</div>
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
              <div className="border p-8 rounded-2xl" style={{ background: '#FAFAFA', borderColor: '#E0E0E0' }}>
                <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#C9A84C' }}>Free Consultation</div>
                <h3 className="font-display text-xl font-medium mb-3" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>Ready to Set Up Your UAE Business?</h3>
                <p className="text-sm mb-6" style={{ color: '#555555' }}>Get personalised guidance from our Dubai business setup experts. 30 minutes, no obligation.</p>
                <EnquiryForm />
              </div>

              {/* Related */}
              {related && related.length > 0 && (
                <div className="border p-6 rounded-2xl" style={{ background: '#FAFAFA', borderColor: '#E0E0E0' }}>
                  <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#777777' }}>Related Articles</div>
                  <div className="flex flex-col gap-4">
                    {related.map((r: { id: string; title: string; slug: string; category: string; read_time: number; created_at: string }) => (
                      <Link key={r.id} href={`/insights/${r.slug}`} className="block group" style={{ textDecoration: 'none' }}>
                        <div className="text-xs mb-1" style={{ color: '#C9A84C' }}>{r.category}</div>
                        <div className="text-sm font-medium leading-snug" style={{ color: '#0A0A0A' }}>{r.title}</div>
                        <div className="text-xs mt-1" style={{ color: '#777777' }}>{r.read_time} min read</div>
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
