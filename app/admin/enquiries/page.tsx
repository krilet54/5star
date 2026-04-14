import { createAdminClient } from '@/lib/supabase-server'
import { formatDate } from '@/lib/utils'
import EnquiryStatusToggle from './EnquiryStatusToggle'

export const metadata = { title: 'Enquiries' }

export default async function AdminEnquiriesPage() {
  const supabase = createAdminClient()
  const { data: enquiries } = await supabase
    .from('enquiries')
    .select('*')
    .order('created_at', { ascending: false })

  const newCount = enquiries?.filter(e => e.status === 'new').length ?? 0

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Enquiries</h1>
          <p className="text-sm text-gray-500 mt-1">
            {enquiries?.length ?? 0} total · <span className="text-green-600 font-medium">{newCount} new</span>
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'New', count: enquiries?.filter(e => e.status === 'new').length ?? 0, color: '#22c55e', bg: '#f0fdf4' },
          { label: 'Contacted', count: enquiries?.filter(e => e.status === 'contacted').length ?? 0, color: '#f59e0b', bg: '#fffbeb' },
          { label: 'Closed', count: enquiries?.filter(e => e.status === 'closed').length ?? 0, color: '#6b7280', bg: '#f9fafb' },
        ].map(s => (
          <div key={s.label} className="admin-card flex items-center gap-3">
            <div className="w-3 h-3 rounded-full" style={{ background: s.color }} />
            <div>
              <div className="text-xl font-bold text-gray-900">{s.count}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-card overflow-hidden p-0">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-xs text-gray-500 uppercase tracking-wider" style={{ background: '#f9f9f7', borderColor: '#e5e5e0' }}>
              <th className="text-left px-5 py-3 font-semibold">Name</th>
              <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Contact</th>
              <th className="text-left px-4 py-3 font-semibold hidden lg:table-cell">Service</th>
              <th className="text-left px-4 py-3 font-semibold hidden lg:table-cell">Country</th>
              <th className="text-left px-4 py-3 font-semibold">Date</th>
              <th className="text-left px-5 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y" style={{ borderColor: '#f0f0ec' }}>
            {enquiries && enquiries.length > 0 ? enquiries.map((enq: {
              id: string; first_name: string; last_name?: string;
              email: string; phone?: string; service?: string; country?: string;
              message?: string; status: string; created_at: string
            }) => (
              <tr key={enq.id} className="hover:bg-gray-50 align-top">
                <td className="px-5 py-4">
                  <div className="font-medium text-gray-900">{enq.first_name} {enq.last_name}</div>
                  {enq.message && (
                    <div className="text-xs text-gray-400 mt-1 max-w-[200px] line-clamp-2">{enq.message}</div>
                  )}
                </td>
                <td className="px-4 py-4 hidden md:table-cell">
                  <a href={`mailto:${enq.email}`} className="text-blue-600 hover:underline block text-xs">{enq.email}</a>
                  {enq.phone && (
                    <a href={`tel:${enq.phone}`} className="text-gray-500 text-xs block mt-0.5">{enq.phone}</a>
                  )}
                  {enq.phone && (
                    <a
                      href={`https://wa.me/${enq.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs mt-1 inline-block"
                      style={{ color: '#25D366' }}
                    >
                      WhatsApp →
                    </a>
                  )}
                </td>
                <td className="px-4 py-4 hidden lg:table-cell">
                  {enq.service ? (
                    <span className="badge badge-gray text-xs">{enq.service}</span>
                  ) : <span className="text-gray-300">—</span>}
                </td>
                <td className="px-4 py-4 hidden lg:table-cell text-gray-500 text-xs">{enq.country || '—'}</td>
                <td className="px-4 py-4 text-gray-500 text-xs">{formatDate(enq.created_at)}</td>
                <td className="px-5 py-4">
                  <EnquiryStatusToggle id={enq.id} status={enq.status} />
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={6} className="px-5 py-16 text-center text-gray-400">
                  No enquiries received yet. They will appear here when clients submit the contact form.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
