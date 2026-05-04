import { createClient } from '@/lib/supabase-server'
import Link from 'next/link'

export const revalidate = 0

export default async function AdminCalculatorLeadsPage() {
  const supabase = await createClient()

  const { data: leads } = await supabase
    .from('calculator_leads')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: 'var(--ink)' }}>
            Calculator Leads
          </h1>
          <p style={{ color: 'var(--ink-muted)' }}>
            {leads?.length || 0} leads submitted
          </p>
        </div>
      </div>

      <div className="border rounded overflow-x-auto" style={{ borderColor: 'var(--border)' }}>
        <table className="w-full text-sm">
          <thead style={{ background: 'var(--dark-2)', borderBottom: '1px solid var(--border)' }}>
            <tr>
              <th className="px-6 py-4 text-left" style={{ color: 'var(--ink-muted)' }}>Email</th>
              <th className="px-6 py-4 text-left" style={{ color: 'var(--ink-muted)' }}>Company Type</th>
              <th className="px-6 py-4 text-left" style={{ color: 'var(--ink-muted)' }}>Activity</th>
              <th className="px-6 py-4 text-left" style={{ color: 'var(--ink-muted)' }}>Visas</th>
              <th className="px-6 py-4 text-left" style={{ color: 'var(--ink-muted)' }}>Office</th>
              <th className="px-6 py-4 text-left" style={{ color: 'var(--ink-muted)' }}>Est. Cost</th>
              <th className="px-6 py-4 text-left" style={{ color: 'var(--ink-muted)' }}>Status</th>
              <th className="px-6 py-4 text-left" style={{ color: 'var(--ink-muted)' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {leads && leads.length > 0 ? (
              leads.map((lead) => (
                <tr key={lead.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-6 py-4" style={{ color: 'var(--ink)' }}>
                    <a href={`mailto:${lead.email}`} style={{ color: 'var(--gold)' }}>
                      {lead.email}
                    </a>
                  </td>
                  <td className="px-6 py-4" style={{ color: 'var(--ink-muted)' }}>
                    {lead.company_type}
                  </td>
                  <td className="px-6 py-4" style={{ color: 'var(--ink-muted)' }}>
                    {lead.activity}
                  </td>
                  <td className="px-6 py-4" style={{ color: 'var(--ink-muted)' }}>
                    {lead.visas}
                  </td>
                  <td className="px-6 py-4" style={{ color: 'var(--ink-muted)' }}>
                    {lead.office}
                  </td>
                  <td className="px-6 py-4" style={{ color: 'var(--gold)' }}>
                    AED {lead.estimated_cost?.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="px-3 py-1 rounded text-xs font-semibold"
                      style={{
                        background: lead.status === 'new' ? 'rgba(201, 160, 96, 0.2)' : 'rgba(76, 175, 80, 0.2)',
                        color: lead.status === 'new' ? 'var(--gold)' : '#4CAF50',
                      }}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs" style={{ color: 'var(--ink-muted)' }}>
                    {new Date(lead.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="px-6 py-8 text-center" style={{ color: 'var(--ink-muted)' }}>
                  No calculator leads yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <Link href="/admin" className="btn btn-outline">
          Back to Admin
        </Link>
      </div>
    </>
  )
}
