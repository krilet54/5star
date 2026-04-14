import { createAdminClient } from '@/lib/supabase-server'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import ArticleActions from './ArticleActions'

export const metadata = { title: 'Articles' }

export default async function AdminArticlesPage() {
  const supabase = createAdminClient()
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Articles</h1>
          <p className="text-sm text-gray-500 mt-1">{articles?.length ?? 0} articles total</p>
        </div>
        <Link href="/admin/articles/new" className="admin-btn admin-btn-gold">+ New Article</Link>
      </div>

      <div className="admin-card overflow-hidden p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-xs text-gray-500 uppercase tracking-wider" style={{ background: '#f9f9f7', borderColor: '#e5e5e0' }}>
              <th className="text-left px-5 py-3 font-semibold">Title</th>
              <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Category</th>
              <th className="text-left px-4 py-3 font-semibold hidden lg:table-cell">Date</th>
              <th className="text-left px-4 py-3 font-semibold">Status</th>
              <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Featured</th>
              <th className="text-right px-5 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: '#f0f0ec' }}>
            {articles && articles.length > 0 ? articles.map((article: {
              id: string; title: string; slug: string; category: string;
              published: boolean; featured: boolean; created_at: string
            }) => (
              <tr key={article.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4">
                  <div className="font-medium text-gray-900 line-clamp-1 max-w-xs">{article.title}</div>
                  <div className="text-xs text-gray-400 mt-0.5">/insights/{article.slug}</div>
                </td>
                <td className="px-4 py-4 hidden md:table-cell">
                  <span className="badge badge-gray">{article.category}</span>
                </td>
                <td className="px-4 py-4 text-gray-500 hidden lg:table-cell">
                  {formatDate(article.created_at)}
                </td>
                <td className="px-4 py-4">
                  <span className={`badge ${article.published ? 'badge-green' : 'badge-gray'}`}>
                    {article.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td className="px-4 py-4 hidden sm:table-cell">
                  {article.featured ? <span className="badge badge-yellow">★ Featured</span> : <span className="text-gray-300">—</span>}
                </td>
                <td className="px-5 py-4 text-right">
                  <ArticleActions article={article} />
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={6} className="px-5 py-12 text-center text-gray-400">
                  <p className="mb-3">No articles yet</p>
                  <Link href="/admin/articles/new" className="admin-btn admin-btn-gold">Write Your First Article →</Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
