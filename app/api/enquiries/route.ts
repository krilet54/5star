import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createAdminClient } from '@/lib/supabase-server'

const schema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  country: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = schema.parse(body)

    // Helpful runtime info (will appear in server logs)
    try {
      console.info('Enquiry submit — SUPABASE_URL present:', !!process.env.NEXT_PUBLIC_SUPABASE_URL, 'SERVICE_ROLE present:', !!process.env.SUPABASE_SERVICE_ROLE_KEY, 'ANON_KEY present:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    } catch {}

    // Primary: try service-role client first (admin access)
    try {
      const supabase = createAdminClient()
      const { data: inserted, error } = await supabase.from('enquiries').insert([data])
      if (!error) {
        console.info('Enquiry inserted (service role)', inserted?.[0]?.id)
        return NextResponse.json({ success: true }, { status: 201 })
      }
      console.warn('Service-role insert error:', error.message)
    } catch (e: any) {
      console.warn('Service-role insert failed:', e?.message ?? String(e))
    }

    // Fallback: try anon client if available (useful when service role key missing on server)
    try {
      const { createClient } = require('@supabase/supabase-js')
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        throw new Error('Anon fallback missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
      }
      const anon = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
      const { data: fallbackInserted, error: fallbackError } = await anon.from('enquiries').insert([data])
      if (fallbackError) {
        console.error('Anon fallback insert error:', fallbackError)
        throw fallbackError
      }
      console.info('Enquiry inserted (anon fallback)', fallbackInserted?.[0]?.id)
      return NextResponse.json({ success: true, fallback: true }, { status: 201 })
    } catch (e: any) {
      console.error('Enquiry insert failed (all attempts):', e?.message ?? String(e))
      throw e
    }
  } catch (err) {
    console.error('Enquiry error:', err)
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data', details: err.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  // Protected: check admin cookie
  const cookie = request.headers.get('cookie') || ''
  if (!cookie.includes('admin_auth=1')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('enquiries')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
