import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase-server'

export async function DELETE(request: Request, context: any) {
  const cookie = request.headers.get('cookie') || ''
  if (!cookie.includes('admin_auth=1')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const { id } = context?.params || {}
  try {
    const supabase = createAdminClient()
    const { error } = await supabase.from('enquiries').delete().eq('id', id)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
