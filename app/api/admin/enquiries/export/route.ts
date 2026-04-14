import { createAdminClient } from '@/lib/supabase-server'

export async function GET(request: Request) {
  const cookie = request.headers.get('cookie') || ''
  if (!cookie.includes('admin_auth=1')) {
    return new Response('Unauthorized', { status: 401 })
  }
  const supabase = createAdminClient()
  const { data, error } = await supabase.from('enquiries').select('*').order('created_at', { ascending: false })
  if (error) {
    return new Response('Failed to fetch enquiries: ' + error.message, { status: 500 })
  }
  const headers = ['id','first_name','last_name','email','phone','country','service','message','status','created_at']
  const rows = [headers.join(',')]
  for (const row of data) {
    const line = headers.map(h => {
      const v = row[h] ?? ''
      const s = String(v).replace(/"/g, '""')
      return `"${s}"`
    }).join(',')
    rows.push(line)
  }
  const csv = rows.join('\r\n')
  return new Response(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="enquiries.csv"',
    },
  })
}
