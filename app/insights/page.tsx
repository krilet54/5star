import type { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'
import { formatDate } from '@/lib/utils'
import type { Article } from '@/types'
import InsightsFilter from '@/components/InsightsFilter'

export const metadata: Metadata = {
  title: 'Insights & Guides — UAE Business Setup Knowledge Hub',
  description: 'Expert articles, guides, and insights on UAE business setup, company formation, visa requirements, tax compliance, and more from Star One.',
}

export const revalidate = 3600

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

  const categories = ['All', ...Array.from(new Set(articles?.map((a: Article) => a.category) ?? []))]

  return (
    <>
      {/* HERO */}
      <section className="pt-40 pb-20 relative overflow-hidden" style={{ background: 'var(--dark)' }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,160,96,0.06) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="decor-vertical" />
          <div className="tag">Insights</div>
          <h1 className="font-display mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 500, lineHeight: 1.1 }}>
            UAE Business Setup<br /><em style={{ color: 'var(--gold)' }}>Knowledge Hub</em>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: 'var(--ink-muted)', lineHeight: 1.8 }}>
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
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-8">
          {/* Featured */}
          {featured && (
            <div className="mb-1">
              <Link
                href={`/insights/${featured.slug}`}
                className="grid lg:grid-cols-2 gap-0 border border-gold-border group"
                style={{ textDecoration: 'none', borderColor: 'var(--gold-border)' }}
                data-insight-cat={featured.category}
              >
                <div className="min-h-[360px] flex items-center justify-center relative overflow-hidden" style={{ background: 'var(--dark-4)' }}>
                  {featured.cover_image ? (
                    <>
                      <img src={featured.cover_image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,8,6,0.25) 0%, rgba(42,24,0,0.35) 100%)' }} />
                    </>
                  ) : (
                    <>
                      <img src={`https://source.unsplash.com/1600x900/?${encodeURIComponent(featured.category || featured.title.split(' ').slice(0,3).join(' '))}`} alt={featured.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1a1200 0%, #2a1800 100%)' }} />
                    </>
                  )}
                  <div className="absolute top-5 left-5 px-3 py-1.5 text-xs font-bold tracking-widest uppercase" style={{ background: 'var(--gold)', color: '#000' }}>
                    Featured Guide
                  </div>
                </div>
                <div className="p-12" style={{ background: 'var(--dark-3)' }}>
                  <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--ink-dim)' }}>
                    {featured.category} · {formatDate(featured.created_at)} · {featured.read_time} min read
                  </div>
                  <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)', lineHeight: 1.2 }}>
                    {featured.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--ink-muted)' }}>{featured.excerpt}</p>
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
                  style={{ textDecoration: 'none' }}
                  data-insight-cat={article.category}
                >
                  <div className="h-52 flex items-center justify-center relative overflow-hidden" style={{ background: 'var(--dark-4)' }}>
                    {article.cover_image ? (
                      <>
                        <img src={article.cover_image} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.18), rgba(0,0,0,0.33))' }} />
                      </>
                    ) : (
                      <>
                        <img src={`https://source.unsplash.com/800x600/?${encodeURIComponent(article.category || article.title.split(' ').slice(0,3).join(' '))}`} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--dark-4), var(--dark-5))' }} />
                      </>
                    )}
                    <div className="absolute top-3 left-3 px-2 py-0.5 text-xs font-bold tracking-wider" style={{ background: 'var(--gold)', color: '#000' }}>
                      {article.category}
                    </div>
                    <span className="relative z-10 text-4xl opacity-10">✦</span>
                  </div>
                  <div className="p-7">
                    <div className="text-xs uppercase tracking-widest mb-3" style={{ color: 'var(--ink-dim)' }}>
                      {formatDate(article.created_at)} · {article.read_time} min
                    </div>
                    <h3 className="font-display text-xl font-medium mb-3" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)', lineHeight: 1.3 }}>
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--ink-muted)' }}>{article.excerpt}</p>
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--gold)' }}>Read More →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {(!articles || articles.length === 0) && (
            <div className="text-center py-24">
              <div className="text-4xl mb-4 opacity-30">✦</div>
              <h3 className="font-display text-2xl mb-2" style={{ fontFamily: 'var(--font-display)', color: 'var(--ink-muted)' }}>Articles Coming Soon</h3>
              <p style={{ color: 'var(--ink-dim)' }}>We're preparing expert guides and insights. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t" style={{ background: 'var(--dark-2)', borderColor: 'var(--border)' }}>
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="font-display text-3xl font-medium mb-4" style={{ fontFamily: 'var(--font-display)' }}>Have a Specific Question?</h2>
          <p className="mb-6" style={{ color: 'var(--ink-muted)' }}>Our experts are ready to give you personalised guidance on your UAE business setup journey.</p>
          <Link href="/contact" className="btn btn-gold">Book Free Consultation →</Link>
        </div>
      </section>
    </>
  )
}
