import { MetadataRoute } from 'next'
import { createAdminClient } from '@/lib/supabase-server'
import { services } from '@/lib/services-data'
import { getServiceCanonicalPath } from '@/lib/seo'
import { localBlogPosts } from '@/lib/blog-posts'
import { getDeletedArticleSlugs } from '@/lib/article-tombstones'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.starone.ae'

  const supabase = createAdminClient()
  const { data: articles } = await supabase
    .from('articles')
    .select('slug, updated_at, published')

  const deletedSlugs = new Set(await getDeletedArticleSlugs())
  const dbArticles = ((articles ?? []) as Array<{ slug: string; updated_at: string; published: boolean }>)
    .filter(article => !deletedSlugs.has(article.slug))
  const publishedDbArticles = dbArticles.filter(article => article.published)
  const dbSlugs = new Set(dbArticles.map(article => article.slug))

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/faqs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/insights`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/free-zone-dubai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ifza-business-setup`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/dmcc-company-formation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/rakez-business-setup`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/shams-business-setup`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/meydan-free-zone`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/freelance-license-dubai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/ecommerce-company-setup-dubai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/business-setup-dubai-for-indians`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/offshore-company-formation-uae`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${baseUrl}${getServiceCanonicalPath(s.slug)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const articlePages: MetadataRoute.Sitemap = [
    ...publishedDbArticles.map((a): MetadataRoute.Sitemap[number] => ({
      url: `${baseUrl}/insights/${a.slug}`,
      lastModified: new Date(a.updated_at),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...localBlogPosts
      .filter(post => !dbSlugs.has(post.slug) && !deletedSlugs.has(post.slug))
      .map((a): MetadataRoute.Sitemap[number] => ({
        url: `${baseUrl}/insights/${a.slug}`,
        lastModified: new Date(a.updated_at),
        changeFrequency: 'monthly',
        priority: 0.75,
      })),
  ]

  return [...staticPages, ...servicePages, ...articlePages]
}
