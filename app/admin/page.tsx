import { createAdminClient } from '@/lib/supabase-server'
import Link from 'next/link'
import { FileText, Inbox, Plus, TrendingUp, Calculator } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export const metadata = { title: 'Dashboard' }

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
  const supabase = createAdminClient()

  const [{ count: articleCount }, { count: enquiryCount }, { count: calcLeadsCount }, { data: recentEnquiries }, { data: recentArticles }] = await Promise.all([
    supabase.from('articles').select('*', { count: 'exact', head: true }),
    supabase.from('enquiries').select('*', { count: 'exact', head: true }),
    supabase.from('calculator_leads').select('*', { count: 'exact', head: true }),
    supabase.from('enquiries').select('*').order('created_at', { ascending: false }).limit(5),
    supabase.from('articles').select('id, title, slug, published, featured, created_at').order('created_at', { ascending: false }).limit(5),
  ])

  const { count: newEnquiries } = await supabase.from('enquiries').select('*', { count: 'exact', head: true }).eq('status', 'new')

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Welcome back to Star One admin.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {[
          { label: 'Total Articles', value: articleCount ?? 0, icon: FileText, color: '#C9A060', href: '/admin/articles' },
          { label: 'Total Enquiries', value: enquiryCount ?? 0, icon: Inbox, color: '#3b82f6', href: '/admin/enquiries' },
          { label: 'Calculator Leads', value: calcLeadsCount ?? 0, icon: Calculator, color: '#8b5cf6', href: '/admin/calculator-leads' },
          { label: 'New Enquiries', value: newEnquiries ?? 0, icon: TrendingUp, color: '#22c55e', href: '/admin/enquiries' },
          { label: 'Quick Actions', value: '+', icon: Plus, color: '#f59e0b', href: '/admin/articles/new' },
        ].map(stat => (
          <Link key={stat.label} href={stat.href} className="admin-card flex items-center gap-4 no-underline" style={{ textDecoration: 'none' }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: stat.color + '15' }}>
              <stat.icon size={20} style={{ color: stat.color }} />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Enquiries */}
        <div className="admin-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Recent Enquiries</h2>
            <Link href="/admin/enquiries" className="text-xs text-amber-600 hover:underline">View All →</Link>
          </div>
          {recentEnquiries && recentEnquiries.length > 0 ? (
            <div className="flex flex-col divide-y divide-gray-100">
              {recentEnquiries.map((enq: { id: string; first_name: string; last_name?: string; email: string; service?: string; status: string; created_at: string }) => (
                <div key={enq.id} className="py-3 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-gray-800">{enq.first_name} {enq.last_name}</div>
                    <div className="text-xs text-gray-500">{enq.email}</div>
                    {enq.service && <div className="text-xs text-amber-600 mt-0.5">{enq.service}</div>}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className={`badge ${enq.status === 'new' ? 'badge-green' : enq.status === 'contacted' ? 'badge-yellow' : 'badge-gray'}`}>
                      {enq.status}
                    </span>
                    <div className="text-xs text-gray-400 mt-1">{formatDate(enq.created_at)}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 py-4 text-center">No enquiries yet</p>
          )}
        </div>

        {/* Recent Articles */}
        <div className="admin-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Recent Articles</h2>
            <Link href="/admin/articles/new" className="admin-btn admin-btn-gold text-xs">+ New Article</Link>
          </div>
          {recentArticles && recentArticles.length > 0 ? (
            <div className="flex flex-col divide-y divide-gray-100">
              {recentArticles.map((art: { id: string; title: string; slug: string; published: boolean; featured: boolean; created_at: string }) => (
                <div key={art.id} className="py-3 flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-800 truncate">{art.title}</div>
                    <div className="text-xs text-gray-400">{formatDate(art.created_at)}</div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {art.featured && <span className="badge badge-yellow">Featured</span>}
                    <span className={`badge ${art.published ? 'badge-green' : 'badge-gray'}`}>
                      {art.published ? 'Live' : 'Draft'}
                    </span>
                    <Link href={`/admin/articles/${art.id}/edit`} className="text-xs text-blue-600 hover:underline">Edit</Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center">
              <p className="text-sm text-gray-400 mb-3">No articles yet</p>
              <Link href="/admin/articles/new" className="admin-btn admin-btn-gold">Write First Article</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
