import type { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { formatDate } from '@/lib/utils'
import type { Article } from '@/types'
import InsightsFilter from '@/components/InsightsFilter'
import GeometricCorners from '@/components/GeometricCorners'
import ArticleCoverImage from '@/components/ArticleCoverImage'
import { getArticleImage } from '@/lib/article-images'
import { getArticleFallbackImage } from '@/lib/site-images'

export const metadata: Metadata = {
  title: 'Insights & Guides — UAE Business Setup Knowledge Hub',
  description: 'Expert articles, guides, and insights on UAE business setup, company formation, visa requirements, tax compliance, and more from Star One.',
  alternates: { canonical: '/insights' },
  twitter: { card: 'summary_large_image', title: 'Insights & Guides — UAE Business Setup Knowledge Hub', description: 'Expert articles, guides, and insights on UAE business setup, company formation, visa requirements, tax compliance, and more from Star One.' },
}

export const revalidate = 3600

const canonicalCategories = ['Business Setup', 'Visa', 'Tax', 'Banking']

export default async function InsightsPage() {
  const supabase = await createClient()
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .eq('published', true)
    .order('featured', { ascending: false })
    .order('created_at', { ascending: false })

  const featured = articles?.find(a => a.featured)
  const rest = articles?.filter(a => !a.featured) ?? []

  const articleCategories = Array.from(new Set(articles?.map((a: Article) => a.category) ?? []))
  const categories = ['All', ...canonicalCategories, ...articleCategories.filter(cat => !canonicalCategories.includes(cat))]

  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 relative overflow-hidden" style={{ background: '#FAFAFA' }}>
        <GeometricCorners />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="decor-vertical" />
          <div className="tag">Insights</div>
          <h1 className="font-display mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 500, lineHeight: 1.1, color: '#0A0A0A' }}>
            UAE Business<br /><em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Knowledge Hub</em>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: '#555555', lineHeight: 1.8 }}>
            Expert guides, regulatory updates, and practical insights to help you navigate the UAE business landscape with confidence.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map(cat => (
              <span
                key={cat}
                className={`insights-tab ${cat === 'All' ? 'active' : ''}`}
                role="button"
              >
                {cat}
              </span>
            ))}
          </div>

          <InsightsFilter />
        </div>
      </section>

      {/* ARTICLES */}
      <section className="pb-24" style={{ background: '#F5F5F5' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Featured */}
          {featured && (
            <div className="mb-1 frame-with-corners" style={{ padding: 0 }}>
              <Link
                href={`/insights/${featured.slug}`}
                className="grid lg:grid-cols-2 gap-0 border border-gold-border group"
                style={{ textDecoration: 'none', borderColor: '#C9A84C' }}
                data-insight-cat={featured.category}
              >
                <div className="min-h-[360px] relative overflow-hidden" style={{ background: '#F5F5F5' }}>
                  <ArticleCoverImage
                    src={getArticleImage(featured)}
                    fallbackSrc={getArticleFallbackImage(featured.category)}
                    alt={featured.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.2), rgba(10,10,10,0.55))' }} />
                  <div className="absolute top-5 left-5 px-3 py-1.5 text-xs font-bold tracking-widest uppercase" style={{ background: '#C9A84C', color: '#0A0A0A' }}>
                    Featured Guide
                  </div>
                </div>
                <div className="p-12" style={{ background: '#FAFAFA' }}>
                  <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#555555' }}>
                    {featured.category} · {formatDate(featured.created_at)} · {featured.read_time} min read
                  </div>
                  <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A', lineHeight: 1.2 }}>
                    {featured.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#555555' }}>{featured.excerpt}</p>
                  <span className="btn btn-gold" style={{ display: 'inline-flex' }}>Read Full Guide →</span>
                </div>
              </Link>
            </div>
          )}

          {/* Grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 mt-0.5">
              {rest.map((article: Article) => (
                <Link
                  key={article.id}
                  href={`/insights/${article.slug}`}
                  className="card p-7"
                  style={{ textDecoration: 'none', background: '#FAFAFA', borderColor: '#E0E0E0', color: '#0A0A0A' }}
                  data-insight-cat={article.category}
                >
                  <div className="h-52 relative overflow-hidden" style={{ background: '#F5F5F5' }}>
                    <ArticleCoverImage
                      src={getArticleImage(article)}
                      fallbackSrc={getArticleFallbackImage(article.category)}
                      alt={article.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.18), rgba(10,10,10,0.45))' }} />
                    <div className="absolute top-3 left-3 px-2 py-0.5 text-xs font-bold tracking-wider" style={{ background: '#C9A84C', color: '#0A0A0A' }}>
                      {article.category}
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="text-xs uppercase tracking-widest mb-3" style={{ color: '#555555' }}>
                      {formatDate(article.created_at)} · {article.read_time} min
                    </div>
                    <h3 className="font-display text-xl font-medium mb-3" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A', lineHeight: 1.3 }}>
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: '#555555' }}>{article.excerpt}</p>
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C9A84C' }}>Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {(!articles || articles.length === 0) && (
            <div className="text-center py-24">
              <div className="text-4xl mb-4 opacity-30">✦</div>
              <h3 className="font-display text-2xl mb-2" style={{ fontFamily: 'var(--font-display)', color: '#555555' }}>Articles Coming Soon</h3>
              <p style={{ color: '#555555' }}>We're preparing expert guides and insights. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t" style={{ background: '#FAFAFA', borderColor: '#E0E0E0', color: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0A0A0A' }}>Have a Specific Question?</h2>
          <p className="mb-6" style={{ color: '#555555' }}>Our experts are ready to give you personalised guidance on your UAE business setup journey.</p>
          <Link href="/contact" className="btn btn-gold">Book Free Consultation →</Link>
        </div>
      </section>
    </>
  )
}
